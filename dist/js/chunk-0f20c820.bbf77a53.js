(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f20c820"],{"5f49":function(e,t,s){},"6df4":function(e,t,s){"use strict";var l=s("5f49"),i=s.n(l);i.a},c54a:function(e,t,s){"use strict";s.r(t);var l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-dialog",{staticClass:"add-edit-user-dialog",attrs:{persistent:"","max-width":"600"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-card",[s("v-card-title",{staticClass:"headline",staticStyle:{"margin-bottom":"12px","background-color":"#eee"}},[e._v("NEW USER")]),s("v-card-text",{staticStyle:{"padding-bottom":"0px","max-height":"400px","overflow-y":"auto"}},[s("v-row",[s("v-col",{attrs:{cols:"12",sm:"6"}},[s("v-text-field",{attrs:{outlined:"",dense:"",label:"User Name"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),s("v-text-field",{attrs:{outlined:"",dense:"",label:"Name of Person"},model:{value:e.user.personName,callback:function(t){e.$set(e.user,"personName",t)},expression:"user.personName"}}),s("v-text-field",{attrs:{outlined:"",dense:"",label:"Notes"},model:{value:e.user.notes,callback:function(t){e.$set(e.user,"notes",t)},expression:"user.notes"}}),s("v-select",{attrs:{dense:"",label:"Account Type",items:e.accountTypes,"return-object":"",outlined:""},model:{value:e.user.accountType,callback:function(t){e.$set(e.user,"accountType",t)},expression:"user.accountType"}})],1),s("v-col",{attrs:{cols:"12",sm:"6"}},[s("v-select",{attrs:{dense:"",label:"Restriction Type",items:e.restrictions,outlined:""},model:{value:e.user.restriction,callback:function(t){e.$set(e.user,"restriction",t)},expression:"user.restriction"}}),s("div",[s("v-text-field",{staticStyle:{"border-radius":"5px 5px 0px 0px"},attrs:{solo:"","hide-details":"",dense:"","append-icon":"mdi-filter",label:"Filter..."},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),e.user.restriction>0?s("v-list-item-group",{attrs:{id:"restriction_list",height:"30px"}},e._l(e.calc_array,(function(t,l){return s("v-list-item",{key:l,class:t.selected?"user-selected":"",attrs:{dense:""}},[s("v-list-item-icon",{on:{click:function(e){t.selected=!t.selected}}},[s("v-icon",{style:t.selected?"color:red":""},[e._v(e._s(t.selected?"mdi-minus-circle-outline":"mdi-plus-circle-outline"))])],1),s("v-list-item-content",[s("v-list-item-title",[e._v(e._s(t.text))])],1)],1)})),1):e._e()],1)],1)],1)],1),s("v-card-actions",{staticStyle:{"background-color":"#eee"}},[s("v-spacer"),s("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("Cancel")]),s("v-btn",{staticStyle:{color:"white",width:"100px"},attrs:{color:"green darken-1"}},[e._v("Add")])],1)],1)],1)},i=[],r=(s("4de4"),s("c975"),s("2f62"),{name:"AddEditUser",data:function(){return{dialog:!1,filter:null,user:{username:null,personName:null,notes:null,accountType:3,restriction:1,sites:[{id:1,text:"Asslar",selected:!0},{id:2,text:"Batam",selected:!1},{id:3,text:"Covina",selected:!1},{id:null,text:"Asslar",selected:!0},{id:null,text:"Asslar",selected:!1},{id:1,text:"Asslar",selected:!1},{id:1,text:"Asslar",selected:!1},{id:1,text:"Asslar",selected:!1},{id:1,text:"Asslar",selected:!1},{id:1,text:"Asslar",selected:!1},{id:1,text:"Asslar",selected:!1},{id:1,text:"Asslar",selected:!1},{id:1,text:"Asslar",selected:!1},{id:1,text:"Asslar",selected:!1}],products:[{id:1,text:"Product 1",selected:!0},{id:2,text:"Product 2",selected:!1},{id:3,text:"Product 3",selected:!1},{id:null,text:"Product 4",selected:!0},{id:null,text:"Product 5",selected:!1},{id:1,text:"Product 6",selected:!1},{id:1,text:"Product 7",selected:!1},{id:1,text:"Product 8",selected:!1},{id:1,text:"Product 9",selected:!1},{id:1,text:"Product 10",selected:!1},{id:1,text:"Product 11",selected:!1},{id:1,text:"Product 12",selected:!1},{id:1,text:"Product 13",selected:!1},{id:1,text:"Product 14",selected:!1}]},restrictions:[{value:1,text:"Site Restricted"},{value:2,text:"Product Family Restricted"}],accountTypes:[{value:1,text:"Administrator"},{value:2,text:"Encoder (Restricted)"},{value:3,text:"Viewer (Restricted)"},{value:4,text:"Encoder All"},{value:5,text:"Viewer All"}]}},methods:{handleDialog:function(e){this.dialog=!0}},computed:{calc_array:function(){var e=1===this.user.restriction?this.user.sites:this.user.products,t=this;return e.filter((function(e,s){return!t.filter||e.text.toLowerCase().indexOf(t.filter.toLowerCase())>-1}))}}}),c=r,d=(s("6df4"),s("2877")),a=s("6544"),o=s.n(a),n=s("8336"),u=s("b0af"),x=s("99d9"),v=s("62ad"),m=s("169a"),p=s("132d"),f=s("da13"),b=s("5d23"),g=s("1baa"),h=s("34c3"),y=s("0fd9"),A=s("b974"),V=s("2fa4"),k=s("8654"),w=Object(d["a"])(c,l,i,!1,null,null,null);t["default"]=w.exports;o()(w,{VBtn:n["a"],VCard:u["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VCol:v["a"],VDialog:m["a"],VIcon:p["a"],VListItem:f["a"],VListItemContent:b["a"],VListItemGroup:g["a"],VListItemIcon:h["a"],VListItemTitle:b["b"],VRow:y["a"],VSelect:A["a"],VSpacer:V["a"],VTextField:k["a"]})}}]);