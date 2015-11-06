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

define(["require","dojo/_base/kernel","dojo/_base/declare","dojo/_base/connect","dojo/_base/lang","dojo/_base/array","dojo/_base/event","dojo/on","dojo/aspect","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dijit/registry","./kernel","./config","./sniff","./lang","./_coremap","./MapNavigationManager","dojo/i18n!./nls/jsapi"],function(i,e,t,s,n,o,a,r,l,h,d,c,m,_,u,g,p,v,f,b,S,C,Z){var M=30,D=30,k={up:"panUp",right:"panRight",down:"panDown",left:"panLeft"},z={upperRight:"panUpperRight",lowerRight:"panLowerRight",lowerLeft:"panLowerLeft",upperLeft:"panUpperLeft"},w=s.connect,y=s.disconnect,R=m.create,L=u.set,P=n.hitch,x=_.getMarginBox,H=e.deprecated,N=n.mixin,j="Map.(enable/disable)ShiftDoubleClickZoom deprecated. Shift-Double-Click zoom behavior will not be supported.",B=0,A=t(S,{declaredClass:"esri.Map",constructor:function(e,t){N(this,{_slider:null,_navDiv:null,_mapParams:N({attributionWidth:.45,slider:!0,nav:!1,logo:!0,sliderStyle:"small",sliderPosition:"top-left",sliderOrientation:"vertical",autoResize:!0},t||{})}),N(this,{isDoubleClickZoom:!1,isShiftDoubleClickZoom:!1,isClickRecenter:!1,isScrollWheelZoom:!1,isPan:!1,isRubberBandZoom:!1,isKeyboardNavigation:!1,isPanArrows:!1,isZoomSlider:!1}),n.isFunction(p._css)&&(p._css=p._css(this._mapParams.force3DTransforms),this.force3DTransforms=this._mapParams.force3DTransforms);var s=f("esri-transforms")&&f("esri-transitions");if(this.navigationMode=this._mapParams.navigationMode||s&&"css-transforms"||"classic","css-transforms"!==this.navigationMode||s||(this.navigationMode="classic"),this.fadeOnZoom=b.isDefined(this._mapParams.fadeOnZoom)?this._mapParams.fadeOnZoom:"css-transforms"===this.navigationMode,"css-transforms"!==this.navigationMode&&(this.fadeOnZoom=!1),this.setMapCursor("default"),this.smartNavigation=t&&t.smartNavigation,!(b.isDefined(this.smartNavigation)||!f("mac")||f("esri-touch")||f("esri-pointer")||f("ff")<=3.5)){var a=navigator.userAgent.match(/Mac\s+OS\s+X\s+([\d]+)(\.|\_)([\d]+)\D/i);if(a&&b.isDefined(a[1])&&b.isDefined(a[3])){var h=parseInt(a[1],10),d=parseInt(a[3],10);this.smartNavigation=h>10||10===h&&d>=6}}var c=!0;this.showAttribution=b.isDefined(this._mapParams.showAttribution)?this._mapParams.showAttribution:c,this._onLoadHandler_connect=w(this,"onLoad",this,"_onLoadInitNavsHandler");var m=R("div",{"class":"esriControlsBR"+(this._mapParams.nav?" withPanArrows":"")},this.root);if(this.showAttribution){var _=n.getObject("esri.dijit.Attribution",!1);if(_)this._initAttribution(_,m);else{var u=["./dijit/Attribution"],g=B++,v=this;this._rids&&this._rids.push(g),i(u,function(i){var e=v._rids?o.indexOf(v._rids,g):-1;-1!==e&&(v._rids.splice(e,1),v._initAttribution(i,m))})}}if(this._mapParams.logo){var S={};6===f("ie")&&(S.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true', sizingMethod='crop', src='"+i.toUrl("./images/map/logo-med.png")+"')"),this._ogol=R("div",{style:S},m),this._setLogoSize(),this._onMapResizeLogo_connect=w(this,"onResize",this,"_setLogoSize"),f("esri-touch")||(this._ogol_connect=w(this._ogol,"onclick",this,"_openLogoLink"))}if(this.navigationManager=new C(this),t&&t.basemap&&(this._onLoadFix=!0,this.setBasemap(t.basemap),this._onLoadFix=!1),this.autoResize=this._mapParams.autoResize,this.autoResize){var Z=this._getEnclosingResizableWidget(this.container)||window,M=this.resize;this._rszSignal=r.pausable(Z,"resize",M),this._oriSignal=r.pausable(window,"orientationchange",M),l.after(Z,"resize",M,!0),this._startResizeTimer()}},_startResizeTimer:function(){clearTimeout(this._persistentTimer),this._persistentTimer=setTimeout(this._timedResize,2*this.resizeDelay)},_getEnclosingResizableWidget:function(i){var e=g.getEnclosingWidget(i);return e?e.resize?e:this._getEnclosingResizableWidget(i.parentNode):e},_setLogoSize:function(){this._ogol&&(this.root.clientWidth*this.root.clientHeight<25e4?(c.remove(this._ogol,"logo-med"),c.add(this._ogol,"logo-sm")):(c.remove(this._ogol,"logo-sm"),c.add(this._ogol,"logo-med")))},_initAttribution:function(i,e){var t=R("span",{"class":"esriAttribution"},e,"first");L(t,"maxWidth",Math.floor(this.width*this._mapParams.attributionWidth)+"px"),this._connects.push(w(t,"onclick",function(){var i="esriAttributionOpen";c.contains(this,i)?c.remove(this,i):this.scrollWidth>this.clientWidth&&c.add(this,i)})),this.attribution=new i({map:this},t)},_cleanUp:function(){this.disableMapNavigation(),this.navigationManager.destroy();var i=this._slider;i&&i.destroy&&!i._destroyed&&i.destroy();var e=this._navDiv,t=this.attribution;e&&m.destroy(e),t&&t.destroy(),this._connects.push(this._slider_connect,this._ogol_connect,this._rszSignal,this._oriSignal),o.forEach(this._connects,y),clearInterval(this._persistentTimer),this.attribution=this.navigationManager=this._rids=this._connects=this._slider_connect=this._ogol_connect=this._rszSignal=this._oriSignal=this._persistentTimer=null,this.inherited("_cleanUp",arguments)},_isPanningOrZooming:function(){return this.__panning||this.__zooming},_canZoom:function(i){var e=this.getLevel();return!this.__tileInfo||!(e===this.getMinZoom()&&0>i||e===this.getMaxZoom()&&i>0)},_onLoadInitNavsHandler:function(){if(this.enableMapNavigation(),this._createNav(),"small"!==this._mapParams.sliderStyle&&this._createSlider){if(this._mapParams.slider){var e=this._getSliderClass(!0),t=-1!==e.indexOf("Horizontal"),s=t?"dijit.form.HorizontalSlider":"dijit.form.VerticalSlider",a=t?"dijit.form.HorizontalRule":"dijit.form.VerticalRule",r=t?"dijit.form.HorizontalRuleLabels":"dijit.form.VerticalRuleLabels",l=[s,a,r],h=o.some(l,function(i){return!n.getObject(i,!1)});if(h){l=o.map(l,function(i){return i.replace(/\./g,"/")});var d=B++,c=this;this._rids&&this._rids.push(d),i(l,function(){var i=c._rids?o.indexOf(c._rids,d):-1;-1!==i&&(c._rids.splice(i,1),c._createSlider.apply(c,arguments))})}else l=o.map(l,function(i){return n.getObject(i,!1)}),this._createSlider.apply(this,l)}}else this._createSimpleSlider();y(this._onLoadHandler_connect)},_createNav:function(){if(this._mapParams.nav){var i,e,t,s=c.add,n=this.id;this._navDiv=R("div",{id:n+"_navdiv"},this.root),s(this._navDiv,"navDiv");var o,a=this.width/2,r=this.height/2;for(t in k)e=k[t],i=R("div",{id:n+"_pan_"+t},this._navDiv),s(i,"fixedPan "+e),"up"===t||"down"===t?(o=parseInt(x(i).w,10)/2,L(i,{left:a-o+"px",zIndex:M})):(o=parseInt(x(i).h,10)/2,L(i,{top:r-o+"px",zIndex:M})),this._connects.push(w(i,"onclick",P(this,this[e])));this._onMapResizeNavHandler_connect=w(this,"onResize",this,"_onMapResizeNavHandler");for(t in z)e=z[t],i=R("div",{id:n+"_pan_"+t,style:{zIndex:M}},this._navDiv),s(i,"fixedPan "+e),this._connects.push(w(i,"onclick",P(this,this[e])));this.isPanArrows=!0}},_onMapResizeNavHandler:function(i,e,t){var s,n,o,a=this.id,r=e/2,l=t/2,d=h.byId;for(s in k)n=d(a+"_pan_"+s),"up"===s||"down"===s?(o=parseInt(x(n).w,10)/2,L(n,"left",r-o+"px")):(o=parseInt(x(n).h,10)/2,L(n,"top",l-o+"px"))},_createSimpleSlider:function(){if(this._mapParams.slider){var i=this._slider=R("div",{id:this.id+"_zoom_slider","class":this._getSliderClass(),style:{zIndex:D}}),e=f("esri-touch")&&!f("ff")?"touchstart":f("esri-pointer")?navigator.msPointerEnabled?"MSPointerDown":"pointerdown":"onclick",t=R("div",{"class":"esriSimpleSliderIncrementButton"},i),s=R("div",{"class":"esriSimpleSliderDecrementButton"},i);this._addZoomButtonTooltips(t,s),this._incButton=t,this._decButton=s,this._simpleSliderZoomHandler(null,null,null,this.getLevel()),t.innerHTML="<span>+</span>",s.innerHTML="<span>&ndash;</span>",f("ie")<8&&c.add(s,"dj_ie67Fix"),this._connects.push(w(t,e,this,this._simpleSliderChangeHandler)),this._connects.push(w(s,e,this,this._simpleSliderChangeHandler)),"touchstart"==e&&(this._connects.push(w(t,"onclick",this,this._simpleSliderChangeHandler)),this._connects.push(w(s,"onclick",this,this._simpleSliderChangeHandler))),(this.getMaxZoom()>-1||this.getMinZoom()>-1)&&this._connects.push(w(this,"onZoomEnd",this,this._simpleSliderZoomHandler)),f("ie")<10&&h.setSelectable(i,!1),this.root.appendChild(i),this.isZoomSlider=!0}},_simpleSliderChangeHandler:function(i){a.stop(i);var e=-1!==i.currentTarget.className.indexOf("IncrementButton")?!0:!1;this._extentUtil({numLevels:e?1:-1})},_simpleSliderZoomHandler:function(i,e,t,s){var n,o,a;o=this._incButton,a=this._decButton,s>-1&&s===this.getMaxZoom()?n=o:s>-1&&s===this.getMinZoom()&&(n=a),n?(c.add(n,"esriSimpleSliderDisabledButton"),c.remove(n===o?a:o,"esriSimpleSliderDisabledButton")):(c.remove(o,"esriSimpleSliderDisabledButton"),c.remove(a,"esriSimpleSliderDisabledButton"))},_getSliderClass:function(i){var e=i?"Large":"Simple",t=this._mapParams.sliderOrientation,s=this._mapParams.sliderPosition||"";if(t=t&&"horizontal"===t.toLowerCase()?"esri"+e+"SliderHorizontal":"esri"+e+"SliderVertical",s)switch(s.toLowerCase()){case"top-left":s="esri"+e+"SliderTL";break;case"top-right":s="esri"+e+"SliderTR";break;case"bottom-left":s="esri"+e+"SliderBL";break;case"bottom-right":s="esri"+e+"SliderBR"}return"esri"+e+"Slider "+t+" "+s},_addZoomButtonTooltips:function(i,e){var t=Z.widgets.zoomSlider;d.set(i,"title",t.zoomIn),d.set(e,"title",t.zoomOut)},_createSlider:function(i,e,t){if(this._mapParams.slider){var s,n,a,r=R("div",{id:this.id+"_zoom_slider"},this.root),l=v.defaults.map,h=this._getSliderClass(!0),d=-1!==h.indexOf("Horizontal"),c=this.getNumLevels();if(c>0){var m,_,u=this._mapParams.sliderLabels,g=!!u,p=u!==!1;if(p){var b,S=d?"bottomDecoration":"rightDecoration";if(!u)for(u=[],s=0,n=c;n>s;s++)u[s]="";b=[{"class":"esriLargeSliderTicks",container:S,count:c,dijitClass:e},{"class":g&&"esriLargeSliderLabels",container:S,count:c,labels:u,dijitClass:t}],o.forEach(b,function(i){var t=R("div"),s=i.dijitClass;delete i.dijitClass,r.appendChild(t),s===e?m=new s(i,t):_=new s(i,t)})}a=this._slider=new i({id:r.id,"class":h,minimum:this.getMinZoom(),maximum:this.getMaxZoom(),discreteValues:c,value:this.getLevel(),clickSelect:!0,intermediateChanges:!0,style:"z-index:"+D+";"},r),a.startup(),p&&(m.startup(),_.startup()),this._slider_connect=w(a,"onChange",this,"_onSliderChangeHandler"),this._connects.push(w(this,"onExtentChange",this,"_onExtentChangeSliderHandler")),this._connects.push(w(a._movable,"onFirstMove",this,"_onSliderMoveStartHandler"))}else{a=this._slider=new i({id:r.id,"class":h,minimum:0,maximum:2,discreteValues:3,value:1,clickSelect:!0,intermediateChanges:l.sliderChangeImmediate,style:"height:50px; z-index:"+D+";"},r);var C=a.domNode.firstChild.childNodes;for(s=1;3>=s;s++)L(C[s],"visibility","hidden");a.startup(),this._slider_connect=w(a,"onChange",this,"_onDynSliderChangeHandler"),this._connects.push(w(this,"onExtentChange",this,"_onExtentChangeDynSliderHandler"))}var Z=a.incrementButton,M=a.decrementButton;d?this._addZoomButtonTooltips(Z,M):this._addZoomButtonTooltips(M,Z),Z.style.outline="none",M.style.outline="none",a.sliderHandle.style.outline="none",a._onKeyPress=function(){};var k=a._movable;if(k){var z=k.onMouseDown;k.onMouseDown=function(i){f("ie")<9&&1!==i.button||z.apply(this,arguments)}}this.isZoomSlider=!0}},_onSliderMoveStartHandler:function(){y(this._slider_connect),y(this._slidermovestop_connect),this._slider_connect=w(this._slider,"onChange",this,"_onSliderChangeDragHandler"),this._slidermovestop_connect=w(this._slider._movable,"onMoveStop",this,"_onSliderMoveEndHandler")},_onSliderChangeDragHandler:function(i){this._extentUtil({targetLevel:i})},_onSliderMoveEndHandler:function(){y(this._slider_connect),y(this._slidermovestop_connect)},_onSliderChangeHandler:function(i){this.setLevel(i)},_updateSliderValue:function(i,e){y(this._slider_connect);var t=this._slider,s=t._onChangeActive;t._onChangeActive=!1,t.set("value",i),t._onChangeActive=s,this._slider_connect=w(t,"onChange",this,e)},_onExtentChangeSliderHandler:function(i,e,t,s){y(this._slidermovestop_connect),this._updateSliderValue(s.level,"_onSliderChangeHandler")},_onDynSliderChangeHandler:function(i){this._extentUtil({numLevels:i>0?1:-1})},_onExtentChangeDynSliderHandler:function(){this._updateSliderValue(1,"_onDynSliderChangeHandler")},_openLogoLink:function(i){window.open(v.defaults.map.logoLink,"_blank"),a.stop(i)},enableMapNavigation:function(){this.navigationManager.enableNavigation()},disableMapNavigation:function(){this.navigationManager.disableNavigation()},enableDoubleClickZoom:function(){this.isDoubleClickZoom||(this.navigationManager.enableDoubleClickZoom(),this.isDoubleClickZoom=!0)},disableDoubleClickZoom:function(){this.isDoubleClickZoom&&(this.navigationManager.disableDoubleClickZoom(),this.isDoubleClickZoom=!1)},enableShiftDoubleClickZoom:function(){this.isShiftDoubleClickZoom||(H(this.declaredClass+": "+j,null,"v2.0"),this.navigationManager.enableShiftDoubleClickZoom(),this.isShiftDoubleClickZoom=!0)},disableShiftDoubleClickZoom:function(){this.isShiftDoubleClickZoom&&(H(this.declaredClass+": "+j,null,"v2.0"),this.navigationManager.disableShiftDoubleClickZoom(),this.isShiftDoubleClickZoom=!1)},enableClickRecenter:function(){this.isClickRecenter||(this.navigationManager.enableClickRecenter(),this.isClickRecenter=!0)},disableClickRecenter:function(){this.isClickRecenter&&(this.navigationManager.disableClickRecenter(),this.isClickRecenter=!1)},enablePan:function(){this.isPan||(this.navigationManager.enablePan(),this.isPan=!0)},disablePan:function(){this.isPan&&(this.navigationManager.disablePan(),this.isPan=!1)},enableRubberBandZoom:function(){this.isRubberBandZoom||(this.navigationManager.enableRubberBandZoom(),this.isRubberBandZoom=!0)},disableRubberBandZoom:function(){this.isRubberBandZoom&&(this.navigationManager.disableRubberBandZoom(),this.isRubberBandZoom=!1)},enableKeyboardNavigation:function(){this.isKeyboardNavigation||(this.navigationManager.enableKeyboardNavigation(),this.isKeyboardNavigation=!0)},disableKeyboardNavigation:function(){this.isKeyboardNavigation&&(this.navigationManager.disableKeyboardNavigation(),this.isKeyboardNavigation=!1)},enableScrollWheelZoom:function(){this.isScrollWheelZoom||(this.navigationManager.enableScrollWheelZoom(),this.isScrollWheelZoom=!0)},disableScrollWheelZoom:function(){this.isScrollWheelZoom&&(this.navigationManager.disableScrollWheelZoom(),this.isScrollWheelZoom=!1)},showPanArrows:function(){this._navDiv&&(this._navDiv.style.display="block",this.isPanArrows=!0)},hidePanArrows:function(){this._navDiv&&(this._navDiv.style.display="none",this.isPanArrows=!1)},showZoomSlider:function(){this._slider&&(L(this._slider.domNode||this._slider,"visibility","visible"),this.isZoomSlider=!0)},hideZoomSlider:function(){this._slider&&(L(this._slider.domNode||this._slider,"visibility","hidden"),this.isZoomSlider=!1)}});return f("extend-esri")&&(p.Map=A),A});