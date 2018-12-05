(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{188:function(a,s,e){"use strict";e.r(s);var t=e(0),n=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("div",{staticClass:"content"},[e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://gitee.com/baijunyao/laravel-bjyblog.git\n")])])]),e("p",[a._v("先进入站点；")]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[a._v("cd")]),a._v(" laravel-bjyblog.test  \n")])])]),e("p",[a._v("我们需要复制跟目录下的 "),e("code",[a._v(".env.example")]),a._v(" 文件并重命名为 "),e("code",[a._v(".env")]),a._v(" ；")]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[a._v("cp")]),a._v(" .env.example .env  \n")])])]),e("p",[a._v("使用 vim 编辑 .env 或者使用我们创建站点时候的 ftp ；")]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("vim .env  \n")])])]),e("p",[a._v("我们需要改成自己的实际配置；"),e("br"),a._v("\nAPP_NAME 就是自己的项目名称比如我的白俊遥博客；"),e("br"),a._v("\nAPP_URL 就是我们的项目链接比如说我的 http://laravel-bjyblog.test；"),e("br"),a._v("\nDB_DATABASE 就是我们的数据库名比如说 laravel_bjyblog；"),e("br"),a._v("\nDB_USERNAME 数据库用户名比如说 laravel_bjyblog ；"),e("br"),a._v("\nDB_PASSWORD 数据库密码比如说 *** ；")]),e("p",[a._v("使用 composer ；")]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("composer "),e("span",{attrs:{class:"token function"}},[a._v("install")]),a._v("  \n")])])]),e("p",[a._v("生成 key ；")]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("php artisan key:generate  \n")])])]),e("p",[a._v("生成数据表；")]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("php artisan migrate  \n")])])]),e("p",[a._v("生成初始化的数据；")]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("php artisan db:seed  \n")])])]),e("p",[a._v("如果在 "),e("code",[a._v("db:seed")]),a._v(" 之前迫不及待的访问了项目；"),e("br"),a._v("\n因为缓存的问题再填充文件不会及时刷新；"),e("br"),a._v("\n这时候可以使用清除缓存的命令;")]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("php artisan cache:clear\n")])])])])}],!1,null,null,null);s.default=n.exports}}]);