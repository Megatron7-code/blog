>最近T讯云服务器快要到期了，推了篇优惠页。点开-我的天，1135/年。抢钱啊~

![product.jpg](https://imgconvert.csdnimg.cn/aHR0cDovL2Jsb2ctcmVzLnZtMzIxLmNvbS8xNTg0OTcxODUwNjgzLmpwZw?x-oss-process=image/format,png)
这是要赶人啊，立马去了A里云看看活动。真的是'良心'价啊，220+/3年。转念一想，如果拿这笔钱买台电视盒子刷armbian，岂不美哉。看B站小伙伴和同事纷纷入手了N1，心里痒痒也想买台试试。但是拼夕夕上已经炒成150+，成色差点的矿机要便宜点。
但是搁手里瘫了也没招啊，刚要入手看到还有款外贸盒子性能更强(x96 max)，RAM有4G。
![在这里插入图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2Jsb2ctcmVzLnZtMzIxLmNvbS8yMDIwLTAzLTIzJTIwMjIuMTUuNTUuanBn?x-oss-process=image/format,png)
ROM我选了64G(**到后面才知道，选最小的。因为我是用的是u盘启动，系统能看见那个ROM，但是没有盘符挂载不了,有知道的小伙伴可以告知下怎么弄**)
>如果你不用遥控器，可以和老板商量下再便宜点。估计4G-32G 210块能拿下（+邮费）

接下来就是等待啦
#### 准备事项
* u盘8-16G都行，我用的16G的。开始准备的是sd卡，无奈无法引导
* 网线一根
* windows系统，开始用的parallels虚机，有个软件无法识别u盘作罢
* windows软件：Win32DiskImager
* 镜像地址：https://yadi.sk/d/pHxaRAs-tZiei/20.02/20200205 选一款自己喜欢的，有带桌面的和不带桌面的
* 牙签一根，把尖的掐掉。别怼坏咯

镜像下载下来后，选择镜像文件和对应的设备。（u盘会有提示数据将被覆盖，请提前保存
![在这里插入图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2Jsb2ctcmVzLnZtMzIxLmNvbS9XZWNoYXRJTUc4ODQucG5n?x-oss-process=image/format,png)
好的。u盘引导我们制作完成啦。

#### 安装系统
先上图
![](https://imgconvert.csdnimg.cn/aHR0cDovL2Jsb2ctcmVzLnZtMzIxLmNvbS8yMDIwLTAzLTIzJTIwMjIuMzEuMDAuanBn?x-oss-process=image/format,png)
* 1.首先将u盘插在usb2.0口上
* 2.键盘插在usb3.0的口上
* 3.牙签插在av口里，里面有个reset键。一只手扶住！
* 4.插上电源，过2-3秒把牙签松开
* 5.此时应该能看到开机画面了

#### 系统设置
进入系统后就是各种检测啦，最终会停在登录界面。
第一次输入账号：root
紧接着输入密码：1234
重复输入密码：1234

修改密码：xxxxxx
确认密码：xxxxxx
(**如果我没记错的话，这里还挺绕**）

好啦，接上网线就能连上网啦。尝试ping www.baidu.com,能看到数据包说明连上网了。
```bash
root@aml:/mnt/sd# ping www.baidu.com
PING www.baidu.com (61.135.169.125) 56(84) bytes of data.
64 bytes from 61.135.169.125 (61.135.169.125): icmp_seq=1 ttl=56 time=4.43 ms
64 bytes from 61.135.169.125 (61.135.169.125): icmp_seq=2 ttl=56 time=4.64 ms
```
我这里犯了迷糊，家里的网络结构是：光猫（联通）-》路由器（租房甲方提供的）-》华为路由器（桥接用，家里的智能设备认ssid了，所以接了这么个设备）

我直接用网线连接华为路由器，这样是上不了网的。（**有知道怎么配置的小伙伴请告知下，我研究下**）
* 祝大家玩得愉快，有什么不明白的可以关注我的公号
* 接下来还准备出几期交大家怎么搭建内网穿透，挂载群辉nfs

![在这里插入图片描述](https://imgconvert.csdnimg.cn/aHR0cDovL2Jsb2ctcmVzLnZtMzIxLmNvbS8yMDE5MTExMDEwMDk0OTI0Ni5qcGc?x-oss-process=image/format,png)