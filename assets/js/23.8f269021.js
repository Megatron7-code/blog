(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{272:function(s,t,a){"use strict";a.r(t);var n=a(28),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("最近T讯云服务器快要到期了，推了篇优惠页。点开-我的天，1135/年。抢钱啊~")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cDovL2Jsb2ctcmVzLnZtMzIxLmNvbS8xNTg0OTcxODUwNjgzLmpwZw?x-oss-process=image/format,png",alt:"product.jpg"}}),s._v("\n这是要赶人啊，立马去了A里云看看活动。真的是'良心'价啊，220+/3年。转念一想，如果拿这笔钱买台电视盒子刷armbian，岂不美哉。看B站小伙伴和同事纷纷入手了N1，心里痒痒也想买台试试。但是拼夕夕上已经炒成150+，成色差点的矿机要便宜点。\n但是搁手里瘫了也没招啊，刚要入手看到还有款外贸盒子性能更强(x96 max)，RAM有4G。\n"),a("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cDovL2Jsb2ctcmVzLnZtMzIxLmNvbS8yMDIwLTAzLTIzJTIwMjIuMTUuNTUuanBn?x-oss-process=image/format,png",alt:"在这里插入图片描述"}}),s._v("\nROM我选了64G("),a("strong",[s._v("到后面才知道，选最小的。因为我是用的是u盘启动，系统能看见那个ROM，但是没有盘符挂载不了,有知道的小伙伴可以告知下怎么弄")]),s._v(")")]),s._v(" "),a("blockquote",[a("p",[s._v("如果你不用遥控器，可以和老板商量下再便宜点。估计4G-32G 210块能拿下（+邮费）")])]),s._v(" "),a("p",[s._v("接下来就是等待啦")]),s._v(" "),a("h4",{attrs:{id:"准备事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备事项"}},[s._v("#")]),s._v(" 准备事项")]),s._v(" "),a("ul",[a("li",[s._v("u盘8-16G都行，我用的16G的。开始准备的是sd卡，无奈无法引导")]),s._v(" "),a("li",[s._v("网线一根")]),s._v(" "),a("li",[s._v("windows系统，开始用的parallels虚机，有个软件无法识别u盘作罢")]),s._v(" "),a("li",[s._v("windows软件：Win32DiskImager")]),s._v(" "),a("li",[s._v("镜像地址：https://yadi.sk/d/pHxaRAs-tZiei/20.02/20200205 选一款自己喜欢的，有带桌面的和不带桌面的")]),s._v(" "),a("li",[s._v("牙签一根，把尖的掐掉。别怼坏咯")])]),s._v(" "),a("p",[s._v("镜像下载下来后，选择镜像文件和对应的设备。（u盘会有提示数据将被覆盖，请提前保存\n"),a("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cDovL2Jsb2ctcmVzLnZtMzIxLmNvbS9XZWNoYXRJTUc4ODQucG5n?x-oss-process=image/format,png",alt:"在这里插入图片描述"}}),s._v("\n好的。u盘引导我们制作完成啦。")]),s._v(" "),a("h4",{attrs:{id:"安装系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装系统"}},[s._v("#")]),s._v(" 安装系统")]),s._v(" "),a("p",[s._v("先上图\n"),a("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cDovL2Jsb2ctcmVzLnZtMzIxLmNvbS8yMDIwLTAzLTIzJTIwMjIuMzEuMDAuanBn?x-oss-process=image/format,png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("1.首先将u盘插在usb2.0口上")]),s._v(" "),a("li",[s._v("2.键盘插在usb3.0的口上")]),s._v(" "),a("li",[s._v("3.牙签插在av口里，里面有个reset键。一只手扶住！")]),s._v(" "),a("li",[s._v("4.插上电源，过2-3秒把牙签松开")]),s._v(" "),a("li",[s._v("5.此时应该能看到开机画面了")])]),s._v(" "),a("h4",{attrs:{id:"系统设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统设置"}},[s._v("#")]),s._v(" 系统设置")]),s._v(" "),a("p",[s._v("进入系统后就是各种检测啦，最终会停在登录界面。\n第一次输入账号：root\n紧接着输入密码：1234\n重复输入密码：1234")]),s._v(" "),a("p",[s._v("修改密码：xxxxxx\n确认密码：xxxxxx\n("),a("strong",[s._v("如果我没记错的话，这里还挺绕")]),s._v("）")]),s._v(" "),a("p",[s._v("好啦，接上网线就能连上网啦。尝试ping www.baidu.com,能看到数据包说明连上网了。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("root@aml:/mnt/sd"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ping www.baidu.com")]),s._v("\nPING www.baidu.com "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("61.135")]),s._v(".169.125"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("84")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" bytes of data.\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("61.135")]),s._v(".169.125 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("61.135")]),s._v(".169.125"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.43")]),s._v(" ms\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" bytes from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("61.135")]),s._v(".169.125 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("61.135")]),s._v(".169.125"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("icmp_seq")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.64")]),s._v(" ms\n")])])]),a("p",[s._v("我这里犯了迷糊，家里的网络结构是：光猫（联通）-》路由器（租房甲方提供的）-》华为路由器（桥接用，家里的智能设备认ssid了，所以接了这么个设备）")]),s._v(" "),a("p",[s._v("我直接用网线连接华为路由器，这样是上不了网的。（"),a("strong",[s._v("有知道怎么配置的小伙伴请告知下，我研究下")]),s._v("）")]),s._v(" "),a("ul",[a("li",[s._v("祝大家玩得愉快，有什么不明白的可以关注我的公号")]),s._v(" "),a("li",[s._v("接下来还准备出几期交大家怎么搭建内网穿透，挂载群辉nfs")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cDovL2Jsb2ctcmVzLnZtMzIxLmNvbS8yMDE5MTExMDEwMDk0OTI0Ni5qcGc?x-oss-process=image/format,png",alt:"在这里插入图片描述"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);