(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{402:function(t,e,r){},403:function(t,e,r){"use strict";var n={props:{value:{},text:{},color:{}},data:function(){return{value_rest:0}},created:function(){this.value_rest=Math.abs(5-this.value)}},o=r(19),c=r(23),l=r.n(c),d=r(119),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("client-only",[r("span",{staticClass:"progress caption font-weight-bold pl-0"},[t._l(t.value,(function(i,e){return r("v-icon",{key:"d"+e,style:{color:t.color},attrs:{small:""}},[t._v("mdi-steering")])})),t._v(" "),t._l(t.value_rest,(function(i,e){return r("v-icon",{key:"db"+e,staticStyle:{color:"#d9d9d9"},attrs:{small:""}},[t._v("mdi-steering")])})),t._v(" "),r("span",{staticStyle:{"font-size":"11px"},style:{color:t.color}},[t._v(t._s(t.text))])],2)])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VIcon:d.a})},404:function(t,e,r){"use strict";r(43),r(36);var n=r(403),o=r(195),c=r(194),l={components:{Indicator:n.a,Favorite:o.a,TimeAgo:c.a},props:{product:{dafault:[]}},data:function(){return{image_index:0,is_show_phone:!1,isActive:!1}},computed:{color:function(){return this.product.price_description?this.$t("COLOR_"+this.product.price_description):(this.product.price_median,"green")},description:function(){return this.product.description?((this.product.title||" ").replace("- Tayara","")!=this.product.make+" "+this.product.model?"<b>"+(this.product.title||" ").replace("- Tayara","")+"</b> - ":"")+(this.product.description||" ").split("\\n").join(" ").replace(/<\/?[^>]+(>|$)/g,""):(this.product.title||" ").replace("- Tayara","")!=this.product.make+" "+this.product.model?"<b >"+(this.product.title||" ").replace("- Tayara","")+"</b>":""}},methods:{share:function(){var t="https://www.autoprix.tn"+this.$router.resolve(this.localePath({name:"car-id",params:{id:this.product.url_id}})).href;this.$store.commit("layout/share",{is_open:!0,url:t,title:this.product.make+" "+this.product.model})}},created:function(){}},d=r(19),v=r(23),_=r.n(v),m=r(190),h=r(184),f=r(185),y=r(16),w=r(412),C=r(411),x=r(389),O=r(370),j=r(119),k=r(121),L=r(55),T=r(391),$=r(392),U=r(395),P=r(132),D=r.n(P),I=r(56),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"stripe-bt elevation-0 grey lighten-5",attrs:{tile:""}},[r("v-list-item",{staticClass:"pa-1 px-1 pr-2"},[r("v-avatar",{staticClass:"mx-2",attrs:{left:"",size:"35",color:t.color}},[r("span",{staticClass:"white--text headline capitalize"},[t._v(t._s(t.product.seller[0]))])]),t._v(" "),r("v-list-item-content",{staticClass:"py-0 pb-0"},[r("h4",{staticClass:"font-weight-bold body-2 mb-0 capitalize"},[t._v(t._s(t.product.seller))]),t._v(" "),r("v-list-item-title",{staticClass:"caption"},[r("client-only",[r("time-ago",{attrs:{datetime:t.product.last_updated,locale:t.$i18n.locale}}),t._v("·\n        ")],1),t._v("\n        "+t._s(t.$t(t.product.governorate))+t._s(t.product.city?", "+t.$t(t.product.city):"")+"\n      ")],1)],1),t._v(" "),r("client-only",[1==t.product.is_sold?r("v-btn",{staticClass:"warning elevation-0 mr-1 is_ltr",attrs:{depressed:"",dark:""}},[r("v-icon",[t._v("mdi-alert-circle-outline")]),t._v(" "),r("span",{staticClass:"ml-1"},[t._v(t._s(t.$t("sold")))])],1):t._e(),t._v(" "),r("span",{staticClass:"float-right",staticStyle:{position:"relative","z-index":"2"}},[r("v-avatar",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"facelight--bg px-1 mx-1 cp",attrs:{size:"36"},on:{click:t.share}},[r("v-icon",{staticClass:"black--text"},[t._v("mdi-share")])],1),t._v(" "),r("v-avatar",{staticClass:"facelight--bg px-1 mx-1",attrs:{size:"36"}},[r("Favorite",{attrs:{product_id:t.product.id}})],1)],1)],1)],1),t._v(" "),r("div",{staticClass:"grey darken-5"},[r("span",{staticClass:"image_thumb_imfo grey darken-4 border-radius px-1 grey--text"},[t._v("\n      "+t._s(t.image_index+1)+"/"+t._s(t.product.image.length)+"\n      "),r("v-icon",{staticClass:"grey--text"},[t._v("mdi-camera")])],1),t._v(" "),r("v-card",{staticClass:"black elevation-0",attrs:{"min-height":t.$vuetify.breakpoint.smAndDown?"220":"200",tile:""}},[r("client-only",[r("v-carousel",{attrs:{continuous:!0,"show-arrows":t.product.image.length>1,"hide-delimiter-background":"",cycle:!1,"hide-delimiters":"",height:t.$vuetify.breakpoint.smAndDown?"220":"200"},model:{value:t.image_index,callback:function(e){t.image_index=e},expression:"image_index"}},t._l(t.product.image,(function(img,i){return r("v-carousel-item",{key:i},[r("nuxt-link",{attrs:{to:t.localePath({name:"car-id",params:{id:t.product.url_id}})}},[r("div",{staticClass:"align-self-cente grey darken-4 height-100"},[r("img",{staticClass:"center-in",attrs:{src:img,alt:"Carte voiture "+t.product.make+" "+t.product.model}})])])],1)})),1)],1)],1)],1),t._v(" "),r("nuxt-link",{staticClass:"black--text",attrs:{to:t.localePath({name:"car-id",params:{id:t.product.url_id}})}},[r("v-list-item-content",{staticClass:"pa-1 px-2"},[r("v-card-actions",{staticClass:"pa-0 mb-0"},[r("h1",{staticClass:"font-weight-black title"},[t._v(t._s(t.product.make)+" "+t._s(t.product.model))]),t._v(" "),r("v-spacer"),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([t.product.price_median?{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"float-right",style:{"background-color":t.color},attrs:{small:"",icon:""}},"v-btn",o,!1),n),[t.product.price_description?r("v-icon",{staticClass:"white--text"},[t._v(t._s(t.$t("ICON_"+t.product.price_description)))]):r("v-icon",{staticClass:"white--text"},[t._v("mdi-cash")])],1)]}}:null],null,!0)},[t._v(" "),t.product.price?r("span",[t._v("\n            "+t._s(t.product.price-t.product.price_median>=0?"+":"-")+"\n            "+t._s(t.f_numberFormat(Math.abs(t.product.price-t.product.price_median),t.$t("currency")))+"\n            "+t._s(t.$t("compared_market_price"))+"\n          ")]):r("span",[t._v(t._s(t.f_numberFormat(t.product.price_median,t.$t("currency"))))])])],1),t._v(" "),r("v-card-actions",{staticClass:"pa-0"},[r("h3",{staticClass:"title font-weight-black"},[t._v(t._s(t.f_numberFormat(t.product.price,t.$t("currency"))))]),t._v(" "),r("v-spacer"),t._v(" "),t.product.price_description&&0!=t.product.price?r("div",{staticClass:"body-2 text-right font-weight-bold"},[t._v(t._s(t.$t(t.product.price_description)))]):t.product.price_median?r("div",{staticClass:"body-2 text-right font-weight-bold"},[t._v(t._s(t.$t("see_estimate")))]):t._e()],1)],1),t._v(" "),r("v-divider",{staticClass:"mb-1"}),t._v(" "),r("v-list-item",{staticClass:"px-2",style:{"min-height":t.$vuetify.breakpoint.smAndDown?"":"40px"},attrs:{"three-line":""}},[null!=t.description?r("v-list-item-subtitle",{staticClass:"caption line-17",class:t.isArabic(t.description)?"is_rtl":"",domProps:{innerHTML:t._s(t.description)}}):t._e()],1),t._v(" "),r("v-row",{staticClass:"ma-0 mt-1 card-detail text-center",attrs:{"no-gutters":""}},[r("v-col",{staticClass:"pb-2 font-weight-bold caption",attrs:{cols:"4"}},[t._v(t._s(t.product.year?t.product.year:t.$t("nc")))]),t._v(" "),r("v-col",{staticClass:"pb-2 font-weight-bold caption",attrs:{cols:"4"}},[t._v(t._s(t.product.odometer?t.f_numberFormat(t.product.odometer,t.$t("km")):t.$t("nc")))]),t._v(" "),r("v-col",{staticClass:"pb-2 font-weight-bold caption",attrs:{cols:"4"}},[t._v(t._s(t.product.fuel_type?t.$t(t.product.fuel_type):t.$t("nc")))])],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;_()(component,{VAvatar:m.a,VBtn:h.a,VCard:f.a,VCardActions:y.a,VCarousel:w.a,VCarouselItem:C.a,VCol:x.a,VDivider:O.a,VIcon:j.a,VListItem:k.a,VListItemContent:L.a,VListItemSubtitle:L.b,VListItemTitle:L.c,VRow:T.a,VSpacer:$.a,VTooltip:U.a}),D()(component,{Ripple:I.a})},411:function(t,e,r){"use strict";r(13),r(10),r(8),r(7),r(11);var n=r(1),o=r(366),c=r(158),l=r(5),d=r(0),v=r(48);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=Object(l.a)(o.a,v.a);e.a=h.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(c.a,{staticClass:"v-carousel__item",props:m(m({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(d.o)(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,data=t.data;return data.staticClass="v-window-item",data.directives.push({name:"show",value:this.isActive}),this.$createElement(e,data,this.genDefaultSlot())}}})},412:function(t,e,r){"use strict";r(13),r(10),r(8),r(7),r(11);var n=r(1),o=(r(15),r(402),r(161)),c=r(60),l=r(35),d=r(133),v=r(57),_=v.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return v.a.options.computed.classes.call(this)}},methods:{genData:v.a.options.methods.genData}}),m=r(0),h=r(12);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return y(y({},o.a.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(h.a)("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:o.a.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,r=[],i=0;i<e;i++){var n=this.$createElement(c.a,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(l.a,{props:{size:18}},this.delimiterIcon)]);r.push(n)}return this.$createElement(_,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},r)},genProgress:function(){return this.$createElement(d.a,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=o.a.options.render.call(this,t);return e.data.style="height: ".concat(Object(m.f)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},429:function(t,e,r){t.exports=r.p+"img/icon.d214d85.jpg"},522:function(t,e,r){"use strict";r.r(e);r(13),r(10),r(8),r(7),r(11);var n=r(1),o=(r(29),r(9));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={components:{Product:r(404).a},data:function(){return{product:{},url:null,loading:!1,is_error:!1}},head:function(){return{title:"Règles de confidentialité et conditions d'utilisation",meta:[{hid:"description",name:"description",content:"Les présentes conditions générales d'utilisation (dites « CGU ») ont pour objet l'encadrement juridique des modalités de mise à disposition du site et des services et de définir les conditions d’accès et d’utilisation des services par « l'Utilisateur »."},{hid:"og:title",property:"og:title",content:"Règles de confidentialité et conditions d'utilisation​​"},{hid:"og:description",property:"og:description",content:"Les présentes conditions générales d'utilisation (dites « CGU ») ont pour objet l'encadrement juridique des modalités de mise à disposition du site et des services et de définir les conditions d’accès et d’utilisation des services par « l'Utilisateur ».​"},{hid:"og:image",property:"og:image",content:r(429)}]}},computed:{},methods:{check:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$recaptcha.getToken();case 3:return r=e.sent,e.next=6,t.$api.get("public/valiation/add-product",{params:l({url:t.url},{recaptcha_token:r})}).then((function(e){t.is_error=!1,t.product=e.data.result,t.$toast.success("L'annonce a été ajoutée avec succès")})).catch((function(e){t.is_error=!0}));case 6:t.loading=!1;case 7:case"end":return e.stop()}}),e)})))()}}},v=r(19),_=r(23),m=r.n(_),h=r(389),f=r(398),y=r(391),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",[r("v-row",[r("v-col",{staticClass:"white border-radius",attrs:{cols:"12",sm:"12",md:"8"}},[r("h1",[t._v("Règles de confidentialité et conditions d'utilisation")]),t._v(" "),r("small",[t._v("En vigueur au 05/07/2020")]),t._v(" "),r("p",{staticClass:"mt-3"},[r("span",{attrs:{"data-contrast":"auto"}},[t._v("Les présentes conditions générales d'utilisation (dites «")]),t._v(" "),r("strong",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("CGU")])]),t._v(" "),r("span",{attrs:{"data-contrast":"auto"}},[t._v("») ont pour objet l'encadrement juridique des modalités de mise à disposition du site et des services et de définir les conditions d’accès et d’utilisation des services par «")]),t._v(" "),r("strong",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("l'Utilisateur")])]),t._v(" "),r("span",{attrs:{"data-contrast":"auto"}},[t._v("».")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335551550":6,"335551620":6,"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("Les présentes CGU sont accessibles sur le site à la rubrique")]),t._v(" "),r("span",{attrs:{"data-contrast":"auto"}},[t._v(" «")]),t._v(" "),r("strong",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("CGU")])]),t._v(" "),r("span",{attrs:{"data-contrast":"auto"}},[t._v("».")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335551550":6,"335551620":6,"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("Toute inscription ou utilisation du site implique l'acceptation sans aucune réserve ni restriction des présentes CGU par l’utilisateur. Lors de l'inscription sur le site via le Formulaire d’inscription, chaque utilisateur accepte expressément les présentes CGU en cochant la case précédant le texte suivant : « ")]),t._v(" "),r("em",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("Je reconnais avoir lu et compris les CGU et je les accepte")])]),t._v(" "),r("span",{attrs:{"data-contrast":"auto"}},[t._v(" ».")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("En cas de non-acceptation des CGU stipulées dans le présent contrat, l'Utilisateur se doit de renoncer à l'accès des services proposés par le site.")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("em",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("www.autoprix.tn")])]),t._v(" "),r("span",{attrs:{"data-contrast":"auto"}},[t._v(" se réserve le droit de modifier unilatéralement et à tout moment le contenu des présentes CGU.")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("strong",[r("span",{attrs:{"data-contrast":"none"}},[r("span",{attrs:{"data-ccp-parastyle":"heading 1"}},[t._v("Article 1 : Les mentions légales")])])]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":280}'}},[t._v(" ")])]),t._v(" "),r("p",[t._v("L’édition et la direction de la publication du site www.autoprix.tn est assurée par Equipe digitale , domiciliée Rue Tarek Ibn Zied 1160 Nadhour Zaghouan Tunisie .")]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("Adresse e-mail autoprix.tn@gmail.com.")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("strong",[r("span",{attrs:{"data-contrast":"none"}},[r("span",{attrs:{"data-ccp-parastyle":"heading 1"}},[t._v("ARTICLE 2 : Accès au site")])])]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":280}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("Le site ")]),t._v(" "),r("em",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("www.autoprix.tn")])]),t._v(" "),r("span",{attrs:{"data-contrast":"auto"}},[t._v(" permet à l'Utilisateur un accès gratuit aux services suivants :")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les frais supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("L’Utilisateur non membre n'a pas accès aux services réservés. Pour cela, il doit s’inscrire en remplissant le formulaire. En acceptant de s’inscrire aux services réservés, l’Utilisateur membre s’engage à fournir des informations sincères et exactes concernant son état civil et ses coordonnées, notamment son adresse email.")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("Pour accéder aux services, l’Utilisateur doit ensuite s'identifier à l'aide de son identifiant et de son mot de passe qui lui seront communiqués après son inscription.")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("Tout Utilisateur membre régulièrement inscrit pourra également solliciter sa désinscription en se rendant à la page dédiée sur son espace personnel. Celle-ci sera effective dans un délai raisonnable.")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("Tout événement dû à un cas de force majeure ayant pour conséquence un dysfonctionnement du site ou serveur et sous réserve de toute interruption ou modification en cas de maintenance, n'engage pas la responsabilité de ")]),t._v(" "),r("em",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("www.autoprix.tn. ")])]),t._v(" "),r("span",{attrs:{"data-contrast":"auto"}},[t._v("Dans ces cas, l’Utilisateur accepte ainsi ne pas tenir rigueur à l’éditeur de toute interruption ou suspension de service, même sans préavis.")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("L'Utilisateur a la possibilité de contacter le site par messagerie électronique à l’adresse email de l’éditeur communiqué à l’ARTICLE 1.")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("strong",[r("span",{attrs:{"data-contrast":"none"}},[r("span",{attrs:{"data-ccp-parastyle":"heading 1"}},[t._v("ARTICLE 3 : Collecte des données")])])]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":280}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("Le site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés.")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles. L'Utilisateur exerce ce droit :")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("ul",[r("li",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("via son espace personnel ;")])])]),t._v(" "),r("p",[r("strong",[r("span",{attrs:{"data-contrast":"none"}},[r("span",{attrs:{"data-ccp-parastyle":"heading 1"}},[t._v("ARTICLE 4 : Propriété intellectuelle")])])]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":280}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son…) font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur.")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("La marque Auto prix est une marque déposée")]),t._v(" "),r("span",{attrs:{"data-contrast":"auto"}},[t._v(". ")]),t._v(" "),r("span",{attrs:{"data-contrast":"auto"}},[t._v("Toute représentation et/ou reproduction et/ou exploitation partielle ou totale de cette marque, de quelque nature que ce soit, est totalement prohibée.")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, copie des différents contenus. Il s'engage à une utilisation des contenus du site dans un cadre strictement privé, toute utilisation à des fins commerciales et publicitaires est strictement interdite.")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l’autorisation expresse de l’exploitant du site Internet constituerait une contrefaçon sanctionnée par l’article L 335-2 et suivants du Code de la propriété intellectuelle.")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("Il est rappelé conformément à l’article L122-5 du Code de propriété intellectuelle que l’Utilisateur qui reproduit, copie ou publie le contenu protégé doit citer l’auteur et sa source.")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}}),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559685":566,"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("strong",[r("span",{attrs:{"data-contrast":"none"}},[r("span",{attrs:{"data-ccp-parastyle":"heading 1"}},[t._v("ARTICLE 5 : Responsabilité")])])]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":280}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("Les sources des informations diffusées sur le site www.autoprix.tn sont réputées fiables mais le site ne garantit pas qu’il soit exempt de défauts, d’erreurs ou d’omissions.")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle. Malgré des mises à jour régulières, le site ")]),t._v(" "),r("em",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("www.autoprix.tn")])]),t._v(" "),r("span",{attrs:{"data-contrast":"auto"}},[t._v("ne peut être tenu responsable de la modification des dispositions administratives et juridiques survenant après la publication. De même, le site ne peut être tenue responsable de l’utilisation et de l’interprétation de l’information contenue dans ce site.")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("L'Utilisateur s'assure de garder son mot de passe secret. Toute divulgation du mot de passe, quelle que soit sa forme, est interdite. Il assume les risques liés à l'utilisation de son identifiant et mot de passe. Le site décline toute responsabilité.")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559685":566,"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("Le site ")]),t._v(" "),r("em",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("www.autoprix.tn")])]),t._v(" "),r("span",{attrs:{"data-contrast":"auto"}},[t._v("ne peut être tenu pour responsable d’éventuels virus qui pourraient infecter l’ordinateur ou tout matériel informatique de l’Internaute, suite à une utilisation, à l’accès, ou au téléchargement provenant de ce site.")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d'un tiers.")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("strong",[r("span",{attrs:{"data-contrast":"none"}},[r("span",{attrs:{"data-ccp-parastyle":"heading 1"}},[t._v("ARTICLE 6 : Liens hypertextes")])])]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":280}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("Des liens hypertextes peuvent être présents sur le site. L’Utilisateur est informé qu’en cliquant sur ces liens, il sortira du site ")]),t._v(" "),r("em",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("www.autoprix.tn.")])]),t._v(" "),r("span",{attrs:{"data-contrast":"auto"}},[t._v(" Ce dernier n’a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("strong",[r("span",{attrs:{"data-contrast":"none"}},[r("span",{attrs:{"data-ccp-parastyle":"heading 1"}},[t._v("ARTICLE 7 : Cookies")])])]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":280}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("L’Utilisateur est informé que lors de ses visites sur le site, un cookie peut s’installer automatiquement sur son logiciel de navigation.")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("Les cookies sont de petits fichiers stockés temporairement sur le disque dur de l’ordinateur de l’Utilisateur par votre ")]),t._v(" "),r("span",{attrs:{"data-contrast":"auto"}},[t._v("navigateur et qui sont nécessaires à l’utilisation du site ")]),t._v(" "),r("em",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("www.autoprix.tn")])]),t._v(" "),r("span",{attrs:{"data-contrast":"auto"}},[t._v(". Les cookies ne contiennent pas d’information personnelle et ne peuvent pas être utilisés pour identifier quelqu’un. Un cookie contient un identifiant unique, généré aléatoirement et donc anonyme. Certains cookies expirent à la fin de la visite de l’Utilisateur, d’autres restent.")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("L’information contenue dans les cookies est utilisée pour améliorer le site ")]),t._v(" "),r("em",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("www.autoprix.tn")])]),t._v(" "),r("span",{attrs:{"data-contrast":"auto"}},[t._v(".")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("En naviguant sur le site, L’Utilisateur les accepte.")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("L’Utilisateur doit toutefois donner son consentement quant à l’utilisation de certains cookies.")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("A défaut d’acceptation, l’Utilisateur est informé que certaines fonctionnalités ou pages risquent de lui être refusées.")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])]),t._v(" "),r("p",[r("span",{attrs:{"data-contrast":"auto"}},[t._v("L’Utilisateur pourra désactiver ces cookies par l’intermédiaire des paramètres figurant au sein de son logiciel de navigation.")]),t._v(" "),r("span",{attrs:{"data-ccp-props":'{"335559738":200}'}},[t._v(" ")])])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VCol:h.a,VContainer:f.a,VRow:y.a})}}]);