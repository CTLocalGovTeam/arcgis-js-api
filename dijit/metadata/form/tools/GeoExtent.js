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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/fx","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/has","dojo/window","./geoExtentUtil","../../base/Templated","dojo/text!./templates/GeoExtent.html","dojo/i18n!../../nls/i18nBase","../../../../map","../../../../dijit/Geocoder","../../../../toolbars/draw","../../../../geometry/Extent","../../../../geometry/webMercatorUtils","../../../../layers/ArcGISTiledMapServiceLayer","../../../../layers/ImageParameters","../../../../kernel"],function(t,e,i,o,a,n,s,r,d,h,c,l,m,u,p,_,g,x,w,b){var f=t([h],{_drawnExtent:null,_drawtb:null,_fitExtent:!1,_geocoder:null,_initialExtent:null,_map:null,dialogBroker:null,gxeDocument:null,i18nBase:l,templateString:c,basemap:"streets",wrapAround180:!1,xmin:null,ymin:null,xmax:null,ymax:null,postCreate:function(){this.inherited(arguments),this.okButton.disabled=!0,n.set(this.mapNode,"opacity",0)},destroyRecursive:function(){this._geocoder&&this._geocoder.destroyRecursive(!1),this._map&&this._map.destroy(),this.inherited(arguments)},initialize:function(){if(this.gxeDocument&&this.gxeDocument.gxeContext){this._initialExtent=d.makeGeographicExtent(this.xmin,this.ymin,this.xmax,this.ymax);var t=this.gxeDocument.gxeContext,i=this.id+"_map",o={autoResize:!1,wrapAround180:!1,slider:!0,logo:!0,showAttribution:!0};t.wrapAround180&&(o.wrapAround180=t.wrapAround180),t.showMapLogo||(o.logo=!1),t.showMapAttribution||(o.showAttribution=!1),t.basemapUrl||(o.basemap=t.basemap?t.basemap:"streets");var a,n,s=this._map=new m(i,o);t.basemapUrl&&(a=new w,a.format="png24",n=new x(t.basemapUrl,{imageParameters:a}),s.addLayer(n));var r=this.id+"_geocoder",h={map:s};null!==t.arcgisGeocoder&&(h.arcgisGeocoder=t.arcgisGeocoder),t.geocoders&&(h.geocoders=t.geocoders),this._geocoder=new u(h,r),this._geocoder.startup(),this.own(s.on("load",e.hitch(this,function(){var t=null;this._initialExtent?(t=this._asWebMercatorExtent(this._initialExtent,!0),s.setExtent(t,this._fitExtent).then(e.hitch(this,function(){this._addGraphic(this._asWebMercatorExtent(this._initialExtent,!1)),this._fadeIn()}))):this._fadeIn(),this._drawtb=new p(s,{showTooltips:!1}),this._onDrawClick(),this.own(this._drawtb.on("draw-end",e.hitch(this,function(t){t.geometry&&(this._drawnExtent=new _(t.geometry.toJson()),this._addGraphic(t.geometry),this.okButton.disabled=!1)})))})))}},_addGraphic:function(t){this._map&&t&&d.addGraphic(this._map,t,!0)},_asGeographicExtent:function(t){return g.webMercatorToGeographic(t)},_asWebMercatorExtent:function(t,e){var i=t;return e&&i.xmin>=-170&&i.xmax<=170&&i.ymin>=-80&&i.ymax<=80&&(i=i.expand(1.05),this._fitExtent=!0),g.geographicToWebMercator(i)},_fadeIn:function(){i.fadeIn({node:this.mapNode,onEnd:function(){}}).play()},_onCancelClick:function(t){this.onCancelClick(t)},onCancelClick:function(){},_onDrawClick:function(){this._map&&this._drawtb&&(o.remove(this.navigateButton,"current"),o.add(this.drawButton,"current"),o.remove(this.drawHint,"gxeDisplayNone"),this._drawtb.deactivate(),this._drawtb.activate("extent"),this._map.disableMapNavigation(),this._map.hideZoomSlider())},_onNavigateClick:function(){this._map&&this._drawtb&&(o.remove(this.drawButton,"current"),o.add(this.navigateButton,"current"),o.add(this.drawHint,"gxeDisplayNone"),this._drawtb.deactivate(),this._map.enableMapNavigation(),this._map.showZoomSlider())},_onOkClick:function(){var t=null;this._drawnExtent&&(t=this._asGeographicExtent(this._drawnExtent)),this.onOkClick(t)},onOkClick:function(){},resize:function(){if(this.dialogBroker){var t=r.getBox(this.ownerDocument),e=a.getMarginBox(this.domNode),i=a.getMarginBox(this.topNode),o=a.getMarginBox(this.bottomNode),s=e.l,d=t.w-100,h=t.h-e.t-s-50-80,c=h-(i.h+o.h);50>c&&(c=50);var l=d-2*s;450>l&&(l=450),l>1e3&&(l=1e3),n.set(this.mapNode,"width",l+"px"),n.set(this.mapNode,"height",c+"px"),this._map&&(this._map.resize(),this._map.reposition())}}});return s("extend-esri")&&e.setObject("dijit.metadata.form.tools.GeoExtent",f,b),f});