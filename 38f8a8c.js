(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{565:function(t,e,o){t.exports=o.p+"img/year.fcf1855.svg"},566:function(t,e,o){t.exports=o.p+"img/odometer.4ccf8ae.svg"},597:function(t,e,o){t.exports=o.p+"img/fuel.a39df52.svg"},598:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDE5MiAxOTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxsaW5lYXJHcmFkaWVudCBpZD0iQmx1ZV9ncmFkaWVudCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIzMS4xMzQiIHgyPSIxNjAuODY2IiB5MT0iMTUzLjk2OSIgeTI9IjI0LjIzNyI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMzRjZGZhIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZThkOWYxIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJtOTYgMGMtNTAuOTkgMC04OCAzMy42NDUtODggODAgMCAyMy43NzQgOS4zMDkgNTEuMTM0IDI0LjkgNzMuMTg3IDE3LjcgMjUuMDI5IDQwLjEgMzguODEzIDYzLjEgMzguODEzczQ1LjQwNS0xMy43ODQgNjMuMS0zOC44MTNjMTUuNTkxLTIyLjA1MyAyNC45LTQ5LjQxMyAyNC45LTczLjE4NyAwLTQ2LjM1NS0zNy4wMS04MC04OC04MHoiIGZpbGw9InVybCgjQmx1ZV9ncmFkaWVudCkiLz48cGF0aCBkPSJtMTM2IDU2djMyaC0xNnYtMzJoLTE2djMyaC0xNnYtMzJoLTE2djMyaC0xNnYtMzJoLTE2djQwYTggOCAwIDAgMCA4IDhoMjR2MzJoMTZ2LTMyaDE2djMyaDE2di0zMmgxNnYzMmgxNnYtODB6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"},599:function(t,e,o){t.exports=o.p+"img/cylinder.bc19b7b.svg"},600:function(t,e,o){t.exports=o.p+"img/horse.266cb86.svg"},601:function(t,e,o){t.exports=o.p+"img/color.67b18e9.svg"},602:function(t,e,o){t.exports=o.p+"img/body.3119e14.svg"},716:function(t,e,o){"use strict";o.r(e);var r=o(264),n=o(262),c=o(15),l=o(562),d=o(559),_=o(538),m=o(547),h=o(543),v=o(527),f=o(625),w=o(627),x=o(626),y=o(628),C=o(544),$=o(164),k=o(165),M=o(30),j=o(537),O=o(697),I=o(581),z=o(634),S=o(540),L=o(529),P=(o(21),o(36),o(81),o(8),o(55),o(9),o(11),o(3),o(13),o(10),o(14),o(1)),T=o(6);o(37),o(29);function D(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function N(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(e){Object(P.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var A={data:function(){return{valid:!1,loading:!1,info:{},is_passed_order:!1,dialog:!1,cities:[],active:!1,product:{},is_slid_full_screen:!1,lightbox_index:0,isActive:0,is_scroll_order:!1,is_show_description:!1,description_height:0}},computed:{rules:function(){var t=this;return{required:function(e){return!!e||t.$t("required")},min:function(e){return e&&e.length>=8||t.$t("_8_caracters")}}}},head:function(){return{title:this.meta.title,meta:[{hid:"description",name:"description",content:this.meta.description},{hid:"article:published_time",property:"article:published_time",content:new Date(1e3*this.product.creation_date).toISOString()},{hid:"article:modified_time",property:"article:modified_time",content:new Date(1e3*this.product.last_updated).toISOString()},{hid:"article:author",property:"article:author",content:"Autoprix"},{hid:"og:title",property:"og:title",content:this.meta.title+" - autoprix.tn"},{hid:"og:description",property:"og:description",content:this.meta.description},{hid:"og:image",property:"og:image",content:this.meta.image}],script:[{type:"application/ld+json",json:{"@context":"http://schema.org","@type":"Person",name:"Autoprix",makesOffer:{"@type":"Offer",priceSpecification:{"@type":"UnitPriceSpecification",priceCurrency:this.$t("currency"),price:this.product.price},itemOffered:{"@type":"Car",brand:this.product.make,model:this.product.model,name:this.meta.title,description:this.meta.description,image:this.product.image[0],color:this.$t(this.product.color),fuelType:this.$t(this.product.fuel_type),bodyType:this.$t(this.product.body),vehicleEngine:{"@type":"EngineSpecification",name:this.$t(this.product.cylinder)+this.$t("l")+this.$t(this.product.fuel_type)+" "+this.product.horsepower+this.$t("cv")+" ("+this.product.year+")"}}}}}]}},asyncData:function(t){return Object(T.a)(regeneratorRuntime.mark((function e(){var o,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.params,r=t.error,t.env,n=t.app,e.abrupt("return",n.$api.get("public/car/product",{params:{url_id:o.id}}).then(function(){var t=Object(T.a)(regeneratorRuntime.mark((function t(e){var o,title,image;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.data.result,title=o.make+" "+o.model+" - ",title+=o.year?o.year+" ":"",title+=o.fuel_type?n.i18n.t(o.fuel_type)+" ":"",title+=o.horsepower?o.horsepower+" CV ":"",title+=o.cylinder?o.cylinder+n.i18n.t("l")+"  ":"",title+=o.governorate?n.i18n.t("at")+" "+n.i18n.t(o.governorate):"",image=void 0!==o.image[0]?o.image[0]:"","",o.description&&o.description.split("\\n").join("").replace(/<\/?[^>]+(>|$)/g,""),t.abrupt("return",{product:o,meta:{title:title,description:o.description,image:image}});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.log(t),r({statusCode:404,message:t})})));case 2:case"end":return e.stop()}}),e)})))()},watch:{"$route.query":function(t){t.o?this.is_slid_full_screen=!0:this.is_slid_full_screen=!1}},methods:{send:function(){var t=this;return Object(T.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$refs.form.validate(),!t.valid){e.next=7;break}return t.$cookies.set("user-data",JSON.stringify(t.info),{path:"/",maxAge:604800}),t.loading=!0,e.next=6,t.$api.post("public/car-contact",N(N({},t.info),{},{car_id:t.product.id})).then((function(e){t.is_passed_order=!0}));case 6:t.loading=!1;case 7:case"end":return e.stop()}}),e)})))()},callMessanger:function(){this.$api.post("public/action",{status:1,meta_key:"messanger_call",meta_value:window.location.href})},callPhone:function(){this.$api.post("public/action",{status:1,meta_key:"phone_call",meta_value:window.location.href})},setFullScreen:function(){this.is_slid_full_screen=!this.is_slid_full_screen,this.is_slid_full_screen?this.$router.push({name:this.$route.name,params:{id:this.$route.params.id},query:{o:!0}}):this.$router.back()},onScroll:function(t){document.getElementById("order_btn").getBoundingClientRect().top<0?this.is_scroll_order=!0:this.is_scroll_order=!1},share:function(){this.$store.commit("layout/share",{is_open:!0,url:window.location.href,title:this.product.make+" "+this.product.model})}},beforeRouteEnter:function(t,e,o){o(function(){var t=Object(T.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.f_goToUp(),e.$refs.description&&(e.description_height=e.$refs.description.clientHeight);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},mounted:function(){var t=this;this.$api.get("public/filter/city").then((function(e){t.cities=e.data.result})),window.addEventListener("scroll",this.onScroll),this.$refs.description&&(this.description_height=this.$refs.description.clientHeight)}},E=A,Z=o(23),component=Object(Z.a)(E,(function(){var t=this,e=t._self._c;return e("div",[e(m.a,[e("ul",{staticClass:"breadcrumb transparent mb-0",attrs:{itemscope:"",itemtype:"http://schema.org/BreadcrumbList"}},[e("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"http://schema.org/ListItem"}},[e("nuxt-link",{attrs:{to:t.localePath({name:"index"}),itemprop:"item"}},[e("span",{attrs:{itemprop:"name"}},[t._v(t._s(t.$t("home")))])]),t._v(" "),e("meta",{attrs:{itemprop:"position",content:"1"}})],1),t._v(" "),e("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"http://schema.org/ListItem"}},[e("nuxt-link",{attrs:{to:t.localePath({name:"inspected"}),itemprop:"item"}},[e("span",{attrs:{itemprop:"name"}},[t._v(t._s(t.$t("certifed_car")))])]),t._v(" "),e("meta",{attrs:{itemprop:"position",content:"2"}})],1)]),t._v(" "),e(j.a,[e(_.a,{attrs:{cols:"12",md:"8"}},[e("div",{staticClass:"white is_rtl",style:t.is_slid_full_screen?"height: 100%; left: 0px; top: 0px;width:100%; z-index: 10; position: fixed;border-radius:0":"border-radius:10px;",attrs:{id:"carousel"}},[e(r.a,{staticClass:"float-right white stripe-btn ma-1",staticStyle:{position:"absolute","z-index":"1","min-width":"40px !important","max-width":"40px"},on:{click:function(e){return t.setFullScreen()}}},[t.is_slid_full_screen?e($.a,{attrs:{large:"",title:"Plein écran"}},[t._v("mdi-fullscreen-exit")]):e($.a,{attrs:{large:"",title:"Plein écran"}},[t._v("mdi-fullscreen")])],1),t._v(" "),t.product.image?e(l.a,{staticClass:"is_ltr transparent ads",staticStyle:{cursor:"zoom-in !important",transition:"none"},attrs:{"hide-delimiter-background":"","show-arrows":t.product.image.length>1,"hide-delimiters":"",height:t.is_slid_full_screen?"100%":t.$vuetify.breakpoint.smAndDown?300:455},model:{value:t.lightbox_index,callback:function(e){t.lightbox_index=e},expression:"lightbox_index"}},t._l(t.product.image,(function(img,i){return e(d.a,{key:i,staticClass:"align-self-cente",style:t.is_slid_full_screen?"height:100vh;background-color: rgba(0, 0, 0, 0.85) !important":"height:100%"},[e("img",{staticClass:"center-in cp",staticStyle:{cursor:"zoom-in"},attrs:{src:img,alt:"Voiure "+t.product.make+" "+t.product.model},on:{click:function(e){return t.setFullScreen()}}})])})),1):t._e()],1),t._v(" "),e(I.b,{staticClass:"transparent mt-2",attrs:{"center-active":!0},model:{value:t.lightbox_index,callback:function(e){t.lightbox_index=e},expression:"lightbox_index"}},t._l(t.product.image,(function(img,o){return e(z.a,{key:o,staticClass:"line-height-0 text-center cp mr-2 my-1 rounded overflow-hidden",style:o==t.lightbox_index?"primary":"opacity:0.6"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:img,expression:"img"}],staticStyle:{height:"65px"},attrs:{"active-class":"purple white--text",alt:"Slide"},on:{click:function(e){t.lightbox_index=o}}})])})),1)],1),t._v(" "),e(_.a,{attrs:{cols:"12",md:"4"}},[e("div",[e(k.a,{staticClass:"pa-0"},[e("img",{staticClass:"bg--white text-center py-2 mx-0 border-radius",staticStyle:{height:"auto"},attrs:{src:"https://www.carlogos.org/car-logos/"+t.product.make.toLowerCase().replace(" ","-")+"-logo.png",alt:"Marque "+t.product.make,width:"55"}}),t._v(" "),e(M.a,{staticClass:"pa-0 mx-2"},[e("h1",{staticClass:"font-weight-bold title"},[t._v("\n                "+t._s(t.product.make)+" "+t._s(t.product.model)+"\n              ")]),t._v(" "),e(c.a,{staticClass:"font-weight-black pa-0",attrs:{itemprop:"offers",itemscope:"",itemtype:"https://schema.org/Offer"}},[e("span",{staticClass:"headline font-weight-black"},[e("span",{attrs:{itemprop:"price",content:t.product.price},domProps:{innerHTML:t._s(t.f_numberFormat(t.product.price))}}),t._v(" "),e("span",{attrs:{itemprop:"priceCurrency",content:"TND"}},[t._v("TND")]),t._v(" "),e("link",{attrs:{itemprop:"availability",href:"https://schema.org/InStock"}})]),t._v(" "),e(S.a),t._v(" "),e("span",{staticClass:"caption float-right rounded white--text pa-2 py-1",class:t.product.is_sold?"red":""},[t._v(t._s(t.product.is_sold?t.$t("sell"):""))])],1)],1)],1),t._v(" "),e(n.a,{staticClass:"overflow-hidden elevation-0 transparent"},[e(n.a,{staticClass:"elevation-0 transparent pa-0"},[t.product.conclusion?e("div",{staticClass:"mb-2 elevation-0 cp overflow-hidden white rounded mt-3",on:{click:function(e){t.is_show_description=!t.is_show_description}}},[e("h3",{staticClass:"font-weight-bold pa-2"},[e(c.a,{staticClass:"pa-0 title"},[e("img",{attrs:{src:"https://www.flaticon.com/svg/static/icons/svg/887/887213.svg",width:"50",alt:""}}),t._v(" "),e("div",{staticClass:"px-2"},[e("div",[t._v("L'avis de notre inspecteur")]),t._v(" "),e("small",{staticClass:"caption"},[t._v("Inspectée par "+t._s(t.product.first_name)+" à\n                        "+t._s(t.product.location)+" le\n                        "+t._s(t.product.inspection_date))])]),t._v(" "),e(S.a)],1)],1),t._v(" "),e(v.a),t._v(" "),e(n.a,{staticClass:"overflow-hidden elevation-0 pa-1",staticStyle:{width:"100%"},attrs:{"max-height":t.is_show_description?null:"170"}},[e("div",{ref:"description",staticClass:"mb-0 body-1 pa-2",class:t.$method.isArabic(t.product.conclusion)?"is_rtl":""},[t._v("\n                    «"+t._s(t.product.conclusion)+"»\n                  ")])]),t._v(" "),e(r.a,{directives:[{name:"show",rawName:"v-show",value:t.product.conclusion&&t.description_height>=170,expression:"product.conclusion && description_height >= 170"}],staticClass:"transparent",staticStyle:{"box-shadow":"0 0px 10px #cbcbcb"},attrs:{tile:"",text:"",block:"",small:""}},[t._v("\n                  "+t._s(t.is_show_description?"Afficher moins":"Afficher plus")+"\n                  "),e($.a,{staticClass:"mx-2"},[t._v(t._s(t.is_show_description?"mdi-menu-up":"mdi-menu-down"))])],1)],1):t._e(),t._v(" "),t.product.is_sold?t._e():e("div",{staticClass:"transparent elevation-0 mt-4",staticStyle:{"min-height":"49px",width:"100%"},attrs:{id:"order_btn"}},[e("div",{class:t.is_scroll_order?"fixed-phone-order     pa-1":""},[e(r.a,{staticClass:"white--text mt-4 elevation-0 title",staticStyle:{"background-color":"rgb(0, 150, 199)",width:"70%"},attrs:{large:"",height:"50",color:"green",block:""},on:{click:function(e){t.dialog=!0}}},[t._v("Cette voiture m'intéresse")])],1)]),t._v(" "),e("a",{staticClass:"text-decoration-none",attrs:{href:"tel:+216"+t.product.teleop_phone},on:{click:function(e){return t.callPhone()}}},[e(r.a,{staticClass:"mt-2 elevation-0 black--text",class:t.is_scroll_order?"":"rounded",attrs:{dark:"",text:""}},[e($.a,{attrs:{size:"30"}},[t._v("mdi-phone")]),t._v(" "),e(S.a),t._v(" "),e("span",{staticClass:"title"},[t._v("+216\n                    "+t._s(t.f_numberFormat(t.product.teleop_phone).split(",").join(" ")))]),t._v(" "),e(S.a)],1)],1)])],1),t._v(" "),e(c.a,{staticClass:"pa-0 py-3"},[e(S.a),t._v(" "),e(r.a,{staticClass:"elevation-0 mx-0 float-right white",attrs:{text:""},on:{click:function(e){return t.share()}}},[e($.a,{staticClass:"mr-2",attrs:{small:""}},[t._v("mdi-share")]),t._v(" Partagez\n            ")],1)],1),t._v(" "),e(c.a,{staticClass:"pa-0 mb-2"},[e("img",{attrs:{width:"40",src:"https://static.carizy.com/images/pictos-carizy/dark-background/classique/voiture-verifie.svg?v5.00.4",alt:""}}),t._v("\n            "+t._s(t.$t("certifed_par")))])],1)]),t._v(" "),e(_.a,{attrs:{cols:"12",md:"8"}},[e("h3",{staticClass:"font-weight-bold pa-1 mb-2 px-2"},[t._v("\n          "+t._s(t.$t("technical_informations"))+"\n          "),e($.a,{staticClass:"float-right"},[t._v("mdi-text")])],1),t._v(" "),e(j.a,{staticClass:"elevation-0 row_4 transparent"},[e(_.a,{attrs:{cols:"6",sm:"4",md:"2"}},[e(n.a,{staticClass:"white elevation-0 pa-1 text-center"},[e("img",{staticClass:"mx-1 mt-1",attrs:{width:"40",src:o(565),alt:t.$t("year")}}),t._v(" "),e("div",[e("h5",{staticClass:"caption"},[t._v(t._s(t.$t("year")))]),t._v(" "),e("b",{staticClass:"body-1 font-weight-bold"},[t._v(t._s(t.product.year?t.product.year:t.$t("nc")))])])])],1),t._v(" "),e(_.a,{attrs:{cols:"6",sm:"4",md:"2"}},[e(n.a,{staticClass:"white elevation-0 pa-1 text-center"},[e("img",{staticClass:"mx-1 mt-1",attrs:{width:"40",src:o(566),alt:t.$t("odometer")}}),t._v(" "),e("div",[e("h5",{staticClass:"caption"},[t._v(t._s(t.$t("odometer")))]),t._v(" "),e("b",{staticClass:"body-1 font-weight-bold"},[t._v(t._s(t.product.odometer?t.f_numberFormat(t.product.odometer,t.$t("km")):t.$t("nc")))])])])],1),t._v(" "),e(_.a,{attrs:{cols:"6",sm:"4",md:"2"}},[e(n.a,{staticClass:"white elevation-0 pa-1 text-center"},[e("img",{staticClass:"mx-1 mt-1",attrs:{width:"40",src:o(597),alt:t.$t("md_fuel_type")}}),t._v(" "),e("div",[e("h5",{staticClass:"caption"},[t._v(t._s(t.$t("md_fuel_type")))]),t._v(" "),e("b",{staticClass:"body-1 font-weight-bold"},[t._v(t._s(t.product.fuel_type?t.$t(t.product.fuel_type):t.$t("nc")))])])])],1),t._v(" "),e(_.a,{attrs:{cols:"6",sm:"4",md:"2"}},[e(n.a,{staticClass:"white elevation-0 pa-1 text-center"},[e("img",{staticClass:"mx-1 mt-1",attrs:{width:"40",src:o(598),alt:t.$t("md_gearbox")}}),t._v(" "),e("div",[e("h5",{staticClass:"caption"},[t._v(t._s(t.$t("md_gearbox")))]),t._v(" "),e("b",{staticClass:"body-1 font-weight-bold"},[t._v(t._s(t.product.gearbox?t.$t(t.product.gearbox):t.$t("nc")))])])])],1),t._v(" "),t.product.cylinder?e(_.a,{attrs:{cols:"6",sm:"4",md:"2"}},[e(n.a,{staticClass:"white elevation-0 pa-1 text-center"},[e("img",{staticClass:"mx-1 mt-1",attrs:{width:"40",src:o(599),alt:"Cylindrée"}}),t._v(" "),e("div",[e("h5",{staticClass:"caption"},[t._v("Cylindrée")]),t._v(" "),e("b",{staticClass:"body-1 font-weight-bold"},[t._v(t._s(t.product.cylinder)+" "+t._s(t.$t("l")))])])])],1):t._e(),t._v(" "),t.product.horsepower?e(_.a,{attrs:{cols:"6",sm:"4",md:"2"}},[e(n.a,{staticClass:"white elevation-0 pa-1 text-center"},[e("img",{staticClass:"mx-1 mt-1",attrs:{width:"40",src:o(600),alt:t.$t("md_horsepower")}}),t._v(" "),e("div",[e("h5",{staticClass:"caption"},[t._v(t._s(t.$t("md_horsepower")))]),t._v(" "),e("b",{staticClass:"body-1 font-weight-bold"},[t._v(t._s(t.product.horsepower)+" "+t._s(t.$t("cv")))])])])],1):t._e(),t._v(" "),t.product.color?e(_.a,{attrs:{cols:"6",sm:"4",md:"2"}},[e(n.a,{staticClass:"white elevation-0 pa-1 text-center"},[e("img",{staticClass:"mx-1 mt-1",attrs:{width:"40",src:o(601),alt:t.$t("md_color")}}),t._v(" "),e("div",[e("h5",{staticClass:"caption"},[t._v(t._s(t.$t("md_color")))]),t._v(" "),e("b",{staticClass:"body-1 font-weight-bold"},[t._v(t._s(t.$t(t.product.color)))])])])],1):t._e(),t._v(" "),t.product.body?e(_.a,{attrs:{cols:"6",sm:"4",md:"2"}},[e(n.a,{staticClass:"white elevation-0 pa-1 text-center"},[e("img",{staticClass:"mx-1 mt-1",attrs:{width:"40",src:o(602),alt:t.$t("md_body")}}),t._v(" "),e("div",[e("h5",{staticClass:"caption"},[t._v(t._s(t.$t("md_body")))]),t._v(" "),e("b",{staticClass:"body-1 font-weight-bold"},[t._v(t._s(t.$t(t.product.body)))])])])],1):t._e(),t._v(" "),t.product.engine_power_ch?e(_.a,{attrs:{cols:"6",sm:"4",md:"2"}},[e(n.a,{staticClass:"white elevation-0 pa-1 text-center"},[e("img",{staticClass:"mx-1 mt-1",attrs:{width:"40",src:"https://www.flaticon.com/svg/static/icons/svg/1505/1505531.svg",alt:t.$t("md_engine_power_ch")}}),t._v(" "),e("div",[e("h5",{staticClass:"caption"},[t._v(t._s(t.$t("md_engine_power_ch")))]),t._v(" "),e("b",{staticClass:"body-1 font-weight-bold"},[t._v(t._s(t.$t(t.product.engine_power_ch))+" "+t._s(t.$t("ch")))])])])],1):t._e(),t._v(" "),t.product.doors_number?e(_.a,{attrs:{cols:"6",sm:"4",md:"2"}},[e(n.a,{staticClass:"white elevation-0 pa-1 text-center"},[e("img",{staticClass:"mx-1 mt-1",attrs:{width:"40",src:"https://www.flaticon.com/svg/static/icons/svg/1179/1179793.svg",alt:t.$t("md_doors_number")}}),t._v(" "),e("div",[e("h5",{staticClass:"caption"},[t._v(t._s(t.$t("md_doors_number")))]),t._v(" "),e("b",{staticClass:"body-1 font-weight-bold"},[t._v(t._s(t.$t(t.product.doors_number)))])])])],1):t._e(),t._v(" "),t.product.seats_number?e(_.a,{attrs:{cols:"6",sm:"4",md:"2"}},[e(n.a,{staticClass:"white elevation-0 pa-1 text-center"},[e("img",{staticClass:"mx-1 mt-1",attrs:{width:"40",src:"https://www.flaticon.com/svg/static/icons/svg/1023/1023358.svg",alt:t.$t("md_seats_number")}}),t._v(" "),e("div",[e("h5",{staticClass:"caption"},[t._v(t._s(t.$t("md_seats_number")))]),t._v(" "),e("b",{staticClass:"body-1 font-weight-bold"},[t._v(t._s(t.$t(t.product.seats_number)))])])])],1):t._e(),t._v(" "),t.product.owner_count?e(_.a,{attrs:{cols:"6",sm:"4",md:"2"}},[e(n.a,{staticClass:"white elevation-0 pa-1 text-center"},[e("img",{staticClass:"mx-1 mt-1",attrs:{width:"40",src:"https://www.flaticon.com/svg/static/icons/svg/2784/2784488.svg",alt:t.$t("md_owner_count")}}),t._v(" "),e("div",[e("h5",{staticClass:"caption"},[t._v(t._s(t.$t("md_owner_count")))]),t._v(" "),e("b",{staticClass:"body-1 font-weight-bold"},[t._v(t._s(t.$t(t.product.owner_count)))])])])],1):t._e()],1)],1),t._v(" "),t.product.description?e(_.a,{attrs:{cols:"12",md:"8"}},[e("h3",{staticClass:"font-weight-bold pa-1 mb-3 px-2"},[t._v("\n          "+t._s(t.$t("description"))+"\n          "),e($.a,{staticClass:"float-right"},[t._v("mdi-text")])],1),t._v(" "),e(n.a,{staticClass:"mb-0 body-1 pa-2 elevation-0",class:t.$method.isArabic(t.product.description)?"is_rtl":"",domProps:{innerHTML:t._s(t.product.description)}})],1):t._e(),t._v(" "),Object.keys(t.product.inspection).length>0?e(_.a,{attrs:{cols:"12",md:"8"}},[e("h3",{staticClass:"font-weight-bold pa-1 mb-3 px-2"},[t._v("\n          "+t._s(t.$t("inspection_report"))+"\n          "),e($.a,{staticClass:"float-right"},[t._v("mdi-text")])],1),t._v(" "),e(y.a,{staticClass:"is_ltr",attrs:{flat:"",multiple:""}},t._l(Object.keys(t.product.inspection),(function(o,i){return e(f.a,{key:i},[e("div",{staticClass:"font-weight-medium",class:"soc_"+i},[e(x.a,{staticClass:"pa-3 font-weight-bold",on:{click:function(e){return t.$vuetify.goTo(".soc_"+i)}}},[e("div",[e($.a,[t._v("mdi-minus-thick")]),t._v(" "+t._s(o))],1)])],1),t._v(" "),i<Object.keys(t.product.inspection).length-1?e(v.a):t._e(),t._v(" "),e(w.a,{staticClass:"pa-0"},[e("ul",{staticClass:"list-style-none pa-0"},[t._l(t.product.inspection[o],(function(o,r){return[o.v?e("li",{key:r,staticClass:"pa-2 py-1 body-2"},[e("b",[t._v(" "+t._s(o.l))]),t._v(" : "+t._s(o.v)+"\n                  ")]):t._e()]}))],2)])],1)})),1)],1):t._e()],1)],1),t._v(" "),e(h.a,{attrs:{scrollable:"","max-width":"350"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(n.a,[e(c.a,{staticClass:"pa-2"},[e($.a,{staticClass:"font-weight-bold white rounded stripe-btn",attrs:{text:"",color:"error"},on:{click:function(e){t.dialog=!t.dialog}}},[t._v("mdi-close")]),t._v(" "),e("div",{staticClass:"mx-2"},[e("span",{staticClass:"font-weight-bold"},[t._v("Contacter un conseiller Autoprix")]),t._v(" "),e("div",{staticClass:"caption grey--text"},[t._v("\n            C'est gratuit et sans obligation d'achat\n          ")])])],1),t._v(" "),e(v.a),t._v(" "),t.is_passed_order?[e("div",{staticClass:"text-center"},[e("img",{staticClass:"mx-auto ma-4 mb-1",attrs:{src:"https://image.flaticon.com/icons/svg/190/190411.svg",width:"140",alt:""}}),t._v(" "),e("h3",{staticClass:"ma-3"},[t._v("\n            "+t._s(t.$t("thnx"))+" "+t._s(t.info.first_name)+",\n            "+t._s(t.$t("order_recived"))+" ("+t._s(t.info.phone)+")\n          ")])])]:e(c.b,{staticClass:"overflow-y-auto pa-2",staticStyle:{"max-height":"240px"}},[e(C.a,{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("div",{staticClass:"mx-2 grey--text mb-2"},[t._v("Renseignez vos coordonnées")]),t._v(" "),e(j.a,{attrs:{"no-gutters":""}},[e(_.a,{staticClass:"pa-1 pb-0",attrs:{cols:"12"}},[e(L.a,{staticClass:"white-input",attrs:{outlined:"",dense:"",rules:[t.rules.required],name:"phone",label:t.$t("phone"),"append-icon":"mdi-phone",placeholder:"Ex: 20 123 456",type:t.$vuetify.breakpoint.mdAndDown?"number":"text"},model:{value:t.info.phone,callback:function(e){t.$set(t.info,"phone",e)},expression:"info.phone"}})],1),t._v(" "),t.info.phone&&t.info.phone.length>=8?e(_.a,{staticClass:"pa-1 pb-0",attrs:{cols:"6"}},[e(L.a,{staticClass:"white-input",attrs:{outlined:"",dense:"",name:"first_name",label:t.$t("first_name")},model:{value:t.info.first_name,callback:function(e){t.$set(t.info,"first_name",e)},expression:"info.first_name"}})],1):t._e(),t._v(" "),t.info.phone&&t.info.phone.length>=8?e(_.a,{staticClass:"pa-1 pb-0",attrs:{cols:"6"}},[e(L.a,{staticClass:"white-input",attrs:{outlined:"",dense:"",name:"last_name",label:t.$t("last_name")},model:{value:t.info.last_name,callback:function(e){t.$set(t.info,"last_name",e)},expression:"info.last_name"}})],1):t._e(),t._v(" "),t.info.phone&&t.info.phone.length>=8?e(_.a,{staticClass:"pa-1 pb-0",attrs:{cols:"12"}},[e(O.a,{staticClass:"white-input",attrs:{outlined:"",dense:"","hide-details":"",items:t.cities,label:t.$t("search_gov_ex"),"item-text":"name","item-value":"id"},model:{value:t.info.governorate_id,callback:function(e){t.$set(t.info,"governorate_id",e)},expression:"info.governorate_id"}})],1):t._e()],1)],1)],1),t._v(" "),t.is_passed_order?t._e():e(c.a,{staticClass:"pa-1"},[e(r.a,{staticClass:"title elevation-0 font-weight-bold white--text",attrs:{color:"primary",block:"",disabled:!t.info.phone,loading:t.loading},on:{click:function(e){return t.send()}}},[t._v("\n          Envoyer\n        ")])],1),t._v(" "),e(v.a),t._v(" "),e("a",{staticClass:"text-decoration-none",attrs:{href:"tel:+216"+t.product.teleop_phone},on:{click:function(e){return t.callPhone()}}},[e(r.a,{staticClass:"elevation-0 black--text",attrs:{dark:"",block:"",tile:"",text:""}},[e("span",{staticClass:"subtitle-2"},[t._v("\n            Ou contactez-nous au : +216\n            "+t._s(t.f_numberFormat(t.product.teleop_phone).split(",").join(" ")))]),t._v(" "),e(S.a)],1)],1)],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);