(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[396],{9524:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return r}});n(3997);const r=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4549:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}});n(3997);function r(e,t,n,r){return!1}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8326:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});const r=n(6451)._(n(2265)),o=n(9121),s=n(8664),a=n(8130),i=n(6681),u=n(9524),c=n(6304),l=n(6313),f=n(1581),d=n(4549),p=n(9872),h=n(9706),m=new Set;function g(e,t,n,r,o,a){if(!a&&!(0,s.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){const o=t+"%"+n+"%"+("undefined"!==typeof r.locale?r.locale:"locale"in e?e.locale:void 0);if(m.has(o))return;m.add(o)}const i=a?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(i).catch((e=>{0}))}function y(e){return"string"===typeof e?e:(0,a.formatUrl)(e)}const b=r.default.forwardRef((function(e,t){let n;const{href:a,as:m,children:b,prefetch:P=null,passHref:_,replace:R,shallow:v,scroll:O,locale:w,onClick:j,onMouseEnter:E,onTouchStart:S,legacyBehavior:N=!1,...M}=e;n=b,!N||"string"!==typeof n&&"number"!==typeof n||(n=r.default.createElement("a",null,n));const x=r.default.useContext(c.RouterContext),k=r.default.useContext(l.AppRouterContext),C=null!=x?x:k,I=!x,T=!1!==P,L=null===P?h.PrefetchKind.AUTO:h.PrefetchKind.FULL;const{href:U,as:A}=r.default.useMemo((()=>{if(!x){const e=y(a);return{href:e,as:m?y(m):e}}const[e,t]=(0,o.resolveHref)(x,a,!0);return{href:e,as:m?(0,o.resolveHref)(x,m):t||e}}),[x,a,m]),W=r.default.useRef(U),K=r.default.useRef(A);let z;N&&(z=r.default.Children.only(n));const D=N?z&&"object"===typeof z&&z.ref:t,[q,B,F]=(0,f.useIntersection)({rootMargin:"200px"}),$=r.default.useCallback((e=>{K.current===A&&W.current===U||(F(),K.current=A,W.current=U),q(e),D&&("function"===typeof D?D(e):"object"===typeof D&&(D.current=e))}),[A,D,U,F,q]);r.default.useEffect((()=>{C&&B&&T&&g(C,U,A,{locale:w},{kind:L},I)}),[A,U,B,w,T,null==x?void 0:x.locale,C,I,L]);const Y={ref:$,onClick(e){N||"function"!==typeof j||j(e),N&&z.props&&"function"===typeof z.props.onClick&&z.props.onClick(e),C&&(e.defaultPrevented||function(e,t,n,o,a,i,u,c,l,f){const{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){const t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!l&&!(0,s.isLocalURL)(n)))return;e.preventDefault();const p=()=>{const e=null==u||u;"beforePopState"in t?t[a?"replace":"push"](n,o,{shallow:i,locale:c,scroll:e}):t[a?"replace":"push"](o||n,{forceOptimisticNavigation:!f,scroll:e})};l?r.default.startTransition(p):p()}(e,C,U,A,R,v,O,w,I,T))},onMouseEnter(e){N||"function"!==typeof E||E(e),N&&z.props&&"function"===typeof z.props.onMouseEnter&&z.props.onMouseEnter(e),C&&(!T&&I||g(C,U,A,{locale:w,priority:!0,bypassPrefetchedCheck:!0},{kind:L},I))},onTouchStart(e){N||"function"!==typeof S||S(e),N&&z.props&&"function"===typeof z.props.onTouchStart&&z.props.onTouchStart(e),C&&(!T&&I||g(C,U,A,{locale:w,priority:!0,bypassPrefetchedCheck:!0},{kind:L},I))}};if((0,i.isAbsoluteUrl)(A))Y.href=A;else if(!N||_||"a"===z.type&&!("href"in z.props)){const e="undefined"!==typeof w?w:null==x?void 0:x.locale,t=(null==x?void 0:x.isLocaleDomain)&&(0,d.getDomainLocale)(A,e,null==x?void 0:x.locales,null==x?void 0:x.domainLocales);Y.href=t||(0,p.addBasePath)((0,u.addLocale)(A,e,null==x?void 0:x.defaultLocale))}return N?r.default.cloneElement(z,Y):r.default.createElement("a",{...M,...Y},n)}));("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2389:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});const n="undefined"!==typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},r="undefined"!==typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9121:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return f}});const r=n(5991),o=n(8130),s=n(8137),a=n(6681),i=n(3997),u=n(8664),c=n(9289),l=n(948);function f(e,t,n){let f,d="string"===typeof t?t:(0,o.formatWithValidation)(t);const p=d.match(/^[a-zA-Z]{1,}:\/\//),h=p?d.slice(p[0].length):d;if((h.split("?")[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");const t=(0,a.normalizeRepeatedSlashes)(h);d=(p?p[0]:"")+t}if(!(0,u.isLocalURL)(d))return n?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(m){f=new URL("/","http://n")}try{const e=new URL(d,f);e.pathname=(0,i.normalizePathTrailingSlash)(e.pathname);let t="";if((0,c.isDynamicRoute)(e.pathname)&&e.searchParams&&n){const n=(0,r.searchParamsToUrlQuery)(e.searchParams),{result:a,params:i}=(0,l.interpolateAs)(e.pathname,e.pathname,n);a&&(t=(0,o.formatWithValidation)({pathname:a,hash:e.hash,query:(0,s.omit)(n,i)}))}const a=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return n?[a,t||a]:a}catch(m){return n?[d]:d}}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1581:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});const r=n(2265),o=n(2389),s="function"===typeof IntersectionObserver,a=new Map,i=[];function u(e,t,n){const{id:r,observer:o,elements:s}=function(e){const t={root:e.root||null,margin:e.rootMargin||""},n=i.find((e=>e.root===t.root&&e.margin===t.margin));let r;if(n&&(r=a.get(n),r))return r;const o=new Map,s=new IntersectionObserver((e=>{e.forEach((e=>{const t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return r={id:t,observer:s,elements:o},i.push(t),a.set(t,r),r}(n);return s.set(e,t),o.observe(e),function(){if(s.delete(e),o.unobserve(e),0===s.size){o.disconnect(),a.delete(r);const e=i.findIndex((e=>e.root===r.root&&e.margin===r.margin));e>-1&&i.splice(e,1)}}}function c(e){let{rootRef:t,rootMargin:n,disabled:a}=e;const i=a||!s,[c,l]=(0,r.useState)(!1),f=(0,r.useRef)(null),d=(0,r.useCallback)((e=>{f.current=e}),[]);(0,r.useEffect)((()=>{if(s){if(i||c)return;const e=f.current;if(e&&e.tagName){return u(e,(e=>e&&l(e)),{root:null==t?void 0:t.current,rootMargin:n})}}else if(!c){const e=(0,o.requestIdleCallback)((()=>l(!0)));return()=>(0,o.cancelIdleCallback)(e)}}),[i,n,t,c,f.current]);const p=(0,r.useCallback)((()=>{l(!1)}),[]);return[d,c,p]}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4910:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});const n=/[|\\{}()[\]^$+*?.-]/,r=/[|\\{}()[\]^$+*?.-]/g;function o(e){return n.test(e)?e.replace(r,"\\$&"):e}},8130:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{formatUrl:function(){return s},urlObjectKeys:function(){return a},formatWithValidation:function(){return i}});const r=n(3364)._(n(5991)),o=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:n}=e,s=e.protocol||"",a=e.pathname||"",i=e.hash||"",u=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:n&&(c=t+(~n.indexOf(":")?"["+n+"]":n),e.port&&(c+=":"+e.port)),u&&"object"===typeof u&&(u=String(r.urlQueryToSearchParams(u)));let l=e.search||u&&"?"+u||"";return s&&!s.endsWith(":")&&(s+=":"),e.slashes||(!s||o.test(s))&&!1!==c?(c="//"+(c||""),a&&"/"!==a[0]&&(a="/"+a)):c||(c=""),i&&"#"!==i[0]&&(i="#"+i),l&&"?"!==l[0]&&(l="?"+l),a=a.replace(/[?#]/g,encodeURIComponent),l=l.replace("#","%23"),""+s+c+a+l+i}const a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function i(e){return s(e)}},9289:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getSortedRoutes:function(){return r.getSortedRoutes},isDynamicRoute:function(){return o.isDynamicRoute}});const r=n(9255),o=n(5321)},948:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return s}});const r=n(1670),o=n(4586);function s(e,t,n){let s="";const a=(0,o.getRouteRegex)(e),i=a.groups,u=(t!==e?(0,r.getRouteMatcher)(a)(t):"")||n;s=e;const c=Object.keys(i);return c.every((e=>{let t=u[e]||"";const{repeat:n,optional:r}=i[e];let o="["+(n?"...":"")+e+"]";return r&&(o=(t?"":"/")+"["+o+"]"),n&&!Array.isArray(t)&&(t=[t]),(r||e in u)&&(s=s.replace(o,n?t.map((e=>encodeURIComponent(e))).join("/"):encodeURIComponent(t))||"/")}))||(s=""),{params:c,result:s}}},5321:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return r}});const n=/\/\[[^/]+?\](?=\/|$)/;function r(e){return n.test(e)}},8664:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return s}});const r=n(6681),o=n(6746);function s(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{const t=(0,r.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,o.hasBasePath)(n.pathname)}catch(t){return!1}}},8137:function(e,t){"use strict";function n(e,t){const n={};return Object.keys(e).forEach((r=>{t.includes(r)||(n[r]=e[r])})),n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return n}})},5991:function(e,t){"use strict";function n(e){const t={};return e.forEach(((e,n)=>{"undefined"===typeof t[n]?t[n]=e:Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]})),t}function r(e){return"string"===typeof e||"number"===typeof e&&!isNaN(e)||"boolean"===typeof e?String(e):""}function o(e){const t=new URLSearchParams;return Object.entries(e).forEach((e=>{let[n,o]=e;Array.isArray(o)?o.forEach((e=>t.append(n,r(e)))):t.set(n,r(o))})),t}function s(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach((t=>{Array.from(t.keys()).forEach((t=>e.delete(t))),t.forEach(((t,n)=>e.append(n,t)))})),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return o},assign:function(){return s}})},1670:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});const r=n(6681);function o(e){let{re:t,groups:n}=e;return e=>{const o=t.exec(e);if(!o)return!1;const s=e=>{try{return decodeURIComponent(e)}catch(t){throw new r.DecodeError("failed to decode param")}},a={};return Object.keys(n).forEach((e=>{const t=n[e],r=o[t.pos];void 0!==r&&(a[e]=~r.indexOf("/")?r.split("/").map((e=>s(e))):t.repeat?[s(r)]:s(r))})),a}}},4586:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getRouteRegex:function(){return u},getNamedRouteRegex:function(){return f},getNamedMiddlewareRegex:function(){return d}});const r=n(4507),o=n(4910),s=n(9006);function a(e){const t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));const n=e.startsWith("...");return n&&(e=e.slice(3)),{key:e,repeat:n,optional:t}}function i(e){const t=(0,s.removeTrailingSlash)(e).slice(1).split("/"),n={};let i=1;return{parameterizedRoute:t.map((e=>{const t=r.INTERCEPTION_ROUTE_MARKERS.find((t=>e.startsWith(t))),s=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&s){const{key:e,optional:r,repeat:u}=a(s[1]);return n[e]={pos:i++,repeat:u,optional:r},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(s){const{key:e,repeat:t,optional:r}=a(s[1]);return n[e]={pos:i++,repeat:t,optional:r},t?r?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}return"/"+(0,o.escapeStringRegexp)(e)})).join(""),groups:n}}function u(e){const{parameterizedRoute:t,groups:n}=i(e);return{re:new RegExp("^"+t+"(?:/)?$"),groups:n}}function c(e){let{getSafeRouteKey:t,segment:n,routeKeys:r,keyPrefix:o}=e;const{key:s,optional:i,repeat:u}=a(n);let c=s.replace(/\W/g,"");o&&(c=""+o+c);let l=!1;return(0===c.length||c.length>30)&&(l=!0),isNaN(parseInt(c.slice(0,1)))||(l=!0),l&&(c=t()),r[c]=o?""+o+s:""+s,u?i?"(?:/(?<"+c+">.+?))?":"/(?<"+c+">.+?)":"/(?<"+c+">[^/]+?)"}function l(e,t){const n=(0,s.removeTrailingSlash)(e).slice(1).split("/"),a=function(){let e=0;return()=>{let t="",n=++e;for(;n>0;)t+=String.fromCharCode(97+(n-1)%26),n=Math.floor((n-1)/26);return t}}(),i={};return{namedParameterizedRoute:n.map((e=>{const n=r.INTERCEPTION_ROUTE_MARKERS.some((t=>e.startsWith(t))),s=e.match(/\[((?:\[.*\])|.+)\]/);return n&&s?c({getSafeRouteKey:a,segment:s[1],routeKeys:i,keyPrefix:t?"nxtI":void 0}):s?c({getSafeRouteKey:a,segment:s[1],routeKeys:i,keyPrefix:t?"nxtP":void 0}):"/"+(0,o.escapeStringRegexp)(e)})).join(""),routeKeys:i}}function f(e,t){const n=l(e,t);return{...u(e),namedRegex:"^"+n.namedParameterizedRoute+"(?:/)?$",routeKeys:n.routeKeys}}function d(e,t){const{parameterizedRoute:n}=i(e),{catchAll:r=!0}=t;if("/"===n){return{namedRegex:"^/"+(r?".*":"")+"$"}}const{namedParameterizedRoute:o}=l(e,!1);return{namedRegex:"^"+o+(r?"(?:(/.*)?)":"")+"$"}}},9255:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return r}});class n{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");const t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);const n=t.map((t=>this.children.get(t)._smoosh(""+e+t+"/"))).reduce(((e,t)=>[...e,...t]),[]);if(null!==this.slugName&&n.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){const t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw new Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');n.unshift(t)}return null!==this.restSlugName&&n.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&n.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),n}_insert(e,t,r){if(0===e.length)return void(this.placeholder=!1);if(r)throw new Error("Catch-all must be the last part of the URL.");let o=e[0];if(o.startsWith("[")&&o.endsWith("]")){let s=o.slice(1,-1),a=!1;if(s.startsWith("[")&&s.endsWith("]")&&(s=s.slice(1,-1),a=!0),s.startsWith("...")&&(s=s.substring(3),r=!0),s.startsWith("[")||s.endsWith("]"))throw new Error("Segment names may not start or end with extra brackets ('"+s+"').");if(s.startsWith("."))throw new Error("Segment names may not start with erroneous periods ('"+s+"').");function i(e,n){if(null!==e&&e!==n)throw new Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+n+"').");t.forEach((e=>{if(e===n)throw new Error('You cannot have the same slug name "'+n+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===o.replace(/\W/g,""))throw new Error('You cannot have the slug names "'+e+'" and "'+n+'" differ only by non-word symbols within a single dynamic path')})),t.push(n)}if(r)if(a){if(null!=this.restSlugName)throw new Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');i(this.optionalRestSlugName,s),this.optionalRestSlugName=s,o="[[...]]"}else{if(null!=this.optionalRestSlugName)throw new Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');i(this.restSlugName,s),this.restSlugName=s,o="[...]"}else{if(a)throw new Error('Optional route parameters are not yet supported ("'+e[0]+'").');i(this.slugName,s),this.slugName=s,o="[]"}}this.children.has(o)||this.children.set(o,new n),this.children.get(o)._insert(e.slice(1),t,r)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}}function r(e){const t=new n;return e.forEach((e=>t.insert(e))),t.smoosh()}},6681:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{WEB_VITALS:function(){return n},execOnce:function(){return r},isAbsoluteUrl:function(){return s},getLocationOrigin:function(){return a},getURL:function(){return i},getDisplayName:function(){return u},isResSent:function(){return c},normalizeRepeatedSlashes:function(){return l},loadGetInitialProps:function(){return f},SP:function(){return d},ST:function(){return p},DecodeError:function(){return h},NormalizeError:function(){return m},PageNotFoundError:function(){return g},MissingStaticPage:function(){return y},MiddlewareNotFoundError:function(){return b},stringifyError:function(){return P}});const n=["CLS","FCP","FID","INP","LCP","TTFB"];function r(e){let t,n=!1;return function(){for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return n||(n=!0,t=e(...o)),t}}const o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>o.test(e);function a(){const{protocol:e,hostname:t,port:n}=window.location;return e+"//"+t+(n?":"+n:"")}function i(){const{href:e}=window.location,t=a();return e.substring(t.length)}function u(e){return"string"===typeof e?e:e.displayName||e.name||"Unknown"}function c(e){return e.finished||e.headersSent}function l(e){const t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){const n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};const r=await e.getInitialProps(t);if(n&&c(n))return r;if(!r){const t='"'+u(e)+'.getInitialProps()" should resolve to an object. But found "'+r+'" instead.';throw new Error(t)}return r}const d="undefined"!==typeof performance,p=d&&["mark","measure","getEntriesByName"].every((e=>"function"===typeof performance[e]));class h extends Error{}class m extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function P(e){return JSON.stringify({message:e.message,stack:e.stack})}},1396:function(e,t,n){e.exports=n(8326)}}]);