(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[726],{2477:function(e,t,r){"use strict";r.r(t);var n,o=r(952);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}t.default=function(e){return o.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),n||(n=o.createElement("g",{"data-name":"Layer 2"},o.createElement("g",{"data-name":"external-link"},o.createElement("path",{d:"M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"}),o.createElement("path",{d:"M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"})))))}},7686:function(e,t,r){Promise.resolve().then(r.t.bind(r,9167,23)),Promise.resolve().then(r.bind(r,2477)),Promise.resolve().then(r.t.bind(r,8783,23))},9167:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{suspense:function(){return o},NoSSR:function(){return a}});const n=r(1283);function o(){const e=new Error(n.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=n.NEXT_DYNAMIC_NO_SSR_CODE,e}function a(e){let{children:t}=e;return t}},8783:function(e){e.exports={titleLink:"about_titleLink__x77tc"}},7673:function(e,t){"use strict";var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),i=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),y=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,d={};function _(e,t,r){this.props=e,this.context=t,this.refs=d,this.updater=r||h}function v(){}function m(e,t,r){this.props=e,this.context=t,this.refs=d,this.updater=r||h}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=_.prototype;var S=m.prototype=new v;S.constructor=m,b(S,_.prototype),S.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,j={current:null},g={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var o,a={},u=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(u=""+t.key),t)k.call(t,o)&&!g.hasOwnProperty(o)&&(a[o]=t[o]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var s=Array(i),f=0;f<i;f++)s[f]=arguments[f+2];a.children=s}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===a[o]&&(a[o]=i[o]);return{$$typeof:r,type:e,key:u,ref:c,props:a,_owner:j.current}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}var P=/\/+/g;function $(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,o,a,u){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case n:i=!0}}if(i)return u=u(i=e),e=""===a?"."+$(i,0):a,w(u)?(o="",null!=e&&(o=e.replace(P,"$&/")+"/"),x(u,t,o,"",(function(e){return e}))):null!=u&&(E(u)&&(u=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||i&&i.key===u.key?"":(""+u.key).replace(P,"$&/")+"/")+e)),t.push(u)),1;if(i=0,a=""===a?".":a+":",w(e))for(var s=0;s<e.length;s++){var f=a+$(c=e[s],s);i+=x(c,t,o,f,u)}else if(f=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"===typeof f)for(e=f.call(e),s=0;!(c=e.next()).done;)i+=x(c=c.value,t,o,f=a+$(c,s++),u);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function N(e,t,r){if(null==e)return e;var n=[],o=0;return x(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function C(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},M={transition:null};t.createElement=O},952:function(e,t,r){"use strict";e.exports=r(7673)}},function(e){e.O(0,[971,472,744],(function(){return t=7686,e(e.s=t);var t}));var t=e.O();_N_E=t}]);