(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{412:function(t,e,n){"use strict";var r=n(130),o=n(97),l=n(131),c=n(0),d=n(6),h=Object(d.a)(r.a,Object(o.a)("windowGroup","v-window-item","v-window"));e.a=h.extend().extend().extend({name:"v-window-item",directives:{Touch:l.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(c.f)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(c.f)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}})},426:function(t,e,n){},462:function(t,e,n){"use strict";n(13),n(10),n(7),n(5),n(11);var r=n(1),o=(n(16),n(426),n(0)),l=n(14),c=n(6);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(c.a)(l.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(o.f)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},463:function(t,e,n){"use strict";var r=n(412);e.a=r.a.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=r.a.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}})},485:function(t,e,n){"use strict";n.r(e);n(52);var r=n(17),o={data:function(){return{tab:0,tables:[],top_make:[],top_model:[]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,t.error,t.env,r=t.app,o=[{name:"Modèles",items:[]},{name:"Governorate",items:[]}],e.next=4,r.$api.get("public/analytics/top/model",{params:n}).then((function(t){o[0].items=t.data.result}));case 4:return e.next=6,r.$api.get("public/analytics/top/governorate",{params:n}).then((function(t){o[1].items=t.data.result}));case 6:return e.abrupt("return",{tables:o});case 7:case"end":return e.stop()}}),e)})))()},computed:{params:function(){return this.$store.state.route.car_data_params}},watch:{"$store.state.route.is_car_data_params":{handler:function(t,e){this.init()},deep:!0}},methods:{init:function(){var t=this;this.$api.get("public/analytics/top/model",{params:this.params}).then((function(e){t.tables[0].items=e.data.result})),this.$api.get("public/analytics/top/governorate",{params:this.params}).then((function(e){t.tables[1].items=e.data.result}))}}},l=n(35),c=n(42),d=n.n(c),h=n(189),v=n(51),f=n(378),m=n(121),w=n(462),_=n(397),C=n(463),y=n(406),T=n(261),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"elevation-0"},[n("h1",{staticClass:"pa-3 tajawal font-weight-bold title"},[t._v("Le marché de la "+t._s(t.params.make)+" en Tunisie")]),t._v(" "),n("v-divider"),t._v(" "),n("h3",{staticClass:"pa-2 tajawal font-weight-bold title"},[n("v-icon",{staticClass:"green--text mr-1"},[t._v("mdi-star")]),t._v("Les plus vendus\n  ")],1),t._v(" "),n("v-divider"),t._v(" "),n("v-tabs",{staticClass:"border-bottom",attrs:{dense:"","show-arrows":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.tables,(function(table){return n("v-tab",{key:table.name,staticClass:"font-weight-bold subtitle-2 capitalize"},[t._v(t._s(table.name))])})),1),t._v(" "),n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[t._l(t.tables,(function(table,e){return n("v-tab-item",{key:table.name},[n("v-card-text",{staticClass:"pa-0"},[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left subtitle-2 font-weight-bold"},[t._v(t._s(t.$t("name")))]),t._v(" "),n("th",{staticClass:"text-left subtitle-2 font-weight-bold"},[t._v("Prix moyen")]),t._v(" "),n("th",{staticClass:"text-left subtitle-2 font-weight-bold"},[t._v("Annonces")])])]),t._v(" "),n("tbody",t._l(table.items,(function(e,r){return n("tr",{key:r},[n("td",{staticClass:"px-1"},[n("v-card-actions",{staticClass:"pa-0"},[n("b",{staticClass:"ml-1"},[t._v(t._s(e.name))])])],1),t._v(" "),n("td",[t._v(t._s(t.f_numberFormat(e.avg_price,t.$t("currency"))))]),t._v(" "),n("td",[t._v(t._s(e.count))])])})),0)]},proxy:!0}],null,!0)})],1)],1)})),t._v(" "),n("v-tab-item",[n("v-card-text",{staticClass:"pa-0"},[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left subtitle-2 font-weight-bold"},[t._v("Model")]),t._v(" "),n("th",{staticClass:"text-left subtitle-2 font-weight-bold"},[t._v("Prix moyen")]),t._v(" "),n("th",{staticClass:"text-left subtitle-2 font-weight-bold"},[t._v("Annonces")])])]),t._v(" "),n("tbody",t._l(t.top_model,(function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(t.f_numberFormat(e.avg_price,t.$t("currency"))))]),t._v(" "),n("td",[t._v(t._s(e.count))])])})),0)]},proxy:!0}])})],1)],1)],2)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCard:h.a,VCardActions:v.a,VCardText:v.b,VDivider:f.a,VIcon:m.a,VSimpleTable:w.a,VTab:_.a,VTabItem:C.a,VTabs:y.a,VTabsItems:T.a})}}]);