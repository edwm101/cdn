(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{409:function(t,e,r){"use strict";r(43),r(22),r(23),r(5);var n={props:{datetime:{default:"1587352244"},locale:{default:"fr"}},data:function(){return{counterInterval:null,date:"",locales:{fr:{prefix:"il y a ",suffix:"",seconds:"%d secondes",minute:"une minute",minutes:"%d minutes",hour:"une heure",hours:"%d heures",day:"un jour",days:"%d jours",month:"un mois",months:"%d mois",year:"un an",years:"%d années"},ar:{prefix:"",suffix:"",seconds:" %d arab",minute:"Environ une arab",minutes:"%d arab",hour:"Environ une heure",hours:"%d heures",day:"un arab",days:"%d jours",month:"environ un arab",months:"%d mois",year:"environ un an",years:"%d années"}}}},watch:{local:function(t){this.date=this.timer(this.datetime)}},methods:{timer:function(time){if(time){time=(time=(time=(time=(time=time.toString()).replace(/\.\d+/,"")).replace(/-/,"/").replace(/-/,"/")).replace(/T/," ").replace(/Z/," UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),time=new Date(1e3*time||time);var t=.001*((new Date).getTime()-time)>>0,e=t/60,r=e/60,n=r/24,o=n/365;return this.locales[this.locale].prefix+(t<45&&this.template("seconds",t)||t<90&&this.template("minute",1)||e<45&&this.template("minutes",e)||e<90&&this.template("hour",1)||r<24&&this.template("hours",r)||r<42&&this.template("day",1)||n<30&&this.template("days",n)||n<45&&this.template("month",1)||n<365&&this.template("months",n/30)||o<1.5&&this.template("year",1)||this.template("years",o))+this.locales[this.locale].suffix}},template:function(t,e){return this.locales[this.locale][t]&&this.locales[this.locale][t].replace(/%d/i,Math.abs(Math.round(e)))}},created:function(){var t=this;this.date=this.timer(this.datetime),this.counterInterval=setInterval((function(){t.date=t.timer(t.datetime)}),1e3)},destoyed:function(){clearInterval(this.counterInterval)}},o=r(35),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v(this._s(this.date))])}),[],!1,null,null,null);e.a=component.exports},410:function(t,e,r){"use strict";var n={props:{value:{},text:{},color:{}},data:function(){return{value_rest:0}},created:function(){this.value_rest=Math.abs(5-this.value)}},o=r(35),c=r(42),l=r.n(c),d=r(121),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("client-only",[r("span",{staticClass:"progress caption font-weight-bold pl-0"},[t._l(t.value,(function(i,e){return r("v-icon",{key:"d"+e,style:{color:t.color},attrs:{small:""}},[t._v("mdi-steering")])})),t._v(" "),t._l(t.value_rest,(function(i,e){return r("v-icon",{key:"db"+e,staticStyle:{color:"#d9d9d9"},attrs:{small:""}},[t._v("mdi-steering")])})),t._v(" "),r("span",{staticStyle:{"font-size":"11px"},style:{color:t.color}},[t._v(t._s(t.text))])],2)])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VIcon:d.a})},411:function(t,e,r){"use strict";r(16);var n={props:{product_id:{type:Number,required:!0}},data:function(){return{is_fav:!1}},computed:{favorite:function(){return this.$store.state.action.favorite}},watch:{favorite:function(){var t=this,e=!1;this.favorite.forEach((function(element){t.product_id==element&&(e=!0)})),this.is_fav=e}},methods:{toggle:function(){var t=this;this.is_fav=!this.is_fav,this.$api.post("public/action",{status:this.is_fav,meta_key:"favorite",meta_value:this.product_id}).then((function(e){t.$store.commit("action/toggleFavorite",t.product_id)}))}},mounted:function(){var t=this,e=!1;this.favorite.forEach((function(element){t.product_id==element&&(e=!0)})),this.is_fav=e}},o=r(35),c=r(42),l=r.n(c),d=r(189),m=r(121),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-btn",{staticClass:"transparent",attrs:{depressed:""},on:{click:this.toggle}},[e("v-icon",{class:{"red--text":this.is_fav}},[this._v(this._s(this.is_fav?"mdi-heart":"mdi-heart-outline"))])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VBtn:d.a,VIcon:m.a})},415:function(t,e,r){"use strict";var n=r(410),o=r(411),c=r(409),l={components:{Indicator:n.a,Favorite:o.a,TimeAgo:c.a},props:{product:{dafault:[]}},data:function(){return{image_index:0,is_show_phone:!1,isActive:!1,estimation_rate:0,estimation_item:{},estimation_items:[{id:0,name:"Offre suspecte",color:"red",rate:0},{id:1,name:"Très mauvaise affaire",color:"red",rate:1},{id:2,name:"Mauvaise affaire",color:"red",rate:2},{id:3,name:"Offre équitable",color:"#559ee2",rate:3},{id:4,name:"Bonne affaire",color:"#66BB6A",rate:4},{id:5,name:"Très bonne affaire",color:"#fcb414",rate:5},{id:6,name:"Cote indisponible",color:"#bdbcbc",rate:0},{id:7,name:" ",color:"",rate:0}]}},methods:{share:function(){var t="https://www.autoprix.tn"+this.$router.resolve(this.localePath({name:"car-id",params:{id:this.product.url_id}})).href;this.$store.commit("layout/share",{is_open:!0,url:t,title:this.product.make+" "+this.product.model})}},created:function(){switch(this.estimation_rate=parseInt(100*this.product.estimated_price/this.product.price),this.product.estimated_price=100*Math.floor(this.product.estimated_price/100),!0){case null==this.product.price||0==this.product.price:this.estimation_item=this.estimation_items[6];break;case this.product.estimation_count<=3:this.estimation_rate=0,this.estimation_item=this.estimation_items[6];break;case this.estimation_rate<=0||this.estimation_rate>=200:this.estimation_item=this.estimation_items[0];break;case this.estimation_rate<70:this.estimation_item=this.estimation_items[1];break;case this.estimation_rate<90:this.estimation_item=this.estimation_items[2];break;case this.estimation_rate>=90&&this.estimation_rate<=110:this.estimation_item=this.estimation_items[3];break;case this.estimation_rate>110&&this.estimation_rate<=120:this.estimation_item=this.estimation_items[4];break;case this.estimation_rate>120&&this.estimation_rate<=150:this.estimation_item=this.estimation_items[5];break;case this.estimation_rate>150:this.estimation_item=this.estimation_items[0]}}},d=r(35),m=r(42),h=r.n(m),_=r(192),v=r(189),f=r(190),x=r(51),y=r(435),C=r(436),w=r(391),k=r(121),$=r(437),S=r(122),O=r(164),V=r(393),j=r(66),I=r(394),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"elevation-0",attrs:{tile:""}},[r("v-list-item",{staticClass:"pa-1 px-1 pr-2"},[r("v-avatar",{staticClass:"mx-2",attrs:{left:"",size:"35",color:t.estimation_item.color}},[r("span",{staticClass:"white--text headline capitalize"},[t._v(t._s(t.product.seller[0]))])]),t._v(" "),r("v-list-item-content",{staticClass:"py-0 pb-0"},[r("h4",{staticClass:"font-weight-bold line-height-1 body-2 mb-0 capitalize"},[t._v(t._s(t.product.seller))]),t._v(" "),r("v-list-item-title",{staticClass:"caption"},[r("client-only",[r("time-ago",{attrs:{refresh:1,datetime:t.product.last_updated,locale:t.$i18n.locale}}),t._v(",\n        ")],1),t._v("\n        "+t._s(t.$t(t.product.governorate))+t._s(t.product.city?", "+t.$t(t.product.city):"")+"\n      ")],1)],1),t._v(" "),r("client-only",[r("span",{staticClass:"float-right",staticStyle:{position:"relative","z-index":"2"}},[r("a",{attrs:{href:"tel:"+t.product.phone}},[r("v-btn",{staticClass:"white px-0",attrs:{depressed:""},on:{click:function(e){t.is_show_phone=!t.is_show_phone}}},[r("v-icon",{staticClass:"green--text"},[t._v("mdi-phone")]),t._v(" "),!t.$vuetify.breakpoint.smAndDown&&t.is_show_phone?r("span",[t._v(t._s(t.f_numberFormat(t.product.phone,"").replace(/,/gi," ")))]):t._e()],1)],1),t._v(" "),r("v-btn",{staticClass:"white px-0",attrs:{depressed:""},on:{click:t.share}},[r("v-icon",[t._v("mdi-share")])],1),t._v(" "),r("Favorite",{staticClass:"white px-0",attrs:{product_id:t.product.id}})],1)])],1),t._v(" "),r("div",{staticClass:"grey darken-4"},[r("span",{staticClass:"image_thumb_imfo grey darken-4 grey--text"},[t._v("\n      "+t._s(t.image_index+1)+"/"+t._s(t.product.image.length)+"\n      "),r("v-icon",{staticClass:"grey--text"},[t._v("mdi-camera")])],1),t._v(" "),r("v-lazy",{attrs:{"min-height":t.$vuetify.breakpoint.smAndDown?"220":"200",transition:"fade-transition"},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[r("client-only",[r("v-carousel",{attrs:{lazy:"",continuous:!0,"show-arrows":t.product.image.length>1,"hide-delimiter-background":"",cycle:!1,"hide-delimiters":"",height:t.$vuetify.breakpoint.smAndDown?"220":"200"},model:{value:t.image_index,callback:function(e){t.image_index=e},expression:"image_index"}},t._l(t.product.image,(function(img,i){return r("v-carousel-item",{key:i},[r("nuxt-link",{attrs:{to:t.localePath({name:"car-id",params:{id:t.product.url_id}})}},[r("v-sheet",{staticClass:"text-center",attrs:{height:"100%",tile:""}},[r("img",{attrs:{src:img,height:t.$vuetify.breakpoint.smAndDown?"220":"200",alt:""}})])],1)],1)})),1)],1)],1)],1),t._v(" "),r("nuxt-link",{staticClass:"black--text",attrs:{to:t.localePath({name:"car-id",params:{id:t.product.url_id}})}},[r("v-list-item",{staticClass:"pa-2 pt-2 py-0"},[r("img",{staticClass:"mr-1",staticStyle:{height:"auto"},attrs:{src:"https://www.carlogos.org/car-logos/"+t.product.make.toLowerCase().replace(" ","-")+"-logo.png",alt:t.product.make,width:"45"}}),t._v(" "),r("v-list-item-content",{staticClass:"pa-0"},[r("v-card-actions",{staticClass:"pa-0"},[r("h1",{staticClass:"font-weight-black title"},[t._v(t._s(t.product.make)+" "+t._s(t.product.model))]),t._v(" "),r("v-spacer"),t._v(" "),r("div",{staticClass:"body-2 text-right font-weight-bold"},[t._v(t._s(t.estimation_item.name))])],1),t._v(" "),r("v-card-actions",{staticClass:"pa-0"},[r("h3",{staticClass:"title font-weight-black"},[t._v("\n            "+t._s(t.f_numberFormat(t.product.price,t.$t("currency")))+"\n            "),6!=t.estimation_item.id?r("v-icon",{style:{color:t.estimation_item.color}},[t._v(t._s(t.product.price<=t.product.estimated_price?"mdi-trending-down":"mdi-trending-up"))]):t._e()],1),t._v(" "),r("v-spacer"),t._v(" "),r("Indicator",{attrs:{value:t.estimation_item.rate,color:t.estimation_item.color,text:t.f_numberFormat(t.product.estimated_price,t.$t("currency"))}})],1)],1)],1),t._v(" "),r("v-list-item",{staticClass:"pa-1 px-2",style:{"min-height":t.$vuetify.breakpoint.smAndDown?"":"44px"},attrs:{"three-line":""}},[null!=t.product.description?r("v-list-item-subtitle",{staticClass:"caption pb-1 capitalize",domProps:{innerHTML:t._s(t.product.description.split("\\n").join(" "))}}):t._e()],1),t._v(" "),r("v-row",{staticClass:"pb-1 ma-0 card-detail text-center",attrs:{"no-gutters":""}},[t.product.year?r("v-col",{attrs:{cols:"4"}},[t._v(t._s(t.product.year))]):t._e(),t._v(" "),t.product.odometer?r("v-col",{attrs:{cols:"4"}},[t._v(t._s(t.f_numberFormat(t.product.odometer,t.$t("Km"))))]):t._e(),t._v(" "),t.product.fuel_type?r("v-col",{attrs:{cols:"4"}},[t._v(t._s(t.$t(t.product.fuel_type)))]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;h()(component,{VAvatar:_.a,VBtn:v.a,VCard:f.a,VCardActions:x.a,VCarousel:y.a,VCarouselItem:C.a,VCol:w.a,VIcon:k.a,VLazy:$.a,VListItem:S.a,VListItemContent:O.a,VListItemSubtitle:O.b,VListItemTitle:O.c,VRow:V.a,VSheet:j.a,VSpacer:I.a})},417:function(t,e,r){"use strict";var n={props:{items:{type:Array,default:[]},suffix_x:{type:String,default:""},suffix_y:{type:String,default:""}},data:function(){return{chartOptions:{animationEnabled:!0,legend:{cursor:"pointer",itemclick:function(t){void 0===t.dataSeries.visible||t.dataSeries.visible?t.dataSeries.visible=!1:t.dataSeries.visible=!0,t.chart.render()}},axisX:{suffix:" "+this.suffix_x,valueFormatString:"####.##"},axisY:{suffix:" "+this.suffix_y,includeZero:!1},data:[{showInLegend:!0,legendText:"Line Test",type:"line",dataPoints:[]},{click:function(t){alert(t.dataPoint.id)},type:"scatter",showInLegend:!0,legendText:"Legend",legendMarkerType:"circle",toolTipContent:this.$t("odometer")+" : <b>{x}</b> <br>"+this.$t("price")+" : <b>{y}</b>",dataPoints:[]}]},chart:null}},methods:{init:function(){var t=this;this.chartOptions.data[1].dataPoints=[],this.items.forEach((function(element){t.chartOptions.data[1].dataPoints.push({id:element[0],x:parseInt(element[2]),y:parseInt(element[1]),color:"#559ee2",cursor:"pointer"})})),this.chart.render()}},watch:{items:function(){this.init()}},mounted:function(){this.chart=new CanvasJS.Chart("chartContainer",this.chartOptions),this.init()}},o=r(35),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"is_ltr",staticStyle:{height:"300px",width:"100%"},attrs:{id:"chartContainer"}})}),[],!1,null,null,null);e.a=component.exports},429:function(t,e,r){"use strict";r(16);var n={props:{range_id:{type:String,default:"range_id"},items:{default:[]},step:{default:1},is_active:{default:!1},value:{type:Array,required:!0},min:{type:Number,required:!0},max:{type:Number,required:!0},suffix:{type:String,default:"",required:!1}},data:function(){return{from:null,to:null,elements:[],range_value:[0,100],chart_diagram_options:{animationEnabled:!0,axisX:{labelFontSize:10,labelAngle:0,valueFormatString:"####.##"},axisY:{gridThickness:0,tickLength:0,lineThickness:0,labelFormatter:function(){return" "}},data:[{type:"column",color:"#559ee2",dataPoints:[]}]},chart_diagram:null}},watch:{is_active:{handler:function(t){var e=this;setTimeout((function(){e.initChart()}),1)}},items:{handler:function(t,e){this.elements=t,this.initChart()},deep:!0},value:{handler:function(t,e){this.range_value=t,this.from=t[0],this.to=t[1],this.initChart()}}},methods:{sendValue:function(){this.$emit("onChange",this.range_value),this.initChart()},initChart:function(){var t=this;if(0!=this.elements.length){this.chart_diagram_options.data[0].dataPoints=[];var e=this.chart_diagram_options.data[0].dataPoints;this.elements.forEach((function(r){switch(!0){case r[0]>=t.range_value[0]&&r[0]<=t.range_value[1]:e.push({x:r[0],y:parseInt(r[1]),color:"#559ee2"});break;case r[0]<t.range_value[0]:case r[0]>t.range_value[1]:e.push({x:r[0],y:parseInt(r[1]),fillOpacity:.3,color:"#b9effb"})}})),e[0].x!=this.min&&e.push({x:this.min,y:0}),e[e.length-1].x!=this.max&&e.push({x:this.max,y:0}),this.chart_diagram_options.axisX.interval=parseInt((this.max-this.min)/4),this.chart_diagram.render()}}},mounted:function(){this.chart_diagram=new CanvasJS.Chart(this.range_id,this.chart_diagram_options),this.range_value=this.value,this.from=this.value[0],this.to=this.value[1],this.initChart(),this.chart_diagram.render()}},o=r(35),c=r(42),l=r.n(c),d=r(51),m=r(377),h=r(476),_=r(380),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"histogram",attrs:{dir:"ltr"}},[r("div",{staticStyle:{height:"90px",width:"100%","margin-bottom":"-43.4px","margin-top":"-17px"},attrs:{id:t.range_id}}),t._v(" "),r("v-range-slider",{staticClass:"mx-1",attrs:{large:"",ltr:"","hide-details":"",min:t.min,"thumb-label":"",step:t.step,max:t.max},on:{change:function(e){t.from=t.range_value[0],t.to=t.range_value[1],t.sendValue()}},model:{value:t.range_value,callback:function(e){t.range_value=e},expression:"range_value"}}),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",{staticClass:"pa-0 mt-1 pl-1"},[t._v("\n    De\n    "),r("v-text-field",{staticClass:"ma-1 mt-0 border",attrs:{"hide-details":"",solo:"",flat:"",dense:"",suffix:t.suffix,label:"minimum",type:"number"},on:{change:function(e){t.range_value=[t.from,t.to],t.sendValue()}},model:{value:t.from,callback:function(e){t.from=e},expression:"from"}}),t._v("à\n    "),r("v-text-field",{staticClass:"ma-1 mt-0 border",attrs:{"hide-details":"",solo:"",flat:"",dense:"",suffix:t.suffix,type:"number",label:"maximum"},on:{change:function(e){t.range_value=[t.from,t.to],t.sendValue()}},model:{value:t.to,callback:function(e){t.to=e},expression:"to"}})],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VCardActions:d.a,VDivider:m.a,VRangeSlider:h.a,VTextField:_.a})},430:function(t,e,r){"use strict";r(52);var n=r(17),o={props:{chart_id:{type:String,default:"column_chart_id"},items:{default:[]},color:{type:String,default:"#559ee2"},type:{type:String,default:"column"},foramt:{type:String,default:"#,##0.##"},suffix_x:{type:String,default:"",required:!1},suffix_y:{type:String,default:"",required:!1}},data:function(){var t=this;return{elements:[],selected_x:null,is_selected_x:!1,chart_diagram_options:{animationEnabled:!0,axisX:{title:" "+this.suffix_x,includeZero:!1,valueFormatString:this.foramt},axisY:{title:" "+this.suffix_y,includeZero:!1,valueFormatString:"##.###"},data:[{click:function(e){t.selected_x!=e.dataPoint.x?t.selected_x=e.dataPoint.x:t.selected_x=null},type:this.type,color:this.color,dataPoints:[]}]},chart_diagram:null}},watch:{selected_x:function(t){this.is_selected_x=!0,this.initChart(),this.$emit("onChangeX",t)},items:{handler:function(t,e){this.elements=t,this.is_selected_x?this.is_selected_x:this.selected_x=null,this.initChart(),console.log(this.is_selected_x)},deep:!0}},methods:{initChart:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0==t.elements.length){e.next=6;break}return t.chart_diagram_options.data[0].dataPoints=[],r=t.chart_diagram_options.data[0].dataPoints,e.next=5,t.elements.forEach((function(e){e[1]>=3&&(e[0]!=t.selected_x&&null!=t.selected_x?r.push({x:e[0],y:parseInt(e[1]),color:"#b9effb",cursor:"pointer"}):r.push({x:e[0],y:parseInt(e[1]),color:t.color,cursor:"pointer"}))}));case 5:t.chart_diagram.render();case 6:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.chart_diagram=new CanvasJS.Chart(this.chart_id,this.chart_diagram_options),this.initChart()}},c=r(35),l=r(42),d=r.n(l),m=r(121),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[null!=t.selected_x?r("v-icon",{staticStyle:{"margin-top":"0px","margin-right":"8px",position:"absolute",right:"0","z-index":"1"},on:{click:function(e){t.selected_x=null}}},[t._v("mdi-reload")]):t._e(),t._v(" "),r("div",{staticClass:"is_ltr",staticStyle:{height:"250px",width:"100%"},attrs:{id:t.chart_id}})],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VIcon:m.a})},488:function(t,e,r){"use strict";r.r(e);r(13),r(10),r(7),r(5),r(11),r(43);var n=r(1),o=(r(52),r(17)),c=r(410),l=r(415),d=r(430),m=r(429),h=r(417);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{Indicator:c.a,Product:l.a,Column:d.a,Histogram:m.a,Graph:h.a},data:function(){return{years:[],graph_product:[],products:{},detail:{},estimation_ml:0,estimation:{},display_product_anim:{is_work:!0,index:0,price:0,img_index:0},old_params:{},params:{}}},head:function(){return{title:this.meta.title,meta:[{hid:"description",property:"description",content:this.meta.description},{hid:"og:title",property:"og:title",content:this.meta.title+" - autoprix.tn"},{hid:"og:description",property:"og:description",content:this.meta.description}]}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,title;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.store,r=t.query,t.app,title=r.make,void 0!==r.model&&(title+=" "+r.model),"Sur autoprix.tn ® retrouvez plus de 40 000 annonces",e.abrupt("return",{meta:{title:title,description:"Sur autoprix.tn ® retrouvez plus de 40 000 annonces"}});case 5:case"end":return e.stop()}}),e)})))()},watch:{},methods:{onHistoChange:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;!isNaN(t)&&t?(this.params["min_"+e]=t-2*r,this.params["max_"+e]=t):(delete this.params.min_price,delete this.params.max_price,delete this.params.min_year,delete this.params.max_year,delete this.params.min_odometer,delete this.params.max_odometer)},share:function(){this.$store.commit("layout/share",{is_open:!0,url:window.location.href,title:this.meta.title})},init:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(JSON.stringify(t.old_params)===JSON.stringify(t.$route.query)){e.next=13;break}return t.display_product_anim.is_work=!0,t.params=Object.assign(t.params,t.$route.query),t.old_params=v({},t.$route.query),r={},t.params.odometer=parseFloat(t.params.odometer.replace(" ","")),r.min_year=parseInt(t.params.year),r.max_year=parseInt(t.params.year),r.max=12,t.$api.get("public/valiation/predict",{params:v({},t.params)}).then(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.estimation_ml=r.data.result.ml,t.estimation=r.data.result.avg;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.$api.get("public/filter/product/all",{params:v({},t.params,{},r)}).then(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(r){var i,n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.products=r.data.result,t.detail=r.data.detail,i=0;case 3:if(!(i<t.products.length)){e.next=23;break}t.display_product_anim.index=i,n=0;case 6:if(!(n<2)){e.next=20;break}o=0;case 8:if(!(o<t.products[i].image.length)){e.next=17;break}return(c=t.products[Math.floor(Math.random()*(t.products.length-1))].price)&&(t.display_product_anim.price=c),t.display_product_anim.img_index=o,e.next=14,t.f_sleep(40);case 14:o++,e.next=8;break;case 17:n++,e.next=6;break;case 20:i++,e.next=3;break;case 23:return t.display_product_anim.price=t.estimation.estimated_price,e.next=26,t.f_sleep(1e3);case 26:t.display_product_anim.is_work=!1;case 27:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=13,t.$api.get("public/filter/product/graph",{params:v({},t.params,{},{max:1e3})}).then((function(e){t.graph_product=e.data.result,t.runtime=e.data.runtime,t.detail.total=e.data.result.length}));case 13:case"end":return e.stop()}}),e)})))()}},created:function(){this.params=Object.assign(this.params,this.$route.query)},beforeRouteEnter:function(t,e,r){r((function(t){t.init()}))}},x=r(35),y=r(42),C=r.n(y),w=r(189),k=r(190),$=r(51),S=r(391),O=r(406),V=r(377),j=r(65),I=r(121),P=r(186),A=r(191),E=r(393),F=r(477),T=r(394),component=Object(x.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",{class:{"pa-0":t.$vuetify.breakpoint.xsOnly}},[r("v-card-actions",{staticClass:"pa-0 my-2"},[void 0!==t.params.make?r("img",{staticClass:"mr-1",staticStyle:{height:"auto"},attrs:{src:"https://www.carlogos.org/car-logos/"+t.params.make.toLowerCase().replace(" ","-")+"-logo.png",alt:t.params.make,width:"45"}}):t._e(),t._v(" "),r("h1",{staticClass:"display-1 font-weight-bold"},[t._v(t._s(t.params.make)+" "+t._s(t.params.model))])]),t._v(" "),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{staticClass:"pa-2",attrs:{md:"4",cols:"12"}},[t.estimation.estimated_price?r("v-fade-transition",{attrs:{mode:"out-in"}},[t.display_product_anim.is_work?r("div",[void 0!==t.products[t.display_product_anim.index]?r("v-card",{staticClass:"elevation-0",attrs:{loading:!0}},[r("v-card-actions",{staticClass:"pa-2 pt-3"},[r("span",{staticClass:"headline font-weight-bold"},[t._v(t._s(t.f_numberFormat(t.display_product_anim.price,t.$t("currency"))))]),t._v(" "),r("v-spacer"),t._v(" "),r("v-progress-circular",{staticClass:"caption",attrs:{indeterminate:!1,size:40,width:2,value:100/t.products.length*(t.display_product_anim.index+1),color:t.display_product_anim.index<4?"primary":"green"}},[t._v(t._s(Math.trunc(100/t.products.length*(t.display_product_anim.index+1)))+"%")])],1),t._v(" "),void 0!==t.products[t.display_product_anim.index]?r("v-card",{staticClass:"border elevation-0 grey darken-4 text-center line-height",attrs:{tile:"",height:"200"}},[r("v-fade-transition",{attrs:{mode:"out-in"}},[r("img",{attrs:{src:t.products[Math.floor(Math.random()*this.products.length)].image[t.display_product_anim.img_index],height:"199"}})])],1):t._e()],1):t._e()],1):r("div",[r("fieldset",{staticClass:"pa-0 mb-1 price"},[t.display_product_anim.is_work?t._e():r("legend",{staticClass:"text-center mb-2"},[r("img",{staticClass:"mx-2",attrs:{src:"https://www.autovisual.com/img/top-cote.png",width:"100",alt:""}})]),t._v(" "),r("h1",{staticClass:"text-center display-2 font-weight-black mb-5"},[t._v(t._s(t.f_numberFormat(t.estimation.estimated_price,t.$t("currency"))))]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("img",{staticClass:"float-left mx-1",attrs:{width:"25",src:"https://image.flaticon.com/icons/svg/2471/2471859.svg",alt:""}}),t._v("\n                Confiance ("+t._s(t.estimation.estimation_count)+")\n                "),r("v-spacer"),t._v(" "),r("v-card",{staticClass:"mx-auto transparent elevation-0",attrs:{width:"144"}},[r("v-progress-linear",{attrs:{color:"green",value:70,rounded:"",height:"25"}})],1)],1)],1)])]):r("v-skeleton-loader",{staticClass:"mx-auto",attrs:{height:"250",type:"card-heading,image"}}),t._v(" "),r("v-card",{staticClass:"mb-2 elevation-0 transparent"},[r("v-card-actions",[r("img",{staticClass:"float-left mx-1",attrs:{width:"20",src:"https://image.flaticon.com/icons/svg/2413/2413653.svg",alt:""}}),t._v("\n            "+t._s(t.$t("year"))+"\n            "),r("v-spacer"),t._v("\n            "+t._s(t.params.year)+"\n          ")],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("img",{staticClass:"float-left mx-1",attrs:{width:"20",src:"https://image.flaticon.com/icons/svg/2040/2040880.svg",alt:""}}),t._v("\n            "+t._s(t.$t("odometer"))+"\n            "),r("v-spacer"),t._v("\n            "+t._s(t.f_numberFormat(t.params.odometer,t.$t("Km")))+"\n          ")],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("img",{staticClass:"float-left mx-1",attrs:{width:"20",src:"https://image.flaticon.com/icons/svg/2040/2040875.svg",alt:""}}),t._v("\n            "+t._s(t.$t("md_fuel_type"))+"\n            "),r("v-spacer"),t._v("\n            "+t._s(t.$t(t.params.md_fuel_type))+"\n          ")],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("img",{staticClass:"float-left mx-1",attrs:{width:"20",src:"https://image.flaticon.com/icons/svg/1789/1789180.svg",alt:""}}),t._v("\n            "+t._s(t.$t("md_gearbox"))+"\n            "),r("v-spacer"),t._v("\n            "+t._s(t.$t(t.params.md_gearbox))+"\n          ")],1),t._v(" "),t.params.m_nd_cylinder?r("v-divider"):t._e(),t._v(" "),t.params.m_nd_cylinder?r("v-card-actions",[r("img",{staticClass:"float-left mx-1",attrs:{width:"20",src:"https://image.flaticon.com/icons/svg/2472/2472671.svg",alt:""}}),t._v("\n            "+t._s(t.$t("md_cylinder"))+"\n            "),r("v-spacer"),t._v("\n            "+t._s(t.params.m_nd_cylinder)+" "+t._s(t.$t("L"))+"\n          ")],1):t._e(),t._v(" "),t.params.horsepower_n?r("v-divider"):t._e(),t._v(" "),t.params.horsepower_n?r("v-card-actions",[r("img",{staticClass:"float-left mx-1",attrs:{width:"20",src:"https://image.flaticon.com/icons/svg/2040/2040878.svg",alt:""}}),t._v("\n            "+t._s(t.$t("md_horsepower"))+"\n            "),r("v-spacer"),t._v("\n            "+t._s(t.params.horsepower_n)+" "+t._s(t.$t("CV"))+"\n          ")],1):t._e()],1),t._v(" "),r("v-card-actions",{staticClass:"pa-1"},[r("v-btn",{staticClass:"orange",attrs:{to:t.localePath({name:"car-valuation",query:t.old_params}),dark:"",text:""}},[r("v-icon",[t._v("mdi-pencil")]),t._v("\n            "+t._s(t.$t("modify"))+"\n          ")],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"facebook",attrs:{dark:"",text:""},on:{click:t.share}},[r("v-icon",[t._v("mdi-share")]),t._v("\n            "+t._s(t.$t("share"))+"\n          ")],1)],1)],1),t._v(" "),r("v-col",{staticClass:"pa-1",attrs:{cols:"12",md:"8"}},[r("v-card",{staticClass:"elevation-0 transparent"},[r("div",{staticClass:"pa-2 pb-3 tajawal body-1"},[t._v("\n            Le graphique\n            "),r("small",[t._v(t._s(t.f_numberFormat(t.estimation_ml,t.$t("currency"))))])]),t._v(" "),r("Graph",{staticClass:"pa-1",attrs:{items:t.graph_product,suffix_x:t.$t("Km"),suffix_y:t.$t("currency")}}),t._v(" "),r("div",{staticClass:"tajawal pa-2"},[r("v-icon",{attrs:{small:""}},[t._v("mdi-alert-circle-outline")]),t._v(" "),r("small",{staticClass:"tajawal"},[t._v("Visualiser et comprendre l’ensemble du marché très simplement.")])],1)],1)],1),t._v(" "),0==!t.products.length?r("v-col",{attrs:{cols:"12"}},[r("v-divider",{staticClass:"mt-3"}),t._v(" "),r("v-card-actions",[r("h2",{staticClass:"headline pa-2"},[t._v("Annonces similaires")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"float-right grey lighten-3",attrs:{color:"",text:""}},[t._v(t._s(t.$t("show_more")))])],1),t._v(" "),r("v-row",{attrs:{group:"","no-gutters":""}},t._l(t.products,(function(e){return r("v-col",{key:e.id,staticClass:"pa-2",class:{"pa-2 ":t.$vuetify.breakpoint.mdAndUp,"pa-0 px-0 py-0 grey lighten-2 pb-3":t.$vuetify.breakpoint.smAndDown},attrs:{cols:"12",md:"4"}},[r("Product",{attrs:{product:e}})],1)})),1)],1):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;C()(component,{VBtn:w.a,VCard:k.a,VCardActions:$.a,VCol:S.a,VContainer:O.a,VDivider:V.a,VFadeTransition:j.d,VIcon:I.a,VProgressCircular:P.a,VProgressLinear:A.a,VRow:E.a,VSkeletonLoader:F.a,VSpacer:T.a})}}]);