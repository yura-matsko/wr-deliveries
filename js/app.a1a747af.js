(function(e){function t(t){for(var n,o,i=t[0],l=t[1],c=t[2],v=0,u=[];v<i.length;v++)o=i[v],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&u.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(u.length)u.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==s[l]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},s={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/wr-deliveries/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1355:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-main",[a("HelloWorld")],1)],1)},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{staticClass:"fill-height"},[a("v-col",[a("v-sheet",{staticClass:"d-flex",attrs:{tile:"",height:"54"}},[a("v-btn",{staticClass:"ma-2",attrs:{icon:""},on:{click:function(t){return e.$refs.calendar.prev()}}},[a("v-icon",[e._v("mdi-chevron-left")])],1),a("v-text-field",{staticClass:"ma-2",attrs:{items:e.modes,dense:"",outlined:"","hide-details":"",label:"Transaktion"},model:{value:e.mode,callback:function(t){e.mode=t},expression:"mode"}}),a("v-select",{staticClass:"ma-2",attrs:{items:e.types,dense:"",outlined:"","hide-details":"",label:"Altpapiersorte"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}}),a("v-select",{staticClass:"ma-2",attrs:{items:e.weekdays,dense:"",outlined:"","hide-details":"",label:"Station"},model:{value:e.weekday,callback:function(t){e.weekday=t},expression:"weekday"}}),a("v-select",{staticClass:"ma-2",attrs:{items:e.weekdays,dense:"",outlined:"","hide-details":"",label:"Status"},model:{value:e.weekday,callback:function(t){e.weekday=t},expression:"weekday"}}),a("v-select",{staticClass:"ma-2",attrs:{items:e.weekdays,dense:"",outlined:"","hide-details":"",label:"Handelspartner"},model:{value:e.weekday,callback:function(t){e.weekday=t},expression:"weekday"}}),a("v-select",{staticClass:"ma-2",attrs:{items:e.weekdays,dense:"",outlined:"","hide-details":"",label:"Ladestation"},model:{value:e.weekday,callback:function(t){e.weekday=t},expression:"weekday"}}),a("v-select",{staticClass:"ma-2",attrs:{items:e.weekdays,dense:"",outlined:"","hide-details":"",label:"Zielstation"},model:{value:e.weekday,callback:function(t){e.weekday=t},expression:"weekday"}}),a("v-spacer"),a("v-btn",{staticClass:"ma-2",attrs:{icon:""},on:{click:function(t){return e.$refs.calendar.next()}}},[a("v-icon",[e._v("mdi-chevron-right")])],1)],1),a("v-sheet",{attrs:{height:"64"}},[a("v-toolbar",{attrs:{flat:""}},[a("v-btn",{staticClass:"mr-4",attrs:{outlined:"",color:"grey darken-2"},on:{click:e.setToday}},[e._v("Today")]),a("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:e.prev}},[a("v-icon",{attrs:{small:""}},[e._v("mdi-chevron-left")])],1),a("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:e.next}},[a("v-icon",{attrs:{small:""}},[e._v("mdi-chevron-right")])],1),e.$refs.calendar?a("v-toolbar-title",[e._v(" "+e._s(e.$refs.calendar.title)+" ")]):e._e(),a("v-spacer"),a("v-menu",{attrs:{bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,s=t.attrs;return[a("v-btn",e._g(e._b({attrs:{outlined:"",color:"grey darken-2"}},"v-btn",s,!1),n),[a("span",[e._v(e._s(e.typeToLabel[e.type]))]),a("v-icon",{attrs:{right:""}},[e._v("mdi-menu-down")])],1)]}}])},[a("v-list",[a("v-list-item",{on:{click:function(t){e.type="day"}}},[a("v-list-item-title",[e._v("Tag")])],1),a("v-list-item",{on:{click:function(t){e.type="week"}}},[a("v-list-item-title",[e._v("Woche")])],1),a("v-list-item",{on:{click:function(t){e.type="month"}}},[a("v-list-item-title",[e._v("Monat")])],1)],1)],1)],1)],1),a("v-sheet",{staticClass:"wuup"},[a("v-calendar",{ref:"calendar",attrs:{color:"primary",events:e.events,"event-color":e.getEventColor,type:e.type,locale:"de","show-week":!0},on:{"click:event":e.showEvent,"click:more":e.viewDay,"click:date":e.viewDay,change:e.updateRange},scopedSlots:e._u([{key:"day",fn:function(t){var n=t.date;return[6!==new Date(n).getDay()&&0!==new Date(n).getDay()?[a("div",{staticClass:"test"},[a("div",{staticClass:"v-event v-event-start v-event-end white--text",staticStyle:{height:"20px",width:"95%","margin-bottom":"1px","background-color":"rgb(0, 175, 125)","border-color":"rgb(0, 175, 125)"},attrs:{"data-date":"2020-10-06"}},[a("div",{staticClass:"pl-1"},[a("span",[e._v("Offen / nicht geplant")]),a("span",[e._v(e._s(e.rnd(10,100)))])])]),a("div",{staticClass:"v-event v-event-start v-event-end white--text",staticStyle:{height:"20px",width:"95%","margin-bottom":"1px","background-color":"rgb(35, 145, 225)","border-color":"rgb(35, 145, 225)"},attrs:{"data-date":"2020-10-06"}},[a("div",{staticClass:"pl-1"},[a("span",[e._v("Geplant")]),a("span",[e._v(e._s(e.rnd(10,100)))])])]),a("div",{staticClass:"v-event v-event-start v-event-end white--text",staticStyle:{height:"20px",width:"95%","margin-bottom":"1px","background-color":"rgb(0, 70, 110)","border-color":"rgb(0, 70, 110)"},attrs:{"data-date":"2020-09-30"}},[a("div",{staticClass:"pl-1"},[a("span",[e._v("Gewogen / Abgeladen")]),a("span",[e._v(e._s(e.rnd(10,100)))])])]),a("div",{staticClass:"v-event v-event-start v-event-end orange white--text",staticStyle:{height:"20px",width:"95%","margin-bottom":"1px"},attrs:{"data-date":"2020-10-06"}},[a("div",{staticClass:"pl-1"},[a("span",[e._v("Fakturiert")]),a("span",[e._v(e._s(e.rnd(10,100)))])])]),a("div",{staticClass:"v-event v-event-start v-event-end white--text",staticStyle:{height:"20px",width:"95%","margin-bottom":"1px","background-color":"rgb(245, 108, 108)","border-color":"rgb(245, 108, 108)"},attrs:{"data-date":"2020-10-06"}},[a("div",{staticClass:"pl-1"},[a("span",[e._v("Abgebrochen / Abgelehnt")]),a("span",[e._v(e._s(e.rnd(10,100)))])])])])]:e._e()]}}]),model:{value:e.focus,callback:function(t){e.focus=t},expression:"focus"}}),a("v-menu",{attrs:{"close-on-content-click":!1,activator:e.selectedElement,"offset-x":""},model:{value:e.selectedOpen,callback:function(t){e.selectedOpen=t},expression:"selectedOpen"}},[a("v-card",{attrs:{color:"grey lighten-4","min-width":"350px",flat:""}},[a("v-toolbar",{attrs:{color:e.selectedEvent.color,dark:""}},[a("v-toolbar-title",{domProps:{innerHTML:e._s(e.selectedEvent.title)}}),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[e._v("mdi-download")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[e._v("mdi-dots-vertical")])],1)],1),a("v-card-text",[a("strong",[e._v("Transaction number:")]),a("a",{attrs:{href:"#"}},[e._v(" 408765")]),a("br"),a("strong",[e._v("Paper type:")]),a("span",[e._v(" 1.04.00")]),a("br"),a("strong",[e._v(" Menge avisiert : ")]),a("span",[e._v(" 25t")]),a("br"),a("strong",[e._v(" Menge verwogen : ")]),a("span",[e._v(" 23.5t")])])],1)],1)],1)],1)],1)},i=[],l=(a("99af"),{data:function(){return{focus:"",type:"month",typeToLabel:{month:"Month",week:"Week",day:"Day","4day":"4 Days"},selectedEvent:{},selectedElement:null,selectedOpen:!1,events:[],colors:["#00af7d","#2391e1","#f56c6c","orange","#00466e"],names:["4044-3303"]}},mounted:function(){this.$refs.calendar.checkChange()},methods:{viewDay:function(e){var t=e.date;this.focus=t,this.type="day"},getEventColor:function(e){return e.color},setToday:function(){this.focus=""},prev:function(){this.$refs.calendar.prev()},next:function(){this.$refs.calendar.next()},showEvent:function(e){var t=this,a=e.nativeEvent,n=e.event,s=function(){t.selectedEvent=n,t.selectedElement=a.target,setTimeout((function(){t.selectedOpen=!0}),10)};this.selectedOpen?(this.selectedOpen=!1,setTimeout(s,10)):s(),a.stopPropagation()},updateRange:function(e){for(var t=e.start,a=e.end,n=[],s=new Date("".concat(t.date,"T00:00:00")),r=new Date("".concat(a.date,"T23:59:59")),o=(r.getTime()-s.getTime())/864e5,i=this.rnd(o,o+200),l=0;l<i;l++){var c=this.rnd(s.getTime(),r.getTime()),d=new Date(c-c%9e5),v=new Date(d.getTime()+1e3);n.push({name:"".concat(this.names[this.rnd(0,this.names.length-1)],"-").concat(l,"  1.04.00"),start:d,end:v,color:this.colors[this.rnd(0,this.colors.length-1)],timed:!1,counter:this.rnd(10,150)})}this.events=n},rnd:function(e,t){return Math.floor((t-e+1)*Math.random())+e}}}),c=l,d=(a("7d5b"),a("2877")),v=a("6544"),u=a.n(v),p=a("8336"),f=a("a4f6"),h=a("b0af"),m=a("99d9"),b=a("62ad"),y=a("132d"),g=a("8860"),w=a("da13"),k=a("5d23"),_=a("e449"),x=a("0fd9"),C=a("b974"),T=a("8dd9"),O=a("2fa4"),V=a("8654"),S=a("71d9"),E=a("2a7f"),D=Object(d["a"])(c,o,i,!1,null,null,null),M=D.exports;u()(D,{VBtn:p["a"],VCalendar:f["a"],VCard:h["a"],VCardText:m["a"],VCol:b["a"],VIcon:y["a"],VList:g["a"],VListItem:w["a"],VListItemTitle:k["b"],VMenu:_["a"],VRow:x["a"],VSelect:C["a"],VSheet:T["a"],VSpacer:O["a"],VTextField:V["a"],VToolbar:S["a"],VToolbarTitle:E["a"]});var j={name:"App",components:{HelloWorld:M},data:function(){return{}}},P=j,$=a("7496"),L=a("f6c4"),A=Object(d["a"])(P,s,r,!1,null,null,null),H=A.exports;u()(A,{VApp:$["a"],VMain:L["a"]});var W=a("f309");n["a"].use(W["a"]);var I=new W["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:I,render:function(e){return e(H)}}).$mount("#app")},"7d5b":function(e,t,a){"use strict";var n=a("1355"),s=a.n(n);s.a}});
//# sourceMappingURL=app.a1a747af.js.map