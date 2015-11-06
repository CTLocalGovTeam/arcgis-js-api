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

define(["../kernel","dijit/_OnDijitClickMixin","dijit/_TemplatedMixin","dijit/_WidgetBase","../dijit/RendererSlider","dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dojo/Evented","dojo/has","dojox/gfx","dojo/i18n!../nls/jsapi","dojo/text!./HeatmapSlider/templates/HeatmapSlider.html"],function(e,t,i,s,o,r,a,l,h,d,n,c,u,p){var _=a("esri.dijit.HeatmapSlider",[s,i,t,d],{baseClass:"esriHeatmapSlider",templateString:p,domNode:null,containerNode:null,handles:null,_rampWidthDefault:25,showLabels:null,showTicks:null,showHandles:null,_rampNode:null,_sliderHeight:null,_colorRampSurface:null,_rect:null,_updateTimer:null,constructor:function(e,t){this.inherited(arguments),t&&(this.domNode=t,this.containerNode=this._containerNode,this.rampWidth=e.rampWidth||this._rampWidthDefault,this.handles=e.handles||[3,15],this.showLabels=e.showLabels||!0,this.showTicks=e.showTicks||!0,this.showHandles=e.showHandles||!0,this.colorStops=e.colorStops,this.minSliderValue=0,this.maxSliderValue=1,this.values=[this.colorStops[3].ratio,this.colorStops[15].ratio])},postCreate:function(){this.inherited(arguments)},startup:function(){this.inherited(arguments),this._slider=new o({type:"HeatmapSlider",values:this.values,minimum:this.minSliderValue,maximum:this.maxSliderValue,precision:2,showLabels:this.showLabels,showTicks:this.showTicks,showHandles:this.showHandles,minLabel:u.widgets.rendererSlider.low,maxLabel:u.widgets.rendererSlider.high},this._sliderNode),this._slider.startup(),this._rampNode=this._slider._sliderAreaRight,this._sliderHeight=h.get(this._rampNode,"height")||155,this._createSVGSurfaces(),this._slider.on("slide",l.hitch(this,function(e){this._updateColorStops(e.values[0],e.values[1]),this._fillRamp()})),this._slider.on("change",l.hitch(this,function(e){this.values=[e.values[0],e.values[1]],this.emit("change",l.clone(this.colorStops))})),this._slider.on("handle-value-change",l.hitch(this,function(){this._updateRendererSlider()})),this._slider.on("data-value-change",l.hitch(this,function(){this._updateRendererSlider()})),this._slider.on("stop",l.hitch(this,function(){this.emit("handle-value-change",l.clone(this.colorStops))})),this.watch("colorStops",this._updateTimeout)},_createSVGSurfaces:function(){this._colorRampSurface=c.createSurface(this._rampNode,this.rampWidth,this._sliderHeight),this._rect=this._colorRampSurface.createRect(this._colorRampSurface.getDimensions()).setStroke("#888"),this._fillRamp()},_updateTimeout:function(){var e=this;clearTimeout(this._updateTimer),this._updateTimer=setTimeout(function(){var t=e;e=null,clearTimeout(t._updateTimer),t._updateRendererSlider()},0)},_updateRendererSlider:function(){this.values=[this.colorStops[3].ratio,this.colorStops[15].ratio],this._slider.set("values",this.values),this._slider._reset(),this._slider._updateRoundedLabels(),this._slider._generateMoveables(),this._clearRect(),this._createSVGSurfaces()},_clearRect:function(){this._colorRampSurface.destroy()},destroy:function(){this.inherited(arguments),this._slider.destroy()},_updateColorStops:function(e,t){r.forEach(this.colorStops,l.hitch(this,function(i,s){s>2&&(i.ratio=e+(t-e)*((s-3)/12),3===s&&i.ratio<this.colorStops[2].ratio&&(i.ratio=this.colorStops[2].ratio))}))},_fillRamp:function(){var e=this.colorStops.slice(0);r.forEach(e,function(e){e.offset=1-e.ratio}),e.reverse(),this._rect.setFill({type:"linear",x1:0,y1:0,x2:0,y2:200/.99,colors:e})}});return n("extend-esri")&&l.setObject("dijit.HeatmapSlider",_,e),_});