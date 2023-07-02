(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{651:function(t,e,n){"use strict";var r=n(521);e.a=r.a.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=r.a.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}})},699:function(t,e,n){"use strict";n.r(e);var r=n(262),o=n(15),c=n(527),l=n(164),m=n(540),_=n(680),v=n(651),d=n(723),h=n(644),f=(n(29),n(21),n(36),n(6)),w=(n(37),n(3),n(32),n(42),{data:function(){return{tab:0,tables:[],top_make:[],top_model:[]}},asyncData:function(t){return Object(f.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,t.error,t.env,n=t.app,r=[{name:"make",items:[]},{name:"model",items:[]},{name:"governorate",items:[]}],e.next=4,Promise.all([n.$api.get("public/analytics/top/make").then((function(t){r[0].items=t.data.result})),n.$api.get("public/analytics/top/model").then((function(t){r[1].items=t.data.result})),n.$api.get("public/analytics/top/governorate").then((function(t){r[2].items=t.data.result}))]);case 4:return e.abrupt("return",{tables:r});case 5:case"end":return e.stop()}}),e)})))()},computed:{params:function(){return this.$store.state.route.car_data_params}},watch:{"$store.state.route.is_car_data_params":{handler:function(t,e){this.init()},deep:!0}},methods:{init:function(){var t=this;this.$api.get("public/analytics/top/make",{params:this.params}).then((function(e){t.tables[0].items=e.data.result})),this.$api.get("public/analytics/top/model",{params:this.params}).then((function(e){t.tables[1].items=e.data.result})),this.$api.get("public/analytics/top/governorate",{params:this.params}).then((function(e){t.tables[2].items=e.data.result}))}}}),C=n(23),component=Object(C.a)(w,(function(){var t=this,e=t._self._c;return e(r.a,[e("h3",{staticClass:"pa-2 tajawal font-weight-bold title"},[e(l.a,{staticClass:"green--text mr-1"},[t._v("mdi-star")]),t._v("\n    "+t._s(t.$t("best_selling_make"))+"\n  ")],1),t._v(" "),e(c.a),t._v(" "),e(d.a,{staticClass:"border-bottom",attrs:{dense:"","show-arrows":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.tables,(function(table){return e(_.a,{key:table.name,staticClass:"font-weight-bold subtitle-2 capitalize"},[t._v(t._s(t.$t(table.name)))])})),1),t._v(" "),e(r.a,{staticClass:"overflow-y-auto elevation-0",attrs:{"max-height":"560"}},[e(h.a,{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.tables,(function(table,n){return e(v.a,{key:table.name},[0==n?[e(o.b,{staticClass:"pa-0 pb-1"},t._l(table.items,(function(n,c){return e(r.a,{key:c,staticClass:"ma-1 mb-2 stripe-btn",attrs:{to:t.localePath({name:"car-data-make",params:{make:n.name}})}},[e(o.a,{staticClass:"pa-0"},[e("img",{staticClass:"ma-1",staticStyle:{height:"auto"},attrs:{src:"https://www.carlogos.org/car-logos/"+n.name.toLowerCase().replace(" ","-")+"-logo.png",alt:n.name,width:"50"}}),t._v(" "),e("b",{staticClass:"title font-weight-bold pa-1"},[t._v(t._s(n.name))])]),t._v(" "),e(o.a,{staticClass:"pa-1 pt-0"},[e("span",[t._v("\n                  "+t._s(t.$t("avg_price"))+" :\n                  "),e("b",[t._v(t._s(t.f_numberFormat(n.avg_price,t.$t("currency"))))])]),t._v(" "),e(m.a),t._v(" "),e("span",[t._v(t._s(n.count)+" "+t._s(t.$t("cars")))])],1)],1)})),1)]:t._e(),t._v(" "),1==n?[e(o.b,{staticClass:"pa-0 pb-1"},t._l(table.items,(function(n,c){return e(r.a,{key:c,staticClass:"ma-1 mb-2 stripe-btn",attrs:{to:t.localePath({name:"car-data-make-model",params:{make:n.make,model:n.name}})}},[e(o.a,{staticClass:"pa-0"},[n.image?e("div",[e("img",{staticClass:"ma-1 mb-0",attrs:{src:n.image,alt:n.name,width:"100"}})]):t._e(),t._v(" "),e("b",{staticClass:"title font-weight-bold pa-1"},[t._v(t._s(n.make)+" "+t._s(n.name))])]),t._v(" "),e(o.a,{staticClass:"pa-1 pt-0"},[e("span",[t._v("\n                  "+t._s(t.$t("avg_price"))+" :\n                  "),e("b",[t._v(t._s(t.f_numberFormat(n.median_price,t.$t("currency"))))])]),t._v(" "),e(m.a),t._v(" "),e("span",[t._v(t._s(n.count)+" "+t._s(t.$t("cars")))])],1)],1)})),1)]:t._e(),t._v(" "),2==n?[e(o.b,{staticClass:"pa-0"},t._l(table.items,(function(n,c){return e(r.a,{key:c,staticClass:"ma-1 mb-2 stripe-btn"},[e("b",{staticClass:"title font-weight-bold pa-1"},[t._v(t._s(n.name))]),t._v(" "),e(o.a,{staticClass:"pa-1 pt-0"},[e("span",[t._v("\n                  "+t._s(t.$t("avg_price"))+" :\n                  "),e("b",[t._v(t._s(t.f_numberFormat(n.avg_price,t.$t("currency"))))])]),t._v(" "),e(m.a),t._v(" "),e("span",[t._v(t._s(n.count)+" "+t._s(t.$t("cars")))])],1)],1)})),1)]:t._e()],2)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);