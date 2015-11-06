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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/Color","dojo/has","../kernel","./_toolbar","../symbols/SimpleMarkerSymbol","../symbols/SimpleLineSymbol","../symbols/SimpleFillSymbol","./draw","../tasks/ImageServiceMeasureParameters","../tasks/ImageServiceMeasureTask","../geometry/Point"],function(e,t,i,r,s,n,a,o,l,u,h,_,m){var c=e("customDraw",[u],{returnCurrentPoint:function(){return this._points},hideTooltip:function(){this._options.showTooltips=!1},showTooltip:function(){this._options.showTooltips=!0}}),p=e(n,{declaredClass:"esri.toolbars.imageServiceMeasure",_eventMap:{"draw-end":["geometry"],"draw-start":[],"measure-end":["measureResult","error","geometry"],"unit-change":["measureResult","error","geometry"]},_mensurationCapabilitiesMap:{Basic:["OPERATION_POINT","OPERATION_DISTANCE_ANGLE","OPERATION_AREA_PERIMETER","OPERATION_CENTROID"],"3D":["OPERATION_POINT_3D","OPERATION_DISTANCE_ANGLE_3D","OPERATION_AREA_PERIMETER_3D","OPERATION_CENTROID_3D"],"Base-Top Height":["OPERATION_BASE_TOP"],"Top-Top Shadow Height":["OPERATION_TOP_TOP_SHADOW"],"Base-Top Shadow Height":["OPERATION_BASE_TOP_SHADOW"]},_supportedMeasureOperations:[],_operationsMap:{OPERATION_POINT:{geometryType:"POINT"},OPERATION_DISTANCE_ANGLE:{geometryType:"LINE"},OPERATION_AREA_PERIMETER:{geometryType:"POLYGON"},OPERATION_BASE_TOP:{geometryType:"LINE"},OPERATION_BASE_TOP_SHADOW:{geometryType:"LINE"},OPERATION_TOP_TOP_SHADOW:{geometryType:"LINE"},OPERATION_CENTROID:{geometryType:"POLYGON"},OPERATION_POINT_3D:{geometryType:"POINT"},OPERATION_DISTANCE_ANGLE_3D:{geometryType:"LINE"},OPERATION_AREA_PERIMETER_3D:{geometryType:"POLYGON"},OPERATION_CENTROID_3D:{geometryType:"POLYGON"}},_supportedUnits:{linearUnits:["esriInches","esriFeet","esriYards","esriMiles","esriNauticalMiles","esriMillimeters","esriCentimeters","esriDecimeters","esriMeters","esriKilometers"],angularUnits:["esriDURadians","esriDUDecimalDegrees"],areaUnits:["esriSquareInches","esriSquareFeet","esriSquareYards","esriAcres","esriSquareMiles","esriSquareMillimeters","esriSquareCentimeters","esriSquareDecimeters","esriSquareMeters","esriAres","esriHectares","esriSquareKilometers"]},markerSymbol:null,lineSymbol:null,fillSymbol:null,_drawToolbar:null,_currentGeometry:null,_currentOperation:null,linearUnit:null,angularUnit:null,areaUnit:null,constructor:function(t){e.safeMixin(this,t),this._checkMensurationSupport(),this._setDefaultSymbols()},_checkMensurationSupport:function(){return this.layer.mensurationCapabilities?void this._setSupportedMeasureOperations():void console.log("Mensuration Capabilities not supported.")},_setDefaultSymbols:function(){this.markerSymbol||(this.markerSymbol=new a,this.markerSymbol.setPath("M16,4.938c-7.732,0-14,4.701-14,10.5c0,1.981,0.741,3.833,2.016,5.414L2,25.272l5.613-1.44c2.339,1.316,5.237,2.106,8.387,2.106c7.732,0,14-4.701,14-10.5S23.732,4.938,16,4.938zM16.868,21.375h-1.969v-1.889h1.969V21.375zM16.772,18.094h-1.777l-0.176-8.083h2.113L16.772,18.094z"),this.markerSymbol.setColor(new i("#00FFFF"))),this.lineSymbol||(this.lineSymbol=new o(o.STYLE_SOLID,new i([255,0,0]),1.5)),this.fillSymbol||(this.fillSymbol=new l(l.STYLE_SOLID,new o(o.STYLE_DASHDOT,new i([255,0,0]),2),new i([255,255,0,.25])))},_setSupportedMeasureOperations:function(){var e,t,i,r=this.layer.mensurationCapabilities;this.mensurationCapabilities=r.split(",");for(e in this.mensurationCapabilities)if(this.mensurationCapabilities.hasOwnProperty(e)){t=this._mensurationCapabilitiesMap[this.mensurationCapabilities[e]];for(i in t)t.hasOwnProperty(i)&&this._supportedMeasureOperations.push(t[i])}},getSupportedMeasureOperations:function(){return this._supportedMeasureOperations},getSupportedUnits:function(){return this._supportedUnits},setLinearUnit:function(e){this.linearUnit=e,this._currentGeometry&&this._getUnitChangeResults(this._currentGeometry)},setAngularUnit:function(e){this.angularUnit=e,this._currentGeometry&&this._getUnitChangeResults(this._currentGeometry)},setAreaUnit:function(e){this.areaUnit=e,this._currentGeometry&&this._getUnitChangeResults(this._currentGeometry)},setMarkerSymbol:function(e){this.markerSymbol=e},setLineSymbol:function(e){this.lineSymbol=e},setFillSymbol:function(e){this.fillSymbol=e},activate:function(e){this._currentOperation=e,this.map.setMapCursor("crosshair"),this._mapClickHandle=this.map.on("click",t.hitch(this,this._onMapClick)),this._mapMouseDownHandle=this.map.on("mouse-down",t.hitch(this,this._onMapMouseDown)),this._drawToolbar||(this._drawToolbar=new c(this.map,{fillSymbol:this.fillSymbol,markerSymbol:this.markerSymbol,lineSymbol:this.lineSymbol}),this._drawToolbar.on("draw-end",t.hitch(this,this._setGeometry))),this._drawToolbar.activate(u[this._operationsMap[this._currentOperation].geometryType])},_onMapClick:function(){0===this._drawToolbar.returnCurrentPoint().length&&this.onDrawStart()},_onMapMouseDown:function(){0===this._drawToolbar.returnCurrentPoint().length&&this.onDrawStart()},deactivate:function(){this._drawToolbar.deactivate(),this.map.setMapCursor("default"),this._currentGeometry=null,this._currentOperation=null,this._mapClickHandle&&(this._mapClickHandle.remove(),this._mapClickHandle=null),this._mapMouseDownHandle&&(this._mapMouseDownHandle.remove(),this._mapMouseDownHandle=null)},hideDrawTooltip:function(){this._drawToolbar.deactivate(),this._drawToolbar.hideTooltip(),this._drawToolbar.activate(u[this._operationsMap[this._currentOperation].geometryType])},showDrawTooltip:function(){this._drawToolbar.deactivate(),this._drawToolbar.showTooltip(),this._drawToolbar.activate(u[this._operationsMap[this._currentOperation].geometryType])},_setGeometry:function(e){var t=e.geometry;this.onDrawEnd(t),this._getMensurationResults(t),this._currentGeometry=t},_getImageServiceMeasureParameters:function(e){var t=new h;return t.operation=h[this._currentOperation],t.mosaicRule=this.layer.mosaicRule,t.linearUnit=this.linearUnit,t.angularUnit=this.angularUnit,t.areaUnit=this.areaUnit,"line"===e.type||"polyline"===e.type?(t.fromGeometry=new m(e.paths[0][0][0],e.paths[0][0][1],this.map.spatialReference),t.toGeometry=new m(e.paths[0][1][0],e.paths[0][1][1],this.map.spatialReference)):t.fromGeometry=e,t},_getMensurationResults:function(e){var i=this._getImageServiceMeasureParameters(e),r=new _(this.layer.url);r.execute(i,t.hitch(this,this._measureTaskSuccess),t.hitch(this,this._measureTaskError))},_measureTaskSuccess:function(e){this.onMeasureEnd(e,null,this._currentGeometry)},_measureTaskError:function(e){this.onMeasureEnd(null,e,this._currentGeometry)},_getUnitChangeResults:function(e){var i=this._getImageServiceMeasureParameters(e),r=new _(this.layer.url);r.execute(i,t.hitch(this,this._unitChangeSuccess),t.hitch(this,this._unitChangeError))},_unitChangeSuccess:function(e){this.onUnitChange(e,null,this._currentGeometry)},_unitChangeError:function(e){this.onUnitChange(null,e,this._currentGeometry)},onDrawStart:function(){},onDrawEnd:function(){},onMeasureEnd:function(){},onUnitChange:function(){}});return r("extend-esri")&&t.setObject("toolbars.imageServiceMeasure",p,s),p});