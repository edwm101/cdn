(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{447:function(t,e,r){"use strict";var n={props:{path:{defaul:!1},always:{defaul:!1}},methods:{goTo:function(){this.$router.go(-1)||this.$router.push(this.localePath({name:this.path}))}}},o=r(19),c=r(22),l=r.n(c),v=r(184),m=r(119),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-btn",{staticClass:"mr-1",attrs:{color:"primary",small:"",icon:""}},[r("v-icon",{staticClass:"font-weight-black mx-2 black--text",attrs:{large:""},on:{click:function(e){return t.goTo()}}},[t._v("mdi-arrow-left")])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VBtn:v.a,VIcon:m.a})},485:function(t,e,r){},504:function(t,e,r){"use strict";r.r(e);r(13),r(10),r(8),r(7),r(11);var n,o=r(1),c=(r(29),r(9));r(26);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=(n={components:{GoBack:r(447).a},data:function(){return{is_show_phone:!1,is_passed_order:!1,info:{},loading:!1,valid:!1,is_show_arrow:!1,dialog:!1,params:{},service:{},services:[],cities:[]}},head:function(){return{title:this.meta.title,meta:[{hid:"description",name:"description",content:this.meta.description},{hid:"og:title",property:"og:title",content:this.meta.title+" - autoprix.tn"},{hid:"og:description",property:"og:description",content:this.meta.description},{hid:"og:image",property:"og:image",content:this.meta.image}],script:[{"@context":"http://schema.org","@type":"Product",image:this.service.image,url:"https://api.autoprix.tn/v1"+this.$router.currentRoute.fullPath,name:this.service.name,offers:{"@type":"Offer",price:this.service.price}}]}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,v,m,title;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,n=t.error,t.env,o=t.app,l={},v=[],m=[],title=null,e.next=7,o.$api("public/service",{params:{id:r.id}}).then(function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=e.data.result,title=l.name+" en Tunisie",t.next=4,o.$api("public/service/all",{}).then((function(t){m=t.data.result}));case 4:return t.next=6,o.$api.get("public/filter/city").then((function(t){v=t.data.result}));case 6:return t.abrupt("return",{service:l,services:m,cities:v,meta:{title:title,description:l.short_description,image:l.image}});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){n({statusCode:404,message:t})}));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))()},beforeRouteEnter:function(t,e,r){r(function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.name?r.is_show_arrow=!0:r.is_show_arrow=!1;case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},watch:{"info.phone":function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(8!=t.length){r.next=8;break}return e.$cookies.set("user-data",JSON.stringify(e.info),{path:"/",maxAge:604800}),r.next=4,e.$recaptcha.getToken();case 4:n=r.sent,o=null,e.$cookies.get("last_product")&&(o=e.$cookies.get("last_product")),e.$api.post("public/service/order",v(v({},e.info),{},{service_id:e.params.id,url:o,recaptcha_token:n}));case 8:case"end":return r.stop()}}),r)})))()}},methods:{send:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$refs.form.validate(),!t.valid){e.next=12;break}return t.$cookies.set("user-data",JSON.stringify(t.info),{path:"/",maxAge:604800}),t.loading=!0,e.next=6,t.$recaptcha.getToken();case 6:return r=e.sent,n=null,t.$cookies.get("last_product")&&(n=t.$cookies.get("last_product")),e.next=11,t.$api.post("public/service/order",v(v({},t.info),{},{service_id:t.params.id,url:n,recaptcha_token:r})).then((function(e){t.is_passed_order=!0}));case 11:t.loading=!1;case 12:case"end":return e.stop()}}),e)})))()}},computed:{rules:function(){var t=this;return{required:function(e){return!!e||t.$t("required")},min:function(e){return e&&e.length>=8||t.$t("_8_caracters")}}}}},Object(o.a)(n,"beforeRouteEnter",(function(t,e,r){r(function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.is_passed_order=!1;case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())})),Object(o.a)(n,"mounted",(function(){this.params=this.$route.params,this.$cookies.get("user-data")?this.info=this.$cookies.get("user-data"):this.$cookies.get("user-estimation-data")&&(this.info=this.$cookies.get("user-estimation-data"))})),n),d=r(19),_=r(22),h=r.n(_),f=(r(15),r(485),r(371));function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x=f.a.extend({name:"v-bottom-sheet",props:{inset:Boolean,maxWidth:{type:[String,Number],default:"auto"},transition:{type:String,default:"bottom-sheet-transition"}},computed:{classes:function(){return C(C({},f.a.options.computed.classes.call(this)),{},{"v-bottom-sheet":!0,"v-bottom-sheet--inset":this.inset})}}}),y=r(184),k=r(185),$=r(16),O=r(387),j=r(395),P=r(369),V=r(390),R=r(119),L=r(158),S=r(121),T=r(189),D=r(55),A=r(388),E=r(505),I=r(41),B=r(389),F=r(375),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"is_ltr white"},[r("v-container",[r("ul",{staticClass:"breadcrumb ma-1 my-1 is_ltr",attrs:{itemscope:"",itemtype:"http://schema.org/BreadcrumbList"}},[r("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"http://schema.org/ListItem"}},[r("nuxt-link",{attrs:{to:t.localePath({name:"index"}),itemprop:"item"}},[r("span",{attrs:{itemprop:"name"}},[t._v(t._s(t.$t("home")))])]),t._v(" "),r("meta",{attrs:{itemprop:"position",content:"1"}})],1),t._v(" "),r("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"http://schema.org/ListItem"}},[r("nuxt-link",{attrs:{to:t.localePath({name:"service"}),itemprop:"item"}},[r("span",{attrs:{itemprop:"name"}},[t._v(t._s(t.$t("our_service")))])]),t._v(" "),r("meta",{attrs:{itemprop:"position",content:"2"}})],1)]),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12",md:"7"}},[r("v-card",{staticClass:"mx-auto elevation-0 transparent"},[r("v-row",{attrs:{"three-line":"","no-gutters":""}},[r("v-col",{staticClass:"pa-1 pb-0",attrs:{cols:"12",sm:"4"}},[r("v-img",{staticClass:"rounded mx-auto stripe-btn",attrs:{tile:"",alt:t.service.name,color:"grey","max-height":"200",src:t.service.image}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"8"}},[r("v-list-item-content",{staticClass:"pa-3 pt-2"},[r("h1",{staticClass:"headline mt-2 mb-2 font-weight-bold",class:t.isArabic(t.service.name)?"is_rtl":""},[t._v("\n                  "+t._s(t.service.name)+"\n                ")]),t._v(" "),r("v-list-item-subtitle",{staticClass:"caption pa-0 ma-0"},[r("nuxt-link",{attrs:{to:t.localePath({name:"service"})}},[r("div",{staticClass:"body-2 green--text"},[t._v(t._s(t.service.service_category)+" - Ref : #"+t._s(t.service.id))])])],1),t._v(" "),r("h3",{staticClass:"body-1 font-weight-medium mt-3",class:t.isArabic(t.service.short_description)?"is_rtl":""},[t._v(t._s(t.service.short_description))])],1),t._v(" "),r("v-divider"),t._v(" "),r("div",{staticClass:"subtitle font-weight-bold pa-2 px-4"},[t.service.price_description?r("span",{domProps:{innerHTML:t._s(t.service.price_description)}}):t.service.price?r("span",[t._v("\n                  "+t._s(t.$method.f_numberFormat(t.service.price,t.$t("currency")))+"\n                ")]):t._e()]),t._v(" "),r("v-card-actions",{staticClass:"pa-1"},[r("v-spacer"),t._v(" "),r("a",{attrs:{href:"tel:56 816 341"}},[r("v-btn",{staticClass:"green stripe-btn title",attrs:{dark:""},on:{click:function(e){t.is_show_phone=!t.is_show_phone}}},[r("v-icon",{staticClass:"mr-1"},[t._v("mdi-phone")]),t._v(" "),t.is_show_phone?r("span",[t._v("56 816 341")]):t._e()],1)],1),t._v(" "),r("span",{staticClass:"mx-2"},[t._v(t._s(t.$t("or")))]),t._v(" "),r("v-btn",{staticClass:"stripe-btn title",attrs:{color:"primary",dark:""},on:{click:function(e){t.dialog=!0}}},[r("v-icon",{staticClass:"mr-1"},[t._v("mdi-cart")]),t._v("\n                  "+t._s(t.$t("pass_order"))+"\n                ")],1)],1)],1)],1),t._v(" "),t.service.details?[r("v-divider",{staticClass:"mt-2"}),t._v(" "),r("h3",{staticClass:"pa-2"},[t._v(t._s(t.$t("details")))]),t._v(" "),t.service.details?r("ul",{staticClass:"list-style-none ul_details body-1",class:t.isArabic(t.service.details)?"is_rtl":""},t._l(t.service.details.split("||"),(function(e,n){return r("li",{key:n,staticClass:"font-weight-bold"},[r("v-icon",{staticClass:"mx-2",attrs:{small:""}},[t._v("mdi-check")]),t._v("\n                "+t._s(e)+"\n              ")],1)})),0):t._e()]:t._e(),t._v(" "),t.service.description?[r("v-divider"),t._v(" "),r("h3",{staticClass:"pa-2"},[t._v(t._s(t.$t("Description")))]),t._v(" "),r("div",{domProps:{innerHTML:t._s(t.service.description)}})]:t._e(),t._v(" "),r("v-card-actions",[r("v-btn",{staticClass:"stripe-btn headline font-weight-bold green elevation-3 mt-2",attrs:{large:"",block:"",dark:""},on:{click:function(e){t.dialog=!0}}},[r("v-icon",{staticClass:"mx-2"},[t._v("mdi-cart")]),t._v("\n              "+t._s(t.$t("pass_order"))+"\n            ")],1)],1)],2)],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[r("h3",{staticClass:"mb-3"},[t._v(t._s(t.$t("our_service")))]),t._v(" "),t._l(t.services,(function(e){return[e.id!=t.params.id?r("v-card",{key:e.id,staticClass:"mx-auto elevation-0 rounded-lg mb-2",attrs:{to:t.localePath({name:"service-product-show-id",params:{id:e.id}}),outlined:""}},[r("v-list-item",{staticClass:"pa-0",attrs:{"two-line":""}},[r("v-list-item-avatar",{staticClass:"ma-1 rounded-lg stripe-btn",attrs:{tile:"",size:"75",color:"grey"}},[e.image?r("v-img",{attrs:{src:e.image,alt:"logo"}}):t._e()],1),t._v(" "),r("v-list-item-content",{staticClass:"pa-1 py-1"},[r("v-list-item-title",{staticClass:"title font-weight-bold mb-0"},[t._v(t._s(e.name))]),t._v(" "),r("v-list-item-subtitle",{staticClass:"caption",class:t.isArabic(e.short_description)?"is_rtl":""},[t._v(t._s(e.short_description))]),t._v(" "),r("v-list-item-subtitle",{staticClass:"subtilte font-weight-bold mt-2 black--text"},[e.price_description?r("span",{domProps:{innerHTML:t._s(e.price_description)}}):e.price?r("span",[t._v("\n                    "+t._s(t.$method.f_numberFormat(e.price,t.$t("currency")))+"\n                  ")]):t._e()])],1)],1)],1):t._e()]})),t._v(" "),r("v-btn",{staticClass:"stripe-btn white",attrs:{block:"",exact:"",to:t.localePath({name:"service"})}},[t._v(t._s(t.$t("show_all_service")))])],2)],1)],1),t._v(" "),r("v-bottom-sheet",{attrs:{inset:"",scrollable:"","max-width":"400"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-sheet",{staticClass:"rounded-t-lg overflow-hidden"},[r("v-card",[r("v-card-actions",{staticClass:"pa-0 px-2"},[r("v-card-title",{staticClass:"pa-0"},[t._v("Complétez votre achat")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{text:"",color:"error"},on:{click:function(e){t.dialog=!t.dialog}}},[r("v-icon",{staticClass:"font-weight-bold"},[t._v("mdi-close")])],1)],1),t._v(" "),r("v-card",{staticClass:"mx-auto elevation-0",attrs:{tile:"",outlined:""}},[r("v-list-item",{staticClass:"pa-0",attrs:{"two-line":""}},[r("v-list-item-avatar",{staticClass:"ma-1 rounded-lg shadow",attrs:{tile:"",size:"70",color:"grey"}},[t.service.image?r("v-img",{attrs:{src:t.service.image,alt:"logo"}}):t._e()],1),t._v(" "),r("v-list-item-content",{staticClass:"pa-1 py-1"},[r("v-list-item-title",{staticClass:"title font-weight-bold mb-0",class:t.isArabic(t.service.name)?"is_rtl":""},[t._v(t._s(t.service.name))]),t._v(" "),r("v-list-item-subtitle",{staticClass:"caption",class:t.isArabic(t.service.short_description)?"is_rtl":""},[t._v(t._s(t.service.short_description))]),t._v(" "),t.service.price_description?r("div",{staticClass:"title mt-1 mr-4 text-right font-weight-bold",domProps:{innerHTML:t._s(t.service.price_description)}}):t.service.price?r("div",{staticClass:"title mt-1 mr-4 text-right font-weight-bold"},[t._v("\n                "+t._s(t.$method.f_numberFormat(t.service.price,t.$t("currency")))+"\n              ")]):t._e()],1)],1)],1),t._v(" "),t.is_passed_order?[r("div",{staticClass:"text-center"},[r("img",{staticClass:"mx-auto ma-4 mb-1",attrs:{src:"https://image.flaticon.com/icons/svg/190/190411.svg",width:"150",alt:""}}),t._v(" "),r("h3",{staticClass:"ma-3"},[t._v(t._s(t.$t("thnx"))+" "+t._s(this.info.first_name)+", "+t._s(t.$t("order_recived")))])])]:r("v-card-text",{staticClass:"overflow-y-auto grey lighten-3",staticStyle:{height:"220px"}},[r("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{staticClass:"pa-1 pb-0",attrs:{cols:"6"}},[r("v-text-field",{staticClass:"white-input",attrs:{outlined:"",dense:"",name:"first_name",label:t.$t("first_name"),rules:[t.rules.required]},model:{value:t.info.first_name,callback:function(e){t.$set(t.info,"first_name",e)},expression:"info.first_name"}})],1),t._v(" "),r("v-col",{staticClass:"pa-1 pb-0",attrs:{cols:"6"}},[r("v-text-field",{staticClass:"white-input",attrs:{outlined:"",dense:"",name:"last_name",label:t.$t("last_name")},model:{value:t.info.last_name,callback:function(e){t.$set(t.info,"last_name",e)},expression:"info.last_name"}})],1),t._v(" "),r("v-col",{staticClass:"pa-1 pb-0",attrs:{cols:"12"}},[r("v-text-field",{staticClass:"white-input",attrs:{outlined:"",dense:"",rules:[t.rules.required,t.rules.min],"prepend-inner-icon":"mdi-phone",name:"phone",label:t.$t("phone"),placeholder:"20 123 456",type:t.$vuetify.breakpoint.mdAndDown?"number":"text"},model:{value:t.info.phone,callback:function(e){t.$set(t.info,"phone",e)},expression:"info.phone"}})],1),t._v(" "),r("v-col",{staticClass:"pa-1 pb-0",attrs:{cols:"12"}},[r("v-select",{staticClass:"white-input",attrs:{outlined:"",dense:"","hide-details":"",items:t.cities,label:t.$t("search_gov_ex"),"item-text":"name","item-value":"id"},model:{value:t.info.governorate_id,callback:function(e){t.$set(t.info,"governorate_id",e)},expression:"info.governorate_id"}})],1)],1)],1)],1),t._v(" "),r("v-divider"),t._v(" "),t.is_passed_order?t._e():r("v-card-actions",{staticClass:"pa-1"},[r("v-btn",{staticClass:"title elevation-0 font-weight-bold",attrs:{color:"green",dark:"",block:"",loading:t.loading},on:{click:t.send}},[t._v("\n            Envoyer\n            "),r("v-icon",{staticClass:"mx-2"},[t._v("mdi-cart")])],1)],1)],2)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBottomSheet:x,VBtn:y.a,VCard:k.a,VCardActions:$.a,VCardText:$.b,VCardTitle:$.c,VCol:O.a,VContainer:j.a,VDivider:P.a,VForm:V.a,VIcon:R.a,VImg:L.a,VListItem:S.a,VListItemAvatar:T.a,VListItemContent:D.a,VListItemSubtitle:D.b,VListItemTitle:D.c,VRow:A.a,VSelect:E.a,VSheet:I.a,VSpacer:B.a,VTextField:F.a})}}]);