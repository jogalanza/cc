(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e51dd9a"],{7562:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demand-actuals-grid"},[n("b-table",{staticClass:"fixed-rowheader",attrs:{"show-empty":"",fixed:"",small:"",striped:"",items:t.items,fields:t.fields,"thead-class":"d-none","tbody-tr-class":"row-class","tfoot-class":"foot-class"},scopedSlots:t._u([{key:"table-busy",fn:function(){return[n("div",{staticClass:"text-center text-danger my-2"},[n("b-spinner",{staticClass:"align-middle"}),n("strong",[t._v("Loading...")])],1)]},proxy:!0},{key:"table-colgroup",fn:function(e){return t._l(e.fields,(function(e){return n("col",{key:e.key,style:t.colwidthCalc(e.key)})}))}},{key:"cell(col1)",fn:function(e){return[n("div",{staticClass:"row-header"},[t._v(t._s(e.value))])]}},{key:"cell(actions)",fn:function(t){return[n("span")]}},{key:"cell(entryForm)",fn:function(t){return[n("DemandActualsEntryForm",{staticClass:"grid3",attrs:{"show-headers":!0}})]}},{key:"head(actions)",fn:function(t){return[n("span",{staticClass:"text-info"})]}},{key:"foot(actions)",fn:function(t){return[n("span",{staticClass:"text-danger"})]}},{key:"foot(col1)",fn:function(e){return[n("span",{staticClass:"text-danger"},[t._v("Total")])]}},{key:"foot(defBacklog)",fn:function(e){return[n("span",[t._v(t._s(t.defCount))])]}},{key:"foot()",fn:function(t){return[n("span",{staticClass:"sr-only"})]}}])})],1)},a=[],o=(n("d3b7"),n("5530")),c=n("e09c"),r=n("2f62"),i={name:"DemandActualsGrid",mixins:[c["a"]],props:{showHeaders:{type:Boolean,default:!0},filter:String,currency:{type:String,default:""},siteinfo:{type:Object,default:null}},components:{DemandActualsEntryForm:function(){return Promise.all([n.e("chunk-1a58f2ee"),n.e("chunk-ac998d6a")]).then(n.bind(null,"dc5a"))}},data:function(){return{defCount:null,filterOn:["site","businessLine","productLine","productFamily","poNo","partNo","comments","reason","customerName","partDescription"],fields:[{key:"col1",label:""},{key:"entryForm",label:""}],items:[{id:1,col1:"Prod Fam 1",jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12},{id:1,col1:"Commercial",jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12}]}},methods:{saveEntries:function(){console.log("saving entries")},colwidthCalc:function(t){return{width:"col1"===t?"188px":"entryForm"===t?"680px":"actions"===t?"40px":"month"===t?"80px":"100px"}}},computed:Object(o["a"])({},Object(r["b"])({fields1:"getBookForecastFields"})),updated:function(){},mounted:function(){},beforeDestroy:function(){}},l=i,u=(n("97c1"),n("2877")),d=Object(u["a"])(l,s,a,!1,null,null,null);e["default"]=d.exports},"86f0":function(t,e,n){},"97c1":function(t,e,n){"use strict";var s=n("86f0"),a=n.n(s);a.a}}]);