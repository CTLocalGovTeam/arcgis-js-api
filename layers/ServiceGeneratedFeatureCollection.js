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

define(["dojo/_base/declare","dojo/_base/connect","dojo/_base/lang","dojo/_base/array","dojo/dom-construct","dojo/dom-style","dojo/has","../kernel","../SpatialReference","../geometry/Extent","../geometry/webMercatorUtils","../renderers/SimpleRenderer","./layer","./FeatureLayer","../dijit/PopupTemplate"],function(e,t,i,s,r,o,n,a,h,l,c,y,d,p,f){var _=e([d],{declaredClass:"esri.layers._ServiceGeneratedFeatureCollection",constructor:function(e,t){this.pointSymbol=t&&t.pointSymbol,this.polylineSymbol=t&&t.polylineSymbol,this.polygonSymbol=t&&t.polygonSymbol,this._outSR=t&&(t.outSpatialReference||t.outSR)||new h({wkid:4326}),this._options=i.mixin({},t)},parse:function(){console.error("parse function has not been implemented")},getFeatureLayers:function(){var e=[];return this._fLayers&&(e=e.concat(this._fLayers)),e},onRefresh:function(){},onOpacityChange:function(){},refresh:function(){this.loaded&&this._map&&!this._io&&this.visible&&this._createLayer()},_createLayer:function(e){var t=this;this._fireUpdateStart();var s=this.parse(e);s.addCallback(function(e){t._io=null,t._initLayer(e)}),s.addErrback(function(e){t._io=null,e=i.mixin(new Error,e),e.message="Unable to load resource: "+t.url+" "+(e.message||""),t._fireUpdateEnd(e),t.onError(e)})},_initLayer:function(e){this.loaded&&this._removeInternalLayers(),this.name=e.name,this.description=e.description,this.snippet=e.snippet,this.defaultVisibility=this.visible=void 0!==e.visibility?!!e.visibility:!0,this.featureInfos=e.featureInfos,this.fullExtent=this.initialExtent=new l(e.lookAtExtent),this.copyright=e.author||e.copyright;var t,r=i.getObject("featureCollection.layers",!1,e);if(r&&r.length>0&&(this._fLayers=[],s.forEach(r,function(e,s){var r,o=i.getObject("featureSet.features",!1,e);o&&o.length>0&&(t=i.mixin({outFields:["*"],infoTemplate:e.popupInfo?new f(e.popupInfo):null,editable:!1},this._options),t.id&&(t.id=t.id+"_"+s),e.layerDefinition.capabilities="Query,Data",r=new p(e,t),r.geometryType&&(this["_"+r.geometryType]=r),this._fLayers.push(r))},this),0===this._fLayers.length&&delete this._fLayers),this.items=[],this._esriGeometryPoint&&(this.items=this.items.concat(this._esriGeometryPoint.graphics),this.pointSymbol)){var o=new y(this.pointSymbol);this._esriGeometryPoint.setRenderer(o)}if(this._esriGeometryPolyline&&(this.items=this.items.concat(this._esriGeometryPolyline.graphics),this.polylineSymbol)){var n=new y(this.polylineSymbol);this._esriGeometryPolyline.setRenderer(n)}if(this._esriGeometryPolygon&&(this.items=this.items.concat(this._esriGeometryPolygon.graphics),this.polygonSymbol)){var a=new y(this.polygonSymbol);this._esriGeometryPolygon.setRenderer(a)}this._fireUpdateEnd(),this.loaded&&(this._addInternalLayers(),this.onRefresh())},_addInternalLayers:function(){var e=this._map;this._fireUpdateStart();var t,i=e.spatialReference,r=this._outSR;if(i.wkid)t=i._isWebMercator()&&r._isWebMercator()||i.wkid===r.wkid;else{if(!i.wkt)return void console.log("_setMap - map has invalid spatial reference");t=i.wkt===r.wkt}if(!t)if(i._isWebMercator()&&4326===r.wkid)this._converter=c.geographicToWebMercator;else{if(!r._isWebMercator()||4326!==i.wkid)return void console.log("_setMap - unsupported workflow. Spatial reference of the map and layer do not match, and the conversion cannot be done on the client.");this._converter=c.webMercatorToGeographic}var o=this._fLayers;o&&o.length>0&&s.forEach(o,function(t){if(this._converter){var i,s,r=t.graphics,o=r?r.length:0;for(i=0;o>i;i++)s=r[i].geometry,s&&r[i].setGeometry(this._converter(s))}e.addLayer(t)},this),this.setVisibility(this.visible),this._fireUpdateEnd()},_removeInternalLayers:function(){var e=this._map;e&&s.forEach(this.getFeatureLayers(),e.removeLayer,e)},setScaleRange:function(e,t){this.inherited(arguments),s.forEach(this.getFeatureLayers(),function(i){i.setScaleRange(e,t)}),this._options.minScale=this.minScale,this._options.maxScale=this.maxScale},setOpacity:function(e){this.opacity!=e&&(s.forEach(this.getFeatureLayers(),function(t){t.setOpacity(e)}),this._options.opacity=e,this.opacity=e,this.onOpacityChange(e))},onVisibilityChange:function(e){this._fireUpdateStart(),s.forEach(this.getFeatureLayers(),function(t){t.setVisibility(e)}),this._fireUpdateEnd()},_setMap:function(e,t){this.inherited(arguments),this._map=e;var i=this._div=r.create("div",null,t);return o.set(i,"position","absolute"),this._addInternalLayers(),this.evaluateSuspension(),i},_unsetMap:function(e,i){this._io&&this._io.cancel(),t.disconnect(this._extChgHandle),delete this._extChgHandle,this._removeInternalLayers();var s=this._div;s&&(i.removeChild(s),r.destroy(s)),this._div=null,this.inherited(arguments)}});return n("extend-esri")&&i.setObject("layers._ServiceGeneratedFeatureCollection",_,a),_});