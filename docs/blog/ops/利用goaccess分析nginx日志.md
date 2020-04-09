> 日常运维中服务器积累了大量的nginx访问日志，可以利用goaccess分析数据。

找出一些有价值的线索。

* 1.使用设备占比（针对优化，可以很硬气的说我们不需要优化IE6，因为没有目标用户
* 2.找出人群分布，优化机器向所在地部署。加速访问
* 3.访问频率高的文件、接口，是否需要拆分
* 4.筛选爬虫特征（过滤掉

结合现有的业务进行分析。。。

goaccess提供了终端显示、HTML、csv等访问数据的方式。
这里依次讲解使用细则。（安装步骤省略，请自行百度）

首先放出一张网络结构图。
![网络结构示意图](https://imgconvert.csdnimg.cn/aHR0cDovL2Jsb2ctcmVzLnZtMzIxLmNvbS8xNTg2Mzk2ODI4MDQ1LmpwZw?x-oss-process=image/format,png)
#### 生成HTML

>这里的实现思路是把分布在多台机器上的日志汇总到一起，来进行分析。
>这里涉及到：logrotate、nginx access_log配置、scp、rsyslog(放弃，依赖性比较强)、goaccess常规命令

```bash
#!/bin/bash
# 数据已脱敏
LOCK_NAME="/tmp/my.lock"
if ( set -o noclobber; echo "$$" > "$LOCK_NAME") 2> /dev/null;
then
trap 'rm -f "$LOCK_NAME"; exit $?' INT TERM EXIT

DATE_TIME=`date +"%Y%m%d"`
P_INDEX=0
echo -e "\033[32m1.开始拉取各平台日志\033[0m";
for i in "10.0.0.1" "10.0.0.2" "10.0.0.3"
do
  ((P_INDEX++))
  scp work@$i:/nginx_access.log-${DATE_TIME}.gz nginx_access-${DATE_TIME}-$P_INDEX.gz
done

cd goaccess
echo -e "\033[32m2.开始处理日志\033[0m";

zcat nginx_access-${DATE_TIME}-*.gz goaccess-1.3/goaccess -p goaccess.conf -o ./nginx_access_${DATE_TIME}.html -

source ./nginx_request_log.sh
echo -e "\033[32m3.开始同步html\033[0m";
scp nginx_access_${DATE_TIME}.html work@10.0.0.8:/goaccess
rm -rf nginx_access-${DATE_TIME}*

rm -f $LOCK_NAME
trap - INT TERM EXIT
else
echo "Failed to acquire lockfile: $LOCK_NAME."
echo "Held by $(cat $LOCK_NAME)"
exit 1
fi
```

这样在10.0.0.8机器挂上nginx就能访问了。
![](https://imgconvert.csdnimg.cn/aHR0cDovL2Jsb2ctcmVzLnZtMzIxLmNvbS8xNTg2Mzk3NDQwNTE4LmpwZw?x-oss-process=image/format,png)
#### 终端显示
终端显示的话就比较简单了

```bash
/usr/bin/goaccess -f access.log
```
![](https://imgconvert.csdnimg.cn/aHR0cDovL2Jsb2ctcmVzLnZtMzIxLmNvbS8xNTg2Mzk3NzY4MjYzLmpwZw?x-oss-process=image/format,png)
>利用webshell也可以把内容打到web浏览器上，方便查看

#### csv格式的运用
我们把csv格式的数据导出后，存进db。这样方便对每日的数据进行归总，查询流量趋势。
当然也可以自行设计报表，方便统计。

> 实现上和HTML的处理差不多，把最终得到的CSV格式的数据通过脚本打到web应用。
> 进行持久化，当然纯shell也是可以直接操作DB的。

```bash
# shell中直接通过命令行导入csv
load data infile '需要导入的文件全名' into table 将要导入的数据库表名 fields terminated by '列的分隔符' optionally enclosed by '"' escaped by '"' lines terminated by '回车换行符';
```

```bash
# 采用shell发送http的形式是考虑到db接入层一致的问题
#!/bin/bash

DATE_TIME=`date +"%Y%m%d"`
DEBUG=0

if [[ $DEBUG == 1 ]];then
    echo 'test env'
    HOST='http://127.0.0.1/webserver'
    nginx_request_log='nginx_access_test.csv'
else
    echo 'prod env'
    # 这里最好使用内网域名，以免机器迁移访问失效
    HOST='http://10.0.0.7/webserver'
    nginx_request_log='nginx_access_"$DATE_TIME".csv'
fi


function http_post(){
    curl -X POST \
    $HOST \
    -H 'Content-Type: application/json' \
    -d "$*"
}

if [ -f $nginx_request_log ]; then
    str=''
    for line in `cat $nginx_request_log|grep requests|grep -vE "(static_requests|general)"|awk -F '","' '{OFS=",";print $1,$2,$3,$4,$5}'`
    do
        # 数据处理
    done
    str=${str%?}
    str="[$str]"
    http_post $str
else
    echo 'nginx_request_log not exists'
fi
```

![关注公号，领取学习资料](https://imgconvert.csdnimg.cn/aHR0cDovL2Jsb2ctcmVzLnZtMzIxLmNvbS8yMDE5MTExMDEwMDk0OTI0Ni5qcGc?x-oss-process=image/format,png#pic_center)
<center>关注公号，领取学习资料</center>