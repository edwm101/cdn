(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{425:function(t,e,r){"use strict";r(52);var n=r(17),l={props:{chart_id:{type:String,default:"column_chart_id"},items:{default:[]},color:{type:String,default:"#559ee2"},type:{type:String,default:"column"},foramt:{type:String,default:"#,##0.##"},suffix_x:{type:String,default:"",required:!1},suffix_y:{type:String,default:"",required:!1}},data:function(){var t=this;return{elements:[],selected_x:null,is_selected_x:!1,chart_diagram_options:{animationEnabled:!0,axisX:{title:" "+this.suffix_x,includeZero:!1,valueFormatString:this.foramt},axisY:{title:" "+this.suffix_y,includeZero:!1,valueFormatString:"##.###"},data:[{click:function(e){t.selected_x!=e.dataPoint.x?t.selected_x=e.dataPoint.x:t.selected_x=null},type:this.type,color:this.color,dataPoints:[]}]},chart_diagram:null}},watch:{selected_x:function(t){this.is_selected_x=!0,this.initChart(),this.$emit("onChangeX",t)},items:{handler:function(t,e){this.elements=t,this.is_selected_x?this.is_selected_x:this.selected_x=null,this.initChart(),console.log(this.is_selected_x)},deep:!0}},methods:{initChart:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0==t.elements.length){e.next=6;break}return t.chart_diagram_options.data[0].dataPoints=[],r=t.chart_diagram_options.data[0].dataPoints,e.next=5,t.elements.forEach((function(e){e[1]>=3&&(e[0]!=t.selected_x&&null!=t.selected_x?r.push({x:e[0],y:parseInt(e[1]),color:"#b9effb",cursor:"pointer"}):r.push({x:e[0],y:parseInt(e[1]),color:t.color,cursor:"pointer"}))}));case 5:t.chart_diagram.render();case 6:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.chart_diagram=new CanvasJS.Chart(this.chart_id,this.chart_diagram_options),this.initChart()}},c=r(35),o=r(42),d=r.n(o),m=r(121),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[null!=t.selected_x?r("v-icon",{staticStyle:{"margin-top":"0px","margin-right":"8px",position:"absolute",right:"0","z-index":"1"},on:{click:function(e){t.selected_x=null}}},[t._v("mdi-reload")]):t._e(),t._v(" "),r("div",{staticClass:"is_ltr",staticStyle:{height:"250px",width:"100%"},attrs:{id:t.chart_id}})],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VIcon:m.a})},472:function(t,e,r){"use strict";r.r(e);r(13),r(10),r(7),r(5),r(11);var n=r(1),l=r(426),c=r(425),o=(r(52),r(17)),d={props:{chart_id:{type:String,default:"column_chart_id"},items:{},keys:{default:[0,1]},color:{type:String,default:"#559ee2"},type:{type:String,default:"doughnut"}},data:function(){return{elements:[],selected_x:null,is_selected_x:!1,chart_diagram_options:{animationEnabled:!0,data:[{indexLabelFontSize:14,innerRadius:70,type:this.type,indexLabel:" {label} #percent%",toolTipContent:"<b>{label}:</b> {y} (#percent%)",dataPoints:[]}]},chart_diagram:null}},watch:{items:{handler:function(t,e){this.elements=t,this.initChart()},deep:!0}},methods:{initChart:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0==t.elements.length){e.next=6;break}return t.chart_diagram_options.data[0].dataPoints=[],r=t.chart_diagram_options.data[0].dataPoints,e.next=5,t.elements.forEach((function(e){(e[t.keys[1]]||0==parseInt(e[t.keys[0]]))&&(console.log(parseInt(e[t.keys[0]])),r.push({label:t.$t(e[t.keys[1]]),name:t.$t(e[t.keys[1]]),y:parseInt(e[t.keys[0]])}))}));case 5:t.chart_diagram.render();case 6:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.chart_diagram=new CanvasJS.Chart(this.chart_id,this.chart_diagram_options),this.initChart()}},m=r(35),h=Object(m.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"is_ltr",staticStyle:{height:"220px",width:"100%"},attrs:{id:this.chart_id}})])}),[],!1,null,null,null).exports,v={props:{large:{default:!1},elem:{default:"app"}},data:function(){return{isFullscreen:!0,isSupported:!0}},methods:{toggleFullscreen:function(t){if(window.innerHeight==screen.height)var e=!0;else e=!1;this.isFullscreen=e;var r=document.querySelector(this.elem);if(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)if(e){if(document.exitFullscreen)return void document.exitFullscreen();if(document.webkitExitFullscreen)return void document.webkitExitFullscreen();if(document.mozCancelFullScreen)return void document.mozCancelFullScreen();if(document.msExitFullscreen)return void document.msExitFullscreen()}else{if(r.requestFullscreen)return void r.requestFullscreen();if(r.webkitRequestFullscreen)return void r.webkitRequestFullscreen();if(r.mozRequestFullScreen)return void r.mozRequestFullScreen();if(r.msRequestFullscreen)return void r.msRequestFullscreen()}else this.isSupported=!1}}},_=r(42),f=r.n(_),y=r(189),x=r(121),C=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isSupported?r("v-btn",{attrs:{text:"",large:t.large},on:{click:t.toggleFullscreen}},[t.isFullscreen?r("v-icon",{attrs:{large:t.large}},[t._v("mdi-fullscreen")]):r("v-icon",{attrs:{large:t.large}},[t._v("mdi-fullscreen-exit")])],1):t._e()}),[],!1,null,null,null),w=C.exports;function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}f()(C,{VBtn:y.a,VIcon:x.a});var S={components:{FullScreen:w,SearchCar:l.a,Column:c.a,Pie:h},data:function(){return{params:{make:null,model:null},price_chart:{items:[]},odometer_chart:{items:[]},year_chart:{items:[]},meta_data:{},years:[],selected_year:null,dates:[{text:"any_date",value:"365"},{text:"today",value:"1"},{text:"week",value:"7"},{text:"6month",value:"180"},{text:"month",value:"30"}],selected_date:{text:"any_date",value:"90"}}},methods:{selectModel:function(t){this.params=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.params,{},t),t.make&&t.model?this.$router.push(this.localePath({name:"car-data-make-model",params:t})):t.make?this.$router.push(this.localePath({name:"car-data-make",params:t})):this.$router.push(this.localePath({name:"car-data"})),this.init()},share:function(){this.$store.commit("layout/share",{is_open:!0,url:window.location.href})},setYear:function(){isNaN(this.selected_year)?(delete this.params.min_year,delete this.params.max_year):(this.params.min_year=this.selected_year,this.params.max_year=this.selected_year),this.init()},init:function(){var t=this;this.$api.get("public/filter/histogram",{params:this.params}).then((function(e){t.price_chart.items=e.data.result.price,t.odometer_chart.items=e.data.result.odometer,t.year_chart.items=e.data.result.year})),this.$api.get("public/analytics/meta-data",{params:this.params}).then((function(e){t.meta_data=e.data.result}))}},mounted:function(){this.init()},created:function(){this.params=this.$route.params,this.params.date=365,this.years.push(this.$t("Tous"));for(var i=2020;i>=1930;i--)this.years.push(i)}},$=r(190),F=r(51),j=r(391),O=r(408),P=r(377),E=r(65),V=r(193),R=r(122),I=r(164),D=r(378),z=r(393),H=r(473),L=r(394),X=Object(m.a)(S,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"grey lighten-3"},[r("div",{staticStyle:{"min-height":"54px"}},[r("div",{staticClass:"pa-0",class:{"toolbar-light fixed-nav my-2":!t.$vuetify.breakpoint.smAndDown},attrs:{dense:""}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"12",md:"9"}},[r("div",{staticStyle:{height:"54px"}},[r("div",{staticClass:"nav-search",class:t.$vuetify.breakpoint.smAndDown?"fixed-nav toolbar-light":""},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{staticClass:"pa-1",attrs:{cols:"12",sm:"12",md:"8","offset-md":"4"}},[r("v-card-actions",{staticClass:"pa-0"},[r("SearchCar",{staticStyle:{width:"80%"},attrs:{make:t.params.make,model:t.params.model},on:{onSelect:t.selectModel}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-select",{ref:"dropdown_year",staticClass:"bg--white py-1 px-0 black--text dropdown_year mx-1 border border-radius",staticStyle:{"max-width":"130px"},attrs:{solo:"","offset-y":"",flat:"",items:t.years,"hide-details":"",label:t.$t("year"),"prepend-inner-icon":"mdi-calendar"},on:{change:function(e){return t.setYear()}},model:{value:t.selected_year,callback:function(e){t.selected_year=e},expression:"selected_year"}})],1)],1)],1)],1)])]),t._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-card-actions",{staticClass:"pa-2",class:{"pa-1 px-0 pr-1 bg--white border-bottom":t.$vuetify.breakpoint.smAndDown}},[r("v-spacer"),t._v(" "),r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"grey mx-1 lighten-3",attrs:{text:""}},n),[t._v("\n                  "+t._s(t.$t(t.selected_date.text))+"\n                  "),r("v-icon",[t._v("mdi-menu-down")])],1)]}}])},[t._v(" "),r("v-list",t._l(t.dates,(function(e,n){return r("v-list-item",{key:n,on:{click:function(r){t.selected_date=e,t.params.date=e.value,t.init()}}},[r("v-list-item-title",[t._v(t._s(t.$t(e.text)))])],1)})),1)],1),t._v(" "),r("FullScreen",{staticClass:"grey mx-1 lighten-3",attrs:{elem:"html"}}),t._v(" "),r("v-btn",{staticClass:"grey mx-1 lighten-3",attrs:{text:""},on:{click:t.share}},[r("v-icon",[t._v("mdi-share")])],1)],1)],1)],1)],1)]),t._v(" "),r("v-row",{staticClass:"dash-card",attrs:{"no-gutters":""}},[r("v-col",{staticClass:"pa-",attrs:{cols:"12",sm:"6",md:"3"}},[r("v-list-item",{staticClass:"pa-2 border-adius bg--white item"},[r("img",{staticClass:"mx-2",attrs:{src:"https://image.flaticon.com/icons/svg/810/810070.svg",width:"45"}}),t._v(" "),r("v-list-item-content",{staticClass:"pa-1"},[r("h3",{staticClass:"caption"},[t._v("Annonces actives")]),t._v(" "),r("h4",{staticClass:"font-weight-bold headline"},[t._v("23,051")])])],1)],1),t._v(" "),r("v-col",{staticClass:"pa-",attrs:{cols:"12",sm:"6",md:"3"}},[r("v-list-item",{staticClass:"pa-2 border-adius bg--white item"},[r("img",{staticClass:"mx-2",attrs:{src:"https://image.flaticon.com/icons/svg/639/639365.svg",width:"45"}}),t._v(" "),r("v-list-item-content",{staticClass:"pa-1"},[r("h3",{staticClass:"caption"},[t._v("Prix moyen")]),t._v(" "),r("h4",{staticClass:"font-weight-bold headline"},[t._v("29,028 "+t._s(t.$t("currency")))])])],1)],1),t._v(" "),r("v-col",{staticClass:"pa-",attrs:{cols:"12",sm:"6",md:"3"}},[r("v-list-item",{staticClass:"pa-2 border-adius bg--white item"},[r("img",{staticClass:"mx-2",attrs:{src:"https://image.flaticon.com/icons/svg/2794/2794345.svg",width:"45"}}),t._v(" "),r("v-list-item-content",{staticClass:"pa-1"},[r("h3",{staticClass:"caption"},[t._v("Kilométrage moyen")]),t._v(" "),r("h4",{staticClass:"font-weight-bold headline"},[t._v("\n            160,000\n            "+t._s(t.$t("Km"))+"\n          ")])])],1)],1),t._v(" "),r("v-col",{staticClass:"pa-",attrs:{cols:"12",sm:"6",md:"3"}},[r("v-list-item",{staticClass:"pa-2 border-adius bg--white item"},[r("img",{staticClass:"mx-2",attrs:{src:"https://image.flaticon.com/icons/svg/2794/2794278.svg",width:"45"}}),t._v(" "),r("v-list-item-content",{staticClass:"pa-1"},[r("h3",{staticClass:"caption"},[t._v("Kilométrage annuel")]),t._v(" "),r("h4",{staticClass:"font-weight-bold headline"},[t._v("15,700 "+t._s(t.$t("Km"))+"/an")])])],1)],1)],1),t._v(" "),r("v-container",{class:{"pa-0":t.$vuetify.breakpoint.xsOnly}},[r("v-row",{staticClass:"mt-3 white overflow-auto",attrs:{"no-gutters":"",id:"card_chart_price_line"}},[r("v-col",{staticClass:"border-right",attrs:{cols:"12",sm:"6",md:"4"}},[r("v-fade-transition",[r("nuxt-child")],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"8"}},[r("v-card",{staticClass:"elevation-0 ma-1"},[r("v-card-actions",{staticClass:"pa-0"},[r("h3",{staticClass:"pa-2 tajawal font-weight-bold title"},[t._v("Evolution du prix moyen par mois")]),t._v(" "),r("v-spacer"),t._v(" "),r("FullScreen",{staticClass:"float-right",attrs:{elem:"#card_chart_price_line"}})],1),t._v(" "),r("v-card-text",{staticClass:"pa-0"},[r("Column",{attrs:{chart_id:"chart_price_line",color:"green",type:"area",items:t.price_chart.items,suffix:t.$t("currency")},on:{onChangeX:function(e){return t.onHistoChange(e,"price",2500)}}}),t._v(" "),r("div",{staticClass:"tajawal pa-2 py-0"},[r("v-icon",{attrs:{small:""}},[t._v("mdi-alert-circle-outline")]),t._v(" "),r("small",{staticClass:"tajawal"},[t._v("Visualiser et comprendre l’ensemble du marché très simplement.")])],1)],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{staticClass:"border-right",attrs:{cols:"12",md:"6"}},[r("v-card",{staticClass:"elevation-0"},[r("h3",{staticClass:"pa-2 pb-1 tajawal font-weight-bold title"},[t._v(t._s(t.$t("md_fuel_type")))]),t._v(" "),r("v-card-text",{staticClass:"pa-1 pb-2"},[r("Pie",{attrs:{chart_id:"GPiemd_fuel_type",keys:["count","name"],items:t.meta_data.fuel_type}})],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-card",{staticClass:"elevation-0"},[r("h3",{staticClass:"pa-2 pb-2 tajawal font-weight-bold title"},[t._v(t._s(t.$t("md_gearbox")))]),t._v(" "),r("v-card-text",{staticClass:"pa-1 pb-2"},[r("Pie",{attrs:{chart_id:"GPiegearbox",keys:["count","name"],items:t.meta_data.gearbox}})],1)],1)],1)],1)],1)],1),t._v(" "),r("v-row",{staticClass:"mt-3",attrs:{"no-gutters":""}},[r("v-col",{staticClass:"pa-1",attrs:{cols:"12",md:"4"}},[r("v-card",{staticClass:"elevation-0"},[r("h3",{staticClass:"pa-2 mb-3 tajawal font-weight-bold title"},[t._v(t._s(t.$t("odometer")))]),t._v(" "),r("v-card-text",{staticClass:"pa-0"},[r("Column",{attrs:{suffix_y:"Km",suffix_x:"pirce",chart_id:"chart_odometer",items:t.odometer_chart.items},on:{onChangeX:function(e){return t.onHistoChange(e,"odometer",2500)}}})],1)],1)],1),t._v(" "),r("v-col",{staticClass:"pa-1",attrs:{cols:"12",md:"4"}},[r("v-card",{staticClass:"elevation-0"},[r("h3",{staticClass:"pa-2 mb-3 tajawal font-weight-bold title"},[t._v(t._s(t.$t("price")))]),t._v(" "),r("v-card-text",{staticClass:"pa-0"},[r("Column",{attrs:{chart_id:"chart_price",type:"bar",color:"green",items:t.price_chart.items,suffix:t.$t("currency")},on:{onChangeX:function(e){return t.onHistoChange(e,"price",2500)}}})],1)],1)],1),t._v(" "),r("v-col",{staticClass:"pa-1",attrs:{cols:"12",md:"4"}},[r("v-card",{staticClass:"elevation-0"},[r("h3",{staticClass:"pa-2 mb-3 tajawal font-weight-bold title"},[t._v(t._s(t.$t("year")))]),t._v(" "),r("v-card-text",{staticClass:"pa-0"},[r("Column",{attrs:{chart_id:"G",foramt:"####",items:t.year_chart.items},on:{onChangeX:function(e){return t.onHistoChange(e,"year")}}})],1)],1)],1)],1),t._v(" "),r("p",{staticClass:"caption pa-2 border-radius grey lighten-4 mt-3"},[r("b",[t._v("Découvrez les statistiques détaillées sur les prix des voitures d’occasion :")]),t._v(" "),r("br"),t._v("- à combien les autres les achètent-ils ?\n      "),r("br"),t._v("- Que payait-on il y a 3, 6 ou 12 mois ?\n      "),r("br"),t._v("- Est-ce le moment d'acheter ?\n      "),r("br"),t._v("- C’est quoi les tendances actuelles ?\n      "),r("br"),t._v("- Boite automatique ou manuelle ?\n      "),r("br"),t._v("- Diesel, Essence ou Hybride ?\n    ")])],1)],1)}),[],!1,null,null,null);e.default=X.exports;f()(X,{VBtn:y.a,VCard:$.a,VCardActions:F.a,VCardText:F.b,VCol:j.a,VContainer:O.a,VDivider:P.a,VFadeTransition:E.d,VIcon:x.a,VList:V.a,VListItem:R.a,VListItemContent:I.a,VListItemTitle:I.c,VMenu:D.a,VRow:z.a,VSelect:H.a,VSpacer:L.a})}}]);