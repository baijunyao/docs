(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{155:function(t,r,s){"use strict";s.r(r);var a=s(0),e=Object(a.a)({},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"content"},[s("p",[t._v("先讲一个 windows 开发环境下搭建；"),s("br"),t._v("\n此处以 phpstudy 为示例；"),s("br"),t._v("\n官网链接："),s("a",{attrs:{href:"http://www.phpstudy.net",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.phpstudy.net"),s("OutboundLink")],1),s("br"),t._v("\n下载安装我就不讲了；")]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11)])},[function(){var t=this.$createElement,r=this._self._c||t;return r("p",[this._v("安装完运行；"),r("br"),this._v("\n如果提示防火墙"),r("br"),r("img",{attrs:{src:"/uploads/article/20170625/594fc9cf78bfa.jpg",alt:""}}),r("br"),this._v("\n通通点允许访问即可；")])},function(){var t=this.$createElement,r=this._self._c||t;return r("p",[this._v("点击切换版本；"),r("br"),this._v("\n可以各种切换环境；"),r("br"),r("img",{attrs:{src:"/uploads/article/20170625/594fca14b7b7d.jpg",alt:""}}),r("br"),this._v("\n当选择php7的时候；"),r("br"),this._v("\n如果报缺少VC库的错误；"),r("br"),r("img",{attrs:{src:"/uploads/article/20170625/594fc99841636.jpg",alt:"缺少VC库"}}),r("br"),this._v("\n点确定；"),r("br"),this._v("\n按提示下载响应的VC库并安装；")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("p",[t._v("好了；重点需要讲的虚拟主机的配置来了；"),s("br"),t._v("\n点击其他选项；"),s("br"),s("img",{attrs:{src:"/uploads/article/20170625/594fc9fc96c94.jpg",alt:""}}),s("br"),t._v("\n站点域名管理"),s("br"),s("img",{attrs:{src:"/uploads/article/20170625/594fca2db22e7.jpg",alt:""}}),s("br"),t._v("\n网站域名就是开发时候用的虚拟的域名；"),s("br"),t._v("\n我这里以 bjy.dev 为例；"),s("br"),t._v("\n这里建议虚拟的域名都以 .dev 为后缀；"),s("br"),t._v("\n避免使用 .com 和真是的域名冲突；"),s("br"),t._v("\n网站目录就是项目的目录；"),s("br"),t._v("\n比如说: "),s("code",[t._v("E:\\document\\bjyblog-laravvel")]),s("br"),t._v("\n如果是 laravel 项目；"),s("br"),t._v("\n则需要指定到项目的 public 目录"),s("br"),t._v("\n比如说："),s("code",[t._v("E:\\document\\bjyblog-laravvel\\public")]),s("br"),t._v("\n然后点击新增；"),s("br"),t._v("\n保存设置并生成配置文件；")])},function(){var t=this.$createElement,r=this._self._c||t;return r("p",[this._v("虚拟主机的设置就完成了；"),r("br"),this._v("\n为了让自定义的虚拟域名生效；"),r("br"),this._v("\n点击打开 hosts ；"),r("br"),r("img",{attrs:{src:"/uploads/article/20170625/594fd00592e82.jpg",alt:""}}),r("br"),this._v("\n然后把自己自定义的虚拟域名；"),r("br"),this._v("\n一行一个的添加进来就行了；"),r("br"),this._v("\n比如说：")])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"language-hosts extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[this._v("127.0.0.1     bjy.dev\n")])])])},function(){var t=this.$createElement,r=this._self._c||t;return r("p",[this._v("127.0.0.1为固定值；"),r("br"),this._v("\nbjy.dev 为自定义的虚拟域名；"),r("br"),r("img",{attrs:{src:"/uploads/article/20170625/594fca4000bfd.jpg",alt:""}})])},function(){var t=this.$createElement,r=this._self._c||t;return r("p",[this._v("另外需要开启 openssl 和 fileinfo 扩展；"),r("br"),this._v("\n可以按下图勾选即可；"),r("br"),r("img",{attrs:{src:"/uploads/article/20171123/5a163eac84ea8.jpg",alt:""}})])},function(){var t=this.$createElement,r=this._self._c||t;return r("p",[this._v("默认我们的 url 都是带 index.php/... ；"),r("br"),this._v("\n如果我们想去掉这个 index.php 就需要 rewrite 了；")])},function(){var t=this.$createElement,r=this._self._c||t;return r("p",[this._v("如果使用的是 Apache ；"),r("br"),this._v("\n开启 mod_rewrite 模块即可；"),r("br"),r("img",{attrs:{src:"/uploads/article/20180308/5aa0ab05bd225.jpg",alt:""}})])},function(){var t=this.$createElement,r=this._self._c||t;return r("p",[this._v("如果是 Nginx ；"),r("br"),this._v("\n则在配置项中加上这句")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("try_files")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$uri")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("/")]),s("span",{attrs:{class:"token keyword"}},[t._v("index")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php"),s("span",{attrs:{class:"token operator"}},[t._v("?")]),s("span",{attrs:{class:"token variable"}},[t._v("$query_string")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,r=this._self._c||t;return r("p",[r("img",{attrs:{src:"/uploads/article/20180308/5aa0ab10428f1.jpg",alt:""}})])}],!1,null,null,null);r.default=e.exports}}]);