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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/Deferred","dojo/has","../../request","../../urlUtils","../../kernel","../Task","./ReviewerSession"],function(e,r,s,t,i,n,a,o,c,l){var u=e(c,{declaredClass:"esri.tasks.datareviewer.DRSBaseTask",_url:null,_queryParams:null,_reviewerMapServerUrl:null,constructor:function(e){var s=e[e.length-1];"/"==s&&(e=e.slice(0,-1));var t=a.urlToObject(e);this._url=t.path,this._queryParams=t.query;var i=this._url.toLowerCase().lastIndexOf("/exts/");i>0&&(this._reviewerMapServerUrl=this._url.substring(0,i)),this._successHandler=r.hitch(this,this._successHandler),this._errorHandler=r.hitch(this,this._errorHandler),this._appendQueryParams=r.hitch(this,this._appendQueryParams),this.onGetLifecycleStatusStringsComplete=r.hitch(this,this.onGetLifecycleStatusStringsComplete),this.onGetReviewerSessionsComplete=r.hitch(this,this.onGetReviewerSessionsComplete),this.onCreateReviewerSessionComplete=r.hitch(this,this.onCreateReviewerSessionComplete),this.onError=r.hitch(this,this.onError)},_appendQueryParams:function(e){if(this._queryParams)for(var r in this._queryParams){var s=a.urlToObject(e);e+=s.query?"&"+r+"="+this._queryParams[r]:"?"+r+"="+this._queryParams[r]}return e},_successHandler:function(e,r,s){r&&this[r].apply(this,[e]),s&&s.resolve(e)},_errorHandler:function(e,r){null===e&&(e=new Error("Unexpected response received from server"),e.code=500),this.onError(e),r&&r.reject(e)},getReviewerMapServerUrl:function(){var e=null;if(e=this._reviewerMapServerUrl){if(this._queryParams)for(var r in this._queryParams){var s=a.urlToObject(e);e+=s.query?"&"+r+"="+this._queryParams[r]:"?"+r+"="+this._queryParams[r]}return e}return null},getLifecycleStatusStrings:function(){var e=this._successHandler,i=this._errorHandler,a=this._appendQueryParams,o=this._url+"/Utilities/getLifecycleStatusStrings";o=a(o);var c=new t,l=n({callbackParamName:"callback",url:o,content:{f:"json"}});return l.then(r.hitch(this,function(r){if(void 0!==r.error){var t=new Error;return t.message=r.error.message,t.code=r.error.code,void i(t,c)}try{var n=r.lifecycleStatusString;if(void 0===n)i(null,c);else{var a=[];s.forEach(n,function(e){a[e.descriptionCode]=e.descriptionString}),e({lifecycleStatusStrings:a},"onGetLifecycleStatusStringsComplete",c)}}catch(o){i(o,c)}}),function(e){i(e,c)}),c},createReviewerSession:function(e,s){var i=this._successHandler,a=this._errorHandler,o=this._appendQueryParams,c=this._url+"/Utilities/createReviewerSession";c=o(c);var u=new t,h=n({callbackParamName:"callback",url:c,content:{sessionName:e,sessionProperties:s.toJsonSessionOptions(),f:"json"}});return h.then(r.hitch(this,function(e){if(void 0!==e.error){var r=new Error;return r.message=e.error.message,r.code=e.error.code,void a(r,u)}try{if(void 0===e.sessionAttributes)a(null,u);else{var s=e.sessionAttributes,t=new l(s.sessionId,s.sessionName,s.userName,s.versionName);i({reviewerSession:t},"onCreateReviewerSessionComplete",u)}}catch(n){a(n,u)}}),function(e){a(e,u)}),u},getReviewerSessions:function(){var e=this._successHandler,i=this._errorHandler,a=this._appendQueryParams,o=this._url+"/Utilities/getReviewerSessions";o=a(o);var c=new t,u=n({callbackParamName:"callback",url:o,content:{f:"json"}});return u.then(r.hitch(this,function(r){if(void 0!==r.error){var t=new Error;return t.message=r.error.message,t.code=r.error.code,void i(t,c)}try{var n=r.sessionAttributes;if(void 0===n)i(null,c);else{var a=[];s.forEach(n,function(e,r){a[r]=new l(e.sessionId,e.sessionName,e.userName,e.versionName)}),e({reviewerSessions:a},"onGetReviewerSessionsComplete",c)}}catch(o){i(o,c)}}),function(e){i(e,c)}),c},onGetLifecycleStatusStringsComplete:function(){},onGetReviewerSessionsComplete:function(){},onCreateReviewerSessionComplete:function(){},onError:function(){}});return i("extend-esri")&&r.setObject("tasks.datareviewer.DRSBaseTask",u,o),u});