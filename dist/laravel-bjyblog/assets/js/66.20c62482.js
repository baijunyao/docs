(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{296:function(t,a,s){"use strict";s.r(a);var r=s(0),e=Object(r.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("本博客系统每周六会升级一个版本；"),s("br"),t._v("\n这里提供两种方式将自己的博客升级到最新版；")]),t._v(" "),s("ol",[s("li",[t._v("登录到服务器上使用 git 命令行升级\n最简单最直接的方式先拉取最新代码；")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull \ncomposer "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --no-dev\nphp artisan bjyblog:update\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("在本地使用 envoy\n配置 .env 文件；")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("DEPLOY_IP"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("47.94.110.251\nDEPLOY_PORT"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("22\nDEPLOY_USER"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("root\nDEPLOY_PATH"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/www/baijunyao.com\nDEPLOY_BRANCH"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("master\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("配置项")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("DEPLOY_IP")]),t._v(" "),s("td",[t._v("自己博客服务器ip")])]),t._v(" "),s("tr",[s("td",[t._v("DEPLOY_PORT")]),t._v(" "),s("td",[t._v("服务器 ssh 端口")])]),t._v(" "),s("tr",[s("td",[t._v("DEPLOY_USER")]),t._v(" "),s("td",[t._v("登录 ssh 的用户")])]),t._v(" "),s("tr",[s("td",[t._v("DEPLOY_PATH")]),t._v(" "),s("td",[t._v("博客项目在服务器上的目录")])]),t._v(" "),s("tr",[s("td",[t._v("DEPLOY_BRANCH")]),t._v(" "),s("td",[t._v("git 的分支")])])])]),t._v(" "),s("p",[t._v("全局安装 "),s("a",{attrs:{href:"https://laravel-china.org/docs/laravel/5.5/envoy/1344",target:"_blank",rel:"noopener noreferrer"}},[t._v("Envoy"),s("OutboundLink")],1),t._v(" ；"),s("br"),t._v("\n以后需要升级的时候执行如下命令即可；")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("envoy run deploy\n")])])])])},[],!1,null,null,null);a.default=e.exports}}]);