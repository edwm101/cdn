(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{430:function(t,e,r){"use strict";var o={props:{value:{},text:{},color:{}},data:function(){return{value_rest:0}},created:function(){this.value_rest=Math.abs(5-this.value)}},n=r(20),c=r(26),l=r.n(c),d=r(128),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("client-only",[r("span",{staticClass:"progress caption font-weight-bold pl-0"},[t._l(t.value,(function(i,e){return r("v-icon",{key:"d"+e,style:{color:t.color},attrs:{small:""}},[t._v("mdi-steering")])})),t._v(" "),t._l(t.value_rest,(function(i,e){return r("v-icon",{key:"db"+e,staticStyle:{color:"#d9d9d9"},attrs:{small:""}},[t._v("mdi-steering")])})),t._v(" "),r("span",{staticStyle:{"font-size":"11px"},style:{color:t.color}},[t._v(t._s(t.text))])],2)])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VIcon:d.a})},435:function(t,e,r){"use strict";r(48),r(35);var o=r(430),n=r(219),c=r(218),l={components:{Indicator:o.a,Favorite:n.a,TimeAgo:c.a},props:{product:{dafault:[]}},data:function(){return{image_index:0,is_show_phone:!1,isActive:!1,estimation_rate:0,estimation_item:{},estimation_items:[{id:0,name:"Offre suspecte",color:"red",rate:0},{id:1,name:"Très mauvaise affaire",color:"red",rate:1},{id:2,name:"Mauvaise affaire",color:"red",rate:2},{id:3,name:"Offre équitable",color:"#559ee2",rate:3},{id:4,name:"Bonne affaire",color:"#66BB6A",rate:4},{id:5,name:"Très bonne affaire",color:"#fcb414",rate:5},{id:6,name:"Cote indisponible",color:"#bdbcbc",rate:0},{id:7,name:" ",color:"",rate:0}]}},computed:{description:function(){return this.product.description?(this.product.title.replace("- Tayara","")!=this.product.make+" "+this.product.model?"<b>"+this.product.title.replace("- Tayara","")+"</b> - ":"")+this.product.description.split("\\n").join(" ").replace(/<\/?[^>]+(>|$)/g,""):this.product.title.replace("- Tayara","")!=this.product.make+" "+this.product.model?"<b>"+this.product.title.replace("- Tayara","")+"</b>":""}},methods:{share:function(){var t="https://www.autoprix.tn"+this.$router.resolve(this.localePath({name:"car-id",params:{id:this.product.url_id}})).href;this.$store.commit("layout/share",{is_open:!0,url:t,title:this.product.make+" "+this.product.model})}},created:function(){switch(this.estimation_rate=parseInt(100*this.product.estimated_price/this.product.price),this.product.estimated_price=100*Math.floor(this.product.estimated_price/100),!0){case null==this.product.price||0==this.product.price:this.estimation_item=this.estimation_items[6];break;case this.product.estimation_count<=3:this.estimation_rate=0,this.estimation_item=this.estimation_items[6];break;case this.estimation_rate<=0||this.estimation_rate>=200:this.estimation_item=this.estimation_items[0];break;case this.estimation_rate<70:this.estimation_item=this.estimation_items[1];break;case this.estimation_rate<90:this.estimation_item=this.estimation_items[2];break;case this.estimation_rate>=90&&this.estimation_rate<=110:this.estimation_item=this.estimation_items[3];break;case this.estimation_rate>110&&this.estimation_rate<=120:this.estimation_item=this.estimation_items[4];break;case this.estimation_rate>120&&this.estimation_rate<=150:this.estimation_item=this.estimation_items[5];break;case this.estimation_rate>150:this.estimation_item=this.estimation_items[0]}}},d=r(20),m=r(26),_=r.n(m),v=r(202),h=r(196),f=r(197),y=r(19),x=r(451),k=r(452),C=r(407),w=r(128),$=r(453),V=r(129),O=r(74),P=r(409),j=r(410),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"shadow--face",class:{"elevation-0":t.$vuetify.breakpoint.smAndDown},attrs:{tile:t.$vuetify.breakpoint.smAndDown}},[r("v-list-item",{staticClass:"pa-1 px-1 pr-2"},[r("v-avatar",{staticClass:"mx-2",attrs:{left:"",size:"35",color:t.estimation_item.color}},[r("span",{staticClass:"white--text headline capitalize"},[t._v(t._s(t.product.seller[0]))])]),t._v(" "),r("v-list-item-content",{staticClass:"py-0 pb-0"},[r("h4",{staticClass:"font-weight-bold body-2 mb-0 capitalize"},[t._v(t._s(t.product.seller))]),t._v(" "),r("v-list-item-title",{staticClass:"caption"},[r("client-only",[r("time-ago",{attrs:{datetime:t.product.last_updated,locale:t.$i18n.locale}}),t._v(",\n        ")],1),t._v("\n        "+t._s(t.$t(t.product.governorate))+t._s(t.product.city?", "+t.$t(t.product.city):"")+"\n      ")],1)],1),t._v(" "),r("client-only",[1==t.product.is_sold?r("v-btn",{staticClass:"warning elevation-0 mr-1 is_ltr",attrs:{depressed:"",dark:""}},[r("v-icon",[t._v("mdi-alert-circle-outline")]),t._v(" "),r("span",{staticClass:"ml-1"},[t._v("Vendu")])],1):t._e(),t._v(" "),r("span",{staticClass:"float-right",staticStyle:{position:"relative","z-index":"2"}},[r("v-btn",{staticClass:"white px-0",attrs:{depressed:""},on:{click:t.share}},[r("v-icon",[t._v("mdi-share")])],1),t._v(" "),r("Favorite",{staticClass:"white px-0",attrs:{product_id:t.product.id}})],1)],1)],1),t._v(" "),r("div",{staticClass:"grey darken-5"},[r("span",{staticClass:"image_thumb_imfo grey darken-4 border-radius px-1 grey--text"},[t._v("\n      "+t._s(t.image_index+1)+"/"+t._s(t.product.image.length)+"\n      "),r("v-icon",{staticClass:"grey--text"},[t._v("mdi-camera")])],1),t._v(" "),r("v-lazy",{attrs:{"min-height":t.$vuetify.breakpoint.smAndDown?"220":"200",transition:"fade-transition"},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[r("client-only",[r("v-carousel",{attrs:{lazy:"",continuous:!0,"show-arrows":t.product.image.length>1,"hide-delimiter-background":"",cycle:!1,"hide-delimiters":"",height:t.$vuetify.breakpoint.smAndDown?"220":"200"},model:{value:t.image_index,callback:function(e){t.image_index=e},expression:"image_index"}},t._l(t.product.image,(function(img,i){return r("v-carousel-item",{key:i},[r("nuxt-link",{attrs:{to:t.localePath({name:"car-id",params:{id:t.product.url_id}})}},[r("div",{staticClass:"align-self-cente grey darken-4 height-100"},[r("img",{staticClass:"center-in",attrs:{src:img,alt:"Carte voiture "+t.product.make+" "+t.product.model}})])])],1)})),1)],1)],1)],1),t._v(" "),r("nuxt-link",{staticClass:"black--text",attrs:{to:t.localePath({name:"car-id",params:{id:t.product.url_id}})}},[r("v-list-item-content",{staticClass:"pa-1 px-2"},[r("v-card-actions",{staticClass:"pa-0"},[r("h1",{staticClass:"font-weight-black title"},[t._v(t._s(t.product.make)+" "+t._s(t.product.model))]),t._v(" "),r("v-spacer"),t._v(" "),r("div",{staticClass:"caption text-right font-weight-bold"},[t._v(t._s(t.estimation_item.name))])],1),t._v(" "),r("v-card-actions",{staticClass:"pa-0"},[r("h3",{staticClass:"title font-weight-black"},[t._v(t._s(t.f_numberFormat(t.product.price,t.$t("currency"))))]),t._v(" "),r("v-spacer"),t._v(" "),r("Indicator",{attrs:{value:t.estimation_item.rate,color:t.estimation_item.color}})],1)],1),t._v(" "),r("v-list-item",{staticClass:"px-2",style:{"min-height":t.$vuetify.breakpoint.smAndDown?"":"40px"},attrs:{"three-line":""}},[null!=t.description?r("v-list-item-subtitle",{staticClass:"caption capitalize",class:t.isArabic(t.description)?"is_rtl":"",domProps:{innerHTML:t._s(t.description)}}):t._e()],1),t._v(" "),r("v-row",{staticClass:"ma-0 mt-1 card-detail text-center",attrs:{"no-gutters":""}},[r("v-col",{staticClass:"pb-2 font-weight-bold caption",attrs:{cols:"4"}},[t._v(t._s(t.product.year?t.product.year:t.$t("NC")))]),t._v(" "),r("v-col",{staticClass:"pb-2 font-weight-bold caption",attrs:{cols:"4"}},[t._v(t._s(t.product.odometer?t.f_numberFormat(t.product.odometer,t.$t("Km")):t.$t("NC")))]),t._v(" "),r("v-col",{staticClass:"pb-2 font-weight-bold caption",attrs:{cols:"4"}},[t._v(t._s(t.product.fuel_type?t.product.fuel_type:t.$t("NC")))])],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;_()(component,{VAvatar:v.a,VBtn:h.a,VCard:f.a,VCardActions:y.a,VCarousel:x.a,VCarouselItem:k.a,VCol:C.a,VIcon:w.a,VLazy:$.a,VListItem:V.a,VListItemContent:O.a,VListItemSubtitle:O.b,VListItemTitle:O.c,VRow:P.a,VSpacer:j.a})},466:function(t,e,r){t.exports=r.p+"img/d0b9998.png"},536:function(t,e,r){"use strict";r.r(e);r(13),r(9),r(8),r(6),r(10);var o=r(1),n=(r(38),r(14)),c=(r(194),r(218)),l=r(466),d=r.n(l),m=r(435);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v={components:{TimeAgo:c.a,Logo:d.a,Product:m.a},data:function(){return{items:[],products:[],is_overflow_open:!1,push_token:null}},computed:{favorite:function(){return this.$store.state.action.favorite}},watch:{"$store.state.user.is_auth":function(t){this.init()}},methods:{getPermission:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.$set(e,"is_notified_loading",!0),!e.is_notified){t.next=15;break}return r.is_overflow_open=!0,t.prev=3,t.next=6,r.$push.set();case 6:r.push_token=t.sent,r.push_token?e.is_notified=!0:e.is_notified=!1,t.next=12;break;case 10:t.prev=10,t.t0=t.catch(3);case 12:r.is_overflow_open=!1,t.next=16;break;case 15:e.is_notified=!1;case 16:return t.next=18,r.$api.put("public/saved-search/is_notified",{id:e.id,push_token:r.push_token,is_notified:e.is_notified});case 18:e.is_notified_loading=!1;case 19:case"end":return t.stop()}}),t,null,[[3,10]])})))()},init:function(){var t=this;this.$api.get("public/saved-search/all",{params:this.saved_filter,is_alerted:this.is_alerted}).then((function(e){var r=e.data.result;t.items=r.map((function(e){var filter={};e.make&&(filter.make=e.make),e.model&&(filter.model=e.model),e.md_fuel_type&&(filter.md_fuel_type=e.md_fuel_type),e.md_color&&(filter.md_color=e.md_color),e.md_gearbox&&(filter.md_gearbox=e.md_gearbox),e.md_color&&(filter.md_color=e.md_color);var r=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},filter);return e.min_price&&(filter.price=e.min_price+t.$t("currency")+" - "+e.max_price+t.$t("currency"),r.min_price=e.min_price,r.max_price=e.max_price),e.min_odometer&&(filter.odometer=e.min_odometer+t.$t("Km")+" - "+e.max_odometer+t.$t("Km"),r.min_odometer=e.min_odometer,r.max_odometer=e.max_odometer),e.min_year&&(filter.year=e.min_year+" - "+e.max_year,r.min_year=e.min_year,r.max_year=e.max_year),e.filter=filter,e.params=r,e}))})),this.$api.get("public/action/meta",{params:{meta_key:"visited_product",max:4}}).then((function(e){t.products=e.data.result}))},selectModel:function(t){t.make&&t.model?this.$router.push(this.localePath({name:"car-data-make-model",params:t,query:t})):t.make?this.$router.push(this.localePath({name:"car-data-make",params:t,query:t})):this.$router.push(this.localePath({name:"car-data",query:t}))},deleteItem:function(t){var e=this;this.$api.delete("public/saved-search/",{params:{id:t.id}}).then((function(r){e.items=e.items.filter((function(e){return e.id!=t.id}))}))},updateSavedSearch:function(t){this.$store.state.user.is_auth?this.$api.put("public/saved-search/is_alerted",{id:t.id,is_alerted:t.is_alerted}):(setTimeout((function(){t.is_alerted=!1}),100),this.$store.commit("layout/is_login_open",!0))}},mounted:function(){this.init()}},h=r(20),f=r(26),y=r.n(f),x=r(196),k=r(197),C=r(19),w=r(407),$=r(426),V=r(392),O=r(479),P=r(480),j=r(481),A=r(475),I=r(128),S=r(129),T=r(409),D=r(410),z=r(485),E=r(68),L=r(140),R=r.n(L),M=r(55),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{class:{"overflow cp":t.is_overflow_open},staticStyle:{"z-index":"9999999999!important"},on:{click:function(e){t.is_overflow_open=!1}}}),t._v(" "),r("v-toolbar",{attrs:{dense:""}},[r("v-icon",{staticClass:"mx-2"},[t._v("mdi-content-save-outline")]),t._v(" "),r("h3",[t._v("Mes recherches enregistrées")])],1),t._v(" "),r("v-container",{class:{"pa-1":t.$vuetify.breakpoint.smAndDown}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"8",md:"5"}},[r("v-expansion-panels",{attrs:{flat:""}},t._l(t.items,(function(e,o){return r("v-expansion-panel",{key:o,staticClass:"mb-3 stripe-btn border-radius overflow-hidden"},[r("v-list-item",{staticClass:"px-0"},[r("v-expansion-panel-header",{staticClass:"pa-2 py-3"},[r("div",[r("h4",{staticClass:"mb-1"},[t._v(t._s(e.name))]),t._v(" "),r("client-only",[r("small",[r("time-ago",{attrs:{refresh:1,datetime:e.date,locale:t.$i18n.locale}})],1)])],1)]),t._v(" "),r("v-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"text-center font-weight-bold cp ma-1 border-radius white--text green px-2",attrs:{large:"",text:""},on:{click:function(r){return t.selectModel(e.params)}}},[t._v("Analyser")]),t._v(" "),r("v-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"text-center font-weight-bold cp ma-1 border-radius white--text primary px-2",attrs:{large:"",to:t.localePath({name:"search",query:e.params}),text:""},nativeOn:{click:function(e){return t.$store.commit("layout/is_keep_alive",!1)}}},[t._v("Rechercher")])],1),t._v(" "),e.filter?r("v-expansion-panel-content",[r("div",{staticClass:"pa-2 body-2"},t._l(Object.keys(e.filter),(function(o){return r("div",{key:o},[t._v(t._s(t.$t(o))+" : "+t._s(e.filter[o].split(",").map((function(e){return t.$t(e)})).join(", ")))])})),0)]):t._e(),t._v(" "),r("v-divider"),t._v(" "),r("div",{staticClass:"grey lighten-5"},[r("v-card-actions",{staticClass:"pa-1 px-2"},[r("v-switch",{staticClass:"ma-0 pa-1 pr-0 float-right black--text title",attrs:{inset:"",label:"",color:"indigo","hide-details":""},on:{change:function(r){return t.updateSavedSearch(e)}},model:{value:e.is_alerted,callback:function(r){t.$set(e,"is_alerted",r)},expression:"item.is_alerted"}}),t._v(" "),r("span",[t._v("\n                  Recevoir\n                  "),r("b",[t._v("une alerte email ?")])])],1),t._v(" "),r("v-card-actions",{staticClass:"pa-1 px-1"},[r("v-switch",{staticClass:"ma-0 pa-1 pr-0 float-right black--text title",attrs:{inset:"",labels:"",loading:e.is_notified_loading,color:"indigo","hide-details":""},on:{change:function(r){return t.getPermission(r,e)}},model:{value:e.is_notified,callback:function(r){t.$set(e,"is_notified",r)},expression:"item.is_notified"}}),t._v(" "),r("span",{staticClass:"cp"},[t._v("\n                  Recevoir des\n                  "),r("b",[t._v("Notifications?")])]),t._v(" "),r("v-spacer"),t._v(" "),r("v-icon",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"mx-2 cp red--text",on:{click:function(r){return t.deleteItem(e)}}},[t._v("mdi-delete")])],1)],1)],1)})),1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"4",md:"7"}},[r("v-row",{attrs:{"bo-gutters":""}},t._l(t.products,(function(e,o){return r("v-col",{key:o,staticClass:"pa-1",attrs:{cols:"12",md:"6"}},[r("v-card",{staticClass:"stripe-btn"},[r("v-card-actions",[r("time-ago",{attrs:{datetime:e.action.date}}),t._v(" "),r("v-spacer"),t._v("\n                ("+t._s(e.action.number)+" fois)\n              ")],1),t._v(" "),r("v-divider"),t._v(" "),r("Product",{attrs:{product:e}})],1)],1)})),1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{VBtn:x.a,VCard:k.a,VCardActions:C.a,VCol:w.a,VContainer:$.a,VDivider:V.a,VExpansionPanel:O.a,VExpansionPanelContent:P.a,VExpansionPanelHeader:j.a,VExpansionPanels:A.a,VIcon:I.a,VListItem:S.a,VRow:T.a,VSpacer:D.a,VSwitch:z.a,VToolbar:E.a}),R()(component,{Ripple:M.a})}}]);