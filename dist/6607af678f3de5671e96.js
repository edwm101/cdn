(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{456:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},457:function(e,t,r){var n=r(28);n(n.S,"Number",{EPSILON:Math.pow(2,-52)})},458:function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},478:function(e,t,r){},486:function(e,t,r){"use strict";var n=r(1),o=r(77),l=r(6),c=r(13),m=r(2).a.extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object(n.a)({},this.activeClass,this.isActive)}),element):(Object(c.c)("v-item should only contain a single element",this),element)):(Object(c.c)("v-item is missing a default scopedSlot",this),null);var element}});Object(l.a)(m,Object(o.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),t.a=Object(l.a)(m,Object(o.a)("slideGroup")).extend({name:"v-slide-item"})},515:function(e,t,r){e.exports=r.p+"img/20ce963.png"},516:function(e,t,r){e.exports=r.p+"img/cc877f8.png"},517:function(e,t,r){e.exports=r.p+"img/2063f74.png"},518:function(e,t,r){e.exports=r.p+"img/9fdf183.png"},519:function(e,t,r){"use strict";var n=r(478);r.n(n).a},520:function(e,t,r){e.exports=r.p+"img/eb5f34b.svg"},521:function(e,t,r){e.exports=r.p+"img/1682e43.svg"},522:function(e,t,r){e.exports=r.p+"img/dbb774d.svg"},523:function(e,t,r){e.exports=r.p+"img/d932747.jpg"},524:function(e,t,r){e.exports=r.p+"img/fa323dd.png"},525:function(e,t,r){e.exports=r.p+"img/cc59101.png"},526:function(e,t,r){e.exports=r.p+"img/acb38f1.png"},527:function(e,t,r){e.exports=r.p+"img/ca4c622.png"},528:function(e,t,r){e.exports=r.p+"img/27b7f7d.png"},529:function(e,t,r){e.exports=r.p+"img/e194a42.png"},530:function(e,t,r){e.exports=r.p+"img/4c3a4be.jpg"},536:function(e,t,r){"use strict";r.r(t);r(14),r(10),r(8),r(5),r(11);var n=r(63),o=r(1),l=r(219),c=r(264),m=r(463),main=r(282),d={props:{items:{type:Array}},data:function(){return{typeValue:"",typeStatus:!1,typingSpeed:50,erasingSpeed:30,newTextDelay:4e3,typeArrayIndex:0,charIndex:0}},methods:{typeText:function(){this.charIndex<this.items[this.typeArrayIndex].length?(this.typeStatus||(this.typeStatus=!0),this.typeValue+=this.items[this.typeArrayIndex].charAt(this.charIndex),this.charIndex+=1,Object(main.setTimeout)(this.typeText,this.typingSpeed)):(this.typeStatus=!1,Object(main.setTimeout)(this.eraseText,this.newTextDelay))},eraseText:function(){this.charIndex>0?(this.typeStatus||(this.typeStatus=!0),this.typeValue=this.items[this.typeArrayIndex].substring(0,this.charIndex-1),this.charIndex-=1,Object(main.setTimeout)(this.eraseText,this.erasingSpeed)):(this.typeStatus=!1,this.typeArrayIndex+=1,this.typeArrayIndex>=this.items.length&&(this.typeArrayIndex=0),Object(main.setTimeout)(this.typeText,this.typingSpeed+1e3))}},created:function(){Object(main.setTimeout)(this.typeText,200)}},v=(r(519),r(20)),h=Object(v.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("span",[t("span",{staticClass:"typed-text"},[this._v(this._s(this.typeValue))]),this._v(" "),t("span",{staticClass:"cursor",class:{typing:this.typeStatus}},[this._v(" ")])])}),[],!1,null,"31b3b1e4",null).exports;function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y={components:{TimeAgo:l.a,AnimatedText:h,Logo:c.a,SearchCar:m.a},data:function(){return{index_slide_model:1,index_slide_make:1,is_show:{histo_change:!1},tabs_banner:0,tab_color:"primary",params:{},years:[],date:{text:"any_date",value:"365"},dates:[{text:"any_date",value:"365"},{text:"today",value:"1"},{text:"week",value:"7"},{text:"3 months",value:"90"},{text:"6 months",value:"180"},{text:"month",value:"30"}],powers:[{is_show:!1,title:"Historique des changements <br> de prix​",text:"Découvrez la liste des changements de prix de chaque annonce, une information nécessaire à la bonne négociation de votre achat. Depuis combien de temps l’annonce est en ligne ? Le vendeur a-t-il baissé le prix ? C’est quoi la fréquence de mise à jour de l’annonce ?",image:r(520)},{is_show:!1,title:"Recevez les annonces auto correspondant à vos critères​​",text:"Enregistrez vos recherches et activez une alerte afin de recevoir directement les voitures d’occasion correspondant à vos critères. Les annonces auto viennent directement à vous. Un système d'alerte rapide et intuitif que vous pouvez désactiver à tout moment.​",image:r(521)},{is_show:!1,title:"Enregistrez vos annonces <br> favorites​",text:"Enregistrez les annonces qui vous intéressent pour une consultation ultérieure et suivez les changements de prix, de kilométrage et de la description de l’annonce.​",image:r(522)}],active_provider:0,providers:[{image:r(523),name:"Tayara",url:"https://www.tayara.tn/",slogan:"Site numéro 1 des petites annonces gratuites en Tunisie",text:"tayara.tn est un site web d'annonces gratuites en Tunisie, créé par Schibsted Classified Media, filiale de Schibsted ASA."},{image:r(524),name:"Cava.tn",text:""},{image:r(525),name:"Automobile",slogan:"Prix du neuf",text:"Prix des voitures neuves en Tunisie, Annonces auto, Voitures d&#039;occasion, Guide pratique, Actualités et Nouveautés, Photos et Vidéos, Fiches techniques,  Comparateur, Devis gratuit, Concessionnaires en Tunisie"},{image:r(526),name:"Karhabti"},{image:r(527),name:"Tunisie annonce"},{image:r(528),name:"Auto plus"},{image:r(529),name:"Binbincar"}],text_titles:[" comparateur d’annonces automobile en Tunisie​"," service d’évaluation de voitures d'occasion en Tunisie"," outil d’analyse du marché automobile en Tunisie​​"],tab:0,tables:[{name:"Modèles",items:[]},{name:"Marques",items:[]}],top_make:[],cp_model:0,model_detail:{},top_model:[]}},head:function(){return{title:"Comparateur de prix voiture occasion Tunisie​",meta:[{hid:"description",name:"description",content:"Autoprix centralise le plus grand nombre d'annonces de voitures d'occasion en Tunisie. Toutes les annonces automobile sur le même site web. "},{hid:"og:title",property:"og:title",content:"Comparateur de prix voiture occasion Tunisie​"},{hid:"og:description",property:"og:description",content:"Autoprix centralise le plus grand nombre d'annonces de voitures d'occasion en Tunisie. Toutes les annonces automobile sur le même site web. ​"},{hid:"og:image",property:"og:image",content:r(530)}]}},watch:{tabs_banner:function(e){switch(e){case 1:this.tab_color="#fcb414";break;case 2:this.tab_color="success";break;default:this.tab_color="primary"}},date:function(){this.params.date=this.date.value}},methods:{goTo:function(){var e="",param={};switch(this.tabs_banner){case 0:e="search",param=x({},this.params),this.$store.commit("layout/is_keep_alive",!1),this.params.make&&this.params.model?e="search-make-model":this.params.make&&(e="search-make"),this.params.odometer&&(this.params.odometer<=400&&(this.params.odometer=1e3*this.params.odometer),this.params.min_odometer=0,this.params.max_odometer=this.params.odometer),this.params.price&&(this.params.price<=400&&(this.params.price=1e3*this.params.price),this.params.min_price=0,this.params.max_price=this.params.price);break;case 1:e="car-valuation";break;case 2:param=x({},this.params),this.params.make&&this.params.model?(delete this.params.make,delete this.params.model,e="car-data-make-model"):this.params.make?(delete this.params.model,e="car-data-make"):e="car-data",this.params.year&&(this.params.min_year=this.params.year,this.params.max_year=this.params.year)}this.$router.push(this.localePath({name:e,query:this.params,params:param}))},selectModel:function(e){this.params.make=e.make,this.params.model=e.model},moreModel:function(){var e=this;this.cp_model++;this.$api.get("public/analytics/top/model",{params:{cp:this.cp_model,max:6}}).then((function(t){e.model_detail=t.data.detail,e.tables[0].items=[].concat(Object(n.a)(e.tables[0].items),Object(n.a)(t.data.result))}))}},mounted:function(){for(var e=this,i=2020;i>=1930;i--)this.years.push(i);this.moreModel(),this.$api.get("public/analytics/top/make",{params:{max:12}}).then((function(t){e.tables[1].items=t.data.result}))}},f=r(23),w=r.n(f),C=r(203),k=r(198),T=r(199),j=r(18),S=r(415),A=r(435),O=r(399),z=r(71),V=r(128),P=r(278),I=r(130),$=r(76),L=r(416),M=r(539),D=r(135),N=r(486),E=r(417),R=r(419),F=r(432),G=r(402),B=Object(v.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card",{staticClass:"banner is_ltr elevation-0",staticStyle:{"background-size":"auto auto","background-position":"right bottom","background-color":"#e7edf0"},style:{"background-image":"url("+r(515)+")"},attrs:{tile:""}},[n("v-container",[n("div",{staticClass:"triangle"}),e._v(" "),n("v-img",{staticClass:"white--text align-center back overflow-init card-index"},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{class:{is_rtl:e.$store.state.layout.is_rtl},attrs:{md:"5",sm:"10","offset-md":"1"}},[n("v-card",{staticClass:"transparent elevation-0 pa-1",attrs:{height:"170"}},[n("h1",{staticClass:"black--text display-1 font-weight-medium px-1 mb-2"},[n("Logo",{attrs:{size:"120"}})],1),e._v(" "),n("h2",{staticClass:"black--text font-weight-medium px-1"},[e._v("\n                Le\n                "),n("b",{staticClass:"primary--text"},[e._v("\n                  1\n                  "),n("sup",{staticStyle:{"margin-left":"-5px"}},[e._v("er")])]),e._v(" "),n("AnimatedText",{attrs:{items:e.text_titles}})],1)]),e._v(" "),n("v-card",{staticClass:"ma-1 mb-0 mt-3 elevation-0 transparent",attrs:{"max-width":"400","min-height":"300"}},[n("v-card",{staticClass:"banner-tabs py-1 transparent elevation-0",attrs:{tile:"","max-width":"320"}},[n("v-tabs",{attrs:{"icons-and-text":"",color:"transparent",grow:"","background-color":"transparent",dense:"","show-arrows":""},model:{value:e.tabs_banner,callback:function(t){e.tabs_banner=t},expression:"tabs_banner"}},[n("v-tab",{staticClass:"pa-0 black--text border-radius font-weight-bold mr-2 overflow-hidden px-1",class:0==e.tabs_banner?"white":" grey lighten-4"},[e._v("\n                    Rechercher\n                    "),n("v-icon",{attrs:{color:0==e.tabs_banner?e.tab_color:"",large:""}},[e._v("mdi-magnify")])],1),e._v(" "),n("v-tab",{staticClass:"pa-0 black--text border-radius font-weight-bold mr-2 overflow-hidden",class:1==e.tabs_banner?"white":" grey lighten-4"},[e._v("\n                    Estimer\n                    "),n("v-icon",{attrs:{color:1==e.tabs_banner?e.tab_color:"",large:""}},[e._v("mdi-cash")])],1),e._v(" "),n("v-tab",{staticClass:"pa-0 black--text border-radius font-weight-bold overflow-hidden",class:2==e.tabs_banner?"white":" grey lighten-4"},[e._v("\n                    Analyser\n                    "),n("v-icon",{attrs:{color:2==e.tabs_banner?e.tab_color:"",large:""}},[e._v("mdi-chart-bar")])],1)],1)],1),e._v(" "),n("v-card",{staticClass:"elevation-0"},[n("SearchCar",{staticClass:"mb-1",attrs:{height:44,make:e.params.make,model:e.params.model},on:{onSelect:e.selectModel}}),e._v(" "),n("v-row",{attrs:{"no-gutters":""}},[1==e.tabs_banner?n("v-col",{staticClass:"pa-2",attrs:{sm:"6",cols:"12"}},[n("v-select",{ref:"dropdown_year",staticClass:"dropdown_year",attrs:{outlined:"",dense:"",items:e.years,"hide-details":"",label:e.$t("year"),"append-icon":"mdi-calendar"},model:{value:e.params.year,callback:function(t){e.$set(e.params,"year",t)},expression:"params.year"}})],1):e._e(),e._v(" "),0==e.tabs_banner?n("v-col",{staticClass:"pa-2",attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{name:"price",outlined:"",suffix:e.$t("Km"),dense:"","hide-details":"",type:"number",max:1e6,step:5e3,label:"Kilométrage max?"},model:{value:e.params.odometer,callback:function(t){e.$set(e.params,"odometer",t)},expression:"params.odometer"}})],1):e._e(),e._v(" "),0==e.tabs_banner?n("v-col",{staticClass:"pa-2",attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{name:"price","hide-details":"",suffix:e.$t("currency"),outlined:"",type:"number",dense:"",max:1e6,step:1e3,label:"Votre budget max?"},model:{value:e.params.price,callback:function(t){e.$set(e.params,"price",t)},expression:"params.price"}})],1):e._e(),e._v(" "),1==e.tabs_banner?n("v-col",{staticClass:"pa-2",attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{name:"odometer",outlined:"",suffix:e.$t("Km"),dense:"","hide-details":"",type:"number",max:1e6,step:5e3,label:e.$t("odometer")},model:{value:e.params.odometer,callback:function(t){e.$set(e.params,"odometer",t)},expression:"params.odometer"}})],1):e._e()],1),e._v(" "),n("v-card-actions",{staticClass:"pa-1"},[n("v-spacer"),e._v(" "),n("v-btn",{staticClass:"white--text elevation-0 title font-weight-bold",attrs:{block:"",color:e.tab_color},on:{click:e.goTo}},[e._v("START")])],1)],1)],1)],1)],1)],1)],1)],1),e._v(" "),n("section",{staticClass:"py-12 pb-6 white"},[n("v-container",[n("v-card",{staticClass:"primary elevation-0",attrs:{width:"70",height:"10"}}),e._v(" "),n("h3",{staticClass:"tajawal display-1 font-weight-medium my-5"},[e._v("Pourquoi Autoprix ?")]),e._v(" "),n("p",[e._v("\n        De la recherche à l’estimation de prix en passant par l’analyse du marché,\n        "),n("br"),e._v("Autoprix vous accompagne dans votre projet automobile pas à pas,\n        "),n("br"),e._v("en vous faisant gagner du temps et économiser de l’argent. ​\n      ")])],1)],1),e._v(" "),n("section",{staticClass:"py-12"},[n("v-container",[n("v-row",[n("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"6"}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:r(516),expression:"require('@/assets/image/all/search.png')"}],attrs:{alt:"Recherche intelligente et simplifiée​​​",width:"500"}})]),e._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-card",{staticClass:"primary elevation-0",attrs:{width:"70",height:"10"}}),e._v(" "),n("h3",{staticClass:"tajawal display-1 font-weight-medium my-5 my-5"},[e._v("Recherche intelligente et simplifiée​​​")]),e._v(" "),n("p",[n("b",[e._v("Autoprix")]),e._v(" centralise le plus grand nombre d'annonces de voitures d'occasion en Tunisie. Avec le moteur de recherche, trouver la meilleure voiture d’occasion n’a jamais été aussi simple. Obtenez une liste de véhicules correspondant à vos critères :\n          ")]),e._v(" "),n("ul",{staticClass:"list-style-none px-3"},[n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[e._v("mdi-check")]),e._v("Marque et modèle​\n            ")],1),e._v(" "),n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[e._v("mdi-check")]),e._v("Budget maximum\n            ")],1),e._v(" "),n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[e._v("mdi-check")]),e._v("Intervalle d’âge et kilométrage maximum​\n            ")],1),e._v(" "),n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[e._v("mdi-check")]),e._v("Boite de vitesse (Automatique, Manuelle)​\n            ")],1),e._v(" "),n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[e._v("mdi-check")]),e._v("Carburant (essence, diesel)​\n            ")],1),e._v(" "),n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[e._v("mdi-check")]),e._v("Couleur​\n            ")],1),e._v(" "),n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[e._v("mdi-check")]),e._v("Indicateur de bonne affaire (La différence entre la cote et le prix proposé vous indique si l’annonce observée est bel et bien une bonne affaire)…​\n            ")],1)]),e._v(" "),n("v-btn",{staticClass:"text-uppercase mt-5 title stripe-btn primary",attrs:{dark:"",to:e.localePath({name:"search"}),large:""}},[n("v-icon",{staticClass:"mx-2"},[e._v("mdi-magnify")]),e._v("Rechercher\n            "),n("v-spacer"),e._v(" "),n("v-icon",{attrs:{large:""}},[e._v("mdi-menu-right")])],1)],1)],1)],1)],1),e._v(" "),n("section",{staticClass:"py-12 white"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-card",{staticClass:"bg--auto elevation-0",attrs:{width:"70",height:"10"}}),e._v(" "),n("h3",{staticClass:"tajawal display-1 font-weight-medium my-5"},[e._v("Estimez la valeur d’une voiture occasion​​​​")]),e._v(" "),n("p",[e._v("Vous souhaitez évaluer la valeur marchande d'une voiture d'occasion avant d'acheter, ou bien connaître l'estimation de prix de votre auto avant une mise en vente ? Consultez sa cote auto pour une transaction au meilleur prix.")]),e._v("​\n          "),n("p",[e._v("La cote Autoprix est un outil fiable, gratuit et accessible à tous. Grâce à l’analyse et la compréhension des annonces en ligne, nous avons pu développer cet outil à l’aide de modèles statistiques et de l’intelligence artificielle. La cote reflète donc la réalité du marché. Cela est vérifiable grâce aux nombreux graphiques qui vous sont présentés")]),e._v(" "),n("v-btn",{staticClass:"text-uppercase mt-5 title stripe-btn bg--auto",attrs:{to:e.localePath({name:"car-valuation"}),dark:"",text:"",large:""}},[n("v-icon",{staticClass:"mx-2"},[e._v("mdi-car")]),e._v("Estimer\n            "),n("v-spacer"),e._v(" "),n("v-icon",{attrs:{large:""}},[e._v("mdi-menu-right")])],1)],1),e._v(" "),n("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"6"}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:r(517),expression:"require('@/assets/image/all/estimation.png')"}],attrs:{width:"400",alt:"Estimez la valeur d’une voiture occasion​​​​"}})])],1)],1)],1),e._v(" "),n("section",{staticClass:"py-12 grey lighten-4"},[n("v-container",[n("v-row",[n("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"6"}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:r(518),expression:"require('@/assets/image/all/statistic.png')"}],attrs:{alt:"Des outils analytiques inédits​​",width:"500"}})]),e._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-card",{staticClass:"green elevation-0",attrs:{width:"70",height:"10"}}),e._v(" "),n("h3",{staticClass:"tajawal display-1 font-weight-medium my-5"},[e._v("Des outils analytiques inédits​​")]),e._v(" "),n("p",[e._v("\n            Simplifier la recherche de votre voiture par les mathématiques.\n            "),n("br"),e._v("Quel intérêt de passer des heures voire des jours à analyser le marché automobile alors que quelques clics suffisent ? ​\n          ")]),e._v(" "),n("p",[e._v("Les outils inédits et l’interface intuitive Autoprix permettent de :​")]),e._v(" "),n("ul",{staticClass:"list-style-none px-3"},[n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[e._v("mdi-check")]),e._v("Analyser et comprendre facilement le marché. Pour chaque modèle, découvrez les indicateurs et les visualisations sur une période allant des dernières 24 hs jusqu’aux 12 derniers mois.​\n            ")],1),e._v(" "),n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[e._v("mdi-check")]),e._v("Profiter de notre outil DataViz pour comparer les couleurs et carrosseries disponibles de chaque modèle en fonction de l’année de commercialisation.​\n            ")],1),e._v(" "),n("li",[n("v-icon",{staticClass:"primary--text mr-1"},[e._v("mdi-check")]),e._v("Consulter le prix du neuf des dernières versions vendues officiellement en Tunisie.\n            ")],1)]),e._v(" "),n("br"),e._v("Personnalisez l’analyse en fonction de vos critères afin que vous vendiez ou achetiez un véhicule d’occasion au meilleur prix.​\n          "),n("br"),e._v(" "),n("v-btn",{staticClass:"text-uppercase mt-5 title stripe-btn green",attrs:{to:e.localePath({name:"car-data"}),dark:"",text:"",large:""}},[n("v-icon",{staticClass:"mx-2"},[e._v("mdi-chart-bar")]),e._v("Analyser\n            "),n("v-spacer"),e._v(" "),n("v-icon",{attrs:{large:""}},[e._v("mdi-menu-right")])],1)],1)],1)],1)],1),e._v(" "),n("section",{staticClass:"py-12 white"},[n("v-container",[n("v-card",{staticClass:"bg--auto elevation-0 mt-5 my-10",attrs:{width:"70",height:"10"}}),e._v(" "),n("h3",{staticClass:"tajawal display-1 font-weight-medium my-5"},[e._v("Classement​")]),e._v(" "),n("v-card",{staticClass:"elevation-0 transparent mb-8 pb-4"},[n("v-card-actions",{staticClass:"pa-0"},[n("h3",[e._v("Modèles les plus vendus")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{staticClass:"primary",attrs:{dark:"",icon:"",disabled:1==e.index_slide_model},on:{click:function(t){e.index_slide_model--}}},[n("v-icon",[e._v("mdi-menu-left")])],1),e._v(" "),n("v-btn",{staticClass:"primary",attrs:{dark:"",icon:"",disabled:e.tables[0].items.length==e.index_slide_model},on:{click:function(t){e.index_slide_model++}}},[n("v-icon",[e._v("mdi-menu-right")])],1)],1),e._v(" "),n("v-slide-group",{staticClass:"pa-2",attrs:{"show-arrows":"","center-active":!0},model:{value:e.index_slide_model,callback:function(t){e.index_slide_model=t},expression:"index_slide_model"}},[e._l(e.tables[0].items,(function(t,r){return n("v-slide-item",{key:r},[n("div",{staticClass:"mr-2"},[n("v-card",{staticClass:"ma-1",attrs:{"max-width":"200"}},[n("n-link",{attrs:{to:e.localePath({name:"search-make-model",params:{make:t.make,model:t.name}})},nativeOn:{click:function(t){return e.$store.commit("layout/is_keep_alive",!1)}}},[n("div",{staticClass:"text-center"},[t.image?n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.image,expression:"item.image"}],staticClass:"pa-2",attrs:{alt:t.name}}):e._e()]),e._v(" "),n("v-list-item",{staticClass:"pa-0 px-1",attrs:{"three-line":""}},[n("v-list-item-content",{staticClass:"pa-2"},[n("v-list-item-title",{staticClass:"subtitle font-weight-medium mb-1"},[e._v(e._s(t.make)+" "+e._s(t.name))]),e._v(" "),t.price?n("v-list-item-subtitle",{staticClass:"caption font-weight-medium black--text"},[e._v("\n                        Prix Neuf : "+e._s(e.f_numberFormat(t.price,e.$t("currency")))+"\n                        "),n("br"),e._v("\n                        Prix Moyen : "+e._s(e.f_numberFormat(t.median_price,e.$t("currency")))+"\n                      ")]):e._e()],1)],1)],1)],1)],1)])})),e._v(" "),n("v-slide-item",[n("div",{staticClass:"mr-2"},[n("v-btn",{staticClass:"bg--auto px-12 stripe-btn text-uppercase white--text title",attrs:{large:"",disabled:e.cp_model>=e.model_detail.pages},on:{click:e.moreModel}},[e._v("\n                Afficher plus\n                "),n("v-icon",[e._v("mdi-plus")])],1)],1)])],2)],1),e._v(" "),n("v-card",{staticClass:"elevation-0 transparent mx-auto pb-4"},[n("v-card-actions",{staticClass:"pa-0"},[n("h3",[e._v("Marques les plus vendues")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{staticClass:"primary",attrs:{dark:"",icon:"",disabled:1==e.index_slide_make},on:{click:function(t){e.index_slide_make--}}},[n("v-icon",[e._v("mdi-menu-left")])],1),e._v(" "),n("v-btn",{staticClass:"primary",attrs:{dark:"",icon:"",disabled:e.tables[0].items.length==e.index_slide_make},on:{click:function(t){e.index_slide_make++}}},[n("v-icon",[e._v("mdi-menu-right")])],1)],1),e._v(" "),n("v-slide-group",{staticClass:"pa-2",attrs:{"show-arrows":"","center-active":!0},model:{value:e.index_slide_make,callback:function(t){e.index_slide_make=t},expression:"index_slide_make"}},e._l(e.tables[1].items,(function(t,r){return n("v-slide-item",{key:r},[n("div",{staticClass:"mr-2"},[n("v-card",{staticClass:"ma-1",attrs:{"max-width":"200"}},[n("div",{staticClass:"text-center"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://www.carlogos.org/car-logos/"+t.name.toLowerCase().replace(" ","-")+"-logo.png",expression:"'https://www.carlogos.org/car-logos/'+item.name.toLowerCase().replace(' ','-')+'-logo.png'"}],staticStyle:{height:"auto"},attrs:{alt:t.name,width:"130"}})]),e._v(" "),n("v-list-item",{staticClass:"pa-0 px-1",attrs:{"three-line":""}},[n("v-list-item-content",{staticClass:"px-2"},[n("v-list-item-title",{staticClass:"subtitle font-weight-medium mb-1"},[e._v(e._s(t.make)+" "+e._s(t.name))]),e._v(" "),n("v-list-item-subtitle",{staticClass:"caption font-weight-medium black--text"},[e._v("Prix Moyen :"+e._s(e.f_numberFormat(t.avg_price,e.$t("currency"))))])],1)],1)],1)],1)])})),1)],1)],1)],1),e._v(" "),n("section",{staticClass:"py-12"},[n("v-container",[n("v-card",{staticClass:"primary elevation-0",attrs:{width:"70",height:"10"}}),e._v(" "),n("h3",{staticClass:"tajawal display-1 font-weight-medium my-5"},[e._v("Nos avantages​")]),e._v(" "),n("v-row",{staticClass:"text-center"},e._l(e.powers,(function(t,r){return n("v-col",{key:r,attrs:{cols:"12",md:"4"},on:{click:function(e){t.is_show=!t.is_show}}},[n("div",{staticClass:"mx-auto transparent mt-5 cp"},[n("v-avatar",{staticClass:"pa-6",attrs:{size:"100",color:"white"}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.image,expression:"power.image"}],attrs:{width:"100"}})]),e._v(" "),n("h3",{staticClass:"font-weight-medium pa-2",domProps:{innerHTML:e._s(t.title)}}),e._v(" "),n("v-icon",{staticClass:"vert-move",attrs:{large:""}},[e._v(e._s(t.is_show?"mdi-chevron-up":"mdi-chevron-down"))]),e._v(" "),n("v-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.is_show,expression:"power.is_show"}],staticClass:"text-left"},[n("v-divider"),e._v(" "),n("v-card-text",{staticClass:"tajawal pa-1 font-weight-bold",domProps:{innerHTML:e._s(t.text)}})],1)])],1)])})),1)],1)],1),e._v(" "),n("section",{staticClass:"py-12 pb-0 white"},[n("v-container",[n("v-card",{staticClass:"primary elevation-0",attrs:{width:"70",height:"10"}}),e._v(" "),n("h3",{staticClass:"tajawal display-1 font-weight-medium my-5"},[e._v("Nos sources​​")]),e._v(" "),n("v-card",{staticClass:"elevation-0 transparent",attrs:{"max-width":"500"}},[n("v-list-item",{staticClass:"pa-0",attrs:{"three-line":""}},[n("v-list-item-content",{staticClass:"pa-0"},[n("a",{attrs:{href:e.providers[e.active_provider].url,target:"_blank",rel:"noopener nofollow noreferrer"}},[n("v-list-item-title",{staticClass:"subtitle black--text font-weight-medium"},[e._v("\n                "+e._s(e.providers[e.active_provider].name)+"\n                "),n("v-icon",[e._v("mdi-link")])],1)],1),e._v(" "),n("p",{staticClass:"p--text",domProps:{innerHTML:e._s(e.providers[e.active_provider].text)}})])],1)],1),e._v(" "),n("v-slide-group",{attrs:{"show-arrows":"","center-active":!0},model:{value:e.active_provider,callback:function(t){e.active_provider=t},expression:"active_provider"}},e._l(e.providers,(function(t,r){return n("v-slide-item",{key:r},[n("div",{staticClass:"line-height cp mr-1 my-1 border border-radius pa-1 bg--white",on:{click:function(t){e.active_provider=r}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.image,expression:"provider.image"}],attrs:{alt:"",height:"70","min-width":"70"}})])])})),1)],1)],1)],1)}),[],!1,null,null,null);t.default=B.exports;w()(B,{VAvatar:C.a,VBtn:k.a,VCard:T.a,VCardActions:j.a,VCardText:j.b,VCol:S.a,VContainer:A.a,VDivider:O.a,VExpandTransition:z.a,VIcon:V.a,VImg:P.a,VListItem:I.a,VListItemContent:$.a,VListItemSubtitle:$.b,VListItemTitle:$.c,VRow:L.a,VSelect:M.a,VSlideGroup:D.b,VSlideItem:N.a,VSpacer:E.a,VTab:R.a,VTabs:F.a,VTextField:G.a})}}]);