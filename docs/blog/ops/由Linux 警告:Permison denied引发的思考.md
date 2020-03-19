>在使用Linux中，我们经常遇到Permisson denied错误。是不是一股脑的加上sudo或者切换root用户继续执行，没有理解背后的逻辑。今天就来掰扯掰扯Linux的DAC（Discretionary Access Control,自主访问控制）。

**Tips:本文所引用的关键性名词、内容归类可能会与标准所不同。请灵活理解**

在Nginx的使用过程中或执行某些命令（rm -f）,经常性的遇见Permisson denied。这让我很苦恼，就算我把默认rwx普通权限弄明白，还是会遇到这类问题。那就是问题已经超出的我的认知了，需要我进一步探究了。

## 普通权限
>普通权限划分为：rwx,分别用421表示。4对应r（可读）,2对应w（写入）,1对应x（执行）。rwx共有3组。第一组表示：所属者的权限。第二组表示：所属组的权限。第三组表示：其它用户的权限。
>rwx作用于文件和文件夹的效果是不一样的。

||r|w|x|
|--|--|--|--|
|文件|表示可以读取文件的内容|表示可以新增、修改文件的内容|表示文件可以被执行|
|文件夹|可以查看文件夹下的目录结构|可以新增、修改、移动、删除其中的文件和文件夹|表示用户可以进入文件夹|

### 举个例子:
```bash
[root@VM_0_10_centos ~]# su work
bash-4.1$ ll
bash: ll: command not found
bash-4.1$ ls
ls: 无法打开目录.: 权限不够
bash-4.1$ pwd
/root
bash-4.1$ ls -ahld /root
dr-xr-x---. 18 root root 4.0K 3月  19 13:39 /root
```
这里/root目录显示的
所属者为：root，权限为：r-x,
所属组为: root, 权限为：r-x,
其它者权限为：---

可以理解成：
(当然root超级管理员可以无视权限，它是在DAC之上)
* 1.root用户可以读取/root目录下的内容，ls命令。可以进入/root目录, cd命令
* 2.root组的用户可以同样享有同样的权利。
* 3.其它用户没有权利对/root对任何事

### 改变目录、文件权限。
|命令  | 含义 |示例|
|--|--|--|
| chown | 主要用户修改文件、目录的所属者 |chown [-R] work /home/work/test|
|chgrp|用来修改文件、目录的所属组|chgrp [-R] work /home/work/demo|
|chmod|可以修改权限范围|chmod [-R] 755 /home/work/temp|

## 默认权限
>在新建文件、目录的时候，是不是系统都会赋予该文件、目录一定的权限。这里就是默认权限在起作用。

新建的文件权限 = 666（文件的最大默认权限）- umask
新建的目录权限 = 777（目录的最大默认权限）- umask
```bash
[root@VM_0_10_centos test]# umask
0022
# 第一个0表示特殊权限(接下来会讲),022代表基础权限。用上面的知识来套
[root@VM_0_10_centos test]# touch demo.txt # 新建文件
[root@VM_0_10_centos test]# mkdir temp # 新建目录
[root@VM_0_10_centos test]# ls -al
总用量 4
-rw-r--r-- 1 root root    0 3月  19 14:05 demo.txt
drwxr-xr-x 2 root root 4096 3月  19 14:05 temp
demo.txt = 666 - 022 => rw-rw-rw- - ----w--w- => rw-r--r--
temp     = 777 - 022 => rwxrwxrwx - ----w--w- => rwxr-xr-x
```
Tips:
* umask的作用是与最大权限进行遮罩操作，去掉的是最大权限里有的权限。不能凭空多出比最大权限还要高的权限。
* umask=033, 666 - 033 = 633 这是错误的理解。
* demo.txt = 666 - 033 => rw-rw-rw- - ----wx-wx => rw-r--r-- => 644
* 最大权限里没有x权限，权限只能降，不能升。

## 特殊权限
>为什么/etc/passwd文件其它用户没有写的权利，却可以通过passwd命令来操作里面的数据呢

### SUID
```bash
[root@VM_0_10_centos test]# ll /usr/bin/passwd
-rwsr-xr-x. 1 root root 30768 2月  22 2012 /usr/bin/passwd
[root@VM_0_10_centos test]# ll /etc/passwd
-rw-r--r-- 1 root root 1191 12月 23 13:32 /etc/passwd
```

这是因为/usr/bin/passwd 有特殊权限，rwsr-xr-x。
* **作用于文件：这里的s表示运行该命令的时候是以root用户来执行这个命令**
* 为文件添加suid, 例：chown u+s /home/work/temp.sh

### SGID
```bash

[root@VM_0_10_centos test]# chmod g+s temp
[root@VM_0_10_centos test]# ll
总用量 4
-rw-r--r-- 1 root root    0 3月  19 14:05 demo.txt
drwxr-sr-x 2 root root 4096 3月  19 14:05 temp
```
rwxr-sr-x， 
* **作用于文件：表示用户执行这个文件的权限提升为文件所属者的权限
作用于文件夹：这里的s表示用户在进入这个目录的时候权限提升为文件夹所属组的权限**

### SBIT
```bash
bash-4.1$ ls -ahl /tmp
总用量 52K
drwxrwxrwt.  9 root     root     4.0K 3月  19 13:35 .
dr-xr-xr-x. 24 root     root     4.0K 3月  19 14:44 ..
srwxrwxrwx   1 root     root        0 12月  4 2015 agent_cmd.sock
drwxr-xr-x   3 root     root     4.0K 4月   3 2019 falcon-plus
drwxr-xr-x   2 logstash logstash 4.0K 3月  13 10:33 hsperfdata_logstash
drwxrwxrwt   2 root     root     4.0K 3月  12 10:25 .ICE-unix
drwxrwxrwx   2 logstash logstash 4.0K 3月  13 10:29 jruby-24492
drwxr-xr-x   2 logstash logstash 4.0K 3月  13 10:29 jruby-24573
drwxr-xr-x   2 logstash logstash 4.0K 3月  13 10:30 jruby-24708
drwxr-xr-x   2 logstash logstash 4.0K 3月  13 10:30 jruby-24828
srwxrwxrwx   1 mysql    mysql       0 3月  12 10:25 mysql.sock
-rw-r--r--   1 root     root      140 3月  12 10:25 net_affinity.log
-rw-r--r--   1 root     root       14 3月  19 14:44 .PATH
-rw-r--r--   1 root     root      178 3月  12 10:25 setRps.log
bash-4.1$ rm -rf /tmp/jruby-24492/
rm: 无法删除"/tmp/jruby-24492": 不允许的操作
```
仔细看.目录（当前目录）的权限是：rwxrwxrwt，表示只有该文件的所属用户才能对该文件、文件夹进行删除、修改
所以哪怕/tmp/jruby-24492文件的权限为rwxrwxrwx(777),都是没法删除的

扩展阅读：
* 1.Linux ACL权限控制
* 2.SELinux MAC权限控制
