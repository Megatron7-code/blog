**利用redis-lua+python实现接口限流**
>公司目前在市面上有大量的机器在运转。每天对接到服务器就有数百万的请求过来，无形中消耗了带宽和计算资源。可以通过一定的策略来过滤掉部分请求，保证服务器的稳定。

扩展阅读：
1.当然这层逻辑既可以落到接入层，也可以落到业务层。这里为了不影响线上其它业务，保证系统的稳定和代码可追溯。也方便实行最小验证，我把它落在业务层。
2.限流的算法有多种，例如：计数器、令牌桶、漏桶。这次用到的是计数器，也相对简单。

>计数器算法就是在某个时间周期内，接入的请求数自增。超过上限的请求全部抛掉。

#### 1.首先创建lua脚本（ratelimit.lua）

```lua
local key = KEYS[1]
local limit = tonumber(ARGV[1])
local expire_time = ARGV[2]
 
local current = tonumber(redis.call('get', key) or "0")
if current > 0 then
    if current + 1 > limit then
        return 0
    else
        redis.call("INCR", key)
        return 1
    end
else
    redis.call("SET", key, 1)
    redis.call("EXPIRE", key, expire_time)
    return 1
end
```

#### 2.获取lua脚本的摘要
```shell
redis-cli script load "$(cat ratelimit.lua)"
"123456789b24c879d926f3a38cb21a3fd9062e55"
```

#### 3.定义装饰器
```python
# 异步限流策略 2个/10秒
# key_str: 部门:项目:路由:ID  例: a:b:Test:ratelimit:1234
# 装饰器这里的参数都是根据Lua定义的参数来配置的
# sha1: 就是redis-cli script load "$(cat ratelimit.lua)"的返回值
# 1: 表示key的个数
# limit: 限制次数
# expire: key过期时间
 
def async_ratelimit(key_str, limit=2, expire=10, sha1="123456789b24c879d926f3a38cb21a3fd9062e55"):
    def decorator(func):
        async def wrap(*args, **kw):
            self = args[0]
            key = key_str % (self.__class__.__name__, func.__name__, self.get_argument('id'))
            raw = redis.evalsha(sha1, 1, key, limit, expire)
            if raw == 0:
                return self.send_json(errcode=10001, errmsg='接口请求频率过高')
            else:
                await func(*args, **kw)
        return wrap
    return decorator
```

#### 示例
```python
@async_ratelimit('a:b:%s:%s:%s')
async def ratelimit(self, method):
    try:
        mac_id = self.get_argument('id')
    except Exception as e:
        logging.error(e)
        return self.send_json(errcode=10001)
    return self.send_json()
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191117160315988.png)
<center>"添加小柒老师，进群共同学习技术</center>

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191120201425731.jpeg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTA3MTE3NTA=,size_16,color_FFFFFF,t_70#pic_center)


