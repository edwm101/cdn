(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{527:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{products:[]}},mounted:function(){var t=this;this.$toast.success("edd"),this.$api.get("public/filter/product/all").then((function(e){t.products=e.data.result}))}},r=n(20),l=n(26),c=n.n(l),d=n(196),v=n(200),f=n(68),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{attrs:{color:"primary",block:""}},[t._v("text")]),t._v(" "),n("v-toolbar",{attrs:{dense:""}},[t._v("Hello")]),t._v(" "),t._l(t.products,(function(e){return n("v-list-group",{key:t.key,attrs:{"prepend-icon":t.icon,"no-action":""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[t._v(t._s(e.make))])}))],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VListGroup:v.a,VToolbar:f.a})}}]);