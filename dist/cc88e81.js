(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{708:function(t,e,n){"use strict";n.r(e);var r=n(262),o=n(15),d=n(538),c=n(547),l=n(164),h=n(724),m=n(537),v=(n(29),n(34),{data:function(){return{price_range:{min:0,max:1e3,value:[0,1e3]},chartOptions:{animationEnabled:!0,legend:{cursor:"pointer",itemclick:function(t){void 0===t.dataSeries.visible||t.dataSeries.visible?t.dataSeries.visible=!1:t.dataSeries.visible=!0,t.chart.render()}},data:[{showInLegend:!0,legendText:"column Test",type:"column",dataPoints:[]},{showInLegend:!0,legendText:"Line Test",type:"line",dataPoints:[]},{type:"scatter",showInLegend:!0,legendText:"Bubble Test",legendMarkerType:"circle",toolTipContent:"<b>{name}</b><br/>Life Exp: {x} yrs<br/> Fertility Rate: {y}<br/> Population: {z}mn",dataPoints:[]},{click:function(t){alert(t.dataSeries.type+", dataPoint { id:"+t.dataPoint.id+", name: "+t.dataPoint.name+" }")},type:"scatter",showInLegend:!0,legendText:"Bubble Test 2",legendMarkerType:"circle",toolTipContent:"<img style='width:100px' src='https://cdn-yams.mpi-internal.com/api/v1/tenants/dd1f88aa-e3e2-450c-9fa9-a03ea59a6bf0/domains/57a9d53a-fe30-4b6f-a4de-d624bd25134b/buckets/8f139e2f-9e74-4be3-9d30-d8f180f02fbb/images/04/0470f598-2598-4935-baad-0bdec1c4fd84?rule=progressive' /><br> <b>{name}</b><br/>Life Exp: {x} yrs<br/> Fertility Rate: {y}<br/> Population: {z}mn",dataPoints:[]}]},chart_diagram_oprions:{animationEnabled:!0,axisY:{gridThickness:0,tickLength:0,lineThickness:0,labelFormatter:function(){return" "}},data:[{type:"column",color:"#559ee2",dataPoints:[]}]},chart:null,chart_diagram:null}},methods:{initRange:function(t,e,n){this[t+"_range"].max=n,this[t+"_range"].min=e,this[t+"_range"].value=[e,n]}},mounted:function(){var t=this;this.chart=new CanvasJS.Chart("chartContainer",this.chartOptions),this.chart_diagram=new CanvasJS.Chart("chart_diagram",this.chart_diagram_oprions);var i=1;for(i=0;i<50;i++){var e=3*i,n=i*Math.pow(e,3);this.chart_diagram_oprions.data[0].dataPoints.push({x:e,y:n}),this.chart_diagram_oprions.data[0].dataPoints.push({x:e,y:n}),this.chartOptions.data[0].dataPoints.push({x:e,y:n}),n*=2,this.chartOptions.data[1].dataPoints.push({x:e,y:n}),n*=2,this.chartOptions.data[2].dataPoints.push({x:e,y:n,z:200,name:"Test"}),n*=2,this.chartOptions.data[3].dataPoints.push({x:e,y:n,id:7,name:"Test2"})}setInterval((function(){var e=3*i,n=i*Math.pow(e,3);t.chart_diagram_oprions.data[0].dataPoints.push({x:e,y:n}),t.chart_diagram.render(),i++}),1e3);var r=this.chartOptions.data[0].dataPoints[0].x,o=this.chartOptions.data[0].dataPoints[this.chartOptions.data[0].dataPoints.length-1].x;this.initRange("price",r,o),this.chart.render()}}),_=n(23),component=Object(_.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticStyle:{background:"#fafafa"}},[e(c.a,{attrs:{"grid-list-xs":""}},[e(r.a,{staticClass:"elevation-0",attrs:{flat:""}},[e(o.a,{staticClass:"pa-1"},[e("span",{staticClass:"title ml-2"},[e(l.a,[t._v("mdi-graph")]),t._v("Test Chart\n        ")],1)]),t._v(" "),e(m.a,{attrs:{"no-gutters":""}},[e(d.a,{staticClass:"pa-1",attrs:{cols:"12",md:"6"}},[e("div",{staticStyle:{height:"300px",width:"100%"},attrs:{id:"chartContainer"}})]),t._v(" "),e(d.a,{staticClass:"pa-1",attrs:{cols:"12",md:"6"}},[e(m.a,{attrs:{"no-gutters":""}},[e(d.a,{staticClass:"px-1",attrs:{cols:"4"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.price_range.value[0],expression:"price_range.value[0]"}],staticClass:"border pa-1",attrs:{type:"number",solo:"",flat:""},domProps:{value:t.price_range.value[0]},on:{input:[function(e){e.target.composing||t.$set(t.price_range.value,0,e.target.value)},function(e){return t.setPrice()}]}})]),t._v(" "),e(d.a,{staticClass:"px-1",attrs:{cols:"4"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.price_range.value[1],expression:"price_range.value[1]"}],staticClass:"border pa-1",attrs:{type:"number",solo:"",flat:""},domProps:{value:t.price_range.value[1]},on:{input:[function(e){e.target.composing||t.$set(t.price_range.value,1,e.target.value)},function(e){return t.setPrice()}]}})])],1),t._v(" "),e("div",{staticStyle:{height:"300px",width:"100%","margin-top":"-20px"},attrs:{id:"chart_diagram"}}),t._v(" "),e(h.a,{staticStyle:{"margin-top":"-24px"},attrs:{"hide-details":"",min:t.price_range.min,max:t.price_range.max},model:{value:t.price_range.value,callback:function(e){t.$set(t.price_range,"value",e)},expression:"price_range.value"}})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);