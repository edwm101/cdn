(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{433:function(t,e,r){t.exports=r.p+"img/d214d85.jpg"},457:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},458:function(t,e,r){var n=r(28);n(n.S,"Number",{EPSILON:Math.pow(2,-52)})},459:function(t,e){function r(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=r=function(t){return typeof t}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(e)}t.exports=r},468:function(t,e,r){},476:function(t,e,r){"use strict";var n=r(1),o=r(75),c=r(5),l=r(12),m=r(2).a.extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object(n.a)({},this.activeClass,this.isActive)}),element):(Object(l.c)("v-item should only contain a single element",this),element)):(Object(l.c)("v-item is missing a default scopedSlot",this),null);var element}});Object(c.a)(m,Object(o.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),e.a=Object(c.a)(m,Object(o.a)("slideGroup")).extend({name:"v-slide-item"})},503:function(t,e,r){t.exports=r.p+"img/20ce963.png"},504:function(t,e,r){t.exports=r.p+"img/cc877f8.png"},505:function(t,e,r){t.exports=r.p+"img/2063f74.png"},506:function(t,e,r){t.exports=r.p+"img/9fdf183.png"},507:function(t,e,r){"use strict";var n=r(468);r.n(n).a},508:function(t,e,r){t.exports=r.p+"img/eb5f34b.svg"},509:function(t,e,r){t.exports=r.p+"img/1682e43.svg"},510:function(t,e,r){t.exports=r.p+"img/dbb774d.svg"},511:function(t,e,r){t.exports=r.p+"img/d932747.jpg"},512:function(t,e,r){t.exports=r.p+"img/cc59101.png"},513:function(t,e,r){t.exports=r.p+"img/acb38f1.png"},514:function(t,e,r){t.exports=r.p+"img/ca4c622.png"},515:function(t,e,r){t.exports=r.p+"img/fa323dd.png"},516:function(t,e,r){t.exports=r.p+"img/27b7f7d.png"},517:function(t,e,r){t.exports=r.p+"img/e194a42.png"},520:function(t,e,r){"use strict";r.r(e);r(13),r(9),r(8),r(6),r(10);var n=r(59),o=r(1),c=r(218),l=r(263),m=r(448),main=r(279),d={props:{items:{type:Array}},data:function(){return{typeValue:"",typeStatus:!1,typingSpeed:50,erasingSpeed:30,newTextDelay:4e3,typeArrayIndex:0,charIndex:0}},methods:{typeText:function(){this.charIndex<this.items[this.typeArrayIndex].length?(this.typeStatus||(this.typeStatus=!0),this.typeValue+=this.items[this.typeArrayIndex].charAt(this.charIndex),this.charIndex+=1,Object(main.setTimeout)(this.typeText,this.typingSpeed)):(this.typeStatus=!1,Object(main.setTimeout)(this.eraseText,this.newTextDelay))},eraseText:function(){this.charIndex>0?(this.typeStatus||(this.typeStatus=!0),this.typeValue=this.items[this.typeArrayIndex].substring(0,this.charIndex-1),this.charIndex-=1,Object(main.setTimeout)(this.eraseText,this.erasingSpeed)):(this.typeStatus=!1,this.typeArrayIndex+=1,this.typeArrayIndex>=this.items.length&&(this.typeArrayIndex=0),Object(main.setTimeout)(this.typeText,this.typingSpeed+1e3))}},created:function(){Object(main.setTimeout)(this.typeText,200)}},v=(r(507),r(20)),h=Object(v.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("span",{staticClass:"typed-text"},[this._v(this._s(this.typeValue))]),this._v(" "),e("span",{staticClass:"cursor",class:{typing:this.typeStatus}},[this._v(" ")])])}),[],!1,null,"31b3b1e4",null).exports;function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{TimeAgo:c.a,AnimatedText:h,Logo:l.a,SearchCar:m.a},data:function(){return{index_slide_model:1,index_slide_make:1,is_show:{histo_change:!1},tabs_banner:0,tab_color:"primary",params:{},years:[],date:{text:"any_date",value:"365"},dates:[{text:"any_date",value:"365"},{text:"today",value:"1"},{text:"week",value:"7"},{text:"3 months",value:"90"},{text:"6 months",value:"180"},{text:"month",value:"30"}],powers:[{is_show:!1,title:"Historique des changements <br> de prix​",text:"Découvrez la liste des changements de prix de chaque annonce, une information nécessaire à la bonne négociation de votre achat. Depuis combien de temps l’annonce est en ligne ? Le vendeur a-t-il baissé le prix ? C’est quoi la fréquence de mise à jour de l’annonce ?",image:r(508)},{is_show:!1,title:"Recevez les annonces auto correspondant à vos critères​​",text:"Enregistrez vos recherches et activez une alerte afin de recevoir directement les voitures d’occasion correspondant à vos critères. Les annonces auto viennent directement à vous. Un système d'alerte rapide et intuitif que vous pouvez désactiver à tout moment.​",image:r(509)},{is_show:!1,title:"Enregistrez vos annonces <br> favorites​",text:"Enregistrez les annonces qui vous intéressent pour une consultation ultérieure et suivez les changements de prix, de kilométrage et de la description de l’annonce.​",image:r(510)}],active_provider:0,providers:[{image:r(511),name:"Tayara",url:"https://www.tayara.tn/",slogan:"Site numéro 1 des petites annonces gratuites en Tunisie",text:"tayara.tn est un site web d'annonces gratuites en Tunisie, créé par Schibsted Classified Media, filiale de Schibsted ASA."},{image:r(512),name:"Automobile",slogan:"Prix du neuf",text:"Prix des voitures neuves en Tunisie, Annonces auto, Voitures d&#039;occasion, Guide pratique, Actualités et Nouveautés, Photos et Vidéos, Fiches techniques,  Comparateur, Devis gratuit, Concessionnaires en Tunisie"},{image:r(513),name:"Karhabti"},{image:r(514),name:"Tunisie annonce"},{image:r(515),name:"Cava.tn",slogan:"Prix du neuf",text:"Prix des voitures neuves en Tunisie, Annonces auto, Voitures d&#039;occasion, Guide pratique, Actualités et Nouveautés, Photos et Vidéos, Fiches techniques,  Comparateur, Devis gratuit, Concessionnaires en Tunisie"},{image:r(516),name:"Auto plus"},{image:r(517),name:"Binbincar"}],text_titles:[" comparateur d’annonces automobile en Tunisie​"," service d’évaluation de voitures d'occasion en Tunisie"," outil d’analyse du marché automobile en Tunisie​​"],tab:0,tables:[{name:"Modèles",items:[]},{name:"Marques",items:[]}],top_make:[],cp_model:0,model_detail:{},top_model:[]}},head:function(){return{title:"Comparateur de prix voiture occasion Tunisie​",meta:[{hid:"description",property:"description",content:"Autoprix centralise le plus grand nombre d'annonces de voitures d'occasion en Tunisie. Toutes les annonces automobile sur le même site web. "},{hid:"og:title",property:"og:title",content:"Comparateur de prix voiture occasion Tunisie​"},{hid:"og:description",property:"og:description",content:"Autoprix centralise le plus grand nombre d'annonces de voitures d'occasion en Tunisie. Toutes les annonces automobile sur le même site web. ​"},{hid:"og:image",property:"og:image",content:r(433)}]}},watch:{tabs_banner:function(t){switch(t){case 1:this.tab_color="#fcb414";break;case 2:this.tab_color="success";break;default:this.tab_color="primary"}},date:function(){this.params.date=this.date.value}},methods:{goTo:function(){var t="",param={};switch(this.tabs_banner){case 0:t="search",param=x({},this.params),this.$store.commit("layout/is_keep_alive",!1),this.params.make&&this.params.model?(delete this.params.make,delete this.params.model,t="search-make-model"):this.params.make&&(delete this.params.model,t="search-make"),this.params.odometer&&(this.params.min_odometer=0,this.params.max_odometer=this.params.odometer),this.params.price&&(this.params.min_price=0,this.params.max_price=this.params.price);break;case 1:t="car-valuation";break;case 2:param=x({},this.params),this.params.make&&this.params.model?(delete this.params.make,delete this.params.model,t="car-data-make-model"):this.params.make?(delete this.params.model,t="car-data-make"):t="car-data",this.params.year&&(this.params.min_year=this.params.year,this.params.max_year=this.params.year)}this.$router.push(this.localePath({name:t,query:this.params,params:param}))},selectModel:function(t){this.params.make=t.make,this.params.model=t.model},moreModel:function(){var t=this;this.cp_model++;this.$api.get("public/analytics/top/model",{params:{cp:this.cp_model,max:6}}).then((function(e){t.model_detail=e.data.detail,t.tables[0].items=[].concat(Object(n.a)(t.tables[0].items),Object(n.a)(e.data.result))}))}},mounted:function(){for(var t=this,i=2020;i>=1930;i--)this.years.push(i);this.moreModel(),this.$api.get("public/analytics/top/make",{params:{max:12}}).then((function(e){t.tables[1].items=e.data.result}))}},y=r(26),C=r.n(y),w=r(202),k=r(196),T=r(197),A=r(19),j=r(407),S=r(426),O=r(392),P=r(69),V=r(128),$=r(276),I=r(129),z=r(74),L=r(409),M=r(522),D=r(134),E=r(476),F=r(410),N=r(412),R=r(424),G=r(395),B=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"banner is_ltr elevation-0",staticStyle:{"background-size":"auto auto","background-position":"right bottom","background-color":"#e7edf0"},style:{"background-image":"url("+r(503)+")"},attrs:{tile:""}},[n("v-container",[n("div",{staticClass:"triangle"}),t._v(" "),n("v-img",{staticClass:"white--text align-center back overflow-init",attrs:{"min-height":"450"}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"mt-1",class:{is_rtl:t.$store.state.layout.is_rtl},attrs:{md:"5",sm:"10","offset-md":"1"}},[n("v-card",{staticClass:"transparent elevation-0 pa-1",attrs:{height:"170"}},[n("h1",{staticClass:"black--text display-1 font-weight-medium px-1 mb-2"},[n("Logo",{attrs:{size:"120"}})],1),t._v(" "),n("h2",{staticClass:"black--text font-weight-bold px-1"},[t._v("\n                Le\n                "),n("b",{staticClass:"primary--text"},[t._v("\n                  1\n                  "),n("sup",{staticStyle:{"margin-left":"-5px"}},[t._v("er")])]),t._v(" "),n("AnimatedText",{attrs:{items:t.text_titles}})],1)]),t._v(" "),n("v-card",{staticClass:"ma-1 elevation-0 transparent",attrs:{"max-width":"420"}},[n("v-card",{staticClass:"banner-tabs mb-1 py-1 transparent elevation-0",attrs:{tile:"","max-width":"320"}},[n("v-tabs",{attrs:{"icons-and-text":"",color:"transparent",grow:"","background-color":"#e7edf0",dense:"","show-arrows":""},model:{value:t.tabs_banner,callback:function(e){t.tabs_banner=e},expression:"tabs_banner"}},[n("v-tab",{staticClass:"pa-0 black--text border-radius font-weight-bold mr-1 overflow-hidden px-1"},[t._v("\n                    Rechercher\n                    "),n("v-icon",{attrs:{color:0==t.tabs_banner?t.tab_color:"",large:""}},[t._v("mdi-magnify")])],1),t._v(" "),n("v-tab",{staticClass:"pa-0 black--text border-radius font-weight-bold mr-1 overflow-hidden"},[t._v("\n                    Estimer\n                    "),n("v-icon",{attrs:{color:1==t.tabs_banner?t.tab_color:"",large:""}},[t._v("mdi-cash")])],1),t._v(" "),n("v-tab",{staticClass:"pa-0 black--text border-radius font-weight-bold overflow-hidden"},[t._v("\n                    Analyser\n                    "),n("v-icon",{attrs:{color:2==t.tabs_banner?t.tab_color:"",large:""}},[t._v("mdi-chart-bar")])],1)],1)],1),t._v(" "),n("v-card",{staticClass:"elevation-0"},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pa-1",attrs:{cols:"12"}},[n("SearchCar",{attrs:{height:44,make:t.params.make,model:t.params.model},on:{onSelect:t.selectModel}})],1),t._v(" "),1==t.tabs_banner?n("v-col",{staticClass:"pa-1",attrs:{sm:"6",cols:"12"}},[n("v-select",{ref:"dropdown_year",staticClass:"border py-1 px-0 dropdown_year",attrs:{solo:"",flat:"",items:t.years,"hide-details":"",label:t.$t("year"),"prepend-inner-icon":"mdi-calendar"},model:{value:t.params.year,callback:function(e){t.$set(t.params,"year",e)},expression:"params.year"}})],1):t._e(),t._v(" "),0==t.tabs_banner?n("v-col",{staticClass:"pa-1",attrs:{cols:"12",sm:"6"}},[n("v-text-field",{staticClass:"border py-1",attrs:{name:"price",solo:"",suffix:t.$t("Km"),flat:"","hide-details":"",type:"number",max:1e6,label:"Kilométrage max?",id:"id"},model:{value:t.params.odometer,callback:function(e){t.$set(t.params,"odometer",e)},expression:"params.odometer"}})],1):t._e(),t._v(" "),0==t.tabs_banner?n("v-col",{staticClass:"pa-1",attrs:{cols:"12",sm:"6"}},[n("v-text-field",{staticClass:"border py-1",attrs:{name:"price",solo:"","hide-details":"",suffix:t.$t("currency"),flat:"",type:"number",max:1e6,label:"Votre budget max?",id:"id"},model:{value:t.params.price,callback:function(e){t.$set(t.params,"price",e)},expression:"params.price"}})],1):t._e(),t._v(" "),1==t.tabs_banner?n("v-col",{staticClass:"pa-1",attrs:{cols:"12",sm:"6"}},[n("v-text-field",{staticClass:"border py-1",attrs:{name:"odometer",solo:"",suffix:t.$t("Km"),flat:"","hide-details":"",type:"number",max:1e6,label:t.$t("odometer"),id:"id"},model:{value:t.params.odometer,callback:function(e){t.$set(t.params,"odometer",e)},expression:"params.odometer"}})],1):t._e()],1)],1),t._v(" "),n("v-card-actions",{staticClass:"mt-2 pa-0"},[n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"white--text elevation-0 title px-12",attrs:{large:"",block:"",color:t.tab_color},on:{click:t.goTo}},[t._v("START")])],1)],1)],1)],1)],1)],1)],1),t._v(" "),n("section",{staticClass:"py-12 pb-6"},[n("v-container",[n("v-card",{staticClass:"bg--auto elevation-0",attrs:{width:"70",height:"10"}}),t._v(" "),n("h3",{staticClass:"tajawal display-1 font-weight-medium my-5"},[t._v("Pourquoi Autoprix ?")]),t._v(" "),n("p",[t._v("\n        De la recherche à l’estimation de prix en passant par l’analyse du marché,\n        "),n("br"),t._v("Autoprix vous accompagne dans votre projet automobile pas à pas,\n        "),n("br"),t._v("en vous faisant gagner du temps et économiser de l’argent.​\n      ")])],1)],1),t._v(" "),n("section",{staticClass:"py-12"},[n("v-container",[n("v-row",[n("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"6"}},[n("img",{attrs:{src:r(504),alt:"Recherche intelligente et simplifiée​​​",width:"500"}})]),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-card",{staticClass:"primary elevation-0",attrs:{width:"70",height:"10"}}),t._v(" "),n("h3",{staticClass:"tajawal display-1 font-weight-medium my-5 my-5"},[t._v("Recherche intelligente et simplifiée​​​")]),t._v(" "),n("p",[n("b",[t._v("Autoprix")]),t._v(" centralise le plus grand nombre d'annonces de voitures d'occasion en Tunisie. Avec le moteur de recherche, trouver la meilleure voiture d’occasion n’a jamais été aussi simple. Obtenez une liste de véhicules correspondant à vos critères :\n          ")]),t._v(" "),n("ul",{staticClass:"list-style-none px-3"},[n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[t._v("mdi-check")]),t._v("Marque et modèle​\n            ")],1),t._v(" "),n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[t._v("mdi-check")]),t._v("Budget maximum\n            ")],1),t._v(" "),n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[t._v("mdi-check")]),t._v("Intervalle d’âge et kilométrage maximum​\n            ")],1),t._v(" "),n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[t._v("mdi-check")]),t._v("Boite de vitesse (Automatique, Manuelle)​\n            ")],1),t._v(" "),n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[t._v("mdi-check")]),t._v("Carburant (essence, diesel)​\n            ")],1),t._v(" "),n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[t._v("mdi-check")]),t._v("Couleur​\n            ")],1),t._v(" "),n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[t._v("mdi-check")]),t._v("Indicateur de bonne affaire (La différence entre la cote et le prix proposé vous indique si l’annonce observée est bel et bien une bonne affaire)…​\n            ")],1)]),t._v(" "),n("v-btn",{staticClass:"text-uppercase mt-5 title stripe-btn primary",attrs:{dark:"",to:t.localePath({name:"search"}),large:""}},[n("v-icon",{staticClass:"mx-2"},[t._v("mdi-magnify")]),t._v("Rechercher\n            "),n("v-spacer"),t._v(" "),n("v-icon",{attrs:{large:""}},[t._v("mdi-menu-right")])],1)],1)],1)],1)],1),t._v(" "),n("section",{staticClass:"py-12 white"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-card",{staticClass:"bg--auto elevation-0",attrs:{width:"70",height:"10"}}),t._v(" "),n("h3",{staticClass:"tajawal display-1 font-weight-medium my-5"},[t._v("Estimez la valeur d’une voiture occasion​​​​")]),t._v(" "),n("p",[t._v("Vous souhaitez évaluer la valeur marchande d'une voiture d'occasion avant d'acheter, ou bien connaître l'estimation de prix de votre auto avant une mise en vente ? Consultez sa cote auto pour une transaction au meilleur prix.")]),t._v("​\n          "),n("p",[t._v("La cote Autoprix est un outil fiable, gratuit et accessible à tous. Grâce à l’analyse et la compréhension des annonces en ligne, nous avons pu développer cet outil à l’aide de modèles statistiques et de l’intelligence artificielle. La cote reflète donc la réalité du marché. Cela est vérifiable grâce aux nombreux graphiques qui vous sont présentés")]),t._v(" "),n("v-btn",{staticClass:"text-uppercase mt-5 title stripe-btn bg--auto",attrs:{to:t.localePath({name:"car-valuation"}),dark:"",text:"",large:""}},[n("v-icon",{staticClass:"mx-2"},[t._v("mdi-car")]),t._v("Estimer\n            "),n("v-spacer"),t._v(" "),n("v-icon",{attrs:{large:""}},[t._v("mdi-menu-right")])],1)],1),t._v(" "),n("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"6"}},[n("img",{attrs:{width:"400",src:r(505),alt:"Estimez la valeur d’une voiture occasion​​​​"}})])],1)],1)],1),t._v(" "),n("section",{staticClass:"py-12 grey lighten-4"},[n("v-container",[n("v-row",[n("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"6"}},[n("img",{attrs:{src:r(506),alt:"Des outils analytiques inédits​​",width:"500"}})]),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-card",{staticClass:"green elevation-0",attrs:{width:"70",height:"10"}}),t._v(" "),n("h3",{staticClass:"tajawal display-1 font-weight-medium my-5"},[t._v("Des outils analytiques inédits​​")]),t._v(" "),n("p",[t._v("\n            Simplifier la recherche de votre voiture par les mathématiques.\n            "),n("br"),t._v("Quel intérêt de passer des heures voire des jours à analyser le marché automobile alors que quelques clics suffisent ? ​\n          ")]),t._v(" "),n("p",[t._v("Les outils inédits et l’interface intuitive Autoprix permettent de :​")]),t._v(" "),n("ul",{staticClass:"list-style-none px-3"},[n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[t._v("mdi-check")]),t._v("Analyser et comprendre facilement le marché. Pour chaque modèle, découvrez les indicateurs et les visualisations sur une période allant des dernières 24 hs jusqu’aux 12 derniers mois.​\n            ")],1),t._v(" "),n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[t._v("mdi-check")]),t._v("Profiter de notre outil DataViz pour comparer les couleurs et carrosseries disponibles de chaque modèle en fonction de l’année de commercialisation.​\n            ")],1),t._v(" "),n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[t._v("mdi-check")]),t._v("Consulter le prix du neuf des dernières versions vendues officiellement en Tunisie.\n            ")],1)]),t._v(" "),n("br"),t._v("Personnalisez l’analyse en fonction de vos critères afin que vous vendiez ou achetiez un véhicule d’occasion au meilleur prix.​\n          "),n("br"),t._v(" "),n("v-btn",{staticClass:"text-uppercase mt-5 title stripe-btn green",attrs:{to:t.localePath({name:"car-data"}),dark:"",text:"",large:""}},[n("v-icon",{staticClass:"mx-2"},[t._v("mdi-chart-bar")]),t._v("Analyser\n            "),n("v-spacer"),t._v(" "),n("v-icon",{attrs:{large:""}},[t._v("mdi-menu-right")])],1)],1)],1)],1)],1),t._v(" "),n("section",{staticClass:"py-12 white"},[n("v-container",[n("v-card",{staticClass:"bg--auto elevation-0 mt-5 my-10",attrs:{width:"70",height:"10"}}),t._v(" "),n("h3",{staticClass:"tajawal display-1 font-weight-medium my-5"},[t._v("Classement​")]),t._v(" "),n("v-card",{staticClass:"elevation-0 transparent mb-8 pb-4"},[n("v-card-actions",{staticClass:"pa-0"},[n("h3",[t._v("Modèles les plus vendus")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"primary",attrs:{dark:"",icon:"",disabled:1==t.index_slide_model},on:{click:function(e){t.index_slide_model--}}},[n("v-icon",[t._v("mdi-menu-left")])],1),t._v(" "),n("v-btn",{staticClass:"primary",attrs:{dark:"",icon:"",disabled:t.tables[0].items.length==t.index_slide_model},on:{click:function(e){t.index_slide_model++}}},[n("v-icon",[t._v("mdi-menu-right")])],1)],1),t._v(" "),n("v-slide-group",{staticClass:"pa-2",attrs:{"show-arrows":"","center-active":!0},model:{value:t.index_slide_model,callback:function(e){t.index_slide_model=e},expression:"index_slide_model"}},[t._l(t.tables[0].items,(function(e,r){return n("v-slide-item",{key:r},[n("div",{staticClass:"mr-2"},[n("v-card",{staticClass:"elevation-0 ma-1",attrs:{"max-width":"270"}},[n("n-link",{attrs:{to:t.localePath({name:"search-make-model",params:{make:e.make,model:e.name}})},nativeOn:{click:function(e){return t.$store.commit("layout/is_keep_alive",!1)}}},[n("div",{staticClass:"text-center"},[e.image?n("img",{staticClass:"pa-2",attrs:{src:e.image,alt:e.name}}):t._e()]),t._v(" "),n("v-list-item",{staticClass:"pa-0 px-1",attrs:{"three-line":""}},[n("v-list-item-content",{staticClass:"pa-2"},[n("v-list-item-title",{staticClass:"subtitle font-weight-medium mb-1"},[t._v(t._s(e.make)+" "+t._s(e.name))]),t._v(" "),e.price?n("v-list-item-subtitle",{staticClass:"caption font-weight-medium black--text"},[t._v("Prix (Neuf : "+t._s(t.f_numberFormat(e.price,t.$t("currency")))+", Moyen : "+t._s(t.f_numberFormat(e.median_price,t.$t("currency")))+")")]):t._e()],1)],1)],1),t._v(" "),n("v-card-actions",{staticClass:"pa-0"},[n("v-btn",{attrs:{text:"",small:"",to:t.localePath({name:"search-make-model",params:{make:e.make,model:e.name}})},nativeOn:{click:function(e){return t.$store.commit("layout/is_keep_alive",!1)}}},[n("v-icon",{staticClass:"mx-1"},[t._v("mdi-magnify")]),t._v("\n                    "+t._s(t.f_numberFormat(e.count,""))+" Voitures\n                  ")],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{to:t.localePath({name:"car-data-make-model",params:{make:e.make,model:e.name}}),small:"",text:""}},[n("v-icon",{staticClass:"mx-1"},[t._v("mdi-chart-bar")]),t._v("Auto Data\n                  ")],1)],1)],1)],1)])})),t._v(" "),n("v-slide-item",[n("div",{staticClass:"mr-2"},[n("v-btn",{staticClass:"bg--auto px-12 stripe-btn text-uppercase white--text title",attrs:{large:"",disabled:t.cp_model>=t.model_detail.pages},on:{click:t.moreModel}},[t._v("\n                Afficher plus\n                "),n("v-icon",[t._v("mdi-plus")])],1)],1)])],2)],1),t._v(" "),n("v-card",{staticClass:"elevation-0 transparent mx-auto pb-4"},[n("v-card-actions",{staticClass:"pa-0"},[n("h3",[t._v("Marques les plus vendues")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"primary",attrs:{dark:"",icon:"",disabled:1==t.index_slide_make},on:{click:function(e){t.index_slide_make--}}},[n("v-icon",[t._v("mdi-menu-left")])],1),t._v(" "),n("v-btn",{staticClass:"primary",attrs:{dark:"",icon:"",disabled:t.tables[0].items.length==t.index_slide_make},on:{click:function(e){t.index_slide_make++}}},[n("v-icon",[t._v("mdi-menu-right")])],1)],1),t._v(" "),n("v-slide-group",{staticClass:"pa-2",attrs:{"show-arrows":"","center-active":!0},model:{value:t.index_slide_make,callback:function(e){t.index_slide_make=e},expression:"index_slide_make"}},t._l(t.tables[1].items,(function(e,r){return n("v-slide-item",{key:r},[n("div",{staticClass:"mr-2"},[n("v-card",{staticClass:"elevation-0 ma-1",attrs:{"max-width":"270"}},[n("div",{staticClass:"text-center"},[n("img",{staticStyle:{height:"auto"},attrs:{src:"https://www.carlogos.org/car-logos/"+e.name.toLowerCase().replace(" ","-")+"-logo.png",alt:e.name,width:"130"}})]),t._v(" "),n("v-list-item",{staticClass:"pa-0 px-1",attrs:{"three-line":""}},[n("v-list-item-content",{staticClass:"px-2"},[n("v-list-item-title",{staticClass:"subtitle font-weight-medium mb-1"},[t._v(t._s(e.make)+" "+t._s(e.name))]),t._v(" "),n("v-list-item-subtitle",{staticClass:"caption font-weight-medium black--text"},[t._v("Prix Moyen :"+t._s(t.f_numberFormat(e.avg_price,t.$t("currency"))))])],1)],1),t._v(" "),n("v-card-actions",{staticClass:"pa-0"},[n("v-btn",{attrs:{text:"",small:"",to:t.localePath({name:"search-make",params:{make:e.name}})},nativeOn:{click:function(e){return t.$store.commit("layout/is_keep_alive",!1)}}},[n("v-icon",{staticClass:"mx-1"},[t._v("mdi-magnify")]),t._v("\n                    "+t._s(t.f_numberFormat(e.count,""))+" Voitures\n                  ")],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{to:t.localePath({name:"car-data-make",params:{make:e.name}}),small:"",text:""}},[n("v-icon",{staticClass:"mx-1"},[t._v("mdi-chart-bar")]),t._v("Auto Data\n                  ")],1)],1)],1)],1)])})),1)],1)],1)],1),t._v(" "),n("section",{staticClass:"py-12"},[n("v-container",[n("v-card",{staticClass:"primary elevation-0",attrs:{width:"70",height:"10"}}),t._v(" "),n("h3",{staticClass:"tajawal display-1 font-weight-medium my-5"},[t._v("Nos avantages​")]),t._v(" "),n("v-row",{staticClass:"text-center"},t._l(t.powers,(function(e,r){return n("v-col",{key:r,attrs:{cols:"12",md:"4"},on:{click:function(t){e.is_show=!e.is_show}}},[n("div",{staticClass:"mx-auto transparent mt-5 cp"},[n("v-avatar",{staticClass:"pa-6",attrs:{size:"100",color:"white"}},[n("img",{attrs:{src:e.image,width:"100"}})]),t._v(" "),n("h3",{staticClass:"font-weight-medium pa-2",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),n("v-icon",{staticClass:"vert-move",attrs:{large:""}},[t._v(t._s(e.is_show?"mdi-chevron-up":"mdi-chevron-down"))]),t._v(" "),n("v-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.is_show,expression:"power.is_show"}],staticClass:"text-left"},[n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"tajawal pa-1 font-weight-bold",domProps:{innerHTML:t._s(e.text)}})],1)])],1)])})),1)],1)],1),t._v(" "),n("section",{staticClass:"py-12 pb-0 white"},[n("v-container",[n("v-card",{staticClass:"primary elevation-0",attrs:{width:"70",height:"10"}}),t._v(" "),n("h3",{staticClass:"tajawal display-1 font-weight-medium my-5"},[t._v("Nos sources​​")]),t._v(" "),n("v-card",{staticClass:"elevation-0 transparent",attrs:{"max-width":"500"}},[n("v-list-item",{staticClass:"pa-0",attrs:{"three-line":""}},[n("v-list-item-content",{staticClass:"pa-0"},[n("a",{attrs:{href:t.providers[t.active_provider].url,target:"_blank",rel:"noopener nofollow noreferrer"}},[n("v-list-item-title",{staticClass:"subtitle black--text font-weight-medium"},[t._v("\n                "+t._s(t.providers[t.active_provider].name)+"\n                "),n("v-icon",[t._v("mdi-link")])],1)],1),t._v(" "),n("p",{staticClass:"p--text",domProps:{innerHTML:t._s(t.providers[t.active_provider].text)}})])],1)],1),t._v(" "),n("v-slide-group",{attrs:{"show-arrows":"","center-active":!0},model:{value:t.active_provider,callback:function(e){t.active_provider=e},expression:"active_provider"}},t._l(t.providers,(function(e,r){return n("v-slide-item",{key:r,scopedSlots:t._u([{key:"default",fn:function(o){o.active;return[n("div",{staticClass:"line-height cp mr-1 my-1 border border-radius pa-1 bg--white",on:{click:function(e){t.active_provider=r}}},[n("img",{attrs:{src:e.image,alt:"",height:"70"}})])]}}],null,!0)})})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=B.exports;C()(B,{VAvatar:w.a,VBtn:k.a,VCard:T.a,VCardActions:A.a,VCardText:A.b,VCol:j.a,VContainer:S.a,VDivider:O.a,VExpandTransition:P.a,VIcon:V.a,VImg:$.a,VListItem:I.a,VListItemContent:z.a,VListItemSubtitle:z.b,VListItemTitle:z.c,VRow:L.a,VSelect:M.a,VSlideGroup:D.b,VSlideItem:E.a,VSpacer:F.a,VTab:N.a,VTabs:R.a,VTextField:G.a})}}]);