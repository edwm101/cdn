(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{438:function(t,e,r){"use strict";var n={props:{value:{},text:{},color:{}},data:function(){return{value_rest:0}},created:function(){this.value_rest=Math.abs(5-this.value)}},o=r(20),c=r(23),l=r.n(c),d=r(128),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("client-only",[r("span",{staticClass:"progress caption font-weight-bold pl-0"},[t._l(t.value,(function(i,e){return r("v-icon",{key:"d"+e,style:{color:t.color},attrs:{small:""}},[t._v("mdi-steering")])})),t._v(" "),t._l(t.value_rest,(function(i,e){return r("v-icon",{key:"db"+e,staticStyle:{color:"#d9d9d9"},attrs:{small:""}},[t._v("mdi-steering")])})),t._v(" "),r("span",{staticStyle:{"font-size":"11px"},style:{color:t.color}},[t._v(t._s(t.text))])],2)])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VIcon:d.a})},439:function(t,e,r){},440:function(t,e,r){},441:function(t,e,r){"use strict";r(49),r(38);var n=r(438),o=r(220),c=r(219),l={components:{Indicator:n.a,Favorite:o.a,TimeAgo:c.a},props:{product:{dafault:[]}},data:function(){return{image_index:0,is_show_phone:!1,isActive:!1}},computed:{color:function(){return this.product.price_description?this.$t("COLOR_"+this.product.price_description):(this.product.price_median,"green")},description:function(){return this.product.description?((this.product.title||" ").replace("- Tayara","")!=this.product.make+" "+this.product.model?"<b>"+(this.product.title||" ").replace("- Tayara","")+"</b> - ":"")+(this.product.description||" ").split("\\n").join(" ").replace(/<\/?[^>]+(>|$)/g,""):(this.product.title||" ").replace("- Tayara","")!=this.product.make+" "+this.product.model?"<b>"+(this.product.title||" ").replace("- Tayara","")+"</b>":""}},methods:{share:function(){var t="https://www.autoprix.tn"+this.$router.resolve(this.localePath({name:"car-id",params:{id:this.product.url_id}})).href;this.$store.commit("layout/share",{is_open:!0,url:t,title:this.product.make+" "+this.product.model})}},created:function(){}},d=r(20),h=r(23),m=r.n(h),v=r(203),f=r(198),_=r(199),y=r(18),C=r(451),x=r(452),w=r(415),O=r(128),k=r(130),$=r(76),j=r(416),V=r(417),D=r(453),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"elevation-0",attrs:{tile:t.$vuetify.breakpoint.smAndDown}},[r("v-list-item",{staticClass:"pa-1 px-1 pr-2"},[r("v-avatar",{staticClass:"mx-2",attrs:{left:"",size:"35",color:t.color}},[r("span",{staticClass:"white--text headline capitalize"},[t._v(t._s(t.product.seller[0]))])]),t._v(" "),r("v-list-item-content",{staticClass:"py-0 pb-0"},[r("h4",{staticClass:"font-weight-bold body-2 mb-0 capitalize"},[t._v(t._s(t.product.seller))]),t._v(" "),r("v-list-item-title",{staticClass:"caption"},[r("client-only",[r("time-ago",{attrs:{datetime:t.product.last_updated,locale:t.$i18n.locale}}),t._v(",\n        ")],1),t._v("\n        "+t._s(t.$t(t.product.governorate))+t._s(t.product.city?", "+t.$t(t.product.city):"")+"\n      ")],1)],1),t._v(" "),r("client-only",[1==t.product.is_sold?r("v-btn",{staticClass:"warning elevation-0 mr-1 is_ltr",attrs:{depressed:"",dark:""}},[r("v-icon",[t._v("mdi-alert-circle-outline")]),t._v(" "),r("span",{staticClass:"ml-1"},[t._v("Vendue")])],1):t._e(),t._v(" "),r("span",{staticClass:"float-right",staticStyle:{position:"relative","z-index":"2"}},[r("v-btn",{staticClass:" px-0",attrs:{depressed:"",icon:""},on:{click:t.share}},[r("v-icon",{attrs:{title:"Partagez la voiture directement"}},[t._v("mdi-share")])],1),t._v(" "),r("Favorite",{staticClass:" px-0",attrs:{icon:"",product_id:t.product.id}})],1)],1)],1),t._v(" "),r("div",{staticClass:"grey darken-5"},[r("span",{staticClass:"image_thumb_imfo grey darken-4 border-radius px-1 grey--text"},[t._v("\n      "+t._s(t.image_index+1)+"/"+t._s(t.product.image.length)+"\n      "),r("v-icon",{staticClass:"grey--text"},[t._v("mdi-camera")])],1),t._v(" "),r("v-card",{staticClass:"black elevation-0",attrs:{"min-height":t.$vuetify.breakpoint.smAndDown?"220":"200",tile:""}},[r("client-only",[r("v-carousel",{attrs:{continuous:!0,"show-arrows":t.product.image.length>1,"hide-delimiter-background":"",cycle:!1,"hide-delimiters":"",height:t.$vuetify.breakpoint.smAndDown?"220":"200"},model:{value:t.image_index,callback:function(e){t.image_index=e},expression:"image_index"}},t._l(t.product.image,(function(img,i){return r("v-carousel-item",{key:i},[r("nuxt-link",{attrs:{to:t.localePath({name:"car-id",params:{id:t.product.url_id}})}},[r("div",{staticClass:"align-self-cente grey darken-4 height-100"},[r("img",{staticClass:"center-in",attrs:{src:img,alt:"Carte voiture "+t.product.make+" "+t.product.model}})])])],1)})),1)],1)],1)],1),t._v(" "),r("nuxt-link",{staticClass:"black--text",attrs:{to:t.localePath({name:"car-id",params:{id:t.product.url_id}})}},[r("v-list-item-content",{staticClass:"pa-1 px-2"},[r("v-card-actions",{staticClass:"pa-0 mb-0"},[r("h1",{staticClass:"font-weight-black title"},[t._v(t._s(t.product.make)+" "+t._s(t.product.model))]),t._v(" "),r("v-spacer"),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([t.product.price_median?{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"float-right",style:{"background-color":t.color},attrs:{small:"",icon:""}},"v-btn",o,!1),n),[t.product.price_description?r("v-icon",{staticClass:"white--text"},[t._v(t._s(t.$t("ICON_"+t.product.price_description)))]):r("v-icon",{staticClass:"white--text"},[t._v("mdi-cash")])],1)]}}:null],null,!0)},[t._v(" "),t.product.price?r("span",[t._v("\n            "+t._s(t.product.price-t.product.price_median>=0?"+":"-")+"\n            "+t._s(t.f_numberFormat(Math.abs(t.product.price-t.product.price_median),t.$t("currency")))+"\n            par rapport au prix du marché\n          ")]):r("span",[t._v(t._s(t.f_numberFormat(t.product.price_median,t.$t("currency"))))])])],1),t._v(" "),r("v-card-actions",{staticClass:"pa-0"},[r("h3",{staticClass:"title font-weight-black"},[t._v(t._s(t.f_numberFormat(t.product.price,t.$t("currency"))))]),t._v(" "),r("v-spacer"),t._v(" "),t.product.price_description&&0!=t.product.price?r("div",{staticClass:"body-2 text-right font-weight-bold"},[t._v(t._s(t.$t(t.product.price_description)))]):t.product.price_median?r("div",{staticClass:"body-2 text-right font-weight-bold"},[t._v("Voir l'estimation")]):t._e()],1)],1),t._v(" "),r("v-list-item",{staticClass:"px-2",style:{"min-height":t.$vuetify.breakpoint.smAndDown?"":"40px"},attrs:{"three-line":""}},[null!=t.description?r("v-list-item-subtitle",{staticClass:"caption capitalize",class:t.isArabic(t.description)?"is_rtl":"",domProps:{innerHTML:t._s(t.description)}}):t._e()],1),t._v(" "),r("v-row",{staticClass:"ma-0 mt-1 card-detail text-center",attrs:{"no-gutters":""}},[r("v-col",{staticClass:"pb-1 font-weight-bold caption",attrs:{cols:"4"}},[t._v(t._s(t.product.year?t.product.year:t.$t("NC")))]),t._v(" "),r("v-col",{staticClass:"pb-1 font-weight-bold caption",attrs:{cols:"4"}},[t._v(t._s(t.product.odometer?t.f_numberFormat(t.product.odometer,t.$t("Km")):t.$t("NC")))]),t._v(" "),r("v-col",{staticClass:"pb-1 font-weight-bold caption",attrs:{cols:"4"}},[t._v(t._s(t.product.fuel_type?t.product.fuel_type:t.$t("NC")))])],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;m()(component,{VAvatar:v.a,VBtn:f.a,VCard:_.a,VCardActions:y.a,VCarousel:C.a,VCarouselItem:x.a,VCol:w.a,VIcon:O.a,VListItem:k.a,VListItemContent:$.a,VListItemSubtitle:$.b,VListItemTitle:$.c,VRow:j.a,VSpacer:V.a,VTooltip:D.a})},442:function(t,e,r){},443:function(t,e,r){"use strict";r(25),r(26),r(5);var n=r(78),o=r(444),c=r(445),l=r(6);e.a=Object(l.a)(n.a,o.a,c.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(r){return t.valueComparator(r,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.disabled||this.validationState?this.validationState:"primary"}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=this,label=n.a.options.methods.genLabel.call(this);return label?(label.data.on={click:function(e){e.preventDefault(),t.onChange()}},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var r=input.length;(input=input.filter((function(r){return!t.valueComparator(r,e)}))).length===r&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})},444:function(t,e,r){"use strict";var n=r(57),o=r(2);e.a=o.a.extend({name:"rippleable",directives:{ripple:n.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),data.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",data)):null},onChange:function(){}}})},445:function(t,e,r){"use strict";var n=r(2),o=r(0);e.a=n.a.extend({name:"comparable",props:{valueComparator:{type:Function,default:o.i}}})},451:function(t,e,r){"use strict";r(14),r(10),r(8),r(5),r(11);var n=r(1),o=(r(17),r(439),r(175)),c=r(62),l=r(37),d=r(139),h=r(221),m=r(0),v=r(13);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=o.a.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},o.a.options.computed.classes.call(this),{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(v.a)("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:o.a.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,r=[],i=0;i<e;i++){var n=this.$createElement(c.a,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(l.a,{props:{size:18}},this.delimiterIcon)]);r.push(n)}return this.$createElement(h.a,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},r)},genProgress:function(){return this.$createElement(d.a,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=o.a.options.render.call(this,t);return e.data.style="height: ".concat(Object(m.f)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},452:function(t,e,r){"use strict";r(14),r(10),r(8),r(5),r(11);var n=r(1),o=r(397),c=r(278),l=r(6),d=r(0),h=r(53);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=Object(l.a)(o.a,h.a);e.a=f.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(c.a,{staticClass:"v-carousel__item",props:v({},this.$attrs,{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(d.n)(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,data=t.data;return data.staticClass="v-window-item",data.directives.push({name:"show",value:this.isActive}),this.$createElement(e,data,this.genDefaultSlot())}}})},453:function(t,e,r){"use strict";var n=r(1),o=(r(17),r(440),r(94)),c=r(19),l=r(140),d=r(141),h=r(142),m=r(176),v=r(29),f=r(0),_=r(13),y=r(6);e.a=Object(y.a)(c.a,l.a,d.a,h.a,m.a,v.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,r=!(this.bottom||this.left||this.top||this.right),n=!1!==this.attach?e.offsetLeft:e.left,o=0;return this.top||this.bottom||r?o=n+e.width/2-content.width/2:(this.left||this.right)&&(o=n+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(o,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,r=!1!==this.attach?e.offsetTop:e.top,n=0;return this.top||this.bottom?n=r+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(n=r+e.height/2-content.height/2),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(n+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(f.f)(this.maxWidth),minWidth:Object(f.f)(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(f.o)(this,"activator",!0)&&Object(_.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=o.a.options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===f.r.esc&&(t.getActivator(e),t.runDelay("close"))},e},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(n.a)(t,this.contentClass,!0),Object(n.a)(t,"menuable__content__active",this.isActive),Object(n.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},474:function(t,e,r){t.exports=r.p+"img/1e2d9ac.jpg"},505:function(t,e,r){t.exports=r.p+"img/1bafba5.png"},550:function(t,e,r){"use strict";r.r(e);r(14),r(10),r(8),r(5),r(11),r(38);var n=r(1),o=(r(31),r(9)),c=r(438),l=r(441),d=r(485),h=r(467),m=r(484),v=r(461);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={components:{Indicator:c.a,Number:v.a,Product:l.a,Column:d.a,Histogram:h.a,Graph:m.a},data:function(){return{years:[],is_no_result:!1,graph_product:{},products:{},detail:{},estimation_ml:0,estimation:{},display_product_anim:{is_work:!0,index:0,price:0,img_index:0},old_params:{},params:{}}},computed:{conf_color:function(){switch(!0){case this.estimation.confidence<20:return{color:"red",text:"Très faible"};case this.estimation.confidence>=20&&this.estimation.confidence<40:return{color:"orange",text:"Faible"};case this.estimation.confidence>=40&&this.estimation.confidence<60:return{color:"green",text:"Moyenne"};case this.estimation.confidence>=60&&this.estimation.confidence<80:return{color:"success",text:"Élevée"};case this.estimation.confidence>=80&&this.estimation.confidence<=100:return{color:"success",text:"Très élevée"}}return"green"}},head:function(){return{title:this.meta.title,meta:[{hid:"description",name:"description",content:this.meta.description},{hid:"og:title",property:"og:title",content:this.meta.title+" - autoprix.tn"},{hid:"og:description",property:"og:description",content:this.meta.description},{hid:"og:image",property:"og:image",content:r(474)}]}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,title;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.store,r=t.query,t.app,title="Cote "+r.make,void 0!==r.model&&(title+=" "+r.model),"Évaluer la valeur d’une voiture occasion en Tunisie et calculer sa cote ou Argus avant d’acheter et vendre au meilleur prix.​",e.abrupt("return",{meta:{title:title,description:"Évaluer la valeur d’une voiture occasion en Tunisie et calculer sa cote ou Argus avant d’acheter et vendre au meilleur prix.​"}});case 5:case"end":return e.stop()}}),e)})))()},methods:{onHistoChange:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;!isNaN(t)&&t?(this.params["min_"+e]=t-2*r,this.params["max_"+e]=t):(delete this.params.min_price,delete this.params.max_price,delete this.params.min_year,delete this.params.max_year,delete this.params.min_odometer,delete this.params.max_odometer)},share:function(){this.$store.commit("layout/share",{is_open:!0,url:window.location.href,title:this.meta.title})},init:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(JSON.stringify(t.old_params)===JSON.stringify(t.$route.query)){e.next=22;break}return t.is_no_result=!1,t.f_goToUp(),t.params=Object.assign(t.params,t.$route.query),t.old_params=_({},t.$route.query),t.$api.get("public/filter/product/graph",{params:_({},{make:t.params.make,model:t.params.model},{},{max:1e3})}).then((function(e){t.graph_product=e.data.result,t.runtime=e.data.runtime,t.detail.total=e.data.result.length})),r={},t.params.odometer&&(t.params.odometer=parseFloat(t.params.odometer.replace(" ",""))),r.min_year=parseInt(t.params.year),r.max_year=parseInt(t.params.year),r.max=12,e.prev=11,"",t.display_product_anim.is_work=!0,e.next=16,t.$api.get("public/valiation/predict",{params:_({},t.params,{},{recaptcha_token:""})}).then(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(r){var i,n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.estimation=r.data.result,"NO_RESULT"==t.estimation.status&&(t.is_no_result=!0),t.products=r.data.result.products,t.detail=r.data.detail,i=0;case 5:if(!(i<t.products.length)){e.next=25;break}t.display_product_anim.index=i,n=0;case 8:if(!(n<2)){e.next=22;break}o=0;case 10:if(!(o<t.products[i].image.length)){e.next=19;break}return(c=t.products[Math.floor(Math.random()*(t.products.length-1))].price)&&(t.display_product_anim.price=c),t.display_product_anim.img_index=o,e.next=16,t.f_sleep(40);case 16:o++,e.next=10;break;case 19:n++,e.next=8;break;case 22:i++,e.next=5;break;case 25:return t.display_product_anim.price=t.estimation.price_median,e.next=28,t.f_sleep(1e3);case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.is_no_result=!0}));case 16:t.display_product_anim.is_work=!1,e.next=22;break;case 19:e.prev=19,e.t0=e.catch(11),t.is_no_result=!0;case 22:case"end":return e.stop()}}),e,null,[[11,19]])})))()}},created:function(){this.params=Object.assign(this.params,this.$route.query)},mounted:function(){this.init()},beforeRouteEnter:function(t,e,r){r((function(t){t.init()}))}},C=r(20),x=r(23),w=r.n(x),O=r(198),k=r(199),$=r(18),j=r(415),V=r(435),D=r(399),T=r(71),A=r(128),P=r(194),S=r(200),I=r(416),E=r(420),B=r(417),component=Object(C.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{class:{"pa-0":t.$vuetify.breakpoint.xsOnly}},[n("v-card-actions",{staticClass:"pa-0 my-2"},[void 0!==t.params.make?n("img",{staticClass:"mx-2 white stripe-btn pa-2 px-1 border-radius",staticStyle:{height:"auto"},attrs:{src:"https://www.carlogos.org/car-logos/"+t.params.make.toLowerCase().replace(" ","-")+"-logo.png",alt:t.params.make,width:"50"}}):t._e(),t._v(" "),n("h1",{staticClass:"display-1 font-weight-bold"},[t._v(t._s(t.params.make)+" "+t._s(t.params.model))])]),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pa-2",attrs:{md:"4",cols:"12"}},[t.is_no_result?[n("div",{staticClass:"pa-2 stripe-btn mb-2 font-weight-bold text-center white border-radius"},[n("v-icon",{staticClass:"red--text"},[t._v("mdi-alert-circle-outline")]),t._v("\n            Estimation indisponible car nous n'avons pas assez d'annonces pour "+t._s(t.params.make)+" "+t._s(t.params.model)+" "+t._s(t.params.year)+"\n          ")],1)]:[t.estimation.price_median&&0!=t.estimation.price_median?[n("v-fade-transition",{attrs:{mode:"out-in"}},[t.display_product_anim.is_work?n("div",[void 0!==t.products[t.display_product_anim.index]?n("v-card",{staticClass:"elevation-0",attrs:{loading:!0}},[n("v-card-actions",{staticClass:"pa-2 pt-3"},[n("span",{staticClass:"headline font-weight-bold"},[t._v(t._s(t.f_numberFormat(t.display_product_anim.price,t.$t("currency"))))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-progress-circular",{staticClass:"caption",attrs:{indeterminate:!1,size:40,width:2,value:100/t.products.length*(t.display_product_anim.index+1),color:t.display_product_anim.index<4?"primary":"green"}},[t._v(t._s(Math.trunc(100/t.products.length*(t.display_product_anim.index+1)))+"%")])],1),t._v(" "),void 0!==t.products[t.display_product_anim.index]?n("v-card",{staticClass:"border elevation-0 grey darken-4 text-center line-height",attrs:{tile:"",height:"200"}},[n("v-fade-transition",{attrs:{mode:"out-in"}},[n("img",{attrs:{src:t.products[Math.floor(Math.random()*this.products.length)].image[t.display_product_anim.img_index],height:"199"}})])],1):t._e()],1):t._e()],1):n("div",[n("fieldset",{staticClass:"pa-0 mb-1 white"},[t.display_product_anim.is_work?t._e():n("legend",{staticClass:"text-center mb-0"},[n("img",{staticClass:"mx-2",attrs:{src:r(505),width:"100",alt:""}})]),t._v(" "),n("h3",{staticClass:"text-center display-2 font-weight-black my-5 mt-2"},[n("number",{attrs:{height:53,to:t.f_numberFormat(t.estimation.price_median,t.$t("currency"))}})],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("img",{staticClass:"float-left mx-1",attrs:{width:"25",src:"https://image.flaticon.com/icons/svg/2471/2471859.svg",alt:""}}),t._v("\n                    Confiance ("+t._s(t.conf_color.text)+")\n                    "),n("v-spacer"),t._v(" "),n("v-card",{staticClass:"mx-auto transparent elevation-0",attrs:{width:"144"}},[n("v-progress-linear",{attrs:{color:t.conf_color.color,value:t.estimation.confidence,rounded:"",height:"25"}},[n("span",{staticClass:"white--text"})])],1)],1),t._v(" "),void 0===t.estimation.precision_features||t.estimation.precision_features.includes("o")&&t.estimation.precision_features.includes("f")&&t.estimation.precision_features.includes("g")?t._e():n("div",{staticClass:"caption pa-2 ma-2 mt-0 grey lighten-4"},[t._v("\n                    Afin de garantir un nombre minimum d'annonces, nous n'avons pas pu utiliser les paramètres suivants :\n                    "),n("ul",{staticClass:"font-weight-bold"},[t.estimation.precision_features.includes("g")?t._e():n("li",[t._v(t._s(t.$t("md_gearbox")))]),t._v(" "),t.estimation.precision_features.includes("f")?t._e():n("li",[t._v(t._s(t.$t("md_fuel_type")))]),t._v(" "),t.estimation.precision_features.includes("o")?t._e():n("li",[t._v(t._s(t.$t("odometer")))])])])],1)])])]:n("v-skeleton-loader",{staticClass:"mx-auto",attrs:{height:"250",type:"card-heading,image"}})],t._v(" "),n("v-card",{staticClass:"mb-2 elevation-0 transparent"},[n("v-card-actions",[n("img",{staticClass:"float-left mx-1",attrs:{width:"20",src:"https://image.flaticon.com/icons/svg/2413/2413653.svg",alt:""}}),t._v("\n            "+t._s(t.$t("year"))+"\n            "),n("v-spacer"),t._v("\n            "+t._s(t.params.year)+"\n          ")],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",{style:{"text-decoration":void 0===t.estimation.precision_features||t.estimation.precision_features.includes("o")?"":"line-through"}},[n("img",{staticClass:"float-left mx-1",attrs:{width:"20",src:"https://image.flaticon.com/icons/svg/2040/2040880.svg",alt:""}}),t._v("\n            "+t._s(t.$t("odometer"))+"\n            "),n("v-spacer"),t._v("\n            "+t._s(t.f_numberFormat(t.params.odometer,t.$t("Km")))+"\n          ")],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",{style:{"text-decoration":void 0===t.estimation.precision_features||t.estimation.precision_features.includes("f")?"":"line-through"}},[n("img",{staticClass:"float-left mx-1",attrs:{width:"20",src:"https://image.flaticon.com/icons/svg/2040/2040875.svg",alt:""}}),t._v("\n            "+t._s(t.$t("md_fuel_type"))+"\n            "),n("v-spacer"),t._v("\n            "+t._s(t.$t(t.params.md_fuel_type))+"\n          ")],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",{style:{"text-decoration":void 0===t.estimation.precision_features||t.estimation.precision_features.includes("g")?"":"line-through"}},[n("img",{staticClass:"float-left mx-1",attrs:{width:"20",src:"https://image.flaticon.com/icons/svg/1789/1789180.svg",alt:""}}),t._v("\n            "+t._s(t.$t("md_gearbox"))+"\n            "),n("v-spacer"),t._v("\n            "+t._s(t.$t(t.params.md_gearbox))+"\n          ")],1)],1),t._v(" "),n("v-card-actions",{staticClass:"pa-1"},[n("v-btn",{staticClass:"green",attrs:{to:t.localePath({name:"car-valuation",query:t.old_params}),dark:"",text:""}},[n("v-icon",{staticClass:"mx-1"},[t._v("mdi-pencil")]),t._v("Modifier\n          ")],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"facebook",attrs:{dark:"",text:""},on:{click:t.share}},[n("v-icon",{staticClass:"mx-1"},[t._v("mdi-share")]),t._v("Partager\n          ")],1)],1)],2),t._v(" "),Object.keys(t.graph_product).length>0?n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-card",{staticClass:"elevation-0 mt-2 ma-1"},[n("client-only",[n("Graph",{staticClass:"pa-1",attrs:{items:t.graph_product,suffix_x:t.$t("Km"),suffix_y:t.$t("currency")}})],1),t._v(" "),n("div",{staticClass:"tajawal pa-2"},[n("v-icon",{attrs:{small:""}},[t._v("mdi-alert-circle-outline")]),t._v(" "),n("small",{staticClass:"tajawal"},[t._v("Visualiser et comprendre l’ensemble du marché très simplement.")])],1)],1)],1):t._e(),t._v(" "),0==!t.products.length?n("v-col",{attrs:{cols:"12"}},[n("v-row",{attrs:{group:"","no-gutters":""}},t._l(t.products,(function(e){return n("v-col",{key:e.id,staticClass:"pa-2",class:{"pa-2 ":t.$vuetify.breakpoint.mdAndUp,"pa-0 px-0 py-0 grey lighten-2 pb-3":t.$vuetify.breakpoint.smAndDown},attrs:{cols:"12",md:"4"}},[n("Product",{attrs:{product:e}})],1)})),1)],1):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;w()(component,{VBtn:O.a,VCard:k.a,VCardActions:$.a,VCol:j.a,VContainer:V.a,VDivider:D.a,VFadeTransition:T.d,VIcon:A.a,VProgressCircular:P.a,VProgressLinear:S.a,VRow:I.a,VSkeletonLoader:E.a,VSpacer:B.a})}}]);