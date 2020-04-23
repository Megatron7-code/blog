(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{265:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("strong",[t._v("shell 常用知识汇总")])]),t._v(" "),a("blockquote",[a("p",[t._v("这里整理了一份shell常用语法，方便复习。")])]),t._v(" "),a("ul",[a("li",[t._v("$(cmd)只输出标准输入，如果命令执行错误，则无输出")]),t._v(" "),a("li",[t._v("$((expr))用于执行数学运算")]),t._v(" "),a("li",[t._v("$?返回上一条命令的执行结果")])]),t._v(" "),a("h4",{attrs:{id:"_1-输入输出重定向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-输入输出重定向"}},[t._v("#")]),t._v(" 1.输入输出重定向")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("标准输入重定向（STDIN，文件描述符为0）：默认从键盘输入，也可从其他文件或命令中输入。")])]),t._v(" "),a("li",[a("p",[t._v("标准输出重定向（STDOUT，文件描述符为1）：默认输出到屏幕。")])]),t._v(" "),a("li",[a("p",[t._v("错误输出重定向（STDERR，文件描述符为2）：默认输出到屏幕。")])]),t._v(" "),a("li",[a("p",[t._v("符号\t作用 命令 < 文件\t将文件作为命令的标准输入")]),t._v(" "),a("ul",[a("li",[t._v("命令 << 分界符\t从标准输入中读入，直到遇见分界符才停止")]),t._v(" "),a("li",[t._v("命令 < 文件1 > 文件2\t将文件1作为命令的标准输入并将标准输出到文件2")])])]),t._v(" "),a("li",[a("p",[t._v("符号\t作用 命令 > 文件\t将标准输出重定向到一个文件中（清空原有文件的数据）")]),t._v(" "),a("ul",[a("li",[t._v("命令 2> 文件\t将错误输出重定向到一个文件中（清空原有文件的数据）")]),t._v(" "),a("li",[t._v("命令 >> 文件\t将标准输出重定向到一个文件中（追加到原有内容的后面）")]),t._v(" "),a("li",[t._v("命令 2>> 文件\t将错误输出重定向到一个文件中（追加到原有内容的后面）")]),t._v(" "),a("li",[t._v("命令 >> 文件 2>&1 或 命令 &>> 文件")])])])]),t._v(" "),a("h4",{attrs:{id:"_2-常用的转移字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-常用的转移字符"}},[t._v("#")]),t._v(" 2.常用的转移字符")]),t._v(" "),a("ul",[a("li",[t._v("反斜杠（\\）：使反斜杠后面的一个变量变为单纯的字符串。")]),t._v(" "),a("li",[t._v("单引号（''）：转义其中所有的变量为单纯的字符串。")]),t._v(" "),a("li",[t._v('双引号（""）：保留其中的变量属性，不进行转义处理。')]),t._v(" "),a("li",[t._v("反引号（``）：把其中的命令执行后返回结果。")])]),t._v(" "),a("h4",{attrs:{id:"_3-流程控制语句-if-else-for-while-case"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-流程控制语句-if-else-for-while-case"}},[t._v("#")]),t._v(" 3.流程控制语句[if,else, for, while, case]:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if/else: ")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" condition "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" some thing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" condition "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" some thing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" some thing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# for:")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[t._v("i")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("seq")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" some thing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# while:")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("i")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),t._v(" -gt "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# case:")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v("\n    start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" begin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start something"')]),t._v("  \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" end"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stop something"')]),t._v("  \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    *"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ignorant"')]),t._v("  \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("esac")]),t._v("\n")])])]),a("h4",{attrs:{id:"前台、后台任务："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前台、后台任务："}},[t._v("#")]),t._v(" 前台、后台任务：")]),t._v(" "),a("ul",[a("li",[t._v("& 标识将命令放入后台执行，不占用终端显示。")]),t._v(" "),a("li",[t._v("jobs 能看到所有前、后台命令。")]),t._v(" "),a("li",[t._v("ctrl + z 可以把任务转移到后台，并且暂停执行。")]),t._v(" "),a("li",[t._v("fg 将后台的命令调至前台。")]),t._v(" "),a("li",[t._v("bg 将一个后台的命令变成继续执行。")])]),t._v(" "),a("h4",{attrs:{id:"经验之谈："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#经验之谈："}},[t._v("#")]),t._v(" 经验之谈：")]),t._v(" "),a("ul",[a("li",[t._v("在过滤的时候会用到grep, 但是如果不忽略自身脚本继而执行某些（删除）命令，会把当前脚本杀掉。\n"),a("ul",[a("li",[t._v("ps aux|grep sqlpad|grep -v grep|grep -v $0|awk '{print $2}'|xargs kill -9")])])]),t._v(" "),a("li",[t._v("不想在终端看到命令的输出可以把输出重定向到/dev/null\n"),a("ul",[a("li",[t._v("cmd > /dev/null 2>&1 &")])])]),t._v(" "),a("li",[t._v("启动脚本是一个'全新的环境', 这里面没有定义好的alias。环境变量，得提前在脚本中定义或给全目标路径。\n"),a("ul",[a("li",[t._v("这里所谓的'全新的环境'不够严谨，其实和脚本启动后。执行的shell环境有关，这里没有加载用户的~/.bash_profile文件。")]),t._v(" "),a("li",[t._v("具体的加载顺序可以参照网文")])])])]),t._v(" "),a("h4",{attrs:{id:"单元测试："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单元测试："}},[t._v("#")]),t._v(" 单元测试：")]),t._v(" "),a("ul",[a("li",[t._v("shUnit2是一个为bash shell脚本设计的xUnit类型的单元测试框，"),a("a",{attrs:{href:"https://www.jianshu.com/p/8a9782528c65",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考网文"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("有个demo在publish/test, 部分接口有写单元测试")])])])]),t._v(" "),a("p",[t._v("func_check_file:\n-x 是否存在且可执行\n-d 路径是否存在\n-f 文件是否存在")]),t._v(" "),a("h4",{attrs:{id:"参考网文："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考网文："}},[t._v("#")]),t._v(" 参考网文：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/chengmo/archive/2010/10/14/1851434.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("1.流程控制语句"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/chengmo/archive/2010/10/01/1839942.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.条件语句及[][[]]的含义"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://man.linuxde.net",target:"_blank",rel:"noopener noreferrer"}},[t._v("3.常用命令查询"),a("OutboundLink")],1)])]),t._v(" "),a("center",[t._v('"添加小柒老师，进群共同学习技术"')]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191120203007808.jpeg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTA3MTE3NTA=,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})])],1)}),[],!1,null,null,null);s.default=e.exports}}]);