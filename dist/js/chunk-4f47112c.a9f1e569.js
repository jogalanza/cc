(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f47112c"],{3034:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"demand-actuals-nest-grid"},[i("b-table",{ref:"thisTable",staticClass:"fixed-rowheader",attrs:{"show-empty":"",small:"",fixed:"","sticky-header":"calc(100vh - 165px)",responsive:"",items:t.items,fields:t.fields,"thead-class":t.showHeader?"head-class":"d-none","tbody-tr-class":"row-class","tfoot-class":"foot-class"},scopedSlots:t._u([{key:"table-busy",fn:function(){return[i("div",{staticClass:"text-center text-danger my-2"},[i("b-spinner",{staticClass:"align-middle"}),i("strong",[t._v("Loading...")])],1)]},proxy:!0},{key:"table-colgroup",fn:function(e){return t._l(e.fields,(function(e){return i("col",{key:e.key,style:t.colwidthCalc(e.key)})}))}},{key:"cell(col1)",fn:function(e){return[i("div",{staticClass:"row-header",on:{click:function(i){return t.toggleRow(e)}}},[i("v-icon",[t._v(t._s(e.detailsShowing?"mdi-chevron-down":"mdi-chevron-right"))]),t._v(" "+t._s(e.value)+" ")],1)]}},{key:"cell(actions)",fn:function(e){return[e.detailsShowing?i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var s=n.on;return[i("v-btn",t._g({attrs:{small:"",icon:""},on:{click:function(i){return t.saveEntries(e.item)}}},s),[i("v-icon",[t._v("mdi-content-save")])],1)]}}],null,!0)},[i("span",[t._v(t._s("Save "+e.item.col1))])]):t._e()]}},{key:"cell()",fn:function(e){return[i("div",{staticClass:"row-header",staticStyle:{width:"100%",height:"40px"},on:{click:function(i){return t.toggleRow(e)}}})]}},{key:"head(col1)",fn:function(t){return[i("span",{staticClass:"text-info"})]}},{key:"row-details",fn:function(e){return[i("DemandActualsGrid",{ref:"bookforecast"+e.item.siteid,staticClass:"grid2",attrs:{showHeaders:t.showHeader,siteinfo:e.item}})]}},{key:"foot(actions)",fn:function(t){return[i("span",{staticClass:"text-danger"})]}},{key:"foot(col1)",fn:function(e){return[i("span",{staticClass:"footer-total"},[t._v("Total")])]}},{key:"foot()",fn:function(e){return[i("div",[t._v(t._s(t.calcItems(e.column)))])]}}])})],1)},s=[],o=(i("d3b7"),i("5530")),r=i("e09c"),a=i("4b1f"),c=i("2f62"),l={name:"DemandActualsNestGrid",mixins:[r["a"],a["a"]],components:{DemandActualsGrid:function(){return i.e("chunk-1e51dd9a").then(i.bind(null,"7562"))}},props:{items1:Array},data:function(){return{showHeader:!1,items:[{siteid:1,col1:"Asslar"},{siteid:2,userid:300,col1:"Batam"},{siteid:3,userid:300,col1:"Shenzhen"},{siteid:4,userid:300,col1:"Manila"},{siteid:5,userid:300,col1:"Singapore"},{siteid:6,userid:300,col1:"Montreal"},{siteid:7,userid:300,col1:"St. Asaph"}]}},methods:{saveEntries:function(t){try{if(t.siteid){var e="bookforecast".concat(t.siteid);console.log("saveEntries",t,e,this.$refs[e]),this.$refs[e]&&this.$refs[e].saveEntries()}}catch(i){console.error("BookingsForecastNestGrid.saveEntries",i)}},colwidthCalc:function(t){return{width:"col1"===t?"200px":"entryForm"===t?"680px":"actions"===t?"40px":"month"===t?"80px":"100px"}},toggleRow:function(t){t.toggleDetails()},checkToogleRow:function(t){console.log(t),t.item.childAPI&&t.toggleDetails()}},computed:Object(o["a"])({},Object(c["b"])({fields:"getDemandActualFields",autoDrill:"getAutoExpand"})),mounted:function(){console.log("mounted",this,this.$refs),this.showHeader=this.isStickySupported()}},u=l,f=(i("44ac"),i("2877")),d=i("6544"),m=i.n(d),h=i("8336"),v=i("132d"),b=i("3a2f"),p=Object(f["a"])(u,n,s,!1,null,"270ecf86",null);e["default"]=p.exports;m()(p,{VBtn:h["a"],VIcon:v["a"],VTooltip:b["a"]})},"44ac":function(t,e,i){"use strict";var n=i("54f8"),s=i.n(n);s.a},"4b1f":function(t,e,i){"use strict";i("4160"),i("159b");e["a"]={methods:{collapseExpand:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.$refs.thisTable&&this.$refs.thisTable.$refs.itemRows){var e=this.$refs.thisTable.$refs.itemRows;e.forEach((function(e){var i=e.$el.firstChild.firstElementChild;(!e.$attrs["aria-details"]&&t||e.$attrs["aria-details"]&&!t)&&i.click()}))}}}}},"54f8":function(t,e,i){},e09c:function(t,e,i){"use strict";i("4160"),i("a9e3"),i("159b");e["a"]={methods:{calcItems:function(t){var e=0;return t&&this.items&&this.items.forEach((function(i,n){i[t]&&Number(i[t])&&(e+=Number(i[t]))})),this.formatNumber(e)},calcItemsPlus:function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s=arguments.length>4?arguments[4]:void 0,o=0;return t&&e&&e.forEach((function(e,i){e[t]&&Number(e[t])&&(o+=Number(e[t]))})),i?this.formatNumber(o,n,s):o},calcItemsArrayPlus:function(t,e,i){var n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s=0;return t&&e&&e.forEach((function(e,n){e[t]&&i<e[t].length&&Number(e[t][i])&&(s+=Number(e[t][i]))})),n?this.formatNumber(s):s},sumRowItems:function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=0;return t&&e&&t.forEach((function(t,i){e.item[t]&&Number(e.item[t])&&(n+=Number(e.item[t]))})),i?this.formatNumber(n):n},colwidthCalc:function(t){return{width:"col1"===t?"280px":"actions"===t?"32px":"70px"}},numberValStyle:function(t){return t&&Number(t)&&Number(t)<0?"row-text row-text-negative":"row-text"},calcVariance:function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=0;return n=this.calcReverse?(null===e?0:e)-(null===t?0:t):(null===t?0:t)-(null===e?0:e),i?this.formatNumber(n):n},calcQuarter:function(t,e){return 1===e?(t.item.Q1=this.sumRowItems(["Jan","Feb","Mar"],t,!1),this.formatNumber(t.item.Q1)):2===e?(t.item.Q2=this.sumRowItems(["Apr","May","Jun"],t,!1),this.formatNumber(t.item.Q2)):3===e?(t.item.Q3=this.sumRowItems(["Jul","Aug","Sep"],t,!1),this.formatNumber(t.item.Q3)):4===e?(t.item.Q4=this.sumRowItems(["Oct","Nov","Dec"],t,!1),this.formatNumber(t.item.Q4)):void 0},calcRowTotal:function(t){return t.item.Total=this.sumRowItems(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t,!1),this.formatNumber(t.item.Total)}}}}}]);