**shell 常用知识汇总**
>这里整理了一份shell常用语法，方便复习。

* $(cmd)只输出标准输入，如果命令执行错误，则无输出
* $((expr))用于执行数学运算
* $?返回上一条命令的执行结果 

#### 1.输入输出重定向
- 标准输入重定向（STDIN，文件描述符为0）：默认从键盘输入，也可从其他文件或命令中输入。
- 标准输出重定向（STDOUT，文件描述符为1）：默认输出到屏幕。
- 错误输出重定向（STDERR，文件描述符为2）：默认输出到屏幕。

- 符号	作用 命令 < 文件	将文件作为命令的标准输入 
    * 命令 << 分界符	从标准输入中读入，直到遇见分界符才停止 
    * 命令 < 文件1 > 文件2	将文件1作为命令的标准输入并将标准输出到文件2
-  符号	作用 命令 > 文件	将标准输出重定向到一个文件中（清空原有文件的数据） 
    * 命令 2> 文件	将错误输出重定向到一个文件中（清空原有文件的数据） 
    * 命令 >> 文件	将标准输出重定向到一个文件中（追加到原有内容的后面） 
    * 命令 2>> 文件	将错误输出重定向到一个文件中（追加到原有内容的后面） 
    * 命令 >> 文件 2>&1 或 命令 &>> 文件
    
#### 2.常用的转移字符
* 反斜杠（\）：使反斜杠后面的一个变量变为单纯的字符串。
* 单引号（''）：转义其中所有的变量为单纯的字符串。
* 双引号（""）：保留其中的变量属性，不进行转义处理。
* 反引号（``）：把其中的命令执行后返回结果。


#### 3.流程控制语句[if,else, for, while, case]:
```shell
# if/else: 
    if [[ condition ]]; then
        do some thing;
    elif [[ condition ]]; then
        do some thing;
    else
        do some thing;
    fi;
```

```shell 
# for:
    for i in $(seq 10); do
        do some thing;
    done;   
```

```shell 
# while:
    i=10;
    while [[ $i -gt 5 ]];do
        echo $i;
        ((i--));
    done;
```

```shell 
# case:
    case $1 in
    start | begin)
        echo "start something"  
        ;;
    stop | end)
        echo "stop something"  
        ;;
    *)
        echo "Ignorant"  
        ;;
    esac
```

#### 前台、后台任务：
* & 标识将命令放入后台执行，不占用终端显示。
* jobs 能看到所有前、后台命令。
* ctrl + z 可以把任务转移到后台，并且暂停执行。
* fg 将后台的命令调至前台。
* bg 将一个后台的命令变成继续执行。

#### 经验之谈：
- 在过滤的时候会用到grep, 但是如果不忽略自身脚本继而执行某些（删除）命令，会把当前脚本杀掉。
    * ps aux|grep sqlpad|grep -v grep|grep -v $0|awk '{print $2}'|xargs kill -9
- 不想在终端看到命令的输出可以把输出重定向到/dev/null
    * cmd > /dev/null 2>&1 &
- 启动脚本是一个'全新的环境', 这里面没有定义好的alias。环境变量，得提前在脚本中定义或给全目标路径。
    * 这里所谓的'全新的环境'不够严谨，其实和脚本启动后。执行的shell环境有关，这里没有加载用户的~/.bash_profile文件。
    * 具体的加载顺序可以参照网文

#### 单元测试：
- shUnit2是一个为bash shell脚本设计的xUnit类型的单元测试框，[参考网文](https://www.jianshu.com/p/8a9782528c65)
    * 有个demo在publish/test, 部分接口有写单元测试

func_check_file:
    -x 是否存在且可执行
    -d 路径是否存在
    -f 文件是否存在
    
    
#### 参考网文：
* [1.流程控制语句](https://www.cnblogs.com/chengmo/archive/2010/10/14/1851434.html)
* [2.条件语句及[][[]]的含义](https://www.cnblogs.com/chengmo/archive/2010/10/01/1839942.html)
* [3.常用命令查询](https://man.linuxde.net)

<center>"添加小柒老师，进群共同学习技术"</center>

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191120203007808.jpeg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTA3MTE3NTA=,size_16,color_FFFFFF,t_70#pic_center)


