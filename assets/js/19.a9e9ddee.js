(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{268:function(t,e,o){"use strict";o.r(e);var s=o(28),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("p",[o("strong",[t._v('往Mysql数据库存储emoji表情怎么变成了"?"')])]),t._v(" "),o("blockquote",[o("p",[t._v("在做个人信息入库的时候经常会遇到一个问题，那就是用户的昵称里带有emoji表情在入库的时候往往会被转成”？？？“号来处理。今天就来讲讲背后的缘由")])]),t._v(" "),o("ul",[o("li",[t._v("在储存用户信息的时候一般选用varchar类型，字符集为默认的utf8。\n"),o("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191208180624298.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTA3MTE3NTA=,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])]),t._v(" "),o("blockquote",[o("p",[t._v("现阶段的utf8为3字节，没有包含emoji字符。这也就导致在存储这类数据的时候无法识别用全部用”?“处理")])]),t._v(" "),o("p",[t._v("我们只需要修改数据的字段类型，选用utf8mb4类型即可。\n可能还需要修改下mysql的默认字符位utf8mb4，重启MySQL。")]),t._v(" "),o("hr"),t._v(" "),o("p",[o("em",[t._v("喜欢我的文章，欢迎搜索公众号”"),o("strong",[t._v("vm-321")]),t._v("“。期待你的加入。")])])])}),[],!1,null,null,null);e.default=n.exports}}]);