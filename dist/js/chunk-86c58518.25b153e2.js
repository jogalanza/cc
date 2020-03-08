(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-86c58518","chunk-05f664d4"],{"1c6ab":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bookings-forecast-grid"},[n("b-table",{staticClass:"fixed-rowheader",attrs:{"show-empty":"",fixed:"",small:"",items:e.items,fields:e.fields,"thead-class":e.showHeaders?"":"d-none","tbody-tr-class":"row-class","tfoot-class":"foot-class"},scopedSlots:e._u([{key:"table-busy",fn:function(){return[n("div",{staticClass:"text-center text-danger my-2"},[n("b-spinner",{staticClass:"align-middle"}),n("strong",[e._v("Loading...")])],1)]},proxy:!0},{key:"table-colgroup",fn:function(t){return e._l(t.fields,(function(t){return n("col",{key:t.key,style:e.colwidthCalc(t.key)})}))}},{key:"cell(col1)",fn:function(t){return[n("div",{staticClass:"row-header"},[n("span",[e._v(e._s(t.value))])])]}},{key:"cell(actions)",fn:function(e){return[n("span")]}},{key:"cell(jan)",fn:function(t){return[n("v-text-field",{staticClass:"input-fields",attrs:{type:"number",prefix:e.currency,flat:"",solo:"","single-line":"",dense:"","hide-details":""},model:{value:t.item.jan,callback:function(n){e.$set(t.item,"jan",n)},expression:"row.item.jan"}})]}},{key:"cell(feb)",fn:function(t){return[n("v-text-field",{staticClass:"input-fields",attrs:{type:"number",prefix:e.currency,flat:"",solo:"","single-line":"",dense:"","hide-details":""},model:{value:t.item.feb,callback:function(n){e.$set(t.item,"feb",n)},expression:"row.item.feb"}})]}},{key:"cell(mar)",fn:function(t){return[n("v-text-field",{staticClass:"input-fields",attrs:{type:"number",prefix:e.currency,flat:"",solo:"","single-line":"",dense:"","hide-details":""},model:{value:t.item.mar,callback:function(n){e.$set(t.item,"mar",n)},expression:"row.item.mar"}})]}},{key:"cell(apr)",fn:function(t){return[n("v-text-field",{staticClass:"input-fields",attrs:{type:"number",prefix:e.currency,flat:"",solo:"","single-line":"",dense:"","hide-details":""},model:{value:t.item.apr,callback:function(n){e.$set(t.item,"apr",n)},expression:"row.item.apr"}})]}},{key:"cell(may)",fn:function(t){return[n("v-text-field",{staticClass:"input-fields",attrs:{type:"number",prefix:e.currency,flat:"",solo:"","single-line":"",dense:"","hide-details":""},model:{value:t.item.may,callback:function(n){e.$set(t.item,"may",n)},expression:"row.item.may"}})]}},{key:"cell(jun)",fn:function(t){return[n("v-text-field",{staticClass:"input-fields",attrs:{type:"number",prefix:e.currency,flat:"",solo:"","single-line":"",dense:"","hide-details":""},model:{value:t.item.jun,callback:function(n){e.$set(t.item,"jun",n)},expression:"row.item.jun"}})]}},{key:"cell(jul)",fn:function(t){return[n("v-text-field",{staticClass:"input-fields",attrs:{type:"number",prefix:e.currency,flat:"",solo:"","single-line":"",dense:"","hide-details":""},model:{value:t.item.jul,callback:function(n){e.$set(t.item,"jul",n)},expression:"row.item.jul"}})]}},{key:"cell(aug)",fn:function(t){return[n("v-text-field",{staticClass:"input-fields",attrs:{type:"number",prefix:e.currency,flat:"",solo:"","single-line":"",dense:"","hide-details":""},model:{value:t.item.aug,callback:function(n){e.$set(t.item,"aug",n)},expression:"row.item.aug"}})]}},{key:"cell(sep)",fn:function(t){return[n("v-text-field",{staticClass:"input-fields",attrs:{type:"number",prefix:e.currency,flat:"",solo:"","single-line":"",dense:"","hide-details":""},model:{value:t.item.sep,callback:function(n){e.$set(t.item,"sep",n)},expression:"row.item.sep"}})]}},{key:"cell(oct)",fn:function(t){return[n("v-text-field",{staticClass:"input-fields",attrs:{type:"number",prefix:e.currency,flat:"",solo:"","single-line":"",dense:"","hide-details":""},model:{value:t.item.oct,callback:function(n){e.$set(t.item,"oct",n)},expression:"row.item.oct"}})]}},{key:"cell(nov)",fn:function(t){return[n("v-text-field",{staticClass:"input-fields",attrs:{type:"number",prefix:e.currency,flat:"",solo:"","single-line":"",dense:"","hide-details":""},model:{value:t.item.nov,callback:function(n){e.$set(t.item,"nov",n)},expression:"row.item.nov"}})]}},{key:"cell(dec)",fn:function(t){return[n("v-text-field",{staticClass:"input-fields",attrs:{type:"number",prefix:e.currency,flat:"",solo:"","single-line":"",dense:"","hide-details":""},model:{value:t.item.dec,callback:function(n){e.$set(t.item,"dec",n)},expression:"row.item.dec"}})]}},{key:"head(actions)",fn:function(e){return[n("span",{staticClass:"text-info"})]}},{key:"foot(actions)",fn:function(e){return[n("span",{staticClass:"text-danger"})]}},{key:"foot(col1)",fn:function(t){return[n("span",{staticClass:"text-danger"},[e._v("Total")])]}},{key:"foot(defBacklog)",fn:function(t){return[n("span",[e._v(e._s(e.defCount))])]}},{key:"foot()",fn:function(e){return[n("span",{staticClass:"sr-only"})]}}])})],1)},s=[],l=n("5530"),a=n("e09c"),r=n("2f62"),o={name:"BookingsForecastGrid",mixins:[a["a"]],props:{showHeaders:{type:Boolean,default:!0},filter:String,currency:{type:String,default:""},siteinfo:{type:Object,default:null}},components:{},data:function(){return{defCount:null,filterOn:["site","businessLine","productLine","productFamily","poNo","partNo","comments","reason","customerName","partDescription"],items:[{id:1,col1:"Prod Fam 1",jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12},{id:1,col1:"Commercial",jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12}]}},methods:{saveEntries:function(){console.log("saving entries")},colwidthCalc:function(e){return{width:"col1"===e?"220px":"comments"===e||"customerName"===e||"reason"===e||"partDescription"===e?"120px":"month"===e||"year"===e?"60px":"actions"===e?"40px":"80px"}}},computed:Object(l["a"])({},Object(r["b"])({fields:"getBookForecastFields"})),updated:function(){},mounted:function(){},beforeDestroy:function(){}},c=o,u=(n("b456"),n("2877")),f=n("6544"),d=n.n(f),m=n("8654"),p=Object(u["a"])(c,i,s,!1,null,null,null);t["default"]=p.exports;d()(p,{VTextField:m["a"]})},b456:function(e,t,n){"use strict";var i=n("c28b"),s=n.n(i);s.a},c28b:function(e,t,n){},e09c:function(e,t,n){"use strict";n("4160"),n("a9e3"),n("159b");t["a"]={methods:{calcItems:function(e){var t=0;return e&&this.items&&this.items.forEach((function(n,i){Number(n[e])&&(t+=Number(n[e]))})),this.formatNumber(t)},calcItemsPlus:function(e,t){var n=0;return e&&t&&t.forEach((function(t,i){Number(t[e])&&(n+=Number(t[e]))})),this.formatNumber(n)},colwidthCalc:function(e){return{width:"col1"===e?"280px":"actions"===e?"32px":"70px"}}}}}}]);