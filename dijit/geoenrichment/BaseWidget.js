// COPYRIGHT © 2015 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.

define(["../../declare","dojo/_base/lang","dojo/Evented","dojo/dom-construct","dojo/dom-attr","dojo/dom-class","dojo/string","./dom","dojo/on","./lang","dijit/Destroyable","dijit/layout/BorderContainer","dijit/layout/ContentPane","./formatVariable"],function(t,e,i,s,a,n,r,o,d,h,u,l,c,f){function p(t,e,i){return t>e?i?-1:1:e>t?i?1:-1:0}var v=t("esri.dijit.geoenrichment.BaseWidget",[i],{data:null,metadata:null,parent:null,dataEvents:null,_state:null,expanded:!0,title:null,titleDiv:null,subtitle:null,subtitleDiv:null,constructor:function(t){if(!t)throw"Parent HTML element was not specified";this._state={sortBy:0,sortDesc:!1},this.parent=t},setDataProvider:function(t){this._destroyDataEvents(),t&&(this.feedData(t),this.dataEvents=new u,this.dataEvents.own(t.on("data",e.hitch(this,this.feedData,t))))},_destroyDataEvents:function(){this.dataEvents&&(this.dataEvents.destroy(),this.dataEvents=null)},feedData:function(t){this.data=t.getData(),this.data&&(this.metadata=t.metadata,this.update())},destroy:function(t){t||this._destroyDataEvents(),this.ui&&(this.ui.destroy(),this.ui=null)},updateUI:function(){if(this.sortTriangles)for(var t in this.sortTriangles)this.sortTriangles[t].innerHTML=this._state.sortBy==+t?this._state.sortDesc?"&#9660;":"&#9650;":"";if(this.title?(this.titleDiv.innerHTML=this.title,this.titleDiv.style.display=""):(this.titleDiv.innerHTML="",this.titleDiv.style.display="none"),this.subtitle){var e={},i=this.data.features[0].attributes,s=this.metadata;for(var a in s)s.hasOwnProperty(a)&&(e[a]=i[s[a]]||"");this.subtitleDiv.innerHTML=r.substitute(this.subtitle,e),this.subtitleDiv.style.display=""}else this.subtitleDiv.innerHTML="",this.subtitleDiv.style.display="none"},updateUIExpanded:function(){this.updateUI()},updateUICollapsed:function(){this.updateUI()},createUI:function(t){this.titleDiv=t.addHeader("div",{"class":"BaseWidget_Title"}),this.subtitleDiv=t.addHeader("div",{"class":"BaseWidget_Subtitle"})},createUIExpanded:function(t){this.createUI(t)},createUICollapsed:function(t){this.createUI(t)},createUIPrivate:function(){var t=new g;this.expanded?this.createUIExpanded(t):this.createUICollapsed(t),this.ui=t.build(this.parent)},updateUIPrivate:function(){this.expanded?this.updateUIExpanded():this.updateUICollapsed(),this.resize(),d.emit(this,"resize",[this.parent.scrollWidth,this.parent.scrollHeight])},resize:function(){this.ui&&this.ui.resize()},update:function(){this.data&&this._state&&(this.ui||(n.add(this.parent,"WidgetBack"),this.createUIPrivate()),this.updateUIPrivate())},_appendSortHeader:function(t,i,n,r){var d=t.insertCell(-1);for(var h in r)r.hasOwnProperty(h)&&a.set(d,h,r[h]);var u=s.create("span",{"class":"SortLink",innerHTML:i},d);u.onclick=e.hitch(this,this.sortBy,n),o.text(u," "),this.sortTriangles||(this.sortTriangles=[]),this.sortTriangles[n]=s.create("span",{"class":"SortArrow"},u)},sortBy:function(t){this._state.sortDesc=this._state.sortBy==t?!this._state.sortDesc:!1,this._state.sortBy=t,this.updateUIPrivate()},_sortRows:function(t){var e=this._state.sortBy;if(h.isNumber(e)){var i=this._state.sortDesc;t.sort(function(t,s){return p(t[e],s[e],i)})}},getFeatureTitle:function(t){return this.data.features[t].attributes[this.metadata.name]},getValueByName:function(t,e){return this.data.features[t].attributes[e]},getValueByIndex:function(t,e){return this.getValueByName(t,this.getFieldByIndex(e).name)},formatByName:function(t,e){return f(this.getFieldByName(e),this.data.features[t].attributes[e])},formatByIndex:function(t,e){var i=this.getFieldByIndex(e);return f(i,this.data.features[t].attributes[i.name])},getDataFields:function(){for(var t=[],e=this.data.fields.length,i=0;e>i;i++){var s=this.data.fields[i].fullName;s&&"AREA_ID"!=s&&t.push(i)}return t},getFieldByName:function(t){for(var e=this.data.fields.length,i=0;e>i;i++){var s=this.data.fields[i];if(s.name==t)return s}},getFieldByIndex:function(t){return this.data.fields[t]},setState:function(t){e.mixin(this._state,t)},getState:function(t){return this._state?this._state[t]:null}}),g=t(null,{headerClass:null,contentClass:null,footerClass:null,constructor:function(){this.headerClass=["BaseWidget_HeaderPane"],this.contentClass=["BaseWidget_ContentPane"],this.footerClass=["BaseWidget_FooterPane"]},addHeader:function(t,e){return this.header||(this.header=document.createDocumentFragment()),s.create(t,e,this.header)},addContent:function(t,e){return this.content||(this.content=document.createDocumentFragment()),s.create(t,e,this.content)},addFooter:function(t,e){return this.footer||(this.footer=document.createDocumentFragment()),s.create(t,e,this.footer)},build:function(t){return this.border=new l({style:"height: 100%; width: 100%;",gutters:!1}),this._append("top",this.header,this.headerClass),this._append("center",this.content,this.contentClass),this._append("bottom",this.footer,this.footerClass),t.appendChild(this.border.domNode),this.border},_append:function(t,e,i){if(e){var s;i&&i.length>0&&(s=i.join(" ")),this.border.addChild(new c({region:t,content:e,"class":s}))}}});return v});