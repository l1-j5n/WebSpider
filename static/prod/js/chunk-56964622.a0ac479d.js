(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56964622"],{"675a":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"manage"},[i("el-table",{staticClass:"api-table",attrs:{data:t.apis}},[i("el-table-column",{attrs:{"show-overflow-tooltip":!0,type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[i("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"API地址"}},[i("span",[i("a",{attrs:{href:e.row.api,target:"_blank"}},[t._v(t._s(e.row.api))])])]),i("el-form-item",{attrs:{label:"开放权限"}},[i("span",[t._v(t._s(e.row.permission))])]),i("el-form-item",{attrs:{label:"更新间隔"}},[i("span",[t._v(t._s("0"===e.row.interval?"不更新":e.row.interval+" 小时"))])]),i("el-form-item",{attrs:{label:"标签"}},t._l(e.row.tag,function(e,n){return i("span",{key:n},[t._v(t._s(e))])}),0),i("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"描述信息"}},[i("span",[t._v(t._s(e.row.description))])])],1)]}}])}),i("el-table-column",{attrs:{label:"目标地址",prop:"config.url"}}),i("el-table-column",{attrs:{align:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(i){t.onSideShow(e.row,e.$index,"edit")}}},[t._v("编辑")]),i("el-button",{attrs:{type:"info",size:"mini"},on:{click:function(i){t.onSideShow(e.row,e.$index,"detials")}}},[t._v("详情")]),i("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(i){t.onDeleteApi(e.row,e.$index)}}},[t._v("删除")])]}}])})],1),i("transition",{attrs:{name:"slide-fade"}},[t.showEdit?i("edit",{directives:[{name:"show",rawName:"v-show",value:t.showEdit,expression:"showEdit"}],attrs:{editAPI:t.editAPI},on:{"change-state":t.onChangeState}}):i("detail",{directives:[{name:"show",rawName:"v-show",value:t.showMore,expression:"showMore"}],attrs:{apiConfig:t.apiDetial},on:{"change-state":t.onChangeState}})],1)],1)},a=[],s=(i("cadf"),i("551c"),i("097d"),i("ef8d")),o=i("f121"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"edit"},[i("span",{staticClass:"close",on:{click:t.hiddenEdit}}),i("h2",[t._v("编辑")]),i("el-form",{ref:"form",attrs:{model:t.editAPI,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"目标网站"}},[i("el-input",{attrs:{disabled:!0},model:{value:t.editAPI.site,callback:function(e){t.$set(t.editAPI,"site",e)},expression:"editAPI.site"}})],1),i("el-form-item",{attrs:{label:"API-ID"}},[i("el-input",{attrs:{disabled:!0},model:{value:t.editAPI.cid,callback:function(e){t.$set(t.editAPI,"cid",e)},expression:"editAPI.cid"}})],1),i("el-form-item",{attrs:{label:"开放权限"}},[i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.editAPI.permission,callback:function(e){t.$set(t.editAPI,"permission",e)},expression:"editAPI.permission"}})],1),i("el-form-item",{attrs:{label:"API标签"}},[t._l(t.editAPI.tag,function(e){return i("el-tag",{key:e,attrs:{closable:"","disable-transitions":!1},on:{close:function(i){t.handleClose(e)}}},[t._v("\n        "+t._s(e)+"\n      ")])}),t.inputVisible?i("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:t.handleInputConfirm},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleInputConfirm(e):null}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}):i("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:t.showInput}},[t._v("+ New Tag")])],2),i("el-form-item",{attrs:{label:"描述信息"}},[i("el-input",{attrs:{type:"textarea"},model:{value:t.editAPI.description,callback:function(e){t.$set(t.editAPI,"description",e)},expression:"editAPI.description"}})],1),i("el-form-item",{attrs:{label:"更新间隔"}},[i("el-input-number",{attrs:{size:"mini",step:.5,min:0},model:{value:t.editAPI.interval,callback:function(e){t.$set(t.editAPI,"interval",e)},expression:"editAPI.interval"}}),i("span",[t._v("小时")])],1),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("提交")]),i("el-button",{attrs:{type:"primary"},on:{click:t.hiddenEdit}},[t._v("取消")])],1)],1)],1)},l=[],c={name:"EditAPI",props:{editAPI:{type:Object,default:function(){return{}}}},data:function(){return{inputVisible:!1,inputValue:""}},methods:{hiddenEdit:function(){this.$emit("change-state","edit",!1)},onSubmit:function(){var t=this;Object(s["g"])({cid:this.editAPI.cid,permission:this.editAPI.permission,tag:this.editAPI.tag.slice(0,3),description:this.editAPI.description,interval:this.editAPI.interval}).then(function(e){e.data.state?t.$message.success("保存成功"):0===e.data.data.nModified?t.$message.info("配置未修改"):t.$message.error(e.data.msg)}).catch(function(e){t.$message.error(e)})},handleClose:function(t){this.editAPI.tag.splice(this.editAPI.tag.indexOf(t),1)},showInput:function(){var t=this;this.inputVisible=!0,this.$nextTick(function(e){t.$refs.saveTagInput.$refs.input.focus()})},handleInputConfirm:function(){var t=this.inputValue;t&&this.editAPI.tag.push(t),this.inputVisible=!1,this.inputValue=""}}},d=c,u=(i("f0b3"),i("2877")),f=Object(u["a"])(d,r,l,!1,null,"e4e688b4",null);f.options.__file="edit.vue";var p=f.exports,m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"details"},[i("span",{staticClass:"close",on:{click:t.hiddenDetails}}),i("h2",[t._v("详情")]),i("div",{staticClass:"main"},[i("table",[i("tr",[i("td",[t._v("目标网址")]),i("td",[t._v(t._s(t.apiConfig.config.url))])]),i("tr",[i("td",[t._v("深度")]),i("td",[t._v(t._s(t.apiConfig.config.depth))])]),i("tr",[i("td",[t._v("编码")]),i("td",[t._v(t._s(t.apiConfig.config.charset))])]),i("tr",[i("td",[t._v("抓取模式")]),i("td",[t._v(t._s("plain"===t.apiConfig.config.mode?"普通模式":"分页模式"))])]),i("tr",[i("td",[t._v("标签选择器")]),i("td",t._l(t.apiConfig.config.tags,function(e,n){return i("span",{key:n},[t._v(t._s(e))])}),0)]),i("tr",[i("td",[t._v("输出")]),i("td",[t._v(t._s(t.apiConfig.config.form))])]),"自定义代理"===t.apiConfig.config.proxyMode?i("tr",[i("td",[t._v("代理")]),i("td",t._l(t.apiConfig.config.proxies,function(e,n){return i("span",{key:n},[t._v(t._s(e))])}),0)]):t._e(),i("tr",[i("td",[t._v("代理模式")]),i("td",[t._v(t._s("own"===t.apiConfig.config.proxyMode?"无代理":"internal"===t.apiConfig.config.proxyMode?"内置代理":"自定义代理"))])]),"plain"!==t.apiConfig.config.mode?i("tr",[i("td",[t._v("起始页")]),i("td",[t._v(t._s(t.apiConfig.config.start))])]):t._e(),"plain"!==t.apiConfig.config.mode?i("tr",[i("td",[t._v("终止页")]),i("td",[t._v(t._s(t.apiConfig.config.end))])]):t._e(),i("tr",[i("td",[t._v("权限")]),i("td",[t._v(t._s(t.apiConfig.permission))])]),i("tr",[i("td",[t._v("更新间隔")]),i("td",[t._v(t._s(t.apiConfig.interval))])]),i("tr",[i("td",[t._v("API标签")]),i("td",t._l(t.apiConfig.tag,function(e,n){return i("span",[t._v(t._s(e))])}),0)]),i("tr",[i("td",[t._v("描述信息")]),i("td",[t._v(t._s(t.apiConfig.description))])]),t._m(0)])])])},v=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("td")])}],h={name:"Details",props:{apiConfig:{type:Object,default:function(){return{}}}},methods:{hiddenDetails:function(){this.$emit("change-state","detials",!1)}}},g=h,_=(i("8724"),Object(u["a"])(g,m,v,!1,null,"60bae015",null));_.options.__file="details.vue";var b=_.exports,w={name:"Manage",components:{Edit:p,Detail:b},data:function(){return{apis:[],editAPI:{},apiDetial:{config:{}},page:0,pageSize:10,showEdit:!1,showMore:!1}},methods:{onSideShow:function(t,e,i){var n=document.querySelector(".api-table");n.style.width="calc(100% - 400px)","edit"===i?(this.editAPI={site:t.config.url,cid:t.cid,tag:t.tag,description:t.description,permission:t.permission,interval:t.interval},this.showEdit=!0,this.showMore=!1):(this.apiDetial=t,this.showMore=!0,this.showEdit=!1)},onChangeState:function(t,e){var i=document.querySelector(".api-table");i.style.width="100%","edit"===t?this.showEdit=e:"detials"===t&&(this.showMore=e)},onDeleteApi:function(t,e){var i=this,n=t.cid;this.$confirm("此操作将永久删除配置, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){return Object(s["a"])({cid:n})}).then(function(t){t.data.state?(i.apis.splice(e,1),i.$message({type:"success",message:"删除成功!"})):(i.$message({type:"error",message:t.data.data}),console.log("配置删除失败",t.data.data))}).catch(function(){i.$message.info("已取消删除")})}},activated:function(){var t=this;this.$store.state.user||this.$router.push("enter"),Object(s["b"])({page:this.page,pageSize:this.pageSize}).then(function(e){e.data.state?t.apis=e.data.data.map(function(t){return t.api="".concat(o["a"].baseUrl,"/crawl/api?user=").concat(t.author,"&cid=").concat(t.cid),t}):t.$message.error(e.data.msg)}).catch(function(t){console.log("捕获到错误",t)})}},I=w,C=(i("c8bd"),Object(u["a"])(I,n,a,!1,null,null,null));C.options.__file="manage.vue";e["default"]=C.exports},8724:function(t,e,i){"use strict";var n=i("9ce3"),a=i.n(n);a.a},"9ce3":function(t,e,i){},ab6c:function(t,e,i){},ad00:function(t,e,i){},c8bd:function(t,e,i){"use strict";var n=i("ad00"),a=i.n(n);a.a},ef8d:function(t,e,i){"use strict";i.d(e,"d",function(){return a}),i.d(e,"e",function(){return s}),i.d(e,"b",function(){return o}),i.d(e,"g",function(){return r}),i.d(e,"a",function(){return l}),i.d(e,"c",function(){return c}),i.d(e,"f",function(){return d});var n=i("1c03");function a(t){var e="/crawl/share";return n["a"].get(e,t)}function s(t){console.log(t);var e="/crawl/tag";return n["a"].get(e,t)}function o(t){var e="/crawl/config";return n["a"].get(e,t)}function r(t){var e="/crawl/config";return n["a"].post(e,t)}function l(t){var e="/crawl/config";return n["a"].delete(e,t)}function c(t){var e="/crawl/preview";return n["a"].post(e,t)}function d(t){var e="/crawl/save";return n["a"].post(e,t)}},f0b3:function(t,e,i){"use strict";var n=i("ab6c"),a=i.n(n);a.a}}]);
//# sourceMappingURL=chunk-56964622.a0ac479d.js.map