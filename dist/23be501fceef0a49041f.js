(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{411:function(t,e,n){"use strict";var r=n(129),o=n(96),c=n(130),l=n(0),h=n(6),d=Object(h.a)(r.a,Object(o.a)("windowGroup","v-window-item","v-window"));e.a=d.extend().extend().extend({name:"v-window-item",directives:{Touch:c.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(l.f)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(l.f)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}})},420:function(t,e,n){},432:function(t,e,n){"use strict";n(13),n(10),n(7),n(11),n(22),n(23),n(5),n(27),n(33);var r=n(1),o=(n(16),n(433),n(71)),c=n(64),l=n(6),h=n(119),d=n(132),v=n(0),f=n(12);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(l.a)(o.a,h.a).extend({name:"v-slider",directives:{ClickOutside:d.a},mixins:[h.a],props:{disabled:Boolean,inverseLabel:Boolean,max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:1},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:function(t){return"boolean"==typeof t||"always"===t}},thumbSize:{type:[Number,String],default:32},tickLabels:{type:Array,default:function(){return[]}},ticks:{type:[Boolean,String],default:!1,validator:function(t){return"boolean"==typeof t||"always"===t}},tickSize:{type:[Number,String],default:2},trackColor:String,trackFillColor:String,value:[Number,String],vertical:Boolean},data:function(){return{app:null,oldValue:null,keyPressed:0,isFocused:!1,isActive:!1,noClick:!1}},computed:{classes:function(){return y({},o.a.options.computed.classes.call(this),{"v-input__slider":!0,"v-input__slider--vertical":this.vertical,"v-input__slider--inverse-label":this.inverseLabel})},internalValue:{get:function(){return this.lazyValue},set:function(t){t=isNaN(t)?this.minValue:t;var e=this.roundValue(Math.min(Math.max(t,this.minValue),this.maxValue));e!==this.lazyValue&&(this.lazyValue=e,this.$emit("input",e))}},trackTransition:function(){return this.keyPressed>=2?"none":""},minValue:function(){return parseFloat(this.min)},maxValue:function(){return parseFloat(this.max)},stepNumeric:function(){return this.step>0?parseFloat(this.step):0},inputWidth:function(){return(this.roundValue(this.internalValue)-this.minValue)/(this.maxValue-this.minValue)*100},trackFillStyles:function(){var t,e=this.vertical?"bottom":"left",n=this.vertical?"top":"right",o=this.vertical?"height":"width",c=this.$vuetify.rtl?"auto":"0",l=this.$vuetify.rtl?"0":"auto",h=this.disabled?"calc(".concat(this.inputWidth,"% - 10px)"):"".concat(this.inputWidth,"%");return t={transition:this.trackTransition},Object(r.a)(t,e,c),Object(r.a)(t,n,l),Object(r.a)(t,o,h),t},trackStyles:function(){var t,e=this.vertical?this.$vuetify.rtl?"bottom":"top":this.$vuetify.rtl?"left":"right",n=this.vertical?"height":"width",o=this.disabled?"calc(".concat(100-this.inputWidth,"% - 10px)"):"calc(".concat(100-this.inputWidth,"%)");return t={transition:this.trackTransition},Object(r.a)(t,e,"0px"),Object(r.a)(t,n,o),t},showTicks:function(){return this.tickLabels.length>0||!(this.disabled||!this.stepNumeric||!this.ticks)},numTicks:function(){return Math.ceil((this.maxValue-this.minValue)/this.stepNumeric)},showThumbLabel:function(){return!(this.disabled||!this.thumbLabel&&!this.$scopedSlots["thumb-label"])},computedTrackColor:function(){if(!this.disabled)return this.trackColor?this.trackColor:this.isDark?this.validationState:this.validationState||"primary lighten-3"},computedTrackFillColor:function(){if(!this.disabled)return this.trackFillColor?this.trackFillColor:this.validationState||this.computedColor},computedThumbColor:function(){return this.thumbColor?this.thumbColor:this.validationState||this.computedColor}},watch:{min:function(t){var e=parseFloat(t);e>this.internalValue&&this.$emit("input",e)},max:function(t){var e=parseFloat(t);e<this.internalValue&&this.$emit("input",e)},value:{handler:function(t){this.internalValue=t}}},beforeMount:function(){this.internalValue=this.value},mounted:function(){this.app=document.querySelector("[data-app]")||Object(f.c)("Missing v-app or a non-body wrapping element with the [data-app] attribute",this)},methods:{genDefaultSlot:function(){var t=[this.genLabel()],e=this.genSlider();return this.inverseLabel?t.unshift(e):t.push(e),t.push(this.genProgress()),t},genSlider:function(){return this.$createElement("div",{class:y({"v-slider":!0,"v-slider--horizontal":!this.vertical,"v-slider--vertical":this.vertical,"v-slider--focused":this.isFocused,"v-slider--active":this.isActive,"v-slider--disabled":this.disabled,"v-slider--readonly":this.readonly},this.themeClasses),directives:[{name:"click-outside",value:this.onBlur}],on:{click:this.onSliderClick}},this.genChildren())},genChildren:function(){return[this.genInput(),this.genTrackContainer(),this.genSteps(),this.genThumbContainer(this.internalValue,this.inputWidth,this.isActive,this.isFocused,this.onThumbMouseDown,this.onFocus,this.onBlur)]},genInput:function(){return this.$createElement("input",{attrs:y({value:this.internalValue,id:this.computedId,disabled:this.disabled,readonly:!0,tabindex:-1},this.$attrs)})},genTrackContainer:function(){var t=[this.$createElement("div",this.setBackgroundColor(this.computedTrackColor,{staticClass:"v-slider__track-background",style:this.trackStyles})),this.$createElement("div",this.setBackgroundColor(this.computedTrackFillColor,{staticClass:"v-slider__track-fill",style:this.trackFillStyles}))];return this.$createElement("div",{staticClass:"v-slider__track-container",ref:"track"},t)},genSteps:function(){var t=this;if(!this.step||!this.showTicks)return null;var e=parseFloat(this.tickSize),n=Object(v.g)(this.numTicks+1),o=this.vertical?"bottom":"left",c=this.vertical?"right":"top";this.vertical&&n.reverse();var l=n.map((function(i){var n,l=t.$vuetify.rtl?t.maxValue-i:i,h=[];t.tickLabels[l]&&h.push(t.$createElement("div",{staticClass:"v-slider__tick-label"},t.tickLabels[l]));var d=i*(100/t.numTicks),v=t.$vuetify.rtl?100-t.inputWidth<d:d<t.inputWidth;return t.$createElement("span",{key:i,staticClass:"v-slider__tick",class:{"v-slider__tick--filled":v},style:(n={width:"".concat(e,"px"),height:"".concat(e,"px")},Object(r.a)(n,o,"calc(".concat(d,"% - ").concat(e/2,"px)")),Object(r.a)(n,c,"calc(50% - ".concat(e/2,"px)")),n)},h)}));return this.$createElement("div",{staticClass:"v-slider__ticks-container",class:{"v-slider__ticks-container--always-show":"always"===this.ticks||this.tickLabels.length>0}},l)},genThumbContainer:function(t,e,n,r,o,c,l){var h=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"thumb",d=[this.genThumb()],v=this.genThumbLabelContent(t);return this.showThumbLabel&&d.push(this.genThumbLabel(v)),this.$createElement("div",this.setTextColor(this.computedThumbColor,{ref:h,staticClass:"v-slider__thumb-container",class:{"v-slider__thumb-container--active":n,"v-slider__thumb-container--focused":r,"v-slider__thumb-container--show-label":this.showThumbLabel},style:this.getThumbContainerStyles(e),attrs:y({role:"slider",tabindex:this.disabled||this.readonly?-1:this.$attrs.tabindex?this.$attrs.tabindex:0,"aria-label":this.label,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":this.internalValue,"aria-readonly":String(this.readonly),"aria-orientation":this.vertical?"vertical":"horizontal"},this.$attrs),on:{focus:c,blur:l,keydown:this.onKeyDown,keyup:this.onKeyUp,touchstart:o,mousedown:o}}),d)},genThumbLabelContent:function(t){return this.$scopedSlots["thumb-label"]?this.$scopedSlots["thumb-label"]({value:t}):[this.$createElement("span",[String(t)])]},genThumbLabel:function(content){var t=Object(v.f)(this.thumbSize),e=this.vertical?"translateY(20%) translateY(".concat(Number(this.thumbSize)/3-1,"px) translateX(55%) rotate(135deg)"):"translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)";return this.$createElement(c.e,{props:{origin:"bottom center"}},[this.$createElement("div",{staticClass:"v-slider__thumb-label-container",directives:[{name:"show",value:this.isFocused||this.isActive||"always"===this.thumbLabel}]},[this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb-label",style:{height:t,width:t,transform:e}}),[this.$createElement("div",content)])])])},genThumb:function(){return this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb"}))},getThumbContainerStyles:function(t){var e=this.vertical?"top":"left",n=this.$vuetify.rtl?100-t:t;return n=this.vertical?100-n:n,Object(r.a)({transition:this.trackTransition},e,"".concat(n,"%"))},onThumbMouseDown:function(t){t.preventDefault(),this.oldValue=this.internalValue,this.keyPressed=2,this.isActive=!0;var e=!v.v||{passive:!0,capture:!0},n=!!v.v&&{passive:!0};"touches"in t?(this.app.addEventListener("touchmove",this.onMouseMove,n),Object(v.a)(this.app,"touchend",this.onSliderMouseUp,e)):(this.app.addEventListener("mousemove",this.onMouseMove,n),Object(v.a)(this.app,"mouseup",this.onSliderMouseUp,e)),this.$emit("start",this.internalValue)},onSliderMouseUp:function(t){t.stopPropagation(),this.keyPressed=0;var e=!!v.v&&{passive:!0};this.app.removeEventListener("touchmove",this.onMouseMove,e),this.app.removeEventListener("mousemove",this.onMouseMove,e),this.$emit("end",this.internalValue),Object(v.i)(this.oldValue,this.internalValue)||(this.$emit("change",this.internalValue),this.noClick=!0),this.isActive=!1},onMouseMove:function(t){var e=this.parseMouseMove(t).value;this.internalValue=e},onKeyDown:function(t){if(!this.disabled&&!this.readonly){var e=this.parseKeyDown(t,this.internalValue);null!=e&&(this.internalValue=e,this.$emit("change",e))}},onKeyUp:function(){this.keyPressed=0},onSliderClick:function(t){this.noClick?this.noClick=!1:(this.$refs.thumb.focus(),this.onMouseMove(t),this.$emit("change",this.internalValue))},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},parseMouseMove:function(t){var e=this.vertical?"top":"left",n=this.vertical?"height":"width",r=this.vertical?"clientY":"clientX",o=this.$refs.track.getBoundingClientRect(),c=o[e],l=o[n],h="touches"in t?t.touches[0][r]:t[r],d=Math.min(Math.max((h-c)/l,0),1)||0;this.vertical&&(d=1-d),this.$vuetify.rtl&&(d=1-d);var v=h>=c&&h<=c+l;return{value:parseFloat(this.min)+d*(this.maxValue-this.minValue),isInsideTrack:v}},parseKeyDown:function(t,e){if(!this.disabled){var n=v.r.pageup,r=v.r.pagedown,o=v.r.end,c=v.r.home,l=v.r.left,h=v.r.right,d=v.r.down,f=v.r.up;if([n,r,o,c,l,h,d,f].includes(t.keyCode)){t.preventDefault();var m=this.stepNumeric||1,y=(this.maxValue-this.minValue)/m;if([l,h,d,f].includes(t.keyCode))this.keyPressed+=1,e+=((this.$vuetify.rtl?[l,f]:[h,f]).includes(t.keyCode)?1:-1)*m*(t.shiftKey?3:t.ctrlKey?2:1);else if(t.keyCode===c)e=this.minValue;else if(t.keyCode===o)e=this.maxValue;else{e-=(t.keyCode===r?1:-1)*m*(y>100?y/10:10)}return e}}},roundValue:function(t){if(!this.stepNumeric)return t;var e=this.step.toString().trim(),n=e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0,r=this.minValue%this.stepNumeric,o=Math.round((t-r)/this.stepNumeric)*this.stepNumeric+r;return parseFloat(Math.min(o,this.maxValue).toFixed(n))}}})},433:function(t,e,n){},434:function(t,e,n){},448:function(t,e,n){"use strict";n(13),n(10),n(7),n(11),n(22),n(23),n(5);var r=n(1),o=(n(420),n(415),n(55)),c=n(71),l=n(416);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=l.a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return d({},c.a.options.computed.classes.call(this),{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.disabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(o.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",d({},this.attrs$,{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},449:function(t,e,n){"use strict";n(13),n(10),n(7),n(5),n(11);var r=n(1),o=n(96),c=n(72),l=n(0),h=n(6);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(h.a)(Object(o.a)("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(c.b)("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(t){this.content=t},unregisterContent:function(){this.content=null},registerHeader:function(t){this.header=t,t.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(t){t.detail&&this.header.$el.blur(),this.$emit("click",t),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var t=this;this.content&&(this.content.isBooted=!0),this.$nextTick((function(){return t.$emit("change")}))}},render:function(t){return t("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(l.n)(this))}})},450:function(t,e,n){"use strict";var r=n(64),o=n(129),c=n(18),l=n(72),h=n(0),d=n(6),v=Object(d.a)(o.a,c.a,Object(l.a)("expansionPanel","v-expansion-panel-content","v-expansion-panel"));e.a=v.extend().extend({name:"v-expansion-panel-content",computed:{isActive:function(){return this.expansionPanel.isActive}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(t){var e=this;return t(r.a,this.showLazyContent((function(){return[t("div",e.setBackgroundColor(e.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:e.isActive}]}),[t("div",{class:"v-expansion-panel-content__wrap"},Object(h.n)(e))])]})))}})},451:function(t,e,n){"use strict";n(13),n(10),n(7),n(5),n(11);var r=n(1),o=n(64),c=n(55),l=n(18),h=n(72),d=n(60),v=n(0),f=n(6);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w=Object(f.a)(l.a,Object(h.a)("expansionPanel","v-expansion-panel-header","v-expansion-panel"));e.a=w.extend().extend({name:"v-expansion-panel-header",directives:{ripple:d.a},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(t){this.$emit("click",t)},genIcon:function(){var t=Object(v.n)(this,"actions")||[this.$createElement(c.a,this.expandIcon)];return this.$createElement(o.d,[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},t)])}},render:function(t){var e=this;return t("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button"},directives:[{name:"ripple",value:this.ripple}],on:y({},this.$listeners,{click:this.onClick,mousedown:function(){return e.hasMousedown=!0},mouseup:function(){return e.hasMousedown=!1}})}),[Object(v.n)(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},473:function(t,e,n){"use strict";n(13),n(10),n(7),n(5),n(11);var r=n(1),o=(n(415),n(434),n(416)),c=n(71),l=n(130),h=n(64),d=n(166),v=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-switch",directives:{Touch:l.a},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return m({},c.a.options.computed.classes.call(this),{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.disabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",m({},this.attrs,{},this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",m({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",m({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(h.c,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(d.a,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===v.r.left&&this.isActive||t.keyCode===v.r.right&&!this.isActive)&&this.onChange()}}})}}]);