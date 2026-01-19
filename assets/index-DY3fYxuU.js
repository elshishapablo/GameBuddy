(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function gS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var t0={exports:{}},Mc={},n0={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ma=Symbol.for("react.element"),vS=Symbol.for("react.portal"),_S=Symbol.for("react.fragment"),xS=Symbol.for("react.strict_mode"),yS=Symbol.for("react.profiler"),SS=Symbol.for("react.provider"),MS=Symbol.for("react.context"),ES=Symbol.for("react.forward_ref"),TS=Symbol.for("react.suspense"),wS=Symbol.for("react.memo"),AS=Symbol.for("react.lazy"),vp=Symbol.iterator;function CS(t){return t===null||typeof t!="object"?null:(t=vp&&t[vp]||t["@@iterator"],typeof t=="function"?t:null)}var i0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},r0=Object.assign,s0={};function so(t,e,n){this.props=t,this.context=e,this.refs=s0,this.updater=n||i0}so.prototype.isReactComponent={};so.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};so.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function o0(){}o0.prototype=so.prototype;function Od(t,e,n){this.props=t,this.context=e,this.refs=s0,this.updater=n||i0}var kd=Od.prototype=new o0;kd.constructor=Od;r0(kd,so.prototype);kd.isPureReactComponent=!0;var _p=Array.isArray,a0=Object.prototype.hasOwnProperty,Bd={current:null},l0={key:!0,ref:!0,__self:!0,__source:!0};function c0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)a0.call(e,i)&&!l0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ma,type:t,key:s,ref:o,props:r,_owner:Bd.current}}function RS(t,e){return{$$typeof:ma,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ma}function PS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xp=/\/+/g;function tu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?PS(""+t.key):e.toString(36)}function yl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ma:case vS:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+tu(o,0):i,_p(r)?(n="",t!=null&&(n=t.replace(xp,"$&/")+"/"),yl(r,e,n,"",function(c){return c})):r!=null&&(zd(r)&&(r=RS(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(xp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",_p(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+tu(s,a);o+=yl(s,e,n,l,r)}else if(l=CS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+tu(s,a++),o+=yl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Pa(t,e,n){if(t==null)return t;var i=[],r=0;return yl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function bS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var en={current:null},Sl={transition:null},LS={ReactCurrentDispatcher:en,ReactCurrentBatchConfig:Sl,ReactCurrentOwner:Bd};function u0(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:Pa,forEach:function(t,e,n){Pa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Pa(t,function(){e++}),e},toArray:function(t){return Pa(t,function(e){return e})||[]},only:function(t){if(!zd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=so;je.Fragment=_S;je.Profiler=yS;je.PureComponent=Od;je.StrictMode=xS;je.Suspense=TS;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=LS;je.act=u0;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=r0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Bd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)a0.call(e,l)&&!l0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ma,type:t.type,key:r,ref:s,props:i,_owner:o}};je.createContext=function(t){return t={$$typeof:MS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:SS,_context:t},t.Consumer=t};je.createElement=c0;je.createFactory=function(t){var e=c0.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:ES,render:t}};je.isValidElement=zd;je.lazy=function(t){return{$$typeof:AS,_payload:{_status:-1,_result:t},_init:bS}};je.memo=function(t,e){return{$$typeof:wS,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=Sl.transition;Sl.transition={};try{t()}finally{Sl.transition=e}};je.unstable_act=u0;je.useCallback=function(t,e){return en.current.useCallback(t,e)};je.useContext=function(t){return en.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return en.current.useDeferredValue(t)};je.useEffect=function(t,e){return en.current.useEffect(t,e)};je.useId=function(){return en.current.useId()};je.useImperativeHandle=function(t,e,n){return en.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return en.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return en.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return en.current.useMemo(t,e)};je.useReducer=function(t,e,n){return en.current.useReducer(t,e,n)};je.useRef=function(t){return en.current.useRef(t)};je.useState=function(t){return en.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return en.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return en.current.useTransition()};je.version="18.3.1";n0.exports=je;var Q=n0.exports;const Vd=gS(Q);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DS=Q,NS=Symbol.for("react.element"),US=Symbol.for("react.fragment"),IS=Object.prototype.hasOwnProperty,FS=DS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,OS={key:!0,ref:!0,__self:!0,__source:!0};function f0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)IS.call(e,i)&&!OS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:NS,type:t,key:s,ref:o,props:r,_owner:FS.current}}Mc.Fragment=US;Mc.jsx=f0;Mc.jsxs=f0;t0.exports=Mc;var I=t0.exports,xf={},d0={exports:{}},En={},h0={exports:{}},p0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,k){var H=F.length;F.push(k);e:for(;0<H;){var P=H-1>>>1,U=F[P];if(0<r(U,k))F[P]=k,F[H]=U,H=P;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var k=F[0],H=F.pop();if(H!==k){F[0]=H;e:for(var P=0,U=F.length,se=U>>>1;P<se;){var oe=2*(P+1)-1,te=F[oe],fe=oe+1,ve=F[fe];if(0>r(te,H))fe<U&&0>r(ve,te)?(F[P]=ve,F[fe]=H,P=fe):(F[P]=te,F[oe]=H,P=oe);else if(fe<U&&0>r(ve,H))F[P]=ve,F[fe]=H,P=fe;else break e}}return k}function r(F,k){var H=F.sortIndex-k.sortIndex;return H!==0?H:F.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,d=3,p=!1,_=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(F){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=F)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function y(F){if(x=!1,m(F),!_)if(n(l)!==null)_=!0,$(M);else{var k=n(c);k!==null&&q(y,k.startTime-F)}}function M(F,k){_=!1,x&&(x=!1,h(b),b=-1),p=!0;var H=d;try{for(m(k),f=n(l);f!==null&&(!(f.expirationTime>k)||F&&!V());){var P=f.callback;if(typeof P=="function"){f.callback=null,d=f.priorityLevel;var U=P(f.expirationTime<=k);k=t.unstable_now(),typeof U=="function"?f.callback=U:f===n(l)&&i(l),m(k)}else i(l);f=n(l)}if(f!==null)var se=!0;else{var oe=n(c);oe!==null&&q(y,oe.startTime-k),se=!1}return se}finally{f=null,d=H,p=!1}}var C=!1,T=null,b=-1,S=5,A=-1;function V(){return!(t.unstable_now()-A<S)}function Z(){if(T!==null){var F=t.unstable_now();A=F;var k=!0;try{k=T(!0,F)}finally{k?J():(C=!1,T=null)}}else C=!1}var J;if(typeof v=="function")J=function(){v(Z)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,W=D.port2;D.port1.onmessage=Z,J=function(){W.postMessage(null)}}else J=function(){g(Z,0)};function $(F){T=F,C||(C=!0,J())}function q(F,k){b=g(function(){F(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,$(M))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(d){case 1:case 2:case 3:var k=3;break;default:k=d}var H=d;d=k;try{return F()}finally{d=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,k){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var H=d;d=F;try{return k()}finally{d=H}},t.unstable_scheduleCallback=function(F,k,H){var P=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?P+H:P):H=P,F){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=H+U,F={id:u++,callback:k,priorityLevel:F,startTime:H,expirationTime:U,sortIndex:-1},H>P?(F.sortIndex=H,e(c,F),n(l)===null&&F===n(c)&&(x?(h(b),b=-1):x=!0,q(y,H-P))):(F.sortIndex=U,e(l,F),_||p||(_=!0,$(M))),F},t.unstable_shouldYield=V,t.unstable_wrapCallback=function(F){var k=d;return function(){var H=d;d=k;try{return F.apply(this,arguments)}finally{d=H}}}})(p0);h0.exports=p0;var kS=h0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BS=Q,Sn=kS;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m0=new Set,Yo={};function Zr(t,e){Xs(t,e),Xs(t+"Capture",e)}function Xs(t,e){for(Yo[t]=e,t=0;t<e.length;t++)m0.add(e[t])}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yf=Object.prototype.hasOwnProperty,zS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yp={},Sp={};function VS(t){return yf.call(Sp,t)?!0:yf.call(yp,t)?!1:zS.test(t)?Sp[t]=!0:(yp[t]=!0,!1)}function HS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function GS(t,e,n,i){if(e===null||typeof e>"u"||HS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function tn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){kt[t]=new tn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];kt[e]=new tn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){kt[t]=new tn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){kt[t]=new tn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){kt[t]=new tn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){kt[t]=new tn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){kt[t]=new tn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){kt[t]=new tn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){kt[t]=new tn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hd=/[\-:]([a-z])/g;function Gd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hd,Gd);kt[e]=new tn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hd,Gd);kt[e]=new tn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hd,Gd);kt[e]=new tn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){kt[t]=new tn(t,1,!1,t.toLowerCase(),null,!1,!1)});kt.xlinkHref=new tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){kt[t]=new tn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wd(t,e,n,i){var r=kt.hasOwnProperty(e)?kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(GS(e,n,r,i)&&(n=null),i||r===null?VS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Li=BS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ba=Symbol.for("react.element"),Ss=Symbol.for("react.portal"),Ms=Symbol.for("react.fragment"),jd=Symbol.for("react.strict_mode"),Sf=Symbol.for("react.profiler"),g0=Symbol.for("react.provider"),v0=Symbol.for("react.context"),Xd=Symbol.for("react.forward_ref"),Mf=Symbol.for("react.suspense"),Ef=Symbol.for("react.suspense_list"),Yd=Symbol.for("react.memo"),Vi=Symbol.for("react.lazy"),_0=Symbol.for("react.offscreen"),Mp=Symbol.iterator;function uo(t){return t===null||typeof t!="object"?null:(t=Mp&&t[Mp]||t["@@iterator"],typeof t=="function"?t:null)}var ft=Object.assign,nu;function Ao(t){if(nu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nu=e&&e[1]||""}return`
`+nu+t}var iu=!1;function ru(t,e){if(!t||iu)return"";iu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{iu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ao(t):""}function WS(t){switch(t.tag){case 5:return Ao(t.type);case 16:return Ao("Lazy");case 13:return Ao("Suspense");case 19:return Ao("SuspenseList");case 0:case 2:case 15:return t=ru(t.type,!1),t;case 11:return t=ru(t.type.render,!1),t;case 1:return t=ru(t.type,!0),t;default:return""}}function Tf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ms:return"Fragment";case Ss:return"Portal";case Sf:return"Profiler";case jd:return"StrictMode";case Mf:return"Suspense";case Ef:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case v0:return(t.displayName||"Context")+".Consumer";case g0:return(t._context.displayName||"Context")+".Provider";case Xd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yd:return e=t.displayName||null,e!==null?e:Tf(t.type)||"Memo";case Vi:e=t._payload,t=t._init;try{return Tf(t(e))}catch{}}return null}function jS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tf(e);case 8:return e===jd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function x0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function XS(t){var e=x0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function La(t){t._valueTracker||(t._valueTracker=XS(t))}function y0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=x0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wf(t,e){var n=e.checked;return ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ep(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function S0(t,e){e=e.checked,e!=null&&Wd(t,"checked",e,!1)}function Af(t,e){S0(t,e);var n=cr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Cf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Cf(t,e.type,cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Tp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cf(t,e,n){(e!=="number"||Fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Co=Array.isArray;function ks(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+cr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Rf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(Co(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:cr(n)}}function M0(t,e){var n=cr(e.value),i=cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ap(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function E0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?E0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Da,T0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Da=Da||document.createElement("div"),Da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Da.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var No={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},YS=["Webkit","ms","Moz","O"];Object.keys(No).forEach(function(t){YS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),No[e]=No[t]})});function w0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||No.hasOwnProperty(t)&&No[t]?(""+e).trim():e+"px"}function A0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=w0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var qS=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bf(t,e){if(e){if(qS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function Lf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Df=null;function qd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nf=null,Bs=null,zs=null;function Cp(t){if(t=_a(t)){if(typeof Nf!="function")throw Error(re(280));var e=t.stateNode;e&&(e=Cc(e),Nf(t.stateNode,t.type,e))}}function C0(t){Bs?zs?zs.push(t):zs=[t]:Bs=t}function R0(){if(Bs){var t=Bs,e=zs;if(zs=Bs=null,Cp(t),e)for(t=0;t<e.length;t++)Cp(e[t])}}function P0(t,e){return t(e)}function b0(){}var su=!1;function L0(t,e,n){if(su)return t(e,n);su=!0;try{return P0(t,e,n)}finally{su=!1,(Bs!==null||zs!==null)&&(b0(),R0())}}function $o(t,e){var n=t.stateNode;if(n===null)return null;var i=Cc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var Uf=!1;if(wi)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){Uf=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{Uf=!1}function $S(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Uo=!1,Ol=null,kl=!1,If=null,KS={onError:function(t){Uo=!0,Ol=t}};function ZS(t,e,n,i,r,s,o,a,l){Uo=!1,Ol=null,$S.apply(KS,arguments)}function QS(t,e,n,i,r,s,o,a,l){if(ZS.apply(this,arguments),Uo){if(Uo){var c=Ol;Uo=!1,Ol=null}else throw Error(re(198));kl||(kl=!0,If=c)}}function Qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function D0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rp(t){if(Qr(t)!==t)throw Error(re(188))}function JS(t){var e=t.alternate;if(!e){if(e=Qr(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Rp(r),t;if(s===i)return Rp(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function N0(t){return t=JS(t),t!==null?U0(t):null}function U0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=U0(t);if(e!==null)return e;t=t.sibling}return null}var I0=Sn.unstable_scheduleCallback,Pp=Sn.unstable_cancelCallback,eM=Sn.unstable_shouldYield,tM=Sn.unstable_requestPaint,mt=Sn.unstable_now,nM=Sn.unstable_getCurrentPriorityLevel,$d=Sn.unstable_ImmediatePriority,F0=Sn.unstable_UserBlockingPriority,Bl=Sn.unstable_NormalPriority,iM=Sn.unstable_LowPriority,O0=Sn.unstable_IdlePriority,Ec=null,ri=null;function rM(t){if(ri&&typeof ri.onCommitFiberRoot=="function")try{ri.onCommitFiberRoot(Ec,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:aM,sM=Math.log,oM=Math.LN2;function aM(t){return t>>>=0,t===0?32:31-(sM(t)/oM|0)|0}var Na=64,Ua=4194304;function Ro(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ro(a):(s&=o,s!==0&&(i=Ro(s)))}else o=n&~r,o!==0?i=Ro(o):s!==0&&(i=Ro(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-qn(e),r=1<<n,i|=t[n],e&=~r;return i}function lM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-qn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=lM(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ff(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function k0(){var t=Na;return Na<<=1,!(Na&4194240)&&(Na=64),t}function ou(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ga(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qn(e),t[e]=n}function uM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Kd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ze=0;function B0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var z0,Zd,V0,H0,G0,Of=!1,Ia=[],Zi=null,Qi=null,Ji=null,Ko=new Map,Zo=new Map,ji=[],fM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bp(t,e){switch(t){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":Ko.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(e.pointerId)}}function ho(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=_a(e),e!==null&&Zd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function dM(t,e,n,i,r){switch(e){case"focusin":return Zi=ho(Zi,t,e,n,i,r),!0;case"dragenter":return Qi=ho(Qi,t,e,n,i,r),!0;case"mouseover":return Ji=ho(Ji,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ko.set(s,ho(Ko.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Zo.set(s,ho(Zo.get(s)||null,t,e,n,i,r)),!0}return!1}function W0(t){var e=Nr(t.target);if(e!==null){var n=Qr(e);if(n!==null){if(e=n.tag,e===13){if(e=D0(n),e!==null){t.blockedOn=e,G0(t.priority,function(){V0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ml(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=kf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Df=i,n.target.dispatchEvent(i),Df=null}else return e=_a(n),e!==null&&Zd(e),t.blockedOn=n,!1;e.shift()}return!0}function Lp(t,e,n){Ml(t)&&n.delete(e)}function hM(){Of=!1,Zi!==null&&Ml(Zi)&&(Zi=null),Qi!==null&&Ml(Qi)&&(Qi=null),Ji!==null&&Ml(Ji)&&(Ji=null),Ko.forEach(Lp),Zo.forEach(Lp)}function po(t,e){t.blockedOn===e&&(t.blockedOn=null,Of||(Of=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,hM)))}function Qo(t){function e(r){return po(r,t)}if(0<Ia.length){po(Ia[0],t);for(var n=1;n<Ia.length;n++){var i=Ia[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Zi!==null&&po(Zi,t),Qi!==null&&po(Qi,t),Ji!==null&&po(Ji,t),Ko.forEach(e),Zo.forEach(e),n=0;n<ji.length;n++)i=ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ji.length&&(n=ji[0],n.blockedOn===null);)W0(n),n.blockedOn===null&&ji.shift()}var Vs=Li.ReactCurrentBatchConfig,Vl=!0;function pM(t,e,n,i){var r=Ze,s=Vs.transition;Vs.transition=null;try{Ze=1,Qd(t,e,n,i)}finally{Ze=r,Vs.transition=s}}function mM(t,e,n,i){var r=Ze,s=Vs.transition;Vs.transition=null;try{Ze=4,Qd(t,e,n,i)}finally{Ze=r,Vs.transition=s}}function Qd(t,e,n,i){if(Vl){var r=kf(t,e,n,i);if(r===null)gu(t,e,i,Hl,n),bp(t,i);else if(dM(r,t,e,n,i))i.stopPropagation();else if(bp(t,i),e&4&&-1<fM.indexOf(t)){for(;r!==null;){var s=_a(r);if(s!==null&&z0(s),s=kf(t,e,n,i),s===null&&gu(t,e,i,Hl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else gu(t,e,i,null,n)}}var Hl=null;function kf(t,e,n,i){if(Hl=null,t=qd(i),t=Nr(t),t!==null)if(e=Qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=D0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Hl=t,null}function j0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nM()){case $d:return 1;case F0:return 4;case Bl:case iM:return 16;case O0:return 536870912;default:return 16}default:return 16}}var Yi=null,Jd=null,El=null;function X0(){if(El)return El;var t,e=Jd,n=e.length,i,r="value"in Yi?Yi.value:Yi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return El=r.slice(t,1<i?1-i:void 0)}function Tl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fa(){return!0}function Dp(){return!1}function Tn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fa:Dp,this.isPropagationStopped=Dp,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fa)},persist:function(){},isPersistent:Fa}),e}var oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eh=Tn(oo),va=ft({},oo,{view:0,detail:0}),gM=Tn(va),au,lu,mo,Tc=ft({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:th,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mo&&(mo&&t.type==="mousemove"?(au=t.screenX-mo.screenX,lu=t.screenY-mo.screenY):lu=au=0,mo=t),au)},movementY:function(t){return"movementY"in t?t.movementY:lu}}),Np=Tn(Tc),vM=ft({},Tc,{dataTransfer:0}),_M=Tn(vM),xM=ft({},va,{relatedTarget:0}),cu=Tn(xM),yM=ft({},oo,{animationName:0,elapsedTime:0,pseudoElement:0}),SM=Tn(yM),MM=ft({},oo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),EM=Tn(MM),TM=ft({},oo,{data:0}),Up=Tn(TM),wM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},AM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},CM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function RM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=CM[t])?!!e[t]:!1}function th(){return RM}var PM=ft({},va,{key:function(t){if(t.key){var e=wM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?AM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:th,charCode:function(t){return t.type==="keypress"?Tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bM=Tn(PM),LM=ft({},Tc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ip=Tn(LM),DM=ft({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:th}),NM=Tn(DM),UM=ft({},oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),IM=Tn(UM),FM=ft({},Tc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),OM=Tn(FM),kM=[9,13,27,32],nh=wi&&"CompositionEvent"in window,Io=null;wi&&"documentMode"in document&&(Io=document.documentMode);var BM=wi&&"TextEvent"in window&&!Io,Y0=wi&&(!nh||Io&&8<Io&&11>=Io),Fp=" ",Op=!1;function q0(t,e){switch(t){case"keyup":return kM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Es=!1;function zM(t,e){switch(t){case"compositionend":return $0(e);case"keypress":return e.which!==32?null:(Op=!0,Fp);case"textInput":return t=e.data,t===Fp&&Op?null:t;default:return null}}function VM(t,e){if(Es)return t==="compositionend"||!nh&&q0(t,e)?(t=X0(),El=Jd=Yi=null,Es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Y0&&e.locale!=="ko"?null:e.data;default:return null}}var HM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!HM[t.type]:e==="textarea"}function K0(t,e,n,i){C0(i),e=Gl(e,"onChange"),0<e.length&&(n=new eh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Fo=null,Jo=null;function GM(t){a_(t,0)}function wc(t){var e=As(t);if(y0(e))return t}function WM(t,e){if(t==="change")return e}var Z0=!1;if(wi){var uu;if(wi){var fu="oninput"in document;if(!fu){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),fu=typeof Bp.oninput=="function"}uu=fu}else uu=!1;Z0=uu&&(!document.documentMode||9<document.documentMode)}function zp(){Fo&&(Fo.detachEvent("onpropertychange",Q0),Jo=Fo=null)}function Q0(t){if(t.propertyName==="value"&&wc(Jo)){var e=[];K0(e,Jo,t,qd(t)),L0(GM,e)}}function jM(t,e,n){t==="focusin"?(zp(),Fo=e,Jo=n,Fo.attachEvent("onpropertychange",Q0)):t==="focusout"&&zp()}function XM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wc(Jo)}function YM(t,e){if(t==="click")return wc(e)}function qM(t,e){if(t==="input"||t==="change")return wc(e)}function $M(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zn=typeof Object.is=="function"?Object.is:$M;function ea(t,e){if(Zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!yf.call(e,r)||!Zn(t[r],e[r]))return!1}return!0}function Vp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hp(t,e){var n=Vp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vp(n)}}function J0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?J0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function e_(){for(var t=window,e=Fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fl(t.document)}return e}function ih(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function KM(t){var e=e_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&J0(n.ownerDocument.documentElement,n)){if(i!==null&&ih(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Hp(n,s);var o=Hp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ZM=wi&&"documentMode"in document&&11>=document.documentMode,Ts=null,Bf=null,Oo=null,zf=!1;function Gp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zf||Ts==null||Ts!==Fl(i)||(i=Ts,"selectionStart"in i&&ih(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Oo&&ea(Oo,i)||(Oo=i,i=Gl(Bf,"onSelect"),0<i.length&&(e=new eh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ts)))}function Oa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionend:Oa("Transition","TransitionEnd")},du={},t_={};wi&&(t_=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function Ac(t){if(du[t])return du[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in t_)return du[t]=e[n];return t}var n_=Ac("animationend"),i_=Ac("animationiteration"),r_=Ac("animationstart"),s_=Ac("transitionend"),o_=new Map,Wp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(t,e){o_.set(t,e),Zr(e,[t])}for(var hu=0;hu<Wp.length;hu++){var pu=Wp[hu],QM=pu.toLowerCase(),JM=pu[0].toUpperCase()+pu.slice(1);pr(QM,"on"+JM)}pr(n_,"onAnimationEnd");pr(i_,"onAnimationIteration");pr(r_,"onAnimationStart");pr("dblclick","onDoubleClick");pr("focusin","onFocus");pr("focusout","onBlur");pr(s_,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);Zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));function jp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,QS(i,e,void 0,t),t.currentTarget=null}function a_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;jp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;jp(r,a,c),s=l}}}if(kl)throw t=If,kl=!1,If=null,t}function it(t,e){var n=e[jf];n===void 0&&(n=e[jf]=new Set);var i=t+"__bubble";n.has(i)||(l_(e,t,2,!1),n.add(i))}function mu(t,e,n){var i=0;e&&(i|=4),l_(n,t,i,e)}var ka="_reactListening"+Math.random().toString(36).slice(2);function ta(t){if(!t[ka]){t[ka]=!0,m0.forEach(function(n){n!=="selectionchange"&&(eE.has(n)||mu(n,!1,t),mu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ka]||(e[ka]=!0,mu("selectionchange",!1,e))}}function l_(t,e,n,i){switch(j0(e)){case 1:var r=pM;break;case 4:r=mM;break;default:r=Qd}n=r.bind(null,e,n,t),r=void 0,!Uf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function gu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Nr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}L0(function(){var c=s,u=qd(n),f=[];e:{var d=o_.get(t);if(d!==void 0){var p=eh,_=t;switch(t){case"keypress":if(Tl(n)===0)break e;case"keydown":case"keyup":p=bM;break;case"focusin":_="focus",p=cu;break;case"focusout":_="blur",p=cu;break;case"beforeblur":case"afterblur":p=cu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=_M;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=NM;break;case n_:case i_:case r_:p=SM;break;case s_:p=IM;break;case"scroll":p=gM;break;case"wheel":p=OM;break;case"copy":case"cut":case"paste":p=EM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ip}var x=(e&4)!==0,g=!x&&t==="scroll",h=x?d!==null?d+"Capture":null:d;x=[];for(var v=c,m;v!==null;){m=v;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,h!==null&&(y=$o(v,h),y!=null&&x.push(na(v,y,m)))),g)break;v=v.return}0<x.length&&(d=new p(d,_,null,n,u),f.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Df&&(_=n.relatedTarget||n.fromElement)&&(Nr(_)||_[Ai]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Nr(_):null,_!==null&&(g=Qr(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(x=Np,y="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=Ip,y="onPointerLeave",h="onPointerEnter",v="pointer"),g=p==null?d:As(p),m=_==null?d:As(_),d=new x(y,v+"leave",p,n,u),d.target=g,d.relatedTarget=m,y=null,Nr(u)===c&&(x=new x(h,v+"enter",_,n,u),x.target=m,x.relatedTarget=g,y=x),g=y,p&&_)t:{for(x=p,h=_,v=0,m=x;m;m=ns(m))v++;for(m=0,y=h;y;y=ns(y))m++;for(;0<v-m;)x=ns(x),v--;for(;0<m-v;)h=ns(h),m--;for(;v--;){if(x===h||h!==null&&x===h.alternate)break t;x=ns(x),h=ns(h)}x=null}else x=null;p!==null&&Xp(f,d,p,x,!1),_!==null&&g!==null&&Xp(f,g,_,x,!0)}}e:{if(d=c?As(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var M=WM;else if(kp(d))if(Z0)M=qM;else{M=XM;var C=jM}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(M=YM);if(M&&(M=M(t,c))){K0(f,M,n,u);break e}C&&C(t,d,c),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Cf(d,"number",d.value)}switch(C=c?As(c):window,t){case"focusin":(kp(C)||C.contentEditable==="true")&&(Ts=C,Bf=c,Oo=null);break;case"focusout":Oo=Bf=Ts=null;break;case"mousedown":zf=!0;break;case"contextmenu":case"mouseup":case"dragend":zf=!1,Gp(f,n,u);break;case"selectionchange":if(ZM)break;case"keydown":case"keyup":Gp(f,n,u)}var T;if(nh)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Es?q0(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Y0&&n.locale!=="ko"&&(Es||b!=="onCompositionStart"?b==="onCompositionEnd"&&Es&&(T=X0()):(Yi=u,Jd="value"in Yi?Yi.value:Yi.textContent,Es=!0)),C=Gl(c,b),0<C.length&&(b=new Up(b,t,null,n,u),f.push({event:b,listeners:C}),T?b.data=T:(T=$0(n),T!==null&&(b.data=T)))),(T=BM?zM(t,n):VM(t,n))&&(c=Gl(c,"onBeforeInput"),0<c.length&&(u=new Up("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=T))}a_(f,e)})}function na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Gl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=$o(t,n),s!=null&&i.unshift(na(t,s,r)),s=$o(t,e),s!=null&&i.push(na(t,s,r))),t=t.return}return i}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=$o(n,s),l!=null&&o.unshift(na(n,l,a))):r||(l=$o(n,s),l!=null&&o.push(na(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var tE=/\r\n?/g,nE=/\u0000|\uFFFD/g;function Yp(t){return(typeof t=="string"?t:""+t).replace(tE,`
`).replace(nE,"")}function Ba(t,e,n){if(e=Yp(e),Yp(t)!==e&&n)throw Error(re(425))}function Wl(){}var Vf=null,Hf=null;function Gf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wf=typeof setTimeout=="function"?setTimeout:void 0,iE=typeof clearTimeout=="function"?clearTimeout:void 0,qp=typeof Promise=="function"?Promise:void 0,rE=typeof queueMicrotask=="function"?queueMicrotask:typeof qp<"u"?function(t){return qp.resolve(null).then(t).catch(sE)}:Wf;function sE(t){setTimeout(function(){throw t})}function vu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Qo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Qo(e)}function er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $p(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ao=Math.random().toString(36).slice(2),ni="__reactFiber$"+ao,ia="__reactProps$"+ao,Ai="__reactContainer$"+ao,jf="__reactEvents$"+ao,oE="__reactListeners$"+ao,aE="__reactHandles$"+ao;function Nr(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ai]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$p(t);t!==null;){if(n=t[ni])return n;t=$p(t)}return e}t=n,n=t.parentNode}return null}function _a(t){return t=t[ni]||t[Ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function As(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function Cc(t){return t[ia]||null}var Xf=[],Cs=-1;function mr(t){return{current:t}}function st(t){0>Cs||(t.current=Xf[Cs],Xf[Cs]=null,Cs--)}function tt(t,e){Cs++,Xf[Cs]=t.current,t.current=e}var ur={},jt=mr(ur),on=mr(!1),Gr=ur;function Ys(t,e){var n=t.type.contextTypes;if(!n)return ur;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function an(t){return t=t.childContextTypes,t!=null}function jl(){st(on),st(jt)}function Kp(t,e,n){if(jt.current!==ur)throw Error(re(168));tt(jt,e),tt(on,n)}function c_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,jS(t)||"Unknown",r));return ft({},n,i)}function Xl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ur,Gr=jt.current,tt(jt,t),tt(on,on.current),!0}function Zp(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=c_(t,e,Gr),i.__reactInternalMemoizedMergedChildContext=t,st(on),st(jt),tt(jt,t)):st(on),tt(on,n)}var gi=null,Rc=!1,_u=!1;function u_(t){gi===null?gi=[t]:gi.push(t)}function lE(t){Rc=!0,u_(t)}function gr(){if(!_u&&gi!==null){_u=!0;var t=0,e=Ze;try{var n=gi;for(Ze=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gi=null,Rc=!1}catch(r){throw gi!==null&&(gi=gi.slice(t+1)),I0($d,gr),r}finally{Ze=e,_u=!1}}return null}var Rs=[],Ps=0,Yl=null,ql=0,Pn=[],bn=0,Wr=null,_i=1,xi="";function wr(t,e){Rs[Ps++]=ql,Rs[Ps++]=Yl,Yl=t,ql=e}function f_(t,e,n){Pn[bn++]=_i,Pn[bn++]=xi,Pn[bn++]=Wr,Wr=t;var i=_i;t=xi;var r=32-qn(i)-1;i&=~(1<<r),n+=1;var s=32-qn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,_i=1<<32-qn(e)+r|n<<r|i,xi=s+t}else _i=1<<s|n<<r|i,xi=t}function rh(t){t.return!==null&&(wr(t,1),f_(t,1,0))}function sh(t){for(;t===Yl;)Yl=Rs[--Ps],Rs[Ps]=null,ql=Rs[--Ps],Rs[Ps]=null;for(;t===Wr;)Wr=Pn[--bn],Pn[bn]=null,xi=Pn[--bn],Pn[bn]=null,_i=Pn[--bn],Pn[bn]=null}var _n=null,vn=null,at=!1,Wn=null;function d_(t,e){var n=Un(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Qp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_n=t,vn=er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_n=t,vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wr!==null?{id:_i,overflow:xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Un(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_n=t,vn=null,!0):!1;default:return!1}}function Yf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qf(t){if(at){var e=vn;if(e){var n=e;if(!Qp(t,e)){if(Yf(t))throw Error(re(418));e=er(n.nextSibling);var i=_n;e&&Qp(t,e)?d_(i,n):(t.flags=t.flags&-4097|2,at=!1,_n=t)}}else{if(Yf(t))throw Error(re(418));t.flags=t.flags&-4097|2,at=!1,_n=t}}}function Jp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_n=t}function za(t){if(t!==_n)return!1;if(!at)return Jp(t),at=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Gf(t.type,t.memoizedProps)),e&&(e=vn)){if(Yf(t))throw h_(),Error(re(418));for(;e;)d_(t,e),e=er(e.nextSibling)}if(Jp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vn=er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vn=null}}else vn=_n?er(t.stateNode.nextSibling):null;return!0}function h_(){for(var t=vn;t;)t=er(t.nextSibling)}function qs(){vn=_n=null,at=!1}function oh(t){Wn===null?Wn=[t]:Wn.push(t)}var cE=Li.ReactCurrentBatchConfig;function go(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function Va(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function em(t){var e=t._init;return e(t._payload)}function p_(t){function e(h,v){if(t){var m=h.deletions;m===null?(h.deletions=[v],h.flags|=16):m.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=rr(h,v),h.index=0,h.sibling=null,h}function s(h,v,m){return h.index=m,t?(m=h.alternate,m!==null?(m=m.index,m<v?(h.flags|=2,v):m):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,m,y){return v===null||v.tag!==6?(v=wu(m,h.mode,y),v.return=h,v):(v=r(v,m),v.return=h,v)}function l(h,v,m,y){var M=m.type;return M===Ms?u(h,v,m.props.children,y,m.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Vi&&em(M)===v.type)?(y=r(v,m.props),y.ref=go(h,v,m),y.return=h,y):(y=Ll(m.type,m.key,m.props,null,h.mode,y),y.ref=go(h,v,m),y.return=h,y)}function c(h,v,m,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==m.containerInfo||v.stateNode.implementation!==m.implementation?(v=Au(m,h.mode,y),v.return=h,v):(v=r(v,m.children||[]),v.return=h,v)}function u(h,v,m,y,M){return v===null||v.tag!==7?(v=kr(m,h.mode,y,M),v.return=h,v):(v=r(v,m),v.return=h,v)}function f(h,v,m){if(typeof v=="string"&&v!==""||typeof v=="number")return v=wu(""+v,h.mode,m),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ba:return m=Ll(v.type,v.key,v.props,null,h.mode,m),m.ref=go(h,null,v),m.return=h,m;case Ss:return v=Au(v,h.mode,m),v.return=h,v;case Vi:var y=v._init;return f(h,y(v._payload),m)}if(Co(v)||uo(v))return v=kr(v,h.mode,m,null),v.return=h,v;Va(h,v)}return null}function d(h,v,m,y){var M=v!==null?v.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return M!==null?null:a(h,v,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ba:return m.key===M?l(h,v,m,y):null;case Ss:return m.key===M?c(h,v,m,y):null;case Vi:return M=m._init,d(h,v,M(m._payload),y)}if(Co(m)||uo(m))return M!==null?null:u(h,v,m,y,null);Va(h,m)}return null}function p(h,v,m,y,M){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(m)||null,a(v,h,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ba:return h=h.get(y.key===null?m:y.key)||null,l(v,h,y,M);case Ss:return h=h.get(y.key===null?m:y.key)||null,c(v,h,y,M);case Vi:var C=y._init;return p(h,v,m,C(y._payload),M)}if(Co(y)||uo(y))return h=h.get(m)||null,u(v,h,y,M,null);Va(v,y)}return null}function _(h,v,m,y){for(var M=null,C=null,T=v,b=v=0,S=null;T!==null&&b<m.length;b++){T.index>b?(S=T,T=null):S=T.sibling;var A=d(h,T,m[b],y);if(A===null){T===null&&(T=S);break}t&&T&&A.alternate===null&&e(h,T),v=s(A,v,b),C===null?M=A:C.sibling=A,C=A,T=S}if(b===m.length)return n(h,T),at&&wr(h,b),M;if(T===null){for(;b<m.length;b++)T=f(h,m[b],y),T!==null&&(v=s(T,v,b),C===null?M=T:C.sibling=T,C=T);return at&&wr(h,b),M}for(T=i(h,T);b<m.length;b++)S=p(T,h,b,m[b],y),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?b:S.key),v=s(S,v,b),C===null?M=S:C.sibling=S,C=S);return t&&T.forEach(function(V){return e(h,V)}),at&&wr(h,b),M}function x(h,v,m,y){var M=uo(m);if(typeof M!="function")throw Error(re(150));if(m=M.call(m),m==null)throw Error(re(151));for(var C=M=null,T=v,b=v=0,S=null,A=m.next();T!==null&&!A.done;b++,A=m.next()){T.index>b?(S=T,T=null):S=T.sibling;var V=d(h,T,A.value,y);if(V===null){T===null&&(T=S);break}t&&T&&V.alternate===null&&e(h,T),v=s(V,v,b),C===null?M=V:C.sibling=V,C=V,T=S}if(A.done)return n(h,T),at&&wr(h,b),M;if(T===null){for(;!A.done;b++,A=m.next())A=f(h,A.value,y),A!==null&&(v=s(A,v,b),C===null?M=A:C.sibling=A,C=A);return at&&wr(h,b),M}for(T=i(h,T);!A.done;b++,A=m.next())A=p(T,h,b,A.value,y),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?b:A.key),v=s(A,v,b),C===null?M=A:C.sibling=A,C=A);return t&&T.forEach(function(Z){return e(h,Z)}),at&&wr(h,b),M}function g(h,v,m,y){if(typeof m=="object"&&m!==null&&m.type===Ms&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ba:e:{for(var M=m.key,C=v;C!==null;){if(C.key===M){if(M=m.type,M===Ms){if(C.tag===7){n(h,C.sibling),v=r(C,m.props.children),v.return=h,h=v;break e}}else if(C.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Vi&&em(M)===C.type){n(h,C.sibling),v=r(C,m.props),v.ref=go(h,C,m),v.return=h,h=v;break e}n(h,C);break}else e(h,C);C=C.sibling}m.type===Ms?(v=kr(m.props.children,h.mode,y,m.key),v.return=h,h=v):(y=Ll(m.type,m.key,m.props,null,h.mode,y),y.ref=go(h,v,m),y.return=h,h=y)}return o(h);case Ss:e:{for(C=m.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===m.containerInfo&&v.stateNode.implementation===m.implementation){n(h,v.sibling),v=r(v,m.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=Au(m,h.mode,y),v.return=h,h=v}return o(h);case Vi:return C=m._init,g(h,v,C(m._payload),y)}if(Co(m))return _(h,v,m,y);if(uo(m))return x(h,v,m,y);Va(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,m),v.return=h,h=v):(n(h,v),v=wu(m,h.mode,y),v.return=h,h=v),o(h)):n(h,v)}return g}var $s=p_(!0),m_=p_(!1),$l=mr(null),Kl=null,bs=null,ah=null;function lh(){ah=bs=Kl=null}function ch(t){var e=$l.current;st($l),t._currentValue=e}function $f(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Hs(t,e){Kl=t,ah=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(sn=!0),t.firstContext=null)}function Fn(t){var e=t._currentValue;if(ah!==t)if(t={context:t,memoizedValue:e,next:null},bs===null){if(Kl===null)throw Error(re(308));bs=t,Kl.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return e}var Ur=null;function uh(t){Ur===null?Ur=[t]:Ur.push(t)}function g_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,uh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ci(t,i)}function Ci(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hi=!1;function fh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function v_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ci(t,n)}return r=i.interleaved,r===null?(e.next=e,uh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ci(t,n)}function wl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Kd(t,n)}}function tm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Zl(t,e,n,i){var r=t.updateQueue;Hi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,x=a;switch(d=e,p=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){f=_.call(p,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,d=typeof _=="function"?_.call(p,f,d):_,d==null)break e;f=ft({},f,d);break e;case 2:Hi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Xr|=o,t.lanes=o,t.memoizedState=f}}function nm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var xa={},si=mr(xa),ra=mr(xa),sa=mr(xa);function Ir(t){if(t===xa)throw Error(re(174));return t}function dh(t,e){switch(tt(sa,e),tt(ra,t),tt(si,xa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pf(e,t)}st(si),tt(si,e)}function Ks(){st(si),st(ra),st(sa)}function __(t){Ir(sa.current);var e=Ir(si.current),n=Pf(e,t.type);e!==n&&(tt(ra,t),tt(si,n))}function hh(t){ra.current===t&&(st(si),st(ra))}var lt=mr(0);function Ql(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xu=[];function ph(){for(var t=0;t<xu.length;t++)xu[t]._workInProgressVersionPrimary=null;xu.length=0}var Al=Li.ReactCurrentDispatcher,yu=Li.ReactCurrentBatchConfig,jr=0,ut=null,Tt=null,Lt=null,Jl=!1,ko=!1,oa=0,uE=0;function Bt(){throw Error(re(321))}function mh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zn(t[n],e[n]))return!1;return!0}function gh(t,e,n,i,r,s){if(jr=s,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Al.current=t===null||t.memoizedState===null?pE:mE,t=n(i,r),ko){s=0;do{if(ko=!1,oa=0,25<=s)throw Error(re(301));s+=1,Lt=Tt=null,e.updateQueue=null,Al.current=gE,t=n(i,r)}while(ko)}if(Al.current=ec,e=Tt!==null&&Tt.next!==null,jr=0,Lt=Tt=ut=null,Jl=!1,e)throw Error(re(300));return t}function vh(){var t=oa!==0;return oa=0,t}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?ut.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function On(){if(Tt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Lt===null?ut.memoizedState:Lt.next;if(e!==null)Lt=e,Tt=t;else{if(t===null)throw Error(re(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Lt===null?ut.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function aa(t,e){return typeof e=="function"?e(t):e}function Su(t){var e=On(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=Tt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((jr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,ut.lanes|=u,Xr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Zn(i,e.memoizedState)||(sn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ut.lanes|=s,Xr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mu(t){var e=On(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Zn(s,e.memoizedState)||(sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function x_(){}function y_(t,e){var n=ut,i=On(),r=e(),s=!Zn(i.memoizedState,r);if(s&&(i.memoizedState=r,sn=!0),i=i.queue,_h(E_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,la(9,M_.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(re(349));jr&30||S_(n,e,r)}return r}function S_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function M_(t,e,n,i){e.value=n,e.getSnapshot=i,T_(e)&&w_(t)}function E_(t,e,n){return n(function(){T_(e)&&w_(t)})}function T_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zn(t,n)}catch{return!0}}function w_(t){var e=Ci(t,1);e!==null&&$n(e,t,1,-1)}function im(t){var e=ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:t},e.queue=t,t=t.dispatch=hE.bind(null,ut,t),[e.memoizedState,t]}function la(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function A_(){return On().memoizedState}function Cl(t,e,n,i){var r=ei();ut.flags|=t,r.memoizedState=la(1|e,n,void 0,i===void 0?null:i)}function Pc(t,e,n,i){var r=On();i=i===void 0?null:i;var s=void 0;if(Tt!==null){var o=Tt.memoizedState;if(s=o.destroy,i!==null&&mh(i,o.deps)){r.memoizedState=la(e,n,s,i);return}}ut.flags|=t,r.memoizedState=la(1|e,n,s,i)}function rm(t,e){return Cl(8390656,8,t,e)}function _h(t,e){return Pc(2048,8,t,e)}function C_(t,e){return Pc(4,2,t,e)}function R_(t,e){return Pc(4,4,t,e)}function P_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function b_(t,e,n){return n=n!=null?n.concat([t]):null,Pc(4,4,P_.bind(null,e,t),n)}function xh(){}function L_(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&mh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function D_(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&mh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function N_(t,e,n){return jr&21?(Zn(n,e)||(n=k0(),ut.lanes|=n,Xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,sn=!0),t.memoizedState=n)}function fE(t,e){var n=Ze;Ze=n!==0&&4>n?n:4,t(!0);var i=yu.transition;yu.transition={};try{t(!1),e()}finally{Ze=n,yu.transition=i}}function U_(){return On().memoizedState}function dE(t,e,n){var i=ir(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},I_(t))F_(e,n);else if(n=g_(t,e,n,i),n!==null){var r=Jt();$n(n,t,i,r),O_(n,e,i)}}function hE(t,e,n){var i=ir(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(I_(t))F_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Zn(a,o)){var l=e.interleaved;l===null?(r.next=r,uh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=g_(t,e,r,i),n!==null&&(r=Jt(),$n(n,t,i,r),O_(n,e,i))}}function I_(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function F_(t,e){ko=Jl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function O_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Kd(t,n)}}var ec={readContext:Fn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},pE={readContext:Fn,useCallback:function(t,e){return ei().memoizedState=[t,e===void 0?null:e],t},useContext:Fn,useEffect:rm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4194308,4,P_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Cl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Cl(4,2,t,e)},useMemo:function(t,e){var n=ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=dE.bind(null,ut,t),[i.memoizedState,t]},useRef:function(t){var e=ei();return t={current:t},e.memoizedState=t},useState:im,useDebugValue:xh,useDeferredValue:function(t){return ei().memoizedState=t},useTransition:function(){var t=im(!1),e=t[0];return t=fE.bind(null,t[1]),ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ut,r=ei();if(at){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Dt===null)throw Error(re(349));jr&30||S_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,rm(E_.bind(null,i,s,t),[t]),i.flags|=2048,la(9,M_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ei(),e=Dt.identifierPrefix;if(at){var n=xi,i=_i;n=(i&~(1<<32-qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=uE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},mE={readContext:Fn,useCallback:L_,useContext:Fn,useEffect:_h,useImperativeHandle:b_,useInsertionEffect:C_,useLayoutEffect:R_,useMemo:D_,useReducer:Su,useRef:A_,useState:function(){return Su(aa)},useDebugValue:xh,useDeferredValue:function(t){var e=On();return N_(e,Tt.memoizedState,t)},useTransition:function(){var t=Su(aa)[0],e=On().memoizedState;return[t,e]},useMutableSource:x_,useSyncExternalStore:y_,useId:U_,unstable_isNewReconciler:!1},gE={readContext:Fn,useCallback:L_,useContext:Fn,useEffect:_h,useImperativeHandle:b_,useInsertionEffect:C_,useLayoutEffect:R_,useMemo:D_,useReducer:Mu,useRef:A_,useState:function(){return Mu(aa)},useDebugValue:xh,useDeferredValue:function(t){var e=On();return Tt===null?e.memoizedState=t:N_(e,Tt.memoizedState,t)},useTransition:function(){var t=Mu(aa)[0],e=On().memoizedState;return[t,e]},useMutableSource:x_,useSyncExternalStore:y_,useId:U_,unstable_isNewReconciler:!1};function Hn(t,e){if(t&&t.defaultProps){e=ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Kf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bc={isMounted:function(t){return(t=t._reactInternals)?Qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=ir(t),s=Mi(i,r);s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,r),e!==null&&($n(e,t,r,i),wl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=ir(t),s=Mi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,r),e!==null&&($n(e,t,r,i),wl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Jt(),i=ir(t),r=Mi(n,i);r.tag=2,e!=null&&(r.callback=e),e=tr(t,r,i),e!==null&&($n(e,t,i,n),wl(e,t,i))}};function sm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ea(n,i)||!ea(r,s):!0}function k_(t,e,n){var i=!1,r=ur,s=e.contextType;return typeof s=="object"&&s!==null?s=Fn(s):(r=an(e)?Gr:jt.current,i=e.contextTypes,s=(i=i!=null)?Ys(t,r):ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function om(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&bc.enqueueReplaceState(e,e.state,null)}function Zf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},fh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Fn(s):(s=an(e)?Gr:jt.current,r.context=Ys(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Kf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&bc.enqueueReplaceState(r,r.state,null),Zl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Zs(t,e){try{var n="",i=e;do n+=WS(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Eu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var vE=typeof WeakMap=="function"?WeakMap:Map;function B_(t,e,n){n=Mi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){nc||(nc=!0,ld=i),Qf(t,e)},n}function z_(t,e,n){n=Mi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Qf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qf(t,e),typeof i!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function am(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new vE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=LE.bind(null,t,e,n),e.then(t,t))}function lm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function cm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mi(-1,1),e.tag=2,tr(n,e,1))),n.lanes|=1),t)}var _E=Li.ReactCurrentOwner,sn=!1;function Kt(t,e,n,i){e.child=t===null?m_(e,null,n,i):$s(e,t.child,n,i)}function um(t,e,n,i,r){n=n.render;var s=e.ref;return Hs(e,r),i=gh(t,e,n,i,s,r),n=vh(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(at&&n&&rh(e),e.flags|=1,Kt(t,e,i,r),e.child)}function fm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Ch(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,V_(t,e,s,i,r)):(t=Ll(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ea,n(o,i)&&t.ref===e.ref)return Ri(t,e,r)}return e.flags|=1,t=rr(s,i),t.ref=e.ref,t.return=e,e.child=t}function V_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ea(s,i)&&t.ref===e.ref)if(sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(sn=!0);else return e.lanes=t.lanes,Ri(t,e,r)}return Jf(t,e,n,i,r)}function H_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(Ds,mn),mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,tt(Ds,mn),mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,tt(Ds,mn),mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,tt(Ds,mn),mn|=i;return Kt(t,e,r,n),e.child}function G_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Jf(t,e,n,i,r){var s=an(n)?Gr:jt.current;return s=Ys(e,s),Hs(e,r),n=gh(t,e,n,i,s,r),i=vh(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(at&&i&&rh(e),e.flags|=1,Kt(t,e,n,r),e.child)}function dm(t,e,n,i,r){if(an(n)){var s=!0;Xl(e)}else s=!1;if(Hs(e,r),e.stateNode===null)Rl(t,e),k_(e,n,i),Zf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Fn(c):(c=an(n)?Gr:jt.current,c=Ys(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&om(e,o,i,c),Hi=!1;var d=e.memoizedState;o.state=d,Zl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||on.current||Hi?(typeof u=="function"&&(Kf(e,n,u,i),l=e.memoizedState),(a=Hi||sm(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,v_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Hn(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Fn(l):(l=an(n)?Gr:jt.current,l=Ys(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&om(e,o,i,l),Hi=!1,d=e.memoizedState,o.state=d,Zl(e,i,o,r);var _=e.memoizedState;a!==f||d!==_||on.current||Hi?(typeof p=="function"&&(Kf(e,n,p,i),_=e.memoizedState),(c=Hi||sm(e,n,c,i,d,_,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return ed(t,e,n,i,s,r)}function ed(t,e,n,i,r,s){G_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Zp(e,n,!1),Ri(t,e,s);i=e.stateNode,_E.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=$s(e,t.child,null,s),e.child=$s(e,null,a,s)):Kt(t,e,a,s),e.memoizedState=i.state,r&&Zp(e,n,!0),e.child}function W_(t){var e=t.stateNode;e.pendingContext?Kp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Kp(t,e.context,!1),dh(t,e.containerInfo)}function hm(t,e,n,i,r){return qs(),oh(r),e.flags|=256,Kt(t,e,n,i),e.child}var td={dehydrated:null,treeContext:null,retryLane:0};function nd(t){return{baseLanes:t,cachePool:null,transitions:null}}function j_(t,e,n){var i=e.pendingProps,r=lt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),tt(lt,r&1),t===null)return qf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Nc(o,i,0,null),t=kr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=nd(n),e.memoizedState=td,t):yh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return xE(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=rr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=rr(a,s):(s=kr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?nd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=td,i}return s=t.child,t=s.sibling,i=rr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function yh(t,e){return e=Nc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ha(t,e,n,i){return i!==null&&oh(i),$s(e,t.child,null,n),t=yh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function xE(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Eu(Error(re(422))),Ha(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Nc({mode:"visible",children:i.children},r,0,null),s=kr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&$s(e,t.child,null,o),e.child.memoizedState=nd(o),e.memoizedState=td,s);if(!(e.mode&1))return Ha(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=Eu(s,i,void 0),Ha(t,e,o,i)}if(a=(o&t.childLanes)!==0,sn||a){if(i=Dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ci(t,r),$n(i,t,r,-1))}return Ah(),i=Eu(Error(re(421))),Ha(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=DE.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,vn=er(r.nextSibling),_n=e,at=!0,Wn=null,t!==null&&(Pn[bn++]=_i,Pn[bn++]=xi,Pn[bn++]=Wr,_i=t.id,xi=t.overflow,Wr=e),e=yh(e,i.children),e.flags|=4096,e)}function pm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),$f(t.return,e,n)}function Tu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function X_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Kt(t,e,i.children,n),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pm(t,n,e);else if(t.tag===19)pm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(tt(lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ql(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Tu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ql(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Tu(e,!0,n,null,s);break;case"together":Tu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Rl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ri(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function yE(t,e,n){switch(e.tag){case 3:W_(e),qs();break;case 5:__(e);break;case 1:an(e.type)&&Xl(e);break;case 4:dh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;tt($l,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tt(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?j_(t,e,n):(tt(lt,lt.current&1),t=Ri(t,e,n),t!==null?t.sibling:null);tt(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return X_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),tt(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,H_(t,e,n)}return Ri(t,e,n)}var Y_,id,q_,$_;Y_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};id=function(){};q_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ir(si.current);var s=null;switch(n){case"input":r=wf(t,r),i=wf(t,i),s=[];break;case"select":r=ft({},r,{value:void 0}),i=ft({},i,{value:void 0}),s=[];break;case"textarea":r=Rf(t,r),i=Rf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Wl)}bf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Yo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Yo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&it("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};$_=function(t,e,n,i){n!==i&&(e.flags|=4)};function vo(t,e){if(!at)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function SE(t,e,n){var i=e.pendingProps;switch(sh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return an(e.type)&&jl(),zt(e),null;case 3:return i=e.stateNode,Ks(),st(on),st(jt),ph(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wn!==null&&(fd(Wn),Wn=null))),id(t,e),zt(e),null;case 5:hh(e);var r=Ir(sa.current);if(n=e.type,t!==null&&e.stateNode!=null)q_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return zt(e),null}if(t=Ir(si.current),za(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ni]=e,i[ia]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<Po.length;r++)it(Po[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":Ep(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":wp(i,s),it("invalid",i)}bf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ba(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ba(i.textContent,a,t),r=["children",""+a]):Yo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&it("scroll",i)}switch(n){case"input":La(i),Tp(i,s,!0);break;case"textarea":La(i),Ap(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Wl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=E0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ni]=e,t[ia]=i,Y_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Lf(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<Po.length;r++)it(Po[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":Ep(t,i),r=wf(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ft({},i,{value:void 0}),it("invalid",t);break;case"textarea":wp(t,i),r=Rf(t,i),it("invalid",t);break;default:r=i}bf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?A0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&T0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&qo(t,l):typeof l=="number"&&qo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&it("scroll",t):l!=null&&Wd(t,s,l,o))}switch(n){case"input":La(t),Tp(t,i,!1);break;case"textarea":La(t),Ap(t);break;case"option":i.value!=null&&t.setAttribute("value",""+cr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ks(t,!!i.multiple,s,!1):i.defaultValue!=null&&ks(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Wl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)$_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Ir(sa.current),Ir(si.current),za(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(s=i.nodeValue!==n)&&(t=_n,t!==null))switch(t.tag){case 3:Ba(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ba(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return zt(e),null;case 13:if(st(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(at&&vn!==null&&e.mode&1&&!(e.flags&128))h_(),qs(),e.flags|=98560,s=!1;else if(s=za(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[ni]=e}else qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else Wn!==null&&(fd(Wn),Wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?wt===0&&(wt=3):Ah())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return Ks(),id(t,e),t===null&&ta(e.stateNode.containerInfo),zt(e),null;case 10:return ch(e.type._context),zt(e),null;case 17:return an(e.type)&&jl(),zt(e),null;case 19:if(st(lt),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)vo(s,!1);else{if(wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ql(t),o!==null){for(e.flags|=128,vo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return tt(lt,lt.current&1|2),e.child}t=t.sibling}s.tail!==null&&mt()>Qs&&(e.flags|=128,i=!0,vo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ql(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),vo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!at)return zt(e),null}else 2*mt()-s.renderingStartTime>Qs&&n!==1073741824&&(e.flags|=128,i=!0,vo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=mt(),e.sibling=null,n=lt.current,tt(lt,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return wh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function ME(t,e){switch(sh(e),e.tag){case 1:return an(e.type)&&jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ks(),st(on),st(jt),ph(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hh(e),null;case 13:if(st(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(lt),null;case 4:return Ks(),null;case 10:return ch(e.type._context),null;case 22:case 23:return wh(),null;case 24:return null;default:return null}}var Ga=!1,Wt=!1,EE=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ht(t,e,i)}else n.current=null}function rd(t,e,n){try{n()}catch(i){ht(t,e,i)}}var mm=!1;function TE(t,e){if(Vf=Vl,t=e_(),ih(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hf={focusedElem:t,selectionRange:n},Vl=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,g=_.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?x:Hn(e.type,x),g);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(y){ht(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return _=mm,mm=!1,_}function Bo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&rd(e,n,s)}r=r.next}while(r!==i)}}function Lc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function sd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function K_(t){var e=t.alternate;e!==null&&(t.alternate=null,K_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[ia],delete e[jf],delete e[oE],delete e[aE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Z_(t){return t.tag===5||t.tag===3||t.tag===4}function gm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Z_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function od(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wl));else if(i!==4&&(t=t.child,t!==null))for(od(t,e,n),t=t.sibling;t!==null;)od(t,e,n),t=t.sibling}function ad(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}var Nt=null,Gn=!1;function Ui(t,e,n){for(n=n.child;n!==null;)Q_(t,e,n),n=n.sibling}function Q_(t,e,n){if(ri&&typeof ri.onCommitFiberUnmount=="function")try{ri.onCommitFiberUnmount(Ec,n)}catch{}switch(n.tag){case 5:Wt||Ls(n,e);case 6:var i=Nt,r=Gn;Nt=null,Ui(t,e,n),Nt=i,Gn=r,Nt!==null&&(Gn?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(Gn?(t=Nt,n=n.stateNode,t.nodeType===8?vu(t.parentNode,n):t.nodeType===1&&vu(t,n),Qo(t)):vu(Nt,n.stateNode));break;case 4:i=Nt,r=Gn,Nt=n.stateNode.containerInfo,Gn=!0,Ui(t,e,n),Nt=i,Gn=r;break;case 0:case 11:case 14:case 15:if(!Wt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&rd(n,e,o),r=r.next}while(r!==i)}Ui(t,e,n);break;case 1:if(!Wt&&(Ls(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){ht(n,e,a)}Ui(t,e,n);break;case 21:Ui(t,e,n);break;case 22:n.mode&1?(Wt=(i=Wt)||n.memoizedState!==null,Ui(t,e,n),Wt=i):Ui(t,e,n);break;default:Ui(t,e,n)}}function vm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new EE),e.forEach(function(i){var r=NE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Nt=a.stateNode,Gn=!1;break e;case 3:Nt=a.stateNode.containerInfo,Gn=!0;break e;case 4:Nt=a.stateNode.containerInfo,Gn=!0;break e}a=a.return}if(Nt===null)throw Error(re(160));Q_(s,o,r),Nt=null,Gn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){ht(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)J_(e,t),e=e.sibling}function J_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),Jn(t),i&4){try{Bo(3,t,t.return),Lc(3,t)}catch(x){ht(t,t.return,x)}try{Bo(5,t,t.return)}catch(x){ht(t,t.return,x)}}break;case 1:kn(e,t),Jn(t),i&512&&n!==null&&Ls(n,n.return);break;case 5:if(kn(e,t),Jn(t),i&512&&n!==null&&Ls(n,n.return),t.flags&32){var r=t.stateNode;try{qo(r,"")}catch(x){ht(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&S0(r,s),Lf(a,o);var c=Lf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?A0(r,f):u==="dangerouslySetInnerHTML"?T0(r,f):u==="children"?qo(r,f):Wd(r,u,f,c)}switch(a){case"input":Af(r,s);break;case"textarea":M0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ks(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?ks(r,!!s.multiple,s.defaultValue,!0):ks(r,!!s.multiple,s.multiple?[]:"",!1))}r[ia]=s}catch(x){ht(t,t.return,x)}}break;case 6:if(kn(e,t),Jn(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){ht(t,t.return,x)}}break;case 3:if(kn(e,t),Jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Qo(e.containerInfo)}catch(x){ht(t,t.return,x)}break;case 4:kn(e,t),Jn(t);break;case 13:kn(e,t),Jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Eh=mt())),i&4&&vm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Wt=(c=Wt)||u,kn(e,t),Wt=c):kn(e,t),Jn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(xe=t,u=t.child;u!==null;){for(f=xe=u;xe!==null;){switch(d=xe,p=d.child,d.tag){case 0:case 11:case 14:case 15:Bo(4,d,d.return);break;case 1:Ls(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){ht(i,n,x)}}break;case 5:Ls(d,d.return);break;case 22:if(d.memoizedState!==null){xm(f);continue}}p!==null?(p.return=d,xe=p):xm(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=w0("display",o))}catch(x){ht(t,t.return,x)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){ht(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:kn(e,t),Jn(t),i&4&&vm(t);break;case 21:break;default:kn(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Z_(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(qo(r,""),i.flags&=-33);var s=gm(t);ad(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=gm(t);od(t,a,o);break;default:throw Error(re(161))}}catch(l){ht(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wE(t,e,n){xe=t,ex(t)}function ex(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ga;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Wt;a=Ga;var c=Wt;if(Ga=o,(Wt=l)&&!c)for(xe=r;xe!==null;)o=xe,l=o.child,o.tag===22&&o.memoizedState!==null?ym(r):l!==null?(l.return=o,xe=l):ym(r);for(;s!==null;)xe=s,ex(s),s=s.sibling;xe=r,Ga=a,Wt=c}_m(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):_m(t)}}function _m(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||Lc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Wt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&nm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}nm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Qo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Wt||e.flags&512&&sd(e)}catch(d){ht(e,e.return,d)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function xm(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function ym(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Lc(4,e)}catch(l){ht(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ht(e,r,l)}}var s=e.return;try{sd(e)}catch(l){ht(e,s,l)}break;case 5:var o=e.return;try{sd(e)}catch(l){ht(e,o,l)}}}catch(l){ht(e,e.return,l)}if(e===t){xe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,xe=a;break}xe=e.return}}var AE=Math.ceil,tc=Li.ReactCurrentDispatcher,Sh=Li.ReactCurrentOwner,In=Li.ReactCurrentBatchConfig,Ke=0,Dt=null,Mt=null,Ft=0,mn=0,Ds=mr(0),wt=0,ca=null,Xr=0,Dc=0,Mh=0,zo=null,rn=null,Eh=0,Qs=1/0,mi=null,nc=!1,ld=null,nr=null,Wa=!1,qi=null,ic=0,Vo=0,cd=null,Pl=-1,bl=0;function Jt(){return Ke&6?mt():Pl!==-1?Pl:Pl=mt()}function ir(t){return t.mode&1?Ke&2&&Ft!==0?Ft&-Ft:cE.transition!==null?(bl===0&&(bl=k0()),bl):(t=Ze,t!==0||(t=window.event,t=t===void 0?16:j0(t.type)),t):1}function $n(t,e,n,i){if(50<Vo)throw Vo=0,cd=null,Error(re(185));ga(t,n,i),(!(Ke&2)||t!==Dt)&&(t===Dt&&(!(Ke&2)&&(Dc|=n),wt===4&&Xi(t,Ft)),ln(t,i),n===1&&Ke===0&&!(e.mode&1)&&(Qs=mt()+500,Rc&&gr()))}function ln(t,e){var n=t.callbackNode;cM(t,e);var i=zl(t,t===Dt?Ft:0);if(i===0)n!==null&&Pp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Pp(n),e===1)t.tag===0?lE(Sm.bind(null,t)):u_(Sm.bind(null,t)),rE(function(){!(Ke&6)&&gr()}),n=null;else{switch(B0(i)){case 1:n=$d;break;case 4:n=F0;break;case 16:n=Bl;break;case 536870912:n=O0;break;default:n=Bl}n=lx(n,tx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function tx(t,e){if(Pl=-1,bl=0,Ke&6)throw Error(re(327));var n=t.callbackNode;if(Gs()&&t.callbackNode!==n)return null;var i=zl(t,t===Dt?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=rc(t,i);else{e=i;var r=Ke;Ke|=2;var s=ix();(Dt!==t||Ft!==e)&&(mi=null,Qs=mt()+500,Or(t,e));do try{PE();break}catch(a){nx(t,a)}while(!0);lh(),tc.current=s,Ke=r,Mt!==null?e=0:(Dt=null,Ft=0,e=wt)}if(e!==0){if(e===2&&(r=Ff(t),r!==0&&(i=r,e=ud(t,r))),e===1)throw n=ca,Or(t,0),Xi(t,i),ln(t,mt()),n;if(e===6)Xi(t,i);else{if(r=t.current.alternate,!(i&30)&&!CE(r)&&(e=rc(t,i),e===2&&(s=Ff(t),s!==0&&(i=s,e=ud(t,s))),e===1))throw n=ca,Or(t,0),Xi(t,i),ln(t,mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Ar(t,rn,mi);break;case 3:if(Xi(t,i),(i&130023424)===i&&(e=Eh+500-mt(),10<e)){if(zl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Jt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Wf(Ar.bind(null,t,rn,mi),e);break}Ar(t,rn,mi);break;case 4:if(Xi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-qn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*AE(i/1960))-i,10<i){t.timeoutHandle=Wf(Ar.bind(null,t,rn,mi),i);break}Ar(t,rn,mi);break;case 5:Ar(t,rn,mi);break;default:throw Error(re(329))}}}return ln(t,mt()),t.callbackNode===n?tx.bind(null,t):null}function ud(t,e){var n=zo;return t.current.memoizedState.isDehydrated&&(Or(t,e).flags|=256),t=rc(t,e),t!==2&&(e=rn,rn=n,e!==null&&fd(e)),t}function fd(t){rn===null?rn=t:rn.push.apply(rn,t)}function CE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xi(t,e){for(e&=~Mh,e&=~Dc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qn(e),i=1<<n;t[n]=-1,e&=~i}}function Sm(t){if(Ke&6)throw Error(re(327));Gs();var e=zl(t,0);if(!(e&1))return ln(t,mt()),null;var n=rc(t,e);if(t.tag!==0&&n===2){var i=Ff(t);i!==0&&(e=i,n=ud(t,i))}if(n===1)throw n=ca,Or(t,0),Xi(t,e),ln(t,mt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ar(t,rn,mi),ln(t,mt()),null}function Th(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(Qs=mt()+500,Rc&&gr())}}function Yr(t){qi!==null&&qi.tag===0&&!(Ke&6)&&Gs();var e=Ke;Ke|=1;var n=In.transition,i=Ze;try{if(In.transition=null,Ze=1,t)return t()}finally{Ze=i,In.transition=n,Ke=e,!(Ke&6)&&gr()}}function wh(){mn=Ds.current,st(Ds)}function Or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,iE(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(sh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&jl();break;case 3:Ks(),st(on),st(jt),ph();break;case 5:hh(i);break;case 4:Ks();break;case 13:st(lt);break;case 19:st(lt);break;case 10:ch(i.type._context);break;case 22:case 23:wh()}n=n.return}if(Dt=t,Mt=t=rr(t.current,null),Ft=mn=e,wt=0,ca=null,Mh=Dc=Xr=0,rn=zo=null,Ur!==null){for(e=0;e<Ur.length;e++)if(n=Ur[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Ur=null}return t}function nx(t,e){do{var n=Mt;try{if(lh(),Al.current=ec,Jl){for(var i=ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Jl=!1}if(jr=0,Lt=Tt=ut=null,ko=!1,oa=0,Sh.current=null,n===null||n.return===null){wt=1,ca=e,Mt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=lm(o);if(p!==null){p.flags&=-257,cm(p,o,a,s,e),p.mode&1&&am(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){am(s,c,e),Ah();break e}l=Error(re(426))}}else if(at&&a.mode&1){var g=lm(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),cm(g,o,a,s,e),oh(Zs(l,a));break e}}s=l=Zs(l,a),wt!==4&&(wt=2),zo===null?zo=[s]:zo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=B_(s,l,e);tm(s,h);break e;case 1:a=l;var v=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(nr===null||!nr.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=z_(s,a,e);tm(s,y);break e}}s=s.return}while(s!==null)}sx(n)}catch(M){e=M,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(!0)}function ix(){var t=tc.current;return tc.current=ec,t===null?ec:t}function Ah(){(wt===0||wt===3||wt===2)&&(wt=4),Dt===null||!(Xr&268435455)&&!(Dc&268435455)||Xi(Dt,Ft)}function rc(t,e){var n=Ke;Ke|=2;var i=ix();(Dt!==t||Ft!==e)&&(mi=null,Or(t,e));do try{RE();break}catch(r){nx(t,r)}while(!0);if(lh(),Ke=n,tc.current=i,Mt!==null)throw Error(re(261));return Dt=null,Ft=0,wt}function RE(){for(;Mt!==null;)rx(Mt)}function PE(){for(;Mt!==null&&!eM();)rx(Mt)}function rx(t){var e=ax(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?sx(t):Mt=e,Sh.current=null}function sx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ME(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{wt=6,Mt=null;return}}else if(n=SE(n,e,mn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);wt===0&&(wt=5)}function Ar(t,e,n){var i=Ze,r=In.transition;try{In.transition=null,Ze=1,bE(t,e,n,i)}finally{In.transition=r,Ze=i}return null}function bE(t,e,n,i){do Gs();while(qi!==null);if(Ke&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(uM(t,s),t===Dt&&(Mt=Dt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wa||(Wa=!0,lx(Bl,function(){return Gs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=In.transition,In.transition=null;var o=Ze;Ze=1;var a=Ke;Ke|=4,Sh.current=null,TE(t,n),J_(n,t),KM(Hf),Vl=!!Vf,Hf=Vf=null,t.current=n,wE(n),tM(),Ke=a,Ze=o,In.transition=s}else t.current=n;if(Wa&&(Wa=!1,qi=t,ic=r),s=t.pendingLanes,s===0&&(nr=null),rM(n.stateNode),ln(t,mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(nc)throw nc=!1,t=ld,ld=null,t;return ic&1&&t.tag!==0&&Gs(),s=t.pendingLanes,s&1?t===cd?Vo++:(Vo=0,cd=t):Vo=0,gr(),null}function Gs(){if(qi!==null){var t=B0(ic),e=In.transition,n=Ze;try{if(In.transition=null,Ze=16>t?16:t,qi===null)var i=!1;else{if(t=qi,qi=null,ic=0,Ke&6)throw Error(re(331));var r=Ke;for(Ke|=4,xe=t.current;xe!==null;){var s=xe,o=s.child;if(xe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(xe=c;xe!==null;){var u=xe;switch(u.tag){case 0:case 11:case 15:Bo(8,u,s)}var f=u.child;if(f!==null)f.return=u,xe=f;else for(;xe!==null;){u=xe;var d=u.sibling,p=u.return;if(K_(u),u===c){xe=null;break}if(d!==null){d.return=p,xe=d;break}xe=p}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var g=x.sibling;x.sibling=null,x=g}while(x!==null)}}xe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,xe=o;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,xe=h;break e}xe=s.return}}var v=t.current;for(xe=v;xe!==null;){o=xe;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,xe=m;else e:for(o=v;xe!==null;){if(a=xe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Lc(9,a)}}catch(M){ht(a,a.return,M)}if(a===o){xe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,xe=y;break e}xe=a.return}}if(Ke=r,gr(),ri&&typeof ri.onPostCommitFiberRoot=="function")try{ri.onPostCommitFiberRoot(Ec,t)}catch{}i=!0}return i}finally{Ze=n,In.transition=e}}return!1}function Mm(t,e,n){e=Zs(n,e),e=B_(t,e,1),t=tr(t,e,1),e=Jt(),t!==null&&(ga(t,1,e),ln(t,e))}function ht(t,e,n){if(t.tag===3)Mm(t,t,n);else for(;e!==null;){if(e.tag===3){Mm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(nr===null||!nr.has(i))){t=Zs(n,t),t=z_(e,t,1),e=tr(e,t,1),t=Jt(),e!==null&&(ga(e,1,t),ln(e,t));break}}e=e.return}}function LE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Jt(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(Ft&n)===n&&(wt===4||wt===3&&(Ft&130023424)===Ft&&500>mt()-Eh?Or(t,0):Mh|=n),ln(t,e)}function ox(t,e){e===0&&(t.mode&1?(e=Ua,Ua<<=1,!(Ua&130023424)&&(Ua=4194304)):e=1);var n=Jt();t=Ci(t,e),t!==null&&(ga(t,e,n),ln(t,n))}function DE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ox(t,n)}function NE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),ox(t,n)}var ax;ax=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||on.current)sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return sn=!1,yE(t,e,n);sn=!!(t.flags&131072)}else sn=!1,at&&e.flags&1048576&&f_(e,ql,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Rl(t,e),t=e.pendingProps;var r=Ys(e,jt.current);Hs(e,n),r=gh(null,e,i,t,r,n);var s=vh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(s=!0,Xl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,fh(e),r.updater=bc,e.stateNode=r,r._reactInternals=e,Zf(e,i,t,n),e=ed(null,e,i,!0,s,n)):(e.tag=0,at&&s&&rh(e),Kt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Rl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=IE(i),t=Hn(i,t),r){case 0:e=Jf(null,e,i,t,n);break e;case 1:e=dm(null,e,i,t,n);break e;case 11:e=um(null,e,i,t,n);break e;case 14:e=fm(null,e,i,Hn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Jf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),dm(t,e,i,r,n);case 3:e:{if(W_(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,v_(t,e),Zl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Zs(Error(re(423)),e),e=hm(t,e,i,n,r);break e}else if(i!==r){r=Zs(Error(re(424)),e),e=hm(t,e,i,n,r);break e}else for(vn=er(e.stateNode.containerInfo.firstChild),_n=e,at=!0,Wn=null,n=m_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qs(),i===r){e=Ri(t,e,n);break e}Kt(t,e,i,n)}e=e.child}return e;case 5:return __(e),t===null&&qf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Gf(i,r)?o=null:s!==null&&Gf(i,s)&&(e.flags|=32),G_(t,e),Kt(t,e,o,n),e.child;case 6:return t===null&&qf(e),null;case 13:return j_(t,e,n);case 4:return dh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=$s(e,null,i,n):Kt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),um(t,e,i,r,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,tt($l,i._currentValue),i._currentValue=o,s!==null)if(Zn(s.value,o)){if(s.children===r.children&&!on.current){e=Ri(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Mi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),$f(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),$f(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Kt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Hs(e,n),r=Fn(r),i=i(r),e.flags|=1,Kt(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),fm(t,e,i,r,n);case 15:return V_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Rl(t,e),e.tag=1,an(i)?(t=!0,Xl(e)):t=!1,Hs(e,n),k_(e,i,r),Zf(e,i,r,n),ed(null,e,i,!0,t,n);case 19:return X_(t,e,n);case 22:return H_(t,e,n)}throw Error(re(156,e.tag))};function lx(t,e){return I0(t,e)}function UE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(t,e,n,i){return new UE(t,e,n,i)}function Ch(t){return t=t.prototype,!(!t||!t.isReactComponent)}function IE(t){if(typeof t=="function")return Ch(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xd)return 11;if(t===Yd)return 14}return 2}function rr(t,e){var n=t.alternate;return n===null?(n=Un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ll(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Ch(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ms:return kr(n.children,r,s,e);case jd:o=8,r|=8;break;case Sf:return t=Un(12,n,e,r|2),t.elementType=Sf,t.lanes=s,t;case Mf:return t=Un(13,n,e,r),t.elementType=Mf,t.lanes=s,t;case Ef:return t=Un(19,n,e,r),t.elementType=Ef,t.lanes=s,t;case _0:return Nc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case g0:o=10;break e;case v0:o=9;break e;case Xd:o=11;break e;case Yd:o=14;break e;case Vi:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Un(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function kr(t,e,n,i){return t=Un(7,t,i,e),t.lanes=n,t}function Nc(t,e,n,i){return t=Un(22,t,i,e),t.elementType=_0,t.lanes=n,t.stateNode={isHidden:!1},t}function wu(t,e,n){return t=Un(6,t,null,e),t.lanes=n,t}function Au(t,e,n){return e=Un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function FE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ou(0),this.expirationTimes=ou(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ou(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Rh(t,e,n,i,r,s,o,a,l){return t=new FE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Un(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fh(s),t}function OE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ss,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function cx(t){if(!t)return ur;t=t._reactInternals;e:{if(Qr(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(an(n))return c_(t,n,e)}return e}function ux(t,e,n,i,r,s,o,a,l){return t=Rh(n,i,!0,t,r,s,o,a,l),t.context=cx(null),n=t.current,i=Jt(),r=ir(n),s=Mi(i,r),s.callback=e??null,tr(n,s,r),t.current.lanes=r,ga(t,r,i),ln(t,i),t}function Uc(t,e,n,i){var r=e.current,s=Jt(),o=ir(r);return n=cx(n),e.context===null?e.context=n:e.pendingContext=n,e=Mi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=tr(r,e,o),t!==null&&($n(t,r,o,s),wl(t,r,o)),o}function sc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Em(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ph(t,e){Em(t,e),(t=t.alternate)&&Em(t,e)}function kE(){return null}var fx=typeof reportError=="function"?reportError:function(t){console.error(t)};function bh(t){this._internalRoot=t}Ic.prototype.render=bh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Uc(t,e,null,null)};Ic.prototype.unmount=bh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yr(function(){Uc(null,t,null,null)}),e[Ai]=null}};function Ic(t){this._internalRoot=t}Ic.prototype.unstable_scheduleHydration=function(t){if(t){var e=H0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ji.length&&e!==0&&e<ji[n].priority;n++);ji.splice(n,0,t),n===0&&W0(t)}};function Lh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tm(){}function BE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=sc(o);s.call(c)}}var o=ux(e,i,t,0,null,!1,!1,"",Tm);return t._reactRootContainer=o,t[Ai]=o.current,ta(t.nodeType===8?t.parentNode:t),Yr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=sc(l);a.call(c)}}var l=Rh(t,0,!1,null,null,!1,!1,"",Tm);return t._reactRootContainer=l,t[Ai]=l.current,ta(t.nodeType===8?t.parentNode:t),Yr(function(){Uc(e,l,n,i)}),l}function Oc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=sc(o);a.call(l)}}Uc(e,o,t,r)}else o=BE(n,e,t,r,i);return sc(o)}z0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ro(e.pendingLanes);n!==0&&(Kd(e,n|1),ln(e,mt()),!(Ke&6)&&(Qs=mt()+500,gr()))}break;case 13:Yr(function(){var i=Ci(t,1);if(i!==null){var r=Jt();$n(i,t,1,r)}}),Ph(t,1)}};Zd=function(t){if(t.tag===13){var e=Ci(t,134217728);if(e!==null){var n=Jt();$n(e,t,134217728,n)}Ph(t,134217728)}};V0=function(t){if(t.tag===13){var e=ir(t),n=Ci(t,e);if(n!==null){var i=Jt();$n(n,t,e,i)}Ph(t,e)}};H0=function(){return Ze};G0=function(t,e){var n=Ze;try{return Ze=t,e()}finally{Ze=n}};Nf=function(t,e,n){switch(e){case"input":if(Af(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Cc(i);if(!r)throw Error(re(90));y0(i),Af(i,r)}}}break;case"textarea":M0(t,n);break;case"select":e=n.value,e!=null&&ks(t,!!n.multiple,e,!1)}};P0=Th;b0=Yr;var zE={usingClientEntryPoint:!1,Events:[_a,As,Cc,C0,R0,Th]},_o={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},VE={bundleType:_o.bundleType,version:_o.version,rendererPackageName:_o.rendererPackageName,rendererConfig:_o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Li.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=N0(t),t===null?null:t.stateNode},findFiberByHostInstance:_o.findFiberByHostInstance||kE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ja.isDisabled&&ja.supportsFiber)try{Ec=ja.inject(VE),ri=ja}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zE;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lh(e))throw Error(re(200));return OE(t,e,null,n)};En.createRoot=function(t,e){if(!Lh(t))throw Error(re(299));var n=!1,i="",r=fx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Rh(t,1,!1,null,null,n,!1,i,r),t[Ai]=e.current,ta(t.nodeType===8?t.parentNode:t),new bh(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=N0(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Yr(t)};En.hydrate=function(t,e,n){if(!Fc(e))throw Error(re(200));return Oc(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!Lh(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=fx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ux(e,null,t,1,n??null,r,!1,s,o),t[Ai]=e.current,ta(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ic(e)};En.render=function(t,e,n){if(!Fc(e))throw Error(re(200));return Oc(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!Fc(t))throw Error(re(40));return t._reactRootContainer?(Yr(function(){Oc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ai]=null})}),!0):!1};En.unstable_batchedUpdates=Th;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Fc(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Oc(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function dx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dx)}catch(t){console.error(t)}}dx(),d0.exports=En;var HE=d0.exports,wm=HE;xf.createRoot=wm.createRoot,xf.hydrateRoot=wm.hydrateRoot;const GE="modulepreload",WE=function(t){return"/"+t},Am={},jE=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=WE(l),l in Am)return;Am[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":GE,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((d,p)=>{f.addEventListener("load",d),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},hx=Q.createContext(),XE=({children:t})=>{const[e,n]=Q.useState(null),[i,r]=Q.useState(null),[s,o]=Q.useState([]),a=u=>{n(u)},l=u=>{r(u)},c=()=>{r(null)};return I.jsx(hx.Provider,{value:{userProfile:e,updateUserProfile:a,currentChat:i,openChat:l,closeChat:c,matches:s,setMatches:o},children:t})},Dh=()=>{const t=Q.useContext(hx);if(!t)throw new Error("useUser must be used within UserProvider");return t},px=Q.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),kc=Q.createContext({}),Bc=Q.createContext(null),zc=typeof document<"u",Nh=zc?Q.useLayoutEffect:Q.useEffect,mx=Q.createContext({strict:!1}),Uh=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),YE="framerAppearId",gx="data-"+Uh(YE);function qE(t,e,n,i){const{visualElement:r}=Q.useContext(kc),s=Q.useContext(mx),o=Q.useContext(Bc),a=Q.useContext(px).reducedMotion,l=Q.useRef();i=i||s.renderer,!l.current&&i&&(l.current=i(t,{visualState:e,parent:r,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const c=l.current;Q.useInsertionEffect(()=>{c&&c.update(n,o)});const u=Q.useRef(!!(n[gx]&&!window.HandoffComplete));return Nh(()=>{c&&(c.render(),u.current&&c.animationState&&c.animationState.animateChanges())}),Q.useEffect(()=>{c&&(c.updateFeatures(),!u.current&&c.animationState&&c.animationState.animateChanges(),u.current&&(u.current=!1,window.HandoffComplete=!0))}),c}function Ns(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function $E(t,e,n){return Q.useCallback(i=>{i&&t.mount&&t.mount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Ns(n)&&(n.current=i))},[e])}function ua(t){return typeof t=="string"||Array.isArray(t)}function Vc(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Ih=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Fh=["initial",...Ih];function Hc(t){return Vc(t.animate)||Fh.some(e=>ua(t[e]))}function vx(t){return!!(Hc(t)||t.variants)}function KE(t,e){if(Hc(t)){const{initial:n,animate:i}=t;return{initial:n===!1||ua(n)?n:void 0,animate:ua(i)?i:void 0}}return t.inherit!==!1?e:{}}function ZE(t){const{initial:e,animate:n}=KE(t,Q.useContext(kc));return Q.useMemo(()=>({initial:e,animate:n}),[Cm(e),Cm(n)])}function Cm(t){return Array.isArray(t)?t.join(" "):t}const Rm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},fa={};for(const t in Rm)fa[t]={isEnabled:e=>Rm[t].some(n=>!!e[n])};function QE(t){for(const e in t)fa[e]={...fa[e],...t[e]}}const Oh=Q.createContext({}),_x=Q.createContext({}),JE=Symbol.for("motionComponentSymbol");function eT({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){t&&QE(t);function s(a,l){let c;const u={...Q.useContext(px),...a,layoutId:tT(a)},{isStatic:f}=u,d=ZE(a),p=i(a,f);if(!f&&zc){d.visualElement=qE(r,p,u,e);const _=Q.useContext(_x),x=Q.useContext(mx).strict;d.visualElement&&(c=d.visualElement.loadFeatures(u,x,t,_))}return Q.createElement(kc.Provider,{value:d},c&&d.visualElement?Q.createElement(c,{visualElement:d.visualElement,...u}):null,n(r,a,$E(p,d.visualElement,l),p,f,d.visualElement))}const o=Q.forwardRef(s);return o[JE]=r,o}function tT({layoutId:t}){const e=Q.useContext(Oh).id;return e&&t!==void 0?e+"-"+t:t}function nT(t){function e(i,r={}){return eT(t(i,r))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(i,r)=>(n.has(r)||n.set(r,e(r)),n.get(r))})}const iT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function kh(t){return typeof t!="string"||t.includes("-")?!1:!!(iT.indexOf(t)>-1||/[A-Z]/.test(t))}const oc={};function rT(t){Object.assign(oc,t)}const ya=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Jr=new Set(ya);function xx(t,{layout:e,layoutId:n}){return Jr.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!oc[t]||t==="opacity")}const un=t=>!!(t&&t.getVelocity),sT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},oT=ya.length;function aT(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},i,r){let s="";for(let o=0;o<oT;o++){const a=ya[o];if(t[a]!==void 0){const l=sT[a]||a;s+=`${l}(${t[a]}) `}}return e&&!t.z&&(s+="translateZ(0)"),s=s.trim(),r?s=r(t,i?"":s):n&&i&&(s="none"),s}const yx=t=>e=>typeof e=="string"&&e.startsWith(t),Sx=yx("--"),dd=yx("var(--"),lT=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,cT=(t,e)=>e&&typeof t=="number"?e.transform(t):t,fr=(t,e,n)=>Math.min(Math.max(n,t),e),es={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ho={...es,transform:t=>fr(0,1,t)},Xa={...es,default:1},Go=t=>Math.round(t*1e5)/1e5,Gc=/(-)?([\d]*\.?[\d])+/g,Mx=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,uT=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Sa(t){return typeof t=="string"}const Ma=t=>({test:e=>Sa(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),zi=Ma("deg"),oi=Ma("%"),De=Ma("px"),fT=Ma("vh"),dT=Ma("vw"),Pm={...oi,parse:t=>oi.parse(t)/100,transform:t=>oi.transform(t*100)},bm={...es,transform:Math.round},Ex={borderWidth:De,borderTopWidth:De,borderRightWidth:De,borderBottomWidth:De,borderLeftWidth:De,borderRadius:De,radius:De,borderTopLeftRadius:De,borderTopRightRadius:De,borderBottomRightRadius:De,borderBottomLeftRadius:De,width:De,maxWidth:De,height:De,maxHeight:De,size:De,top:De,right:De,bottom:De,left:De,padding:De,paddingTop:De,paddingRight:De,paddingBottom:De,paddingLeft:De,margin:De,marginTop:De,marginRight:De,marginBottom:De,marginLeft:De,rotate:zi,rotateX:zi,rotateY:zi,rotateZ:zi,scale:Xa,scaleX:Xa,scaleY:Xa,scaleZ:Xa,skew:zi,skewX:zi,skewY:zi,distance:De,translateX:De,translateY:De,translateZ:De,x:De,y:De,z:De,perspective:De,transformPerspective:De,opacity:Ho,originX:Pm,originY:Pm,originZ:De,zIndex:bm,fillOpacity:Ho,strokeOpacity:Ho,numOctaves:bm};function Bh(t,e,n,i){const{style:r,vars:s,transform:o,transformOrigin:a}=t;let l=!1,c=!1,u=!0;for(const f in e){const d=e[f];if(Sx(f)){s[f]=d;continue}const p=Ex[f],_=cT(d,p);if(Jr.has(f)){if(l=!0,o[f]=_,!u)continue;d!==(p.default||0)&&(u=!1)}else f.startsWith("origin")?(c=!0,a[f]=_):r[f]=_}if(e.transform||(l||i?r.transform=aT(t.transform,n,u,i):r.transform&&(r.transform="none")),c){const{originX:f="50%",originY:d="50%",originZ:p=0}=a;r.transformOrigin=`${f} ${d} ${p}`}}const zh=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Tx(t,e,n){for(const i in e)!un(e[i])&&!xx(i,n)&&(t[i]=e[i])}function hT({transformTemplate:t},e,n){return Q.useMemo(()=>{const i=zh();return Bh(i,e,{enableHardwareAcceleration:!n},t),Object.assign({},i.vars,i.style)},[e])}function pT(t,e,n){const i=t.style||{},r={};return Tx(r,i,t),Object.assign(r,hT(t,e,n)),t.transformValues?t.transformValues(r):r}function mT(t,e,n){const i={},r=pT(t,e,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=r,i}const gT=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ac(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||gT.has(t)}let wx=t=>!ac(t);function vT(t){t&&(wx=e=>e.startsWith("on")?!ac(e):t(e))}try{vT(require("@emotion/is-prop-valid").default)}catch{}function _T(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(wx(r)||n===!0&&ac(r)||!e&&!ac(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function Lm(t,e,n){return typeof t=="string"?t:De.transform(e+n*t)}function xT(t,e,n){const i=Lm(e,t.x,t.width),r=Lm(n,t.y,t.height);return`${i} ${r}`}const yT={offset:"stroke-dashoffset",array:"stroke-dasharray"},ST={offset:"strokeDashoffset",array:"strokeDasharray"};function MT(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?yT:ST;t[s.offset]=De.transform(-i);const o=De.transform(e),a=De.transform(n);t[s.array]=`${o} ${a}`}function Vh(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,f,d){if(Bh(t,c,u,d),f){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:p,style:_,dimensions:x}=t;p.transform&&(x&&(_.transform=p.transform),delete p.transform),x&&(r!==void 0||s!==void 0||_.transform)&&(_.transformOrigin=xT(x,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(p.x=e),n!==void 0&&(p.y=n),i!==void 0&&(p.scale=i),o!==void 0&&MT(p,o,a,l,!1)}const Ax=()=>({...zh(),attrs:{}}),Hh=t=>typeof t=="string"&&t.toLowerCase()==="svg";function ET(t,e,n,i){const r=Q.useMemo(()=>{const s=Ax();return Vh(s,e,{enableHardwareAcceleration:!1},Hh(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};Tx(s,t.style,t),r.style={...s,...r.style}}return r}function TT(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(kh(n)?ET:mT)(i,s,o,n),u={..._T(i,typeof n=="string",t),...l,ref:r},{children:f}=i,d=Q.useMemo(()=>un(f)?f.get():f,[f]);return Q.createElement(n,{...u,children:d})}}function Cx(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const Rx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Px(t,e,n,i){Cx(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(Rx.has(r)?r:Uh(r),e.attrs[r])}function Gh(t,e){const{style:n}=t,i={};for(const r in n)(un(n[r])||e.style&&un(e.style[r])||xx(r,t))&&(i[r]=n[r]);return i}function bx(t,e){const n=Gh(t,e);for(const i in t)if(un(t[i])||un(e[i])){const r=ya.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;n[r]=t[i]}return n}function Wh(t,e,n,i={},r={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,r)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,r)),e}function Lx(t){const e=Q.useRef(null);return e.current===null&&(e.current=t()),e.current}const lc=t=>Array.isArray(t),wT=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),AT=t=>lc(t)?t[t.length-1]||0:t;function Dl(t){const e=un(t)?t.get():t;return wT(e)?e.toValue():e}function CT({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},i,r,s){const o={latestValues:RT(i,r,s,t),renderState:e()};return n&&(o.mount=a=>n(i,a,o)),o}const Dx=t=>(e,n)=>{const i=Q.useContext(kc),r=Q.useContext(Bc),s=()=>CT(t,e,i,r);return n?s():Lx(s)};function RT(t,e,n,i){const r={},s=i(t,{});for(const d in s)r[d]=Dl(s[d]);let{initial:o,animate:a}=t;const l=Hc(t),c=vx(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const f=u?a:o;return f&&typeof f!="boolean"&&!Vc(f)&&(Array.isArray(f)?f:[f]).forEach(p=>{const _=Wh(t,p);if(!_)return;const{transitionEnd:x,transition:g,...h}=_;for(const v in h){let m=h[v];if(Array.isArray(m)){const y=u?m.length-1:0;m=m[y]}m!==null&&(r[v]=m)}for(const v in x)r[v]=x[v]}),r}const gt=t=>t;class Dm{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function PT(t){let e=new Dm,n=new Dm,i=0,r=!1,s=!1;const o=new WeakSet,a={schedule:(l,c=!1,u=!1)=>{const f=u&&r,d=f?e:n;return c&&o.add(l),d.add(l)&&f&&r&&(i=e.order.length),l},cancel:l=>{n.remove(l),o.delete(l)},process:l=>{if(r){s=!0;return}if(r=!0,[e,n]=[n,e],n.clear(),i=e.order.length,i)for(let c=0;c<i;c++){const u=e.order[c];u(l),o.has(u)&&(a.schedule(u),t())}r=!1,s&&(s=!1,a.process(l))}};return a}const Ya=["prepare","read","update","preRender","render","postRender"],bT=40;function LT(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=Ya.reduce((f,d)=>(f[d]=PT(()=>n=!0),f),{}),o=f=>s[f].process(r),a=()=>{const f=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(f-r.timestamp,bT),1),r.timestamp=f,r.isProcessing=!0,Ya.forEach(o),r.isProcessing=!1,n&&e&&(i=!1,t(a))},l=()=>{n=!0,i=!0,r.isProcessing||t(a)};return{schedule:Ya.reduce((f,d)=>{const p=s[d];return f[d]=(_,x=!1,g=!1)=>(n||l(),p.schedule(_,x,g)),f},{}),cancel:f=>Ya.forEach(d=>s[d].cancel(f)),state:r,steps:s}}const{schedule:nt,cancel:Pi,state:Gt,steps:Cu}=LT(typeof requestAnimationFrame<"u"?requestAnimationFrame:gt,!0),DT={useVisualState:Dx({scrapeMotionValuesFromProps:bx,createRenderState:Ax,onMount:(t,e,{renderState:n,latestValues:i})=>{nt.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),nt.render(()=>{Vh(n,i,{enableHardwareAcceleration:!1},Hh(e.tagName),t.transformTemplate),Px(e,n)})}})},NT={useVisualState:Dx({scrapeMotionValuesFromProps:Gh,createRenderState:zh})};function UT(t,{forwardMotionProps:e=!1},n,i){return{...kh(t)?DT:NT,preloadedFeatures:n,useRender:TT(e),createVisualElement:i,Component:t}}function yi(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const Nx=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function Wc(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const IT=t=>e=>Nx(e)&&t(e,Wc(e));function Ei(t,e,n,i){return yi(t,e,IT(n),i)}const FT=(t,e)=>n=>e(t(n)),sr=(...t)=>t.reduce(FT);function Ux(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const Nm=Ux("dragHorizontal"),Um=Ux("dragVertical");function Ix(t){let e=!1;if(t==="y")e=Um();else if(t==="x")e=Nm();else{const n=Nm(),i=Um();n&&i?e=()=>{n(),i()}:(n&&n(),i&&i())}return e}function Fx(){const t=Ix(!0);return t?(t(),!1):!0}class vr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Im(t,e){const n="pointer"+(e?"enter":"leave"),i="onHover"+(e?"Start":"End"),r=(s,o)=>{if(s.pointerType==="touch"||Fx())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e),a[i]&&nt.update(()=>a[i](s,o))};return Ei(t.current,n,r,{passive:!t.getProps()[i]})}class OT extends vr{mount(){this.unmount=sr(Im(this.node,!0),Im(this.node,!1))}unmount(){}}class kT extends vr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=sr(yi(this.node.current,"focus",()=>this.onFocus()),yi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Ox=(t,e)=>e?t===e?!0:Ox(t,e.parentElement):!1;function Ru(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,Wc(n))}class BT extends vr{constructor(){super(...arguments),this.removeStartListeners=gt,this.removeEndListeners=gt,this.removeAccessibleListeners=gt,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),s=Ei(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:u,globalTapTarget:f}=this.node.getProps();nt.update(()=>{!f&&!Ox(this.node.current,a.target)?u&&u(a,l):c&&c(a,l)})},{passive:!(i.onTap||i.onPointerUp)}),o=Ei(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=sr(s,o),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||Ru("up",(l,c)=>{const{onTap:u}=this.node.getProps();u&&nt.update(()=>u(l,c))})};this.removeEndListeners(),this.removeEndListeners=yi(this.node.current,"keyup",o),Ru("down",(a,l)=>{this.startPress(a,l)})},n=yi(this.node.current,"keydown",e),i=()=>{this.isPressing&&Ru("cancel",(s,o)=>this.cancelPress(s,o))},r=yi(this.node.current,"blur",i);this.removeAccessibleListeners=sr(n,r)}}startPress(e,n){this.isPressing=!0;const{onTapStart:i,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&nt.update(()=>i(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Fx()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&nt.update(()=>i(e,n))}mount(){const e=this.node.getProps(),n=Ei(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),i=yi(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=sr(n,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const hd=new WeakMap,Pu=new WeakMap,zT=t=>{const e=hd.get(t.target);e&&e(t)},VT=t=>{t.forEach(zT)};function HT({root:t,...e}){const n=t||document;Pu.has(n)||Pu.set(n,{});const i=Pu.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(VT,{root:t,...e})),i[r]}function GT(t,e,n){const i=HT(e);return hd.set(t,n),i.observe(t),()=>{hd.delete(t),i.unobserve(t)}}const WT={some:0,all:1};class jT extends vr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:WT[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:f}=this.node.getProps(),d=c?u:f;d&&d(l)};return GT(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(XT(e,n))&&this.startObserver()}unmount(){}}function XT({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const YT={inView:{Feature:jT},tap:{Feature:BT},focus:{Feature:kT},hover:{Feature:OT}};function kx(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function qT(t){const e={};return t.values.forEach((n,i)=>e[i]=n.get()),e}function $T(t){const e={};return t.values.forEach((n,i)=>e[i]=n.getVelocity()),e}function jc(t,e,n){const i=t.getProps();return Wh(i,e,n!==void 0?n:i.custom,qT(t),$T(t))}let jh=gt;const Br=t=>t*1e3,Ti=t=>t/1e3,KT={current:!1},Bx=t=>Array.isArray(t)&&typeof t[0]=="number";function zx(t){return!!(!t||typeof t=="string"&&Vx[t]||Bx(t)||Array.isArray(t)&&t.every(zx))}const bo=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Vx={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:bo([0,.65,.55,1]),circOut:bo([.55,0,1,.45]),backIn:bo([.31,.01,.66,-.59]),backOut:bo([.33,1.53,.69,.99])};function Hx(t){if(t)return Bx(t)?bo(t):Array.isArray(t)?t.map(Hx):Vx[t]}function ZT(t,e,n,{delay:i=0,duration:r,repeat:s=0,repeatType:o="loop",ease:a,times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=Hx(a);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:i,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}function QT(t,{repeat:e,repeatType:n="loop"}){const i=e&&n!=="loop"&&e%2===1?0:t.length-1;return t[i]}const Gx=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,JT=1e-7,ew=12;function tw(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=Gx(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>JT&&++a<ew);return o}function Ea(t,e,n,i){if(t===e&&n===i)return gt;const r=s=>tw(s,0,1,t,n);return s=>s===0||s===1?s:Gx(r(s),e,i)}const nw=Ea(.42,0,1,1),iw=Ea(0,0,.58,1),Wx=Ea(.42,0,.58,1),rw=t=>Array.isArray(t)&&typeof t[0]!="number",jx=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Xx=t=>e=>1-t(1-e),Xh=t=>1-Math.sin(Math.acos(t)),Yx=Xx(Xh),sw=jx(Xh),qx=Ea(.33,1.53,.69,.99),Yh=Xx(qx),ow=jx(Yh),aw=t=>(t*=2)<1?.5*Yh(t):.5*(2-Math.pow(2,-10*(t-1))),lw={linear:gt,easeIn:nw,easeInOut:Wx,easeOut:iw,circIn:Xh,circInOut:sw,circOut:Yx,backIn:Yh,backInOut:ow,backOut:qx,anticipate:aw},Fm=t=>{if(Array.isArray(t)){jh(t.length===4);const[e,n,i,r]=t;return Ea(e,n,i,r)}else if(typeof t=="string")return lw[t];return t},qh=(t,e)=>n=>!!(Sa(n)&&uT.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),$x=(t,e,n)=>i=>{if(!Sa(i))return i;const[r,s,o,a]=i.match(Gc);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},cw=t=>fr(0,255,t),bu={...es,transform:t=>Math.round(cw(t))},Fr={test:qh("rgb","red"),parse:$x("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+bu.transform(t)+", "+bu.transform(e)+", "+bu.transform(n)+", "+Go(Ho.transform(i))+")"};function uw(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const pd={test:qh("#"),parse:uw,transform:Fr.transform},Us={test:qh("hsl","hue"),parse:$x("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+oi.transform(Go(e))+", "+oi.transform(Go(n))+", "+Go(Ho.transform(i))+")"},$t={test:t=>Fr.test(t)||pd.test(t)||Us.test(t),parse:t=>Fr.test(t)?Fr.parse(t):Us.test(t)?Us.parse(t):pd.parse(t),transform:t=>Sa(t)?t:t.hasOwnProperty("red")?Fr.transform(t):Us.transform(t)},ct=(t,e,n)=>-n*t+n*e+t;function Lu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function fw({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Lu(l,a,t+1/3),s=Lu(l,a,t),o=Lu(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}const Du=(t,e,n)=>{const i=t*t;return Math.sqrt(Math.max(0,n*(e*e-i)+i))},dw=[pd,Fr,Us],hw=t=>dw.find(e=>e.test(t));function Om(t){const e=hw(t);let n=e.parse(t);return e===Us&&(n=fw(n)),n}const Kx=(t,e)=>{const n=Om(t),i=Om(e),r={...n};return s=>(r.red=Du(n.red,i.red,s),r.green=Du(n.green,i.green,s),r.blue=Du(n.blue,i.blue,s),r.alpha=ct(n.alpha,i.alpha,s),Fr.transform(r))};function pw(t){var e,n;return isNaN(t)&&Sa(t)&&(((e=t.match(Gc))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(Mx))===null||n===void 0?void 0:n.length)||0)>0}const Zx={regex:lT,countKey:"Vars",token:"${v}",parse:gt},Qx={regex:Mx,countKey:"Colors",token:"${c}",parse:$t.parse},Jx={regex:Gc,countKey:"Numbers",token:"${n}",parse:es.parse};function Nu(t,{regex:e,countKey:n,token:i,parse:r}){const s=t.tokenised.match(e);s&&(t["num"+n]=s.length,t.tokenised=t.tokenised.replace(e,i),t.values.push(...s.map(r)))}function cc(t){const e=t.toString(),n={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Nu(n,Zx),Nu(n,Qx),Nu(n,Jx),n}function ey(t){return cc(t).values}function ty(t){const{values:e,numColors:n,numVars:i,tokenised:r}=cc(t),s=e.length;return o=>{let a=r;for(let l=0;l<s;l++)l<i?a=a.replace(Zx.token,o[l]):l<i+n?a=a.replace(Qx.token,$t.transform(o[l])):a=a.replace(Jx.token,Go(o[l]));return a}}const mw=t=>typeof t=="number"?0:t;function gw(t){const e=ey(t);return ty(t)(e.map(mw))}const dr={test:pw,parse:ey,createTransformer:ty,getAnimatableNone:gw},ny=(t,e)=>n=>`${n>0?e:t}`;function iy(t,e){return typeof t=="number"?n=>ct(t,e,n):$t.test(t)?Kx(t,e):t.startsWith("var(")?ny(t,e):sy(t,e)}const ry=(t,e)=>{const n=[...t],i=n.length,r=t.map((s,o)=>iy(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}},vw=(t,e)=>{const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=iy(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}},sy=(t,e)=>{const n=dr.createTransformer(e),i=cc(t),r=cc(e);return i.numVars===r.numVars&&i.numColors===r.numColors&&i.numNumbers>=r.numNumbers?sr(ry(i.values,r.values),n):ny(t,e)},da=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},km=(t,e)=>n=>ct(t,e,n);function _w(t){return typeof t=="number"?km:typeof t=="string"?$t.test(t)?Kx:sy:Array.isArray(t)?ry:typeof t=="object"?vw:km}function xw(t,e,n){const i=[],r=n||_w(t[0]),s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||gt:e;a=sr(l,a)}i.push(a)}return i}function oy(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(jh(s===e.length),s===1)return()=>e[0];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=xw(e,i,r),a=o.length,l=c=>{let u=0;if(a>1)for(;u<t.length-2&&!(c<t[u+1]);u++);const f=da(t[u],t[u+1],c);return o[u](f)};return n?c=>l(fr(t[0],t[s-1],c)):l}function yw(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=da(0,e,i);t.push(ct(n,1,r))}}function Sw(t){const e=[0];return yw(e,t.length-1),e}function Mw(t,e){return t.map(n=>n*e)}function Ew(t,e){return t.map(()=>e||Wx).splice(0,t.length-1)}function uc({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=rw(i)?i.map(Fm):Fm(i),s={done:!1,value:e[0]},o=Mw(n&&n.length===e.length?n:Sw(e),t),a=oy(o,e,{ease:Array.isArray(r)?r:Ew(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}function ay(t,e){return e?t*(1e3/e):0}const Tw=5;function ly(t,e,n){const i=Math.max(e-Tw,0);return ay(n-t(i),e-i)}const Uu=.001,ww=.01,Aw=10,Cw=.05,Rw=1;function Pw({duration:t=800,bounce:e=.25,velocity:n=0,mass:i=1}){let r,s,o=1-e;o=fr(Cw,Rw,o),t=fr(ww,Aw,Ti(t)),o<1?(r=c=>{const u=c*o,f=u*t,d=u-n,p=md(c,o),_=Math.exp(-f);return Uu-d/p*_},s=c=>{const f=c*o*t,d=f*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,_=Math.exp(-f),x=md(Math.pow(c,2),o);return(-r(c)+Uu>0?-1:1)*((d-p)*_)/x}):(r=c=>{const u=Math.exp(-c*t),f=(c-n)*t+1;return-Uu+u*f},s=c=>{const u=Math.exp(-c*t),f=(n-c)*(t*t);return u*f});const a=5/t,l=Lw(r,s,a);if(t=Br(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const bw=12;function Lw(t,e,n){let i=n;for(let r=1;r<bw;r++)i=i-t(i)/e(i);return i}function md(t,e){return t*Math.sqrt(1-e*e)}const Dw=["duration","bounce"],Nw=["stiffness","damping","mass"];function Bm(t,e){return e.some(n=>t[n]!==void 0)}function Uw(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!Bm(t,Nw)&&Bm(t,Dw)){const n=Pw(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function cy({keyframes:t,restDelta:e,restSpeed:n,...i}){const r=t[0],s=t[t.length-1],o={done:!1,value:r},{stiffness:a,damping:l,mass:c,duration:u,velocity:f,isResolvedFromDuration:d}=Uw({...i,velocity:-Ti(i.velocity||0)}),p=f||0,_=l/(2*Math.sqrt(a*c)),x=s-r,g=Ti(Math.sqrt(a/c)),h=Math.abs(x)<5;n||(n=h?.01:2),e||(e=h?.005:.5);let v;if(_<1){const m=md(g,_);v=y=>{const M=Math.exp(-_*g*y);return s-M*((p+_*g*x)/m*Math.sin(m*y)+x*Math.cos(m*y))}}else if(_===1)v=m=>s-Math.exp(-g*m)*(x+(p+g*x)*m);else{const m=g*Math.sqrt(_*_-1);v=y=>{const M=Math.exp(-_*g*y),C=Math.min(m*y,300);return s-M*((p+_*g*x)*Math.sinh(C)+m*x*Math.cosh(C))/m}}return{calculatedDuration:d&&u||null,next:m=>{const y=v(m);if(d)o.done=m>=u;else{let M=p;m!==0&&(_<1?M=ly(v,m,y):M=0);const C=Math.abs(M)<=n,T=Math.abs(s-y)<=e;o.done=C&&T}return o.value=o.done?s:y,o}}}function zm({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const f=t[0],d={done:!1,value:f},p=b=>a!==void 0&&b<a||l!==void 0&&b>l,_=b=>a===void 0?l:l===void 0||Math.abs(a-b)<Math.abs(l-b)?a:l;let x=n*e;const g=f+x,h=o===void 0?g:o(g);h!==g&&(x=h-f);const v=b=>-x*Math.exp(-b/i),m=b=>h+v(b),y=b=>{const S=v(b),A=m(b);d.done=Math.abs(S)<=c,d.value=d.done?h:A};let M,C;const T=b=>{p(d.value)&&(M=b,C=cy({keyframes:[d.value,_(d.value)],velocity:ly(m,b,d.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return T(0),{calculatedDuration:null,next:b=>{let S=!1;return!C&&M===void 0&&(S=!0,y(b),T(b)),M!==void 0&&b>M?C.next(b-M):(!S&&y(b),d)}}}const Iw=t=>{const e=({timestamp:n})=>t(n);return{start:()=>nt.update(e,!0),stop:()=>Pi(e),now:()=>Gt.isProcessing?Gt.timestamp:performance.now()}},Vm=2e4;function Hm(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Vm;)e+=n,i=t.next(e);return e>=Vm?1/0:e}const Fw={decay:zm,inertia:zm,tween:uc,keyframes:uc,spring:cy};function fc({autoplay:t=!0,delay:e=0,driver:n=Iw,keyframes:i,type:r="keyframes",repeat:s=0,repeatDelay:o=0,repeatType:a="loop",onPlay:l,onStop:c,onComplete:u,onUpdate:f,...d}){let p=1,_=!1,x,g;const h=()=>{g=new Promise(P=>{x=P})};h();let v;const m=Fw[r]||uc;let y;m!==uc&&typeof i[0]!="number"&&(y=oy([0,100],i,{clamp:!1}),i=[0,100]);const M=m({...d,keyframes:i});let C;a==="mirror"&&(C=m({...d,keyframes:[...i].reverse(),velocity:-(d.velocity||0)}));let T="idle",b=null,S=null,A=null;M.calculatedDuration===null&&s&&(M.calculatedDuration=Hm(M));const{calculatedDuration:V}=M;let Z=1/0,J=1/0;V!==null&&(Z=V+o,J=Z*(s+1)-o);let D=0;const W=P=>{if(S===null)return;p>0&&(S=Math.min(S,P)),p<0&&(S=Math.min(P-J/p,S)),b!==null?D=b:D=Math.round(P-S)*p;const U=D-e*(p>=0?1:-1),se=p>=0?U<0:U>J;D=Math.max(U,0),T==="finished"&&b===null&&(D=J);let oe=D,te=M;if(s){const Se=Math.min(D,J)/Z;let We=Math.floor(Se),Pe=Se%1;!Pe&&Se>=1&&(Pe=1),Pe===1&&We--,We=Math.min(We,s+1),!!(We%2)&&(a==="reverse"?(Pe=1-Pe,o&&(Pe-=o/Z)):a==="mirror"&&(te=C)),oe=fr(0,1,Pe)*Z}const fe=se?{done:!1,value:i[0]}:te.next(oe);y&&(fe.value=y(fe.value));let{done:ve}=fe;!se&&V!==null&&(ve=p>=0?D>=J:D<=0);const ye=b===null&&(T==="finished"||T==="running"&&ve);return f&&f(fe.value),ye&&F(),fe},$=()=>{v&&v.stop(),v=void 0},q=()=>{T="idle",$(),x(),h(),S=A=null},F=()=>{T="finished",u&&u(),$(),x()},k=()=>{if(_)return;v||(v=n(W));const P=v.now();l&&l(),b!==null?S=P-b:(!S||T==="finished")&&(S=P),T==="finished"&&h(),A=S,b=null,T="running",v.start()};t&&k();const H={then(P,U){return g.then(P,U)},get time(){return Ti(D)},set time(P){P=Br(P),D=P,b!==null||!v||p===0?b=P:S=v.now()-P/p},get duration(){const P=M.calculatedDuration===null?Hm(M):M.calculatedDuration;return Ti(P)},get speed(){return p},set speed(P){P===p||!v||(p=P,H.time=Ti(D))},get state(){return T},play:k,pause:()=>{T="paused",b=D},stop:()=>{_=!0,T!=="idle"&&(T="idle",c&&c(),q())},cancel:()=>{A!==null&&W(A),q()},complete:()=>{T="finished"},sample:P=>(S=0,W(P))};return H}function Ow(t){let e;return()=>(e===void 0&&(e=t()),e)}const kw=Ow(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Bw=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),qa=10,zw=2e4,Vw=(t,e)=>e.type==="spring"||t==="backgroundColor"||!zx(e.ease);function Hw(t,e,{onUpdate:n,onComplete:i,...r}){if(!(kw()&&Bw.has(e)&&!r.repeatDelay&&r.repeatType!=="mirror"&&r.damping!==0&&r.type!=="inertia"))return!1;let o=!1,a,l,c=!1;const u=()=>{l=new Promise(m=>{a=m})};u();let{keyframes:f,duration:d=300,ease:p,times:_}=r;if(Vw(e,r)){const m=fc({...r,repeat:0,delay:0});let y={done:!1,value:f[0]};const M=[];let C=0;for(;!y.done&&C<zw;)y=m.sample(C),M.push(y.value),C+=qa;_=void 0,f=M,d=C-qa,p="linear"}const x=ZT(t.owner.current,e,f,{...r,duration:d,ease:p,times:_}),g=()=>{c=!1,x.cancel()},h=()=>{c=!0,nt.update(g),a(),u()};return x.onfinish=()=>{c||(t.set(QT(f,r)),i&&i(),h())},{then(m,y){return l.then(m,y)},attachTimeline(m){return x.timeline=m,x.onfinish=null,gt},get time(){return Ti(x.currentTime||0)},set time(m){x.currentTime=Br(m)},get speed(){return x.playbackRate},set speed(m){x.playbackRate=m},get duration(){return Ti(d)},play:()=>{o||(x.play(),Pi(g))},pause:()=>x.pause(),stop:()=>{if(o=!0,x.playState==="idle")return;const{currentTime:m}=x;if(m){const y=fc({...r,autoplay:!1});t.setWithVelocity(y.sample(m-qa).value,y.sample(m).value,qa)}h()},complete:()=>{c||x.finish()},cancel:h}}function Gw({keyframes:t,delay:e,onUpdate:n,onComplete:i}){const r=()=>(n&&n(t[t.length-1]),i&&i(),{time:0,speed:1,duration:0,play:gt,pause:gt,stop:gt,then:s=>(s(),Promise.resolve()),cancel:gt,complete:gt});return e?fc({keyframes:[0,1],duration:0,delay:e,onComplete:r}):r()}const Ww={type:"spring",stiffness:500,damping:25,restSpeed:10},jw=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),Xw={type:"keyframes",duration:.8},Yw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},qw=(t,{keyframes:e})=>e.length>2?Xw:Jr.has(t)?t.startsWith("scale")?jw(e[1]):Ww:Yw,gd=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(dr.test(e)||e==="0")&&!e.startsWith("url(")),$w=new Set(["brightness","contrast","saturate","opacity"]);function Kw(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Gc)||[];if(!i)return t;const r=n.replace(i,"");let s=$w.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const Zw=/([a-z-]*)\(.*?\)/g,vd={...dr,getAnimatableNone:t=>{const e=t.match(Zw);return e?e.map(Kw).join(" "):t}},Qw={...Ex,color:$t,backgroundColor:$t,outlineColor:$t,fill:$t,stroke:$t,borderColor:$t,borderTopColor:$t,borderRightColor:$t,borderBottomColor:$t,borderLeftColor:$t,filter:vd,WebkitFilter:vd},$h=t=>Qw[t];function uy(t,e){let n=$h(t);return n!==vd&&(n=dr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const fy=t=>/^0[^.\s]+$/.test(t);function Jw(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||fy(t)}function e1(t,e,n,i){const r=gd(e,n);let s;Array.isArray(n)?s=[...n]:s=[null,n];const o=i.from!==void 0?i.from:t.get();let a;const l=[];for(let c=0;c<s.length;c++)s[c]===null&&(s[c]=c===0?o:s[c-1]),Jw(s[c])&&l.push(c),typeof s[c]=="string"&&s[c]!=="none"&&s[c]!=="0"&&(a=s[c]);if(r&&l.length&&a)for(let c=0;c<l.length;c++){const u=l[c];s[u]=uy(e,a)}return s}function t1({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}function Kh(t,e){return t[e]||t.default||t}const n1={skipAnimations:!1},Zh=(t,e,n,i={})=>r=>{const s=Kh(i,t)||{},o=s.delay||i.delay||0;let{elapsed:a=0}=i;a=a-Br(o);const l=e1(e,t,n,s),c=l[0],u=l[l.length-1],f=gd(t,c),d=gd(t,u);let p={keyframes:l,velocity:e.getVelocity(),ease:"easeOut",...s,delay:-a,onUpdate:_=>{e.set(_),s.onUpdate&&s.onUpdate(_)},onComplete:()=>{r(),s.onComplete&&s.onComplete()}};if(t1(s)||(p={...p,...qw(t,p)}),p.duration&&(p.duration=Br(p.duration)),p.repeatDelay&&(p.repeatDelay=Br(p.repeatDelay)),!f||!d||KT.current||s.type===!1||n1.skipAnimations)return Gw(p);if(!i.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const _=Hw(e,t,p);if(_)return _}return fc(p)};function dc(t){return!!(un(t)&&t.add)}const dy=t=>/^\-?\d*\.?\d+$/.test(t);function Qh(t,e){t.indexOf(e)===-1&&t.push(e)}function Jh(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class ep{constructor(){this.subscriptions=[]}add(e){return Qh(this.subscriptions,e),()=>Jh(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const i1=t=>!isNaN(parseFloat(t));class r1{constructor(e,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(i,r=!0)=>{this.prev=this.current,this.current=i;const{delta:s,timestamp:o}=Gt;this.lastUpdated!==o&&(this.timeDelta=s,this.lastUpdated=o,nt.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>nt.postRender(this.velocityCheck),this.velocityCheck=({timestamp:i})=>{i!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=i1(this.current),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new ep);const i=this.events[e].add(n);return e==="change"?()=>{i(),nt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=e,this.timeDelta=i}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?ay(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Js(t,e){return new r1(t,e)}const hy=t=>e=>e.test(t),s1={test:t=>t==="auto",parse:t=>t},py=[es,De,oi,zi,dT,fT,s1],xo=t=>py.find(hy(t)),o1=[...py,$t,dr],a1=t=>o1.find(hy(t));function l1(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Js(n))}function c1(t,e){const n=jc(t,e);let{transitionEnd:i={},transition:r={},...s}=n?t.makeTargetAnimatable(n,!1):{};s={...s,...i};for(const o in s){const a=AT(s[o]);l1(t,o,a)}}function u1(t,e,n){var i,r;const s=Object.keys(e).filter(a=>!t.hasValue(a)),o=s.length;if(o)for(let a=0;a<o;a++){const l=s[a],c=e[l];let u=null;Array.isArray(c)&&(u=c[0]),u===null&&(u=(r=(i=n[l])!==null&&i!==void 0?i:t.readValue(l))!==null&&r!==void 0?r:e[l]),u!=null&&(typeof u=="string"&&(dy(u)||fy(u))?u=parseFloat(u):!a1(u)&&dr.test(c)&&(u=uy(l,c)),t.addValue(l,Js(u,{owner:t})),n[l]===void 0&&(n[l]=u),u!==null&&t.setBaseTarget(l,u))}}function f1(t,e){return e?(e[t]||e.default||e).from:void 0}function d1(t,e,n){const i={};for(const r in t){const s=f1(r,e);if(s!==void 0)i[r]=s;else{const o=n.getValue(r);o&&(i[r]=o.get())}}return i}function h1({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function p1(t,e){const n=t.get();if(Array.isArray(e)){for(let i=0;i<e.length;i++)if(e[i]!==n)return!0}else return n!==e}function my(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s=t.getDefaultTransition(),transitionEnd:o,...a}=t.makeTargetAnimatable(e);const l=t.getValue("willChange");i&&(s=i);const c=[],u=r&&t.animationState&&t.animationState.getState()[r];for(const f in a){const d=t.getValue(f),p=a[f];if(!d||p===void 0||u&&h1(u,f))continue;const _={delay:n,elapsed:0,...Kh(s||{},f)};if(window.HandoffAppearAnimations){const h=t.getProps()[gx];if(h){const v=window.HandoffAppearAnimations(h,f,d,nt);v!==null&&(_.elapsed=v,_.isHandoff=!0)}}let x=!_.isHandoff&&!p1(d,p);if(_.type==="spring"&&(d.getVelocity()||_.velocity)&&(x=!1),d.animation&&(x=!1),x)continue;d.start(Zh(f,d,p,t.shouldReduceMotion&&Jr.has(f)?{type:!1}:_));const g=d.animation;dc(l)&&(l.add(f),g.then(()=>l.remove(f))),c.push(g)}return o&&Promise.all(c).then(()=>{o&&c1(t,o)}),c}function _d(t,e,n={}){const i=jc(t,e,n.custom);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(my(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(l=0)=>{const{delayChildren:c=0,staggerChildren:u,staggerDirection:f}=r;return m1(t,e,c+l,u,f,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[l,c]=a==="beforeChildren"?[s,o]:[o,s];return l().then(()=>c())}else return Promise.all([s(),o(n.delay)])}function m1(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(g1).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(_d(c,e,{...s,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function g1(t,e){return t.sortNodePosition(e)}function v1(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>_d(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=_d(t,e,n);else{const r=typeof e=="function"?jc(t,e,n.custom):e;i=Promise.all(my(t,r,n))}return i.then(()=>t.notify("AnimationComplete",e))}const _1=[...Ih].reverse(),x1=Ih.length;function y1(t){return e=>Promise.all(e.map(({animation:n,options:i})=>v1(t,n,i)))}function S1(t){let e=y1(t);const n=E1();let i=!0;const r=(l,c)=>{const u=jc(t,c);if(u){const{transition:f,transitionEnd:d,...p}=u;l={...l,...p,...d}}return l};function s(l){e=l(t)}function o(l,c){const u=t.getProps(),f=t.getVariantContext(!0)||{},d=[],p=new Set;let _={},x=1/0;for(let h=0;h<x1;h++){const v=_1[h],m=n[v],y=u[v]!==void 0?u[v]:f[v],M=ua(y),C=v===c?m.isActive:null;C===!1&&(x=h);let T=y===f[v]&&y!==u[v]&&M;if(T&&i&&t.manuallyAnimateOnMount&&(T=!1),m.protectedKeys={..._},!m.isActive&&C===null||!y&&!m.prevProp||Vc(y)||typeof y=="boolean")continue;let S=M1(m.prevProp,y)||v===c&&m.isActive&&!T&&M||h>x&&M,A=!1;const V=Array.isArray(y)?y:[y];let Z=V.reduce(r,{});C===!1&&(Z={});const{prevResolvedValues:J={}}=m,D={...J,...Z},W=$=>{S=!0,p.has($)&&(A=!0,p.delete($)),m.needsAnimating[$]=!0};for(const $ in D){const q=Z[$],F=J[$];if(_.hasOwnProperty($))continue;let k=!1;lc(q)&&lc(F)?k=!kx(q,F):k=q!==F,k?q!==void 0?W($):p.add($):q!==void 0&&p.has($)?W($):m.protectedKeys[$]=!0}m.prevProp=y,m.prevResolvedValues=Z,m.isActive&&(_={..._,...Z}),i&&t.blockInitialAnimation&&(S=!1),S&&(!T||A)&&d.push(...V.map($=>({animation:$,options:{type:v,...l}})))}if(p.size){const h={};p.forEach(v=>{const m=t.getBaseTarget(v);m!==void 0&&(h[v]=m)}),d.push({animation:h})}let g=!!d.length;return i&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(g=!1),i=!1,g?e(d):Promise.resolve()}function a(l,c,u){var f;if(n[l].isActive===c)return Promise.resolve();(f=t.variantChildren)===null||f===void 0||f.forEach(p=>{var _;return(_=p.animationState)===null||_===void 0?void 0:_.setActive(l,c)}),n[l].isActive=c;const d=o(u,l);for(const p in n)n[p].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n}}function M1(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!kx(e,t):!1}function yr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function E1(){return{animate:yr(!0),whileInView:yr(),whileHover:yr(),whileTap:yr(),whileDrag:yr(),whileFocus:yr(),exit:yr()}}class T1 extends vr{constructor(e){super(e),e.animationState||(e.animationState=S1(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),Vc(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let w1=0;class A1 extends vr{constructor(){super(...arguments),this.id=w1++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n,custom:i}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const s=this.node.animationState.setActive("exit",!e,{custom:i??this.node.getProps().custom});n&&!e&&s.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const C1={animation:{Feature:T1},exit:{Feature:A1}},Gm=(t,e)=>Math.abs(t-e);function R1(t,e){const n=Gm(t.x,e.x),i=Gm(t.y,e.y);return Math.sqrt(n**2+i**2)}class gy{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Fu(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,p=R1(f.offset,{x:0,y:0})>=3;if(!d&&!p)return;const{point:_}=f,{timestamp:x}=Gt;this.history.push({..._,timestamp:x});const{onStart:g,onMove:h}=this.handlers;d||(g&&g(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,f)},this.handlePointerMove=(f,d)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Iu(d,this.transformPagePoint),nt.update(this.updatePoint,!0)},this.handlePointerUp=(f,d)=>{this.end();const{onEnd:p,onSessionEnd:_,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=Fu(f.type==="pointercancel"?this.lastMoveEventInfo:Iu(d,this.transformPagePoint),this.history);this.startEvent&&p&&p(f,g),_&&_(f,g)},!Nx(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Wc(e),a=Iu(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=Gt;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,Fu(a,this.history)),this.removeListeners=sr(Ei(this.contextWindow,"pointermove",this.handlePointerMove),Ei(this.contextWindow,"pointerup",this.handlePointerUp),Ei(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Pi(this.updatePoint)}}function Iu(t,e){return e?{point:e(t.point)}:t}function Wm(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Fu({point:t},e){return{point:t,delta:Wm(t,vy(e)),offset:Wm(t,P1(e)),velocity:b1(e,.1)}}function P1(t){return t[0]}function vy(t){return t[t.length-1]}function b1(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=vy(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Br(e)));)n--;if(!i)return{x:0,y:0};const s=Ti(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Mn(t){return t.max-t.min}function xd(t,e=0,n=.01){return Math.abs(t-e)<=n}function jm(t,e,n,i=.5){t.origin=i,t.originPoint=ct(e.min,e.max,t.origin),t.scale=Mn(n)/Mn(e),(xd(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=ct(n.min,n.max,t.origin)-t.originPoint,(xd(t.translate)||isNaN(t.translate))&&(t.translate=0)}function Wo(t,e,n,i){jm(t.x,e.x,n.x,i?i.originX:void 0),jm(t.y,e.y,n.y,i?i.originY:void 0)}function Xm(t,e,n){t.min=n.min+e.min,t.max=t.min+Mn(e)}function L1(t,e,n){Xm(t.x,e.x,n.x),Xm(t.y,e.y,n.y)}function Ym(t,e,n){t.min=e.min-n.min,t.max=t.min+Mn(e)}function jo(t,e,n){Ym(t.x,e.x,n.x),Ym(t.y,e.y,n.y)}function D1(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?ct(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?ct(n,t,i.max):Math.min(t,n)),t}function qm(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function N1(t,{top:e,left:n,bottom:i,right:r}){return{x:qm(t.x,n,r),y:qm(t.y,e,i)}}function $m(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function U1(t,e){return{x:$m(t.x,e.x),y:$m(t.y,e.y)}}function I1(t,e){let n=.5;const i=Mn(t),r=Mn(e);return r>i?n=da(e.min,e.max-i,t.min):i>r&&(n=da(t.min,t.max-r,e.min)),fr(0,1,n)}function F1(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const yd=.35;function O1(t=yd){return t===!1?t=0:t===!0&&(t=yd),{x:Km(t,"left","right"),y:Km(t,"top","bottom")}}function Km(t,e,n){return{min:Zm(t,e),max:Zm(t,n)}}function Zm(t,e){return typeof t=="number"?t:t[e]||0}const Qm=()=>({translate:0,scale:1,origin:0,originPoint:0}),Is=()=>({x:Qm(),y:Qm()}),Jm=()=>({min:0,max:0}),St=()=>({x:Jm(),y:Jm()});function Rn(t){return[t("x"),t("y")]}function _y({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function k1({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function B1(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Ou(t){return t===void 0||t===1}function Sd({scale:t,scaleX:e,scaleY:n}){return!Ou(t)||!Ou(e)||!Ou(n)}function Cr(t){return Sd(t)||xy(t)||t.z||t.rotate||t.rotateX||t.rotateY}function xy(t){return eg(t.x)||eg(t.y)}function eg(t){return t&&t!=="0%"}function hc(t,e,n){const i=t-n,r=e*i;return n+r}function tg(t,e,n,i,r){return r!==void 0&&(t=hc(t,r,i)),hc(t,n,i)+e}function Md(t,e=0,n=1,i,r){t.min=tg(t.min,e,n,i,r),t.max=tg(t.max,e,n,i,r)}function yy(t,{x:e,y:n}){Md(t.x,e.translate,e.scale,e.originPoint),Md(t.y,n.translate,n.scale,n.originPoint)}function z1(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const l=s.instance;l&&l.style&&l.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Fs(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,yy(t,o)),i&&Cr(s.latestValues)&&Fs(t,s.latestValues))}e.x=ng(e.x),e.y=ng(e.y)}function ng(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function Gi(t,e){t.min=t.min+e,t.max=t.max+e}function ig(t,e,[n,i,r]){const s=e[r]!==void 0?e[r]:.5,o=ct(t.min,t.max,s);Md(t,e[n],e[i],o,e.scale)}const V1=["x","scaleX","originX"],H1=["y","scaleY","originY"];function Fs(t,e){ig(t.x,e,V1),ig(t.y,e,H1)}function Sy(t,e){return _y(B1(t.getBoundingClientRect(),e))}function G1(t,e,n){const i=Sy(t,n),{scroll:r}=e;return r&&(Gi(i.x,r.offset.x),Gi(i.y,r.offset.y)),i}const My=({current:t})=>t?t.ownerDocument.defaultView:null,W1=new WeakMap;class j1{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=St(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Wc(u,"page").point)},s=(u,f)=>{const{drag:d,dragPropagation:p,onDragStart:_}=this.getProps();if(d&&!p&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Ix(d),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Rn(g=>{let h=this.getAxisMotionValue(g).get()||0;if(oi.test(h)){const{projection:v}=this.visualElement;if(v&&v.layout){const m=v.layout.layoutBox[g];m&&(h=Mn(m)*(parseFloat(h)/100))}}this.originPoint[g]=h}),_&&nt.update(()=>_(u,f),!1,!0);const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},o=(u,f)=>{const{dragPropagation:d,dragDirectionLock:p,onDirectionLock:_,onDrag:x}=this.getProps();if(!d&&!this.openGlobalLock)return;const{offset:g}=f;if(p&&this.currentDirection===null){this.currentDirection=X1(g),this.currentDirection!==null&&_&&_(this.currentDirection);return}this.updateAxis("x",f.point,g),this.updateAxis("y",f.point,g),this.visualElement.render(),x&&x(u,f)},a=(u,f)=>this.stop(u,f),l=()=>Rn(u=>{var f;return this.getAnimationState(u)==="paused"&&((f=this.getAxisMotionValue(u).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new gy(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:My(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&nt.update(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!$a(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=D1(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Ns(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=N1(r.layoutBox,n):this.constraints=!1,this.elastic=O1(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Rn(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=F1(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Ns(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=G1(i,r.root,this.visualElement.getTransformPagePoint());let o=U1(r.layout.layoutBox,s);if(n){const a=n(k1(o));this.hasMutatedConstraints=!!a,a&&(o=_y(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Rn(u=>{if(!$a(u,n,this.currentDirection))return;let f=l&&l[u]||{};o&&(f={min:0,max:0});const d=r?200:1e6,p=r?40:1e7,_={type:"inertia",velocity:i?e[u]:0,bounceStiffness:d,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(u,_)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return i.start(Zh(e,i,0,n))}stopAnimation(){Rn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Rn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n="_drag"+e.toUpperCase(),i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Rn(n=>{const{drag:i}=this.getProps();if(!$a(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-ct(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Ns(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Rn(o=>{const a=this.getAxisMotionValue(o);if(a){const l=a.get();r[o]=I1({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Rn(o=>{if(!$a(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(ct(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;W1.set(this.visualElement,this);const e=this.visualElement.current,n=Ei(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Ns(l)&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),i();const o=yi(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Rn(u=>{const f=this.getAxisMotionValue(u);f&&(this.originPoint[u]+=l[u].translate,f.set(f.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=yd,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function $a(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function X1(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class Y1 extends vr{constructor(e){super(e),this.removeGroupControls=gt,this.removeListeners=gt,this.controls=new j1(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||gt}unmount(){this.removeGroupControls(),this.removeListeners()}}const rg=t=>(e,n)=>{t&&nt.update(()=>t(e,n))};class q1 extends vr{constructor(){super(...arguments),this.removePointerDownListener=gt}onPointerDown(e){this.session=new gy(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:My(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:rg(e),onStart:rg(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&nt.update(()=>r(s,o))}}}mount(){this.removePointerDownListener=Ei(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function $1(){const t=Q.useContext(Bc);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:i}=t,r=Q.useId();return Q.useEffect(()=>i(r),[]),!e&&n?[!1,()=>n&&n(r)]:[!0]}const Nl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function sg(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const yo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(De.test(t))t=parseFloat(t);else return t;const n=sg(t,e.target.x),i=sg(t,e.target.y);return`${n}% ${i}%`}},K1={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=dr.parse(t);if(r.length>5)return i;const s=dr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=ct(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};class Z1 extends Vd.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;rT(Q1),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Nl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||nt.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Ey(t){const[e,n]=$1(),i=Q.useContext(Oh);return Vd.createElement(Z1,{...t,layoutGroup:i,switchLayoutGroup:Q.useContext(_x),isPresent:e,safeToRemove:n})}const Q1={borderRadius:{...yo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:yo,borderTopRightRadius:yo,borderBottomLeftRadius:yo,borderBottomRightRadius:yo,boxShadow:K1},Ty=["TopLeft","TopRight","BottomLeft","BottomRight"],J1=Ty.length,og=t=>typeof t=="string"?parseFloat(t):t,ag=t=>typeof t=="number"||De.test(t);function eA(t,e,n,i,r,s){r?(t.opacity=ct(0,n.opacity!==void 0?n.opacity:1,tA(i)),t.opacityExit=ct(e.opacity!==void 0?e.opacity:1,0,nA(i))):s&&(t.opacity=ct(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<J1;o++){const a=`border${Ty[o]}Radius`;let l=lg(e,a),c=lg(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||ag(l)===ag(c)?(t[a]=Math.max(ct(og(l),og(c),i),0),(oi.test(c)||oi.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=ct(e.rotate||0,n.rotate||0,i))}function lg(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const tA=wy(0,.5,Yx),nA=wy(.5,.95,gt);function wy(t,e,n){return i=>i<t?0:i>e?1:n(da(t,e,i))}function cg(t,e){t.min=e.min,t.max=e.max}function An(t,e){cg(t.x,e.x),cg(t.y,e.y)}function ug(t,e,n,i,r){return t-=e,t=hc(t,1/n,i),r!==void 0&&(t=hc(t,1/r,i)),t}function iA(t,e=0,n=1,i=.5,r,s=t,o=t){if(oi.test(e)&&(e=parseFloat(e),e=ct(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=ct(s.min,s.max,i);t===s&&(a-=e),t.min=ug(t.min,e,n,a,r),t.max=ug(t.max,e,n,a,r)}function fg(t,e,[n,i,r],s,o){iA(t,e[n],e[i],e[r],e.scale,s,o)}const rA=["x","scaleX","originX"],sA=["y","scaleY","originY"];function dg(t,e,n,i){fg(t.x,e,rA,n?n.x:void 0,i?i.x:void 0),fg(t.y,e,sA,n?n.y:void 0,i?i.y:void 0)}function hg(t){return t.translate===0&&t.scale===1}function Ay(t){return hg(t.x)&&hg(t.y)}function oA(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function Cy(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function pg(t){return Mn(t.x)/Mn(t.y)}class aA{constructor(){this.members=[]}add(e){Qh(this.members,e),e.scheduleRender()}remove(e){if(Jh(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function mg(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y;if((r||s)&&(i=`translate3d(${r}px, ${s}px, 0) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:l,rotateX:c,rotateY:u}=n;l&&(i+=`rotate(${l}deg) `),c&&(i+=`rotateX(${c}deg) `),u&&(i+=`rotateY(${u}deg) `)}const o=t.x.scale*e.x,a=t.y.scale*e.y;return(o!==1||a!==1)&&(i+=`scale(${o}, ${a})`),i||"none"}const lA=(t,e)=>t.depth-e.depth;class cA{constructor(){this.children=[],this.isDirty=!1}add(e){Qh(this.children,e),this.isDirty=!0}remove(e){Jh(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(lA),this.isDirty=!1,this.children.forEach(e)}}function uA(t,e){const n=performance.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Pi(i),t(s-e))};return nt.read(i,!0),()=>Pi(i)}function fA(t){window.MotionDebug&&window.MotionDebug.record(t)}function dA(t){return t instanceof SVGElement&&t.tagName!=="svg"}function hA(t,e,n){const i=un(t)?t:Js(t);return i.start(Zh("",i,e,n)),i.animation}const gg=["","X","Y","Z"],pA={visibility:"hidden"},vg=1e3;let mA=0;const Rr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Ry({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=mA++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Rr.totalNodes=Rr.resolvedTargetDeltas=Rr.recalculatedProjection=0,this.nodes.forEach(_A),this.nodes.forEach(EA),this.nodes.forEach(TA),this.nodes.forEach(xA),fA(Rr)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new cA)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new ep),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=dA(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let f;const d=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=uA(d,250),Nl.hasAnimatedSinceResize&&(Nl.hasAnimatedSinceResize=!1,this.nodes.forEach(xg))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:d,hasRelativeTargetChanged:p,layout:_})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||u.getDefaultTransition()||PA,{onLayoutAnimationStart:g,onLayoutAnimationComplete:h}=u.getProps(),v=!this.targetLayout||!Cy(this.targetLayout,_)||p,m=!d&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||m||d&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,m);const y={...Kh(x,"layout"),onPlay:g,onComplete:h};(u.shouldReduceMotion||this.options.layoutRoot)&&(y.delay=0,y.type=!1),this.startAnimation(y)}else d||xg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=_})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Pi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(wA),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const f=this.path[u];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(_g);return}this.isUpdating||this.nodes.forEach(SA),this.isUpdating=!1,this.nodes.forEach(MA),this.nodes.forEach(gA),this.nodes.forEach(vA),this.clearAllSnapshots();const a=performance.now();Gt.delta=fr(0,1e3/60,a-Gt.timestamp),Gt.timestamp=a,Gt.isProcessing=!0,Cu.update.process(Gt),Cu.preRender.process(Gt),Cu.render.process(Gt),Gt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(yA),this.sharedNodes.forEach(AA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,nt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){nt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=St(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:i(this.instance),offset:n(this.instance)})}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!Ay(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||Cr(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),bA(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return St();const a=o.measureViewportBox(),{scroll:l}=this.root;return l&&(Gi(a.x,l.offset.x),Gi(a.y,l.offset.y)),a}removeElementScroll(o){const a=St();An(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:u,options:f}=c;if(c!==this.root&&u&&f.layoutScroll){if(u.isRoot){An(a,o);const{scroll:d}=this.root;d&&(Gi(a.x,-d.offset.x),Gi(a.y,-d.offset.y))}Gi(a.x,u.offset.x),Gi(a.y,u.offset.y)}}return a}applyTransform(o,a=!1){const l=St();An(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Fs(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Cr(u.latestValues)&&Fs(l,u.latestValues)}return Cr(this.latestValues)&&Fs(l,this.latestValues),l}removeTransform(o){const a=St();An(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Cr(c.latestValues))continue;Sd(c.latestValues)&&c.updateSnapshot();const u=St(),f=c.measurePageBox();An(u,f),dg(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Cr(this.latestValues)&&dg(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Gt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:d}=this.options;if(!(!this.layout||!(f||d))){if(this.resolvedRelativeTargetAt=Gt.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=St(),this.relativeTargetOrigin=St(),jo(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),An(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=St(),this.targetWithTransforms=St()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),L1(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):An(this.target,this.layout.layoutBox),yy(this.target,this.targetDelta)):An(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=St(),this.relativeTargetOrigin=St(),jo(this.relativeTargetOrigin,this.target,p.target),An(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Rr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Sd(this.parent.latestValues)||xy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Gt.timestamp&&(c=!1),c)return;const{layout:u,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||f))return;An(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,p=this.treeScale.y;z1(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:_}=a;if(!_){this.projectionTransform&&(this.projectionDelta=Is(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Is(),this.projectionDeltaWithTransform=Is());const x=this.projectionTransform;Wo(this.projectionDelta,this.layoutCorrected,_,this.latestValues),this.projectionTransform=mg(this.projectionDelta,this.treeScale),(this.projectionTransform!==x||this.treeScale.x!==d||this.treeScale.y!==p)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",_)),Rr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},f=Is();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=St(),p=l?l.source:void 0,_=this.layout?this.layout.source:void 0,x=p!==_,g=this.getStack(),h=!g||g.members.length<=1,v=!!(x&&!h&&this.options.crossfade===!0&&!this.path.some(RA));this.animationProgress=0;let m;this.mixTargetDelta=y=>{const M=y/1e3;yg(f.x,o.x,M),yg(f.y,o.y,M),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(jo(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),CA(this.relativeTarget,this.relativeTargetOrigin,d,M),m&&oA(this.relativeTarget,m)&&(this.isProjectionDirty=!1),m||(m=St()),An(m,this.relativeTarget)),x&&(this.animationValues=u,eA(u,c,this.latestValues,M,v,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=M},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Pi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=nt.update(()=>{Nl.hasAnimatedSinceResize=!0,this.currentAnimation=hA(0,vg,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(vg),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&Py(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||St();const f=Mn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const d=Mn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}An(a,l),Fs(a,u),Wo(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new aA),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const c={};for(let u=0;u<gg.length;u++){const f="rotate"+gg[u];l[f]&&(c[f]=l[f],o.setStaticValue(f,0))}o.render();for(const u in c)o.setStaticValue(u,c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return pA;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Dl(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=Dl(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Cr(this.latestValues)&&(x.transform=u?u({},""):"none",this.hasProjected=!1),x}const d=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=mg(this.projectionDeltaWithTransform,this.treeScale,d),u&&(c.transform=u(d,c.transform));const{x:p,y:_}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${_.origin*100}% 0`,f.animationValues?c.opacity=f===this?(l=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:c.opacity=f===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const x in oc){if(d[x]===void 0)continue;const{correct:g,applyTo:h}=oc[x],v=c.transform==="none"?d[x]:g(d[x],f);if(h){const m=h.length;for(let y=0;y<m;y++)c[h[y]]=v}else c[x]=v}return this.options.layoutId&&(c.pointerEvents=f===this?Dl(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(_g),this.root.sharedNodes.clear()}}}function gA(t){t.updateLayout()}function vA(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?Rn(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],p=Mn(d);d.min=i[f].min,d.max=d.min+p}):Py(s,n.layoutBox,i)&&Rn(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],p=Mn(i[f]);d.max=d.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+p)});const a=Is();Wo(a,i,n.layoutBox);const l=Is();o?Wo(l,t.applyTransform(r,!0),n.measuredBox):Wo(l,i,n.layoutBox);const c=!Ay(a);let u=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:d,layout:p}=f;if(d&&p){const _=St();jo(_,n.layoutBox,d.layoutBox);const x=St();jo(x,i,p.layoutBox),Cy(_,x)||(u=!0),f.options.layoutRoot&&(t.relativeTarget=x,t.relativeTargetOrigin=_,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function _A(t){Rr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function xA(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function yA(t){t.clearSnapshot()}function _g(t){t.clearMeasurements()}function SA(t){t.isLayoutDirty=!1}function MA(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function xg(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function EA(t){t.resolveTargetDelta()}function TA(t){t.calcProjection()}function wA(t){t.resetRotation()}function AA(t){t.removeLeadSnapshot()}function yg(t,e,n){t.translate=ct(e.translate,0,n),t.scale=ct(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Sg(t,e,n,i){t.min=ct(e.min,n.min,i),t.max=ct(e.max,n.max,i)}function CA(t,e,n,i){Sg(t.x,e.x,n.x,i),Sg(t.y,e.y,n.y,i)}function RA(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const PA={duration:.45,ease:[.4,0,.1,1]},Mg=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),Eg=Mg("applewebkit/")&&!Mg("chrome/")?Math.round:gt;function Tg(t){t.min=Eg(t.min),t.max=Eg(t.max)}function bA(t){Tg(t.x),Tg(t.y)}function Py(t,e,n){return t==="position"||t==="preserve-aspect"&&!xd(pg(e),pg(n),.2)}const LA=Ry({attachResizeListener:(t,e)=>yi(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ku={current:void 0},by=Ry({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!ku.current){const t=new LA({});t.mount(window),t.setOptions({layoutScroll:!0}),ku.current=t}return ku.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),DA={pan:{Feature:q1},drag:{Feature:Y1,ProjectionNode:by,MeasureLayout:Ey}},NA=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function UA(t){const e=NA.exec(t);if(!e)return[,];const[,n,i]=e;return[n,i]}function Ed(t,e,n=1){const[i,r]=UA(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return dy(o)?parseFloat(o):o}else return dd(r)?Ed(r,e,n+1):r}function IA(t,{...e},n){const i=t.current;if(!(i instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach(r=>{const s=r.get();if(!dd(s))return;const o=Ed(s,i);o&&r.set(o)});for(const r in e){const s=e[r];if(!dd(s))continue;const o=Ed(s,i);o&&(e[r]=o,n||(n={}),n[r]===void 0&&(n[r]=s))}return{target:e,transitionEnd:n}}const FA=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Ly=t=>FA.has(t),OA=t=>Object.keys(t).some(Ly),wg=t=>t===es||t===De,Ag=(t,e)=>parseFloat(t.split(", ")[e]),Cg=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/);if(r)return Ag(r[1],e);{const s=i.match(/^matrix\((.+)\)$/);return s?Ag(s[1],t):0}},kA=new Set(["x","y","z"]),BA=ya.filter(t=>!kA.has(t));function zA(t){const e=[];return BA.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e.length&&t.render(),e}const eo={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:Cg(4,13),y:Cg(5,14)};eo.translateX=eo.x;eo.translateY=eo.y;const VA=(t,e,n)=>{const i=e.measureViewportBox(),r=e.current,s=getComputedStyle(r),{display:o}=s,a={};o==="none"&&e.setStaticValue("display",t.display||"block"),n.forEach(c=>{a[c]=eo[c](i,s)}),e.render();const l=e.measureViewportBox();return n.forEach(c=>{const u=e.getValue(c);u&&u.jump(a[c]),t[c]=eo[c](l,s)}),t},HA=(t,e,n={},i={})=>{e={...e},i={...i};const r=Object.keys(e).filter(Ly);let s=[],o=!1;const a=[];if(r.forEach(l=>{const c=t.getValue(l);if(!t.hasValue(l))return;let u=n[l],f=xo(u);const d=e[l];let p;if(lc(d)){const _=d.length,x=d[0]===null?1:0;u=d[x],f=xo(u);for(let g=x;g<_&&d[g]!==null;g++)p?jh(xo(d[g])===p):p=xo(d[g])}else p=xo(d);if(f!==p)if(wg(f)&&wg(p)){const _=c.get();typeof _=="string"&&c.set(parseFloat(_)),typeof d=="string"?e[l]=parseFloat(d):Array.isArray(d)&&p===De&&(e[l]=d.map(parseFloat))}else f!=null&&f.transform&&(p!=null&&p.transform)&&(u===0||d===0)?u===0?c.set(p.transform(u)):e[l]=f.transform(d):(o||(s=zA(t),o=!0),a.push(l),i[l]=i[l]!==void 0?i[l]:e[l],c.jump(d))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,c=VA(e,t,a);return s.length&&s.forEach(([u,f])=>{t.getValue(u).set(f)}),t.render(),zc&&l!==null&&window.scrollTo({top:l}),{target:c,transitionEnd:i}}else return{target:e,transitionEnd:i}};function GA(t,e,n,i){return OA(e)?HA(t,e,n,i):{target:e,transitionEnd:i}}const WA=(t,e,n,i)=>{const r=IA(t,e,i);return e=r.target,i=r.transitionEnd,GA(t,e,n,i)},Td={current:null},Dy={current:!1};function jA(){if(Dy.current=!0,!!zc)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Td.current=t.matches;t.addListener(e),e()}else Td.current=!1}function XA(t,e,n){const{willChange:i}=e;for(const r in e){const s=e[r],o=n[r];if(un(s))t.addValue(r,s),dc(i)&&i.add(r);else if(un(o))t.addValue(r,Js(s,{owner:t})),dc(i)&&i.remove(r);else if(o!==s)if(t.hasValue(r)){const a=t.getValue(r);!a.hasAnimated&&a.set(s)}else{const a=t.getStaticValue(r);t.addValue(r,Js(a!==void 0?a:s,{owner:t}))}}for(const r in n)e[r]===void 0&&t.removeValue(r);return e}const Rg=new WeakMap,Ny=Object.keys(fa),YA=Ny.length,Pg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],qA=Fh.length;class $A{constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,visualState:s},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>nt.render(this.render,!1,!0);const{latestValues:a,renderState:l}=s;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.isControllingVariants=Hc(n),this.isVariantNode=vx(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:c,...u}=this.scrapeMotionValuesFromProps(n,{});for(const f in u){const d=u[f];a[f]!==void 0&&un(d)&&(d.set(a[f],!1),dc(c)&&c.add(f))}}scrapeMotionValuesFromProps(e,n){return{}}mount(e){this.current=e,Rg.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),Dy.current||jA(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Td.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Rg.delete(this.current),this.projection&&this.projection.unmount(),Pi(this.notifyUpdate),Pi(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const i=Jr.has(e),r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&nt.update(this.notifyUpdate,!1,!0),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{r(),s()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},i,r,s){let o,a;for(let l=0;l<YA;l++){const c=Ny[l],{isEnabled:u,Feature:f,ProjectionNode:d,MeasureLayout:p}=fa[c];d&&(o=d),u(n)&&(!this.features[c]&&f&&(this.features[c]=new f(this)),p&&(a=p))}if((this.type==="html"||this.type==="svg")&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:c,drag:u,dragConstraints:f,layoutScroll:d,layoutRoot:p}=n;this.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!u||f&&Ns(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:s,layoutScroll:d,layoutRoot:p})}return a}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):St()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}makeTargetAnimatable(e,n=!0){return this.makeTargetAnimatableFromInstance(e,this.props,n)}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<Pg.length;i++){const r=Pg[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s=e["on"+r];s&&(this.propEventSubscriptions[r]=this.on(r,s))}this.prevMotionValues=XA(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const i=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(i.initial=this.props.initial),i}const n={};for(let i=0;i<qA;i++){const r=Fh[i],s=this.props[r];(ua(s)||s===!1)&&(n[r]=s)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Js(n,{owner:this}),this.addValue(e,i)),i}readValue(e){var n;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props,r=typeof i=="string"||typeof i=="object"?(n=Wh(this.props,i))===null||n===void 0?void 0:n[e]:void 0;if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!un(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new ep),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class Uy extends $A{sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:n,...i},{transformValues:r},s){let o=d1(i,e||{},this);if(r&&(n&&(n=r(n)),i&&(i=r(i)),o&&(o=r(o))),s){u1(this,i,o);const a=WA(this,i,o,n);n=a.transitionEnd,i=a.target}return{transition:e,transitionEnd:n,...i}}}function KA(t){return window.getComputedStyle(t)}class ZA extends Uy{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,n){if(Jr.has(n)){const i=$h(n);return i&&i.default||0}else{const i=KA(e),r=(Sx(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return Sy(e,n)}build(e,n,i,r){Bh(e,n,i,r.transformTemplate)}scrapeMotionValuesFromProps(e,n){return Gh(e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;un(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,i,r){Cx(e,n,i,r)}}class QA extends Uy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Jr.has(n)){const i=$h(n);return i&&i.default||0}return n=Rx.has(n)?n:Uh(n),e.getAttribute(n)}measureInstanceViewportBox(){return St()}scrapeMotionValuesFromProps(e,n){return bx(e,n)}build(e,n,i,r){Vh(e,n,i,this.isSVGTag,r.transformTemplate)}renderInstance(e,n,i,r){Px(e,n,i,r)}mount(e){this.isSVGTag=Hh(e.tagName),super.mount(e)}}const JA=(t,e)=>kh(t)?new QA(e,{enableHardwareAcceleration:!1}):new ZA(e,{enableHardwareAcceleration:!0}),eC={layout:{ProjectionNode:by,MeasureLayout:Ey}},tC={...C1,...YT,...DA,...eC},gn=nT((t,e)=>UT(t,e,tC,JA));function Iy(){const t=Q.useRef(!1);return Nh(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function nC(){const t=Iy(),[e,n]=Q.useState(0),i=Q.useCallback(()=>{t.current&&n(e+1)},[e]);return[Q.useCallback(()=>nt.postRender(i),[i]),e]}class iC extends Q.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function rC({children:t,isPresent:e}){const n=Q.useId(),i=Q.useRef(null),r=Q.useRef({width:0,height:0,top:0,left:0});return Q.useInsertionEffect(()=>{const{width:s,height:o,top:a,left:l}=r.current;if(e||!i.current||!s||!o)return;i.current.dataset.motionPopId=n;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[e]),Q.createElement(iC,{isPresent:e,childRef:i,sizeRef:r},Q.cloneElement(t,{ref:i}))}const Bu=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o})=>{const a=Lx(sC),l=Q.useId(),c=Q.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:u=>{a.set(u,!0);for(const f of a.values())if(!f)return;i&&i()},register:u=>(a.set(u,!1),()=>a.delete(u))}),s?void 0:[n]);return Q.useMemo(()=>{a.forEach((u,f)=>a.set(f,!1))},[n]),Q.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=Q.createElement(rC,{isPresent:n},t)),Q.createElement(Bc.Provider,{value:c},t)};function sC(){return new Map}function oC(t){return Q.useEffect(()=>()=>t(),[])}const Pr=t=>t.key||"";function aC(t,e){t.forEach(n=>{const i=Pr(n);e.set(i,n)})}function lC(t){const e=[];return Q.Children.forEach(t,n=>{Q.isValidElement(n)&&e.push(n)}),e}const wd=({children:t,custom:e,initial:n=!0,onExitComplete:i,exitBeforeEnter:r,presenceAffectsLayout:s=!0,mode:o="sync"})=>{const a=Q.useContext(Oh).forceRender||nC()[0],l=Iy(),c=lC(t);let u=c;const f=Q.useRef(new Map).current,d=Q.useRef(u),p=Q.useRef(new Map).current,_=Q.useRef(!0);if(Nh(()=>{_.current=!1,aC(c,p),d.current=u}),oC(()=>{_.current=!0,p.clear(),f.clear()}),_.current)return Q.createElement(Q.Fragment,null,u.map(v=>Q.createElement(Bu,{key:Pr(v),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:s,mode:o},v)));u=[...u];const x=d.current.map(Pr),g=c.map(Pr),h=x.length;for(let v=0;v<h;v++){const m=x[v];g.indexOf(m)===-1&&!f.has(m)&&f.set(m,void 0)}return o==="wait"&&f.size&&(u=[]),f.forEach((v,m)=>{if(g.indexOf(m)!==-1)return;const y=p.get(m);if(!y)return;const M=x.indexOf(m);let C=v;if(!C){const T=()=>{f.delete(m);const b=Array.from(p.keys()).filter(S=>!g.includes(S));if(b.forEach(S=>p.delete(S)),d.current=c.filter(S=>{const A=Pr(S);return A===m||b.includes(A)}),!f.size){if(l.current===!1)return;a(),i&&i()}};C=Q.createElement(Bu,{key:Pr(y),isPresent:!1,onExitComplete:T,custom:e,presenceAffectsLayout:s,mode:o},y),f.set(m,C)}u.splice(M,0,C)}),u=u.map(v=>{const m=v.key;return f.has(m)?v:Q.createElement(Bu,{key:Pr(v),isPresent:!0,presenceAffectsLayout:s,mode:o},v)}),Q.createElement(Q.Fragment,null,f.size?u:u.map(v=>Q.cloneElement(v)))},Fy=[{id:1,name:"AlexGamer",lat:40.7128,lng:-74.006,status:"online",games:["Valorant","CS2","Apex Legends"],platform:"PC",schedule:"Noche",hasMicrophone:!0,avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",rating:4.8},{id:2,name:"ProGamer99",lat:34.0522,lng:-118.2437,status:"online",games:["Fortnite","Warzone"],platform:"PS5",schedule:"Tarde",hasMicrophone:!0,avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=Pro",rating:4.9},{id:3,name:"NightRider",lat:51.5074,lng:-.1278,status:"online",games:["League of Legends","Valorant"],platform:"PC",schedule:"Noche",hasMicrophone:!1,avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=Night",rating:4.6},{id:4,name:"XboxMaster",lat:35.6762,lng:139.6503,status:"online",games:["Halo","Gears of War"],platform:"Xbox",schedule:"Mañana",hasMicrophone:!0,avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=Xbox",rating:4.7},{id:5,name:"StreamQueen",lat:-33.8688,lng:151.2093,status:"online",games:["Among Us","Fall Guys"],platform:"PC",schedule:"Tarde",hasMicrophone:!0,avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=Queen",rating:5}],cC=["Valorant","CS2","Apex Legends","Fortnite","Warzone","League of Legends","Halo","Gears of War","Among Us","Fall Guys","Rocket League","Overwatch 2","Rainbow Six Siege","PUBG","Call of Duty"],uC=["PC","PS5","Xbox","Nintendo Switch","Mobile"],fC=["Mañana","Tarde","Noche"],dC=(t,e)=>{if(!t||!e)return[];const{games:n,schedule:i,platform:r}=t;return e.map(s=>{const o=n.filter(c=>s.games.includes(c)),a=o.length;let l=0;return l+=a/Math.max(n.length,s.games.length)*50,s.schedule===i&&(l+=30),s.platform===r&&(l+=20),{...s,commonGames:o,compatibilityScore:Math.round(l)}}).filter(s=>s.compatibilityScore>0).sort((s,o)=>o.compatibilityScore-s.compatibilityScore)},hC=(t,e)=>e===null?t:t.filter(n=>n.hasMicrophone===e);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Di=(t,e)=>{const n=Q.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},u)=>Q.createElement("svg",{ref:u,...pC,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${mC(t)}`,a].join(" "),...c},[...e.map(([f,d])=>Q.createElement(f,d)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=Di("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=Di("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=Di("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=Di("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=Di("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vC=Di("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _C=Di("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xC=Di("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=Di("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),SC=({onComplete:t})=>{const{updateUserProfile:e,setMatches:n}=Dh(),[i,r]=Q.useState(1),[s,o]=Q.useState({nickname:"",platform:"",games:[],schedule:""}),a=()=>{if(i<3)r(i+1);else{e(s);const g=dC(s,Fy);n(g),t()}},l=()=>{i>1&&r(i-1)},c=g=>{o(h=>({...h,games:h.games.includes(g)?h.games.filter(v=>v!==g):[...h.games,g]}))},u=()=>{switch(i){case 1:return s.nickname&&s.platform;case 2:return s.games.length>0;case 3:return s.schedule;default:return!1}},f={enter:g=>({x:g>0?300:-300,opacity:0}),center:{x:0,opacity:1},exit:g=>({x:g<0?300:-300,opacity:0})},[d,p]=Q.useState(0),_=()=>{p(1),a()},x=()=>{p(-1),l()};return I.jsx("div",{className:"min-h-screen bg-dark-bg flex items-center justify-center p-4",children:I.jsxs("div",{className:"w-full max-w-2xl",children:[I.jsxs("div",{className:"mb-8",children:[I.jsxs("div",{className:"flex justify-between mb-2",children:[I.jsxs("span",{className:"text-medium-text text-sm",children:["Paso ",i," de 3"]}),I.jsxs("span",{className:"text-medium-text text-sm",children:[Math.round(i/3*100),"%"]})]}),I.jsx("div",{className:"h-2 bg-dark-border rounded-full overflow-hidden",children:I.jsx(gn.div,{className:"h-full bg-accent rounded-full",initial:{width:0},animate:{width:`${i/3*100}%`},transition:{duration:.3}})})]}),I.jsx(wd,{mode:"wait",custom:d,children:I.jsxs(gn.div,{custom:d,variants:f,initial:"enter",animate:"center",exit:"exit",transition:{duration:.3},className:"glass-card",children:[i===1&&I.jsxs("div",{className:"space-y-6",children:[I.jsx("h2",{className:"text-3xl font-semibold mb-2",children:"Crea tu perfil"}),I.jsx("p",{className:"text-medium-text mb-6",children:"Cuéntanos sobre ti para encontrar compañeros perfectos"}),I.jsxs("div",{children:[I.jsx("label",{className:"block text-sm font-medium mb-2",children:"Nickname"}),I.jsx("input",{type:"text",value:s.nickname,onChange:g=>o(h=>({...h,nickname:g.target.value})),placeholder:"Tu nombre de gamer",className:`w-full px-4 py-3 rounded-xl border-2 border-dark-border \r
                             bg-dark-card/60 backdrop-blur-sm focus:outline-none focus:ring-2 \r
                             focus:ring-accent/20 focus:border-accent text-light-text \r
                             placeholder:text-medium-text transition-all`})]}),I.jsxs("div",{children:[I.jsx("label",{className:"block text-sm font-medium mb-4 text-light-text",children:"Plataforma"}),I.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:uC.map((g,h)=>{const v=s.platform===g,m=()=>{switch(g){case"PC":return I.jsx(vC,{className:"w-6 h-6"});case"PS5":return I.jsx(Ka,{className:"w-6 h-6"});case"Xbox":return I.jsx(Ka,{className:"w-6 h-6"});case"Nintendo Switch":return I.jsx(Ka,{className:"w-6 h-6"});case"Mobile":return I.jsx(xC,{className:"w-6 h-6"});default:return I.jsx(Ka,{className:"w-6 h-6"})}};return I.jsxs(gn.button,{onClick:()=>o(y=>({...y,platform:g})),whileHover:{scale:1.02},whileTap:{scale:.98},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:h*.05},className:`relative px-6 py-4 rounded-2xl border-2 transition-all duration-300 
                                   flex flex-col items-center justify-center gap-2 min-h-[100px]
                                   ${v?"bg-accent text-dark-bg border-accent shadow-lg shadow-accent/20":"bg-dark-card/40 backdrop-blur-sm border-dark-border text-light-text hover:border-accent/50 hover:bg-dark-card/60"}`,children:[v&&I.jsx(gn.div,{initial:{scale:0},animate:{scale:1},className:`absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full \r
                                       flex items-center justify-center border-2 border-dark-bg`,children:I.jsx(zu,{className:"w-4 h-4 text-dark-bg"})}),I.jsx("div",{className:`${v?"text-dark-bg":"text-light-text"}`,children:m()}),I.jsx("span",{className:`text-sm font-semibold ${v?"text-dark-bg":"text-light-text"}`,children:g})]},g)})})]})]}),i===2&&I.jsxs("div",{className:"space-y-6",children:[I.jsx("h2",{className:"text-3xl font-semibold mb-2",children:"Tus juegos favoritos"}),I.jsx("p",{className:"text-medium-text mb-6",children:"Selecciona los juegos en los que quieres encontrar compañeros"}),I.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-3 max-h-[400px] overflow-y-auto",children:cC.map((g,h)=>{const v=s.games.includes(g);return I.jsxs(gn.button,{onClick:()=>c(g),whileHover:{scale:1.02},whileTap:{scale:.98},initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:h*.02},className:`relative px-4 py-3 rounded-xl border-2 transition-all duration-300 text-left
                                 ${v?"bg-accent text-dark-bg border-accent shadow-lg shadow-accent/20":"bg-dark-card/40 backdrop-blur-sm border-dark-border text-light-text hover:border-accent/50 hover:bg-dark-card/60"}`,children:[v&&I.jsx(gn.div,{initial:{scale:0},animate:{scale:1},className:`absolute -top-1.5 -right-1.5 w-5 h-5 bg-accent rounded-full \r
                                     flex items-center justify-center border-2 border-dark-bg`,children:I.jsx(zu,{className:"w-3 h-3 text-dark-bg"})}),I.jsx("span",{className:"text-sm font-medium",children:g})]},g)})}),s.games.length>0&&I.jsx("div",{className:"mt-4",children:I.jsxs("p",{className:"text-sm text-medium-text mb-2",children:["Seleccionados: ",s.games.length]})})]}),i===3&&I.jsxs("div",{className:"space-y-6",children:[I.jsx("h2",{className:"text-3xl font-semibold mb-2",children:"Tu horario habitual"}),I.jsx("p",{className:"text-medium-text mb-6",children:"¿Cuándo sueles jugar?"}),I.jsx("div",{className:"space-y-3",children:fC.map((g,h)=>{const v=s.schedule===g;return I.jsxs(gn.button,{onClick:()=>o(m=>({...m,schedule:g})),whileHover:{scale:1.01,x:4},whileTap:{scale:.99},initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:h*.1},className:`relative w-full px-6 py-4 rounded-xl border-2 transition-all duration-300 
                                 text-left flex items-center justify-between
                                 ${v?"bg-accent text-dark-bg border-accent shadow-lg shadow-accent/20":"bg-dark-card/40 backdrop-blur-sm border-dark-border text-light-text hover:border-accent/50 hover:bg-dark-card/60"}`,children:[I.jsx("span",{className:"text-lg font-semibold",children:g}),v&&I.jsx(gn.div,{initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},className:"w-6 h-6 bg-dark-bg rounded-full flex items-center justify-center",children:I.jsx(zu,{className:"w-4 h-4 text-accent"})})]},g)})})]}),I.jsxs("div",{className:"flex justify-between mt-8",children:[I.jsx("button",{onClick:x,disabled:i===1,className:`btn-secondary ${i===1?"opacity-50 cursor-not-allowed":""}`,children:"Atrás"}),I.jsx("button",{onClick:_,disabled:!u(),className:`btn-primary ${u()?"":"opacity-50 cursor-not-allowed"}`,children:i===3?"Comenzar":"Siguiente"})]})]},i)})]})})},MC=({match:t,onConnect:e})=>I.jsxs(gn.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:"glass-card hover:shadow-xl transition-all duration-300",children:[I.jsxs("div",{className:"flex items-start gap-4",children:[I.jsx("div",{className:"flex-shrink-0",children:I.jsx("img",{src:t.avatar,alt:t.name,className:"w-16 h-16 rounded-full border-2 border-dark-border"})}),I.jsxs("div",{className:"flex-1 min-w-0",children:[I.jsxs("div",{className:"flex items-start justify-between mb-2",children:[I.jsxs("div",{children:[I.jsx("h3",{className:"text-lg font-semibold text-light-text mb-1",children:t.name}),I.jsx("p",{className:"text-sm text-medium-text",children:t.platform})]}),I.jsxs("div",{className:"flex items-center gap-1 text-yellow-500",children:[I.jsx("span",{className:"text-sm font-medium",children:t.rating}),I.jsx("span",{className:"text-xs",children:"⭐"})]})]}),I.jsxs("div",{className:"flex flex-wrap gap-2 mb-3",children:[t.games.slice(0,3).map((n,i)=>I.jsx("span",{className:`px-2 py-1 text-xs bg-dark-card/60 backdrop-blur-sm rounded-lg \r
                         border border-dark-border text-light-text`,children:n},i)),t.games.length>3&&I.jsxs("span",{className:"px-2 py-1 text-xs text-medium-text",children:["+",t.games.length-3]})]}),I.jsxs("div",{className:"flex items-center justify-between",children:[I.jsx("span",{className:"text-xs text-medium-text",children:t.schedule}),I.jsx("div",{className:"flex items-center gap-2",children:t.hasMicrophone?I.jsxs("div",{className:"flex items-center gap-1 text-green-600",children:[I.jsx(tp,{size:16}),I.jsx("span",{className:"text-xs",children:"Mic"})]}):I.jsxs("div",{className:"flex items-center gap-1 text-medium-text",children:[I.jsx(Oy,{size:16}),I.jsx("span",{className:"text-xs",children:"Sin mic"})]})})]}),t.compatibilityScore&&I.jsxs("div",{className:"mt-3 pt-3 border-t border-dark-border",children:[I.jsxs("div",{className:"flex items-center justify-between",children:[I.jsx("span",{className:"text-xs text-medium-text",children:"Compatibilidad"}),I.jsxs("span",{className:"text-sm font-semibold text-light-text",children:[t.compatibilityScore,"%"]})]}),I.jsx("div",{className:"mt-1 h-1.5 bg-light-gray rounded-full overflow-hidden",children:I.jsx(gn.div,{className:"h-full bg-accent rounded-full",initial:{width:0},animate:{width:`${t.compatibilityScore}%`},transition:{duration:.5}})})]})]})]}),I.jsx("button",{onClick:()=>e(t),className:"w-full mt-4 btn-primary",children:"Conectar"})]});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const np="158",is={ROTATE:0,DOLLY:1,PAN:2},rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},EC=0,bg=1,TC=2,ky=1,wC=2,pi=3,hr=0,cn=1,vi=2,or=0,Ws=1,Lg=2,Dg=3,Ng=4,AC=5,Lr=100,CC=101,RC=102,Ug=103,Ig=104,PC=200,bC=201,LC=202,DC=203,Ad=204,Cd=205,NC=206,UC=207,IC=208,FC=209,OC=210,kC=211,BC=212,zC=213,VC=214,HC=0,GC=1,WC=2,pc=3,jC=4,XC=5,YC=6,qC=7,By=0,$C=1,KC=2,ar=0,ZC=1,QC=2,JC=3,eR=4,tR=5,zy=300,to=301,no=302,Rd=303,Pd=304,Xc=306,bd=1e3,Xn=1001,Ld=1002,Zt=1003,Fg=1004,Vu=1005,Ln=1006,nR=1007,ha=1008,lr=1009,iR=1010,rR=1011,ip=1012,Vy=1013,$i=1014,Ki=1015,pa=1016,Hy=1017,Gy=1018,zr=1020,sR=1021,Yn=1023,oR=1024,aR=1025,Vr=1026,io=1027,lR=1028,Wy=1029,cR=1030,jy=1031,Xy=1033,Hu=33776,Gu=33777,Wu=33778,ju=33779,Og=35840,kg=35841,Bg=35842,zg=35843,uR=36196,Vg=37492,Hg=37496,Gg=37808,Wg=37809,jg=37810,Xg=37811,Yg=37812,qg=37813,$g=37814,Kg=37815,Zg=37816,Qg=37817,Jg=37818,ev=37819,tv=37820,nv=37821,Xu=36492,iv=36494,rv=36495,fR=36283,sv=36284,ov=36285,av=36286,Yy=3e3,Hr=3001,dR=3200,hR=3201,pR=0,mR=1,Nn="",Ut="srgb",bi="srgb-linear",rp="display-p3",Yc="display-p3-linear",mc="linear",rt="srgb",gc="rec709",vc="p3",ss=7680,lv=519,gR=512,vR=513,_R=514,xR=515,yR=516,SR=517,MR=518,ER=519,cv=35044,uv="300 es",Dd=1035,Si=2e3,_c=2001;class ts{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ul=Math.PI/180,Nd=180/Math.PI;function Ta(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[t&255]+Vt[t>>8&255]+Vt[t>>16&255]+Vt[t>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[n&63|128]+Vt[n>>8&255]+"-"+Vt[n>>16&255]+Vt[n>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function Qt(t,e,n){return Math.max(e,Math.min(n,t))}function TR(t,e){return(t%e+e)%e}function Yu(t,e,n){return(1-n)*t+n*e}function fv(t){return(t&t-1)===0&&t!==0}function Ud(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function So(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const wR={DEG2RAD:Ul};class He{constructor(e=0,n=0){He.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],_=i[8],x=r[0],g=r[3],h=r[6],v=r[1],m=r[4],y=r[7],M=r[2],C=r[5],T=r[8];return s[0]=o*x+a*v+l*M,s[3]=o*g+a*m+l*C,s[6]=o*h+a*y+l*T,s[1]=c*x+u*v+f*M,s[4]=c*g+u*m+f*C,s[7]=c*h+u*y+f*T,s[2]=d*x+p*v+_*M,s[5]=d*g+p*m+_*C,s[8]=d*h+p*y+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,_=n*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(qu.makeScale(e,n)),this}rotate(e){return this.premultiply(qu.makeRotation(-e)),this}translate(e,n){return this.premultiply(qu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qu=new Ge;function qy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function xc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function AR(){const t=xc("canvas");return t.style.display="block",t}const dv={};function Xo(t){t in dv||(dv[t]=!0,console.warn(t))}const hv=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pv=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Za={[bi]:{transfer:mc,primaries:gc,toReference:t=>t,fromReference:t=>t},[Ut]:{transfer:rt,primaries:gc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Yc]:{transfer:mc,primaries:vc,toReference:t=>t.applyMatrix3(pv),fromReference:t=>t.applyMatrix3(hv)},[rp]:{transfer:rt,primaries:vc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(pv),fromReference:t=>t.applyMatrix3(hv).convertLinearToSRGB()}},CR=new Set([bi,Yc]),Qe={enabled:!0,_workingColorSpace:bi,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!CR.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Za[e].toReference,r=Za[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Za[t].primaries},getTransfer:function(t){return t===Nn?mc:Za[t].transfer}};function js(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function $u(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let os;class $y{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{os===void 0&&(os=xc("canvas")),os.width=e.width,os.height=e.height;const i=os.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=os}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=xc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=js(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(js(n[i]/255)*255):n[i]=js(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let RR=0;class Ky{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RR++}),this.uuid=Ta(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ku(r[o].image)):s.push(Ku(r[o]))}else s=Ku(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ku(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$y.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let PR=0;class xn extends ts{constructor(e=xn.DEFAULT_IMAGE,n=xn.DEFAULT_MAPPING,i=Xn,r=Xn,s=Ln,o=ha,a=Yn,l=lr,c=xn.DEFAULT_ANISOTROPY,u=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PR++}),this.uuid=Ta(),this.name="",this.source=new Ky(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Xo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Hr?Ut:Nn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bd:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case Ld:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bd:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case Ld:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Xo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ut?Hr:Yy}set encoding(e){Xo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hr?Ut:Nn}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=zy;xn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,n=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],_=l[9],x=l[2],g=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const m=(c+1)/2,y=(p+1)/2,M=(h+1)/2,C=(u+d)/4,T=(f+x)/4,b=(_+g)/4;return m>y&&m>M?m<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(m),r=C/i,s=T/i):y>M?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=b/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=T/s,r=b/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-_)*(g-_)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(g-_)/v,this.y=(f-x)/v,this.z=(d-u)/v,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bR extends ts{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Xo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Hr?Ut:Nn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new xn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Ky(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qr extends bR{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Zy extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class LR extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $r{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=x;return}if(f!==x||l!==d||c!==p||u!==_){let g=1-a;const h=l*d+c*p+u*_+f*x,v=h>=0?1:-1,m=1-h*h;if(m>Number.EPSILON){const M=Math.sqrt(m),C=Math.atan2(M,h*v);g=Math.sin(g*C)/M,a=Math.sin(a*C)/M}const y=a*v;if(l=l*g+d*y,c=c*g+p*y,u=u*g+_*y,f=f*g+x*y,g===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+u*f+l*p-c*d,e[n+1]=l*_+u*d+c*f-a*p,e[n+2]=c*_+u*p+a*d-l*f,e[n+3]=u*_-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"YZX":this._x=d*u*f+c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f-d*p*_;break;case"XZY":this._x=d*u*f-c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(mv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(mv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zu.copy(this).projectOnVector(e),this.sub(Zu)}reflect(e){return this.sub(Zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zu=new z,mv=new $r;class wa{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(s,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qa.copy(i.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mo),Ja.subVectors(this.max,Mo),as.subVectors(e.a,Mo),ls.subVectors(e.b,Mo),cs.subVectors(e.c,Mo),Ii.subVectors(ls,as),Fi.subVectors(cs,ls),Sr.subVectors(as,cs);let n=[0,-Ii.z,Ii.y,0,-Fi.z,Fi.y,0,-Sr.z,Sr.y,Ii.z,0,-Ii.x,Fi.z,0,-Fi.x,Sr.z,0,-Sr.x,-Ii.y,Ii.x,0,-Fi.y,Fi.x,0,-Sr.y,Sr.x,0];return!Qu(n,as,ls,cs,Ja)||(n=[1,0,0,0,1,0,0,0,1],!Qu(n,as,ls,cs,Ja))?!1:(el.crossVectors(Ii,Fi),n=[el.x,el.y,el.z],Qu(n,as,ls,cs,Ja))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ci=[new z,new z,new z,new z,new z,new z,new z,new z],Bn=new z,Qa=new wa,as=new z,ls=new z,cs=new z,Ii=new z,Fi=new z,Sr=new z,Mo=new z,Ja=new z,el=new z,Mr=new z;function Qu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Mr.fromArray(t,s);const a=r.x*Math.abs(Mr.x)+r.y*Math.abs(Mr.y)+r.z*Math.abs(Mr.z),l=e.dot(Mr),c=n.dot(Mr),u=i.dot(Mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const DR=new wa,Eo=new z,Ju=new z;class sp{constructor(e=new z,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):DR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Eo.subVectors(e,this.center);const n=Eo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Eo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Eo.copy(e.center).add(Ju)),this.expandByPoint(Eo.copy(e.center).sub(Ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new z,ef=new z,tl=new z,Oi=new z,tf=new z,nl=new z,nf=new z;class op{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,n),ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ef.copy(e).add(n).multiplyScalar(.5),tl.copy(n).sub(e).normalize(),Oi.copy(this.origin).sub(ef);const s=e.distanceTo(n)*.5,o=-this.direction.dot(tl),a=Oi.dot(this.direction),l=-Oi.dot(tl),c=Oi.lengthSq(),u=Math.abs(1-o*o);let f,d,p,_;if(u>0)if(f=o*l-a,d=o*a-l,_=s*u,f>=0)if(d>=-_)if(d<=_){const x=1/u;f*=x,d*=x,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ef).addScaledVector(tl,d),p}intersectSphere(e,n){ui.subVectors(e.center,this.origin);const i=ui.dot(this.direction),r=ui.dot(ui)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,n,i,r,s){tf.subVectors(n,e),nl.subVectors(i,e),nf.crossVectors(tf,nl);let o=this.direction.dot(nf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);const l=a*this.direction.dot(nl.crossVectors(Oi,nl));if(l<0)return null;const c=a*this.direction.dot(tf.cross(Oi));if(c<0||l+c>o)return null;const u=-a*Oi.dot(nf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,n,i,r,s,o,a,l,c,u,f,d,p,_,x,g){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,p,_,x,g)}set(e,n,i,r,s,o,a,l,c,u,f,d,p,_,x,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=x,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/us.setFromMatrixColumn(e,0).length(),s=1/us.setFromMatrixColumn(e,1).length(),o=1/us.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,_=a*u,x=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=d-x*c,n[9]=-a*l,n[2]=x-d*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,_=c*u,x=c*f;n[0]=d+x*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-_,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,_=c*u,x=c*f;n[0]=d-x*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*u,n[9]=x-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,_=a*u,x=a*f;n[0]=l*u,n[4]=_*c-p,n[8]=d*c+x,n[1]=l*f,n[5]=x*c+d,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,_=a*l,x=a*c;n[0]=l*u,n[4]=x-d*f,n[8]=_*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+_,n[10]=d-x*f}else if(e.order==="XZY"){const d=o*l,p=o*c,_=a*l,x=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+x,n[5]=o*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*u,n[10]=x*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(NR,e,UR)}lookAt(e,n,i){const r=this.elements;return hn.subVectors(e,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),ki.crossVectors(i,hn),ki.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),ki.crossVectors(i,hn)),ki.normalize(),il.crossVectors(hn,ki),r[0]=ki.x,r[4]=il.x,r[8]=hn.x,r[1]=ki.y,r[5]=il.y,r[9]=hn.y,r[2]=ki.z,r[6]=il.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],_=i[2],x=i[6],g=i[10],h=i[14],v=i[3],m=i[7],y=i[11],M=i[15],C=r[0],T=r[4],b=r[8],S=r[12],A=r[1],V=r[5],Z=r[9],J=r[13],D=r[2],W=r[6],$=r[10],q=r[14],F=r[3],k=r[7],H=r[11],P=r[15];return s[0]=o*C+a*A+l*D+c*F,s[4]=o*T+a*V+l*W+c*k,s[8]=o*b+a*Z+l*$+c*H,s[12]=o*S+a*J+l*q+c*P,s[1]=u*C+f*A+d*D+p*F,s[5]=u*T+f*V+d*W+p*k,s[9]=u*b+f*Z+d*$+p*H,s[13]=u*S+f*J+d*q+p*P,s[2]=_*C+x*A+g*D+h*F,s[6]=_*T+x*V+g*W+h*k,s[10]=_*b+x*Z+g*$+h*H,s[14]=_*S+x*J+g*q+h*P,s[3]=v*C+m*A+y*D+M*F,s[7]=v*T+m*V+y*W+M*k,s[11]=v*b+m*Z+y*$+M*H,s[15]=v*S+m*J+y*q+M*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],_=e[3],x=e[7],g=e[11],h=e[15];return _*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+x*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+g*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],_=e[12],x=e[13],g=e[14],h=e[15],v=f*g*c-x*d*c+x*l*p-a*g*p-f*l*h+a*d*h,m=_*d*c-u*g*c-_*l*p+o*g*p+u*l*h-o*d*h,y=u*x*c-_*f*c+_*a*p-o*x*p-u*a*h+o*f*h,M=_*f*l-u*x*l-_*a*d+o*x*d+u*a*g-o*f*g,C=n*v+i*m+r*y+s*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=v*T,e[1]=(x*d*s-f*g*s-x*r*p+i*g*p+f*r*h-i*d*h)*T,e[2]=(a*g*s-x*l*s+x*r*c-i*g*c-a*r*h+i*l*h)*T,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*T,e[4]=m*T,e[5]=(u*g*s-_*d*s+_*r*p-n*g*p-u*r*h+n*d*h)*T,e[6]=(_*l*s-o*g*s-_*r*c+n*g*c+o*r*h-n*l*h)*T,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*T,e[8]=y*T,e[9]=(_*f*s-u*x*s-_*i*p+n*x*p+u*i*h-n*f*h)*T,e[10]=(o*x*s-_*a*s+_*i*c-n*x*c-o*i*h+n*a*h)*T,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*T,e[12]=M*T,e[13]=(u*x*r-_*f*r+_*i*d-n*x*d-u*i*g+n*f*g)*T,e[14]=(_*a*r-o*x*r-_*i*l+n*x*l+o*i*g-n*a*g)*T,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,_=s*f,x=o*u,g=o*f,h=a*f,v=l*c,m=l*u,y=l*f,M=i.x,C=i.y,T=i.z;return r[0]=(1-(x+h))*M,r[1]=(p+y)*M,r[2]=(_-m)*M,r[3]=0,r[4]=(p-y)*C,r[5]=(1-(d+h))*C,r[6]=(g+v)*C,r[7]=0,r[8]=(_+m)*T,r[9]=(g-v)*T,r[10]=(1-(d+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=us.set(r[0],r[1],r[2]).length();const o=us.set(r[4],r[5],r[6]).length(),a=us.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);const c=1/s,u=1/o,f=1/a;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=f,zn.elements[9]*=f,zn.elements[10]*=f,n.setFromRotationMatrix(zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Si){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,_;if(a===Si)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===_c)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Si){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,p=(i+r)*u;let _,x;if(a===Si)_=(o+s)*f,x=-2*f;else if(a===_c)_=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const us=new z,zn=new Ot,NR=new z(0,0,0),UR=new z(1,1,1),ki=new z,il=new z,hn=new z,gv=new Ot,vv=new $r;class qc{constructor(e=0,n=0,i=0,r=qc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return gv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return vv.setFromEuler(this),this.setFromQuaternion(vv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qc.DEFAULT_ORDER="XYZ";class ap{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let IR=0;const _v=new z,fs=new $r,fi=new Ot,rl=new z,To=new z,FR=new z,OR=new $r,xv=new z(1,0,0),yv=new z(0,1,0),Sv=new z(0,0,1),kR={type:"added"},BR={type:"removed"};class yn extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IR++}),this.uuid=Ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new z,n=new qc,i=new $r,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ot},normalMatrix:{value:new Ge}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ap,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return fs.setFromAxisAngle(e,n),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,n){return fs.setFromAxisAngle(e,n),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(xv,e)}rotateY(e){return this.rotateOnAxis(yv,e)}rotateZ(e){return this.rotateOnAxis(Sv,e)}translateOnAxis(e,n){return _v.copy(e).applyQuaternion(this.quaternion),this.position.add(_v.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(xv,e)}translateY(e){return this.translateOnAxis(yv,e)}translateZ(e){return this.translateOnAxis(Sv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?rl.copy(e):rl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(To,rl,this.up):fi.lookAt(rl,To,this.up),this.quaternion.setFromRotationMatrix(fi),r&&(fi.extractRotation(r.matrixWorld),fs.setFromRotationMatrix(fi),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(kR)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(BR)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,e,FR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,OR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}yn.DEFAULT_UP=new z(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new z,di=new z,rf=new z,hi=new z,ds=new z,hs=new z,Mv=new z,sf=new z,of=new z,af=new z;let sl=!1;class jn{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),di.subVectors(i,n),rf.subVectors(e,n);const o=Vn.dot(Vn),a=Vn.dot(di),l=Vn.dot(rf),c=di.dot(di),u=di.dot(rf),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,p=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,hi),hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getUV(e,n,i,r,s,o,a,l){return sl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),sl=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,hi),l.setScalar(0),l.addScaledVector(s,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),di.subVectors(e,n),Vn.cross(di).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Vn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return jn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return sl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),sl=!0),jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ds.subVectors(r,i),hs.subVectors(s,i),sf.subVectors(e,i);const l=ds.dot(sf),c=hs.dot(sf);if(l<=0&&c<=0)return n.copy(i);of.subVectors(e,r);const u=ds.dot(of),f=hs.dot(of);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ds,o);af.subVectors(e,s);const p=ds.dot(af),_=hs.dot(af);if(_>=0&&p<=_)return n.copy(s);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(hs,a);const g=u*_-p*f;if(g<=0&&f-u>=0&&p-_>=0)return Mv.subVectors(s,r),a=(f-u)/(f-u+(p-_)),n.copy(r).addScaledVector(Mv,a);const h=1/(g+x+d);return o=x*h,a=d*h,n.copy(i).addScaledVector(ds,o).addScaledVector(hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},ol={h:0,s:0,l:0};function lf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=TR(e,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=lf(o,s,e+1/3),this.g=lf(o,s,e),this.b=lf(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=Ut){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ut){const i=Qy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}copyLinearToSRGB(e){return this.r=$u(e.r),this.g=$u(e.g),this.b=$u(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return Qe.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Qt(Ht.r*255,0,255))*65536+Math.round(Qt(Ht.g*255,0,255))*256+Math.round(Qt(Ht.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Ut){Qe.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==Ut?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+n,Bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Bi),e.getHSL(ol);const i=Yu(Bi.h,ol.h,n),r=Yu(Bi.s,ol.s,n),s=Yu(Bi.l,ol.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Je;Je.NAMES=Qy;let zR=0;class $c extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zR++}),this.uuid=Ta(),this.name="",this.type="Material",this.blending=Ws,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=Cd,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=pc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(i.blending=this.blending),this.side!==hr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ad&&(i.blendSrc=this.blendSrc),this.blendDst!==Cd&&(i.blendDst=this.blendDst),this.blendEquation!==Lr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yc extends $c{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=By,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new z,al=new He;class ai{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=cv,this.updateRange={offset:0,count:-1},this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)al.fromBufferAttribute(this,n),al.applyMatrix3(e),this.setXY(n,al.x,al.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=So(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=So(n,this.array)),n}setX(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=So(n,this.array)),n}setY(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=So(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=So(n,this.array)),n}setW(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cv&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Jy extends ai{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class eS extends ai{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Kn extends ai{constructor(e,n,i){super(new Float32Array(e),n,i)}}let VR=0;const Cn=new Ot,cf=new yn,ps=new z,pn=new wa,wo=new wa,bt=new z;class Ni extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VR++}),this.uuid=Ta(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qy(e)?eS:Jy)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,n,i){return Cn.makeTranslation(e,n,i),this.applyMatrix4(Cn),this}scale(e,n,i){return Cn.makeScale(e,n,i),this.applyMatrix4(Cn),this}lookAt(e){return cf.lookAt(e),cf.updateMatrix(),this.applyMatrix4(cf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Kn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];wo.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(pn.min,wo.min),pn.expandByPoint(bt),bt.addVectors(pn.max,wo.max),pn.expandByPoint(bt)):(pn.expandByPoint(wo.min),pn.expandByPoint(wo.max))}pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)bt.fromBufferAttribute(a,c),l&&(ps.fromBufferAttribute(e,c),bt.add(ps)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<a;A++)c[A]=new z,u[A]=new z;const f=new z,d=new z,p=new z,_=new He,x=new He,g=new He,h=new z,v=new z;function m(A,V,Z){f.fromArray(r,A*3),d.fromArray(r,V*3),p.fromArray(r,Z*3),_.fromArray(o,A*2),x.fromArray(o,V*2),g.fromArray(o,Z*2),d.sub(f),p.sub(f),x.sub(_),g.sub(_);const J=1/(x.x*g.y-g.x*x.y);isFinite(J)&&(h.copy(d).multiplyScalar(g.y).addScaledVector(p,-x.y).multiplyScalar(J),v.copy(p).multiplyScalar(x.x).addScaledVector(d,-g.x).multiplyScalar(J),c[A].add(h),c[V].add(h),c[Z].add(h),u[A].add(v),u[V].add(v),u[Z].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let A=0,V=y.length;A<V;++A){const Z=y[A],J=Z.start,D=Z.count;for(let W=J,$=J+D;W<$;W+=3)m(i[W+0],i[W+1],i[W+2])}const M=new z,C=new z,T=new z,b=new z;function S(A){T.fromArray(s,A*3),b.copy(T);const V=c[A];M.copy(V),M.sub(T.multiplyScalar(T.dot(V))).normalize(),C.crossVectors(b,V);const J=C.dot(u[A])<0?-1:1;l[A*4]=M.x,l[A*4+1]=M.y,l[A*4+2]=M.z,l[A*4+3]=J}for(let A=0,V=y.length;A<V;++A){const Z=y[A],J=Z.start,D=Z.count;for(let W=J,$=J+D;W<$;W+=3)S(i[W+0]),S(i[W+1]),S(i[W+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ai(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,g),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)bt.fromBufferAttribute(e,n),bt.normalize(),e.setXYZ(n,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let h=0;h<u;h++)d[_++]=c[p++]}return new ai(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ni,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ev=new Ot,Er=new op,ll=new sp,Tv=new z,ms=new z,gs=new z,vs=new z,uf=new z,cl=new z,ul=new He,fl=new He,dl=new He,wv=new z,Av=new z,Cv=new z,hl=new z,pl=new z;class ii extends yn{constructor(e=new Ni,n=new yc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){cl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(uf.fromBufferAttribute(f,e),o?cl.addScaledVector(uf,u):cl.addScaledVector(uf.sub(n),u))}n.add(cl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ll.copy(i.boundingSphere),ll.applyMatrix4(s),Er.copy(e.ray).recast(e.near),!(ll.containsPoint(Er.origin)===!1&&(Er.intersectSphere(ll,Tv)===null||Er.origin.distanceToSquared(Tv)>(e.far-e.near)**2))&&(Ev.copy(s).invert(),Er.copy(e.ray).applyMatrix4(Ev),!(i.boundingBox!==null&&Er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Er)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const g=d[_],h=o[g.materialIndex],v=Math.max(g.start,p.start),m=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,M=m;y<M;y+=3){const C=a.getX(y),T=a.getX(y+1),b=a.getX(y+2);r=ml(this,h,e,i,c,u,f,C,T,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=_,h=x;g<h;g+=3){const v=a.getX(g),m=a.getX(g+1),y=a.getX(g+2);r=ml(this,o,e,i,c,u,f,v,m,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const g=d[_],h=o[g.materialIndex],v=Math.max(g.start,p.start),m=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,M=m;y<M;y+=3){const C=y,T=y+1,b=y+2;r=ml(this,h,e,i,c,u,f,C,T,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=_,h=x;g<h;g+=3){const v=g,m=g+1,y=g+2;r=ml(this,o,e,i,c,u,f,v,m,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function HR(t,e,n,i,r,s,o,a){let l;if(e.side===cn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===hr,a),l===null)return null;pl.copy(a),pl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(pl);return c<n.near||c>n.far?null:{distance:c,point:pl.clone(),object:t}}function ml(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,ms),t.getVertexPosition(l,gs),t.getVertexPosition(c,vs);const u=HR(t,e,n,i,ms,gs,vs,hl);if(u){r&&(ul.fromBufferAttribute(r,a),fl.fromBufferAttribute(r,l),dl.fromBufferAttribute(r,c),u.uv=jn.getInterpolation(hl,ms,gs,vs,ul,fl,dl,new He)),s&&(ul.fromBufferAttribute(s,a),fl.fromBufferAttribute(s,l),dl.fromBufferAttribute(s,c),u.uv1=jn.getInterpolation(hl,ms,gs,vs,ul,fl,dl,new He),u.uv2=u.uv1),o&&(wv.fromBufferAttribute(o,a),Av.fromBufferAttribute(o,l),Cv.fromBufferAttribute(o,c),u.normal=jn.getInterpolation(hl,ms,gs,vs,wv,Av,Cv,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new z,materialIndex:0};jn.getNormal(ms,gs,vs,f.normal),u.face=f}return u}class Aa extends Ni{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Kn(c,3)),this.setAttribute("normal",new Kn(u,3)),this.setAttribute("uv",new Kn(f,2));function _(x,g,h,v,m,y,M,C,T,b,S){const A=y/T,V=M/b,Z=y/2,J=M/2,D=C/2,W=T+1,$=b+1;let q=0,F=0;const k=new z;for(let H=0;H<$;H++){const P=H*V-J;for(let U=0;U<W;U++){const se=U*A-Z;k[x]=se*v,k[g]=P*m,k[h]=D,c.push(k.x,k.y,k.z),k[x]=0,k[g]=0,k[h]=C>0?1:-1,u.push(k.x,k.y,k.z),f.push(U/T),f.push(1-H/b),q+=1}}for(let H=0;H<b;H++)for(let P=0;P<T;P++){const U=d+P+W*H,se=d+P+W*(H+1),oe=d+(P+1)+W*(H+1),te=d+(P+1)+W*H;l.push(U,se,te),l.push(se,oe,te),F+=6}a.addGroup(p,F,S),p+=F,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ro(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=ro(t[n]);for(const r in i)e[r]=i[r]}return e}function GR(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function tS(t){return t.getRenderTarget()===null?t.outputColorSpace:Qe.workingColorSpace}const WR={clone:ro,merge:qt};var jR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kr extends $c{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jR,this.fragmentShader=XR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=GR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class nS extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Si}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dn extends nS{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Nd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ul*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nd*2*Math.atan(Math.tan(Ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ul*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const _s=-90,xs=1;class YR extends yn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dn(_s,xs,e,n);r.layers=this.layers,this.add(r);const s=new Dn(_s,xs,e,n);s.layers=this.layers,this.add(s);const o=new Dn(_s,xs,e,n);o.layers=this.layers,this.add(o);const a=new Dn(_s,xs,e,n);a.layers=this.layers,this.add(a);const l=new Dn(_s,xs,e,n);l.layers=this.layers,this.add(l);const c=new Dn(_s,xs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_c)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class iS extends xn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:to,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qR extends qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Xo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Hr?Ut:Nn),this.texture=new iS(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ln}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Aa(5,5,5),s=new Kr({name:"CubemapFromEquirect",uniforms:ro(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:or});s.uniforms.tEquirect.value=n;const o=new ii(r,s),a=n.minFilter;return n.minFilter===ha&&(n.minFilter=Ln),new YR(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const ff=new z,$R=new z,KR=new Ge;class Wi{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ff.subVectors(i,n).cross($R.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ff),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||KR.getNormalMatrix(e),r=this.coplanarPoint(ff).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new sp,gl=new z;class rS{constructor(e=new Wi,n=new Wi,i=new Wi,r=new Wi,s=new Wi,o=new Wi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Si){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],_=r[9],x=r[10],g=r[11],h=r[12],v=r[13],m=r[14],y=r[15];if(i[0].setComponents(l-s,d-c,g-p,y-h).normalize(),i[1].setComponents(l+s,d+c,g+p,y+h).normalize(),i[2].setComponents(l+o,d+u,g+_,y+v).normalize(),i[3].setComponents(l-o,d-u,g-_,y-v).normalize(),i[4].setComponents(l-a,d-f,g-x,y-m).normalize(),n===Si)i[5].setComponents(l+a,d+f,g+x,y+m).normalize();else if(n===_c)i[5].setComponents(a,f,x,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){return Tr.center.set(0,0,0),Tr.radius=.7071067811865476,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(gl.x=r.normal.x>0?e.max.x:e.min.x,gl.y=r.normal.y>0?e.max.y:e.min.y,gl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sS(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function ZR(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,p=t.createBuffer();t.bindBuffer(u,p),t.bufferData(u,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=t.SHORT;else if(f instanceof Uint32Array)_=t.UNSIGNED_INT;else if(f instanceof Int32Array)_=t.INT;else if(f instanceof Int8Array)_=t.BYTE;else if(f instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const d=u.array,p=u.updateRange;t.bindBuffer(f,c),p.count===-1?t.bufferSubData(f,0,d):(n?t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class lp extends Ni{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,p=[],_=[],x=[],g=[];for(let h=0;h<u;h++){const v=h*d-o;for(let m=0;m<c;m++){const y=m*f-s;_.push(y,-v,0),x.push(0,0,1),g.push(m/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const m=v+c*h,y=v+c*(h+1),M=v+1+c*(h+1),C=v+1+c*h;p.push(m,y,C),p.push(y,M,C)}this.setIndex(p),this.setAttribute("position",new Kn(_,3)),this.setAttribute("normal",new Kn(x,3)),this.setAttribute("uv",new Kn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lp(e.width,e.height,e.widthSegments,e.heightSegments)}}var QR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,eP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nP=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,iP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rP=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lP=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cP=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uP=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,dP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mP=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_P=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,SP=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,MP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,EP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AP="gl_FragColor = linearToOutputTexel( gl_FragColor );",CP=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,RP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,PP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bP=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,LP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OP=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kP=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,BP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VP=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,GP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,WP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,$P=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,KP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ZP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,QP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ib=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ob=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ab=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ub=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,fb=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,db=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,hb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_b=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ab=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Db=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ub=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ib=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ob=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $b=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tL=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nL=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,iL=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aL=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lL=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cL=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uL=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fL=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hL=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pL=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mL=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vL=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_L=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xL=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yL=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SL=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ML=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EL=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,TL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wL=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AL=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,CL=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:QR,alphahash_pars_fragment:JR,alphamap_fragment:eP,alphamap_pars_fragment:tP,alphatest_fragment:nP,alphatest_pars_fragment:iP,aomap_fragment:rP,aomap_pars_fragment:sP,begin_vertex:oP,beginnormal_vertex:aP,bsdfs:lP,iridescence_fragment:cP,bumpmap_pars_fragment:uP,clipping_planes_fragment:fP,clipping_planes_pars_fragment:dP,clipping_planes_pars_vertex:hP,clipping_planes_vertex:pP,color_fragment:mP,color_pars_fragment:gP,color_pars_vertex:vP,color_vertex:_P,common:xP,cube_uv_reflection_fragment:yP,defaultnormal_vertex:SP,displacementmap_pars_vertex:MP,displacementmap_vertex:EP,emissivemap_fragment:TP,emissivemap_pars_fragment:wP,colorspace_fragment:AP,colorspace_pars_fragment:CP,envmap_fragment:RP,envmap_common_pars_fragment:PP,envmap_pars_fragment:bP,envmap_pars_vertex:LP,envmap_physical_pars_fragment:GP,envmap_vertex:DP,fog_vertex:NP,fog_pars_vertex:UP,fog_fragment:IP,fog_pars_fragment:FP,gradientmap_pars_fragment:OP,lightmap_fragment:kP,lightmap_pars_fragment:BP,lights_lambert_fragment:zP,lights_lambert_pars_fragment:VP,lights_pars_begin:HP,lights_toon_fragment:WP,lights_toon_pars_fragment:jP,lights_phong_fragment:XP,lights_phong_pars_fragment:YP,lights_physical_fragment:qP,lights_physical_pars_fragment:$P,lights_fragment_begin:KP,lights_fragment_maps:ZP,lights_fragment_end:QP,logdepthbuf_fragment:JP,logdepthbuf_pars_fragment:eb,logdepthbuf_pars_vertex:tb,logdepthbuf_vertex:nb,map_fragment:ib,map_pars_fragment:rb,map_particle_fragment:sb,map_particle_pars_fragment:ob,metalnessmap_fragment:ab,metalnessmap_pars_fragment:lb,morphcolor_vertex:cb,morphnormal_vertex:ub,morphtarget_pars_vertex:fb,morphtarget_vertex:db,normal_fragment_begin:hb,normal_fragment_maps:pb,normal_pars_fragment:mb,normal_pars_vertex:gb,normal_vertex:vb,normalmap_pars_fragment:_b,clearcoat_normal_fragment_begin:xb,clearcoat_normal_fragment_maps:yb,clearcoat_pars_fragment:Sb,iridescence_pars_fragment:Mb,opaque_fragment:Eb,packing:Tb,premultiplied_alpha_fragment:wb,project_vertex:Ab,dithering_fragment:Cb,dithering_pars_fragment:Rb,roughnessmap_fragment:Pb,roughnessmap_pars_fragment:bb,shadowmap_pars_fragment:Lb,shadowmap_pars_vertex:Db,shadowmap_vertex:Nb,shadowmask_pars_fragment:Ub,skinbase_vertex:Ib,skinning_pars_vertex:Fb,skinning_vertex:Ob,skinnormal_vertex:kb,specularmap_fragment:Bb,specularmap_pars_fragment:zb,tonemapping_fragment:Vb,tonemapping_pars_fragment:Hb,transmission_fragment:Gb,transmission_pars_fragment:Wb,uv_pars_fragment:jb,uv_pars_vertex:Xb,uv_vertex:Yb,worldpos_vertex:qb,background_vert:$b,background_frag:Kb,backgroundCube_vert:Zb,backgroundCube_frag:Qb,cube_vert:Jb,cube_frag:eL,depth_vert:tL,depth_frag:nL,distanceRGBA_vert:iL,distanceRGBA_frag:rL,equirect_vert:sL,equirect_frag:oL,linedashed_vert:aL,linedashed_frag:lL,meshbasic_vert:cL,meshbasic_frag:uL,meshlambert_vert:fL,meshlambert_frag:dL,meshmatcap_vert:hL,meshmatcap_frag:pL,meshnormal_vert:mL,meshnormal_frag:gL,meshphong_vert:vL,meshphong_frag:_L,meshphysical_vert:xL,meshphysical_frag:yL,meshtoon_vert:SL,meshtoon_frag:ML,points_vert:EL,points_frag:TL,shadow_vert:wL,shadow_frag:AL,sprite_vert:CL,sprite_frag:RL},pe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},ti={basic:{uniforms:qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Je(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:qt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:qt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Je(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:qt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:qt([pe.points,pe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:qt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:qt([pe.common,pe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:qt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:qt([pe.sprite,pe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:qt([pe.common,pe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:qt([pe.lights,pe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ti.physical={uniforms:qt([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const vl={r:0,b:0,g:0};function PL(t,e,n,i,r,s,o){const a=new Je(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function _(g,h){let v=!1,m=h.isScene===!0?h.background:null;m&&m.isTexture&&(m=(h.backgroundBlurriness>0?n:e).get(m)),m===null?x(a,l):m&&m.isColor&&(x(m,1),v=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.mapping===Xc)?(u===void 0&&(u=new ii(new Aa(1,1,1),new Kr({name:"BackgroundCubeMaterial",uniforms:ro(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=m,u.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(m.colorSpace)!==rt,(f!==m||d!==m.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=m,d=m.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):m&&m.isTexture&&(c===void 0&&(c=new ii(new lp(2,2),new Kr({name:"BackgroundMaterial",uniforms:ro(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=m,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(m.colorSpace)!==rt,m.matrixAutoUpdate===!0&&m.updateMatrix(),c.material.uniforms.uvTransform.value.copy(m.matrix),(f!==m||d!==m.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=m,d=m.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function x(g,h){g.getRGB(vl,tS(t)),i.buffers.color.setClear(vl.r,vl.g,vl.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(g,h=1){a.set(g),l=h,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,x(a,l)},render:_}}function bL(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=g(null);let c=l,u=!1;function f(D,W,$,q,F){let k=!1;if(o){const H=x(q,$,W);c!==H&&(c=H,p(c.object)),k=h(D,q,$,F),k&&v(D,q,$,F)}else{const H=W.wireframe===!0;(c.geometry!==q.id||c.program!==$.id||c.wireframe!==H)&&(c.geometry=q.id,c.program=$.id,c.wireframe=H,k=!0)}F!==null&&n.update(F,t.ELEMENT_ARRAY_BUFFER),(k||u)&&(u=!1,b(D,W,$,q),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(F).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(D){return i.isWebGL2?t.bindVertexArray(D):s.bindVertexArrayOES(D)}function _(D){return i.isWebGL2?t.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function x(D,W,$){const q=$.wireframe===!0;let F=a[D.id];F===void 0&&(F={},a[D.id]=F);let k=F[W.id];k===void 0&&(k={},F[W.id]=k);let H=k[q];return H===void 0&&(H=g(d()),k[q]=H),H}function g(D){const W=[],$=[],q=[];for(let F=0;F<r;F++)W[F]=0,$[F]=0,q[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:$,attributeDivisors:q,object:D,attributes:{},index:null}}function h(D,W,$,q){const F=c.attributes,k=W.attributes;let H=0;const P=$.getAttributes();for(const U in P)if(P[U].location>=0){const oe=F[U];let te=k[U];if(te===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(te=D.instanceColor)),oe===void 0||oe.attribute!==te||te&&oe.data!==te.data)return!0;H++}return c.attributesNum!==H||c.index!==q}function v(D,W,$,q){const F={},k=W.attributes;let H=0;const P=$.getAttributes();for(const U in P)if(P[U].location>=0){let oe=k[U];oe===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor));const te={};te.attribute=oe,oe&&oe.data&&(te.data=oe.data),F[U]=te,H++}c.attributes=F,c.attributesNum=H,c.index=q}function m(){const D=c.newAttributes;for(let W=0,$=D.length;W<$;W++)D[W]=0}function y(D){M(D,0)}function M(D,W){const $=c.newAttributes,q=c.enabledAttributes,F=c.attributeDivisors;$[D]=1,q[D]===0&&(t.enableVertexAttribArray(D),q[D]=1),F[D]!==W&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,W),F[D]=W)}function C(){const D=c.newAttributes,W=c.enabledAttributes;for(let $=0,q=W.length;$<q;$++)W[$]!==D[$]&&(t.disableVertexAttribArray($),W[$]=0)}function T(D,W,$,q,F,k,H){H===!0?t.vertexAttribIPointer(D,W,$,F,k):t.vertexAttribPointer(D,W,$,q,F,k)}function b(D,W,$,q){if(i.isWebGL2===!1&&(D.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const F=q.attributes,k=$.getAttributes(),H=W.defaultAttributeValues;for(const P in k){const U=k[P];if(U.location>=0){let se=F[P];if(se===void 0&&(P==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),P==="instanceColor"&&D.instanceColor&&(se=D.instanceColor)),se!==void 0){const oe=se.normalized,te=se.itemSize,fe=n.get(se);if(fe===void 0)continue;const ve=fe.buffer,ye=fe.type,Se=fe.bytesPerElement,We=i.isWebGL2===!0&&(ye===t.INT||ye===t.UNSIGNED_INT||se.gpuType===Vy);if(se.isInterleavedBufferAttribute){const Pe=se.data,B=Pe.stride,Et=se.offset;if(Pe.isInstancedInterleavedBuffer){for(let Me=0;Me<U.locationSize;Me++)M(U.location+Me,Pe.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let Me=0;Me<U.locationSize;Me++)y(U.location+Me);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let Me=0;Me<U.locationSize;Me++)T(U.location+Me,te/U.locationSize,ye,oe,B*Se,(Et+te/U.locationSize*Me)*Se,We)}else{if(se.isInstancedBufferAttribute){for(let Pe=0;Pe<U.locationSize;Pe++)M(U.location+Pe,se.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Pe=0;Pe<U.locationSize;Pe++)y(U.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let Pe=0;Pe<U.locationSize;Pe++)T(U.location+Pe,te/U.locationSize,ye,oe,te*Se,te/U.locationSize*Pe*Se,We)}}else if(H!==void 0){const oe=H[P];if(oe!==void 0)switch(oe.length){case 2:t.vertexAttrib2fv(U.location,oe);break;case 3:t.vertexAttrib3fv(U.location,oe);break;case 4:t.vertexAttrib4fv(U.location,oe);break;default:t.vertexAttrib1fv(U.location,oe)}}}}C()}function S(){Z();for(const D in a){const W=a[D];for(const $ in W){const q=W[$];for(const F in q)_(q[F].object),delete q[F];delete W[$]}delete a[D]}}function A(D){if(a[D.id]===void 0)return;const W=a[D.id];for(const $ in W){const q=W[$];for(const F in q)_(q[F].object),delete q[F];delete W[$]}delete a[D.id]}function V(D){for(const W in a){const $=a[W];if($[D.id]===void 0)continue;const q=$[D.id];for(const F in q)_(q[F].object),delete q[F];delete $[D.id]}}function Z(){J(),u=!0,c!==l&&(c=l,p(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Z,resetDefaultState:J,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:V,initAttributes:m,enableAttribute:y,disableUnusedAttributes:C}}function LL(t,e,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){t.drawArrays(s,c,u),n.update(u,s,1)}function l(c,u,f){if(f===0)return;let d,p;if(r)d=t,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,c,u,f),n.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function DL(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),m=d>0,y=o||e.has("OES_texture_float"),M=m&&y,C=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:g,maxVaryings:h,maxFragmentUniforms:v,vertexTextures:m,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:C}}function NL(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Wi,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,h=t.get(f);if(!r||_===null||_.length===0||s&&!g)s?u(null):c();else{const v=s?0:i,m=v*4;let y=h.clippingState||null;l.value=y,y=u(_,d,m,p);for(let M=0;M!==m;++M)y[M]=n[M];h.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,_){const x=f!==null?f.length:0;let g=null;if(x!==0){if(g=l.value,_!==!0||g===null){const h=p+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<h)&&(g=new Float32Array(h));for(let m=0,y=p;m!==x;++m,y+=4)o.copy(f[m]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function UL(t){let e=new WeakMap;function n(o,a){return a===Rd?o.mapping=to:a===Pd&&(o.mapping=no),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Rd||a===Pd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new qR(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class IL extends nS{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Os=4,Rv=[.125,.215,.35,.446,.526,.582],Dr=20,df=new IL,Pv=new Je;let hf=null,pf=0,mf=0;const br=(1+Math.sqrt(5))/2,ys=1/br,bv=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,br,ys),new z(0,br,-ys),new z(ys,0,br),new z(-ys,0,br),new z(br,ys,0),new z(-br,ys,0)];class Lv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){hf=this._renderer.getRenderTarget(),pf=this._renderer.getActiveCubeFace(),mf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hf,pf,mf),e.scissorTest=!1,_l(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===to||e.mapping===no?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hf=this._renderer.getRenderTarget(),pf=this._renderer.getActiveCubeFace(),mf=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:pa,format:Yn,colorSpace:bi,depthBuffer:!1},r=Dv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dv(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FL(s)),this._blurMaterial=OL(s,e,n)}return r}_compileMaterial(e){const n=new ii(this._lodPlanes[0],e);this._renderer.compile(n,df)}_sceneToCubeUV(e,n,i,r){const a=new Dn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Pv),u.toneMapping=ar,u.autoClear=!1;const p=new yc({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),_=new ii(new Aa,p);let x=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,x=!0):(p.color.copy(Pv),x=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const m=this._cubeSize;_l(r,v*m,h>2?m:0,m,m),u.setRenderTarget(r),x&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===to||e.mapping===no;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ii(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;_l(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,df)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=bv[(r-1)%bv.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ii(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Dr-1),x=s/_,g=isFinite(s)?1+Math.floor(u*x):Dr;g>Dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Dr}`);const h=[];let v=0;for(let T=0;T<Dr;++T){const b=T/x,S=Math.exp(-b*b/2);h.push(S),T===0?v+=S:T<g&&(v+=2*S)}for(let T=0;T<h.length;T++)h[T]=h[T]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:m}=this;d.dTheta.value=_,d.mipInt.value=m-i;const y=this._sizeLods[r],M=3*y*(r>m-Os?r-m+Os:0),C=4*(this._cubeSize-y);_l(n,M,C,3*y,2*y),l.setRenderTarget(n),l.render(f,df)}}function FL(t){const e=[],n=[],i=[];let r=t;const s=t-Os+1+Rv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Os?l=Rv[o-t+Os-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,x=3,g=2,h=1,v=new Float32Array(x*_*p),m=new Float32Array(g*_*p),y=new Float32Array(h*_*p);for(let C=0;C<p;C++){const T=C%3*2/3-1,b=C>2?0:-1,S=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];v.set(S,x*_*C),m.set(d,g*_*C);const A=[C,C,C,C,C,C];y.set(A,h*_*C)}const M=new Ni;M.setAttribute("position",new ai(v,x)),M.setAttribute("uv",new ai(m,g)),M.setAttribute("faceIndex",new ai(y,h)),e.push(M),r>Os&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Dv(t,e,n){const i=new qr(t,e,n);return i.texture.mapping=Xc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _l(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function OL(t,e,n){const i=new Float32Array(Dr),r=new z(0,1,0);return new Kr({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Nv(){return new Kr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Uv(){return new Kr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function cp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kL(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Rd||l===Pd,u=l===to||l===no;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new Lv(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new Lv(t));const d=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function BL(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function zL(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let g=0,h=x.length;g<h;g++)e.remove(x[g])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const x=p[_];for(let g=0,h=x.length;g<h;g++)e.update(x[g],t.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,_=f.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let m=0,y=v.length;m<y;m+=3){const M=v[m+0],C=v[m+1],T=v[m+2];d.push(M,C,C,T,T,M)}}else if(_!==void 0){const v=_.array;x=_.version;for(let m=0,y=v.length/3-1;m<y;m+=3){const M=m+0,C=m+1,T=m+2;d.push(M,C,C,T,T,M)}}else return;const g=new(qy(d)?eS:Jy)(d,1);g.version=x;const h=s.get(f);h&&e.remove(h),s.set(f,g)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function VL(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,p){t.drawElements(s,p,a,d*l),n.update(p,s,1)}function f(d,p,_){if(_===0)return;let x,g;if(r)x=t,g="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[g](s,p,a,d*l,_),n.update(p,s,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function HL(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function GL(t,e){return t[0]-e[0]}function WL(t,e){return Math.abs(e[1])-Math.abs(t[1])}function jL(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new It,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=p!==void 0?p.length:0;let x=s.get(u);if(x===void 0||x.count!==_){let D=function(){Z.dispose(),s.delete(u),u.removeEventListener("dispose",D)};x!==void 0&&x.texture.dispose();const v=u.morphAttributes.position!==void 0,m=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let b=0;v===!0&&(b=1),m===!0&&(b=2),y===!0&&(b=3);let S=u.attributes.position.count*b,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const V=new Float32Array(S*A*4*_),Z=new Zy(V,S,A,_);Z.type=Ki,Z.needsUpdate=!0;const J=b*4;for(let W=0;W<_;W++){const $=M[W],q=C[W],F=T[W],k=S*A*4*W;for(let H=0;H<$.count;H++){const P=H*J;v===!0&&(o.fromBufferAttribute($,H),V[k+P+0]=o.x,V[k+P+1]=o.y,V[k+P+2]=o.z,V[k+P+3]=0),m===!0&&(o.fromBufferAttribute(q,H),V[k+P+4]=o.x,V[k+P+5]=o.y,V[k+P+6]=o.z,V[k+P+7]=0),y===!0&&(o.fromBufferAttribute(F,H),V[k+P+8]=o.x,V[k+P+9]=o.y,V[k+P+10]=o.z,V[k+P+11]=F.itemSize===4?o.w:1)}}x={count:_,texture:Z,size:new He(S,A)},s.set(u,x),u.addEventListener("dispose",D)}let g=0;for(let v=0;v<d.length;v++)g+=d[v];const h=u.morphTargetsRelative?1:1-g;f.getUniforms().setValue(t,"morphTargetBaseInfluence",h),f.getUniforms().setValue(t,"morphTargetInfluences",d),f.getUniforms().setValue(t,"morphTargetsTexture",x.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",x.size)}else{const p=d===void 0?0:d.length;let _=i[u.id];if(_===void 0||_.length!==p){_=[];for(let m=0;m<p;m++)_[m]=[m,0];i[u.id]=_}for(let m=0;m<p;m++){const y=_[m];y[0]=m,y[1]=d[m]}_.sort(WL);for(let m=0;m<8;m++)m<p&&_[m][1]?(a[m][0]=_[m][0],a[m][1]=_[m][1]):(a[m][0]=Number.MAX_SAFE_INTEGER,a[m][1]=0);a.sort(GL);const x=u.morphAttributes.position,g=u.morphAttributes.normal;let h=0;for(let m=0;m<8;m++){const y=a[m],M=y[0],C=y[1];M!==Number.MAX_SAFE_INTEGER&&C?(x&&u.getAttribute("morphTarget"+m)!==x[M]&&u.setAttribute("morphTarget"+m,x[M]),g&&u.getAttribute("morphNormal"+m)!==g[M]&&u.setAttribute("morphNormal"+m,g[M]),r[m]=C,h+=C):(x&&u.hasAttribute("morphTarget"+m)===!0&&u.deleteAttribute("morphTarget"+m),g&&u.hasAttribute("morphNormal"+m)===!0&&u.deleteAttribute("morphNormal"+m),r[m]=0)}const v=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function XL(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const oS=new xn,aS=new Zy,lS=new LR,cS=new iS,Iv=[],Fv=[],Ov=new Float32Array(16),kv=new Float32Array(9),Bv=new Float32Array(4);function lo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Iv[r];if(s===void 0&&(s=new Float32Array(r),Iv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function At(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Kc(t,e){let n=Fv[e];n===void 0&&(n=new Int32Array(e),Fv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function YL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function qL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function $L(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(At(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function KL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function ZL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;Bv.set(i),t.uniformMatrix2fv(this.addr,!1,Bv),Ct(n,i)}}function QL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;kv.set(i),t.uniformMatrix3fv(this.addr,!1,kv),Ct(n,i)}}function JL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;Ov.set(i),t.uniformMatrix4fv(this.addr,!1,Ov),Ct(n,i)}}function e2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function t2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function n2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function i2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function r2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function s2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function o2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function a2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function l2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||oS,r)}function c2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||lS,r)}function u2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||cS,r)}function f2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||aS,r)}function d2(t){switch(t){case 5126:return YL;case 35664:return qL;case 35665:return $L;case 35666:return KL;case 35674:return ZL;case 35675:return QL;case 35676:return JL;case 5124:case 35670:return e2;case 35667:case 35671:return t2;case 35668:case 35672:return n2;case 35669:case 35673:return i2;case 5125:return r2;case 36294:return s2;case 36295:return o2;case 36296:return a2;case 35678:case 36198:case 36298:case 36306:case 35682:return l2;case 35679:case 36299:case 36307:return c2;case 35680:case 36300:case 36308:case 36293:return u2;case 36289:case 36303:case 36311:case 36292:return f2}}function h2(t,e){t.uniform1fv(this.addr,e)}function p2(t,e){const n=lo(e,this.size,2);t.uniform2fv(this.addr,n)}function m2(t,e){const n=lo(e,this.size,3);t.uniform3fv(this.addr,n)}function g2(t,e){const n=lo(e,this.size,4);t.uniform4fv(this.addr,n)}function v2(t,e){const n=lo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function _2(t,e){const n=lo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function x2(t,e){const n=lo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function y2(t,e){t.uniform1iv(this.addr,e)}function S2(t,e){t.uniform2iv(this.addr,e)}function M2(t,e){t.uniform3iv(this.addr,e)}function E2(t,e){t.uniform4iv(this.addr,e)}function T2(t,e){t.uniform1uiv(this.addr,e)}function w2(t,e){t.uniform2uiv(this.addr,e)}function A2(t,e){t.uniform3uiv(this.addr,e)}function C2(t,e){t.uniform4uiv(this.addr,e)}function R2(t,e,n){const i=this.cache,r=e.length,s=Kc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||oS,s[o])}function P2(t,e,n){const i=this.cache,r=e.length,s=Kc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||lS,s[o])}function b2(t,e,n){const i=this.cache,r=e.length,s=Kc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||cS,s[o])}function L2(t,e,n){const i=this.cache,r=e.length,s=Kc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||aS,s[o])}function D2(t){switch(t){case 5126:return h2;case 35664:return p2;case 35665:return m2;case 35666:return g2;case 35674:return v2;case 35675:return _2;case 35676:return x2;case 5124:case 35670:return y2;case 35667:case 35671:return S2;case 35668:case 35672:return M2;case 35669:case 35673:return E2;case 5125:return T2;case 36294:return w2;case 36295:return A2;case 36296:return C2;case 35678:case 36198:case 36298:case 36306:case 35682:return R2;case 35679:case 36299:case 36307:return P2;case 35680:case 36300:case 36308:case 36293:return b2;case 36289:case 36303:case 36311:case 36292:return L2}}class N2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=d2(n.type)}}class U2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=D2(n.type)}}class I2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const gf=/(\w+)(\])?(\[|\.)?/g;function zv(t,e){t.seq.push(e),t.map[e.id]=e}function F2(t,e,n){const i=t.name,r=i.length;for(gf.lastIndex=0;;){const s=gf.exec(i),o=gf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){zv(n,c===void 0?new N2(a,t,e):new U2(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new I2(a),zv(n,f)),n=f}}}class Il{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);F2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Vv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const O2=37297;let k2=0;function B2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function z2(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===vc&&n===gc?i="LinearDisplayP3ToLinearSRGB":e===gc&&n===vc&&(i="LinearSRGBToLinearDisplayP3"),t){case bi:case Yc:return[i,"LinearTransferOETF"];case Ut:case rp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Hv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+B2(t.getShaderSource(e),o)}else return r}function V2(t,e){const n=z2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function H2(t,e){let n;switch(e){case ZC:n="Linear";break;case QC:n="Reinhard";break;case JC:n="OptimizedCineon";break;case eR:n="ACESFilmic";break;case tR:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function G2(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Lo).join(`
`)}function W2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function j2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Lo(t){return t!==""}function Gv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const X2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Id(t){return t.replace(X2,q2)}const Y2=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function q2(t,e){let n=ze[e];if(n===void 0){const i=Y2.get(e);if(i!==void 0)n=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Id(n)}const $2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jv(t){return t.replace($2,K2)}function K2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xv(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Z2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===ky?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===wC?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function Q2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case to:case no:e="ENVMAP_TYPE_CUBE";break;case Xc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function J2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case no:e="ENVMAP_MODE_REFRACTION";break}return e}function eD(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case By:e="ENVMAP_BLENDING_MULTIPLY";break;case $C:e="ENVMAP_BLENDING_MIX";break;case KC:e="ENVMAP_BLENDING_ADD";break}return e}function tD(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function nD(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Z2(n),c=Q2(n),u=J2(n),f=eD(n),d=tD(n),p=n.isWebGL2?"":G2(n),_=W2(s),x=r.createProgram();let g,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Lo).join(`
`),g.length>0&&(g+=`
`),h=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Lo).join(`
`),h.length>0&&(h+=`
`)):(g=[Xv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),h=[p,Xv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ar?"#define TONE_MAPPING":"",n.toneMapping!==ar?ze.tonemapping_pars_fragment:"",n.toneMapping!==ar?H2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,V2("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Lo).join(`
`)),o=Id(o),o=Gv(o,n),o=Wv(o,n),a=Id(a),a=Gv(a,n),a=Wv(a,n),o=jv(o),a=jv(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===uv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===uv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const m=v+g+o,y=v+h+a,M=Vv(r,r.VERTEX_SHADER,m),C=Vv(r,r.FRAGMENT_SHADER,y);r.attachShader(x,M),r.attachShader(x,C),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(V){if(t.debug.checkShaderErrors){const Z=r.getProgramInfoLog(x).trim(),J=r.getShaderInfoLog(M).trim(),D=r.getShaderInfoLog(C).trim();let W=!0,$=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,M,C);else{const q=Hv(r,M,"vertex"),F=Hv(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+q+`
`+F)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(J===""||D==="")&&($=!1);$&&(V.diagnostics={runnable:W,programLog:Z,vertexShader:{log:J,prefix:g},fragmentShader:{log:D,prefix:h}})}r.deleteShader(M),r.deleteShader(C),b=new Il(r,x),S=j2(r,x)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(x,O2)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=k2++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=C,this}let iD=0;class rD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new sD(e),n.set(e,i)),i}}class sD{constructor(e){this.id=iD++,this.code=e,this.usedTimes=0}}function oD(t,e,n,i,r,s,o){const a=new ap,l=new rD,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return S===0?"uv":`uv${S}`}function g(S,A,V,Z,J){const D=Z.fog,W=J.geometry,$=S.isMeshStandardMaterial?Z.environment:null,q=(S.isMeshStandardMaterial?n:e).get(S.envMap||$),F=q&&q.mapping===Xc?q.image.height:null,k=_[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const H=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,P=H!==void 0?H.length:0;let U=0;W.morphAttributes.position!==void 0&&(U=1),W.morphAttributes.normal!==void 0&&(U=2),W.morphAttributes.color!==void 0&&(U=3);let se,oe,te,fe;if(k){const _t=ti[k];se=_t.vertexShader,oe=_t.fragmentShader}else se=S.vertexShader,oe=S.fragmentShader,l.update(S),te=l.getVertexShaderID(S),fe=l.getFragmentShaderID(S);const ve=t.getRenderTarget(),ye=J.isInstancedMesh===!0,Se=!!S.map,We=!!S.matcap,Pe=!!q,B=!!S.aoMap,Et=!!S.lightMap,Me=!!S.bumpMap,Le=!!S.normalMap,we=!!S.displacementMap,ot=!!S.emissiveMap,ke=!!S.metalnessMap,Fe=!!S.roughnessMap,$e=S.anisotropy>0,vt=S.clearcoat>0,Rt=S.iridescence>0,R=S.sheen>0,E=S.transmission>0,G=$e&&!!S.anisotropyMap,ae=vt&&!!S.clearcoatMap,ne=vt&&!!S.clearcoatNormalMap,le=vt&&!!S.clearcoatRoughnessMap,Te=Rt&&!!S.iridescenceMap,de=Rt&&!!S.iridescenceThicknessMap,me=R&&!!S.sheenColorMap,L=R&&!!S.sheenRoughnessMap,ue=!!S.specularMap,ee=!!S.specularColorMap,Ne=!!S.specularIntensityMap,Ae=E&&!!S.transmissionMap,be=E&&!!S.thicknessMap,Ee=!!S.gradientMap,_e=!!S.alphaMap,Xe=S.alphaTest>0,N=!!S.alphaHash,he=!!S.extensions,ie=!!W.attributes.uv1,K=!!W.attributes.uv2,ce=!!W.attributes.uv3;let Re=ar;return S.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Re=t.toneMapping),{isWebGL2:u,shaderID:k,shaderType:S.type,shaderName:S.name,vertexShader:se,fragmentShader:oe,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:fe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:ye,instancingColor:ye&&J.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ve===null?t.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:bi,map:Se,matcap:We,envMap:Pe,envMapMode:Pe&&q.mapping,envMapCubeUVHeight:F,aoMap:B,lightMap:Et,bumpMap:Me,normalMap:Le,displacementMap:d&&we,emissiveMap:ot,normalMapObjectSpace:Le&&S.normalMapType===mR,normalMapTangentSpace:Le&&S.normalMapType===pR,metalnessMap:ke,roughnessMap:Fe,anisotropy:$e,anisotropyMap:G,clearcoat:vt,clearcoatMap:ae,clearcoatNormalMap:ne,clearcoatRoughnessMap:le,iridescence:Rt,iridescenceMap:Te,iridescenceThicknessMap:de,sheen:R,sheenColorMap:me,sheenRoughnessMap:L,specularMap:ue,specularColorMap:ee,specularIntensityMap:Ne,transmission:E,transmissionMap:Ae,thicknessMap:be,gradientMap:Ee,opaque:S.transparent===!1&&S.blending===Ws,alphaMap:_e,alphaTest:Xe,alphaHash:N,combine:S.combine,mapUv:Se&&x(S.map.channel),aoMapUv:B&&x(S.aoMap.channel),lightMapUv:Et&&x(S.lightMap.channel),bumpMapUv:Me&&x(S.bumpMap.channel),normalMapUv:Le&&x(S.normalMap.channel),displacementMapUv:we&&x(S.displacementMap.channel),emissiveMapUv:ot&&x(S.emissiveMap.channel),metalnessMapUv:ke&&x(S.metalnessMap.channel),roughnessMapUv:Fe&&x(S.roughnessMap.channel),anisotropyMapUv:G&&x(S.anisotropyMap.channel),clearcoatMapUv:ae&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ne&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:de&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:me&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:L&&x(S.sheenRoughnessMap.channel),specularMapUv:ue&&x(S.specularMap.channel),specularColorMapUv:ee&&x(S.specularColorMap.channel),specularIntensityMapUv:Ne&&x(S.specularIntensityMap.channel),transmissionMapUv:Ae&&x(S.transmissionMap.channel),thicknessMapUv:be&&x(S.thicknessMap.channel),alphaMapUv:_e&&x(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Le||$e),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:ie,vertexUv2s:K,vertexUv3s:ce,pointsUvs:J.isPoints===!0&&!!W.attributes.uv&&(Se||_e),fog:!!D,useFog:S.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:J.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:U,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:Re,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Se&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===vi,flipSided:S.side===cn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:he&&S.extensions.derivatives===!0,extensionFragDepth:he&&S.extensions.fragDepth===!0,extensionDrawBuffers:he&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function h(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const V in S.defines)A.push(V),A.push(S.defines[V]);return S.isRawShaderMaterial===!1&&(v(A,S),m(A,S),A.push(t.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function v(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function m(S,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const A=_[S.type];let V;if(A){const Z=ti[A];V=WR.clone(Z.uniforms)}else V=S.uniforms;return V}function M(S,A){let V;for(let Z=0,J=c.length;Z<J;Z++){const D=c[Z];if(D.cacheKey===A){V=D,++V.usedTimes;break}}return V===void 0&&(V=new nD(t,A,S,s),c.push(V)),V}function C(S){if(--S.usedTimes===0){const A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),S.destroy()}}function T(S){l.remove(S)}function b(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:y,acquireProgram:M,releaseProgram:C,releaseShaderCache:T,programs:c,dispose:b}}function aD(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function lD(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Yv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function qv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,_,x,g){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:x,group:g},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=x,h.group=g),e++,h}function a(f,d,p,_,x,g){const h=o(f,d,p,_,x,g);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,_,x,g){const h=o(f,d,p,_,x,g);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||lD),i.length>1&&i.sort(d||Yv),r.length>1&&r.sort(d||Yv)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function cD(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new qv,t.set(i,[o])):r>=s.length?(o=new qv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function uD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new Je};break;case"SpotLight":n={position:new z,direction:new z,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function fD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let dD=0;function hD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function pD(t,e){const n=new uD,i=fD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new z);const s=new z,o=new Ot,a=new Ot;function l(u,f){let d=0,p=0,_=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let x=0,g=0,h=0,v=0,m=0,y=0,M=0,C=0,T=0,b=0,S=0;u.sort(hD);const A=f===!0?Math.PI:1;for(let Z=0,J=u.length;Z<J;Z++){const D=u[Z],W=D.color,$=D.intensity,q=D.distance,F=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=W.r*$*A,p+=W.g*$*A,_+=W.b*$*A;else if(D.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(D.sh.coefficients[k],$);S++}else if(D.isDirectionalLight){const k=n.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity*A),D.castShadow){const H=D.shadow,P=i.get(D);P.shadowBias=H.bias,P.shadowNormalBias=H.normalBias,P.shadowRadius=H.radius,P.shadowMapSize=H.mapSize,r.directionalShadow[x]=P,r.directionalShadowMap[x]=F,r.directionalShadowMatrix[x]=D.shadow.matrix,y++}r.directional[x]=k,x++}else if(D.isSpotLight){const k=n.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(W).multiplyScalar($*A),k.distance=q,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,r.spot[h]=k;const H=D.shadow;if(D.map&&(r.spotLightMap[T]=D.map,T++,H.updateMatrices(D),D.castShadow&&b++),r.spotLightMatrix[h]=H.matrix,D.castShadow){const P=i.get(D);P.shadowBias=H.bias,P.shadowNormalBias=H.normalBias,P.shadowRadius=H.radius,P.shadowMapSize=H.mapSize,r.spotShadow[h]=P,r.spotShadowMap[h]=F,C++}h++}else if(D.isRectAreaLight){const k=n.get(D);k.color.copy(W).multiplyScalar($),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),r.rectArea[v]=k,v++}else if(D.isPointLight){const k=n.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity*A),k.distance=D.distance,k.decay=D.decay,D.castShadow){const H=D.shadow,P=i.get(D);P.shadowBias=H.bias,P.shadowNormalBias=H.normalBias,P.shadowRadius=H.radius,P.shadowMapSize=H.mapSize,P.shadowCameraNear=H.camera.near,P.shadowCameraFar=H.camera.far,r.pointShadow[g]=P,r.pointShadowMap[g]=F,r.pointShadowMatrix[g]=D.shadow.matrix,M++}r.point[g]=k,g++}else if(D.isHemisphereLight){const k=n.get(D);k.skyColor.copy(D.color).multiplyScalar($*A),k.groundColor.copy(D.groundColor).multiplyScalar($*A),r.hemi[m]=k,m++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=_;const V=r.hash;(V.directionalLength!==x||V.pointLength!==g||V.spotLength!==h||V.rectAreaLength!==v||V.hemiLength!==m||V.numDirectionalShadows!==y||V.numPointShadows!==M||V.numSpotShadows!==C||V.numSpotMaps!==T||V.numLightProbes!==S)&&(r.directional.length=x,r.spot.length=h,r.rectArea.length=v,r.point.length=g,r.hemi.length=m,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=C+T-b,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=S,V.directionalLength=x,V.pointLength=g,V.spotLength=h,V.rectAreaLength=v,V.hemiLength=m,V.numDirectionalShadows=y,V.numPointShadows=M,V.numSpotShadows=C,V.numSpotMaps=T,V.numLightProbes=S,r.version=dD++)}function c(u,f){let d=0,p=0,_=0,x=0,g=0;const h=f.matrixWorldInverse;for(let v=0,m=u.length;v<m;v++){const y=u[v];if(y.isDirectionalLight){const M=r.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(h),d++}else if(y.isSpotLight){const M=r.spot[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(h),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(h),_++}else if(y.isRectAreaLight){const M=r.rectArea[x];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(h),a.identity(),o.copy(y.matrixWorld),o.premultiply(h),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const M=r.point[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(h),p++}else if(y.isHemisphereLight){const M=r.hemi[g];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(h),g++}}}return{setup:l,setupView:c,state:r}}function $v(t,e){const n=new pD(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function mD(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new $v(t,e),n.set(s,[l])):o>=a.length?(l=new $v(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class gD extends $c{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vD extends $c{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _D=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yD(t,e,n){let i=new rS;const r=new He,s=new He,o=new It,a=new gD({depthPacking:hR}),l=new vD,c={},u=n.maxTextureSize,f={[hr]:cn,[cn]:hr,[vi]:vi},d=new Kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:_D,fragmentShader:xD}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Ni;_.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ii(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ky;let h=this.type;this.render=function(M,C,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const b=t.getRenderTarget(),S=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),V=t.state;V.setBlending(or),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const Z=h!==pi&&this.type===pi,J=h===pi&&this.type!==pi;for(let D=0,W=M.length;D<W;D++){const $=M[D],q=$.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const F=q.getFrameExtents();if(r.multiply(F),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/F.x),r.x=s.x*F.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/F.y),r.y=s.y*F.y,q.mapSize.y=s.y)),q.map===null||Z===!0||J===!0){const H=this.type!==pi?{minFilter:Zt,magFilter:Zt}:{};q.map!==null&&q.map.dispose(),q.map=new qr(r.x,r.y,H),q.map.texture.name=$.name+".shadowMap",q.camera.updateProjectionMatrix()}t.setRenderTarget(q.map),t.clear();const k=q.getViewportCount();for(let H=0;H<k;H++){const P=q.getViewport(H);o.set(s.x*P.x,s.y*P.y,s.x*P.z,s.y*P.w),V.viewport(o),q.updateMatrices($,H),i=q.getFrustum(),y(C,T,q.camera,$,this.type)}q.isPointLightShadow!==!0&&this.type===pi&&v(q,T),q.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(b,S,A)};function v(M,C){const T=e.update(x);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new qr(r.x,r.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(C,null,T,d,x,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(C,null,T,p,x,null)}function m(M,C,T,b){let S=null;const A=T.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(A!==void 0)S=A;else if(S=T.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const V=S.uuid,Z=C.uuid;let J=c[V];J===void 0&&(J={},c[V]=J);let D=J[Z];D===void 0&&(D=S.clone(),J[Z]=D),S=D}if(S.visible=C.visible,S.wireframe=C.wireframe,b===pi?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:f[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,T.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const V=t.properties.get(S);V.light=T}return S}function y(M,C,T,b,S){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===pi)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);const Z=e.update(M),J=M.material;if(Array.isArray(J)){const D=Z.groups;for(let W=0,$=D.length;W<$;W++){const q=D[W],F=J[q.materialIndex];if(F&&F.visible){const k=m(M,F,b,S);t.renderBufferDirect(T,null,Z,k,M,q)}}}else if(J.visible){const D=m(M,J,b,S);t.renderBufferDirect(T,null,Z,D,M,null)}}const V=M.children;for(let Z=0,J=V.length;Z<J;Z++)y(V[Z],C,T,b,S)}}function SD(t,e,n){const i=n.isWebGL2;function r(){let N=!1;const he=new It;let ie=null;const K=new It(0,0,0,0);return{setMask:function(ce){ie!==ce&&!N&&(t.colorMask(ce,ce,ce,ce),ie=ce)},setLocked:function(ce){N=ce},setClear:function(ce,Re,Ye,_t,wn){wn===!0&&(ce*=_t,Re*=_t,Ye*=_t),he.set(ce,Re,Ye,_t),K.equals(he)===!1&&(t.clearColor(ce,Re,Ye,_t),K.copy(he))},reset:function(){N=!1,ie=null,K.set(-1,0,0,0)}}}function s(){let N=!1,he=null,ie=null,K=null;return{setTest:function(ce){ce?Se(t.DEPTH_TEST):We(t.DEPTH_TEST)},setMask:function(ce){he!==ce&&!N&&(t.depthMask(ce),he=ce)},setFunc:function(ce){if(ie!==ce){switch(ce){case HC:t.depthFunc(t.NEVER);break;case GC:t.depthFunc(t.ALWAYS);break;case WC:t.depthFunc(t.LESS);break;case pc:t.depthFunc(t.LEQUAL);break;case jC:t.depthFunc(t.EQUAL);break;case XC:t.depthFunc(t.GEQUAL);break;case YC:t.depthFunc(t.GREATER);break;case qC:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ie=ce}},setLocked:function(ce){N=ce},setClear:function(ce){K!==ce&&(t.clearDepth(ce),K=ce)},reset:function(){N=!1,he=null,ie=null,K=null}}}function o(){let N=!1,he=null,ie=null,K=null,ce=null,Re=null,Ye=null,_t=null,wn=null;return{setTest:function(et){N||(et?Se(t.STENCIL_TEST):We(t.STENCIL_TEST))},setMask:function(et){he!==et&&!N&&(t.stencilMask(et),he=et)},setFunc:function(et,Xt,Qn){(ie!==et||K!==Xt||ce!==Qn)&&(t.stencilFunc(et,Xt,Qn),ie=et,K=Xt,ce=Qn)},setOp:function(et,Xt,Qn){(Re!==et||Ye!==Xt||_t!==Qn)&&(t.stencilOp(et,Xt,Qn),Re=et,Ye=Xt,_t=Qn)},setLocked:function(et){N=et},setClear:function(et){wn!==et&&(t.clearStencil(et),wn=et)},reset:function(){N=!1,he=null,ie=null,K=null,ce=null,Re=null,Ye=null,_t=null,wn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let d={},p={},_=new WeakMap,x=[],g=null,h=!1,v=null,m=null,y=null,M=null,C=null,T=null,b=null,S=new Je(0,0,0),A=0,V=!1,Z=null,J=null,D=null,W=null,$=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,k=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(H)[1]),F=k>=1):H.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),F=k>=2);let P=null,U={};const se=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),te=new It().fromArray(se),fe=new It().fromArray(oe);function ve(N,he,ie,K){const ce=new Uint8Array(4),Re=t.createTexture();t.bindTexture(N,Re),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<ie;Ye++)i&&(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)?t.texImage3D(he,0,t.RGBA,1,1,K,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(he+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return Re}const ye={};ye[t.TEXTURE_2D]=ve(t.TEXTURE_2D,t.TEXTURE_2D,1),ye[t.TEXTURE_CUBE_MAP]=ve(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ye[t.TEXTURE_2D_ARRAY]=ve(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ye[t.TEXTURE_3D]=ve(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Se(t.DEPTH_TEST),l.setFunc(pc),ke(!1),Fe(bg),Se(t.CULL_FACE),we(or);function Se(N){d[N]!==!0&&(t.enable(N),d[N]=!0)}function We(N){d[N]!==!1&&(t.disable(N),d[N]=!1)}function Pe(N,he){return p[N]!==he?(t.bindFramebuffer(N,he),p[N]=he,i&&(N===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=he),N===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=he)),!0):!1}function B(N,he){let ie=x,K=!1;if(N)if(ie=_.get(he),ie===void 0&&(ie=[],_.set(he,ie)),N.isWebGLMultipleRenderTargets){const ce=N.texture;if(ie.length!==ce.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let Re=0,Ye=ce.length;Re<Ye;Re++)ie[Re]=t.COLOR_ATTACHMENT0+Re;ie.length=ce.length,K=!0}}else ie[0]!==t.COLOR_ATTACHMENT0&&(ie[0]=t.COLOR_ATTACHMENT0,K=!0);else ie[0]!==t.BACK&&(ie[0]=t.BACK,K=!0);K&&(n.isWebGL2?t.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function Et(N){return g!==N?(t.useProgram(N),g=N,!0):!1}const Me={[Lr]:t.FUNC_ADD,[CC]:t.FUNC_SUBTRACT,[RC]:t.FUNC_REVERSE_SUBTRACT};if(i)Me[Ug]=t.MIN,Me[Ig]=t.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(Me[Ug]=N.MIN_EXT,Me[Ig]=N.MAX_EXT)}const Le={[PC]:t.ZERO,[bC]:t.ONE,[LC]:t.SRC_COLOR,[Ad]:t.SRC_ALPHA,[OC]:t.SRC_ALPHA_SATURATE,[IC]:t.DST_COLOR,[NC]:t.DST_ALPHA,[DC]:t.ONE_MINUS_SRC_COLOR,[Cd]:t.ONE_MINUS_SRC_ALPHA,[FC]:t.ONE_MINUS_DST_COLOR,[UC]:t.ONE_MINUS_DST_ALPHA,[kC]:t.CONSTANT_COLOR,[BC]:t.ONE_MINUS_CONSTANT_COLOR,[zC]:t.CONSTANT_ALPHA,[VC]:t.ONE_MINUS_CONSTANT_ALPHA};function we(N,he,ie,K,ce,Re,Ye,_t,wn,et){if(N===or){h===!0&&(We(t.BLEND),h=!1);return}if(h===!1&&(Se(t.BLEND),h=!0),N!==AC){if(N!==v||et!==V){if((m!==Lr||C!==Lr)&&(t.blendEquation(t.FUNC_ADD),m=Lr,C=Lr),et)switch(N){case Ws:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lg:t.blendFunc(t.ONE,t.ONE);break;case Dg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ng:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ws:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lg:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Dg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ng:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,M=null,T=null,b=null,S.set(0,0,0),A=0,v=N,V=et}return}ce=ce||he,Re=Re||ie,Ye=Ye||K,(he!==m||ce!==C)&&(t.blendEquationSeparate(Me[he],Me[ce]),m=he,C=ce),(ie!==y||K!==M||Re!==T||Ye!==b)&&(t.blendFuncSeparate(Le[ie],Le[K],Le[Re],Le[Ye]),y=ie,M=K,T=Re,b=Ye),(_t.equals(S)===!1||wn!==A)&&(t.blendColor(_t.r,_t.g,_t.b,wn),S.copy(_t),A=wn),v=N,V=!1}function ot(N,he){N.side===vi?We(t.CULL_FACE):Se(t.CULL_FACE);let ie=N.side===cn;he&&(ie=!ie),ke(ie),N.blending===Ws&&N.transparent===!1?we(or):we(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const K=N.stencilWrite;c.setTest(K),K&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),vt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Se(t.SAMPLE_ALPHA_TO_COVERAGE):We(t.SAMPLE_ALPHA_TO_COVERAGE)}function ke(N){Z!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),Z=N)}function Fe(N){N!==EC?(Se(t.CULL_FACE),N!==J&&(N===bg?t.cullFace(t.BACK):N===TC?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):We(t.CULL_FACE),J=N}function $e(N){N!==D&&(F&&t.lineWidth(N),D=N)}function vt(N,he,ie){N?(Se(t.POLYGON_OFFSET_FILL),(W!==he||$!==ie)&&(t.polygonOffset(he,ie),W=he,$=ie)):We(t.POLYGON_OFFSET_FILL)}function Rt(N){N?Se(t.SCISSOR_TEST):We(t.SCISSOR_TEST)}function R(N){N===void 0&&(N=t.TEXTURE0+q-1),P!==N&&(t.activeTexture(N),P=N)}function E(N,he,ie){ie===void 0&&(P===null?ie=t.TEXTURE0+q-1:ie=P);let K=U[ie];K===void 0&&(K={type:void 0,texture:void 0},U[ie]=K),(K.type!==N||K.texture!==he)&&(P!==ie&&(t.activeTexture(ie),P=ie),t.bindTexture(N,he||ye[N]),K.type=N,K.texture=he)}function G(){const N=U[P];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ae(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function L(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(N){te.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),te.copy(N))}function be(N){fe.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),fe.copy(N))}function Ee(N,he){let ie=f.get(he);ie===void 0&&(ie=new WeakMap,f.set(he,ie));let K=ie.get(N);K===void 0&&(K=t.getUniformBlockIndex(he,N.name),ie.set(N,K))}function _e(N,he){const K=f.get(he).get(N);u.get(he)!==K&&(t.uniformBlockBinding(he,K,N.__bindingPointIndex),u.set(he,K))}function Xe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},P=null,U={},p={},_=new WeakMap,x=[],g=null,h=!1,v=null,m=null,y=null,M=null,C=null,T=null,b=null,S=new Je(0,0,0),A=0,V=!1,Z=null,J=null,D=null,W=null,$=null,te.set(0,0,t.canvas.width,t.canvas.height),fe.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Se,disable:We,bindFramebuffer:Pe,drawBuffers:B,useProgram:Et,setBlending:we,setMaterial:ot,setFlipSided:ke,setCullFace:Fe,setLineWidth:$e,setPolygonOffset:vt,setScissorTest:Rt,activeTexture:R,bindTexture:E,unbindTexture:G,compressedTexImage2D:ae,compressedTexImage3D:ne,texImage2D:ee,texImage3D:Ne,updateUBOMapping:Ee,uniformBlockBinding:_e,texStorage2D:L,texStorage3D:ue,texSubImage2D:le,texSubImage3D:Te,compressedTexSubImage2D:de,compressedTexSubImage3D:me,scissor:Ae,viewport:be,reset:Xe}}function MD(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let x;const g=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,E){return h?new OffscreenCanvas(R,E):xc("canvas")}function m(R,E,G,ae){let ne=1;if((R.width>ae||R.height>ae)&&(ne=ae/Math.max(R.width,R.height)),ne<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const le=E?Ud:Math.floor,Te=le(ne*R.width),de=le(ne*R.height);x===void 0&&(x=v(Te,de));const me=G?v(Te,de):x;return me.width=Te,me.height=de,me.getContext("2d").drawImage(R,0,0,Te,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Te+"x"+de+")."),me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function y(R){return fv(R.width)&&fv(R.height)}function M(R){return a?!1:R.wrapS!==Xn||R.wrapT!==Xn||R.minFilter!==Zt&&R.minFilter!==Ln}function C(R,E){return R.generateMipmaps&&E&&R.minFilter!==Zt&&R.minFilter!==Ln}function T(R){t.generateMipmap(R)}function b(R,E,G,ae,ne=!1){if(a===!1)return E;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let le=E;if(E===t.RED&&(G===t.FLOAT&&(le=t.R32F),G===t.HALF_FLOAT&&(le=t.R16F),G===t.UNSIGNED_BYTE&&(le=t.R8)),E===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(le=t.R8UI),G===t.UNSIGNED_SHORT&&(le=t.R16UI),G===t.UNSIGNED_INT&&(le=t.R32UI),G===t.BYTE&&(le=t.R8I),G===t.SHORT&&(le=t.R16I),G===t.INT&&(le=t.R32I)),E===t.RG&&(G===t.FLOAT&&(le=t.RG32F),G===t.HALF_FLOAT&&(le=t.RG16F),G===t.UNSIGNED_BYTE&&(le=t.RG8)),E===t.RGBA){const Te=ne?mc:Qe.getTransfer(ae);G===t.FLOAT&&(le=t.RGBA32F),G===t.HALF_FLOAT&&(le=t.RGBA16F),G===t.UNSIGNED_BYTE&&(le=Te===rt?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(le=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(le=t.RGB5_A1)}return(le===t.R16F||le===t.R32F||le===t.RG16F||le===t.RG32F||le===t.RGBA16F||le===t.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function S(R,E,G){return C(R,G)===!0||R.isFramebufferTexture&&R.minFilter!==Zt&&R.minFilter!==Ln?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function A(R){return R===Zt||R===Fg||R===Vu?t.NEAREST:t.LINEAR}function V(R){const E=R.target;E.removeEventListener("dispose",V),J(E),E.isVideoTexture&&_.delete(E)}function Z(R){const E=R.target;E.removeEventListener("dispose",Z),W(E)}function J(R){const E=i.get(R);if(E.__webglInit===void 0)return;const G=R.source,ae=g.get(G);if(ae){const ne=ae[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&D(R),Object.keys(ae).length===0&&g.delete(G)}i.remove(R)}function D(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const G=R.source,ae=g.get(G);delete ae[E.__cacheKey],o.memory.textures--}function W(R){const E=R.texture,G=i.get(R),ae=i.get(E);if(ae.__webglTexture!==void 0&&(t.deleteTexture(ae.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(G.__webglFramebuffer[ne]))for(let le=0;le<G.__webglFramebuffer[ne].length;le++)t.deleteFramebuffer(G.__webglFramebuffer[ne][le]);else t.deleteFramebuffer(G.__webglFramebuffer[ne]);G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer[ne])}else{if(Array.isArray(G.__webglFramebuffer))for(let ne=0;ne<G.__webglFramebuffer.length;ne++)t.deleteFramebuffer(G.__webglFramebuffer[ne]);else t.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&t.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ne=0;ne<G.__webglColorRenderbuffer.length;ne++)G.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(G.__webglColorRenderbuffer[ne]);G.__webglDepthRenderbuffer&&t.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ne=0,le=E.length;ne<le;ne++){const Te=i.get(E[ne]);Te.__webglTexture&&(t.deleteTexture(Te.__webglTexture),o.memory.textures--),i.remove(E[ne])}i.remove(E),i.remove(R)}let $=0;function q(){$=0}function F(){const R=$;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),$+=1,R}function k(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function H(R,E){const G=i.get(R);if(R.isVideoTexture&&vt(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const ae=R.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(G,R,E);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+E)}function P(R,E){const G=i.get(R);if(R.version>0&&G.__version!==R.version){Se(G,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+E)}function U(R,E){const G=i.get(R);if(R.version>0&&G.__version!==R.version){Se(G,R,E);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+E)}function se(R,E){const G=i.get(R);if(R.version>0&&G.__version!==R.version){We(G,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+E)}const oe={[bd]:t.REPEAT,[Xn]:t.CLAMP_TO_EDGE,[Ld]:t.MIRRORED_REPEAT},te={[Zt]:t.NEAREST,[Fg]:t.NEAREST_MIPMAP_NEAREST,[Vu]:t.NEAREST_MIPMAP_LINEAR,[Ln]:t.LINEAR,[nR]:t.LINEAR_MIPMAP_NEAREST,[ha]:t.LINEAR_MIPMAP_LINEAR},fe={[gR]:t.NEVER,[ER]:t.ALWAYS,[vR]:t.LESS,[xR]:t.LEQUAL,[_R]:t.EQUAL,[MR]:t.GEQUAL,[yR]:t.GREATER,[SR]:t.NOTEQUAL};function ve(R,E,G){if(G?(t.texParameteri(R,t.TEXTURE_WRAP_S,oe[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,oe[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,oe[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,te[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,te[E.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==Xn||E.wrapT!==Xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,A(E.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,A(E.minFilter)),E.minFilter!==Zt&&E.minFilter!==Ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,fe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Zt||E.minFilter!==Vu&&E.minFilter!==ha||E.type===Ki&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===pa&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(R,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function ye(R,E){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",V));const ae=E.source;let ne=g.get(ae);ne===void 0&&(ne={},g.set(ae,ne));const le=k(E);if(le!==R.__cacheKey){ne[le]===void 0&&(ne[le]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ne[le].usedTimes++;const Te=ne[R.__cacheKey];Te!==void 0&&(ne[R.__cacheKey].usedTimes--,Te.usedTimes===0&&D(E)),R.__cacheKey=le,R.__webglTexture=ne[le].texture}return G}function Se(R,E,G){let ae=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ae=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ae=t.TEXTURE_3D);const ne=ye(R,E),le=E.source;n.bindTexture(ae,R.__webglTexture,t.TEXTURE0+G);const Te=i.get(le);if(le.version!==Te.__version||ne===!0){n.activeTexture(t.TEXTURE0+G);const de=Qe.getPrimaries(Qe.workingColorSpace),me=E.colorSpace===Nn?null:Qe.getPrimaries(E.colorSpace),L=E.colorSpace===Nn||de===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,L);const ue=M(E)&&y(E.image)===!1;let ee=m(E.image,ue,!1,u);ee=Rt(E,ee);const Ne=y(ee)||a,Ae=s.convert(E.format,E.colorSpace);let be=s.convert(E.type),Ee=b(E.internalFormat,Ae,be,E.colorSpace,E.isVideoTexture);ve(ae,E,Ne);let _e;const Xe=E.mipmaps,N=a&&E.isVideoTexture!==!0,he=Te.__version===void 0||ne===!0,ie=S(E,ee,Ne);if(E.isDepthTexture)Ee=t.DEPTH_COMPONENT,a?E.type===Ki?Ee=t.DEPTH_COMPONENT32F:E.type===$i?Ee=t.DEPTH_COMPONENT24:E.type===zr?Ee=t.DEPTH24_STENCIL8:Ee=t.DEPTH_COMPONENT16:E.type===Ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Vr&&Ee===t.DEPTH_COMPONENT&&E.type!==ip&&E.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=$i,be=s.convert(E.type)),E.format===io&&Ee===t.DEPTH_COMPONENT&&(Ee=t.DEPTH_STENCIL,E.type!==zr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=zr,be=s.convert(E.type))),he&&(N?n.texStorage2D(t.TEXTURE_2D,1,Ee,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,Ee,ee.width,ee.height,0,Ae,be,null));else if(E.isDataTexture)if(Xe.length>0&&Ne){N&&he&&n.texStorage2D(t.TEXTURE_2D,ie,Ee,Xe[0].width,Xe[0].height);for(let K=0,ce=Xe.length;K<ce;K++)_e=Xe[K],N?n.texSubImage2D(t.TEXTURE_2D,K,0,0,_e.width,_e.height,Ae,be,_e.data):n.texImage2D(t.TEXTURE_2D,K,Ee,_e.width,_e.height,0,Ae,be,_e.data);E.generateMipmaps=!1}else N?(he&&n.texStorage2D(t.TEXTURE_2D,ie,Ee,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ee.width,ee.height,Ae,be,ee.data)):n.texImage2D(t.TEXTURE_2D,0,Ee,ee.width,ee.height,0,Ae,be,ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){N&&he&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,Ee,Xe[0].width,Xe[0].height,ee.depth);for(let K=0,ce=Xe.length;K<ce;K++)_e=Xe[K],E.format!==Yn?Ae!==null?N?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,_e.width,_e.height,ee.depth,Ae,_e.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,Ee,_e.width,_e.height,ee.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,_e.width,_e.height,ee.depth,Ae,be,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,Ee,_e.width,_e.height,ee.depth,0,Ae,be,_e.data)}else{N&&he&&n.texStorage2D(t.TEXTURE_2D,ie,Ee,Xe[0].width,Xe[0].height);for(let K=0,ce=Xe.length;K<ce;K++)_e=Xe[K],E.format!==Yn?Ae!==null?N?n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,_e.width,_e.height,Ae,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,K,Ee,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?n.texSubImage2D(t.TEXTURE_2D,K,0,0,_e.width,_e.height,Ae,be,_e.data):n.texImage2D(t.TEXTURE_2D,K,Ee,_e.width,_e.height,0,Ae,be,_e.data)}else if(E.isDataArrayTexture)N?(he&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,Ee,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Ae,be,ee.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ee,ee.width,ee.height,ee.depth,0,Ae,be,ee.data);else if(E.isData3DTexture)N?(he&&n.texStorage3D(t.TEXTURE_3D,ie,Ee,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Ae,be,ee.data)):n.texImage3D(t.TEXTURE_3D,0,Ee,ee.width,ee.height,ee.depth,0,Ae,be,ee.data);else if(E.isFramebufferTexture){if(he)if(N)n.texStorage2D(t.TEXTURE_2D,ie,Ee,ee.width,ee.height);else{let K=ee.width,ce=ee.height;for(let Re=0;Re<ie;Re++)n.texImage2D(t.TEXTURE_2D,Re,Ee,K,ce,0,Ae,be,null),K>>=1,ce>>=1}}else if(Xe.length>0&&Ne){N&&he&&n.texStorage2D(t.TEXTURE_2D,ie,Ee,Xe[0].width,Xe[0].height);for(let K=0,ce=Xe.length;K<ce;K++)_e=Xe[K],N?n.texSubImage2D(t.TEXTURE_2D,K,0,0,Ae,be,_e):n.texImage2D(t.TEXTURE_2D,K,Ee,Ae,be,_e);E.generateMipmaps=!1}else N?(he&&n.texStorage2D(t.TEXTURE_2D,ie,Ee,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ae,be,ee)):n.texImage2D(t.TEXTURE_2D,0,Ee,Ae,be,ee);C(E,Ne)&&T(ae),Te.__version=le.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function We(R,E,G){if(E.image.length!==6)return;const ae=ye(R,E),ne=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+G);const le=i.get(ne);if(ne.version!==le.__version||ae===!0){n.activeTexture(t.TEXTURE0+G);const Te=Qe.getPrimaries(Qe.workingColorSpace),de=E.colorSpace===Nn?null:Qe.getPrimaries(E.colorSpace),me=E.colorSpace===Nn||Te===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const L=E.isCompressedTexture||E.image[0].isCompressedTexture,ue=E.image[0]&&E.image[0].isDataTexture,ee=[];for(let K=0;K<6;K++)!L&&!ue?ee[K]=m(E.image[K],!1,!0,c):ee[K]=ue?E.image[K].image:E.image[K],ee[K]=Rt(E,ee[K]);const Ne=ee[0],Ae=y(Ne)||a,be=s.convert(E.format,E.colorSpace),Ee=s.convert(E.type),_e=b(E.internalFormat,be,Ee,E.colorSpace),Xe=a&&E.isVideoTexture!==!0,N=le.__version===void 0||ae===!0;let he=S(E,Ne,Ae);ve(t.TEXTURE_CUBE_MAP,E,Ae);let ie;if(L){Xe&&N&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,_e,Ne.width,Ne.height);for(let K=0;K<6;K++){ie=ee[K].mipmaps;for(let ce=0;ce<ie.length;ce++){const Re=ie[ce];E.format!==Yn?be!==null?Xe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,0,0,Re.width,Re.height,be,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,_e,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,0,0,Re.width,Re.height,be,Ee,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,_e,Re.width,Re.height,0,be,Ee,Re.data)}}}else{ie=E.mipmaps,Xe&&N&&(ie.length>0&&he++,n.texStorage2D(t.TEXTURE_CUBE_MAP,he,_e,ee[0].width,ee[0].height));for(let K=0;K<6;K++)if(ue){Xe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ee[K].width,ee[K].height,be,Ee,ee[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,_e,ee[K].width,ee[K].height,0,be,Ee,ee[K].data);for(let ce=0;ce<ie.length;ce++){const Ye=ie[ce].image[K].image;Xe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,0,0,Ye.width,Ye.height,be,Ee,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,_e,Ye.width,Ye.height,0,be,Ee,Ye.data)}}else{Xe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,be,Ee,ee[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,_e,be,Ee,ee[K]);for(let ce=0;ce<ie.length;ce++){const Re=ie[ce];Xe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,0,0,be,Ee,Re.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,_e,be,Ee,Re.image[K])}}}C(E,Ae)&&T(t.TEXTURE_CUBE_MAP),le.__version=ne.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Pe(R,E,G,ae,ne,le){const Te=s.convert(G.format,G.colorSpace),de=s.convert(G.type),me=b(G.internalFormat,Te,de,G.colorSpace);if(!i.get(E).__hasExternalTextures){const ue=Math.max(1,E.width>>le),ee=Math.max(1,E.height>>le);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,le,me,ue,ee,E.depth,0,Te,de,null):n.texImage2D(ne,le,me,ue,ee,0,Te,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),$e(E)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,ne,i.get(G).__webglTexture,0,Fe(E)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ae,ne,i.get(G).__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function B(R,E,G){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let ae=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(G||$e(E)){const ne=E.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Ki?ae=t.DEPTH_COMPONENT32F:ne.type===$i&&(ae=t.DEPTH_COMPONENT24));const le=Fe(E);$e(E)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,ae,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,le,ae,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,ae,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const ae=Fe(E);G&&$e(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,t.DEPTH24_STENCIL8,E.width,E.height):$e(E)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const ae=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ne=0;ne<ae.length;ne++){const le=ae[ne],Te=s.convert(le.format,le.colorSpace),de=s.convert(le.type),me=b(le.internalFormat,Te,de,le.colorSpace),L=Fe(E);G&&$e(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,L,me,E.width,E.height):$e(E)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,L,me,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,me,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Et(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);const ae=i.get(E.depthTexture).__webglTexture,ne=Fe(E);if(E.depthTexture.format===Vr)$e(E)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0);else if(E.depthTexture.format===io)$e(E)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Me(R){const E=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Et(E.__webglFramebuffer,R)}else if(G){E.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ae]),E.__webglDepthbuffer[ae]=t.createRenderbuffer(),B(E.__webglDepthbuffer[ae],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),B(E.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Le(R,E,G){const ae=i.get(R);E!==void 0&&Pe(ae.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Me(R)}function we(R){const E=R.texture,G=i.get(R),ae=i.get(E);R.addEventListener("dispose",Z),R.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=t.createTexture()),ae.__version=E.version,o.memory.textures++);const ne=R.isWebGLCubeRenderTarget===!0,le=R.isWebGLMultipleRenderTargets===!0,Te=y(R)||a;if(ne){G.__webglFramebuffer=[];for(let de=0;de<6;de++)if(a&&E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[de]=[];for(let me=0;me<E.mipmaps.length;me++)G.__webglFramebuffer[de][me]=t.createFramebuffer()}else G.__webglFramebuffer[de]=t.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)G.__webglFramebuffer[de]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(le)if(r.drawBuffers){const de=R.texture;for(let me=0,L=de.length;me<L;me++){const ue=i.get(de[me]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&$e(R)===!1){const de=le?E:[E];G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let me=0;me<de.length;me++){const L=de[me];G.__webglColorRenderbuffer[me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[me]);const ue=s.convert(L.format,L.colorSpace),ee=s.convert(L.type),Ne=b(L.internalFormat,ue,ee,L.colorSpace,R.isXRRenderTarget===!0),Ae=Fe(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,Ne,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,G.__webglColorRenderbuffer[me])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),B(G.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,ae.__webglTexture),ve(t.TEXTURE_CUBE_MAP,E,Te);for(let de=0;de<6;de++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)Pe(G.__webglFramebuffer[de][me],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,me);else Pe(G.__webglFramebuffer[de],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);C(E,Te)&&T(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){const de=R.texture;for(let me=0,L=de.length;me<L;me++){const ue=de[me],ee=i.get(ue);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture),ve(t.TEXTURE_2D,ue,Te),Pe(G.__webglFramebuffer,R,ue,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,0),C(ue,Te)&&T(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?de=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(de,ae.__webglTexture),ve(de,E,Te),a&&E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)Pe(G.__webglFramebuffer[me],R,E,t.COLOR_ATTACHMENT0,de,me);else Pe(G.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,de,0);C(E,Te)&&T(de),n.unbindTexture()}R.depthBuffer&&Me(R)}function ot(R){const E=y(R)||a,G=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ae=0,ne=G.length;ae<ne;ae++){const le=G[ae];if(C(le,E)){const Te=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,de=i.get(le).__webglTexture;n.bindTexture(Te,de),T(Te),n.unbindTexture()}}}function ke(R){if(a&&R.samples>0&&$e(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],G=R.width,ae=R.height;let ne=t.COLOR_BUFFER_BIT;const le=[],Te=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=i.get(R),me=R.isWebGLMultipleRenderTargets===!0;if(me)for(let L=0;L<E.length;L++)n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+L,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+L,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let L=0;L<E.length;L++){le.push(t.COLOR_ATTACHMENT0+L),R.depthBuffer&&le.push(Te);const ue=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(ue===!1&&(R.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),me&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[L]),ue===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Te]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Te])),me){const ee=i.get(E[L]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,G,ae,0,0,G,ae,ne,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,le)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),me)for(let L=0;L<E.length;L++){n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+L,t.RENDERBUFFER,de.__webglColorRenderbuffer[L]);const ue=i.get(E[L]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+L,t.TEXTURE_2D,ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function Fe(R){return Math.min(f,R.samples)}function $e(R){const E=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function vt(R){const E=o.render.frame;_.get(R)!==E&&(_.set(R,E),R.update())}function Rt(R,E){const G=R.colorSpace,ae=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Dd||G!==bi&&G!==Nn&&(Qe.getTransfer(G)===rt?a===!1?e.has("EXT_sRGB")===!0&&ae===Yn?(R.format=Dd,R.minFilter=Ln,R.generateMipmaps=!1):E=$y.sRGBToLinear(E):(ae!==Yn||ne!==lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}this.allocateTextureUnit=F,this.resetTextureUnits=q,this.setTexture2D=H,this.setTexture2DArray=P,this.setTexture3D=U,this.setTextureCube=se,this.rebindTextures=Le,this.setupRenderTarget=we,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=$e}function ED(t,e,n){const i=n.isWebGL2;function r(s,o=Nn){let a;const l=Qe.getTransfer(o);if(s===lr)return t.UNSIGNED_BYTE;if(s===Hy)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Gy)return t.UNSIGNED_SHORT_5_5_5_1;if(s===iR)return t.BYTE;if(s===rR)return t.SHORT;if(s===ip)return t.UNSIGNED_SHORT;if(s===Vy)return t.INT;if(s===$i)return t.UNSIGNED_INT;if(s===Ki)return t.FLOAT;if(s===pa)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===sR)return t.ALPHA;if(s===Yn)return t.RGBA;if(s===oR)return t.LUMINANCE;if(s===aR)return t.LUMINANCE_ALPHA;if(s===Vr)return t.DEPTH_COMPONENT;if(s===io)return t.DEPTH_STENCIL;if(s===Dd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===lR)return t.RED;if(s===Wy)return t.RED_INTEGER;if(s===cR)return t.RG;if(s===jy)return t.RG_INTEGER;if(s===Xy)return t.RGBA_INTEGER;if(s===Hu||s===Gu||s===Wu||s===ju)if(l===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Hu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Gu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Wu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ju)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Hu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Gu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Wu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ju)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Og||s===kg||s===Bg||s===zg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Og)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===kg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Bg)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===uR)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Vg||s===Hg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Vg)return l===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Hg)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Gg||s===Wg||s===jg||s===Xg||s===Yg||s===qg||s===$g||s===Kg||s===Zg||s===Qg||s===Jg||s===ev||s===tv||s===nv)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Gg)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wg)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===jg)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xg)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Yg)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===qg)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===$g)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Kg)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zg)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qg)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Jg)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ev)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===tv)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===nv)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Xu||s===iv||s===rv)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Xu)return l===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===iv)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===rv)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===fR||s===sv||s===ov||s===av)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Xu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===sv)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ov)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===av)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===zr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class TD extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Do extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wD={type:"move"};class vf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Do,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Do,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Do,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const g=n.getJointPose(x,i),h=this._getHandJoint(c,x);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wD)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Do;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class AD extends xn{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Vr,u!==Vr&&u!==io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Vr&&(i=$i),i===void 0&&u===io&&(i=zr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class CD extends ts{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,_=null;const x=n.getContextAttributes();let g=null,h=null;const v=[],m=[],y=new Dn;y.layers.enable(1),y.viewport=new It;const M=new Dn;M.layers.enable(2),M.viewport=new It;const C=[y,M],T=new TD;T.layers.enable(1),T.layers.enable(2);let b=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let U=v[P];return U===void 0&&(U=new vf,v[P]=U),U.getTargetRaySpace()},this.getControllerGrip=function(P){let U=v[P];return U===void 0&&(U=new vf,v[P]=U),U.getGripSpace()},this.getHand=function(P){let U=v[P];return U===void 0&&(U=new vf,v[P]=U),U.getHandSpace()};function A(P){const U=m.indexOf(P.inputSource);if(U===-1)return;const se=v[U];se!==void 0&&(se.update(P.inputSource,P.frame,c||o),se.dispatchEvent({type:P.type,data:P.inputSource}))}function V(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",Z);for(let P=0;P<v.length;P++){const U=m[P];U!==null&&(m[P]=null,v[P].disconnect(U))}b=null,S=null,e.setRenderTarget(g),p=null,d=null,f=null,r=null,h=null,H.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){s=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){a=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(P){c=P},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(P){if(r=P,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",V),r.addEventListener("inputsourceschange",Z),x.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const U={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,U),r.updateRenderState({baseLayer:p}),h=new qr(p.framebufferWidth,p.framebufferHeight,{format:Yn,type:lr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let U=null,se=null,oe=null;x.depth&&(oe=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,U=x.stencil?io:Vr,se=x.stencil?zr:$i);const te={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(te),r.updateRenderState({layers:[d]}),h=new qr(d.textureWidth,d.textureHeight,{format:Yn,type:lr,depthTexture:new AD(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const fe=e.properties.get(h);fe.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),H.setContext(r),H.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Z(P){for(let U=0;U<P.removed.length;U++){const se=P.removed[U],oe=m.indexOf(se);oe>=0&&(m[oe]=null,v[oe].disconnect(se))}for(let U=0;U<P.added.length;U++){const se=P.added[U];let oe=m.indexOf(se);if(oe===-1){for(let fe=0;fe<v.length;fe++)if(fe>=m.length){m.push(se),oe=fe;break}else if(m[fe]===null){m[fe]=se,oe=fe;break}if(oe===-1)break}const te=v[oe];te&&te.connect(se)}}const J=new z,D=new z;function W(P,U,se){J.setFromMatrixPosition(U.matrixWorld),D.setFromMatrixPosition(se.matrixWorld);const oe=J.distanceTo(D),te=U.projectionMatrix.elements,fe=se.projectionMatrix.elements,ve=te[14]/(te[10]-1),ye=te[14]/(te[10]+1),Se=(te[9]+1)/te[5],We=(te[9]-1)/te[5],Pe=(te[8]-1)/te[0],B=(fe[8]+1)/fe[0],Et=ve*Pe,Me=ve*B,Le=oe/(-Pe+B),we=Le*-Pe;U.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(we),P.translateZ(Le),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();const ot=ve+Le,ke=ye+Le,Fe=Et-we,$e=Me+(oe-we),vt=Se*ye/ke*ot,Rt=We*ye/ke*ot;P.projectionMatrix.makePerspective(Fe,$e,vt,Rt,ot,ke),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}function $(P,U){U===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(U.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(r===null)return;T.near=M.near=y.near=P.near,T.far=M.far=y.far=P.far,(b!==T.near||S!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),b=T.near,S=T.far);const U=P.parent,se=T.cameras;$(T,U);for(let oe=0;oe<se.length;oe++)$(se[oe],U);se.length===2?W(T,y,M):T.projectionMatrix.copy(y.projectionMatrix),q(P,T,U)};function q(P,U,se){se===null?P.matrix.copy(U.matrixWorld):(P.matrix.copy(se.matrixWorld),P.matrix.invert(),P.matrix.multiply(U.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(U.projectionMatrix),P.projectionMatrixInverse.copy(U.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=Nd*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(P){l=P,d!==null&&(d.fixedFoveation=P),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=P)};let F=null;function k(P,U){if(u=U.getViewerPose(c||o),_=U,u!==null){const se=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let oe=!1;se.length!==T.cameras.length&&(T.cameras.length=0,oe=!0);for(let te=0;te<se.length;te++){const fe=se[te];let ve=null;if(p!==null)ve=p.getViewport(fe);else{const Se=f.getViewSubImage(d,fe);ve=Se.viewport,te===0&&(e.setRenderTargetTextures(h,Se.colorTexture,d.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(h))}let ye=C[te];ye===void 0&&(ye=new Dn,ye.layers.enable(te),ye.viewport=new It,C[te]=ye),ye.matrix.fromArray(fe.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(fe.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(ve.x,ve.y,ve.width,ve.height),te===0&&(T.matrix.copy(ye.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),oe===!0&&T.cameras.push(ye)}}for(let se=0;se<v.length;se++){const oe=m[se],te=v[se];oe!==null&&te!==void 0&&te.update(oe,U,c||o)}F&&F(P,U),U.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:U}),_=null}const H=new sS;H.setAnimationLoop(k),this.setAnimationLoop=function(P){F=P},this.dispose=function(){}}}function RD(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,tS(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,v,m,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),f(g,h)):h.isMeshPhongMaterial?(s(g,h),u(g,h)):h.isMeshStandardMaterial?(s(g,h),d(g,h),h.isMeshPhysicalMaterial&&p(g,h,y)):h.isMeshMatcapMaterial?(s(g,h),_(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),x(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,v,m):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===cn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===cn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(g.envMap.value=v,g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap){g.lightMap.value=h.lightMap;const m=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=h.lightMapIntensity*m,n(h.lightMap,g.lightMapTransform)}h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,v,m){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*v,g.scale.value=m*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function f(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function d(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),e.get(h).envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,v){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===cn&&g.clearcoatNormalScale.value.negate())),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,h){h.matcap&&(g.matcap.value=h.matcap)}function x(g,h){const v=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function PD(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,m){const y=m.program;i.uniformBlockBinding(v,y)}function c(v,m){let y=r[v.id];y===void 0&&(_(v),y=u(v),r[v.id]=y,v.addEventListener("dispose",g));const M=m.program;i.updateUBOMapping(v,M);const C=e.render.frame;s[v.id]!==C&&(d(v),s[v.id]=C)}function u(v){const m=f();v.__bindingPointIndex=m;const y=t.createBuffer(),M=v.__size,C=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,M,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,m,y),y}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const m=r[v.id],y=v.uniforms,M=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,m);for(let C=0,T=y.length;C<T;C++){const b=y[C];if(p(b,C,M)===!0){const S=b.__offset,A=Array.isArray(b.value)?b.value:[b.value];let V=0;for(let Z=0;Z<A.length;Z++){const J=A[Z],D=x(J);typeof J=="number"?(b.__data[0]=J,t.bufferSubData(t.UNIFORM_BUFFER,S+V,b.__data)):J.isMatrix3?(b.__data[0]=J.elements[0],b.__data[1]=J.elements[1],b.__data[2]=J.elements[2],b.__data[3]=J.elements[0],b.__data[4]=J.elements[3],b.__data[5]=J.elements[4],b.__data[6]=J.elements[5],b.__data[7]=J.elements[0],b.__data[8]=J.elements[6],b.__data[9]=J.elements[7],b.__data[10]=J.elements[8],b.__data[11]=J.elements[0]):(J.toArray(b.__data,V),V+=D.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,S,b.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,m,y){const M=v.value;if(y[m]===void 0){if(typeof M=="number")y[m]=M;else{const C=Array.isArray(M)?M:[M],T=[];for(let b=0;b<C.length;b++)T.push(C[b].clone());y[m]=T}return!0}else if(typeof M=="number"){if(y[m]!==M)return y[m]=M,!0}else{const C=Array.isArray(y[m])?y[m]:[y[m]],T=Array.isArray(M)?M:[M];for(let b=0;b<C.length;b++){const S=C[b];if(S.equals(T[b])===!1)return S.copy(T[b]),!0}}return!1}function _(v){const m=v.uniforms;let y=0;const M=16;let C=0;for(let T=0,b=m.length;T<b;T++){const S=m[T],A={boundary:0,storage:0},V=Array.isArray(S.value)?S.value:[S.value];for(let Z=0,J=V.length;Z<J;Z++){const D=V[Z],W=x(D);A.boundary+=W.boundary,A.storage+=W.storage}if(S.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,T>0){C=y%M;const Z=M-C;C!==0&&Z-A.boundary<0&&(y+=M-C,S.__offset=y)}y+=A.storage}return C=y%M,C>0&&(y+=M-C),v.__size=y,v.__cache={},this}function x(v){const m={boundary:0,storage:0};return typeof v=="number"?(m.boundary=4,m.storage=4):v.isVector2?(m.boundary=8,m.storage=8):v.isVector3||v.isColor?(m.boundary=16,m.storage=12):v.isVector4?(m.boundary=16,m.storage=16):v.isMatrix3?(m.boundary=48,m.storage=48):v.isMatrix4?(m.boundary=64,m.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),m}function g(v){const m=v.target;m.removeEventListener("dispose",g);const y=o.indexOf(m.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[m.id]),delete r[m.id],delete s[m.id]}function h(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class uS{constructor(e={}){const{canvas:n=AR(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,g=null;const h=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this._useLegacyLights=!1,this.toneMapping=ar,this.toneMappingExposure=1;const m=this;let y=!1,M=0,C=0,T=null,b=-1,S=null;const A=new It,V=new It;let Z=null;const J=new Je(0);let D=0,W=n.width,$=n.height,q=1,F=null,k=null;const H=new It(0,0,W,$),P=new It(0,0,W,$);let U=!1;const se=new rS;let oe=!1,te=!1,fe=null;const ve=new Ot,ye=new He,Se=new z,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return T===null?q:1}let B=i;function Et(w,O){for(let j=0;j<w.length;j++){const X=w[j],Y=n.getContext(X,O);if(Y!==null)return Y}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${np}`),n.addEventListener("webglcontextlost",Xe,!1),n.addEventListener("webglcontextrestored",N,!1),n.addEventListener("webglcontextcreationerror",he,!1),B===null){const O=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&O.shift(),B=Et(O,w),B===null)throw Et(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Me,Le,we,ot,ke,Fe,$e,vt,Rt,R,E,G,ae,ne,le,Te,de,me,L,ue,ee,Ne,Ae,be;function Ee(){Me=new BL(B),Le=new DL(B,Me,e),Me.init(Le),Ne=new ED(B,Me,Le),we=new SD(B,Me,Le),ot=new HL(B),ke=new aD,Fe=new MD(B,Me,we,ke,Le,Ne,ot),$e=new UL(m),vt=new kL(m),Rt=new ZR(B,Le),Ae=new bL(B,Me,Rt,Le),R=new zL(B,Rt,ot,Ae),E=new XL(B,R,Rt,ot),L=new jL(B,Le,Fe),Te=new NL(ke),G=new oD(m,$e,vt,Me,Le,Ae,Te),ae=new RD(m,ke),ne=new cD,le=new mD(Me,Le),me=new PL(m,$e,vt,we,E,d,l),de=new yD(m,E,Le),be=new PD(B,ot,Le,we),ue=new LL(B,Me,ot,Le),ee=new VL(B,Me,ot,Le),ot.programs=G.programs,m.capabilities=Le,m.extensions=Me,m.properties=ke,m.renderLists=ne,m.shadowMap=de,m.state=we,m.info=ot}Ee();const _e=new CD(m,B);this.xr=_e,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=Me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(W,$,!1))},this.getSize=function(w){return w.set(W,$)},this.setSize=function(w,O,j=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,$=O,n.width=Math.floor(w*q),n.height=Math.floor(O*q),j===!0&&(n.style.width=w+"px",n.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(W*q,$*q).floor()},this.setDrawingBufferSize=function(w,O,j){W=w,$=O,q=j,n.width=Math.floor(w*j),n.height=Math.floor(O*j),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(H)},this.setViewport=function(w,O,j,X){w.isVector4?H.set(w.x,w.y,w.z,w.w):H.set(w,O,j,X),we.viewport(A.copy(H).multiplyScalar(q).floor())},this.getScissor=function(w){return w.copy(P)},this.setScissor=function(w,O,j,X){w.isVector4?P.set(w.x,w.y,w.z,w.w):P.set(w,O,j,X),we.scissor(V.copy(P).multiplyScalar(q).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(w){we.setScissorTest(U=w)},this.setOpaqueSort=function(w){F=w},this.setTransparentSort=function(w){k=w},this.getClearColor=function(w){return w.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(w=!0,O=!0,j=!0){let X=0;if(w){let Y=!1;if(T!==null){const ge=T.texture.format;Y=ge===Xy||ge===jy||ge===Wy}if(Y){const ge=T.texture.type,Ce=ge===lr||ge===$i||ge===ip||ge===zr||ge===Hy||ge===Gy,Ue=me.getClearColor(),Ie=me.getClearAlpha(),Ve=Ue.r,Oe=Ue.g,Be=Ue.b;Ce?(p[0]=Ve,p[1]=Oe,p[2]=Be,p[3]=Ie,B.clearBufferuiv(B.COLOR,0,p)):(_[0]=Ve,_[1]=Oe,_[2]=Be,_[3]=Ie,B.clearBufferiv(B.COLOR,0,_))}else X|=B.COLOR_BUFFER_BIT}O&&(X|=B.DEPTH_BUFFER_BIT),j&&(X|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Xe,!1),n.removeEventListener("webglcontextrestored",N,!1),n.removeEventListener("webglcontextcreationerror",he,!1),ne.dispose(),le.dispose(),ke.dispose(),$e.dispose(),vt.dispose(),E.dispose(),Ae.dispose(),be.dispose(),G.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",wn),_e.removeEventListener("sessionend",et),fe&&(fe.dispose(),fe=null),Xt.stop()};function Xe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=ot.autoReset,O=de.enabled,j=de.autoUpdate,X=de.needsUpdate,Y=de.type;Ee(),ot.autoReset=w,de.enabled=O,de.autoUpdate=j,de.needsUpdate=X,de.type=Y}function he(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ie(w){const O=w.target;O.removeEventListener("dispose",ie),K(O)}function K(w){ce(w),ke.remove(w)}function ce(w){const O=ke.get(w).programs;O!==void 0&&(O.forEach(function(j){G.releaseProgram(j)}),w.isShaderMaterial&&G.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,j,X,Y,ge){O===null&&(O=We);const Ce=Y.isMesh&&Y.matrixWorld.determinant()<0,Ue=dS(w,O,j,X,Y);we.setMaterial(X,Ce);let Ie=j.index,Ve=1;if(X.wireframe===!0){if(Ie=R.getWireframeAttribute(j),Ie===void 0)return;Ve=2}const Oe=j.drawRange,Be=j.attributes.position;let pt=Oe.start*Ve,fn=(Oe.start+Oe.count)*Ve;ge!==null&&(pt=Math.max(pt,ge.start*Ve),fn=Math.min(fn,(ge.start+ge.count)*Ve)),Ie!==null?(pt=Math.max(pt,0),fn=Math.min(fn,Ie.count)):Be!=null&&(pt=Math.max(pt,0),fn=Math.min(fn,Be.count));const Pt=fn-pt;if(Pt<0||Pt===1/0)return;Ae.setup(Y,X,Ue,j,Ie);let li,dt=ue;if(Ie!==null&&(li=Rt.get(Ie),dt=ee,dt.setIndex(li)),Y.isMesh)X.wireframe===!0?(we.setLineWidth(X.wireframeLinewidth*Pe()),dt.setMode(B.LINES)):dt.setMode(B.TRIANGLES);else if(Y.isLine){let qe=X.linewidth;qe===void 0&&(qe=1),we.setLineWidth(qe*Pe()),Y.isLineSegments?dt.setMode(B.LINES):Y.isLineLoop?dt.setMode(B.LINE_LOOP):dt.setMode(B.LINE_STRIP)}else Y.isPoints?dt.setMode(B.POINTS):Y.isSprite&&dt.setMode(B.TRIANGLES);if(Y.isInstancedMesh)dt.renderInstances(pt,Pt,Y.count);else if(j.isInstancedBufferGeometry){const qe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Zc=Math.min(j.instanceCount,qe);dt.renderInstances(pt,Pt,Zc)}else dt.render(pt,Pt)};function Re(w,O,j){w.transparent===!0&&w.side===vi&&w.forceSinglePass===!1?(w.side=cn,w.needsUpdate=!0,Ra(w,O,j),w.side=hr,w.needsUpdate=!0,Ra(w,O,j),w.side=vi):Ra(w,O,j)}this.compile=function(w,O,j=null){j===null&&(j=w),g=le.get(j),g.init(),v.push(g),j.traverseVisible(function(Y){Y.isLight&&Y.layers.test(O.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),w!==j&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(O.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights(m._useLegacyLights);const X=new Set;return w.traverse(function(Y){const ge=Y.material;if(ge)if(Array.isArray(ge))for(let Ce=0;Ce<ge.length;Ce++){const Ue=ge[Ce];Re(Ue,j,Y),X.add(Ue)}else Re(ge,j,Y),X.add(ge)}),v.pop(),g=null,X},this.compileAsync=function(w,O,j=null){const X=this.compile(w,O,j);return new Promise(Y=>{function ge(){if(X.forEach(function(Ce){ke.get(Ce).currentProgram.isReady()&&X.delete(Ce)}),X.size===0){Y(w);return}setTimeout(ge,10)}Me.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Ye=null;function _t(w){Ye&&Ye(w)}function wn(){Xt.stop()}function et(){Xt.start()}const Xt=new sS;Xt.setAnimationLoop(_t),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(w){Ye=w,_e.setAnimationLoop(w),w===null?Xt.stop():Xt.start()},_e.addEventListener("sessionstart",wn),_e.addEventListener("sessionend",et),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(O),O=_e.getCamera()),w.isScene===!0&&w.onBeforeRender(m,w,O,T),g=le.get(w,v.length),g.init(),v.push(g),ve.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),se.setFromProjectionMatrix(ve),te=this.localClippingEnabled,oe=Te.init(this.clippingPlanes,te),x=ne.get(w,h.length),x.init(),h.push(x),Qn(w,O,0,m.sortObjects),x.finish(),m.sortObjects===!0&&x.sort(F,k),this.info.render.frame++,oe===!0&&Te.beginShadows();const j=g.state.shadowsArray;if(de.render(j,w,O),oe===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),me.render(x,w),g.setupLights(m._useLegacyLights),O.isArrayCamera){const X=O.cameras;for(let Y=0,ge=X.length;Y<ge;Y++){const Ce=X[Y];fp(x,w,Ce,Ce.viewport)}}else fp(x,w,O);T!==null&&(Fe.updateMultisampleRenderTarget(T),Fe.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(m,w,O),Ae.resetDefaultState(),b=-1,S=null,v.pop(),v.length>0?g=v[v.length-1]:g=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function Qn(w,O,j,X){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||se.intersectsSprite(w)){X&&Se.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ve);const Ce=E.update(w),Ue=w.material;Ue.visible&&x.push(w,Ce,Ue,j,Se.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||se.intersectsObject(w))){const Ce=E.update(w),Ue=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Se.copy(w.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Se.copy(Ce.boundingSphere.center)),Se.applyMatrix4(w.matrixWorld).applyMatrix4(ve)),Array.isArray(Ue)){const Ie=Ce.groups;for(let Ve=0,Oe=Ie.length;Ve<Oe;Ve++){const Be=Ie[Ve],pt=Ue[Be.materialIndex];pt&&pt.visible&&x.push(w,Ce,pt,j,Se.z,Be)}}else Ue.visible&&x.push(w,Ce,Ue,j,Se.z,null)}}const ge=w.children;for(let Ce=0,Ue=ge.length;Ce<Ue;Ce++)Qn(ge[Ce],O,j,X)}function fp(w,O,j,X){const Y=w.opaque,ge=w.transmissive,Ce=w.transparent;g.setupLightsView(j),oe===!0&&Te.setGlobalState(m.clippingPlanes,j),ge.length>0&&fS(Y,ge,O,j),X&&we.viewport(A.copy(X)),Y.length>0&&Ca(Y,O,j),ge.length>0&&Ca(ge,O,j),Ce.length>0&&Ca(Ce,O,j),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function fS(w,O,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const ge=Le.isWebGL2;fe===null&&(fe=new qr(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?pa:lr,minFilter:ha,samples:ge?4:0})),m.getDrawingBufferSize(ye),ge?fe.setSize(ye.x,ye.y):fe.setSize(Ud(ye.x),Ud(ye.y));const Ce=m.getRenderTarget();m.setRenderTarget(fe),m.getClearColor(J),D=m.getClearAlpha(),D<1&&m.setClearColor(16777215,.5),m.clear();const Ue=m.toneMapping;m.toneMapping=ar,Ca(w,j,X),Fe.updateMultisampleRenderTarget(fe),Fe.updateRenderTargetMipmap(fe);let Ie=!1;for(let Ve=0,Oe=O.length;Ve<Oe;Ve++){const Be=O[Ve],pt=Be.object,fn=Be.geometry,Pt=Be.material,li=Be.group;if(Pt.side===vi&&pt.layers.test(X.layers)){const dt=Pt.side;Pt.side=cn,Pt.needsUpdate=!0,dp(pt,j,X,fn,Pt,li),Pt.side=dt,Pt.needsUpdate=!0,Ie=!0}}Ie===!0&&(Fe.updateMultisampleRenderTarget(fe),Fe.updateRenderTargetMipmap(fe)),m.setRenderTarget(Ce),m.setClearColor(J,D),m.toneMapping=Ue}function Ca(w,O,j){const X=O.isScene===!0?O.overrideMaterial:null;for(let Y=0,ge=w.length;Y<ge;Y++){const Ce=w[Y],Ue=Ce.object,Ie=Ce.geometry,Ve=X===null?Ce.material:X,Oe=Ce.group;Ue.layers.test(j.layers)&&dp(Ue,O,j,Ie,Ve,Oe)}}function dp(w,O,j,X,Y,ge){w.onBeforeRender(m,O,j,X,Y,ge),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(m,O,j,X,w,ge),Y.transparent===!0&&Y.side===vi&&Y.forceSinglePass===!1?(Y.side=cn,Y.needsUpdate=!0,m.renderBufferDirect(j,O,X,Y,w,ge),Y.side=hr,Y.needsUpdate=!0,m.renderBufferDirect(j,O,X,Y,w,ge),Y.side=vi):m.renderBufferDirect(j,O,X,Y,w,ge),w.onAfterRender(m,O,j,X,Y,ge)}function Ra(w,O,j){O.isScene!==!0&&(O=We);const X=ke.get(w),Y=g.state.lights,ge=g.state.shadowsArray,Ce=Y.state.version,Ue=G.getParameters(w,Y.state,ge,O,j),Ie=G.getProgramCacheKey(Ue);let Ve=X.programs;X.environment=w.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(w.isMeshStandardMaterial?vt:$e).get(w.envMap||X.environment),Ve===void 0&&(w.addEventListener("dispose",ie),Ve=new Map,X.programs=Ve);let Oe=Ve.get(Ie);if(Oe!==void 0){if(X.currentProgram===Oe&&X.lightsStateVersion===Ce)return pp(w,Ue),Oe}else Ue.uniforms=G.getUniforms(w),w.onBuild(j,Ue,m),w.onBeforeCompile(Ue,m),Oe=G.acquireProgram(Ue,Ie),Ve.set(Ie,Oe),X.uniforms=Ue.uniforms;const Be=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Be.clippingPlanes=Te.uniform),pp(w,Ue),X.needsLights=pS(w),X.lightsStateVersion=Ce,X.needsLights&&(Be.ambientLightColor.value=Y.state.ambient,Be.lightProbe.value=Y.state.probe,Be.directionalLights.value=Y.state.directional,Be.directionalLightShadows.value=Y.state.directionalShadow,Be.spotLights.value=Y.state.spot,Be.spotLightShadows.value=Y.state.spotShadow,Be.rectAreaLights.value=Y.state.rectArea,Be.ltc_1.value=Y.state.rectAreaLTC1,Be.ltc_2.value=Y.state.rectAreaLTC2,Be.pointLights.value=Y.state.point,Be.pointLightShadows.value=Y.state.pointShadow,Be.hemisphereLights.value=Y.state.hemi,Be.directionalShadowMap.value=Y.state.directionalShadowMap,Be.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Be.spotShadowMap.value=Y.state.spotShadowMap,Be.spotLightMatrix.value=Y.state.spotLightMatrix,Be.spotLightMap.value=Y.state.spotLightMap,Be.pointShadowMap.value=Y.state.pointShadowMap,Be.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.currentProgram=Oe,X.uniformsList=null,Oe}function hp(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=Il.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function pp(w,O){const j=ke.get(w);j.outputColorSpace=O.outputColorSpace,j.instancing=O.instancing,j.instancingColor=O.instancingColor,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}function dS(w,O,j,X,Y){O.isScene!==!0&&(O=We),Fe.resetTextureUnits();const ge=O.fog,Ce=X.isMeshStandardMaterial?O.environment:null,Ue=T===null?m.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:bi,Ie=(X.isMeshStandardMaterial?vt:$e).get(X.envMap||Ce),Ve=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Oe=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Be=!!j.morphAttributes.position,pt=!!j.morphAttributes.normal,fn=!!j.morphAttributes.color;let Pt=ar;X.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Pt=m.toneMapping);const li=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,dt=li!==void 0?li.length:0,qe=ke.get(X),Zc=g.state.lights;if(oe===!0&&(te===!0||w!==S)){const dn=w===S&&X.id===b;Te.setState(X,w,dn)}let xt=!1;X.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Zc.state.version||qe.outputColorSpace!==Ue||Y.isInstancedMesh&&qe.instancing===!1||!Y.isInstancedMesh&&qe.instancing===!0||Y.isSkinnedMesh&&qe.skinning===!1||!Y.isSkinnedMesh&&qe.skinning===!0||Y.isInstancedMesh&&qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&qe.instancingColor===!1&&Y.instanceColor!==null||qe.envMap!==Ie||X.fog===!0&&qe.fog!==ge||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Te.numPlanes||qe.numIntersection!==Te.numIntersection)||qe.vertexAlphas!==Ve||qe.vertexTangents!==Oe||qe.morphTargets!==Be||qe.morphNormals!==pt||qe.morphColors!==fn||qe.toneMapping!==Pt||Le.isWebGL2===!0&&qe.morphTargetsCount!==dt)&&(xt=!0):(xt=!0,qe.__version=X.version);let _r=qe.currentProgram;xt===!0&&(_r=Ra(X,O,Y));let mp=!1,co=!1,Qc=!1;const Yt=_r.getUniforms(),xr=qe.uniforms;if(we.useProgram(_r.program)&&(mp=!0,co=!0,Qc=!0),X.id!==b&&(b=X.id,co=!0),mp||S!==w){Yt.setValue(B,"projectionMatrix",w.projectionMatrix),Yt.setValue(B,"viewMatrix",w.matrixWorldInverse);const dn=Yt.map.cameraPosition;dn!==void 0&&dn.setValue(B,Se.setFromMatrixPosition(w.matrixWorld)),Le.logarithmicDepthBuffer&&Yt.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Yt.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,co=!0,Qc=!0)}if(Y.isSkinnedMesh){Yt.setOptional(B,Y,"bindMatrix"),Yt.setOptional(B,Y,"bindMatrixInverse");const dn=Y.skeleton;dn&&(Le.floatVertexTextures?(dn.boneTexture===null&&dn.computeBoneTexture(),Yt.setValue(B,"boneTexture",dn.boneTexture,Fe),Yt.setValue(B,"boneTextureSize",dn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Jc=j.morphAttributes;if((Jc.position!==void 0||Jc.normal!==void 0||Jc.color!==void 0&&Le.isWebGL2===!0)&&L.update(Y,j,_r),(co||qe.receiveShadow!==Y.receiveShadow)&&(qe.receiveShadow=Y.receiveShadow,Yt.setValue(B,"receiveShadow",Y.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(xr.envMap.value=Ie,xr.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),co&&(Yt.setValue(B,"toneMappingExposure",m.toneMappingExposure),qe.needsLights&&hS(xr,Qc),ge&&X.fog===!0&&ae.refreshFogUniforms(xr,ge),ae.refreshMaterialUniforms(xr,X,q,$,fe),Il.upload(B,hp(qe),xr,Fe)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Il.upload(B,hp(qe),xr,Fe),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Yt.setValue(B,"center",Y.center),Yt.setValue(B,"modelViewMatrix",Y.modelViewMatrix),Yt.setValue(B,"normalMatrix",Y.normalMatrix),Yt.setValue(B,"modelMatrix",Y.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const dn=X.uniformsGroups;for(let eu=0,mS=dn.length;eu<mS;eu++)if(Le.isWebGL2){const gp=dn[eu];be.update(gp,_r),be.bind(gp,_r)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _r}function hS(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function pS(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,O,j){ke.get(w.texture).__webglTexture=O,ke.get(w.depthTexture).__webglTexture=j;const X=ke.get(w);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=j===void 0,X.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,O){const j=ke.get(w);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,j=0){T=w,M=O,C=j;let X=!0,Y=null,ge=!1,Ce=!1;if(w){const Ie=ke.get(w);Ie.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(B.FRAMEBUFFER,null),X=!1):Ie.__webglFramebuffer===void 0?Fe.setupRenderTarget(w):Ie.__hasExternalTextures&&Fe.rebindTextures(w,ke.get(w.texture).__webglTexture,ke.get(w.depthTexture).__webglTexture);const Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ce=!0);const Oe=ke.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[O])?Y=Oe[O][j]:Y=Oe[O],ge=!0):Le.isWebGL2&&w.samples>0&&Fe.useMultisampledRTT(w)===!1?Y=ke.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?Y=Oe[j]:Y=Oe,A.copy(w.viewport),V.copy(w.scissor),Z=w.scissorTest}else A.copy(H).multiplyScalar(q).floor(),V.copy(P).multiplyScalar(q).floor(),Z=U;if(we.bindFramebuffer(B.FRAMEBUFFER,Y)&&Le.drawBuffers&&X&&we.drawBuffers(w,Y),we.viewport(A),we.scissor(V),we.setScissorTest(Z),ge){const Ie=ke.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ie.__webglTexture,j)}else if(Ce){const Ie=ke.get(w.texture),Ve=O||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ie.__webglTexture,j||0,Ve)}b=-1},this.readRenderTargetPixels=function(w,O,j,X,Y,ge,Ce){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=ke.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ue=Ue[Ce]),Ue){we.bindFramebuffer(B.FRAMEBUFFER,Ue);try{const Ie=w.texture,Ve=Ie.format,Oe=Ie.type;if(Ve!==Yn&&Ne.convert(Ve)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Oe===pa&&(Me.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Oe!==lr&&Ne.convert(Oe)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===Ki&&(Le.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-X&&j>=0&&j<=w.height-Y&&B.readPixels(O,j,X,Y,Ne.convert(Ve),Ne.convert(Oe),ge)}finally{const Ie=T!==null?ke.get(T).__webglFramebuffer:null;we.bindFramebuffer(B.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(w,O,j=0){const X=Math.pow(2,-j),Y=Math.floor(O.image.width*X),ge=Math.floor(O.image.height*X);Fe.setTexture2D(O,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,w.x,w.y,Y,ge),we.unbindTexture()},this.copyTextureToTexture=function(w,O,j,X=0){const Y=O.image.width,ge=O.image.height,Ce=Ne.convert(j.format),Ue=Ne.convert(j.type);Fe.setTexture2D(j,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,j.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,j.unpackAlignment),O.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,X,w.x,w.y,Y,ge,Ce,Ue,O.image.data):O.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,X,w.x,w.y,O.mipmaps[0].width,O.mipmaps[0].height,Ce,O.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,X,w.x,w.y,Ce,Ue,O.image),X===0&&j.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(w,O,j,X,Y=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=w.max.x-w.min.x+1,Ce=w.max.y-w.min.y+1,Ue=w.max.z-w.min.z+1,Ie=Ne.convert(X.format),Ve=Ne.convert(X.type);let Oe;if(X.isData3DTexture)Fe.setTexture3D(X,0),Oe=B.TEXTURE_3D;else if(X.isDataArrayTexture)Fe.setTexture2DArray(X,0),Oe=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const Be=B.getParameter(B.UNPACK_ROW_LENGTH),pt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),fn=B.getParameter(B.UNPACK_SKIP_PIXELS),Pt=B.getParameter(B.UNPACK_SKIP_ROWS),li=B.getParameter(B.UNPACK_SKIP_IMAGES),dt=j.isCompressedTexture?j.mipmaps[0]:j.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,dt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,dt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,w.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,w.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,w.min.z),j.isDataTexture||j.isData3DTexture?B.texSubImage3D(Oe,Y,O.x,O.y,O.z,ge,Ce,Ue,Ie,Ve,dt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Oe,Y,O.x,O.y,O.z,ge,Ce,Ue,Ie,dt.data)):B.texSubImage3D(Oe,Y,O.x,O.y,O.z,ge,Ce,Ue,Ie,Ve,dt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Be),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,pt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,fn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Pt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,li),Y===0&&X.generateMipmaps&&B.generateMipmap(Oe),we.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Fe.setTextureCube(w,0):w.isData3DTexture?Fe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Fe.setTexture2DArray(w,0):Fe.setTexture2D(w,0),we.unbindTexture()},this.resetState=function(){M=0,C=0,T=null,we.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===rp?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===Yc?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ut?Hr:Yy}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hr?Ut:bi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class bD extends uS{}bD.prototype.isWebGL1Renderer=!0;class LD extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Sc extends Ni{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new z,d=new z,p=[],_=[],x=[],g=[];for(let h=0;h<=i;h++){const v=[],m=h/i;let y=0;h===0&&o===0?y=.5/n:h===i&&l===Math.PI&&(y=-.5/n);for(let M=0;M<=n;M++){const C=M/n;f.x=-e*Math.cos(r+C*s)*Math.sin(o+m*a),f.y=e*Math.cos(o+m*a),f.z=e*Math.sin(r+C*s)*Math.sin(o+m*a),_.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),g.push(C+y,1-m),v.push(c++)}u.push(v)}for(let h=0;h<i;h++)for(let v=0;v<n;v++){const m=u[h][v+1],y=u[h][v],M=u[h+1][v],C=u[h+1][v+1];(h!==0||o>0)&&p.push(m,y,C),(h!==i-1||l<Math.PI)&&p.push(y,M,C)}this.setIndex(p),this.setAttribute("position",new Kn(_,3)),this.setAttribute("normal",new Kn(x,3)),this.setAttribute("uv",new Kn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class DD{constructor(e,n,i=0,r=1/0){this.ray=new op(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new ap,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Fd(e,this,i,n),i.sort(Kv),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Fd(e[r],this,i,n);return i.sort(Kv),i}}function Kv(t,e){return t.distance-e.distance}function Fd(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)Fd(r[s],e,n,!0)}}class Zv{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Qt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:np}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=np);const Qv={type:"change"},_f={type:"start"},Jv={type:"end"},xl=new op,e0=new Wi,ND=Math.cos(70*wR.DEG2RAD);class UD extends ts{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:is.ROTATE,MIDDLE:is.DOLLY,RIGHT:is.PAN},this.touches={ONE:rs.ROTATE,TWO:rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",E),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",E),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Qv),i.update(),s=r.NONE},this.update=function(){const L=new z,ue=new $r().setFromUnitVectors(e.up,new z(0,1,0)),ee=ue.clone().invert(),Ne=new z,Ae=new $r,be=new z,Ee=2*Math.PI;return function(Xe=null){const N=i.object.position;L.copy(N).sub(i.target),L.applyQuaternion(ue),a.setFromVector3(L),i.autoRotate&&s===r.NONE&&V(S(Xe)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let he=i.minAzimuthAngle,ie=i.maxAzimuthAngle;isFinite(he)&&isFinite(ie)&&(he<-Math.PI?he+=Ee:he>Math.PI&&(he-=Ee),ie<-Math.PI?ie+=Ee:ie>Math.PI&&(ie-=Ee),he<=ie?a.theta=Math.max(he,Math.min(ie,a.theta)):a.theta=a.theta>(he+ie)/2?Math.max(he,a.theta):Math.min(ie,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&C||i.object.isOrthographicCamera?a.radius=k(a.radius):a.radius=k(a.radius*c),L.setFromSpherical(a),L.applyQuaternion(ee),N.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let K=!1;if(i.zoomToCursor&&C){let ce=null;if(i.object.isPerspectiveCamera){const Re=L.length();ce=k(Re*c);const Ye=Re-ce;i.object.position.addScaledVector(y,Ye),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Re=new z(M.x,M.y,0);Re.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),K=!0;const Ye=new z(M.x,M.y,0);Ye.unproject(i.object),i.object.position.sub(Ye).add(Re),i.object.updateMatrixWorld(),ce=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ce!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ce).add(i.object.position):(xl.origin.copy(i.object.position),xl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(xl.direction))<ND?e.lookAt(i.target):(e0.setFromNormalAndCoplanarPoint(i.object.up,i.target),xl.intersectPlane(e0,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),K=!0);return c=1,C=!1,K||Ne.distanceToSquared(i.object.position)>o||8*(1-Ae.dot(i.object.quaternion))>o||be.distanceToSquared(i.target)>0?(i.dispatchEvent(Qv),Ne.copy(i.object.position),Ae.copy(i.object.quaternion),be.copy(i.target),K=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ne),i.domElement.removeEventListener("pointerdown",ke),i.domElement.removeEventListener("pointercancel",$e),i.domElement.removeEventListener("wheel",R),i.domElement.removeEventListener("pointermove",Fe),i.domElement.removeEventListener("pointerup",$e),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",E),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Zv,l=new Zv;let c=1;const u=new z,f=new He,d=new He,p=new He,_=new He,x=new He,g=new He,h=new He,v=new He,m=new He,y=new z,M=new He;let C=!1;const T=[],b={};function S(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function A(){return Math.pow(.95,i.zoomSpeed)}function V(L){l.theta-=L}function Z(L){l.phi-=L}const J=function(){const L=new z;return function(ee,Ne){L.setFromMatrixColumn(Ne,0),L.multiplyScalar(-ee),u.add(L)}}(),D=function(){const L=new z;return function(ee,Ne){i.screenSpacePanning===!0?L.setFromMatrixColumn(Ne,1):(L.setFromMatrixColumn(Ne,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(ee),u.add(L)}}(),W=function(){const L=new z;return function(ee,Ne){const Ae=i.domElement;if(i.object.isPerspectiveCamera){const be=i.object.position;L.copy(be).sub(i.target);let Ee=L.length();Ee*=Math.tan(i.object.fov/2*Math.PI/180),J(2*ee*Ee/Ae.clientHeight,i.object.matrix),D(2*Ne*Ee/Ae.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(J(ee*(i.object.right-i.object.left)/i.object.zoom/Ae.clientWidth,i.object.matrix),D(Ne*(i.object.top-i.object.bottom)/i.object.zoom/Ae.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function $(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function F(L){if(!i.zoomToCursor)return;C=!0;const ue=i.domElement.getBoundingClientRect(),ee=L.clientX-ue.left,Ne=L.clientY-ue.top,Ae=ue.width,be=ue.height;M.x=ee/Ae*2-1,M.y=-(Ne/be)*2+1,y.set(M.x,M.y,1).unproject(i.object).sub(i.object.position).normalize()}function k(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function H(L){f.set(L.clientX,L.clientY)}function P(L){F(L),h.set(L.clientX,L.clientY)}function U(L){_.set(L.clientX,L.clientY)}function se(L){d.set(L.clientX,L.clientY),p.subVectors(d,f).multiplyScalar(i.rotateSpeed);const ue=i.domElement;V(2*Math.PI*p.x/ue.clientHeight),Z(2*Math.PI*p.y/ue.clientHeight),f.copy(d),i.update()}function oe(L){v.set(L.clientX,L.clientY),m.subVectors(v,h),m.y>0?$(A()):m.y<0&&q(A()),h.copy(v),i.update()}function te(L){x.set(L.clientX,L.clientY),g.subVectors(x,_).multiplyScalar(i.panSpeed),W(g.x,g.y),_.copy(x),i.update()}function fe(L){F(L),L.deltaY<0?q(A()):L.deltaY>0&&$(A()),i.update()}function ve(L){let ue=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?Z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(0,i.keyPanSpeed),ue=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?Z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(0,-i.keyPanSpeed),ue=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?V(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(i.keyPanSpeed,0),ue=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?V(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(-i.keyPanSpeed,0),ue=!0;break}ue&&(L.preventDefault(),i.update())}function ye(){if(T.length===1)f.set(T[0].pageX,T[0].pageY);else{const L=.5*(T[0].pageX+T[1].pageX),ue=.5*(T[0].pageY+T[1].pageY);f.set(L,ue)}}function Se(){if(T.length===1)_.set(T[0].pageX,T[0].pageY);else{const L=.5*(T[0].pageX+T[1].pageX),ue=.5*(T[0].pageY+T[1].pageY);_.set(L,ue)}}function We(){const L=T[0].pageX-T[1].pageX,ue=T[0].pageY-T[1].pageY,ee=Math.sqrt(L*L+ue*ue);h.set(0,ee)}function Pe(){i.enableZoom&&We(),i.enablePan&&Se()}function B(){i.enableZoom&&We(),i.enableRotate&&ye()}function Et(L){if(T.length==1)d.set(L.pageX,L.pageY);else{const ee=me(L),Ne=.5*(L.pageX+ee.x),Ae=.5*(L.pageY+ee.y);d.set(Ne,Ae)}p.subVectors(d,f).multiplyScalar(i.rotateSpeed);const ue=i.domElement;V(2*Math.PI*p.x/ue.clientHeight),Z(2*Math.PI*p.y/ue.clientHeight),f.copy(d)}function Me(L){if(T.length===1)x.set(L.pageX,L.pageY);else{const ue=me(L),ee=.5*(L.pageX+ue.x),Ne=.5*(L.pageY+ue.y);x.set(ee,Ne)}g.subVectors(x,_).multiplyScalar(i.panSpeed),W(g.x,g.y),_.copy(x)}function Le(L){const ue=me(L),ee=L.pageX-ue.x,Ne=L.pageY-ue.y,Ae=Math.sqrt(ee*ee+Ne*Ne);v.set(0,Ae),m.set(0,Math.pow(v.y/h.y,i.zoomSpeed)),$(m.y),h.copy(v)}function we(L){i.enableZoom&&Le(L),i.enablePan&&Me(L)}function ot(L){i.enableZoom&&Le(L),i.enableRotate&&Et(L)}function ke(L){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",Fe),i.domElement.addEventListener("pointerup",$e)),le(L),L.pointerType==="touch"?G(L):vt(L))}function Fe(L){i.enabled!==!1&&(L.pointerType==="touch"?ae(L):Rt(L))}function $e(L){Te(L),T.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",Fe),i.domElement.removeEventListener("pointerup",$e)),i.dispatchEvent(Jv),s=r.NONE}function vt(L){let ue;switch(L.button){case 0:ue=i.mouseButtons.LEFT;break;case 1:ue=i.mouseButtons.MIDDLE;break;case 2:ue=i.mouseButtons.RIGHT;break;default:ue=-1}switch(ue){case is.DOLLY:if(i.enableZoom===!1)return;P(L),s=r.DOLLY;break;case is.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;U(L),s=r.PAN}else{if(i.enableRotate===!1)return;H(L),s=r.ROTATE}break;case is.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;H(L),s=r.ROTATE}else{if(i.enablePan===!1)return;U(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(_f)}function Rt(L){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;se(L);break;case r.DOLLY:if(i.enableZoom===!1)return;oe(L);break;case r.PAN:if(i.enablePan===!1)return;te(L);break}}function R(L){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(L.preventDefault(),i.dispatchEvent(_f),fe(L),i.dispatchEvent(Jv))}function E(L){i.enabled===!1||i.enablePan===!1||ve(L)}function G(L){switch(de(L),T.length){case 1:switch(i.touches.ONE){case rs.ROTATE:if(i.enableRotate===!1)return;ye(),s=r.TOUCH_ROTATE;break;case rs.PAN:if(i.enablePan===!1)return;Se(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case rs.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Pe(),s=r.TOUCH_DOLLY_PAN;break;case rs.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;B(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(_f)}function ae(L){switch(de(L),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Et(L),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Me(L),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;we(L),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ot(L),i.update();break;default:s=r.NONE}}function ne(L){i.enabled!==!1&&L.preventDefault()}function le(L){T.push(L)}function Te(L){delete b[L.pointerId];for(let ue=0;ue<T.length;ue++)if(T[ue].pointerId==L.pointerId){T.splice(ue,1);return}}function de(L){let ue=b[L.pointerId];ue===void 0&&(ue=new He,b[L.pointerId]=ue),ue.set(L.pageX,L.pageY)}function me(L){const ue=L.pointerId===T[0].pointerId?T[1]:T[0];return b[ue.pointerId]}i.domElement.addEventListener("contextmenu",ne),i.domElement.addEventListener("pointerdown",ke),i.domElement.addEventListener("pointercancel",$e),i.domElement.addEventListener("wheel",R,{passive:!1}),this.update()}}const up=Q.memo(({onMatchClick:t,showMatches:e=!0,filteredMatches:n=[]})=>{const i=Q.useRef(null),r=Q.useRef(null),s=Q.useRef(new DD),o=Q.useRef(new He),[a,l]=Q.useState(null),[c,u]=Q.useState({x:0,y:0}),f=Q.useRef(null),d=Q.useRef(t),p=Q.useRef(!1);Q.useEffect(()=>{d.current=t},[t]);const _=(g,h,v,m,y)=>{let M=(g-v/2)/(v/2)*-180,C=(h-m/2)/(m/2)*-90;M=M*Math.PI/180,C=C*Math.PI/180;const T=Math.cos(C)*y;return{x:Math.cos(M)*T,y:Math.sin(C)*y,z:Math.sin(M)*T}},x=(g,h,v)=>{const m=(90-g)*(Math.PI/180),y=(h+180)*(Math.PI/180);return new z(-v*Math.sin(m)*Math.cos(y),v*Math.cos(m),v*Math.sin(m)*Math.sin(y))};return Q.useEffect(()=>{if(!i.current||!r.current||p.current)return;p.current=!0;let g,h,v,m,y,M=[],C,T,b;const S=()=>{const V=i.current,Z=r.current;if(!V||!Z)return;const{width:J,height:D}=V.getBoundingClientRect();if(J===0||D===0){requestAnimationFrame(S);return}const W=75,$=4098/2,q=1968/2;g=new LD,g.background=null,h=new Dn(45,J/D,.1,1e3),h.position.set(0,0,265),v=new uS({canvas:Z,antialias:!0,alpha:!0}),v.setSize(J,D),v.setClearColor(16777215,0);const F=()=>{const U=[];for(let te=0;te<200;te++)U.push({x:2049*.2+Math.random()*2049*.3,y:984*.3+Math.random()*984*.4});for(let te=0;te<150;te++)U.push({x:2049*.25+Math.random()*2049*.2,y:984*.7+Math.random()*984*.25});for(let te=0;te<100;te++)U.push({x:2049*.45+Math.random()*2049*.15,y:984*.25+Math.random()*984*.2});for(let te=0;te<120;te++)U.push({x:2049*.48+Math.random()*2049*.12,y:984*.45+Math.random()*984*.3});for(let te=0;te<250;te++)U.push({x:2049*.6+Math.random()*2049*.35,y:984*.2+Math.random()*984*.4});for(let te=0;te<80;te++)U.push({x:2049*.75+Math.random()*2049*.2,y:984*.6+Math.random()*984*.25});return U},k=()=>{const U=new AbortController,se=setTimeout(()=>U.abort(),5e3);fetch("https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard-pro/assets/js/points.json",{signal:U.signal,cache:"force-cache"}).then(oe=>{if(clearTimeout(se),!oe.ok)throw new Error("Network response was not ok");return oe.json()}).then(oe=>{H(oe.points||[])}).catch(oe=>{clearTimeout(se),oe.name!=="AbortError"&&console.warn("No se pudieron cargar los puntos desde la URL:",oe);const te=F();H(te)})},H=U=>{if(!U||U.length===0){console.warn("No hay puntos para renderizar");return}const se=new Ni,oe=new Sc(.8,4,4),te=new yc({color:"#9ca3af"}),fe=[],ve=[];let ye=0;for(const Se of U){const{x:We,y:Pe,z:B}=_(Se.x,Se.y,$*2,q*2,W);if(We&&Pe&&B){const Et=oe.clone(),Me=Et.attributes.position;for(let we=0;we<Me.count;we++)fe.push(Me.getX(we)+We,Me.getY(we)+Pe,Me.getZ(we)+B);const Le=Et.index;if(Le)for(let we=0;we<Le.count;we++)ve.push(Le.getX(we)+ye);ye+=Me.count}}if(fe.length===0){console.warn("No se generaron posiciones válidas");return}se.setAttribute("position",new Kn(fe,3)),ve.length>0&&se.setIndex(ve),se.computeVertexNormals(),y=new ii(se,te),g.add(y),v.render(g,h),P()},P=()=>{if(e){const fe=new Do;M=[],(n.length>0?n:Fy).forEach(ye=>{const Se=x(ye.lat,ye.lng,W+2),We=new Sc(1.5,8,8),Pe=new yc({color:ye.status==="online"?"#4a5568":"#a0a0a0",transparent:!0,opacity:.8}),B=new ii(We,Pe);B.position.set(Se.x,Se.y,Se.z),B.userData=ye,fe.add(B),M.push(B)}),g.add(fe)}else M=[];m=new UD(h,Z),m.enableKeys=!1,m.enablePan=!1,m.enableZoom=!1,m.enableDamping=!1,m.enableRotate=!0,m.autoRotate=!0,m.autoRotateSpeed=2,C=fe=>{if(!e||M.length===0)return;const ve=Z.getBoundingClientRect();o.current.x=(fe.clientX-ve.left)/ve.width*2-1,o.current.y=-((fe.clientY-ve.top)/ve.height)*2+1,s.current.setFromCamera(o.current,h);const ye=s.current.intersectObjects(M);if(ye.length>0){const Se=ye[0].object.userData;l(Se),u({x:fe.clientX,y:fe.clientY}),ye[0].object.material.color.setHex(4210752),ye[0].object.scale.set(1.5,1.5,1.5)}else l(null),M.forEach(Se=>{const We=Se.userData;Se.material.color.setHex(We.status==="online"?4871528:10526880),Se.scale.set(1,1,1)})},T=fe=>{if(!e||M.length===0)return;const ve=Z.getBoundingClientRect();o.current.x=(fe.clientX-ve.left)/ve.width*2-1,o.current.y=-((fe.clientY-ve.top)/ve.height)*2+1,s.current.setFromCamera(o.current,h);const ye=s.current.intersectObjects(M);ye.length>0&&d.current&&d.current(ye[0].object.userData)},Z.addEventListener("mousemove",C),Z.addEventListener("click",T),b=()=>{if(!V||!h||!v)return;const fe=V.clientWidth,ve=V.clientHeight;h.aspect=fe/ve,h.updateProjectionMatrix(),v.setSize(fe,ve)},window.addEventListener("resize",b);let U=0;const oe=1e3/60,te=fe=>{f.current=requestAnimationFrame(te);const ve=fe-U;ve<oe||(U=fe-ve%oe,m&&m.update(),v&&g&&h&&v.render(g,h))};te(0)};try{k()}catch(U){console.error("Error al inicializar el globo:",U);const se=F();H(se)}return()=>{b&&window.removeEventListener("resize",b),C&&Z.removeEventListener("mousemove",C),T&&Z.removeEventListener("click",T),f.current&&cancelAnimationFrame(f.current),m&&m.dispose(),g&&g.traverse(U=>{U.geometry&&U.geometry.dispose(),U.material&&(Array.isArray(U.material)?U.material.forEach(se=>se.dispose()):U.material.dispose())}),v&&v.dispose()}},A=S();return()=>{A&&typeof A=="function"&&A(),f.current&&cancelAnimationFrame(f.current),p.current=!1}},[e,n]),I.jsxs("div",{className:"relative w-full h-full min-h-[500px] bg-dark-bg",children:[I.jsx("div",{ref:i,className:"w-full h-full min-h-[500px] bg-dark-bg",children:I.jsx("canvas",{ref:r,width:"700",height:"600",style:{outline:"none",width:"100%",height:"100%",background:"transparent"}})}),a&&I.jsx(gn.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},className:"fixed z-50 pointer-events-none",style:{left:c.x+10,top:c.y-10},children:I.jsxs("div",{className:"glass rounded-2xl p-4 min-w-[200px] glow-gray",children:[I.jsx("div",{className:"font-semibold text-lg mb-1 text-light-text",children:a.name}),I.jsx("div",{className:"text-medium-text text-sm mb-2",children:a.games.slice(0,2).join(", ")}),I.jsxs("div",{className:"flex items-center justify-between",children:[I.jsx("span",{className:"text-light-text text-sm",children:a.platform}),I.jsxs("span",{className:"text-sm text-medium-text",children:["⭐ ",a.rating]})]})]})})]})});up.displayName="Planet3D";const zD=Object.freeze(Object.defineProperty({__proto__:null,default:up},Symbol.toStringTag,{value:"Module"})),ID=({match:t,onClose:e})=>{const{userProfile:n}=Dh(),[i,r]=Q.useState([{id:1,text:`¡Hola! Vi que también juegas ${t.games[0]}. ¿Quieres hacer una partida?`,sender:"other",timestamp:new Date}]),[s,o]=Q.useState(""),a=Q.useRef(null),l=()=>{var f;(f=a.current)==null||f.scrollIntoView({behavior:"smooth"})};Q.useEffect(()=>{l()},[i]),Q.useEffect(()=>{const f=setTimeout(()=>{if(i.length===1){const d=["¡Claro! Estoy disponible ahora mismo.","Perfecto, ¿cuándo quieres jugar?","¡Genial! Me encantaría jugar contigo."],p=d[Math.floor(Math.random()*d.length)];r(_=>[..._,{id:_.length+1,text:p,sender:"other",timestamp:new Date}])}},2e3);return()=>clearTimeout(f)},[i.length]);const c=()=>{s.trim()&&(r(f=>[...f,{id:f.length+1,text:s,sender:"me",timestamp:new Date}]),o(""),setTimeout(()=>{const f=["¡Perfecto!","Entendido.","De acuerdo.","¡Genial!"],d=f[Math.floor(Math.random()*f.length)];r(p=>[...p,{id:p.length+1,text:d,sender:"other",timestamp:new Date}])},1500))},u=f=>{f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),c())};return I.jsx(wd,{children:I.jsxs(gn.div,{initial:{opacity:0,x:300},animate:{opacity:1,x:0},exit:{opacity:0,x:300},className:`fixed right-0 top-0 h-full w-full md:w-96 bg-dark-bg z-50 \r
                   shadow-2xl flex flex-col`,children:[I.jsxs("div",{className:"glass border-b border-dark-border p-4 flex items-center justify-between",children:[I.jsxs("div",{className:"flex items-center gap-3",children:[I.jsx("img",{src:t.avatar,alt:t.name,className:"w-10 h-10 rounded-full border border-dark-border"}),I.jsxs("div",{children:[I.jsx("h3",{className:"font-semibold text-light-text",children:t.name}),I.jsx("p",{className:"text-xs text-medium-text",children:"En línea"})]})]}),I.jsx("button",{onClick:e,className:"p-2 hover:bg-dark-card/60 rounded-lg transition-colors",children:I.jsx(yC,{size:20,className:"text-light-text"})})]}),I.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[I.jsx(wd,{children:i.map(f=>I.jsx(gn.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:`flex ${f.sender==="me"?"justify-end":"justify-start"}`,children:I.jsxs("div",{className:`max-w-[75%] rounded-2xl px-4 py-2 ${f.sender==="me"?"bg-accent text-dark-bg":"glass text-light-text"}`,children:[I.jsx("p",{className:"text-sm",children:f.text}),I.jsx("p",{className:"text-xs mt-1 opacity-70",children:f.timestamp.toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"})})]})},f.id))}),I.jsx("div",{ref:a})]}),I.jsxs("div",{className:"glass border-t border-dark-border p-4",children:[I.jsxs("div",{className:"flex items-center gap-2",children:[I.jsx("div",{className:"flex-1 relative",children:I.jsx("input",{type:"text",value:s,onChange:f=>o(f.target.value),onKeyPress:u,placeholder:"Escribe un mensaje...",className:`w-full px-4 py-2 rounded-xl border border-dark-border \r
                         bg-dark-card/60 backdrop-blur-sm focus:outline-none focus:ring-2 \r
                         focus:ring-accent/20 text-light-text`})}),I.jsx("button",{onClick:c,disabled:!s.trim(),className:`p-2 bg-accent text-dark-bg rounded-xl hover:bg-accent-hover \r
                       transition-colors disabled:opacity-50 disabled:cursor-not-allowed`,children:I.jsx(_C,{size:20})})]}),t.hasMicrophone&&I.jsxs("div",{className:"mt-2 flex items-center gap-2 text-xs text-medium-text",children:[I.jsx(tp,{size:14,className:"text-green-600"}),I.jsx("span",{children:"Micrófono disponible"})]})]})]})})},FD=()=>{const{matches:t,openChat:e,currentChat:n,closeChat:i}=Dh(),[r,s]=Q.useState(null),[o,a]=Q.useState(t),[l,c]=Q.useState(null);Q.useEffect(()=>{let d=t;r!==null&&(d=hC(d,r)),l&&(d=d.filter(p=>!0)),a(d)},[t,r,l]);const u=d=>{e(d)},f=d=>{c(d)};return I.jsxs("div",{className:"min-h-screen bg-dark-bg",children:[I.jsx("header",{className:"glass border-b border-dark-border p-4",children:I.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between",children:[I.jsx("h1",{className:"text-2xl font-bold text-light-text",children:"GameBuddy"}),I.jsxs("div",{className:"flex items-center gap-2",children:[I.jsx(gC,{size:18,className:"text-medium-text"}),I.jsxs("div",{className:"flex items-center gap-1 glass rounded-xl p-1",children:[I.jsx("button",{onClick:()=>s(null),className:`px-4 py-2 rounded-lg text-sm font-medium transition-all ${r===null?"bg-accent text-dark-bg":"text-medium-text hover:bg-dark-card/60"}`,children:"Todos"}),I.jsxs("button",{onClick:()=>s(!0),className:`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${r===!0?"bg-accent text-dark-bg":"text-medium-text hover:bg-dark-card/60"}`,children:[I.jsx(tp,{size:16}),"Con Mic"]}),I.jsxs("button",{onClick:()=>s(!1),className:`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${r===!1?"bg-accent text-dark-bg":"text-medium-text hover:bg-dark-card/60"}`,children:[I.jsx(Oy,{size:16}),"Sin Mic"]})]})]})]})}),I.jsx("div",{className:"max-w-7xl mx-auto p-4",children:I.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[I.jsxs("div",{className:"lg:col-span-1 space-y-4",children:[I.jsxs("div",{className:"glass-card",children:[I.jsx("h2",{className:"text-xl font-semibold mb-4 text-light-text",children:"Compañeros Disponibles"}),I.jsxs("p",{className:"text-sm text-medium-text mb-4",children:[o.length," ",o.length===1?"match encontrado":"matches encontrados"]})]}),I.jsx("div",{className:"space-y-4 max-h-[calc(100vh-300px)] overflow-y-auto",children:o.length>0?o.map(d=>I.jsx(MC,{match:d,onConnect:u},d.id)):I.jsxs("div",{className:"glass-card text-center py-8",children:[I.jsx("p",{className:"text-medium-text",children:"No se encontraron matches"}),I.jsx("p",{className:"text-sm text-medium-text mt-2",children:"Intenta ajustar los filtros"})]})})]}),I.jsx("div",{className:"lg:col-span-2",children:I.jsxs("div",{className:"glass-card h-full min-h-[600px]",children:[I.jsx("h2",{className:"text-xl font-semibold mb-4 text-light-text",children:"Partidas Activas en el Mundo"}),I.jsx("div",{className:"h-[500px] rounded-xl overflow-hidden",children:I.jsx(up,{onMatchClick:f,showMatches:!0,filteredMatches:o})}),I.jsx("p",{className:"text-sm text-medium-text mt-4 text-center",children:"Haz clic en los puntos del planeta para ver partidas activas por región"})]})})]})}),n&&I.jsx("div",{className:"fixed inset-0 bg-black/20 backdrop-blur-sm z-40",onClick:i}),n&&I.jsx(ID,{match:n,onClose:i})]})},OD=Q.lazy(()=>jE(()=>import("./Landing-CFucBPSM.js").then(t=>t.L),[]));function kD(){const[t,e]=Q.useState(!0),[n,i]=Q.useState(!1),r=()=>{e(!1)},s=()=>{i(!0)};return I.jsx(XE,{children:t?I.jsx(Q.Suspense,{fallback:I.jsx("div",{className:"min-h-screen bg-dark-bg flex items-center justify-center",children:I.jsxs("div",{className:"text-center",children:[I.jsx("div",{className:"w-16 h-16 border-4 border-dark-border border-t-dark-gray rounded-full animate-spin mx-auto mb-4"}),I.jsx("p",{className:"text-medium-text",children:"Cargando..."})]})}),children:I.jsx(OD,{onGetStarted:r})}):n?I.jsx(FD,{}):I.jsx(SC,{onComplete:s})})}xf.createRoot(document.getElementById("root")).render(I.jsx(Vd.StrictMode,{children:I.jsx(kD,{})}));export{gC as F,Ka as G,tp as M,zD as P,yC as X,jE as _,Fy as a,Di as c,I as j,gn as m,Q as r};
