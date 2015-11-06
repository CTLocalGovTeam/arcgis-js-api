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

define(["dojo/aspect","dojo/on","dojo/Evented","dojo/has","dojo/number","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/text!../dijit/FeatureTable/templates/FeatureTable.html","dojo/i18n!../nls/jsapi","dojo/store/Cache","dojo/store/Memory","dojo/store/Observable","dojo/string","dojo/dom-construct","dojo/dom-class","dojo/fx/Toggler","dijit/_WidgetBase","dijit/_OnDijitClickMixin","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/Dialog","dijit/Menu","dijit/MenuItem","dijit/form/DropDownButton","dijit/form/TimeTextBox","dijit/form/DateTextBox","dijit/form/Button","dgrid/OnDemandGrid","dgrid/Selection","dgrid/Keyboard","dgrid/editor","dgrid/extensions/DijitRegistry","dgrid/extensions/ColumnHider","dgrid/extensions/ColumnResizer","../kernel","../lang","../config","../geometry/Extent","../layers/FeatureLayer","../tasks/query","../tasks/StatisticDefinition","../tasks/QueryTask","../dijit/FeatureLayerQueryStore","dijit/layout/BorderContainer","dijit/layout/ContentPane","dojo/query!css2","dojo/domReady!"],function(e,t,i,r,s,n,a,o,d,l,h,c,u,f,g,_,m,y,p,w,I,v,S,b,C,L,F,T,M,D,E,x,H,O,j,N,R,G,P,k,A,B,V,W){var z=n([y,p,w,I,i],{baseClass:"esriFeatureTable",loaded:!1,templateString:d,widgetsInTemplate:!0,i18n:l,map:null,idProperty:"id",columns:[],dataStore:null,grid:null,gridMenu:null,_featureSet:null,featureLayer:null,currentLayer:null,dateOptions:{timeEnabled:!1,timePattern:"HH:mm:ss",datePattern:"YYYY-MM-DD"},hiddenFields:[],outFields:["*"],readOnly:!1,gridOptions:{},noDataMessage:"No Data",allowSelectAll:!1,cellNavigation:!1,selectionMode:"extended",_layerInfo:{},_editorTrackingInfos:{},_gridHeaderText:"${gridTitle} (${featureCount} features, ${featureSelectedCount} selected)",_gridTitle:"Placeholder",_featureCount:0,_featureSelectedCount:0,_currentSelectedRows:[],_currentSelectedRowIds:[],_filteredRowIds:[],disableLayerClick:!0,syncSelection:!0,updateLayerSelection:!1,_batchCount:0,_defaultBatchCount:25,_defaultFeatureCount:2e3,_toggler:null,constructor:function(e,t){n.safeMixin(this,e),t&&(this.gridId=t+"_grid",this.bcNodeId=t+"_bcNode",this.gridMenuId=t+"_gridMenu",this.gridContainerId=t+"_gridContainer",this.optionNodeId=t+"_optionNode",this.StandardGrid=n([H,M,D,E,O,j]),this._listenerHandles=[],this.currentLayer=e.featureLayer||null,this.map=e.map||null,this.dateOptions=e.dateOptions||this.dateOptions,this.hiddenFields=e.hiddenFields||[],this.readOnly=e.readOnly||!1,e.gridOptions&&(this.gridOptions=e.gridOptions||{},this.noDataMessage=e.gridOptions.noDataMessage||this.noDataMessage,this.allowSelectAll=e.gridOptions.allowSelectAll||this.allowSelectAll,this.cellNavigation=e.gridOptions.cellNavigation||this.cellNavigation,this.selectionMode=e.gridOptions.selectionMode||this.selectionMode))},postCreate:function(){this.inherited(arguments),this.map&&t(this.map,"load",a.hitch(this,function(){}))},startup:function(){return this.currentLayer&&this.currentLayer.loadError?void this._showLoadError(this.currentLayer.loadError.message):(this.inherited(arguments),void(this.domNode&&this.currentLayer.loaded?this._init():(t(this.currentLayer,"load",a.hitch(this,function(){this._init()})),t(this.currentLayer,"error",a.hitch(this,function(){this._showLoadError(this.currentLayer.loadError?this.currentLayer.loadError.message:"")})))))},destroy:function(){o.forEach(this._listenerHandles,function(e){e.remove()}),this.map&&(this.map.infoWindow.clearFeatures(),this.map.infoWindow.hide()),this.map=null,this.grid&&(this.grid._destroyColumns(),this.grid.destroy()),this._bcNode.destroyRecursive(),delete this.columns,delete this._layerInfo,this.grid=null,this.columns=null,this.dataStore=null,this.gridMenu=null,this.currentLayer=null,this.featureLayer=null,this.dateOptions=null,this.idProperty=null,this.hiddenFields=null,this.params=null,this._featureSet=null,this.inherited(arguments)},resize:function(){this._resize()},_init:function(){this._userIds={};var e=this.currentLayer.id;this.currentLayer.credential&&(this._userIds[e]=this.currentLayer.credential.userId),this._layerInfo.userId&&(this._userIds[e]=this._layerInfo.userId),this._layerInfo.showAttachments=this.currentLayer.hasAttachments?R.isDefined(this._layerInfo.showAttachments)?this._layerInfo.showAttachments:!0:!1,this._layerInfo.isEditable=this.currentLayer.isEditable()?R.isDefined(this._layerInfo.isEditable)?this._layerInfo.isEditable:!0:!1,this._layerInfo.typeIdField=this.currentLayer.typeIdField,this._layerInfo.layerId=this.currentLayer.id,this._layerInfo.types=this.currentLayer.types,this._layerInfo.fields=this.currentLayer.fields,this._layerInfo._fieldInfo=[],this._layerInfo._features=[],this._getEditingInfo(),this.idProperty=this.currentLayer.objectIdField,this.grid=this._initGrid(),this.grid.startup(),this.grid.resize(),this._listenerHandles.push(this._gridSelectEvent()),this._listenerHandles.push(this._gridDeselectEvent()),this._listenerHandles.push(this._gridRefreshEvent()),this._createTableMenu(),this._toggler=this._createTableToggle(),this._listenerHandles.push(this._tableToggleClickEvent()),this._listenerHandles.push(this._columnClickEvent()),this.loaded=!0,this.emit("load",this.loaded),this.grid.noDataMessage="",this._gridHeaderNode.innerHTML="Loading Feature Data...",this._resize(),this._toggleLoadingIndicator(!0),this._getFeatureCount().then(a.hitch(this,this._queryFeatureLayer)),this._listenerHandles.push(this._layerClickEvent())},selectRows:function(e){var t,i=[],r=[];if(this.grid.clearSelection(),e[0]&&"esri.Graphic"===e[0].declaredClass&&(o.forEach(e,a.hitch(this,function(e){r.push(e.attributes[this.idProperty])})),e=r),1===e.length){t=e[0];var s=this.dataStore.get(e),n=this.dataStore.data.indexOf(s);this.grid.select(t),this._updateGridSelection([s]),this._updateGridHeaderText(),this.grid.scrollTo({x:0,y:this.grid.rowHeight*n}),this.grid.row(t).element&&this.grid.row(t).element.scrollIntoView()}else o.forEach(e,a.hitch(this,function(e){i.push(this.dataStore.get(e))})),this._updateGridSelection(i),this._updateGridHeaderText()},_layerClickEvent:function(){var e=t(this.currentLayer,"click",a.hitch(this,function(e){if(!this.disableLayerClick&&e.graphic&&e.graphic.attributes&&e.graphic.attributes[this.idProperty]){var t=e.graphic,i=t.attributes[this.idProperty],r=new A;r.returnGeometry=this.map?!0:!1,r.objectIds=[i],this.currentLayer.selectFeatures(r,k.SELECTION_NEW,a.hitch(this,function(e){if(e.length){if(this.map){var t=this._calcGraphicsExtent(e).getCenter();this.map.centerAt(t).then(a.hitch(this,function(){this.map.infoWindow.setFeatures(e)}))}var r=this.dataStore.get(i),s=this.dataStore.data.indexOf(r);this.grid.clearSelection(),this.grid.select(i),this._updateGridSelection([r]),this._updateGridHeaderText(),this.grid.scrollTo({x:0,y:this.grid.rowHeight*s}),this.grid.row(i).element&&this.grid.row(i).element.scrollIntoView()}}))}}));return e},filterSelectedRecords:function(e){e?this._showSelectedRecords():this.grid.set("query",{})},_selectFeatures:function(){},_updateGridSelection:function(e){e?(this._currentSelectedRowIds=[],this._currentSelectedRows=e,this._featureSelectedCount=e.length,o.forEach(e,a.hitch(this,function(e){this._currentSelectedRowIds.push(e[this.idProperty])}))):(this._currentSelectedRowIds=[],this._currentSelectedRows=[],this._featureSelectedCount=0)},_showInfoWindow:function(){},_hideInfoWindow:function(){},_getEditingInfo:function(){var e=[];this.currentLayer.editFieldsInfo&&(this.currentLayer.editFieldsInfo.creatorField&&e.push(this.currentLayer.editFieldsInfo.creatorField),this.currentLayer.editFieldsInfo.creationDateField&&e.push(this.currentLayer.editFieldsInfo.creationDateField),this.currentLayer.editFieldsInfo.editorField&&e.push(this.currentLayer.editFieldsInfo.editorField),this.currentLayer.editFieldsInfo.editDateField&&e.push(this.currentLayer.editFieldsInfo.editDateField)),this._editorTrackingInfos[this.currentLayer.id]=e},_gridRefreshEvent:function(){var e=t(this.grid,"dgrid-refresh-complete",a.hitch(this,function(e){this.grid.columns[0]&&this.emit("dgrid-refresh-complete",e)}));return e},_gridSelectEvent:function(){var e=t(this.grid,"dgrid-select",a.hitch(this,function(e){this.emit("dgrid-select",e.rows);var t=[];if(o.forEach(e.rows,a.hitch(this,function(e){t.push(e.data)})),this._updateGridSelection(t),this._updateGridHeaderText(),this.map){this.map.infoWindow.clearFeatures(),this.map.infoWindow.hide();var i=new A;i.returnGeometry=this.map?!0:!1,i.objectIds=this._currentSelectedRowIds,this.updateLayerSelection&&this.map.getLayer(this.currentLayer.id).selectFeatures(i,k.SELECTION_NEW,a.hitch(this,function(e){if(e.length){var t=this._calcGraphicsExtent(e).getCenter();this.map.centerAt(t).then(a.hitch(this,function(){this.map.infoWindow.setFeatures(e)}))}}))}}));return e},_gridDeselectEvent:function(){var e=t(this.grid,"dgrid-deselect",a.hitch(this,function(e){this.emit("dgrid-deselect",e.rows),this._updateGridSelection(),this._updateGridHeaderText()}));return e},_getFeatureCount:function(){var e=new A;return e.returnGeometry=!1,e.returnIdsOnly=!1,e.where="1=1",G.defaults.io.timeout=1e4,this.currentLayer.queryCount(e).then(a.hitch(this,function(e){return G.defaults.io.timeout=6e4,this._featureCount=e,e}),function(){return G.defaults.io.timeout=6e4,this._featureCount=this._defaultFeatureCount,console.log("Could not get feature count. Defaulting to 2000 features"),null})},_queryFeatureLayer:function(){var e=new A;e.where="1=1",e.outFields=this.outFields,e.returnGeometry=!1,this.currentLayer.queryFeatures(e,a.hitch(this,function(e){var t=R.isDefined(this.currentLayer.maxRecordCount)?this.currentLayer.maxRecordCount:1e3;this._batchCount=Math.min(t,this._defaultBatchCount),this._toggleLoadingIndicator(!1),this.grid.noDataMessage=this.noDataMessage,this._featureSet=e,this._generateColumnsFromFields(e.fields),this.grid.set("columns",this.columns),this._updateGridHeaderText(),e.exceededTransferLimit?this._generateCacheStore():this._generateMemoryStore(e.features),this._layerInfo._features=e.features,this.grid.set("store",this.dataStore)}),a.hitch(this,function(e){this._showLoadError(e.message)}))},_generateColumnsFromFields:function(e){var t=[];o.forEach(e,a.hitch(this,function(e,i){var r=this._layerInfo.typeIdField&&e.name===this._layerInfo.typeIdField||!1,s=this.currentLayer.fields[i].domain||!1,n=-1!==o.indexOf(this.hiddenFields,e.name)||"esriFieldTypeOID"===e.type||"esriFieldTypeGlobalID"===e.type||-1!==o.indexOf(this._editorTrackingInfos[this.currentLayer.id],e.name),d=this._layerInfo.isEditable&&this._layerInfo.isEditable&&e.name!==this.idProperty&&this.readOnly===!1,l=this.currentLayer.fields[i].nullable||!1,h="esriFieldTypeDate"===e.type;this._layerInfo._fieldInfo[i]={idx:i,name:e.name,type:e.type,isDomainField:s,isTypeIdField:r,isHidden:n,isEditable:d,isNullable:l,isDate:h},t.push(h?d?this.dateOptions.timeEnabled?this._generateDateTimeEditorColumn(e,this._layerInfo._fieldInfo[i]):this._generateDateTimeEditorColumn(e,this._layerInfo._fieldInfo[i]):this._generateDateTimeColumn(e,this._layerInfo._fieldInfo[i]):s?{label:e.alias,field:e.name,type:e.type,hidden:n,get:a.hitch(this,function(t){var r=this._findFirst(this.currentLayer.fields[i].domain.codedValues,"code",t[e.name]);return null!==r?r.name:null})}:r?{label:e.alias,field:e.name,type:e.type,hidden:n,get:a.hitch(this,function(t){var i=this._findFirst(this._layerInfo.types,"id",t[e.name]);return null!==i?i.name:null})}:{label:e.alias,field:e.name,type:e.type,hidden:n,get:a.hitch(this,function(t){var i,r=this._findFirst(this._layerInfo.types,"id",t[this._layerInfo.typeIdField]);return r&&r.domains&&r.domains[e.name]&&r.domains[e.name].codedValues&&(i=this._findFirst(r.domains[e.name].codedValues,"code",t[e.name])),i?i.name:t[e.name]})})})),this.columns=t},_generateDateTimeColumn:function(e,t){var i={label:e.alias,field:e.name,type:e.type,hidden:t.isHidden,get:a.hitch(this,function(t){var i=""===t[e.name]?null:new Date(t[e.name]);return this.dateOptions.timeEnabled||(i=i.toDateString()),i})};return i},_generateDateTimeEditorColumn:function(e,t){var i;return i=this.dateOptions.timeEnabled?{label:e.alias,field:e.name,type:e.type,hidden:t.isHidden,get:a.hitch(this,function(t){return""===t[e.name]?null:new Date(t[e.name])}),renderCell:a.hitch(this,function(e,t,i){var r=new F({value:t,datePattern:this.dateOptions.datePattern});r.placeAt(i);var s=new L({value:t,timePattern:this.dateOptions.timePattern});s.placeAt(i)})}:x({label:e.alias,field:e.name,type:e.type,hidden:t.isHidden,get:a.hitch(this,function(t){return""===t[e.name]?null:new Date(t[e.name])})},F)},_generateCacheStore:function(){var e=new W({layer:this.currentLayer,objectIds:null,totalCount:this._featureCount,batchCount:this._batchCount,where:"1=1",orderByFields:""}),t=new c;this.dataStore=new h(e,t,{})},_generateMemoryStore:function(e){var t=[];o.forEach(e,a.hitch(this,function(e){t.push(e.attributes)})),this.dataStore=new u(new c({data:t,idProperty:this.idProperty}))},_initGrid:function(){this.dataStore=new u(new c({data:null,idProperty:this.idProperty}));var t=new this.StandardGrid({store:this.dataStore,columns:this.columns,noDataMessage:this.noDataMessage,selectionMode:this.selectionMode,allowSelectAll:this.allowSelectAll,cellNavigation:this.cellNavigation},this.gridId);return e.before(t,"removeRow",a.hitch(this,function(e){o.forEach(this.columns.length,a.hitch(this,function(i,r){var s=t.cell(e,r).element,n=(s.contents||s).widget;n&&n.destroyRecursive()}))})),e.after(t,"renderHeader",a.hitch(this,function(){t._sortListener.remove()})),t},_resize:function(){this._bcNode.resize(),this._gridMenu.resize(),this._gridContainer.resize(),this.grid&&this.grid.resize()},_updateGridHeaderText:function(){this._gridHeaderNode.innerHTML=f.substitute(this._gridHeaderText,{gridTitle:this.currentLayer.name,featureCount:this._featureCount,featureSelectedCount:this._featureSelectedCount})},_columnClickEvent:function(){return t(this.grid,".dgrid-header .dgrid-cell:click",a.hitch(this,this._showColumnMenu))},_showColumnMenu:function(e){this.columnMenu&&(this._oldColumnMenu=this.columnMenu,this.columnMenu=null),this.columnMenu=new S({});var i=this.grid.cell(e),r=i.column.id,s=this.columns[r].type,n=[l.widgets.FeatureTable.sortAsc,l.widgets.FeatureTable.sortDesc],d=["iconSortAscending","iconSortDescending"],h=[this._sortAscending,this._sortDescending];if(o.forEach(n,a.hitch(this,function(e,t){var i=new b({label:e,iconClass:d[t],baseClass:"esriFeatureTable_menuItem",onClick:a.hitch(this,h[t],r)});this.columnMenu.addChild(i)})),this.currentLayer.supportsStatistics&&("esriFieldTypeDouble"===s||"esriFieldTypeSingle"===s||"esriFieldTypeInteger"===s||"esriFieldTypeSmallInteger"===s)){var c=new b({label:"Statistics",iconClass:"iconTableStatistics",baseClass:"esriFeatureTable_menuItem",onClick:a.hitch(this,this._getColumnStats,r)});this.columnMenu.addChild(c)}this.columnMenu.startup(),this.columnMenu._openMyself({target:e.target,delegatedTarget:i,iframe:null,coords:{x:e.pageX,y:e.pageY}}),t(this.columnMenu,"close",a.hitch(this,function(){this._oldColumnMenu&&(this._oldColumnMenu.destroyRecursive(),this._oldColumnMenu=null)}))},_sortAscending:function(e){this.grid.set("sort",[{attribute:this.columns[e].field,ascending:!0}])},_sortDescending:function(e){this.grid.set("sort",[{attribute:this.columns[e].field,descending:!0}])},_getColumnStats:function(e){var t=this.columns[e].field,i=new A;i.outFields=[t],i.outStatistics=[],i.where="1=1";var r=["count","sum","min","max","avg","stddev"],s=["countField","sumField","minField","maxField","avgField","stddevField"];o.forEach(r,a.hitch(this,function(e,r){var n=new B;n.statisticType=e,n.onStatisticField=t,n.outStatisticFieldName=s[r],n.displayFieldName=t,i.outStatistics.push(n)}));var n=[];this._filteredRowIds.length>0&&(n=this._filteredRowIds),i.where&&n.length>0&&(i.where="("+i.where+") AND ("+this.idProperty+" IN ("+n.toString()+"))");var d=new V(this.currentLayer.url);d.execute(i).then(a.hitch(this,function(e){e.features&&e.features.length&&this._showStatisticsDialog(e,t)}),function(e){console.log("Could not get statistics.",e?e.message:e)})},_showStatisticsDialog:function(e,t){this.statisticsDialog&&this.statisticsDialog.destroy();var i=e.features[0].attributes,r={pattern:"#,###,###,##0.########"},n=["Number of Values","Sum of Values","Minimum","Maximum","Average","Standard Deviation"],o=g.create("div",{className:"esriAGOTableStatistics",innerHTML:""});g.create("div",{className:"header",innerHTML:"Field: "+t},o),g.create("div",{className:"hzLine",innerHTML:""},o);var d=g.create("table",{className:"attrTable",innerHTML:"",style:{cellpadding:0,cellspacing:0}},o),l={};for(var h in i)i.hasOwnProperty(h)&&(l[h.toLowerCase()]=i[h]);var c=g.create("tbody",{},d),u=g.create("tr",{valign:"top"},c);g.create("td",{"class":"attrName",innerHTML:n[0]},u),g.create("td",{"class":"attrValue",innerHTML:R.isDefined(l.countfield)?s.format(l.countfield,r):""},u),u=g.create("tr",{valign:"top"},c),g.create("td",{"class":"attrName",innerHTML:n[1]},u),g.create("td",{"class":"attrValue",innerHTML:R.isDefined(l.sumfield)?s.format(l.sumfield,r):""},u),u=g.create("tr",{valign:"top"},c),g.create("td",{"class":"attrName",innerHTML:n[2]},u),g.create("td",{"class":"attrValue",innerHTML:R.isDefined(l.minfield)?s.format(l.minfield,r):""},u),u=g.create("tr",{valign:"top"},c),g.create("td",{"class":"attrName",innerHTML:n[3]},u),g.create("td",{"class":"attrValue",innerHTML:R.isDefined(l.maxfield)?s.format(l.maxfield,r):""},u),u=g.create("tr",{valign:"top"},c),g.create("td",{"class":"attrName",innerHTML:n[4]},u),g.create("td",{"class":"attrValue",innerHTML:R.isDefined(l.avgfield)?s.format(s.round(l.avgfield,this._roundPos(l.avgfield)),r):""},u),u=g.create("tr",{valign:"top"},c),g.create("td",{"class":"attrName",innerHTML:n[5]},u),g.create("td",{"class":"attrValue",innerHTML:R.isDefined(l.stddevfield)?s.format(s.round(l.stddevfield,this._roundPos(l.stddevfield)),r):""},u),g.create("div",{className:"break",innerHTML:""},o),this.statisticsDialog=new v({title:"Statistics",content:o,baseClass:"esriFeatureTable_dialog"});{var f=g.create("button",{type:"button"},this.statisticsDialog.containerNode);new T({label:"Close",baseClass:"primary dijitButton",onClick:a.hitch(this,function(){this.statisticsDialog.hide()})},f)}this.statisticsDialog.show()},_defaultSortOrder:function(){this.grid.set("sort",[{attribute:this.idProperty,ascending:!0}])},_filterRows:function(){},_showSelectedRecords:function(){var e=this._filteredRowIds=this._currentSelectedRowIds;this._currentSelectedRows&&this._currentSelectedRowIds&&this.grid.set("query",a.hitch(this,function(t){return~e.indexOf(t[this.idProperty])?!0:!1}))},_centerOnSelection:function(){var e=this._currentSelectedRowIds,t=new A;t.objectIds=e,t.outFields=["*"],this._currentSelectedRows.length>0&&this._currentSelectedRowIds.length>0&&this.currentLayer.queryFeatures(t,a.hitch(this,function(e){this.map.setExtent(this._calcGraphicsExtent(e.features))}))},clearSelection:function(){this._clearSelection()},_clearSelection:function(){this._currentSelectedRowIds=[],this._currentSelectedRows=[],this._featureSelectedCount=0,this._filteredRowIds=[],this.grid.set("query",{}),this._updateGridHeaderText(),this.map&&(this.map.infoWindow.clearFeatures(),this.map.infoWindow.hide())},_deleteSelectedFeatures:function(){},_showAttachments:function(){},_showHideColumns:function(){this.grid._toggleColumnHiderMenu()},_exportToCSV:function(){},_createTableToggle:function(){var e=new m({node:this.gridContainerId});return this._toggleOpened=!0,e},_tableToggleClickEvent:function(){var e=t(this.tableCloseButton,"click",a.hitch(this,function(){this._toggleOpened?(_.remove(this.tableCloseButton,"toggleOpened"),_.add(this.tableCloseButton,"toggleClosed"),this._toggler.hide(),this._gridContainer.domNode.style.display="none",this._resize()):(_.remove(this.tableCloseButton,"toggleClosed"),_.add(this.tableCloseButton,"toggleOpened"),this._toggler.show(),this._gridContainer.domNode.style.display="block",this._resize()),this._toggleOpened=!this._toggleOpened}));return e},_createTableMenu:function(){this.gridMenu=new S({});var e=[l.widgets.FeatureTable.defaultSort,l.widgets.FeatureTable.showSelected,l.widgets.FeatureTable.clearSelection,l.widgets.FeatureTable.toggleColumns],t=[this._defaultSortOrder,this._showSelectedRecords,this._clearSelection,this._showHideColumns];o.forEach(e,a.hitch(this,function(e,i){var r=new b({label:e,baseClass:"esriFeatureTable_menuItem",onClick:a.hitch(this,t[i])});this.gridMenu.addChild(r)}));new C({label:l.widgets.geocodeMatch.match.tableOptionsLabel,dropDown:this.gridMenu},this.optionNodeId);this.gridMenu.startup()},_roundPos:function(e){return e>=1e3?0:e>=10?2:e>=0?4:6},_calcGraphicsExtent:function(e){var t,i,r=e[0].geometry,s=r.getExtent(),n=e.length;for(null===s&&(s=new P(r.x,r.y,r.x,r.y,r.spatialReference)),i=1;n>i;i++)r=e[i].geometry,t=r.getExtent(),null===t&&(t=new P(r.x,r.y,r.x,r.y,r.spatialReference)),s=s.union(t);return s},_toggleLoadingIndicator:function(e){this._gridLoadingIndicatorNode.style.display=e?"block":"none"},_findFirst:function(e,t,i){var r=o.filter(e,function(e){return e.hasOwnProperty(t)&&e[t]===i});return r&&r.length?r[0]:null},_showLoadError:function(){this._toggleLoadingIndicator(!1),this._gridHeaderNode.innerHTML="Error Loading Data."}});return r("extend-esri")&&a.setObject("dijit.FeatureTable",z,N),z});