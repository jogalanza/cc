(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-671a7786"],{"090b":function(e,t,a){},1897:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-table",{ref:"thisTable",staticClass:"fixed-rowheader",attrs:{"show-empty":"",small:"",busy:e.isBusy,fixed:"","foot-clone":e.footClone,hover:e.hover,"sticky-header":e.getStickyHeader,responsive:e.getReponsive,items:e.comp_items,fields:e.fields,"thead-class":e.getHeadClass,"tbody-tr-class":"row-class","tfoot-class":"foot-class"},scopedSlots:e._u([{key:"table-busy",fn:function(){return[a("div",{staticClass:"text-center text-danger my-2"},[a("b-spinner",{staticClass:"align-middle",staticStyle:{"margin-right":"10px",width:"20px",height:"20px"}}),a("strong",[e._v("Loading...")])],1)]},proxy:!0},{key:"table-colgroup",fn:function(t){return e._l(t.fields,(function(t){return a("col",{key:t.key,style:e.fieldWidthCalc(t.key)})}))}},{key:"cell(col1)",fn:function(t){return[a("div",{class:t.item.childAPI?"row-header":"row-header no-link",style:"margin-left:"+e.getHeaderMarginLeft,on:{click:function(a){return e.checkToggleRow(t)}}},[t.item.childAPI?a("v-icon",{attrs:{color:t.item.childAPI?"":"transparent"}},[e._v(e._s(t.detailsShowing?"mdi-chevron-down":"mdi-chevron-right"))]):e._e(),e._v(" "+e._s(t.value)+" ")],1)]}},{key:"cell(deferredBacklog)",fn:function(t){return["object"===typeof t.value&&2==t.value.length?[a("div",{staticStyle:{cursor:"pointer"},on:{click:function(a){return e.$eventHub.$emit("defbacklog-clicked",t,e.parentLevel)}}},[a("div",{class:e.numberValStyle(t.value[0])},[e._v(e._s(e.formatNumber(t.value[0])))]),a("div",{class:e.numberValStyle(t.value[1])},[e._v(e._s(e.formatNumber(t.value[1])))]),a("div",{class:e.numberValStyle(e.calcVariance(t.value[0],t.value[1],!1))},[e._v(e._s(e.calcVariance(t.value[0],t.value[1])))])])]:[a("span",{class:e.numberValStyle(t.value),staticStyle:{cursor:"pointer"},on:{click:function(a){return e.$eventHub.$emit("defbacklog-clicked",t,e.parentLevel)}}},[e._v(e._s(e.formatNumber(t.value)))])]]}},{key:"cell(vyoy)",fn:function(t){return["object"===typeof t.value&&2==t.value.length?[a("div",{class:e.numberValStyle(t.value[0])},[e._v(e._s(t.value[0]?e.formatNumber(t.value[0],!1,1)+"%":"0%"))]),a("div",{class:e.numberValStyle(t.value[1])},[e._v(e._s(t.value[1]?e.formatNumber(t.value[1],!1,1)+"%":"0%"))]),a("div",{class:e.numberValStyle(e.calcVariance(t.value[0],t.value[1],!1))},[e._v(e._s(e.calcVariance(t.value[0],t.value[1],!1).toFixed(1)+"%"))])]:[a("span",{class:e.numberValStyle(t.item.vyoy)},[e._v(e._s(t.item.vyoy?e.formatNumber(t.item.vyoy,!1,2)+"%":"0%"))])]]}},{key:"cell(vseq)",fn:function(t){return["object"===typeof t.value&&2==t.value.length?[a("div",{class:e.numberValStyle(t.value[0])},[e._v(e._s(t.value[0]?e.formatNumber(t.value[0],!1,1)+"%":"0%"))]),a("div",{class:e.numberValStyle(t.value[1])},[e._v(e._s(t.value[1]?e.formatNumber(t.value[1],!1,1)+"%":"0%"))]),a("div",{class:e.numberValStyle(e.calcVariance(t.value[0],t.value[1],!1))},[e._v(e._s(e.formatNumber(e.calcVariance(t.value[0],t.value[1],!1),!1,1)+"%"))])]:[a("span",{class:e.numberValStyle(t.item.vseq)},[e._v(e._s(t.item.vseq?e.formatNumber(t.item.vseq,!1,0)+"%":"0%"))])]]}},{key:"cell(orgVyoy)",fn:function(t){return[a("span",{class:e.numberValStyle(t.item.orgVyoy)},[e._v(e._s(t.item.orgVyoy?e.formatNumber(t.item.orgVyoy,!1,2)+"%":""))])]}},{key:"cell(vAop)",fn:function(t){return[a("span",{class:e.numberValStyle(t.item.vAop)},[e._v(e._s(t.item.vAop?e.formatNumber(t.item.vAop,!1,2)+"%":""))])]}},{key:"cell(vAopOrg)",fn:function(t){return[a("span",{class:e.numberValStyle(t.item.vAopOrg)},[e._v(e._s(t.item.vAop?e.formatNumber(t.item.vAopOrg,!1,2)+"%":""))])]}},{key:"cell(bookToBill)",fn:function(t){return[a("span",[e._v(e._s(e.formatNumber(t.item.bookToBill,!1,2)))])]}},{key:"cell(q1)",fn:function(t){return[a("span",[e._v(e._s(e.calcQuarter(t,1)))])]}},{key:"cell(q2)",fn:function(t){return[a("span",[e._v(e._s(e.calcQuarter(t,2)))])]}},{key:"cell(q3)",fn:function(t){return[a("span",[e._v(e._s(e.calcQuarter(t,3)))])]}},{key:"cell(q4)",fn:function(t){return[a("span",[e._v(e._s(e.calcQuarter(t,4)))])]}},{key:"cell(total)",fn:function(t){return[a("span",[e._v(e._s(e.calcRowTotal(t)))])]}},{key:"cell(currency)",fn:function(t){return[a("span",[e._v(e._s(e.setCurrencyFooterLabel(t)))])]}},{key:"cell()",fn:function(t){return["object"===typeof t.value&&2==t.value.length?[a("div",{class:e.numberValStyle(t.value[0])},[e._v(e._s(e.formatNumber(t.value[0])))]),a("div",{class:e.numberValStyle(t.value[1])},[e._v(e._s(e.formatNumber(t.value[1])))]),a("div",{class:e.numberValStyle(e.calcVariance(t.value[0],t.value[1],!1))},[e._v(e._s(e.calcVariance(t.value[0],t.value[1])))])]:[a("span",[e._v(e._s(e.formatNumber(t.value)))])]]}},{key:"row-details",fn:function(t){return[a("NestedGrid2",{class:e.generateClassId,attrs:{"foot-clone":e.footClone,hover:e.hover,fields:e.fields,"parent-level":e.level,"field-width-calc":e.fieldWidthCalc,"show-child-header":e.showChildHeader,"footer-variance-mode":e.footerVarianceMode,dataAPI:t.item.childAPI,"text-offset-level":e.textOffsetLevel,"local-currency":e.localCurrency,"auto-expand":e.autoExpand}})]}},{key:"foot(actions)",fn:function(e){return[a("span",{staticClass:"text-danger"})]}},{key:"foot(col1)",fn:function(t){return[a("span",{staticClass:"footer-total",style:"margin-left:"+e.getHeaderMarginLeft},[e._v("Total")])]}},{key:"foot(currency)",fn:function(t){return[a("span",[e._v(e._s(e.checkCurrencyFooterLabel(t)))])]}},{key:"foot(vyoy)",fn:function(t){return[e.footerVarianceMode?[a("div",{class:e.numberValStyle(e.calcVYoy_ItemArrayPlus(e.comp_items,"salesForecast_lastYr",0,!1))},[e._v(" "+e._s(e.formatNumber(e.calcVYoy_ItemArrayPlus(e.comp_items,"salesForecast_lastYr",0,!1),!1,1)+"%")+" ")]),a("div",{class:e.numberValStyle(e.calcVYoy_ItemArrayPlus(e.comp_items,"salesForecast_lastYr",1,!1))},[e._v(" "+e._s(e.formatNumber(e.calcVYoy_ItemArrayPlus(e.comp_items,"salesForecast_lastYr",1,!1),!1,1)+"%")+" ")]),a("div",{class:e.numberValStyle(e.calcVariance(e.calcVYoy_ItemArrayPlus(e.comp_items,"salesForecast_lastYr",0,!1),e.calcVYoy_ItemArrayPlus(e.comp_items,"salesForecast_lastYr",1,!1),!1))},[e._v(" "+e._s(e.formatNumber(e.calcVariance(e.calcVYoy_ItemArrayPlus(e.comp_items,"salesForecast_lastYr",0,!1),e.calcVYoy_ItemArrayPlus(e.comp_items,"salesForecast_lastYr",1,!1),!1),!1,1))+" ")])]:[a("span",{class:e.numberValStyle(e.calcVYoy(e.calcItemsPlus("salesForecast",e.comp_items,!1),e.calcItemsPlus("salesForecast_lastYr",e.comp_items,!1),!1))},[e._v(" "+e._s(e.calcVYoy(e.calcItemsPlus("salesForecast",e.comp_items,!1),e.calcItemsPlus("salesForecast_lastYr",e.comp_items,!1))+"%")+" ")])]]}},{key:"foot(vseq)",fn:function(t){return[e.footerVarianceMode?[a("div",{class:e.numberValStyle(e.calcVYoy_ItemArrayPlus(e.comp_items,"salesForecast_lastMoQtr",0,!1))},[e._v(" "+e._s(e.formatNumber(e.calcVYoy_ItemArrayPlus(e.comp_items,"salesForecast_lastMoQtr",0,!1),!1,1)+"%")+" ")]),a("div",{class:e.numberValStyle(e.calcVYoy_ItemArrayPlus(e.comp_items,"salesForecast_lastMoQtr",1,!1))},[e._v(" "+e._s(e.formatNumber(e.calcVYoy_ItemArrayPlus(e.comp_items,"salesForecast_lastMoQtr",1,!1),!1,1)+"%")+" ")]),a("div",{class:e.numberValStyle(e.calcVariance(e.calcVYoy_ItemArrayPlus(e.comp_items,"salesForecast_lastMoQtr",0,!1),e.calcVYoy_ItemArrayPlus(e.comp_items,"salesForecast_lastMoQtr",1,!1),!1))},[e._v(" "+e._s(e.formatNumber(e.calcVariance(e.calcVYoy_ItemArrayPlus(e.comp_items,"salesForecast_lastMoQtr",0,!1),e.calcVYoy_ItemArrayPlus(e.comp_items,"salesForecast_lastMoQtr",1,!1),!1),!1,1))+" ")])]:[a("span",{class:e.numberValStyle(e.calcVYoy(e.calcItemsPlus("salesForecast",e.comp_items,!1),e.calcItemsPlus("salesForecast_lastYr",e.comp_items,!1),!1))},[e._v(" "+e._s(e.calcVYoy(e.calcItemsPlus("salesForecast",e.comp_items,!1),e.calcItemsPlus("salesForecast_lastMoQtr",e.comp_items,!1))+"%")+" ")])]]}},{key:"foot(orgVyoy)",fn:function(t){return[a("span",{class:e.numberValStyle(e.calcOrgVYoy(e.calcItemsPlus("salesForecast",e.comp_items,!1),e.calcItemsPlus("salesForecast_lastYr",e.comp_items,!1),e.calcItemsPlus("yoyIndex",e.comp_items,!1),!1))},[e._v(" "+e._s(e.calcOrgVYoy(e.calcItemsPlus("salesForecast",e.comp_items,!1),e.calcItemsPlus("salesForecast_lastYr",e.comp_items,!1),e.calcItemsPlus("yoyIndex",e.comp_items,!1))+"%")+" ")])]}},{key:"foot(bookToBill)",fn:function(t){return[a("span",{class:e.numberValStyle(e.calcItemsPlus("bookToBill",e.comp_items,!1))},[e._v(" "+e._s(e.calcBookToBillTotal(e.calcItemsPlus("bookingsForecast",e.comp_items,!1),e.calcItemsPlus("salesForecast",e.comp_items,!1)))+" ")])]}},{key:"foot()",fn:function(t){return[e.footerVarianceMode?[a("div",{class:e.numberValStyle(e.calcItemsArrayPlus(t.column,e.comp_items,0,!1))},[e._v(e._s(e.calcItemsArrayPlus(t.column,e.comp_items,0)))]),a("div",{class:e.numberValStyle(e.calcItemsArrayPlus(t.column,e.comp_items,1,!1))},[e._v(e._s(e.calcItemsArrayPlus(t.column,e.comp_items,1)))]),a("div",{class:e.numberValStyle(e.calcVariance(e.calcItemsArrayPlus(t.column,e.comp_items,0,!1),e.calcItemsArrayPlus(t.column,e.comp_items,1,!1),!1))},[e._v(" "+e._s(e.calcVariance(e.calcItemsArrayPlus(t.column,e.comp_items,0,!1),e.calcItemsArrayPlus(t.column,e.comp_items,1,!1)))+" ")])]:[a("span",{class:e.numberValStyle(e.calcItemsPlus(t.column,e.comp_items,!1))},[e._v(e._s(e.calcItemsPlus(t.column,e.comp_items)))])]]}}])})},s=[],c=(a("a9e3"),a("d3b7"),a("5530")),r=a("2909"),o=a("e09c"),n=a("4b1f"),i={methods:{calcBookToBillTotal:function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],l=0;return t&&t>0&&(l=e/t),a?this.formatNumber(l,!1,2):l},calcVYoy:function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,s=0;return t&&t>0&&(s=100*(e/t-1)),a?this.formatNumber(s,!1,l):s},calcVYoy_ItemArrayPlus:function(e,t,a){var l=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return this.calcVYoy(this.calcItemsArrayPlus("salesForecast",e,a,!1),this.calcItemsArrayPlus(t,e,a,!1),l)},calcOrgVYoy:function(e,t,a){var l=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:2,c=0;return t&&a&&t>0&&(c=(e-t-1e3*a)/t*100),l?this.formatNumber(c,!1,s):c}}},u=a("2f62"),m={name:"NestedGridCompare",mixins:[o["a"],n["a"],i],components:{NestedGrid2:function(){return Promise.resolve().then(a.bind(null,"1897"))}},props:{dataAPI:{type:String,default:""},items:{type:Array,default:function(){return[]}},fields:Array,fieldWidthCalc:{type:Function,default:function(e){return{width:"col1"===e?"280px":"actions"===e?"32px":"70px"}}},parentLevel:{type:Number,default:1},showChildHeader:{type:Boolean,default:!0},calcReverse:{type:Boolean,default:!1},footerVarianceMode:{type:Boolean,default:!0},hover:{type:Boolean,default:!1},footClone:{type:Boolean,default:!0},textOffsetLevel:{type:Number,default:0},localCurrency:{type:Boolean,default:!1},autoExpand:{type:Boolean,default:!1}},data:function(){return{uid:1,isBusy:!1,local_items2:[{id:1,col1:"Detection",currency:"USD",actSales:500,backlogCRD:23555,contractRelease:null,bookShip:3452,demandForecast:123,defBacklog:123,salesForecast:123,target:123,lastQtr:123,lastYr:123,vseq:123,vyoy:123,orgVyoy:123,actBookings:123,bookingsForecast:123,bookToBill:123,childAPI:"/startbusiness/root/1"},{id:2,col1:"Defense & Aerospace",currency:"USD",actSales:51e3,backlogCRD:23555,contractRelease:null,bookShip:3452,demandForecast:123,defBacklog:123,salesForecast:123,target:123,lastQtr:123,lastYr:123,vseq:123,vyoy:123,orgVyoy:123,actBookings:123,bookingsForecast:123,bookToBill:123}],local_items:[]}},methods:{toggleRow:function(e){console.log(e),e.toggleDetails()},checkToggleRow:function(e){e.item.childAPI&&e.toggleDetails()},checkCurrencyFooterLabel:function(e){return e.field.footerLabel&&2===this.parentLevel&&this.localCurrency?e.field.footerLabel:"USD"},setCurrencyFooterLabel:function(e){return e.field.footerLabel=e.item.currency,e.item.currency},refreshData:function(){var e=this;this.isBusy=!0,this.$http.post(e.dataAPI,this.periodFilters).then((function(t){e.local_items=Object(r["a"])(t.data.result)})).catch((function(e){console.warn(e)})).then((function(){e.isBusy=!1}))},toggleExpandCollapse:function(e){this.collapseExpand(e)}},computed:Object(c["a"])({},Object(u["b"])({fields1:"getSABFields",periodFilters:"getPeriodFilters"}),{level:function(){return this.parentLevel+1},getTableRefName:function(){return"thisTable-".concat(this.uid)},generateClassId:function(){return"grid".concat(this.level)},comp_items:function(){return this.items.length>0?this.items:this.local_items},getHeadClass:function(){return this.parentLevel>1&&!this.showChildHeader?"head-class hidden-header":"head-class"},getReponsive:function(){return 1===this.parentLevel},getStickyHeader:function(){return 1===this.parentLevel},getHeaderMarginLeft:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=this.textOffsetLevel>0&&this.textOffsetLevel===this.parentLevel?24:0;return"".concat(24*(this.parentLevel-1)+e,"px")}}),mounted:function(){this.uid=this._uid,this.refreshData()},updated:function(){this.autoExpand&&this.collapseExpand()},beforeDestroy:function(){}},f=m,y=(a("558e"),a("2877")),v=a("6544"),_=a.n(v),d=a("132d"),p=Object(y["a"])(f,l,s,!1,null,null,null);t["default"]=p.exports;_()(p,{VIcon:d["a"]})},"4b1f":function(e,t,a){"use strict";a("4160"),a("159b");t["a"]={methods:{collapseExpand:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.$refs.thisTable&&this.$refs.thisTable.$refs.itemRows){var t=this.$refs.thisTable.$refs.itemRows;t.forEach((function(t){var a=t.$el.firstChild.firstElementChild;(!t.$attrs["aria-details"]&&e||t.$attrs["aria-details"]&&!e)&&a.click()}))}}}}},"558e":function(e,t,a){"use strict";var l=a("090b"),s=a.n(l);s.a}}]);