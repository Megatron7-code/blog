(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{269:function(s,t,r){"use strict";r.r(t);var a=r(28),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("blockquote",[r("p",[s._v("在使用Linux中，我们经常遇到Permisson denied错误。是不是一股脑的加上sudo或者切换root用户继续执行，没有理解背后的逻辑。今天就来掰扯掰扯Linux的DAC（Discretionary Access Control,自主访问控制）。")])]),s._v(" "),r("p",[r("strong",[s._v("Tips:本文所引用的关键性名词、内容归类可能会与标准所不同。请灵活理解")])]),s._v(" "),r("p",[s._v("在Nginx的使用过程中或执行某些命令（rm -f）,经常性的遇见Permisson denied。这让我很苦恼，就算我把默认rwx普通权限弄明白，还是会遇到这类问题。那就是问题已经超出的我的认知了，需要我进一步探究了。")]),s._v(" "),r("h4",{attrs:{id:"普通权限"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#普通权限"}},[s._v("#")]),s._v(" 普通权限")]),s._v(" "),r("blockquote",[r("p",[s._v("普通权限划分为：rwx,分别用421表示。4对应r（可读）,2对应w（写入）,1对应x（执行）。rwx共有3组。第一组表示：所属者的权限。第二组表示：所属组的权限。第三组表示：其它用户的权限。\nrwx作用于文件和文件夹的效果是不一样的。")])]),s._v(" "),r("table",[r("thead",[r("tr",[r("th"),s._v(" "),r("th",[s._v("r")]),s._v(" "),r("th",[s._v("w")]),s._v(" "),r("th",[s._v("x")])])]),s._v(" "),r("tbody",[r("tr",[r("td",[s._v("文件")]),s._v(" "),r("td",[s._v("表示可以读取文件的内容")]),s._v(" "),r("td",[s._v("表示可以新增、修改文件的内容")]),s._v(" "),r("td",[s._v("表示文件可以被执行")])]),s._v(" "),r("tr",[r("td",[s._v("文件夹")]),s._v(" "),r("td",[s._v("可以查看文件夹下的目录结构")]),s._v(" "),r("td",[s._v("可以新增、修改、移动、删除其中的文件和文件夹")]),s._v(" "),r("td",[s._v("表示用户可以进入文件夹")])])])]),s._v(" "),r("h5",{attrs:{id:"举个例子"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#举个例子"}},[s._v("#")]),s._v(" 举个例子:")]),s._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM_0_10_centos ~"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# su work")]),s._v("\nbash-4.1$ ll\nbash: ll: "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" not found\nbash-4.1$ "),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nls: 无法打开目录.: 权限不够\nbash-4.1$ "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n/root\nbash-4.1$ "),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -ahld /root\ndr-xr-x---. "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" root root "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".0K "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("月  "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":39 /root\n")])])]),r("p",[s._v("这里/root目录显示的\n所属者为：root，权限为：r-x,\n所属组为: root, 权限为：r-x,\n其它者权限为：---")]),s._v(" "),r("p",[s._v("可以理解成：\n(当然root超级管理员可以无视权限，它是在DAC之上)")]),s._v(" "),r("ul",[r("li",[s._v("1.root用户可以读取/root目录下的内容，ls命令。可以进入/root目录, cd命令")]),s._v(" "),r("li",[s._v("2.root组的用户可以同样享有同样的权利。")]),s._v(" "),r("li",[s._v("3.其它用户没有权利对/root对任何事")])]),s._v(" "),r("h5",{attrs:{id:"改变目录、文件权限。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#改变目录、文件权限。"}},[s._v("#")]),s._v(" 改变目录、文件权限。")]),s._v(" "),r("table",[r("thead",[r("tr",[r("th",[s._v("命令")]),s._v(" "),r("th",[s._v("含义")]),s._v(" "),r("th",[s._v("示例")])])]),s._v(" "),r("tbody",[r("tr",[r("td",[s._v("chown")]),s._v(" "),r("td",[s._v("主要用户修改文件、目录的所属者")]),s._v(" "),r("td",[s._v("chown [-R] work /home/work/test")])]),s._v(" "),r("tr",[r("td",[s._v("chgrp")]),s._v(" "),r("td",[s._v("用来修改文件、目录的所属组")]),s._v(" "),r("td",[s._v("chgrp [-R] work /home/work/demo")])]),s._v(" "),r("tr",[r("td",[s._v("chmod")]),s._v(" "),r("td",[s._v("可以修改权限范围")]),s._v(" "),r("td",[s._v("chmod [-R] 755 /home/work/temp")])])])]),s._v(" "),r("h4",{attrs:{id:"默认权限"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#默认权限"}},[s._v("#")]),s._v(" 默认权限")]),s._v(" "),r("blockquote",[r("p",[s._v("在新建文件、目录的时候，是不是系统都会赋予该文件、目录一定的权限。这里就是默认权限在起作用。")])]),s._v(" "),r("p",[s._v("新建的文件权限 = 666（文件的最大默认权限）- umask\n新建的目录权限 = 777（目录的最大默认权限）- umask")]),s._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM_0_10_centos test"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# umask")]),s._v("\n0022\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 第一个0表示特殊权限(接下来会讲),022代表基础权限。用上面的知识来套")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM_0_10_centos test"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# touch demo.txt # 新建文件")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM_0_10_centos test"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir temp # 新建目录")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM_0_10_centos test"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls -al")]),s._v("\n总用量 "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n-rw-r--r-- "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root    "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("月  "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":05 demo.txt\ndrwxr-xr-x "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" root root "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("月  "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":05 temp\ndemo.txt "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("666")]),s._v(" - 022 "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" rw-rw-rw- - ----w--w- "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" rw-r--r--\ntemp     "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" - 022 "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" rwxrwxrwx - ----w--w- "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" rwxr-xr-x\n")])])]),r("p",[s._v("Tips:")]),s._v(" "),r("ul",[r("li",[s._v("umask的作用是与最大权限进行遮罩操作，去掉的是最大权限里有的权限。不能凭空多出比最大权限还要高的权限。")]),s._v(" "),r("li",[s._v("umask=033, 666 - 033 = 633 这是错误的理解。")]),s._v(" "),r("li",[s._v("demo.txt = 666 - 033 => rw-rw-rw- - ----wx-wx => rw-r--r-- => 644")]),s._v(" "),r("li",[s._v("最大权限里没有x权限，权限只能降，不能升。")])]),s._v(" "),r("h4",{attrs:{id:"特殊权限"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特殊权限"}},[s._v("#")]),s._v(" 特殊权限")]),s._v(" "),r("blockquote",[r("p",[s._v("为什么/etc/passwd文件其它用户没有写的权利，却可以通过passwd命令来操作里面的数据呢")])]),s._v(" "),r("h5",{attrs:{id:"suid"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#suid"}},[s._v("#")]),s._v(" SUID")]),s._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM_0_10_centos test"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll /usr/bin/passwd")]),s._v("\n-rwsr-xr-x. "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("30768")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("月  "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2012")]),s._v(" /usr/bin/passwd\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM_0_10_centos test"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll /etc/passwd")]),s._v("\n-rw-r--r-- "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("1191")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("月 "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":32 /etc/passwd\n")])])]),r("p",[s._v("这是因为/usr/bin/passwd 有特殊权限，rwsr-xr-x。")]),s._v(" "),r("ul",[r("li",[r("strong",[s._v("作用于文件：这里的s表示运行该命令的时候是以root用户来执行这个命令")])]),s._v(" "),r("li",[s._v("为文件添加suid, 例：chown u+s /home/work/temp.sh")])]),s._v(" "),r("h5",{attrs:{id:"sgid"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sgid"}},[s._v("#")]),s._v(" SGID")]),s._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[s._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM_0_10_centos test"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod g+s temp")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM_0_10_centos test"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll")]),s._v("\n总用量 "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n-rw-r--r-- "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root    "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("月  "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":05 demo.txt\ndrwxr-sr-x "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" root root "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("月  "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":05 temp\n")])])]),r("p",[s._v("rwxr-sr-x，")]),s._v(" "),r("ul",[r("li",[r("strong",[s._v("作用于文件：表示用户执行这个文件的权限提升为文件所属者的权限\n作用于文件夹：这里的s表示用户在进入这个目录的时候权限提升为文件夹所属组的权限")])])]),s._v(" "),r("h5",{attrs:{id:"sbit"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sbit"}},[s._v("#")]),s._v(" SBIT")]),s._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[s._v("bash-4.1$ "),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -ahl /tmp\n总用量 52K\ndrwxrwxrwt.  "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" root     root     "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".0K "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("月  "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":35 "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\ndr-xr-xr-x. "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" root     root     "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".0K "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("月  "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":44 "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\nsrwxrwxrwx   "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root     root        "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("月  "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2015")]),s._v(" agent_cmd.sock\ndrwxr-xr-x   "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" root     root     "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".0K "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("月   "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v(" falcon-plus\ndrwxr-xr-x   "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" logstash logstash "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".0K "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("月  "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":33 hsperfdata_logstash\ndrwxrwxrwt   "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" root     root     "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".0K "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("月  "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":25 .ICE-unix\ndrwxrwxrwx   "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" logstash logstash "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".0K "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("月  "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":29 jruby-24492\ndrwxr-xr-x   "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" logstash logstash "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".0K "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("月  "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":29 jruby-24573\ndrwxr-xr-x   "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" logstash logstash "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".0K "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("月  "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":30 jruby-24708\ndrwxr-xr-x   "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" logstash logstash "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".0K "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("月  "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":30 jruby-24828\nsrwxrwxrwx   "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" mysql    mysql       "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("月  "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":25 mysql.sock\n-rw-r--r--   "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root     root      "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("140")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("月  "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":25 net_affinity.log\n-rw-r--r--   "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root     root       "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("月  "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":44 "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),r("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("\n-rw-r--r--   "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root     root      "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("178")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("月  "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":25 setRps.log\nbash-4.1$ "),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /tmp/jruby-24492/\nrm: 无法删除"),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/tmp/jruby-24492"')]),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" 不允许的操作\n")])])]),r("p",[s._v("仔细看.目录（当前目录）的权限是：rwxrwxrwt，表示只有该文件的所属用户才能对该文件、文件夹进行删除、修改\n所以哪怕/tmp/jruby-24492文件的权限为rwxrwxrwx(777),都是没法删除的")]),s._v(" "),r("p",[s._v("扩展阅读：")]),s._v(" "),r("ul",[r("li",[s._v("1.Linux ACL权限控制")]),s._v(" "),r("li",[s._v("2.SELinux MAC权限控制")])])])}),[],!1,null,null,null);t.default=n.exports}}]);