(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{407:function(t,e,r){},412:function(t,e,r){"use strict";r(12),r(9),r(7),r(5),r(10);var n=r(1),o=r(371),c=r(147),l=r(4),d=r(0),h=r(47);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=Object(l.a)(o.a,h.a);e.a=v.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(c.a,{staticClass:"v-carousel__item",props:f(f({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(d.o)(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,data=t.data;return data.staticClass="v-window-item",data.directives.push({name:"show",value:this.isActive}),this.$createElement(e,data,this.genDefaultSlot())}}})},413:function(t,e,r){"use strict";r(12),r(9),r(7),r(5),r(10);var n=r(1),o=(r(14),r(407),r(150)),c=r(56),l=r(32),d=r(127),h=r(53),m=h.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return h.a.options.computed.classes.call(this)}},methods:{genData:h.a.options.methods.genData}}),f=r(0),v=r(11);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return y(y({},o.a.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(v.a)("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:o.a.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,r=[],i=0;i<e;i++){var n=this.$createElement(c.a,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(l.a,{props:{size:18}},this.delimiterIcon)]);r.push(n)}return this.$createElement(m,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},r)},genProgress:function(){return this.$createElement(d.a,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=o.a.options.render.call(this,t);return e.data.style="height: ".concat(Object(f.f)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},443:function(t,e,r){t.exports=r.p+"img/voiture-verifie.6605de5.svg"},444:function(t,e,r){t.exports=r.p+"img/64x64-icon.174e7f8.png"},445:function(t,e,r){t.exports=r.p+"img/certify.139e519.png"},455:function(t,e,r){"use strict";r(40),r(33);var n={components:{TimeAgo:r(184).a},props:{product:{default:[]},path_name:{default:"inspected-car-id"},is_certif:{default:!0}},data:function(){return{image_index:0,is_show_phone:!1,isActive:!1}},computed:{color:function(){return this.product.price_description?this.$t("COLOR_"+this.product.price_description):(this.product.price_median,"green")},description:function(){return this.product.description?((this.product.title||" ").replace("- Tayara","")!=this.product.make+" "+this.product.model?"<b>"+(this.product.title||" ").replace("- Tayara","")+"</b> - ":"")+(this.product.description||" ").split("\\n").join(" ").replace(/<\/?[^>]+(>|$)/g,""):(this.product.title||" ").replace("- Tayara","")!=this.product.make+" "+this.product.model?"<b >"+(this.product.title||" ").replace("- Tayara","")+"</b>":""}},methods:{share:function(){var t="https://www.autoprix.tn"+this.$router.resolve(this.localePath({name:"car-id",params:{id:this.product.url_id}})).href;this.$store.commit("layout/share",{is_open:!0,url:t,title:this.product.make+" "+this.product.model})}},created:function(){}},o=r(18),c=r(22),l=r.n(c),d=r(179),h=r(172),m=r(174),f=r(15),v=r(413),_=r(412),y=r(389),w=r(114),x=r(115),O=r(51),C=r(391),$=r(392),k=r(126),j=r.n(k),T=r(52),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"stripe-bt elevation-0",attrs:{tile:""}},[n("v-list-item",{staticClass:"pa-1 px-1 pr-2"},[n("v-avatar",{staticClass:"mx-2 white--text headline capitalize",attrs:{left:"",size:"35",color:t.color}},[n("img",{attrs:{src:r(444),alt:"AUTOPRIX"}})]),t._v(" "),n("v-list-item-content",{staticClass:"py-0 pb-0"},[n("h4",{staticClass:"font-weight-bold body-2 mb-0 capitalize"},[t._v("Autoprix")]),t._v(" "),n("v-list-item-title",{staticClass:"caption"},[n("time-ago",{attrs:{datetime:t.product.last_updated,locale:t.$i18n.locale}}),t._v("· "+t._s(t.$t(t.product.governorate))+t._s(t.product.city?", "+t.$t(t.product.city):"")+"\n      ")],1)],1),t._v(" "),1==t.product.is_sold?n("v-btn",{staticClass:"warning elevation-0 mr-1 is_ltr",attrs:{depressed:"",dark:""}},[n("v-icon",[t._v("mdi-alert-circle-outline")]),t._v("\n      "+t._s(t.$t("sell"))+"\n    ")],1):t._e(),t._v(" "),n("v-icon",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"black--text mx-1",on:{click:t.share}},[t._v("mdi-share-variant")])],1),t._v(" "),n("span",{staticClass:"image_thumb_imfo grey darken-4 border-radius px-1 grey--text"},[t._v("\n    "+t._s(t.image_index+1)+"/"+t._s(t.product.image.length)+"\n    "),n("v-icon",{staticClass:"grey--text"},[t._v("mdi-camera")])],1),t._v(" "),n("v-carousel",{staticClass:"ads grey darken-4",attrs:{continuous:!0,"show-arrows":t.product.image.length>1,"hide-delimiter-background":"",cycle:!1,"hide-delimiters":"",height:220},model:{value:t.image_index,callback:function(e){t.image_index=e},expression:"image_index"}},t._l(t.product.image,(function(img,i){return n("v-carousel-item",{key:i},[n("nuxt-link",{staticClass:"align-self-cente height-100",attrs:{to:t.localePath({name:t.path_name,params:{id:t.product.url_id},query:{ref:"q"}})}},[n("img",{staticClass:"center-in",attrs:{src:img,alt:"Carte voiture "+t.product.make+" "+t.product.model}})])],1)})),1),t._v(" "),n("v-card-actions",{staticClass:"pa-0 estim-block"},[n("v-card-actions",{staticClass:"estim pa-1 pb-0 green--text"},[n("img",{attrs:{src:r(445),height:"25",alt:"Certify"}}),t._v(" "),n("span",{staticClass:"mx-1"},[t._v(t._s(t.$t("certifed_par_short")))])]),t._v(" "),n("v-spacer"),t._v(" "),n("span",{staticClass:"font-weight-black black--text rounded price-card"},[t._v("\n      "+t._s(t.f_numberFormat(t.product.price,t.$t("currency")))+"\n    ")])],1),t._v(" "),n("nuxt-link",{staticClass:"black--text",attrs:{to:t.localePath({name:t.path_name,params:{id:t.product.url_id},query:{ref:"ad"}})}},[n("h3",{staticClass:"title px-2 pt-2"},[t._v(t._s(t.product.make)+" "+t._s(t.product.model))]),t._v(" "),n("v-list-item",{staticClass:"px-2",attrs:{"three-line":""}},[null!=t.description?n("v-list-item-subtitle",{staticClass:"caption line-17",class:t.isArabic(t.description)?"is_rtl":"",style:{"min-height":t.$vuetify.breakpoint.smAndDown?"":"40px"},domProps:{innerHTML:t._s(t.description)}}):t._e()],1),t._v(" "),n("v-row",{staticClass:"ma-0 mt-1 card-detail text-center",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pb-2 font-weight-bold caption",attrs:{cols:"4"}},[t._v(t._s(t.product.year?t.product.year:t.$t("nc")))]),t._v(" "),n("v-col",{staticClass:"pb-2 font-weight-bold caption",attrs:{cols:"4"}},[t._v(t._s(t.product.odometer?t.f_numberFormat(t.product.odometer,t.$t("km")):t.$t("nc")))]),t._v(" "),n("v-col",{staticClass:"pb-2 font-weight-bold caption",attrs:{cols:"4"}},[t._v(t._s(t.product.fuel_type?t.$t(t.product.fuel_type):t.$t("nc")))])],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VAvatar:d.a,VBtn:h.a,VCard:m.a,VCardActions:f.a,VCarousel:v.a,VCarouselItem:_.a,VCol:y.a,VIcon:w.a,VListItem:x.a,VListItemContent:O.a,VListItemSubtitle:O.b,VListItemTitle:O.c,VRow:C.a,VSpacer:$.a}),j()(component,{Ripple:T.a})},526:function(t,e,r){"use strict";r.r(e);r(12),r(9),r(7),r(5),r(10),r(25),r(247);var n=r(1),o=(r(27),r(8)),c=(r(14),{props:{label:{default:"0.00"},inc:{type:Number,default:1e3},init_value:{type:Number,default:0}},data:function(){return{value:0}},watch:{init_value:function(t){t||(t=0),this.value=parseFloat(t)}},methods:{field:function(){this.$emit("change",this.value)},plus:function(){this.value=parseFloat(this.value?this.value:0)+parseFloat(this.inc),this.$emit("change",this.value)},minus:function(){this.value>0&&(this.value=this.value-parseFloat(this.inc)),this.$emit("change",this.value)}},computed:{format:function(){return this.$method.moneyFormat(this.value)}},mounted:function(){this.value=this.init_value}}),l=r(18),d=r(22),h=r.n(d),m=r(172),f=r(15),v=r(114),_=r(392),y=r(378),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card-actions",{staticClass:"pa-0 field-range white"},[r("v-text-field",{staticClass:"subtitle-2 mx-1",attrs:{outlined:"",type:"number",flat:"",dense:"","hide-details":"",label:t.label,suffix:"DT"},on:{input:t.field},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"mx-1 rounded",attrs:{outlined:"",color:"grey",height:"41"},on:{click:function(e){return t.minus()}}},[r("v-icon",[t._v("mdi-minus")])],1),t._v(" "),r("v-btn",{staticClass:"mx-1 rounded",attrs:{outlined:"",color:"grey",height:"41"},on:{click:function(e){return t.plus()}}},[r("v-icon",[t._v("mdi-plus")])],1)],1)],1)}),[],!1,null,null,null),w=component.exports;h()(component,{VBtn:m.a,VCardActions:f.a,VIcon:v.a,VSpacer:_.a,VTextField:y.a});var x={props:{items:{type:Array}},data:function(){return{elements:[]}},watch:{items:function(t){this.elements=t.filter((function(t){return t.text}))}},created:function(){this.elements=this.items.filter((function(t){return t.text}))}},O=r(51),C=Object(l.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-list-item-title",[r("ul",{staticClass:"v-breadcrumbs new px-0 v-breadcrumbs--large theme--light py-1 overflow-x-auto",attrs:{itemscope:"",itemtype:"https://schema.org/BreadcrumbList"}},[t._l(t.elements,(function(e,n){return[e.text?r("li",{key:n,attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"}},[r("nuxt-link",{staticClass:"v-breadcrumbs__item font-weight-bold",class:{"v-breadcrumbs__item--disabled":n==t.elements.length-1&&t.elements.length>1&&!e.show},attrs:{itemprop:"item",to:t.localePath(Object.assign({},e.path))}},[r("span",{attrs:{itemprop:"name"}},[t._v(t._s(e.text))])]),t._v(" "),r("meta",{attrs:{itemprop:"position",content:n+1}})],1):t._e(),t._v(" "),e.text&&n!=t.elements.length-1?r("li",{key:"i"+n,staticClass:"v-breadcrumbs__divider"},[t._v("\n          /\n        ")]):t._e()]}))],2)])],1)}),[],!1,null,null,null),$=C.exports;function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}h()(C,{VListItemTitle:O.c});var T={components:{NumberRange:w,BreadCrumbs:$,ProductCertify:r(455).a},data:function(){return{is_load:!1,price_menu:!1,query:{},params:{},filter:{cp:1},sorts:[{key:"new"},{key:"price_asc"},{key:"price_desc"}],sort:null,products:[],detail:{},meta:{title:null}}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.store,r=t.query,n=t.params,o=t.app,c=[],l={},d=0,e.next=6,o.$api.get("public/car/all",{params:j(j({},r),n)}).then((function(t){c=t.data.result,l=t.data.detail,d=t.data.runtime})).catch((function(t){}));case 6:return e.abrupt("return",{products:c,detail:l,runtime:d,meta:{}});case 7:case"end":return e.stop()}}),e)})))()},watch:{"$route.query.sort_key":function(t){this.search(),this.f_goToUp()},"$route.query.min_price":function(t){this.search(),this.f_goToUp()},"$route.query.max_price":function(t){this.search(),this.f_goToUp()},"$route.query.cp":function(t){this.filter.cp=parseInt(t),this.search(),this.f_goToUp()},"$route.query.q":function(t){var e=this;this.filter.cp=1,this.filter.q=t,this.search(),setTimeout((function(){e.f_goToUp()}),11)},"$route.params.q":function(t){this.filter.cp=1,this.search(),this.f_goToUp()},"$route.params.city":function(t){this.filter.cp=1,this.search(),this.f_goToUp()},"$route.query.category":function(t){this.filter.gecategory=t,this.search()},"$route.query.generalcategory":function(t){this.filter.generalcategory=t,this.search()}},beforeRouteEnter:function(t,e,r){r(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.name&&(e.name.indexOf("product"),r.f_goToUp());case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},methods:{setFilter:function(t,e){if(this.$set(this.filter,e,t),this.filter.min_price>=this.filter.max_price&&(this.filter.max_price=parseInt(this.filter.min_price)+10),"sort"==e){switch(this.sort=t.key,this.filter.sort_key=t.key,t.key){case"new":this.filter.sortby="id",this.filter.sort_type="desc";break;case"price_asc":this.filter.sortby="price",this.filter.sort_type="asc";break;case"price_desc":this.filter.sortby="price",this.filter.sort_type="desc"}delete this.filter.sort}"cp"!=e&&(this.filter.cp=1),this.$router.push({name:this.$route.name,params:j({},this.$route.params),query:j({},this.filter)})},search:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.is_load=!0,e.next=3,t.$api("public/car/all",{params:j(j(j({},t.$route.params),t.$route.query),{},{date:380})}).then((function(e){t.products=e.data.result,t.detail=e.data.detail}));case 3:t.is_load=!1;case 4:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.params=this.$route.params,this.filter=j(j({},this.filter),this.$route.query)},created:function(){}},P=r(174),V=r(389),D=r(404),I=r(391),S=Object(l.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",[n("BreadCrumbs",{attrs:{items:[{text:t.$t("home"),path:{name:"index"}},{text:t.$t("certifed_car"),path:{name:"index-search-city",params:{city:t.$route.params.city}}}]}}),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",md:"10"}},[n("nuxt-link",{staticClass:"black--text",attrs:{to:t.localePath({name:"inspected-new"})}},[n("v-card-actions",{staticClass:"pa-2 primary white--text rounded title my-2 font-weight-bold stripe-btn",staticStyle:{"max-width":"220px"}},[t._v("Vendre ma voiture\n            "),n("v-spacer"),t._v(" "),n("img",{staticClass:"mx-1",attrs:{src:r(443),height:"38",alt:"Certify"}})],1)],1),t._v(" "),n("h1",{staticClass:"my-2 headline font-weight-black"},[t._v("\n          Achetez une voiture inspectée par un expert\n        ")]),t._v(" "),n("div",{staticClass:"body-1 font-weight-bold mr-2"},[t._v("\n          "+t._s(t.detail.total)+" voitures contrôlées\n        ")]),t._v(" "),n("v-row",{staticClass:"mt-2",attrs:{dense:""}},[t._l(t.products,(function(t,e){return[n("v-col",{key:t.id,attrs:{md:"6",sm:"6",cols:"12"}},[n("ProductCertify",{staticClass:"rounded",attrs:{product:t}})],1)]}))],2),t._v(" "),n("v-card-actions",{staticClass:"mt-3"},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:"",exact:"",to:{name:"index-search",query:Object.assign({},t.filter,{cp:parseInt(t.$route.query.cp?t.$route.query.cp:2)-1})},disabled:t.filter.cp<2}},[n("v-icon",[t._v(t._s(t.$t("arrow_left")))])],1),t._v(" "),n("div",{staticClass:"mx-2"},[t._v("\n            Page:\n            "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.cp,expression:"filter.cp"}],staticClass:"white rounded mx-2 pa-2 shadow",staticStyle:{"max-width":"60px"},attrs:{type:"number",max:t.detail.pages},domProps:{value:t.filter.cp},on:{change:function(e){t.setFilter(parseInt(t.filter.cp),"cp")},input:function(e){e.target.composing||t.$set(t.filter,"cp",e.target.value)}}}),t._v("\n            of "+t._s(t.detail.pages)+"\n          ")]),t._v(" "),n("v-btn",{attrs:{icon:"",exact:"",to:{name:"index-search",query:Object.assign({},t.filter,{cp:parseInt(t.$route.query.cp?t.$route.query.cp:1)+1})},disabled:t.filter.cp>t.detail.pages-1}},[n("v-icon",[t._v(t._s(t.$t("arrow_right")))])],1),t._v(" "),n("v-spacer")],1),t._v(" "),n("v-card",{staticClass:"body-1 pa-1 transparent elevation-0 font-weight-bold"},[t._v("\n          Autoprix est un intermédiaire de confiance dans la vente de\n          véhicules entre particuliers. Tous nos véhicules sont de qualité et\n          inspectés. Achetez un véhicule avec Autoprix, c’est aussi avoir\n          l’accès à un rapport d’expert, et être accompagné à chaque étape du\n          processus. La promesse d’un achat sans surprise !\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=S.exports;h()(S,{VBtn:m.a,VCard:P.a,VCardActions:f.a,VCol:V.a,VContainer:D.a,VIcon:v.a,VRow:I.a,VSpacer:_.a})}}]);