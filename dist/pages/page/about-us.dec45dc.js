(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{412:function(e,t,r){},431:function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},441:function(e,t,r){"use strict";var n=r(412);r.n(n).a},442:function(e,t,r){e.exports=r.p+"img/banner-home.b848153.jpg"},448:function(e,t,r){"use strict";var main=r(252),n={props:{items:{type:Array}},data:function(){return{typeValue:"",typeStatus:!1,typingSpeed:50,erasingSpeed:30,newTextDelay:4e3,typeArrayIndex:0,charIndex:0}},methods:{typeText:function(){this.charIndex<this.items[this.typeArrayIndex].length?(this.typeStatus||(this.typeStatus=!0),this.typeValue+=this.items[this.typeArrayIndex].charAt(this.charIndex),this.charIndex+=1,Object(main.setTimeout)(this.typeText,this.typingSpeed)):(this.typeStatus=!1,Object(main.setTimeout)(this.eraseText,this.newTextDelay))},eraseText:function(){this.charIndex>0?(this.typeStatus||(this.typeStatus=!0),this.typeValue=this.items[this.typeArrayIndex].substring(0,this.charIndex-1),this.charIndex-=1,Object(main.setTimeout)(this.eraseText,this.erasingSpeed)):(this.typeStatus=!1,this.typeArrayIndex+=1,this.typeArrayIndex>=this.items.length&&(this.typeArrayIndex=0),Object(main.setTimeout)(this.typeText,this.typingSpeed+1e3))}},created:function(){Object(main.setTimeout)(this.typeText,200)}},o=(r(441),r(19)),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("span",[t("span",{staticClass:"typed-text",domProps:{innerHTML:this._s(this.typeValue)}}),this._v(" "),t("span",{staticClass:"cursor",class:{typing:this.typeStatus}},[this._v(" ")])])}),[],!1,null,"72352a2d",null);t.a=component.exports},454:function(e,t,r){"use strict";var n=r(1),o=r(73),c=r(5),l=r(12),m=r(2).a.extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object(n.a)({},this.activeClass,this.isActive)}),element):(Object(l.c)("v-item should only contain a single element",this),element)):(Object(l.c)("v-item is missing a default scopedSlot",this),null);var element}});Object(c.a)(m,Object(o.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),t.a=Object(c.a)(m,Object(o.a)("slideGroup")).extend({name:"v-slide-item"})},471:function(e,t,r){e.exports=r.p+"img/search.cc877f8.png"},472:function(e,t,r){e.exports=r.p+"img/estimation.2063f74.png"},473:function(e,t,r){e.exports=r.p+"img/statistic.9fdf183.png"},474:function(e,t,r){e.exports=r.p+"img/histo.eb5f34b.svg"},475:function(e,t,r){e.exports=r.p+"img/alert.1682e43.svg"},476:function(e,t,r){e.exports=r.p+"img/heart.dbb774d.svg"},477:function(e,t,r){e.exports=r.p+"img/tayara.d932747.jpg"},478:function(e,t,r){e.exports=r.p+"img/cava.fa323dd.png"},479:function(e,t,r){e.exports=r.p+"img/automobile.cc59101.png"},480:function(e,t,r){e.exports=r.p+"img/karhabti.acb38f1.png"},481:function(e,t,r){e.exports=r.p+"img/tn-annonce.ca4c622.png"},482:function(e,t,r){e.exports=r.p+"img/autoplus.27b7f7d.png"},483:function(e,t,r){e.exports=r.p+"img/binbincar.e194a42.png"},516:function(e,t,r){"use strict";r.r(t);r(13),r(10),r(8),r(6),r(11);var n=r(1),o=r(194),c=r(198),l=r(418),m=r(448);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={components:{TimeAgo:o.a,AnimatedText:m.a,Logo:c.a,SearchCar:l.a},data:function(){return{index_slide_model:1,index_slide_make:1,is_show:{histo_change:!1},tabs_banner:0,tab_color:"primary",params:{},odometers:["5000","5000","7500","10000","12500","15000","17500","20000","25000","30000","35000","40000","45000","50000","55000","60000","65000","70000","75000","80000","85000","90000","100000","125000","150000","175000","200000","250000"],prices:["5000","5000","5500","6000","6500","7000","7500","8000","8500","9000","9500","10000","12500","15000","17500","20000","22500","25000","27500","30000","32500","35000","37500","40000","42500","45000","47500","50000","55000","60000","65000","70000","75000","80000","85000","90000","95000","100000","125000","150000","175000","200000","225000","250000","275000","300000","325000","350000","375000","400000","425000","450000","475000","500000"],powers:[{is_show:!1,title:"Historique des changements <br> de prix​",text:"Découvrez la liste des changements de prix de chaque annonce, une information nécessaire à la bonne négociation de votre achat. Depuis combien de temps l’annonce est en ligne ? Le vendeur a-t-il baissé le prix ? C’est quoi la fréquence de mise à jour de l’annonce ?",image:r(474)},{is_show:!1,title:"Recevez les annonces auto correspondant à vos critères​​",text:"Enregistrez vos recherches et activez une alerte afin de recevoir directement les voitures d’occasion correspondant à vos critères. Les annonces auto viennent directement à vous. Un système d'alerte rapide et intuitif que vous pouvez désactiver à tout moment.​",image:r(475)},{is_show:!1,title:"Enregistrez vos annonces <br> favorites​",text:"Enregistrez les annonces qui vous intéressent pour une consultation ultérieure et suivez les changements de prix, de kilométrage et de la description de l’annonce.​",image:r(476)}],active_provider:0,providers:[{image:r(477),name:"Tayara",url:"https://www.tayara.tn/",slogan:"Site numéro 1 des petites annonces gratuites en Tunisie",text:"tayara.tn est un site web d'annonces gratuites en Tunisie, créé par Schibsted Classified Media, filiale de Schibsted ASA."},{image:r(478),name:"Cava.tn",text:""},{image:r(479),name:"Automobile",slogan:"Prix du neuf",text:"Prix des voitures neuves en Tunisie, Annonces auto, Voitures d&#039;occasion, Guide pratique, Actualités et Nouveautés, Photos et Vidéos, Fiches techniques,  Comparateur, Devis gratuit, Concessionnaires en Tunisie"},{image:r(480),name:"Karhabti"},{image:r(481),name:"Tunisie annonce"},{image:r(482),name:"Auto plus"},{image:r(483),name:"Binbincar"}],text_titles:[" comparateur d’annonces automobile en Tunisie​"," service d’évaluation de voitures d'occasion en Tunisie"," outil d’analyse du marché automobile en Tunisie​​"],tab:0,tables:[{name:"Modèles",items:[]},{name:"Marques",items:[]}],top_make:[],cp_model:0,model_detail:{},top_model:[]}},head:function(){return{title:"À propos de nous​",meta:[{hid:"description",name:"description",content:""},{hid:"og:title",property:"og:title",content:"À propos de nous​"},{hid:"og:description",property:"og:description",content:"​"},{hid:"og:image",property:"og:image",content:r(442)}]}},watch:{tabs_banner:function(e){switch(e){case 1:this.tab_color="#fcb414";break;case 2:this.tab_color="success";break;default:this.tab_color="primary"}}},methods:{goTo:function(e){var t="",param={};switch(e){case"search":t="search",param=v({},this.params),this.$store.commit("layout/is_keep_alive",!1),this.params.make&&this.params.model?t="search-make-model":this.params.make&&(t="search-make"),this.params.odometer&&(this.params.odometer<=400&&(this.params.odometer=1e3*this.params.odometer),this.params.min_odometer=0,this.params.max_odometer=this.params.odometer),this.params.price&&(this.params.price<=400&&(this.params.price=1e3*this.params.price),this.params.min_price=0,this.params.max_price=this.params.price);break;case"car-valuation":t="car-valuation";break;case 2:param=v({},this.params),this.params.make&&this.params.model?(delete this.params.make,delete this.params.model,t="car-data-make-model"):this.params.make?(delete this.params.model,t="car-data-make"):t="car-data",this.params.year&&(this.params.min_year=this.params.year,this.params.max_year=this.params.year)}this.$router.push(this.localePath({name:t,query:this.params,params:param}))},selectModel:function(e){this.params.make=e.make,this.params.model=e.model}},mounted:function(){var e=this;this.odometers=this.odometers.map((function(t,r){return 0==r?{text:"KM max",value:null}:{text:e.f_numberFormat(t,"KM"),value:t}})),this.prices=this.prices.map((function(t,r){return 0==r?{text:"Prix max",value:null}:{text:e.f_numberFormat(t,"DT"),value:t}}))}},_=r(19),y=r(23),f=r.n(y),x=r(190),w=r(183),C=r(185),k=r(16),j=r(389),A=r(398),T=r(370),S=r(67),O=r(119),z=r(121),P=r(55),V=r(391),I=r(130),D=r(454),L=r(392),component=Object(_.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("section",{staticClass:"py-12 pb-6 white"},[n("v-container",[n("v-card",{staticClass:"primary elevation-0",attrs:{width:"70",height:"10"}}),e._v(" "),n("h3",{staticClass:"tajawal display-1 font-weight-medium my-5"},[e._v("Pourquoi Autoprix ?")]),e._v(" "),n("p",[e._v("\n        De la recherche à l’estimation de prix en passant par l’analyse du marché,\n        "),n("br"),e._v("Autoprix vous accompagne dans votre projet automobile pas à pas,\n        "),n("br"),e._v("en vous faisant gagner du temps et économiser de l’argent. ​\n      ")])],1)],1),e._v(" "),n("section",{staticClass:"py-12"},[n("v-container",[n("v-row",[n("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"6"}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:r(471),expression:"require('@/assets/image/all/search.png')"}],attrs:{alt:"Recherche intelligente et simplifiée​​​",width:"500"}})]),e._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-card",{staticClass:"primary elevation-0",attrs:{width:"70",height:"10"}}),e._v(" "),n("h3",{staticClass:"tajawal display-1 font-weight-medium my-5 my-5"},[e._v("Recherche intelligente et simplifiée​​​")]),e._v(" "),n("p",[n("b",[e._v("Autoprix")]),e._v(" centralise le plus grand nombre d'annonces de voitures d'occasion en Tunisie. Avec le moteur de recherche, trouver la meilleure voiture d’occasion n’a jamais été aussi simple. Obtenez une liste de véhicules correspondant à vos critères :\n          ")]),e._v(" "),n("ul",{staticClass:"list-style-none px-3"},[n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[e._v("mdi-check")]),e._v("Marque et modèle​\n            ")],1),e._v(" "),n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[e._v("mdi-check")]),e._v("Budget maximum\n            ")],1),e._v(" "),n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[e._v("mdi-check")]),e._v("Intervalle d’âge et kilométrage maximum​\n            ")],1),e._v(" "),n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[e._v("mdi-check")]),e._v("Boite de vitesse (Automatique, Manuelle)​\n            ")],1),e._v(" "),n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[e._v("mdi-check")]),e._v("Carburant (essence, diesel)​\n            ")],1),e._v(" "),n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[e._v("mdi-check")]),e._v("Couleur​\n            ")],1),e._v(" "),n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[e._v("mdi-check")]),e._v("Indicateur de bonne affaire (La différence entre la cote et le prix proposé vous indique si l’annonce observée est bel et bien une bonne affaire)…​\n            ")],1)]),e._v(" "),n("v-btn",{staticClass:"text-uppercase mt-5 title stripe-btn primary",attrs:{dark:"",to:e.localePath({name:"search"}),large:""}},[n("v-icon",{staticClass:"mx-2"},[e._v("mdi-magnify")]),e._v("Rechercher\n            "),n("v-spacer"),e._v(" "),n("v-icon",{attrs:{large:""}},[e._v("mdi-menu-right")])],1)],1)],1)],1)],1),e._v(" "),n("section",{staticClass:"py-12 white"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-card",{staticClass:"bg--auto elevation-0",attrs:{width:"70",height:"10"}}),e._v(" "),n("h3",{staticClass:"tajawal display-1 font-weight-medium my-5"},[e._v("Estimez la valeur d’une voiture occasion​​​​")]),e._v(" "),n("p",[e._v("Vous souhaitez évaluer la valeur marchande d'une voiture d'occasion avant d'acheter, ou bien connaître l'estimation de prix de votre auto avant une mise en vente ? Consultez sa cote auto pour une transaction au meilleur prix.")]),e._v("​\n          "),n("p",[e._v("La cote Autoprix est un outil fiable, gratuit et accessible à tous. Grâce à l’analyse et la compréhension des annonces en ligne, nous avons pu développer cet outil à l’aide de modèles statistiques et de l’intelligence artificielle. La cote reflète donc la réalité du marché. Cela est vérifiable grâce aux nombreux graphiques qui vous sont présentés")]),e._v(" "),n("v-btn",{staticClass:"text-uppercase mt-5 title stripe-btn bg--auto",attrs:{to:e.localePath({name:"car-valuation"}),dark:"",text:"",large:""}},[n("v-icon",{staticClass:"mx-2"},[e._v("mdi-car")]),e._v("Estimer\n            "),n("v-spacer"),e._v(" "),n("v-icon",{attrs:{large:""}},[e._v("mdi-menu-right")])],1)],1),e._v(" "),n("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"6"}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:r(472),expression:"require('@/assets/image/all/estimation.png')"}],attrs:{width:"400",alt:"Estimez la valeur d’une voiture occasion​​​​"}})])],1)],1)],1),e._v(" "),n("section",{staticClass:"py-12 grey lighten-4"},[n("v-container",[n("v-row",[n("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"6"}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:r(473),expression:"require('@/assets/image/all/statistic.png')"}],attrs:{alt:"Des outils analytiques inédits​​",width:"500"}})]),e._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-card",{staticClass:"green elevation-0",attrs:{width:"70",height:"10"}}),e._v(" "),n("h3",{staticClass:"tajawal display-1 font-weight-medium my-5"},[e._v("Des outils analytiques inédits​​")]),e._v(" "),n("p",[e._v("\n            Simplifier la recherche de votre voiture par les mathématiques.\n            "),n("br"),e._v("Quel intérêt de passer des heures voire des jours à analyser le marché automobile alors que quelques clics suffisent ? ​\n          ")]),e._v(" "),n("p",[e._v("Les outils inédits et l’interface intuitive Autoprix permettent de :​")]),e._v(" "),n("ul",{staticClass:"list-style-none px-3"},[n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[e._v("mdi-check")]),e._v("Analyser et comprendre facilement le marché. Pour chaque modèle, découvrez les indicateurs et les visualisations sur une période allant des dernières 24 hs jusqu’aux 12 derniers mois.​\n            ")],1),e._v(" "),n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[e._v("mdi-check")]),e._v("Profiter de notre outil DataViz pour comparer les couleurs et carrosseries disponibles de chaque modèle en fonction de l’année de commercialisation.​\n            ")],1),e._v(" "),n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[e._v("mdi-check")]),e._v("Consulter le prix du neuf des dernières versions vendues officiellement en Tunisie.\n            ")],1)]),e._v(" "),n("br"),e._v("Personnalisez l’analyse en fonction de vos critères afin que vous vendiez ou achetiez un véhicule d’occasion au meilleur prix.​\n          "),n("br"),e._v(" "),n("v-btn",{staticClass:"text-uppercase mt-5 title stripe-btn green",attrs:{to:e.localePath({name:"car-data"}),dark:"",text:"",large:""}},[n("v-icon",{staticClass:"mx-2"},[e._v("mdi-chart-bar")]),e._v("Analyser\n            "),n("v-spacer"),e._v(" "),n("v-icon",{attrs:{large:""}},[e._v("mdi-menu-right")])],1)],1)],1)],1)],1),e._v(" "),n("section",{staticClass:"py-12"},[n("v-container",[n("v-card",{staticClass:"primary elevation-0",attrs:{width:"70",height:"10"}}),e._v(" "),n("h3",{staticClass:"tajawal display-1 font-weight-medium my-5"},[e._v("Nos avantages​")]),e._v(" "),n("v-row",{staticClass:"text-center"},e._l(e.powers,(function(t,r){return n("v-col",{key:r,attrs:{cols:"12",md:"4"},on:{click:function(e){t.is_show=!t.is_show}}},[n("div",{staticClass:"mx-auto transparent mt-5 cp"},[n("v-avatar",{staticClass:"pa-6",attrs:{size:"100",color:"white"}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.image,expression:"power.image"}],attrs:{width:"100"}})]),e._v(" "),n("h3",{staticClass:"font-weight-medium pa-2",domProps:{innerHTML:e._s(t.title)}}),e._v(" "),n("v-icon",{staticClass:"vert-move",attrs:{large:""}},[e._v(e._s(t.is_show?"mdi-chevron-up":"mdi-chevron-down"))]),e._v(" "),n("v-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.is_show,expression:"power.is_show"}],staticClass:"text-left"},[n("v-divider"),e._v(" "),n("v-card-text",{staticClass:"tajawal pa-1 font-weight-bold",domProps:{innerHTML:e._s(t.text)}})],1)])],1)])})),1)],1)],1),e._v(" "),n("section",{staticClass:"py-12 pb-0 white"},[n("v-container",[n("v-card",{staticClass:"primary elevation-0",attrs:{width:"70",height:"10"}}),e._v(" "),n("h3",{staticClass:"tajawal display-1 font-weight-medium my-5"},[e._v("Nos sources​​")]),e._v(" "),n("v-card",{staticClass:"elevation-0 transparent",attrs:{"max-width":"500"}},[n("v-list-item",{staticClass:"pa-0",attrs:{"three-line":""}},[n("v-list-item-content",{staticClass:"pa-0"},[n("a",{attrs:{href:e.providers[e.active_provider].url,target:"_blank",rel:"noopener nofollow noreferrer"}},[n("v-list-item-title",{staticClass:"subtitle black--text font-weight-medium"},[e._v("\n                "+e._s(e.providers[e.active_provider].name)+"\n                "),n("v-icon",[e._v("mdi-link")])],1)],1),e._v(" "),n("p",{staticClass:"p--text",domProps:{innerHTML:e._s(e.providers[e.active_provider].text)}})])],1)],1),e._v(" "),n("v-slide-group",{attrs:{"show-arrows":"","center-active":!0},model:{value:e.active_provider,callback:function(t){e.active_provider=t},expression:"active_provider"}},e._l(e.providers,(function(t,r){return n("v-slide-item",{key:r},[n("div",{staticClass:"line-height cp mr-1 my-1 border border-radius pa-1 bg--white",on:{click:function(t){e.active_provider=r}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.image,expression:"provider.image"}],attrs:{alt:"",height:"70","min-width":"70"}})])])})),1)],1)],1)])}),[],!1,null,null,null);t.default=component.exports;f()(component,{VAvatar:x.a,VBtn:w.a,VCard:C.a,VCardText:k.b,VCol:j.a,VContainer:A.a,VDivider:T.a,VExpandTransition:S.a,VIcon:O.a,VListItem:z.a,VListItemContent:P.a,VListItemTitle:P.c,VRow:V.a,VSlideGroup:I.b,VSlideItem:D.a,VSpacer:L.a})}}]);