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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/Color","dojo/_base/connect","dojo/_base/json","dojo/_base/fx","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/fx/easing","dojo/number","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/form/NumberSpinner","dijit/form/TimeTextBox","dijit/form/DateTextBox","../../kernel","../../lang","../../graphic","./AnalysisBase","./_AnalysisOptions","./CreditEstimator","./utils","./TrafficTime","../../toolbars/draw","../PopupTemplate","../../layers/FeatureLayer","../../symbols/PictureMarkerSymbol","dojo/i18n!../../nls/jsapi","dojo/text!./templates/PlanRoutes.html"],function(t,e,i,s,a,r,n,o,h,l,d,u,y,c,p,m,L,g,S,_,D,R,f,A,v,T,I,w,b,P,x,M,C,F,E,j,B,U,N,O,Z,k,W,J,Y,G,z,V,X){var Q=e([S,_,D,R,f,O,N],{declaredClass:"esri.dijit.analysis.PlanRoutes",templateString:X,esriDijitPath:t.toUrl(".."),widgetsInTemplate:!0,stopsLayer:null,outputLayerName:null,distanceDefaultUnits:"Miles",returnToStart:!0,limitMaxTimePerRoute:!0,routeCount:null,maxStopsPerRoute:null,startLayer:null,endLayer:null,i18n:null,toolName:"PlanRoutes",helpFileName:"PlanRoutes",resultParameter:["routesLayer","assignedStopsLayer","unassignedStopsLayer"],getResultLyrInfos:!0,constructor:function(t){this._pbConnects=[],t.containerNode&&(this.container=t.containerNode)},destroy:function(){this.inherited(arguments),s.forEach(this._pbConnects,r.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),i.mixin(this.i18n,V.common),i.mixin(this.i18n,V.bufferTool),i.mixin(this.i18n,V.driveTimes),i.mixin(this.i18n,V.planRoutesTool),i.mixin(this.i18n,V.toolbars)},postCreate:function(){this.inherited(arguments),m.add(this._form.domNode,"esriSimpleForm"),this._outputLayerInput.set("validator",i.hitch(this,this.validateServiceName)),this._buildUI()},startup:function(){},_onClose:function(t){this._startDrawPointfLayer&&this.map.removeLayer(this._startDrawPointfLayer),this._endDrawPointfLayer&&this.map.removeLayer(this._endDrawPointfLayer),this._startToolbar.deactivate(),this._endToolbar.deactivate(),this.emit("close",{save:!t})},clear:function(){this._startDrawPointfLayer&&this.map.removeLayer(this._startDrawPointfLayer),this._endDrawPointfLayer&&this.map.removeLayer(this._endDrawPointfLayer),this._startToolbar.deactivate(),this._endToolbar.deactivate()},_toUpperFirstLetter:function(t){return t.slice(0,1).toUpperCase()+t.slice(1)},_handleShowCreditsClick:function(t){t.preventDefault();var e,s,a={};e=this.get("startLayer"),s=this.get("returnToStart")||this.get("endLayer"),this._form.validate()&&(a.stopsLayer=n.toJson(k.constructAnalysisInputLyrObj(this.stopsLayer)),a.routeStartTime=this.get("routeStartTime"),a.routeCount=this.get("routeCount"),this.get("startLayer")&&(a.startLayer=n.toJson(k.constructAnalysisInputLyrObj(this.get("startLayer")))),"DRAW"!==this._startLayerSelect.get("value")&&(a.startLayerRouteIDField=this.get("startLayerRouteIDField")),a.maxStopsPerRoute=this.get("maxStopsPerRoute"),a.maxRouteTime=this.get("maxRouteTime"),a.stopServiceTime=this.get("stopServiceTime"),a.returnToStart=this.get("returnToStart"),a.travelMode=this._travelModeSelect.get("value"),this.get("endLayer")&&(a.endLayer=n.toJson(k.constructAnalysisInputLyrObj(this.get("endLayer")))),"DRAW"!==this._endLayerSelect.get("value")&&(a.endLayerRouteIDField=this.get("endLayerRouteIDField")),this.returnFeatureCollection||(a.OutputName=n.toJson({serviceProperties:{name:this.get("outputLayerName")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=n.toJson({extent:this.map.extent._normalize(!0)})),this.getCreditsEstimate(this.toolName,a).then(i.hitch(this,function(t){this._usageForm.set("content",t),this._usageDialog.show()})))},validateStartEndLayer:function(){var t,e,i,s;t=this.get("startLayer"),e=this.get("endLayer"),i=this._startLayerSelect.getOptions(this._startLayerSelect.get("value")),s=this._endLayerSelect.getOptions(this._endLayerSelect.get("value")),!B.isDefined(t)&&B.isDefined(i)&&(i.value="",this._startLayerSelect.updateOption(i),this._startLayerSelect.set("message",this.i18n.startEndPtsValidMsg),this._startLayerSelect.validate()),this.get("returnToStart")||e||!B.isDefined(s)||(s.value="",this._endLayerSelect.set("message",this.i18n.startEndPtsValidMsg),this._endLayerSelect.updateOption(s),this._endLayerSelect.validate()),B.isDefined(this.startLayer)&&B.isDefined(i)&&""===i.value&&(i.value="DRAW",this._startLayerSelect.updateOption(i),this._startLayerSelect.validate()),B.isDefined(this.endLayer)&&B.isDefined(s)&&""===s.value&&(s.value="DRAW",this._endLayerSelect.updateOption(s),this._endLayerSelect.validate())},_handleSaveBtnClick:function(){var t,e,i={},s={};this.validateStartEndLayer(),this._form.validate()&&(this._saveBtn.set("disabled",!0),i.stopsLayer=n.toJson(k.constructAnalysisInputLyrObj(this.stopsLayer)),i.routeStartTime=this.get("routeStartTime"),i.routeCount=this.get("routeCount"),this.get("startLayer")&&(i.startLayer=n.toJson(k.constructAnalysisInputLyrObj(this.get("startLayer")))),"DRAW"!==this._startLayerSelect.get("value")&&(i.startLayerRouteIDField=this.get("startLayerRouteIDField")),i.maxStopsPerRoute=this.get("maxStopsPerRoute"),i.maxRouteTime=this.get("maxRouteTime"),i.stopServiceTime=this.get("stopServiceTime"),i.returnToStart=this.get("returnToStart"),e=this._travelModeSelect.getOptions(this._travelModeSelect.get("value")),i.travelMode=e&&n.toJson(e.travelMode),this.get("endLayer")&&(i.endLayer=n.toJson(k.constructAnalysisInputLyrObj(this.get("endLayer")))),"DRAW"!==this._endLayerSelect.get("value")&&(i.endLayerRouteIDField=this.get("endLayerRouteIDField")),this.returnFeatureCollection||(i.OutputName=n.toJson({serviceProperties:{name:this.get("outputLayerName")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(i.context=n.toJson({extent:this.map.extent._normalize(!0)})),this.returnFeatureCollection&&(t={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(t.extent=this.map.extent._normalize(!0)),i.context=n.toJson(t)),s.jobParams=i,s.itemParams={description:d.substitute(this.i18n.itemDescription,{layername:this.stopsLayer.name,distance_field:i.Distances||i.Field,units:i.Units}),tags:d.substitute(this.i18n.itemTags,{layername:this.stopsLayer.name}),snippet:this.i18n.itemSnippet},this.showSelectFolder&&(s.itemParams.folder=this.get("folderId")),this.execute(s))},_handleResultLyrInputChange:function(t){this.set("outputLayerName",t)},_save:function(){},_buildUI:function(){var t=!0;k.initHelpLinks(this.domNode,this.showHelp),u.set(this._chooseFolderRow,"display",this.showSelectFolder===!0?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(i.hitch(this,function(t){this.folderStore=t,k.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})})),u.set(this._chooseExtentDiv,"display",this.showChooseExtent===!0?"inline-block":"none"),this.get("showSelectAnalysisLayer")&&(!this.get("stopsLayer")&&this.get("stopsLayers")&&this.set("stopsLayer",this.stopsLayers[0]),k.populateAnalysisLayers(this,"stopsLayer","stopsLayers")),k.addReadyToUseLayerOption(this,[this._analysisSelect]),k.populateTravelModes({selectWidget:this._travelModeSelect,widget:this,allowmode:"time",enableTravelModes:this.get("enableTravelModes"),selectDefaultMode:!0}),this.outputLayerName&&(this.outputLayerInput.set("value",this.outputLayerName),t=!1),this.stopsLayer&&this._updateAnalysisLayerUI(t),this.returnToStart&&this._returnStartCheck.set("value",this.returnToStart),this._limitMaxTimeCheck.set("value",this.limitMaxTimePerRoute),this._handleLimitMaxTimeCheckChange(this.limitMaxTimePerRoute),this.routeCount&&this._routesInput.set("value",this.routeCount),this.maxStopsPerRoute&&this._maxPtsRouteInput.set("value",this.maxStopsPerRoute),this._loadConnections()},_updateAnalysisLayerUI:function(t){var e=[{value:"DRAW",label:this.i18n.createStartLoc}],a=[{value:"DRAW",label:this.i18n.createEndLoc}];B.isDefined(this.stopsLayer.queryCount)&&k.getLayerFeatureCount(this.stopsLayer,{}).then(i.hitch(this,function(t){this._stopsLayerCount=t,y.set(this._numStopsLabel,"innerHTML",d.substitute(this.i18n.stopsLabel,{numStops:t}))}),function(t){console.log(t)}),t&&(this.outputLayerName=d.substitute(this.i18n.outputLayerName,{layername:this.stopsLayer.name})),this._updateStops(),this._handleExtentCheckChange(this.showChooseExtent),y.set(this._toolDescription,"innerHTML",d.substitute(this.i18n.toolDefine,{layername:this.stopsLayer.name})),this.outputLayerName&&this._outputLayerInput.set("value",this.outputLayerName),this.featureLayers&&(this._startLayerSelect.removeOption(this._startLayerSelect.getOptions()),this._endLayerSelect.removeOption(this._endLayerSelect.getOptions()),s.forEach(this.featureLayers,function(t,i){e.push({value:i+1,label:t.name}),a.push({value:i+1,label:t.name})},this),this._startLayerSelect.addOption(e),this._endLayerSelect.addOption(a)),this.startLayer?(this._startLayerSelect.set("value",this.startLayer),u.set(this._startRouteIdRow,"display","")):(this._startLayerSelect.set("value","DRAW"),u.set(this._startRouteIdRow,"display","none")),this.endLayer?(this._endLayerSelect.set("value",this.endLayer),u.set(this._endRouteIdRow,"display","")):(this._endLayerSelect.set("value","DRAW"),u.set(this._endRouteIdRow,"display","none"))},_handleAnalysisLayerChange:function(t){var e,i,a;"browse"===t?(this._analysisquery||(this._analysisquery=this._browsedlg.browseItems.get("query")),this._browsedlg.browseItems.set("query",this._analysisquery+' AND tags:"point"'),this._isAnalysisSelect=!0,this._browsedlg.show()):(e=this.stopsLayers[t],i=this.featureLayers.slice(),a=s.some(i,function(t){return t===this.stopsLayer},this),a||i.push(this.stopsLayer),this.stopsLayer=e,this.set("featureLayers",i),this._updateAnalysisLayerUI(!0))},_addMinutes:function(t,e){return new Date(t.getTime()+6e4*e)},_loadConnections:function(){this.on("start",i.hitch(this,"_onClose",!1)),this._connect(this._closeBtn,"onclick",i.hitch(this,"_onClose",!0))},_handleBrowseItemsSelect:function(t){t&&t.selection&&k.addAnalysisReadyLayer({item:t.selection,layers:this.stopsLayers,layersSelect:this._analysisSelect,browseDialog:this._browsedlg,widget:this}).always(i.hitch(this,function(){this.set("stopsLayer",this.stopsLayers[this._analysisSelect.get("value")]),this._updateAnalysisLayerUI(!0)}))},_setAnalysisGpServerAttr:function(t){t&&(this.analysisGpServer=t,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setStopsLayerAttr:function(t){B.isDefined(t)&&"esriGeometryPoint"===t.geometryType&&(this.stopsLayer=t)},_getStopsLayerAttr:function(){return this.stopsLayer},_setStopsLayersAttr:function(t){this.stopLayers=t},_setFeatureLayersAttr:function(t){this.featureLayers=s.filter(t,function(t){return B.isDefined(t)&&t!==this.stopsLayer&&"esriGeometryPoint"===t.geometryType?!0:void 0},this)},_getFeatureLayersAttr:function(){return this.featureLayers},_setDisableRunAnalysisAttr:function(t){this._saveBtn.set("disabled",t)},validateServiceName:function(t){return k.validateServiceName(t,{textInput:this._outputLayerInput})},_setMapAttr:function(t){this.map=t,this._startToolbar=new J(this.map),this._endToolbar=new J(this.map),r.connect(this._startToolbar,"onDrawEnd",i.hitch(this,this._addStartFeatures)),r.connect(this._endToolbar,"onDrawEnd",i.hitch(this,this._addEndFeatures)),this.map.on("extent-change",i.hitch(this,this._updateStops))},_getMapAttr:function(){return this.map},_setDistanceDefaultUnitsAttr:function(t){this.distanceDefaultUnits=t},_getDistanceDefaultUnitsAttr:function(){return this.distanceDefaultUnits},_setReturnToStartAttr:function(t){this.returnToStart=t},_getReturnToStartAttr:function(){return this._returnStartCheck&&(this.returnToStart=this._returnStartCheck.get("checked")),this.returnToStart},_setStartLayerAttr:function(t){this.startLayer=t},_getStartLayerAttr:function(){return this._startLayerSelect&&("DRAW"===this._startLayerSelect.get("value")||""===this._startLayerSelect.get("value")?this._startDrawPointfLayer&&this._startDrawPointfLayer.graphics.length>0?this.startLayer=this._startDrawPointfLayer:this._startLayerSelect.validate():this._startLayerSelect.get("value")&&(this.startLayer=this.featureLayers[this._startLayerSelect.get("value")-1])),this.startLayer},_setEndLayerAttr:function(t){this.endLayer=t},_getEndLayerAttr:function(){return this.get("returnToStart")?this.endLayer=null:!this.get("returnToStart")&&this._endLayerSelect&&("DRAW"===this._endLayerSelect.get("value")||""===this._endLayerSelect.get("value")?this._endDrawPointfLayer&&this._endDrawPointfLayer.graphics.length>0?this.endLayer=this._endDrawPointfLayer:this._endLayerSelect.validate():this._endLayerSelect.get("value")&&(this.endLayer=this.featureLayers[this._endLayerSelect.get("value")-1])),this.endLayer},_setLimitMaxTimePerRouteAttr:function(t){this.limitMaxTimePerRoute=t},_getLimitMaxTimePerRouteAttr:function(){return this._limitMaxTimeCheck&&(this.limitMaxTimePerRoute=this._limitMaxTimeCheck.get("value")),this.limitMaxTimePerRoute},_setRouteCountAttr:function(t){this.routeCount=t},_getRouteCountAttr:function(){return this._routesInput&&(this.routeCount=this._routesInput.get("value")),this.routeCount},_setMaxStopsPerRouteAttr:function(t){this.maxStopsPerRoute=t},_getMaxStopsPerRouteAttr:function(){return this._maxPtsRouteInput&&(this.maxStopsPerRoute=this._maxPtsRouteInput.get("value")),this.maxStopsPerRoute},_setStopServiceTimeAttr:function(t){this.stopServiceTime=t},_getStopServiceTimeAttr:function(){return this._servStopMinutesInput&&(this.stopServiceTime=this._servStopMinutesInput.get("value")+this._servStopsSecondsInput.get("value")/60),this.stopServiceTime},_setMaxRouteTimeAttr:function(t){this.maxRouteTime=t},_getMaxRouteTimeAttr:function(){return this._limitMaxTimeCheck.get("checked")&&(this.maxRouteTime=60*this._hoursInput.get("value")+this._minutesInput.get("value")),this.maxRouteTime},_setRouteStartTimeAttr:function(t){this.routeStartTime=t},_getRouteStartTimeAttr:function(){if(this._startDay){var t,e,i,s,a,r;t=this._startDay.get("value"),e=this._startTime.get("value"),i=t.toDateString(),s=e.toTimeString(),a=-1!==s.indexOf("GMT")?i+" "+s.substring(0,s.indexOf("GMT")+"GMT".length):i+" "+s.split(" ")[0]+" GMT",r=new Date(a),this.routeStartTime=r.getTime()}return this.routeStartTime},_setEndLayerRouteIDFieldAttr:function(t){this.endLayerRouteIDField=t},_getEndLayerRouteIDFieldAttr:function(){return this.get("returnToStart")||(this.endLayerRouteIDField=this._endRouteIdSelect.get("value")),this.endLayerRouteIDField},_setStartLayerRouteIDFieldAttr:function(t){this.startLayerRouteIDField=t},_getStartLayerRouteIDFieldAttr:function(){return this._startRouteIdSelect&&(this.startLayerRouteIDField=this._startRouteIdSelect.get("value")),this.startLayerRouteIDField},_getOutputLayerNameAttr:function(){return this._outputLayerInput&&(this.outputLayerName=this._outputLayerInput.get("value")),this.outputLayerName},_setOutputLayerNameAttr:function(t){this.outputLayerName=t},_connect:function(t,e,i){this._pbConnects.push(r.connect(t,e,i))},_handleStartDrawBtnChange:function(t){t?(this.emit("drawtool-activate",{}),this._endPointDrawBtn.set("checked",!1),this.i18n.draw.addPoint=this.i18n.addPoint,this._startDrawPointfLayer?this._startDrawPointfLayer.graphics.length&&(this.i18n.draw.addPoint=this.i18n.movePoint):this._startDrawPointfLayer=this._createPointFeatColl("startDrawPoint"),this._startToolbar.activate(J.POINT)):(this._startToolbar.deactivate(),this._endPointDrawBtn.get("checked")||this.emit("drawtool-deactivate",{}))},_handleEndDrawBtnChange:function(t){t?(this.emit("drawtool-activate",{}),this._startPointDrawBtn.set("checked",!1),this.i18n.draw.addPoint=this.i18n.addPoint,this._endDrawPointfLayer?this._endDrawPointfLayer.graphics.length&&(this.i18n.draw.addPoint=this.i18n.movePoint):this._endDrawPointfLayer=this._createPointFeatColl("endDrawPoint"),this._endToolbar.activate(J.POINT)):(this._endToolbar.deactivate(),this._startPointDrawBtn.get("checked")||this.emit("drawtool-deactivate",{}))},_handleStartLayerChange:function(t){var e;t&&"DRAW"!==t&&this.featureLayers[t-1].graphics&&this.featureLayers[t-1].graphics.length>1?(this.map.getLayer("startDrawPoint")&&this.map.getLayer("startDrawPoint").hide(),u.set(this._startRouteIdRow,"display",""),this._startPointDrawBtn.set("disabled",!0),this._startPointDrawBtn.set("checked",!1),e=this.featureLayers[t-1].fields,this._startRouteIdSelect.removeOption(this._startRouteIdSelect.getOptions()),s.forEach(e,function(t){-1!==s.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeString","esriFieldTypeDate"],t.type)&&this._startRouteIdSelect.addOption({value:t.name,label:B.isDefined(t.alias)&&""!==t.alias?t.alias:t.name})},this)):"DRAW"===t||""===t?(this.map.getLayer("startDrawPoint")&&this.map.getLayer("startDrawPoint").show(),this._startPointDrawBtn.set("disabled",!1),u.set(this._startRouteIdRow,"display","none")):(this._startPointDrawBtn.set("disabled",!0),u.set(this._startRouteIdRow,"display","none"),this.map.getLayer("startDrawPoint")&&this.map.getLayer("startDrawPoint").hide()),this.validateStartEndLayer(),this._startLayerSelect.validate(!0)},_handleEndLayerChange:function(t){var e,i;i=this.get("returnToStart"),t&&"DRAW"!==t&&this.featureLayers[t-1].graphics&&this.featureLayers[t-1].graphics.length>1?(u.set(this._endRouteIdRow,"display",""),this._endPointDrawBtn.set("disabled",!0),this._endPointDrawBtn.set("checked",!1),this.map.getLayer("endDrawPoint")&&this.map.getLayer("endDrawPoint").hide(),e=this.featureLayers[t-1].fields,this._endRouteIdSelect.removeOption(this._endRouteIdSelect.getOptions()),s.forEach(e,function(t){-1!==s.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeString","esriFieldTypeDate"],t.type)&&this._endRouteIdSelect.addOption({value:t.name,label:B.isDefined(t.alias)&&""!==t.alias?t.alias:t.name})},this)):"DRAW"===t||""===t?(this.map.getLayer("endDrawPoint")&&this.map.getLayer("endDrawPoint").show(),this._endPointDrawBtn.set("disabled",i),u.set(this._endRouteIdRow,"display","none")):(this._endPointDrawBtn.set("disabled",!0),u.set(this._endRouteIdRow,"display","none"),this.map.getLayer("endDrawPoint")&&this.map.getLayer("endDrawPoint").hide()),this._endLayerSelect.set("disabled",i),this._endRouteIdSelect.set("disabled",i),i&&u.set(this._endRouteIdRow,"display","none"),this.validateStartEndLayer(),this._endLayerSelect.validate(!0)},_handleRoutesInputChange:function(){},_handleReturnStartCheckChange:function(){this._handleEndLayerChange(this._endLayerSelect.get("value"))},_handleLimitMaxTimeCheckChange:function(t){this._hoursInput.set("disabled",!t),this._minutesInput.set("disabled",!t)},_handleExtentCheckChange:function(t){m.toggle(this._numStopsExtentLabel,"disabled",!t)},_createPointFeatColl:function(t){var e,s,a;return s={layerDefinition:null,featureSet:{features:[],geometryType:"esriGeometryPoint"}},s.layerDefinition={currentVersion:10.11,copyrightText:"",defaultVisibility:!0,relationships:[],isDataVersioned:!1,supportsRollbackOnFailureParameter:!0,supportsStatistics:!0,supportsAdvancedQueries:!0,geometryType:"esriGeometryPoint",minScale:0,maxScale:0,objectIdField:"OBJECTID",templates:[],type:"Feature Layer",displayField:"TITLE",visibilityField:"VISIBLE",name:t,hasAttachments:!1,typeIdField:"TYPEID",capabilities:"Query",allowGeometryUpdates:!0,htmlPopupType:"",hasM:!1,hasZ:!1,globalIdField:"",supportedQueryFormats:"JSON",hasStaticData:!1,maxRecordCount:-1,indexes:[],types:[],fields:[{alias:"OBJECTID",name:"OBJECTID",type:"esriFieldTypeOID",editable:!1},{alias:"Title",name:"TITLE",length:50,type:"esriFieldTypeString",editable:!0},{alias:"Visible",name:"VISIBLE",type:"esriFieldTypeInteger",editable:!0},{alias:"Description",name:"DESCRIPTION",length:1073741822,type:"esriFieldTypeString",editable:!0},{alias:"Type ID",name:"TYPEID",type:"esriFieldTypeInteger",editable:!0}]},e=new Y({title:"{title}",description:"{description}"}),a=new G(s,{id:t}),this.map.addLayer(a),r.connect(a,"onClick",i.hitch(this,function(t){this.map.infoWindow.setFeatures([t.graphic])})),a},_addStartFeatures:function(t){var e,i,s,a=[],r=[];e={},i=new z({url:this.esriDijitPath+"/images/Directions/greenPoint.png",height:21.75,width:15.75,imageData:"iVBORw0KGgoAAAANSUhEUgAAABUAAAAdCAYAAABFRCf7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4OTI1MkU2ODE0QzUxMUUyQURFMUNDNThGMTA3MjkzMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4OTI1MkU2OTE0QzUxMUUyQURFMUNDNThGMTA3MjkzMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg5MjUyRTY2MTRDNTExRTJBREUxQ0M1OEYxMDcyOTMxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg5MjUyRTY3MTRDNTExRTJBREUxQ0M1OEYxMDcyOTMxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+iVNkdQAABJlJREFUeNp0VltvG0UUnpkdr72261CnCQWEIA9FqOKlqooARUKCtAUhoA+VoBVRhfgFXKSKJ97goRL8ARCIclGgL0VUkBBAoBaVoggEQQVSAhFS06SJje3Y3t25cc7srL3YjddHs3N85pvvfOfMyJRs83n8o+P7POI9yQibooTeBa68ISbSRv+hifpCGHX2s6dnfrrRWjroOPzB0T0+zZ0q8uDRSrniF/MB8X2fADhR8IRRRDphh7Q6rbgtOucU0Sdnj59Z2hb00PtHD+Zp/p2x6uitO4o7iLYP8DMafjVE2wXUboALm50W2ahtXO3q8MTX02fnh0Affu/IkSAXnL55dLzMPU6kURZMIZQhFtRk2VBKcpQTIQVZ21hrdUX4zDcnPv2kBzr59mP3BLnChfGx8YrHPKIAELSzMPhQk+ydzpOvIYwywjFeK7K+vt6IlZw8/+y5RZ4gm9eCUrGCmkUyBkCV0Sd5UlBtTLIhRWQE9ixwsVwe6dY3X4WwJ+j9bx7a7/v5i6O7qlxisFZJAvBF7Rjty56CWlmszilj6BNgXd+syTCO7uNK62nuezyUkWWASTPHDtOjbgOHkJTOsbXAyJhIC+rlODdROM211gcQKBJxoh+EKAs4AGqybHVfBvdICNIU/IDHYbcJiS6le4wwbW1B9UDXJcg9QBxtbglh1BlAJzjoUxIGQZFRwtAypgnjtH0spDG9MWVs34xrN5uBLnEoTKQUgDLgZ6hliLunBaIDhy4LYhyotptZlphGyLUhfyspxxj3AIpaVqikdgyzoGn7p0xNj71rNamweCscWC0qoQ8YRm3K2OgpeFoc+j9FSUYKB+4OgxIK4RcZUJ6RsUgqCrShxWzza9035aw/lzYGY5P4xFSMR5vMcFpm87opL4HjXsr76dLhC2xYhgx3I0BfoS7RCp+3K/e8vn+Ke2zWK+cYofQG9yMlw1eK1aAni9oSWil9eOmFhXkPnbXZ1eXqwVsirfQU9Vynm75lymLbxvpSP4yqI4iR5uWlFxdOI56Xbro5t3qhOrW7ZmL1EOFwp7k6pRXuWaZgBmuwJSIl1fNXXvrxjRTLy2ZTm1v9YeTBXedNbCYZZ1U4pdt+NGiomuKKEvKp5ZM/f5z9zctc1vju1b9cv5q/M/icBd4+KNztlnGWKfYjAMqm+K7zZ/PYP6d+X3TrafbmR8N71QcrOPMLd5RGdj838WFup393orNLWRki6vFv197661i40m6AKwYLneG79BzDPNhNYFWwnfguGyKgPl32bwseoTnKekVpS9n49vorWwv1JsSVwAJHCHcW2Agsk3rBBZXBihhcn11biTfDixpPik1bEZyj34EVXXzJrUccWwrbZo5+B6ztRpvO1kLjjO5qW3YccZ5JeTAecQxqqV0Q6hM5KVIrNL5a/77yQPUyLbK9qiMv49zFhW6MMnPE0dwxlQ48ckXDNHJOq0C2xByreHtxhPk1sK4DEI5dut7+QWCZCyj9MXKLWmD/gl1Xtfhd6F2CI86dv+XiIrdOpeeCDd0VyW7KGbLptn9p/mrgNsIxwzKN0QO3IvlPgAEA3AQhIZtaN54AAAAASUVORK5CYII=",contentType:"image/png",type:"esriPMS"}).setOffset(0,10.875),s=new U(t,i),this.map.graphics.add(s),e.description="blayer desc",e.title="blayer",s.setAttributes(e),a.push(s),this._startDrawPointfLayer.graphics.length>0&&(r=this._startDrawPointfLayer.graphics),this._startDrawPointfLayer.applyEdits(a,null,r),this.validateStartEndLayer()},_addEndFeatures:function(t){var e,i,s,a=[],r=[];e={},i=new z({url:this.esriDijitPath+"/images/Directions/redPoint.png",height:21.75,width:15.75,imageData:"iVBORw0KGgoAAAANSUhEUgAAABUAAAAdCAYAAABFRCf7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNEZDQTg5MTE0QzYxMUUyQURFMUNDNThGMTA3MjkzMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNEZDQTg5MjE0QzYxMUUyQURFMUNDNThGMTA3MjkzMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg5MjUyRTZBMTRDNTExRTJBREUxQ0M1OEYxMDcyOTMxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI0RkNBODkwMTRDNjExRTJBREUxQ0M1OEYxMDcyOTMxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+pmgrrgAABHNJREFUeNqEVU2IHEUUflVd3fO/P3FWRPAQ0EVWL2FZFBS8REgQXD0GDILg0Zsgbg7ezCFXb15iFCUigkJAzF5y0RgQPUyIRBFz2SxusszO7uxMd1e953vV1TM9m6gF31S96qqvvvdTNerH9RWQFtUSUCYCRWwkddAAJ8iYdVD6JIJa5tkaAKUK8bZCexWc/QYJflXO8jADcsRAz2XgwfYU4wI1Wqebnfmk1mhCnNSYWwFZB3meLo0Phy+M9gcbcLh/hde+x/i9SnCU9GWXNC8udLuPN9sdYBo+PQcYsxIivyDmLmk2oNNsJMNB4/X+/XvPKZu9yZ82H0b6mo7rn3aXum1jYqDDAyBEJitcgkDKA/+rlIZmLYaEBezu2K/taPQGT39bJX2WVPTJ4tx828coTZnQFQRCptSE2B9STjGxYgGLC4udnSy7BA5f5NmeQSZRcXy+02rOKbJAo5FXyDsKqFlSD/6O3CsZRxp0ZKDTas33x/c+JGtfFaWrURSdqvFHPBwWhJ5DsRDt1UzaRCmDM83BAZULcQR1HUFkzGlr7aoh587WtTaUjv3igrQgJNRTlWXzXkgCOTwcIpTD2Vs5nInNAdFZw1ldY42AWeozrLzLvI1JJRmeVFAmqlSLQYDYIEJYqfA4WhOlxyPLsdQhL56ECWWTJ62onBQAToiLsZzrIPJn4HHDdovyHFCrEMciOQV5KKcJM01DMFFMRTjYxiKJLYPWpSRKhcTHUQiwIC8KcjamvgKguAyEwUZvyzVFpLFRSH9Z65Zizr4vESjJS8KH+F+WFk1VinrHqpnvDpcU9XKHawZKlzkEhLNk1TqtHEAz5AC58zHuac7W5bHF4EVwwbtRAZePx4yNfq3fE/YKD5K6rLsRbubO3citmyTA9+j+A/gAZH+OeEP4pJAcB+PcAc/4U0u4CsIlmtqzEPX71gf1nPCVd3Azc7ixl/Fjwq5R6dpRhPAUISrC4RiDjFU62iifv0k2Np9/VMrzHa6kC3NG1yIF/9tYNAwsps7hu/ywfHTy+t8zVT3J85XVYy/FWn88H+snE/3vzOwZ7Fn6g6P29is/716r3De+rtMrI+Po87ujrZWW+Y7VnkgUPBGV5VlBxhJ3c/rhl73szFu9fm/6Tk7JVHisE0Y9IHmmbebPL8998VgSPW0qgi2Tbmfut/dvD87cPLB7IpoxDpCxjYJC/qeEBcYxxqKMdzJs1BT8udzQp+r8Dhd3naCfO/vl9viDq/ezAa9rMRpBkBydl9kvXa+HRW1GUxZf3Brd2UrxeuqKApdebJkPZM2wvhX2RxCedfK1Wsg/ZAxD791hRV8NnX80QXqxKy4fXe//2Ix/kopFEp80hKJE/bPt0U/rjyS32lqt7GV4S+ywbhz6tGILD5qg1AbyNCRN3IhDrBp9S98vIa1Iz/Y2YxQI8qCu3O//a3TlTSs/pmHTPqPP2LmbuUsST+nFDvP7YV0a9rmyVvWRmqZwmgsQNaNr/fwmP+MgfUVluQarhS/tHwEGAEyHOx7EoDsBAAAAAElFTkSuQmCC",contentType:"image/png",type:"esriPMS"}).setOffset(0,10.875),s=new U(t,i),this.map.graphics.add(s),e.description="blayer desc",e.title="blayer",s.setAttributes(e),a.push(s),this._endDrawPointfLayer.graphics.length>0&&(r=this._endDrawPointfLayer.graphics),this._endDrawPointfLayer.applyEdits(a,null,r),this.validateStartEndLayer()},_updateStops:function(){var t={};t={geometry:this.map.extent.getExtent()},B.isDefined(this.stopsLayer)&&B.isDefined(this.stopsLayer.queryCount)&&k.getLayerFeatureCount(this.stopsLayer,t).then(i.hitch(this,function(t){y.set(this._numStopsExtentLabel,"innerHTML",d.substitute(this.i18n.stopsLabelByExtent,{numStops:t}))}),function(t){console.log(t)})},_showMessages:function(t){y.set(this._bodyNode,"innerHTML",t),o.fadeIn({node:this._errorMessagePane,easing:L.quadIn,onEnd:i.hitch(this,function(){u.set(this._errorMessagePane,{display:""})})}).play()},_handleCloseMsg:function(t){t&&t.preventDefault(),o.fadeOut({node:this._errorMessagePane,easing:L.quadOut,onEnd:i.hitch(this,function(){u.set(this._errorMessagePane,{display:"none"})})}).play()}});return h("extend-esri")&&i.setObject("dijit.analysis.PlanRoutes",Q,j),Q});