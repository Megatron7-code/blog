**利用sed命令、钉钉机器人上报服务器错误日志**

> 后台处理日志一般采用ELK的架构，把日志打到Elasticsearch。有些小流量的应用可以采用直接上报的形式，省去了搭建ELK平台的繁琐。配合钉钉能快速感知。

**实现思路：利用sed命令截取当前周期内产生的日志文件，通过钉钉群机器人上报。**

这里我们用Nginx、php产生的日志做讲解。
截取一段Nginx的错误日志：
```text
2019/11/08 10:28:38 [error] 5136#0: *386932 FastCGI sent in stderr: "PHP message: PHP Deprecated:  Automatically populating $HTTP_RAW_POST_DATA is deprecated and will be removed in a future version. To avoid this warning set 'always_populate_raw_post_data' to '-1' in php.ini and use the php://input stream instead. in Unknown on line 0" while reading response header from upstream"
```
利用sed命令截取，代码如下：
```shell
sed -n '/2019\/11\/08\s10:[0-9][0-9]:[0-9][0-9]\s\[error\]/ p' nginx_error.log
```

截取php-fpm.log的日志
```text
[15-Oct-2019 15:15:10] NOTICE: child 2054 stopped for tracing
[15-Oct-2019 15:15:10] NOTICE: about to trace 2054
[15-Oct-2019 15:15:10] ERROR: failed to ptrace(PEEKDATA) pid 2054: Input/output error (5)
[15-Oct-2019 15:15:10] NOTICE: finished trace of 2054
[15-Oct-2019 15:17:00] WARNING: [pool www] child 2051,
```
利用sed命令截取，代码如下：
```shell
sed -n '/15-Oct-2019\s15:[0-9][0-9]:[0-9][0-9]\]\s[ERROR|WARNING]/ p' php-fpm.log
```

整体shell脚本如下 log_report.sh：
```shell
#!/bin/bash
PHP_LOG_PATH='/var/log/php-fpm.log'
NGINX_LOG_PATH='/var/log/nginx.error.log'
DING_TALK_URL='ding_talk_url'

php_log_process(){
	# 因为服务器改了语言环境，所以这里临时更换了下语言环境
    DATE_TIME=`env LANG=en_US.UTF-8 date +"%d-%b-%Y %H"`
    message=`sed -n '/'${DATE_TIME}':[0-9][0-9]:[0-9][0-9]\]\s[ERROR|WARNING]/ p' ${PHP_LOG_PATH}`
    echo $message
}

nginx_log_process(){
    DATE_TIME=`env LANG=en_US.UTF-8 date +"%Y\/%m\/%d\s%H"`
    message=`sed -n '/'${DATE_TIME}':[0-9][0-9]:[0-9][0-9]\s\[error\]/ p' ${NGINX_LOG_PATH}`
    echo $message
}


main(){
    res=`php_log_process`
    if test -z "$res";then
        echo 'The php log is empty'
    else
        push ${res//\"/-}
    fi

    temp=`nginx_log_process`
    if test -z "$temp";then
        echo 'The nginx log is empty'
    else
        push ${temp//\"/-}
    fi
}

test1(){
    # message=`sed -n '/2019\/11\/06\s16:[0-9][0-9]:[0-9][0-9]\s\[error\]/ p' $NGINX_LOG_PATH`
    # message=`sed -n '/15-Oct-2019\s15:[0-9][0-9]:[0-9][0-9]\]\s[ERROR|WARNING]/ p' $PHP_LOG_PATH`

    DATE_TIME=`env LANG=en_US.UTF-8 date +"%Y\/%m\/%d\s%H"`
    message=`sed -n '/'${DATE_TIME}':[0-9][0-9]:[0-9][0-9]\s\[error\]/ p' ${NGINX_LOG_PATH}`
    # 判断是否有日志内容
    if test -z "$message";then
        echo 'is empty'
    else
        echo ${message//\"/-}
        push ${message//\"/-}
    fi
}

push(){
    curl $DING_TALK_URL \
       -H 'Content-Type: application/json' \
       -d '{"msgtype": "text",
            "text": {
                 "content": "'"$*"'"
            }
          }'
}

if [[ $1 == 'test' ]];then
    test1
else
    main
fi
```

还需配合crontab 任务,这里有个策略就是把任务放在了第59分钟执行，这样就能把之前1小时内产生的日志抓取出来了
```shell
# log report
59 * * * * /bin/sh log_report.sh
```

钉钉添加群聊自定义机器人过程略过。
效果图如下：
![钉钉信息截图](https://img-blog.csdnimg.cn/20191108111526749.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTA3MTE3NTA=,size_16,color_FFFFFF,t_70)
 <center>"欢迎关注我的公众号,一起交流讨论"</center>
 
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20191109215625578.jpg#pic_center) 
