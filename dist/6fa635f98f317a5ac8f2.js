(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{502:function(t,e,n){t.exports=n.p+"img/d214d85.jpg"},554:function(t,e,n){"use strict";n.r(e);n(38),n(31);var r=n(9),o={components:{TimeAgo:n(219).a},data:function(){return{news:[],detail:{},runtime:0,params:{cp:1}}},head:function(){return{title:"Les dernières actualités du monde de l’automobile en Tunisie et à l’internationale​​",meta:[{hid:"description",name:"description",content:"Rester au courant de toutes les nouveautés du marché automobile. Grâce à une présentation simple et personnalisée, ne rater aucune information.​"},{hid:"og:title",property:"og:title",content:"Les dernières actualités du monde de l’automobile en Tunisie et à l’internationale​​"},{hid:"og:description",property:"og:description",content:"Rester au courant de toutes les nouveautés du marché automobile. Grâce à une présentation simple et personnalisée, ne rater aucune information.​​"},{hid:"og:image",property:"og:image",content:n(502)}]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,r=t.app,o=[],c={},l=0,e.next=6,r.$api.get("/public/news/all",{params:n}).then((function(t){o=t.data.result,c=t.data.detail,l=t.data.runtime})).catch((function(t){console.log(t)}));case 6:return e.abrupt("return",{news:o,detail:c,runtime:l});case 7:case"end":return e.stop()}}),e)})))()},methods:{goToPrev:function(){this.params.cp=parseInt(this.params.cp)-1,this.f_goToUp(),this.init()},goToNext:function(t){this.params.cp=parseInt(this.params.cp)+1,this.f_goToUp(),this.init()},goToPage:function(){this.f_goToUp(),this.init()},init:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.get("/public/news/all",{params:t.params}).then((function(e){t.news=e.data.result,t.detail=e.data.detail,t.runtime=e.data.runtime}));case 2:t.$router.replace(t.localePath({name:"news",query:t.params})).catch((function(t){}));case 3:case"end":return e.stop()}}),e)})))()}},created:function(){this.params=Object.assign(this.params,this.$route.query)}},c=n(20),l=n(23),m=n.n(l),d=n(198),v=n(199),h=n(18),_=n(415),f=n(435),w=n(128),x=n(278),y=n(130),C=n(76),T=n(416),V=n(417),$=n(402),k=n(70),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-toolbar",{attrs:{dense:""}},[n("v-icon",{staticClass:"black--text mx-2"},[t._v("mdi-newspaper")]),t._v(" "),n("h3",[t._v(t._s(t.$t("Auto news")))])],1),t._v(" "),n("v-container",[n("h4",{staticClass:"my-2"},[t._v(t._s(t.f_numberFormat(t.detail.total))+" résultats "+t._s(t.f_numberFormat(t.runtime))+"s")]),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",md:"8"}},[t._l(t.news,(function(e){return n("v-card",{key:e.id,staticClass:"elevation-0 mb-2",attrs:{to:t.localePath({name:"news-id",params:{id:e.url_id}})}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pa-2",attrs:{cols:"12",sm:"3"}},[n("div",{staticClass:"align-self-center line-height grey lighten-2",staticStyle:{height:"100%"}},[n("v-img",{staticClass:"center-in",attrs:{src:e.image,"max-height":"100"}})],1)]),t._v(" "),n("v-col",{staticClass:"pa-2 pt-1",class:t.isArabic(e.title)?"is_rtl":"",attrs:{cols:"12",sm:"9"}},[n("small",[n("client-only",[n("time-ago",{attrs:{refresh:1,datetime:e.date,locale:t.$i18n.locale}})],1),t._v("\n                "+t._s(e.author)+" - "+t._s(e.provider_name)+"\n              ")],1),t._v(" "),n("v-list-item",{staticClass:"pa-0 my-1",attrs:{"three-line":""}},[n("v-list-item-content",{staticClass:"pa-0"},[n("h3",{staticClass:"title font-weight-bold mb-2"},[t._v(t._s(e.title))]),t._v(" "),n("v-list-item-title",{staticClass:"caption mb-1"},[t._v(t._s(e.url))]),t._v(" "),n("v-list-item-subtitle",[t._v(t._s(e.description))])],1)],1)],1)],1)],1)})),t._v(" "),n("v-card-actions",{staticClass:"text-center px-1"},[n("v-btn",{attrs:{color:"primary",depressed:"",link:"",disabled:t.params.cp<2},on:{click:function(e){return t.goToPrev()}}},[t._v("Précédent")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-text-field",{staticClass:"mx-2",staticStyle:{"max-width":"70px"},attrs:{outlined:"",flat:"",dense:"",type:"number","hide-details":"",name:"name",label:t.$t("page_number"),id:"id",width:"70"},on:{"click:append-icon":function(e){return t.goToPage()},change:function(e){return t.goToPage()}},model:{value:t.params.cp,callback:function(e){t.$set(t.params,"cp",e)},expression:"params.cp"}}),t._v("\n          "+t._s(t.$t("/"))+" "+t._s(t.detail.pages)+"\n          "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",depressed:"",disabled:t.params.cp>t.detail.pages-1},nativeOn:{click:function(e){return t.goToNext(e)}}},[t._v("Suivant")]),t._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{to:t.localePath({name:"search",query:{cp:parseInt(t.params.cp)-1}})}},[t._v(t._s(t.$t("prev")))]),t._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{to:t.localePath({name:"search",query:{cp:parseInt(t.params.cp)+1}})}},[t._v(t._s(t.$t("next")))])],1)],2)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:d.a,VCard:v.a,VCardActions:h.a,VCol:_.a,VContainer:f.a,VIcon:w.a,VImg:x.a,VListItem:y.a,VListItemContent:C.a,VListItemSubtitle:C.b,VListItemTitle:C.c,VRow:T.a,VSpacer:V.a,VTextField:$.a,VToolbar:k.a})}}]);