(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{447:function(t,e,r){"use strict";var n={props:{path:{defaul:!1},always:{defaul:!1}},methods:{goTo:function(){this.$router.go(-1)||this.$router.push(this.localePath({name:this.path}))}}},o=r(18),c=r(22),l=r.n(c),d=r(172),v=r(113),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-btn",{staticClass:"mr-1",attrs:{color:"primary",small:"",icon:""}},[r("v-icon",{staticClass:"font-weight-black mx-2 black--text",attrs:{large:""},on:{click:function(e){return t.goTo()}}},[t._v("mdi-arrow-left")])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VBtn:d.a,VIcon:v.a})},523:function(t,e,r){"use strict";r.r(e);r(12),r(9),r(7),r(5),r(10);var n,o=r(1),c=(r(27),r(8));r(25);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=(n={components:{GoBack:r(447).a},data:function(){return{is_show_phone:!1,is_passed_order:!1,is_scroll_order:!1,info:{},fields:{},loading:!1,valid:!1,is_show_arrow:!1,dialog:!1,reservation_date:!1,params:{},service:{},services:[],cities:[]}},head:function(){return{title:this.meta.title,meta:[{hid:"description",name:"description",content:this.meta.description},{hid:"og:title",property:"og:title",content:this.meta.title+" - autoprix.tn"},{hid:"og:description",property:"og:description",content:this.meta.description},{hid:"og:image",property:"og:image",content:this.meta.image}],script:[{"@context":"http://schema.org","@type":"Product",image:this.service.image,url:"https://api.autoprix.tn/v1"+this.$router.currentRoute.fullPath,name:this.service.name,offers:{"@type":"Offer",price:this.service.price}}]}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,d,v,title;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,n=t.error,t.env,o=t.app,l={},d=[],v=[],title=null,e.next=7,o.$api("public/service",{params:{id:r.id}}).then(function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(l=e.data.result).fields||(l.fields=""),title=l.name+" en Tunisie",t.next=5,o.$api("public/service/all",{}).then((function(t){v=t.data.result}));case 5:return t.next=7,o.$api.get("public/filter/city").then((function(t){d=t.data.result,7==l.id&&(d=[{id:24,name:"Zaghouan"},{id:23,name:"Tunis"},{id:20,name:"Sousse"},{id:16,name:"Nabeul"},{id:14,name:"Monastir"},{id:11,name:"La Manouba"},{id:3,name:"Bizerte"},{id:2,name:"Ben arous"},{id:1,name:"Ariana"}])}));case 7:return t.abrupt("return",{service:l,services:v,cities:d,meta:{title:title,description:l.short_description,image:l.image}});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){n({statusCode:404,message:t})}));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))()},beforeRouteEnter:function(t,e,r){r(function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.name?r.is_show_arrow=!0:r.is_show_arrow=!1;case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},watch:{fields:{handler:function(t,e){for(var i in this.info.fields=[],t)this.info.fields.push({key:i,value:t[i]});this.info.fields=JSON.stringify(this.info.fields)},deep:!0},"info.phone":function(t){return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}},methods:{savePhone:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:8==t.info.phone.length&&t.$cookies.set("user-data",JSON.stringify(t.info),{path:"/",maxAge:604800});case 1:case"end":return e.stop()}}),e)})))()},send:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$refs.form.validate(),!t.valid){e.next=12;break}return t.$cookies.set("user-data",JSON.stringify(t.info),{path:"/",maxAge:604800}),t.loading=!0,e.next=6,t.$recaptcha.getToken();case 6:return r=e.sent,n=null,n=t.$cookies.get("last_product")?t.$cookies.get("last_product"):window.location,e.next=11,t.$api.post("public/service/order",d(d({},t.info),{},{service_id:t.params.id,url:n,recaptcha_token:r})).then((function(e){t.is_passed_order=!0}));case 11:t.loading=!1;case 12:case"end":return e.stop()}}),e)})))()},onScroll:function(t){document.getElementById("order_btn").getBoundingClientRect().top<0?this.is_scroll_order=!0:this.is_scroll_order=!1}},computed:{rules:function(){var t=this;return{required:function(e){return!!e||t.$t("required")},min:function(e){return e&&e.length>=8||t.$t("_8_caracters")}}}}},Object(o.a)(n,"beforeRouteEnter",(function(t,e,r){r(function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.is_passed_order=!1;case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())})),Object(o.a)(n,"mounted",(function(){this.params=this.$route.params,this.$cookies.get("user-data")?this.info=this.$cookies.get("user-data"):this.$cookies.get("user-estimation-data")&&(this.info=this.$cookies.get("user-estimation-data")),window.addEventListener("scroll",this.onScroll)})),n),m=r(18),_=r(22),f=r.n(_),h=r(172),w=r(174),x=r(15),C=r(389),k=r(404),y=r(511),$=r(390),O=r(375),V=r(393),j=r(113),P=r(147),R=r(115),L=r(178),S=r(51),I=r(510),T=r(391),A=r(514),D=r(392),E=r(378),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"is_ltr"},[r("v-container",[r("ul",{staticClass:"breadcrumb ma-1 my-1 is_ltr",attrs:{itemscope:"",itemtype:"http://schema.org/BreadcrumbList"}},[r("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"http://schema.org/ListItem"}},[r("nuxt-link",{attrs:{to:t.localePath({name:"index"}),itemprop:"item"}},[r("span",{attrs:{itemprop:"name"}},[t._v(t._s(t.$t("home")))])]),t._v(" "),r("meta",{attrs:{itemprop:"position",content:"1"}})],1),t._v(" "),r("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"http://schema.org/ListItem"}},[r("nuxt-link",{attrs:{to:t.localePath({name:"service"}),itemprop:"item"}},[r("span",{attrs:{itemprop:"name"}},[t._v(t._s(t.$t("our_service")))])]),t._v(" "),r("meta",{attrs:{itemprop:"position",content:"2"}})],1)]),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12",md:"7"}},[r("v-card",{staticClass:"mx-auto elevation-0 transparent"},[r("v-row",[r("v-col",{staticClass:"pb-2 mb-2",attrs:{cols:"12",sm:"5"}},[r("v-img",{staticClass:"rounded mx-auto",attrs:{tile:"",alt:t.service.name,color:"grey","max-height":"250",src:t.service.image}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"7"}},[r("v-card",{staticClass:"elevation-0"},[r("h1",{staticClass:"headline font-weight-regular pa-3 pb-0",class:t.isArabic(t.service.name)?"is_rtl":""},[t._v("\n                  "+t._s(t.service.name)+"\n                ")]),t._v(" "),r("v-card-actions",{staticClass:"px-3 pa-0 pb-3 body-2 font-weight-bold"},[r("v-rating",{attrs:{value:5,"background-color":"green lighten-3",color:"green",size:"17",readonly:""}}),t._v(" "),r("span",{staticClass:"mx-1"},[t._v("\n                    ("+t._s(parseInt(t.service.price/5))+")")])],1),t._v(" "),r("v-divider"),t._v(" "),r("p",{staticClass:"body-1 font-weight-medium mt-3 pb-0 pt-0 pa-3",class:t.isArabic(t.service.short_description)?"is_rtl":"",domProps:{innerHTML:t._s(t.service.short_description)}}),t._v(" "),r("v-divider"),t._v(" "),r("div",{staticClass:"headline font-weight-black pa-3"},[t.service.price_description?r("span",{domProps:{innerHTML:t._s(t.service.price_description)}}):t.service.price?r("span",[t._v("\n                    "+t._s(t.$method.f_numberFormat(t.service.price,t.$t("currency")))+"\n                  ")]):t._e()]),t._v(" "),r("div",{staticClass:"mx-2"},[r("div",{staticClass:"transparent elevation-0 text-uppercase",staticStyle:{"min-height":"56px"},attrs:{id:"order_btn"}},[r("v-card-actions",{staticClass:"pa-0",class:t.is_scroll_order?"fixed-phone-order px-1  pa-1 grey lighten-5 stripe-btn":"",staticStyle:{width:"100%"}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",[r("a",{attrs:{href:"tel:56 255 017"}},[r("v-btn",{staticClass:"title white green--text stripe-btn",attrs:{height:"48"},on:{click:function(e){t.is_show_phone=!t.is_show_phone}}},[r("v-icon",{staticClass:"mr-1"},[t._v("mdi-phone")]),t._v(" "),t.is_show_phone&&t.$vuetify.breakpoint.mdAndUp?r("span",[t._v("56 255 017")]):t._e()],1)],1)]),t._v(" "),r("v-col",[r("v-btn",{staticClass:"stripe-btn green white--text title font-weight-bold text-upper-case",attrs:{large:"",block:"",width:"100%",height:"48",dark:""},on:{click:function(e){t.dialog=!0}}},[r("v-icon",{staticClass:"pa-1 rounded"},[t._v("mdi-cart")]),t._v(" "),r("span",{staticClass:"mx-3"},[t._v(" "+t._s(t.$t("pass_order")))])],1)],1)],1)],1)],1)])],1)],1)],1),t._v(" "),t.service.details?[r("v-card",{staticClass:"mt-3 overflow-hidden elevation-0",attrs:{id:"technical_sheet"}},[r("v-card-actions",{staticClass:"pa-2 pb-0"},[r("h3",[t._v("Fiche technique")])]),t._v(" "),t.service.details?r("ul",{staticClass:"list-style-none ul_details body-2",class:t.isArabic(t.service.details)?"is_rtl":""},t._l(t.service.details.split("||"),(function(e,n){return r("li",{key:n,staticClass:"font-weight-bold"},[r("v-icon",{staticClass:"mx-2"},[t._v("mdi-check")]),t._v("\n                  "+t._s(e)+"\n                ")],1)})),0):t._e()],1)]:t._e(),t._v(" "),t.service.description?[r("v-card",{staticClass:"mt-3 overflow-hidden elevation-0",attrs:{id:"technical_sheet"}},[r("v-card-actions",{staticClass:"pa-2"},[r("h3",[t._v(t._s(t.$t("Description")))])]),t._v(" "),r("div",{staticClass:"pa-2 pt-0",domProps:{innerHTML:t._s(t.service.description)}})],1)]:t._e(),t._v(" "),r("v-card-actions",{staticClass:"px-0"},[r("v-btn",{staticClass:"stripe-btn green white--text title",attrs:{large:"",block:"",height:"48"},on:{click:function(e){t.dialog=!0}}},[r("v-icon",{staticClass:"mx-2"},[t._v("mdi-cart")]),t._v("\n              "+t._s(t.$t("pass_order"))+"\n            ")],1)],1)],2)],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[r("h3",{staticClass:"mb-3"},[t._v(t._s(t.$t("our_service")))]),t._v(" "),t._l(t.services,(function(e){return[e.id!=t.params.id?r("v-card",{key:e.id,staticClass:"mx-auto elevation-0 rounded-lg mb-2",attrs:{to:t.localePath({name:"service-product-show-id",params:{id:e.id}}),outlined:""}},[r("v-list-item",{staticClass:"pa-0",attrs:{"two-line":""}},[r("v-list-item-avatar",{staticClass:"ma-1 rounded-lg",attrs:{tile:"",size:"75",color:"grey"}},[e.image?r("v-img",{attrs:{src:e.image,alt:"logo"}}):t._e()],1),t._v(" "),r("v-list-item-content",{staticClass:"pa-1 py-1"},[r("v-list-item-title",{staticClass:"title mb-0"},[t._v(t._s(e.name))]),t._v(" "),r("v-list-item-subtitle",{staticClass:"caption",class:t.isArabic(e.short_description)?"is_rtl":""},[t._v(t._s(e.short_description))]),t._v(" "),r("v-list-item-subtitle",{staticClass:"subtilte font-weight-bold mt-2 black--text"},[e.price_description?r("span",{domProps:{innerHTML:t._s(e.price_description)}}):e.price?r("span",[t._v("\n                    "+t._s(t.$method.f_numberFormat(e.price,t.$t("currency")))+"\n                  ")]):t._e()])],1)],1)],1):t._e()]})),t._v(" "),r("v-btn",{staticClass:"white elevation-0",attrs:{block:"",exact:"",to:t.localePath({name:"service"})}},[t._v(t._s(t.$t("show_all_service")))])],2)],1)],1),t._v(" "),r("v-dialog",{attrs:{scrollable:"","max-width":"350"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-actions",{staticClass:"pa-0 px-0"},[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{small:"",text:"",color:"error"},on:{click:function(e){t.dialog=!t.dialog}}},[r("v-icon",{staticClass:"font-weight-bold white rounded"},[t._v("mdi-close")])],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card",{staticClass:"elevation-0",attrs:{width:"100%",tile:""}},[r("v-list-item",{staticClass:"pa-0",attrs:{"two-line":""}},[r("v-list-item-avatar",{staticClass:"ma-1 stripe-btn rounded",attrs:{tile:"",size:"50",color:"grey"}},[t.service.image?r("v-img",{attrs:{src:t.service.image,alt:"logo"}}):t._e()],1),t._v(" "),r("v-list-item-content",{staticClass:"pa-1 px-2 py-0"},[r("v-list-item-title",{staticClass:"title font-weight-bold",class:t.isArabic(t.service.name)?"is_rtl":""},[t._v(t._s(t.service.name))]),t._v(" "),t.service.price_description?r("v-list-item-title",{staticClass:"subtitle-2 mb-1",domProps:{innerHTML:t._s(t.service.price_description)}}):t._e()],1)],1)],1),t._v(" "),t.is_passed_order?[r("div",{staticClass:"text-center"},[r("img",{staticClass:"mx-auto ma-4 mb-1",attrs:{src:"https://image.flaticon.com/icons/svg/190/190411.svg",width:"140",alt:""}}),t._v(" "),r("h3",{staticClass:"ma-3"},[t._v("\n            "+t._s(t.$t("thnx"))+" "+t._s(t.info.first_name)+",\n            "+t._s(t.$t("order_recived"))+" ("+t._s(t.info.phone)+")\n          ")])])]:r("v-card-text",{staticClass:"overflow-y-auto grey lighten-3 pa-2",staticStyle:{"max-height":"240px"}},[r("v-form",{ref:"form",staticClass:"pt-2",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{staticClass:"pa-1 pt-2 pb-0",attrs:{cols:"12"}},[r("v-text-field",{staticClass:"white-input",attrs:{outlined:"",dense:"",rules:[t.rules.required,t.rules.min],name:"phone",label:t.$t("phone"),"append-icon":"mdi-phone",placeholder:"20 123 456",type:t.$vuetify.breakpoint.mdAndDown?"number":"text"},on:{input:function(e){return t.savePhone()}},model:{value:t.info.phone,callback:function(e){t.$set(t.info,"phone",e)},expression:"info.phone"}})],1),t._v(" "),r("v-col",{staticClass:"pa-1 pb-0",attrs:{cols:"6"}},[r("v-text-field",{staticClass:"white-input",attrs:{outlined:"",dense:"",name:"first_name",label:t.$t("first_name")},model:{value:t.info.first_name,callback:function(e){t.$set(t.info,"first_name",e)},expression:"info.first_name"}})],1),t._v(" "),r("v-col",{staticClass:"pa-1 pb-0",attrs:{cols:"6"}},[r("v-text-field",{staticClass:"white-input",attrs:{outlined:"",dense:"",name:"last_name",label:t.$t("last_name")},model:{value:t.info.last_name,callback:function(e){t.$set(t.info,"last_name",e)},expression:"info.last_name"}})],1),t._v(" "),r("v-col",{staticClass:"pa-1 pb-0",attrs:{cols:"12"}},[r("v-select",{staticClass:"white-input",attrs:{outlined:"",dense:"","hide-details":"",items:t.cities,label:t.$t("search_gov_ex"),"item-text":"name","item-value":"id"},model:{value:t.info.governorate_id,callback:function(e){t.$set(t.info,"governorate_id",e)},expression:"info.governorate_id"}})],1),t._v(" "),t._l(t.service.fields.split(","),(function(e,n){return["permis_date"===e?[r("v-col",{key:n,staticClass:"pa-1 pb-0",attrs:{cols:"12"}},[r("v-select",{staticClass:"white-input mt-4",attrs:{items:[2,3,4,"5+","10+"],dense:"",label:t.$t(e),"hide-details":"",outlined:""},model:{value:t.fields[e],callback:function(r){t.$set(t.fields,e,r)},expression:"fields[field]"}})],1)]:t._e(),t._v(" "),"birth_date"===e?[r("v-col",{key:n,staticClass:"pa-1 pb-0",attrs:{cols:"12"}},[r("v-select",{staticClass:"white-input mt-4",attrs:{items:[22,23,24,25,26,27,28,29,"30+","40+","50+"],dense:"",label:t.$t(e),"hide-details":"",outlined:""},model:{value:t.fields[e],callback:function(r){t.$set(t.fields,e,r)},expression:"fields[field]"}})],1)]:t._e(),t._v(" "),"reservation_date"===e?[r("v-col",{key:n,staticClass:"pa-1 pb-0",attrs:{cols:"12"}},[r("v-dialog",{attrs:{width:"290px"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,c=n.attrs;return[r("v-text-field",t._g(t._b({staticClass:"white-input mt-4",attrs:{label:t.$t(e),"prepend-inner-icon":"mdi-calendar-month",readonly:"",dense:"","hide-details":"",outlined:""},model:{value:t.fields[e],callback:function(r){t.$set(t.fields,e,r)},expression:"fields[field]"}},"v-text-field",c,!1),o))]}}],null,!0),model:{value:t.reservation_date,callback:function(e){t.reservation_date=e},expression:"reservation_date"}},[t._v(" "),r("v-date-picker",{attrs:{min:(new Date).toISOString().substr(0,10),locale:"fr","no-title":"",scrollable:""},on:{change:function(e){t.reservation_date=!1}},model:{value:t.fields[e],callback:function(r){t.$set(t.fields,e,r)},expression:"fields[field]"}},[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{text:"",color:"error"},on:{click:function(e){t.reservation_date=!1}}},[t._v(t._s(t.$t("close")))])],1)],1)],1)]:t._e(),t._v(" "),"number_days"===e?[r("v-col",{key:n,staticClass:"pa-1 pb-0",attrs:{cols:"12"}},[r("v-select",{staticClass:"white-input mt-4",attrs:{items:[2,3,4,5,6,"7+","30+","30+","Longue durée"],dense:"",label:t.$t(e),"hide-details":"",outlined:""},model:{value:t.fields[e],callback:function(r){t.$set(t.fields,e,r)},expression:"fields[field]"}})],1)]:t._e()]}))],2)],1)],1),t._v(" "),r("v-divider"),t._v(" "),t.is_passed_order?t._e():r("v-card-actions",{staticClass:"pa-1"},[r("v-btn",{staticClass:"title elevation-0 font-weight-bold white--text",attrs:{color:"green",block:"",loading:t.loading},on:{click:t.send}},[t._v("\n          Envoyer\n          "),r("v-icon",{staticClass:"mx-2"},[t._v("mdi-send")])],1)],1)],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:h.a,VCard:w.a,VCardActions:x.a,VCardText:x.b,VCol:C.a,VContainer:k.a,VDatePicker:y.a,VDialog:$.a,VDivider:O.a,VForm:V.a,VIcon:j.a,VImg:P.a,VListItem:R.a,VListItemAvatar:L.a,VListItemContent:S.a,VListItemSubtitle:S.b,VListItemTitle:S.c,VRating:I.a,VRow:T.a,VSelect:A.a,VSpacer:D.a,VTextField:E.a})}}]);