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

define(["../../../declare","dojo/string","dojo/_base/lang","dojo/aspect","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/query","dojo/i18n!../../../nls/jsapi","dojo/text!./templates/DataCollectionsPage.html","dojo/on","../CheckList","../_WizardPage","../Pagination","dojo/store/Memory","dgrid/List","dgrid/Selection","dijit/_WidgetBase","../AnimationHelper","dijit/Tooltip","dojo/_base/window","dojo/has","dijit/layout/ContentPane","dijit/form/Select","./SearchTextBox"],function(t,e,i,o,s,a,n,l,r,c,h,d,g,u,p,_,f,m,C,v,y){return r=r.geoenrichment.dijit.DataCollectionsPage,t([g],{templateString:c,nls:r,baseClass:"DataCollectionsPage",_checkList:null,selectedCategory:null,selectedCollection:null,selectedVariables:[],shoppingCart:null,variableInfo:null,multiSelect:!0,flyAnim:null,icon:null,constructor:function(){this._ltr=n.isBodyLtr()},buildRendering:function(){this.inherited(arguments),this._checkList=new d({onSelect:i.hitch(this,this._onSelectVariable),onDeselect:i.hitch(this,this._onDeselectVariable),selectionMode:this.multiSelect?"toggle":"single"},this.divVariables),this._checkList.renderRow=i.hitch(this,this._renderRow),this.pagination.createItemContainer=this._createItemContainer,this.pagination.updateItemContainer=this._updateItemContainer,o.after(this.layoutGrid,"resize",i.hitch(this.pagination,this.pagination.resize))},_createItemContainer:function(){var t=a.create("div",{"class":"DataCollectionButton DataBrowser_Clickable TrimWithEllipses"});return t},_updateItemContainer:function(t,e){t.innerHTML=e.metadata.title,t.data=e},_renderRow:function(t){var e=a.create("div",{style:"width:100%"}),o=a.create("div",{"class":"TrimWithEllipses"});"single"!=this.selectionMode&&a.create("div",{"class":"dijit dijitInline dijitCheckBox VarCheck"},o);var s=a.create("div",{"class":"DataBrowserInfoIcon"},o);return a.create("span",{"class":"VarLabel",innerHTML:t.description?t.description:t.alias},o),a.place(o,e),h(s,"click",i.hitch(this,this._toggleTooltip,s,t)),h(s,"mouseenter",i.hitch(this,this._showTooltip,s,t)),h(s,"mouseleave",i.hitch(this,this._hideTooltip,s,t)),h(s,"mousedown,touchstart,MSPointerDown,dgrid-cellfocusin",function(t){t.stopPropagation&&t.stopPropagation()}),e},_toggleTooltip:function(t,e,i){i.stopPropagation&&i.stopPropagation(),this._icon?this._hideTooltip():this._showTooltip(t,e,i)},_showTooltip:function(t,e,o){this._icon=t,this.variableInfo.set("variable",e),v.show(this.variableInfo.domNode.outerHTML,t,["above","below"]),o.stopPropagation&&o.stopPropagation(),h.once(y.doc,"click",i.hitch(this,this._hideTooltip))},_hideTooltip:function(){v.hide(this._icon),this._icon=null},_setSelectedCategoryAttr:function(t){if(this._set("selectedCategory",t),t){var i={categoryName:t.name};this.categoryName.innerHTML=e.substitute(r.categoryName,i),this._checkList.set("store",new p({data:this.theMostPopularVars(t,3)})),this.pagination.set("items",t.dataCollections),this.spnShowAll.innerHTML=e.substitute(r.showAll,i),this._started&&this.resize(),this._setState("done")}},theMostPopularVars:function(t,e){var i=[];if(t){for(var o={},s=0;s<t.dataCollections.length;s++)for(var a=0;a<t.dataCollections[s].variables.length;a++){var n=t.dataCollections[s].variables[a];o[n.idDesc]=n}for(var l in o)o.hasOwnProperty(l)&&i.push(o[l]);i=i.sort(function(t,e){return(e.popularity?e.popularity:0)-(t.popularity?t.popularity:0)}).slice(0,e)}return i},_onSelectVariable:function(t){var e=this._checkList.get("selectedItems");if(this.flyAnim&&t.parentType){var i=this._checkList.row(t.rows[0]).element;this.flyAnim.fly(l(".VarLabel",i)[0],"DataBrowser_SelectVar",["top",this._ltr?"right":"left"])}this._set("selectedVariables",e);for(var o=0;o<e.length;o++)this.shoppingCart.addVariable(e[o])},_onDeselectVariable:function(t){this.shoppingCart.removeVariable(t.rows[0].data.idDesc)},_onSelectCollection:function(t){var e=t.data;if(this.flyAnim){if(!this._ltr){var i=n.position(t),o=window.innerWidth-i.x-i.w;t.style.right=""+o+"px"}var a=this.flyAnim.fly(t,"Breadcrumb_SelectDC",null,!0);s.remove(a,["dgrid-row","dgrid-selected","TrimWithEllipses"]),this._ltr||(t.style.right="auto")}this._set("selectedCollections",[e]),this.onSelect(this._get("selectedCategory"),e.metadata.title)},_showAll:function(){this._set("selectedCollections",this._get("selectedCategory").dataCollections),this.onSelect(this._get("selectedCategory"),this._get("selectedCategory").name)},_gotoCategories:function(){this.gotoCategories()},gotoCategories:function(){},syncWithShoppingCart:function(){for(var t=this._checkList.store.data,e=this.shoppingCart.content,i=0;i<t.length;i++)this._checkList.select(t[i],null,!!e[t[i].idDesc])},onRemoveElementFromShoppingCart:function(t){for(var e=this._checkList.store.data,i=0;i<e.length;i++)if(t===e[i].idDesc){this._checkList.select(e[i],null,!1);break}},_search:function(){if(this.txbSearch.get("value")){for(var t,i=this.txbSearch.get("value"),o=this._get("selectedCategory").dataCollections,s=[],a=0;a<o.length;a++){t={id:o[a].id,metadata:o[a].metadata,keywords:o[a].keywords,variables:[]};for(var n=0;n<o[a].variables.length;n++)this._match(o[a].variables[n],i)&&t.variables.push(o[a].variables[n]);t.variables.length>0&&s.push(t)}if(s.length>0)this._set("selectedCollections",s),this.onSelect(this._get("selectedCategory"),"'"+i+"' "+e.substitute(r.from,{categoryName:this._get("selectedCategory").name}));else{var l={seachKey:i};this.txbSearch.showTooltip(e.substitute(r.noResults,l))}}},_match:function(t,e){return t.alias&&-1!==t.alias.toLowerCase().indexOf(e.toLowerCase())||t.description&&-1!==t.description.toLowerCase().indexOf(e.toLowerCase())||t.fieldCategory&&-1!==t.fieldCategory.toLowerCase().indexOf(e.toLowerCase())}})});