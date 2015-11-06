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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/has","dojo/sniff","dojo/dom-style","dojox/gfx/Moveable","../kernel","../geometry/Point","../graphic","../geometry/webMercatorUtils"],function(t,e,i,o,s,n,r,a,h,c,p){var l=t(null,{declaredClass:"esri.toolbars.VertexMover",constructor:function(t,e,i,o,s,n,r,a){this.point=t,this.symbol=e,this.relatedGraphic=i,this.segIndex=o,this.ptIndex=s,this.segLength=n,this.editor=r,this.map=r.map,this._scratchGL=r.toolbar._scratchGL,this._placeholder=a||!1,this._type=i.geometry.type,this._init(),this._enable()},refresh:function(t){(t||this._needRefresh())&&(this._disable(),this._enable())},destroy:function(){this._disable(),this.graphic&&this._scratchGL.remove(this.graphic),this.point=this.symbol=this.graphic=this.relatedGraphic=this.segIndex=this.ptIndex=this.segLength=this.editor=this.map=this._scratchGL=null},_init:function(){var t=new h(this.point.toJson()),e=new c(t,this.symbol);switch(this._type){case"multipoint":e._shape=this.relatedGraphic.getDojoShape().children[this.ptIndex];break;case"polyline":case"polygon":this._scratchGL.add(e)}this.graphic=e},_enable:function(){var t=this.graphic.getDojoShape();if(t){t._hasMover=!0,this._moveable=this._getMoveable(t);var e=t.getEventSource();e&&n.set(e,"cursor",this.editor.toolbar._cursors[this._placeholder?"move-gv":"move-v"])}},_disable:function(){var t=this._moveable;if(t){i.disconnect(this._startHandle),i.disconnect(this._firstHandle),i.disconnect(this._movingHandle),i.disconnect(this._stopHandle);var e=t.shape;if(e){var o=e.getEventSource();o&&n.set(o,"cursor",null)}t.destroy(),this._moveable=null}},_needRefresh:function(){var t=this.graphic.getDojoShape(),e=!1;if(t)switch(this._type){case"multipoint":var i=this.relatedGraphic.getDojoShape();if(i){var o=i.children[this.ptIndex];t!==o&&(t=o,this.graphic._shape=t,e=!0)}break;case"polyline":case"polygon":e=!t._hasMover}return e},_getMoveable:function(t){var e=new r(t,s("mac")&&s("ff")&&!o("esri-touch")&&{leftButtonOnly:!0});return this._startHandle=i.connect(e,"onMoveStart",this,this._moveStartHandler),this._firstHandle=i.connect(e,"onFirstMove",this,this._firstMoveHandler),this._movingHandle=i.connect(e,"onMoving",this,this._movingHandler),this._stopHandle=i.connect(e,"onMoveStop",this,this._moveStopHandler),e},_getPtIndex:function(){return this.ptIndex+(this._placeholder?1:0)},_getInfo:function(){return{graphic:this.graphic,isGhost:this._placeholder,segmentIndex:this.segIndex,pointIndex:this._getPtIndex()}},_moveStartHandler:function(t){var e=this.map;e.snappingManager&&e.snappingManager._setUpSnapping(),t.shape.moveToFront(),this.constructor.onMoveStart(this),this.editor.toolbar.onVertexMoveStart(this.relatedGraphic,this._getInfo())},_firstMoveHandler:function(t){var e,i=t.shape,o=this._getControlEdges(),s=this._scratchGL._div,n=[],r=t.host.shape._wrapOffsets[0]||0;for(e=0;e<o.length;e++){var a=o[e];a.x1+=r,a.x2+=r,n.push([s.createLine({x1:a.x1,y1:a.y1,x2:a.x2,y2:a.y2}).setStroke(this.editor._lineStroke),a.x1,a.y1,a.x2,a.y2])}i._lines=n,t.shape.moveToFront(),this.constructor.onFirstMove(this),this.editor.toolbar.onVertexFirstMove(this.relatedGraphic,this._getInfo())},_movingHandler:function(t,e,i){var s,n=this.map;o("esri-pointer")&&(s=n.navigationManager.pointerEvents._processTouchEvent(i,i),n.snappingManager&&n.snappingManager._onSnappingMouseMoveHandler(s));var r,a=t.shape,h=a.getTransform(),c=a._lines;for(r=0;r<c.length;r++){var p=c[r];p[0].setShape({x1:p[1]+h.dx,y1:p[2]+h.dy,x2:p[3],y2:p[4]})}this.editor.toolbar.onVertexMove(this.relatedGraphic,this._getInfo(),h)},_moveStopHandler:function(t){var e,i=t.shape,o=this.editor.toolbar,s=i.getTransform(),n=this.map,r=this.graphic,a=o._geo?p.geographicToWebMercator(r.geometry):r.geometry,h=i._lines;if(h){for(e=0;e<h.length;e++)h[e][0].removeShape();i._lines=null}var c=!1,l=!0,d=this._getInfo();s&&(s.dx||s.dy)?this._placeholder&&(this._placeholder=!1,c=!0):l=!1;var g;n.snappingManager&&(g=n.snappingManager._snappingPoint);var _=g||n.toMap(n.toScreen(a).offset(s.dx,s.dy));n.snappingManager&&n.snappingManager._killOffSnapping(),i.setTransform(null),r.setGeometry(o._geo?p.webMercatorToGeographic(_,!0):_),this.constructor.onMoveStop(this,s),o.onVertexMoveStop(this.relatedGraphic,d,s),l||o.onVertexClick(this.relatedGraphic,d),c&&o.onVertexAdd(this.relatedGraphic,this._getInfo())},_getControlEdges:function(){var t=this.map,e=this.relatedGraphic.geometry,i=this.segIndex,o=this.ptIndex,s=this.segLength,n=this._scratchGL._div,r=n.getTransform(),a=r.dx,h=r.dy,c=t.toScreen(this.graphic.geometry),p=c.x-a,l=c.y-h,d=[],g=this.editor._getControlPoints(this,e,i,o,s);return g[0]&&d.push({x1:p,y1:l,x2:g[0].x-a,y2:g[0].y-h}),g[1]&&d.push({x1:p,y1:l,x2:g[1].x-a,y2:g[1].y-h}),d}});return o("extend-esri")&&e.setObject("toolbars.VertexMover",l,a),e.mixin(l,{onMoveStart:function(){},onFirstMove:function(){},onMoveStop:function(){}}),l});