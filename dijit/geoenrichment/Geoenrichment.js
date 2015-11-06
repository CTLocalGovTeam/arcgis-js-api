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

define(["../../declare","dojo/_base/lang","dojo/on","dojo/string","dojo/promise/all","./bufferTitle","../../geometry/Polygon","../../units","./DataProvider","../../tasks/geoenrichment/GeoenrichmentTask","../../tasks/geoenrichment/EnrichParameters","../../tasks/geoenrichment/RingBuffer","../../tasks/geoenrichment/DriveBuffer","../../tasks/geoenrichment/GeographyLevel","../../tasks/geoenrichment/GeometryStudyArea","../../tasks/geoenrichment/AddressStudyArea","../../tasks/geoenrichment/studyAreaFromJson","./config","./lang","./_Invoke","dojo/when","../../tasks/locator","../../tasks/FeatureSet","../../graphic"],function(e,t,s,r,n,a,i,u,o,h,l,c,d,f,y,v,g,m,p,_,k,D){var b=e(null,{_keys:null,_values:null,_capacity:5,constructor:function(e){this._keys=[],this._values={},e&&(this._capacity=e)},getValue:function(e){return this._values[e]},setValue:function(e,t){this._keys.push(e),this._values[e]=t,this._removeOverflow()},hasValue:function(e){return this._values.hasOwnProperty(e)},_removeOverflow:function(){if(this._keys.length>this._capacity)for(var e=this._keys.splice(0,this._keys.length-this._capacity),t=0;t<e.length;t++)delete this._values[e[t]]},setCapacity:function(e){this._capacity=e,this._removeOverflow()}}),V=e(null,{_values:null,constructor:function(e){this._values=new b(e)},getValue:function(e){var t=this.keyToString(e);if(this._values.hasValue(t))return this._values.getValue(t);var s=this;return this.keyToValue(e).then(function(e){return s._values.setValue(t,e),e})},keyToString:function(e){return JSON.stringify(e)},keyToValue:function(){throw"Not implemented"},setCapacity:function(e){this._values.setCapacity(e)}}),A=e([V],{keyToString:function(e){return JSON.stringify(e.toJson())},keyToValue:function(e){var t=new D(m.locatorUrl);return t.locationToAddress(e).then(function(e){return r.substitute(m.addressFormat,e.address,function(e){return e||""})},function(){return""})}}),w=e([V],{_countryValues:null,_geometries:null,constructor:function(){this._countryValues=new b,this._geometries=new b(3)},keyToValue:function(e){var t,s,r=this,n=g(e.studyArea),a=n.returnGeometry;a&&(s=n.toJson(),delete s.returnGeometry,delete s.comparisonLevels,delete s.attributes,s=JSON.stringify(s),t=this._geometries.hasValue(s));var i=a&&!t,u=new h(m.server);u.token=m.token;for(var o=null,c=n.comparisonGeographyLevels.length-1;c>=0;c--)"Admin1"==n.comparisonGeographyLevels[c].layerID&&(o=n.comparisonGeographyLevels.splice(c,1)[0]);var d,f;o&&(d=JSON.stringify({variables:e.variables,country:e.country}),f=this._countryValues.hasValue(d),f||n.comparisonGeographyLevels.push(o));var y=new l;return y.forStorage=!1,y.countryID=e.country,y.variables=e.variables,n.returnGeometry=i,i&&(y.outSR=n.geometry?n.geometry.spatialReference:e.outSR),y.studyAreas.push(n),u.enrich(y).then(function(e){var n=e.featureSets[0].features;return o&&(f?n.push(r._countryValues.getValue(d)):r._countryValues.setValue(d,n[n.length-1])),a&&(t?n[0].geometry=r._geometries.getValue(s):r._geometries.setValue(s,n[0].geometry)),e.featureSets[0]})},setCapacity:function(e){this.inherited(arguments),this._countryValues.setCapacity(e)}}),G=e([V],{metadata:null,_enrichCache:null,_addressCache:null,constructor:function(e){this._enrichCache=new w(e),this._addressCache=new A(3)},keyToValue:function(e){var t=this,s=[],r=e.returnAddress;delete e.returnAddress,s.push(this._enrichCache.getValue(e));var i=g(e.studyArea);return r&&s.push(this._addressCache.getValue(i.geometry)),n(s).then(function(e){var s=e[0],n=s.features[0];return n.attributes[t.metadata.name]||(n.attributes[t.metadata.name]=a(i.getGeomType(),i.options),r?n.attributes[t.metadata.address]=e[1]:i instanceof v&&(n.attributes[t.metadata.address]=i.address.text)),s})},setCapacity:function(e){this.inherited(arguments),this._enrichCache.setCapacity(e)}}),S=e("esri.dijit.geoenrichment.Geoenrichment",[o,_],{country:null,returnGeometry:!1,returnAddress:!1,returnData:!0,studyArea:null,outSR:null,buffer:null,variables:null,levels:null,highestLevel:null,data:null,restartOnDone:!1,requests:null,started:!1,cache:null,constructor:function(){this.buffer=new c,this.cache=new G,this.cache.metadata=this.metadata},handleResponse:function(e){try{this.data=e,this.onDone(null)}catch(t){this.onDone(t)}},handleError:function(e){this.onDone(e)},onDone:function(e){this.requests=null,e?"CancelError"!==e.name&&(console.log(e),s.emit(this,"error",e)):s.emit(this,"data"),this.restartOnDone?(this.invalidate(),this.restartOnDone=!1):(s.emit(this,"end"),this.started=!1)},requestData:function(){if(this.studyArea&&this.variables&&this.buffer){this.requests=[],this.started||(s.emit(this,"start"),this.started=!0);var e,r=this.buffer,n=!1;if(this.studyArea instanceof y)switch(this.studyArea.geometry.type){case"point":n=this.returnAddress;break;case"polyline":this.buffer instanceof d&&(r=new c);break;case"polygon":r=null}var a=t.clone(this.studyArea);if(!a.options&&r&&(a.options=r),this.levels)for(var i=0;i<this.levels.length;i++)a.comparisonGeographyLevels.push(new f({layerID:this.levels[i]}));this.highestLevel&&a.comparisonGeographyLevels.push(new f({layerID:this.highestLevel})),a.returnGeometry=this.returnGeometry,e=k(this.cache.getValue({country:this.country,variables:this.variables,returnData:this.returnData,studyArea:a.toJson(),outSR:this.outSR,returnAddress:n})),this.requests.push(e),e.then(t.hitch(this,this.handleResponse),t.hitch(this,this.handleError))}},invalidate:function(){this.pendingInvoke("requestData")||(this.requests?this.restartOnDone=!0:(this.geometry=null,this.invoke("requestData")))},setStudyArea:function(e){this.studyArea=e,this.invalidate()},setBuffer:function(e){this.buffer=e,this.invalidate()},getBuffer:function(){return this.buffer},invalidateData:function(){this.data=null,this.invalidate()},setVariables:function(e){p.arraysEqual(this.variables,e)||(this.variables=e,this.invalidateData())},setGeoLevels:function(e,t){p.arraysEqual(this.levels,e)&&this.highestLevel==t||(this.levels=e,this.highestLevel=t,this.invalidateData())},setCacheLimit:function(e){this.cache.setCapacity(e)},getData:function(){return this.data},getGeometry:function(){return this.data.features[0].geometry},isBusy:function(){return this.pendingInvoke("requestData")||this.requests||this.restartOnDone},stop:function(){if(this.restartOnDone=!1,this.cancelInvoke("requestData"),this.requests)for(var e=this.requests.slice(0),t=0;t<e.length;t++)e[t].cancel()},setReturnAddress:function(e){this.returnAddress!=e&&(this.returnAddress=e,e&&this.invalidateData())}});return S});