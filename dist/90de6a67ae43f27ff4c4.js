(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{444:function(t,e,r){t.exports=r.p+"img/976b169.svg"},445:function(t,e,r){t.exports=r.p+"img/ed63f0a.svg"},470:function(t,e,r){"use strict";r(13),r(10),r(8),r(5),r(11),r(27);var n=r(1);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:{items:{type:Object,default:{}},suffix_y:{type:String,default:""}},data:function(){var t=this;return{type:"year",suffix_x:"",product:{image:null},format:{type:"scatter",mouseover:function(e){t.$api.get("public/filter/product-simple",{params:{id:e.dataPoint.id}}).then((function(r){t.product=r.data.result,e.dataSeries.toolTipContent="<div class='black-text ' ><img style='height:140px' src='"+t.product.image+"' ><br><b class='font-weight-bold title'>"+t.product.make+" "+t.product.model+" "+t.product.year+"</b><br><b class='font-weight-black subtitle'>"+t.f_numberFormat(t.product.price,t.$t("currency"))+"<br> "+t.f_numberFormat(t.product.odometer,t.$t("Km"))+"</b></div>",e.chart.render()}))},click:function(e){t.$router.push(t.localePath({name:"car-id",params:{id:t.product.url_id}}))}},chart:null}},computed:{chartOptions:function(){return{animationEnabled:!0,axisX:{valueFormatString:"####.##"},axisY:{suffix:" "+this.suffix_y},data:[c({},this.format,{name:"FAR_ABOVE_MARKET",visible:!0,color:this.$t("COLOR_FAR_ABOVE_MARKET"),legendText:this.$t("FAR_ABOVE_MARKET"),dataPoints:[]}),c({},this.format,{name:"ABOVE_MARKET",visible:!0,color:this.$t("COLOR_ABOVE_MARKET"),legendText:this.$t("ABOVE_MARKET"),dataPoints:[]}),c({},this.format,{name:"FAIR",visible:!0,legendText:this.$t("FAIR"),color:this.$t("COLOR_FAIR"),dataPoints:[]}),c({},this.format,{name:"GOOD",visible:!0,legendText:this.$t("GOOD"),color:this.$t("COLOR_GOOD"),dataPoints:[]}),c({},this.format,{visible:!0,name:"VERY_GOOD",legendText:this.$t("VERY_GOOD"),color:this.$t("COLOR_VERY_GOOD"),dataPoints:[]})]}}},methods:{setType:function(t){var e=this;this.type=t,setTimeout((function(){e.init()}),100)},init:function(){var t=this;this.chartOptions.axisX.suffix="year"==this.type?"":" "+this.$t("Km"),this.chartOptions.data.forEach((function(e,r){e.dataPoints=[],t.items[e.name]&&(e.dataPoints=t.items[e.name].map((function(element){return{id:element.id,x:"year"==t.type?parseInt(element.year):parseInt(element.odometer),y:parseInt(element.price),cursor:"pointer"}})))})),this.chart.render()}},watch:{items:{handler:function(t,e){this.init()},deep:!0}},mounted:function(){this.chart=new CanvasJS.Chart("chartContainer",this.chartOptions)}},m=r(20),d=r(26),h=r.n(d),_=r(196),v=r(519),f=r(392),y=r(409),x=r(412),C=r(424),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-tabs",{attrs:{dense:"","show-arrows":"","background-color":"transparent"}},[n("v-tab",{staticClass:"font-weight-bold",on:{click:function(e){return t.setType("year")}}},[n("img",{staticClass:"mx-1 mt-1 float-left",attrs:{width:"30",src:r(444),alt:t.$t("year")}}),t._v("\n      "+t._s(t.$t("year"))+"\n    ")]),t._v(" "),n("v-tab",{staticClass:"font-weight-bold",on:{click:function(e){return t.setType("odometer")}}},[n("img",{staticClass:"mx-2 float-left",attrs:{width:"30",src:r(445),alt:t.$t("odometer")}}),t._v("\n      "+t._s(t.$t("odometer"))+"\n    ")])],1),t._v(" "),n("v-divider"),t._v(" "),n("div",{staticClass:"is_ltr pa-3",staticStyle:{height:"300px",width:"100%"},attrs:{id:"chartContainer"}}),t._v(" "),n("v-row",{attrs:{justify:"center","no-gutters":""}},[t._l(t.chartOptions.data,(function(e,r){return[n("v-card",{key:r,staticClass:"ma-1 pa-1 stripe-btn"},[n("v-checkbox",{staticClass:"ma-0 pa-0",attrs:{label:t.$t(e.name),color:e.color,"hide-details":""},on:{change:function(e){return t.chart.render()}},model:{value:e.visible,callback:function(r){t.$set(e,"visible",r)},expression:"item.visible"}})],1)]}))],2)],1)}),[],!1,null,null,null);e.a=component.exports;h()(component,{VCard:_.a,VCheckbox:v.a,VDivider:f.a,VRow:y.a,VTab:x.a,VTabs:C.a})},471:function(t,e,r){"use strict";r(30);var n=r(9),o={props:{chart_id:{type:String,default:"column_chart_id"},items:{default:[]},color:{type:String,default:"#559ee2"},type:{type:String,default:"column"},foramt:{type:String,default:"#,##0.##"},suffix_x:{type:String,default:"",required:!1},suffix_y:{type:String,default:"",required:!1}},data:function(){return{elements:[],selected_x:null,is_selected_x:!1,chart_diagram_options:{animationEnabled:!0,axisX:{title:" "+this.suffix_x,includeZero:!1,valueFormatString:this.foramt},axisY:{title:" "+this.suffix_y,includeZero:!1,valueFormatString:"##.###"},data:[{click:function(t){},type:this.type,color:this.color,dataPoints:[]}]},chart_diagram:null}},watch:{selected_x:function(t){this.is_selected_x=!0,this.initChart(),this.$emit("onChangeX",t)},items:{handler:function(t,e){this.elements=t,this.is_selected_x?this.is_selected_x:this.selected_x=null,this.initChart()},deep:!0}},methods:{initChart:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0==t.elements.length){e.next=8;break}return t.chart_diagram_options.data[0].dataPoints=[],r=t.chart_diagram_options.data[0].dataPoints,e.next=5,t.elements.forEach((function(e){e[0]!=t.selected_x&&null!=t.selected_x?r.push({label:e[0],y:parseInt(e[1]),color:"#b9effb",cursor:"pointer"}):r.push({label:e[0],y:parseInt(e[1]),color:t.color,cursor:"pointer"})}));case 5:t.chart_diagram.render(),e.next=10;break;case 8:t.chart_diagram_options.data[0].dataPoints=[],t.chart_diagram.render();case 10:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.chart_diagram=new CanvasJS.Chart(this.chart_id,this.chart_diagram_options),this.initChart()}},c=r(20),l=r(26),m=r.n(l),d=r(127),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[null!=t.selected_x?r("v-icon",{staticStyle:{"margin-top":"0px","margin-right":"8px",position:"absolute",right:"0","z-index":"1"},on:{click:function(e){t.selected_x=null}}},[t._v("mdi-reload")]):t._e(),t._v(" "),r("div",{staticClass:"is_ltr",staticStyle:{height:"250px",width:"100%"},attrs:{id:t.chart_id}})],1)}),[],!1,null,null,null);e.a=component.exports;m()(component,{VIcon:d.a})},521:function(t,e,r){"use strict";r.r(e);r(13),r(10),r(8),r(5),r(11);var n=r(1),o=(r(36),r(27),r(30),r(9)),c=r(450),l=r(471),m={props:{chart_id:{type:String,default:"column_chart_id"},items:{},keys:{default:[0,1]},color:{type:String,default:"#559ee2"},type:{type:String,default:"doughnut"}},data:function(){return{elements:[],selected_x:null,is_selected_x:!1,chart_diagram_options:{animationEnabled:!0,data:[{indexLabelFontSize:14,innerRadius:60,type:this.type,indexLabel:" {label} #percent%",toolTipContent:"<b>{label}:</b> {y} (#percent%)",dataPoints:[]}]},chart_diagram:null,color_tr:{"#559ee2":"Bleu",grey:"Gris",red:"Rouge",black:"Noir","#f1f1f1":"Blanc",green:"Vert"}}},watch:{items:{handler:function(t,e){this.elements=t,this.initChart()},deep:!0}},methods:{initChart:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0==t.elements.length){e.next=8;break}return t.chart_diagram_options.data[0].dataPoints=[],r=t.chart_diagram_options.data[0].dataPoints,e.next=5,t.elements.forEach((function(e){if(e[t.keys[1]]||0==parseInt(e[t.keys[0]])){var n=null,o=Object.keys(t.color_tr).filter((function(r){return t.color_tr[r]==e[t.keys[1]]}));0!=o.length&&(n=o[0]),r.push({label:t.$t(e[t.keys[1]]),name:t.$t(e[t.keys[1]]),color:n,y:parseInt(e[t.keys[0]])})}}));case 5:t.chart_diagram.render(),e.next=10;break;case 8:t.chart_diagram_options.data[0].dataPoints=[],t.chart_diagram.render();case 10:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.chart_diagram=new CanvasJS.Chart(this.chart_id,this.chart_diagram_options),this.initChart()}},d=r(20),h=Object(d.a)(m,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"is_ltr",staticStyle:{height:"220px",width:"100%"},attrs:{id:this.chart_id}})}),[],!1,null,null,null).exports,_=r(460),v=r(470),f=r(459),y=r(482),x=r(458);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k={components:{FullScreen:_.a,Number:x.a,SearchCar:c.a,Column:l.a,Pie:h,Graph:v.a,ChecboxPanel:f.a,Filtre:y.a},data:function(){return{dialog_filter:!1,params:{make:null,model:null},resume:{age_avg:0},graph_product:{},price_chart:{items:[]},odometer_chart:{items:[]},year_chart:{items:[]},meta_data:{},meta_data_check:{},years:[],selected_year:null,first_time:!0,dates:[{text:"12 mois",value:"365"},{text:"3 mois",value:"90"},{text:"Aujourd'hui",value:"1"},{text:"7 jours",value:"7"},{text:"30 jours",value:"30"}],selected_date:{text:"12 mois",value:"365"}}},head:function(){return{title:this.meta.title,meta:[{hid:"description",name:"description",content:this.meta.description},{hid:"og:title",property:"og:title",content:this.meta.title+" - autoprix.tn"},{hid:"og:description",property:"og:description",content:this.meta.description},{hid:"og:image",property:"og:image",content:r(437)}]}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,title,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.store,t.query,r=t.params,t.app,r.make?(title="",r.make&&(title=r.make),r.make&&r.model&&(title=r.make+" "+r.model),n="Analyser, personnaliser et comprendre facilement le marché de "+title+" en Tunisie et suivre les dernières tendances du marché.​",title="Statistiques du marché de "+title+" en Tunisie​​"):(title="Statistiques et tendances du marché automobile en Tunisie​​",n="Analyser, personnaliser et comprendre facilement le marché automobile en Tunisie et suivre les dernières tendances du marché.​​"),e.abrupt("return",{meta:{title:title,description:n}});case 3:case"end":return e.stop()}}),e)})))()},computed:{car_data_params:{get:function(){return this.$store.state.route.car_data_params},set:function(t){this.$store.commit("route/car_data_params",t)}}},watch:{"$route.params":{handler:function(t,e){-1!==this.$route.name.indexOf("car-data")&&this.selectModel(t)},deep:!0}},methods:{getParams:function(t){this.params=t,this.dialog_filter=!1,this.$router.replace(this.localePath({name:this.setSearchPageName(t),params:this.setSearchPageName(t),query:this.params})).catch((function(t){})),this.init()},setSearchPageName:function(t){return t.make&&t.model?"car-data-make-model":t.make?"car-data-make":"car-data"},selectModel:function(t){this.params=w({},this.params,{},t),t.make&&t.model?this.$router.push(this.localePath({name:"car-data-make-model",params:t})):t.make?(delete this.params.model,this.$router.push(this.localePath({name:"car-data-make",params:t}))):(delete this.params.make,delete this.params.model,this.$router.push(this.localePath({name:"car-data"}))),this.init()},share:function(){this.$store.commit("layout/share",{is_open:!0,url:window.location.href})},setYear:function(){isNaN(this.selected_year)?(delete this.params.year,delete this.params.min_year,delete this.params.max_year):(this.params.year=this.selected_year,this.params.min_year=this.selected_year,this.params.max_year=this.selected_year),this.init()},init:function(){var t=this,e=w({},this.params,{},this.$route.params);this.first_time?this.car_data_params=this.params:this.first_time=!1,this.$api.get("public/analytics/resume",{params:e}).then((function(e){t.resume=e.data.result})),this.$api.get("public/analytics/price",{params:e}).then((function(e){t.price_chart.items=e.data.result})),this.$api.get("public/analytics/odometer",{params:e}).then((function(e){t.odometer_chart.items=e.data.result})),this.$api.get("public/analytics/year",{params:e}).then((function(e){t.year_chart.items=e.data.result})),this.$api.get("public/analytics/meta-data",{params:e}).then((function(e){t.meta_data=e.data.result})),this.$api.get("public/filter/product/graph",{params:w({},e,{},{max:500})}).then((function(e){t.graph_product=e.data.result}))}},mounted:function(){var t=this;this.init(),this.$api.get("public/analytics/meta-data",{params:this.params}).then((function(e){t.meta_data_check=e.data.result}))},created:function(){this.params=this.$route.params,this.params=w({},this.params,{},this.$route.query),this.params.year&&(this.selected_year=parseInt(this.params.year)),this.params.date=365,this.years.push(this.$t("Tous"));for(var i=2020;i>=1930;i--)this.years.push(i)}},O=r(26),$=r.n(O),P=r(200),j=r(195),S=r(196),V=r(19),E=r(407),A=r(427),T=r(423),R=r(392),D=r(69),F=r(127),L=r(198),I=r(128),G=r(74),K=r(393),N=r(409),B=r(410),M=Object(d.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticStyle:{"min-height":"45px"}},[r("div",{staticClass:"pa-0",class:{"toolbar-light fixed-nav my-0":!t.$vuetify.breakpoint.smAndDown},attrs:{dense:""}},[r("v-container",{staticClass:"py-0",class:{"pa-0":t.$vuetify.breakpoint.smAndDown}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"12",md:"9"}},[r("div",{staticStyle:{height:"44px"}},[r("div",{staticClass:"nav-search",class:t.$vuetify.breakpoint.smAndDown?"fixed-nav toolbar-light":""},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"12",md:"7"}},[r("v-card-actions",{staticClass:"pa-1"},[r("SearchCar",{staticStyle:{width:"80%"},attrs:{make:t.params.make,height:34,model:t.params.model},on:{onSelect:t.selectModel}}),t._v(" "),r("div",{staticClass:"mx-1"}),t._v(" "),r("v-btn",{staticClass:"cp border-radius text-center primary white--text stripe-btn px-1",on:{click:function(e){t.dialog_filter=!t.dialog_filter}}},[r("v-icon",{staticClass:"white--text"},[t._v("mdi-filter")]),t._v("\n                        "+t._s(t.$t("Filtre"))+"\n                        "),Number(t.params.nb)>0?r("v-avatar",{staticClass:"white--text mx-1",attrs:{size:"20",color:"red"}},[t._v(t._s(t.params.nb))]):t._e()],1)],1)],1)],1)],1)])]),t._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-card-actions",{staticClass:"pa-0 py-1",class:{"px-0 bg--white border-bottom":t.$vuetify.breakpoint.smAndDown}},[r("v-spacer"),t._v(" "),r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"grey lighten-3 mx-1",attrs:{text:""}},n),[t._v("\n                    "+t._s(t.$t(t.selected_date.text))+"\n                    "),r("v-icon",[t._v("mdi-menu-down")])],1)]}}])},[t._v(" "),r("v-list",t._l(t.dates,(function(e,n){return r("v-list-item",{key:n,on:{click:function(r){t.selected_date=e,t.params.date=e.value,t.init()}}},[r("v-list-item-title",[t._v(t._s(t.$t(e.text)))])],1)})),1)],1),t._v(" "),r("v-btn",{staticClass:"grey lighten-3 mx-1",attrs:{text:""},on:{click:t.share}},[r("v-icon",[t._v("mdi-share")])],1),t._v(" "),r("FullScreen",{staticClass:"grey lighten-3 mx-1",attrs:{elem:"html"}})],1)],1)],1)],1)],1)]),t._v(" "),r("v-container",[r("ul",{staticClass:"breadcrumb pa-1",attrs:{itemscope:"",itemtype:"http://schema.org/BreadcrumbList"}},[r("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"http://schema.org/ListItem"}},[r("nuxt-link",{attrs:{to:t.localePath({name:"index"}),itemprop:"item"}},[r("span",{attrs:{itemprop:"name"}},[t._v(t._s(t.$t("Accueil")))])]),t._v(" "),r("meta",{attrs:{itemprop:"position",content:"1"}})],1),t._v(" "),r("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"http://schema.org/ListItem"}},[r("nuxt-link",{attrs:{to:t.localePath({name:"car-data"}),itemprop:"item"}},[r("span",{attrs:{itemprop:"name"}},[t._v("Auto Data")])]),t._v(" "),r("meta",{attrs:{itemprop:"position",content:"2"}})],1),t._v(" "),t.params.make?r("li",{staticClass:"is_ltr",attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"http://schema.org/ListItem"}},[r("nuxt-link",{attrs:{to:t.localePath({name:"car-data-make",params:{make:t.params.make}}),itemprop:"item"}},[r("span",{attrs:{itemprop:"name"}},[t._v(t._s(t.params.make))])]),t._v(" "),r("meta",{attrs:{itemprop:"position",content:"3"}})],1):t._e(),t._v(" "),t.params.model?r("li",{attrs:{itemprop:"itemListElement",itemscope:"",itemtype:"http://schema.org/ListItem"}},[r("nuxt-link",{attrs:{to:t.localePath({name:"car-data-make-model",params:{make:t.params.make,model:t.params.model}}),itemprop:"item"}},[r("span",{attrs:{itemprop:"name"}},[t._v(t._s(t.params.model))])]),t._v(" "),r("meta",{attrs:{itemprop:"position",content:"4"}})],1):t._e()]),t._v(" "),r("h1",{staticClass:"headline font-weight-bold pa-1"},[t.params.make?[t._v("Statistiques du marché de "+t._s(t.params.make)+" "+t._s(t.params.model)+" en Tunisie")]:[t._v("Statistiques et tendances du marché automobile en Tunisie​​")]],2),t._v(" "),r("v-row",{staticClass:"dash-card"},[r("v-col",{attrs:{cols:"6",md:"3"}},[r("v-list-item",{staticClass:"pa-2 py-2 stripe-btn border-radius bg--white item"},[r("v-list-item-content",{staticClass:"pa-0"},[r("h3",{staticClass:"caption mb-1"},[t._v("Annonces actives")]),t._v(" "),r("span",{staticClass:"font-weight-medium subtitle"},[r("number",{attrs:{to:t.f_numberFormat(t.resume.count)}})],1)])],1)],1),t._v(" "),r("v-col",{attrs:{cols:"6",md:"3"}},[r("v-list-item",{staticClass:"pa-2 py-2 stripe-btn border-radius bg--auto item",attrs:{dark:""}},[r("v-list-item-content",{staticClass:"pa-0"},[r("h3",{staticClass:"caption mb-1"},[t._v("Prix moyen")]),t._v(" "),r("h3",{staticClass:"font-weight-medium"},[r("number",{attrs:{to:t.f_numberFormat(t.resume.price_avg,t.$t("currency"))}})],1)])],1)],1),t._v(" "),r("v-col",{attrs:{cols:"6",md:"3"}},[r("v-list-item",{staticClass:"pa-2 py-2 stripe-btn border-radius bg--white item"},[r("v-list-item-content",{staticClass:"pa-0"},[r("h3",{staticClass:"caption mb-1"},[t._v("Kilométrage moyen")]),t._v(" "),r("h3",{staticClass:"font-weight-medium"},[r("number",{attrs:{to:t.f_numberFormat(t.resume.odometer_avg,"KM")}})],1)])],1)],1),t._v(" "),r("v-col",{attrs:{cols:"6",md:"3"}},[r("v-list-item",{staticClass:"pa-2 py-2 stripe-btn border-radius bg--white item"},[r("v-list-item-content",{staticClass:"pa-0"},[r("h3",{staticClass:"caption mb-1"},[t._v("Âge moyen")]),t._v(" "),r("h3",{staticClass:"font-weight-medium"},[r("number",{attrs:{to:t.f_numberFormat(t.resume.age_avg)}})],1)])],1)],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"4","cols-order":"2"}},[r("v-fade-transition",[r("nuxt-child")],1)],1),t._v(" "),r("v-col",{staticClass:"overflow-auto",attrs:{cols:"12",sm:"6",md:"8",id:"card_chart_price_line","cols-order":"1"}},[r("v-card",{staticClass:"elevation-0"},[r("v-card-actions",{staticClass:"pa-1"},[r("h3",{staticClass:"pa-1 tajawal font-weight-bold title"},[t._v("Le graphique")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"primary stripe-btn",attrs:{to:t.localePath({name:t.setSearchPageName(t.params),params:t.params}),text:"",dark:""},nativeOn:{click:function(e){return t.$store.commit("layout/is_keep_alive",!1)}}},[r("v-icon",{staticClass:"mx-1"},[t._v("mdi-magnify")]),t._v("Voir les annonces\n            ")],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("Graph",{staticClass:"pa-1 py-2 pt-0",attrs:{items:t.graph_product,suffix_x:t.$t("Km"),suffix_y:t.$t("currency")}}),t._v(" "),r("div",{staticClass:"tajawal pa-2 py-0"},[r("v-icon",{attrs:{small:""}},[t._v("mdi-alert-circle-outline")]),t._v(" "),r("small",{staticClass:"tajawal"},[t._v("Visualiser et comprendre l’ensemble du marché très simplement.")])],1)],1),t._v(" "),r("v-card",{staticClass:"elevation-0 mt-2"},[r("v-card-actions",{staticClass:"pa-0"},[r("h3",{staticClass:"pa-2 mb-3 tajawal font-weight-bold title"},[t._v("Prix")])]),t._v(" "),r("v-card-text",{staticClass:"pa-0 pb-2"},[r("Column",{attrs:{suffix_y:"Nombre de voitures",suffix_x:t.$t("price"),chart_id:"chart_price_line",color:"#fcb414",items:t.price_chart.items,suffix:t.$t("currency")},on:{onChangeX:function(e){return t.onHistoChange(e,"price",2500)}}})],1)],1)],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"6",sm:"6"}},[r("v-card",{staticClass:"elevation-0"},[r("h3",{staticClass:"pa-2 mb-3 tajawal font-weight-bold title"},[t._v(t._s(t.$t("odometer")))]),t._v(" "),r("v-card-text",{staticClass:"pa-0 pb-2"},[r("Column",{attrs:{suffix_y:"Nombre de voitures",suffix_x:t.$t("Km"),type:"bar",chart_id:"chart_odometer",items:t.odometer_chart.items},on:{onChangeX:function(e){return t.onHistoChange(e,"odometer",2500)}}})],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"6",sm:"6"}},[r("v-card",{staticClass:"elevation-0"},[r("h3",{staticClass:"pa-2 mb-3 tajawal font-weight-bold title"},[t._v(t._s(t.$t("year")))]),t._v(" "),r("v-card-text",{staticClass:"pa-0 pb-2"},[r("Column",{attrs:{suffix_y:"Nombre de voitures",suffix_x:"Age",chart_id:"G",type:"bar",foramt:"####",items:t.year_chart.items},on:{onChangeX:function(e){return t.onHistoChange(e,"year")}}})],1)],1)],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-card",{staticClass:"elevation-0"},[r("h3",{staticClass:"pa-2 tajawal font-weight-bold title"},[t._v(t._s(t.$t("md_color")))]),t._v(" "),r("v-card-text",{staticClass:"pa-0 py-2"},[r("Pie",{attrs:{chart_id:"GPiemd_color",keys:["count","name"],items:t.meta_data.color}})],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-card",{staticClass:"elevation-0"},[r("h3",{staticClass:"pa-2 tajawal font-weight-bold title"},[t._v(t._s(t.$t("md_gearbox")))]),t._v(" "),r("v-card-text",{staticClass:"pa-0 py-2"},[r("Pie",{attrs:{chart_id:"GPiegearbox",keys:["count","name"],items:t.meta_data.gearbox}})],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-card",{staticClass:"elevation-0"},[r("h3",{staticClass:"pa-2 tajawal font-weight-bold title"},[t._v(t._s(t.$t("md_fuel_type")))]),t._v(" "),r("v-card-text",{staticClass:"pa-0 py-2"},[r("Pie",{attrs:{chart_id:"GPiemd_fuel_type",keys:["count","name"],items:t.meta_data.fuel_type}})],1)],1)],1)],1),t._v(" "),r("v-card",{staticClass:"mt-3 border-radius elevation-0 pa-2",attrs:{"max-width":"500"}},[r("h4",{staticClass:"font-weight-bold mb-2"},[t.params.make?[t._v("Analyser, personnaliser et comprendre facilement le marché de "+t._s(t.params.make)+" "+t._s(t.params.model)+" en Tunisie et suivre les dernières tendances du marché.​")]:[t._v("Analyser, personnaliser et comprendre facilement le marché automobile en Tunisie et suivre les dernières tendances du marché.​")]],2),t._v(" "),r("p",{staticClass:"caption"},[r("b",{staticClass:"mb-1"},[t._v("Découvrez les statistiques détaillées sur les prix des voitures d’occasion :")]),t._v(" "),r("br"),t._v("- à combien les autres les achètent-ils ?\n        "),r("br"),t._v("- Que payait-on il y a 3, 6 ou 12 mois ?\n        "),r("br"),t._v("- Est-ce le moment d'acheter ?\n        "),r("br"),t._v("- C’est quoi les tendances actuelles ?\n        "),r("br"),t._v("- Boite automatique ou manuelle ?\n        "),r("br"),t._v("- Diesel, Essence ou Hybride ?\n      ")])])],1),t._v(" "),r("v-dialog",{attrs:{scrollable:"","max-width":"500px"},model:{value:t.dialog_filter,callback:function(e){t.dialog_filter=e},expression:"dialog_filter"}},[r("v-card",{staticClass:"grey lighten-4"},[r("v-card-actions",{staticClass:"white"},[r("v-spacer"),t._v(" "),r("v-icon",{on:{click:function(e){t.dialog_filter=!t.dialog_filter}}},[t._v("mdi-close")])],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",{staticClass:"pa-1"},[r("Filtre",{attrs:{init_params:t.params},on:{onChange:t.getParams}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=M.exports;$()(M,{VAvatar:P.a,VBtn:j.a,VCard:S.a,VCardActions:V.a,VCardText:V.b,VCol:E.a,VContainer:A.a,VDialog:T.a,VDivider:R.a,VFadeTransition:D.d,VIcon:F.a,VList:L.a,VListItem:I.a,VListItemContent:G.a,VListItemTitle:G.c,VMenu:K.a,VRow:N.a,VSpacer:B.a})}}]);