(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{409:function(e,t,n){"use strict";n(43),n(22),n(23),n(5);var r={props:{datetime:{default:"1587352244"},locale:{default:"fr"}},data:function(){return{counterInterval:null,date:"",locales:{fr:{prefix:"il y a ",suffix:"",seconds:"%d secondes",minute:"une minute",minutes:"%d minutes",hour:"une heure",hours:"%d heures",day:"un jour",days:"%d jours",month:"un mois",months:"%d mois",year:"un an",years:"%d années"},ar:{prefix:"",suffix:"",seconds:" %d arab",minute:"Environ une arab",minutes:"%d arab",hour:"Environ une heure",hours:"%d heures",day:"un arab",days:"%d jours",month:"environ un arab",months:"%d mois",year:"environ un an",years:"%d années"}}}},watch:{local:function(e){this.date=this.timer(this.datetime)}},methods:{timer:function(time){if(time){time=(time=(time=(time=(time=time.toString()).replace(/\.\d+/,"")).replace(/-/,"/").replace(/-/,"/")).replace(/T/," ").replace(/Z/," UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),time=new Date(1e3*time||time);var e=.001*((new Date).getTime()-time)>>0,t=e/60,n=t/60,r=n/24,l=r/365;return this.locales[this.locale].prefix+(e<45&&this.template("seconds",e)||e<90&&this.template("minute",1)||t<45&&this.template("minutes",t)||t<90&&this.template("hour",1)||n<24&&this.template("hours",n)||n<42&&this.template("day",1)||r<30&&this.template("days",r)||r<45&&this.template("month",1)||r<365&&this.template("months",r/30)||l<1.5&&this.template("year",1)||this.template("years",l))+this.locales[this.locale].suffix}},template:function(e,t){return this.locales[this.locale][e]&&this.locales[this.locale][e].replace(/%d/i,Math.abs(Math.round(t)))}},created:function(){var e=this;this.date=this.timer(this.datetime),this.counterInterval=setInterval((function(){e.date=e.timer(e.datetime)}),1e3)},destoyed:function(){clearInterval(this.counterInterval)}},l=n(35),component=Object(l.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("span",[this._v(this._s(this.date))])}),[],!1,null,null,null);t.a=component.exports},482:function(e,t,n){"use strict";n.r(t);var r={components:{TimeAgo:n(409).a},mounted:function(){this.$method.f_print()}},l=n(35),component=Object(l.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("TimeAgo")],1)}),[],!1,null,null,null);t.default=component.exports}}]);