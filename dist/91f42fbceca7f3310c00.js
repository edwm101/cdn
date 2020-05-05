(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{414:function(t,e,n){"use strict";var r=n(130),o=n(97),l=n(131),c=n(0),d=n(6),h=Object(d.a)(r.a,Object(o.a)("windowGroup","v-window-item","v-window"));e.a=h.extend().extend().extend({name:"v-window-item",directives:{Touch:l.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(c.f)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(c.f)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}})},460:function(t,e,n){},482:function(t,e,n){"use strict";n.r(e);n(52);var r=n(17),o={data:function(){return{tab:0,tables:[],top_make:[],top_model:[]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,t.error,t.env,n=t.app,r=[{name:"Marques",items:[]},{name:"Modèles",items:[]},{name:"Governorate",items:[]},{name:"City",items:[]}],e.next=4,n.$api.get("public/analytics/top/make").then((function(t){r[0].items=t.data.result}));case 4:return e.next=6,n.$api.get("public/analytics/top/model").then((function(t){r[1].items=t.data.result}));case 6:return e.next=8,n.$api.get("public/analytics/top/governorate").then((function(t){r[2].items=t.data.result}));case 8:return e.next=10,n.$api.get("public/analytics/top/city").then((function(t){r[3].items=t.data.result}));case 10:return e.abrupt("return",{tables:r});case 11:case"end":return e.stop()}}),e)})))()},computed:{params:function(){return this.$store.state.route.car_data_params}},watch:{"$store.state.route.is_car_data_params":{handler:function(t,e){this.init()},deep:!0}},methods:{init:function(){var t=this;this.$api.get("public/analytics/top/make",{params:this.params}).then((function(e){t.tables[0].items=e.data.result})),this.$api.get("public/analytics/top/model",{params:this.params}).then((function(e){t.tables[1].items=e.data.result})),this.$api.get("public/analytics/top/governorate",{params:this.params}).then((function(e){t.tables[2].items=e.data.result})),this.$api.get("public/analytics/top/city",{params:this.params}).then((function(e){t.tables[3].items=e.data.result}))}}},l=n(35),c=n(42),d=n.n(c),h=n(190),m=n(51),f=n(378),v=n(121),w=(n(13),n(10),n(7),n(5),n(11),n(1)),_=(n(16),n(460),n(0)),y=n(14),C=n(6);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var T=Object(C.a)(y.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(w.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(_.f)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),O=n(397),$=n(414),j=$.a.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=$.a.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}}),k=n(406),G=n(261),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"elevation-0"},[n("h3",{staticClass:"pa-2 tajawal font-weight-bold title"},[n("v-icon",{staticClass:"green--text mr-1"},[t._v("mdi-star")]),t._v("Les plus vendus\n  ")],1),t._v(" "),n("v-divider"),t._v(" "),n("v-tabs",{staticClass:"border-bottom",attrs:{dense:"","show-arrows":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.tables,(function(table){return n("v-tab",{key:table.name,staticClass:"font-weight-bold subtitle-2 capitalize"},[t._v(t._s(table.name))])})),1),t._v(" "),n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[t._l(t.tables,(function(table,e){return n("v-tab-item",{key:table.name},[n("v-card-text",{staticClass:"pa-0"},[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left subtitle-2 font-weight-bold"},[t._v(t._s(t.$t("name")))]),t._v(" "),n("th",{staticClass:"text-left subtitle-2 font-weight-bold"},[t._v("Prix moyen")]),t._v(" "),n("th",{staticClass:"text-left subtitle-2 font-weight-bold"},[t._v("Annonces")])])]),t._v(" "),n("tbody",t._l(table.items,(function(r,o){return n("tr",{key:o},[n("td",{staticClass:"px-1"},[n("v-card-actions",{staticClass:"pa-0"},[0==e?n("img",{staticStyle:{height:"auto"},attrs:{src:"https://www.carlogos.org/car-logos/"+r.name.toLowerCase().replace(" ","-")+"-logo.png",alt:r.name,width:"35"}}):t._e(),t._v(" "),n("b",{staticClass:"ml-1"},[t._v(t._s(r.name))])])],1),t._v(" "),n("td",[t._v(t._s(t.f_numberFormat(r.avg_price,t.$t("currency"))))]),t._v(" "),n("td",[t._v(t._s(r.count))])])})),0)]},proxy:!0}],null,!0)})],1)],1)})),t._v(" "),n("v-tab-item",[n("v-card-text",{staticClass:"pa-0"},[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left subtitle-2 font-weight-bold"},[t._v("Model")]),t._v(" "),n("th",{staticClass:"text-left subtitle-2 font-weight-bold"},[t._v("Prix moyen")]),t._v(" "),n("th",{staticClass:"text-left subtitle-2 font-weight-bold"},[t._v("Annonces")])])]),t._v(" "),n("tbody",t._l(t.top_model,(function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(t.f_numberFormat(e.avg_price,t.$t("currency"))))]),t._v(" "),n("td",[t._v(t._s(e.count))])])})),0)]},proxy:!0}])})],1)],1)],2)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCard:h.a,VCardActions:m.a,VCardText:m.b,VDivider:f.a,VIcon:v.a,VSimpleTable:T,VTab:O.a,VTabItem:j,VTabs:k.a,VTabsItems:G.a})}}]);