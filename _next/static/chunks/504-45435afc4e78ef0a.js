(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[504],{1914:function(e,t,n){"use strict";n.d(t,{M:function(){return g}});var r=n(2265),o=n(6141);function i(){const e=(0,r.useRef)(!1);return(0,o.L)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}var s=n(6400);var a=n(6529),c=n(4816);class u extends r.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function l({children:e,isPresent:t}){const n=(0,r.useId)(),o=(0,r.useRef)(null),i=(0,r.useRef)({width:0,height:0,top:0,left:0});return(0,r.useInsertionEffect)((()=>{const{width:e,height:r,top:s,left:a}=i.current;if(t||!o.current||!e||!r)return;o.current.dataset.motionPopId=n;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`\n          [data-motion-pop-id="${n}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${r}px !important;\n            top: ${s}px !important;\n            left: ${a}px !important;\n          }\n        `),()=>{document.head.removeChild(c)}}),[t]),r.createElement(u,{isPresent:t,childRef:o,sizeRef:i},r.cloneElement(e,{ref:o}))}const d=({children:e,initial:t,isPresent:n,onExitComplete:o,custom:i,presenceAffectsLayout:s,mode:u})=>{const d=(0,c.h)(f),p=(0,r.useId)(),m=(0,r.useMemo)((()=>({id:p,initial:t,isPresent:n,custom:i,onExitComplete:e=>{d.set(e,!0);for(const t of d.values())if(!t)return;o&&o()},register:e=>(d.set(e,!1),()=>d.delete(e))})),s?void 0:[n]);return(0,r.useMemo)((()=>{d.forEach(((e,t)=>d.set(t,!1)))}),[n]),r.useEffect((()=>{!n&&!d.size&&o&&o()}),[n]),"popLayout"===u&&(e=r.createElement(l,{isPresent:n},e)),r.createElement(a.O.Provider,{value:m},e)};function f(){return new Map}var p=n(9014);var m=n(4235);const h=e=>e.key||"";const g=({children:e,custom:t,initial:n=!0,onExitComplete:a,exitBeforeEnter:c,presenceAffectsLayout:u=!0,mode:l="sync"})=>{(0,m.k)(!c,"Replace exitBeforeEnter with mode='wait'");const f=(0,r.useContext)(p.p).forceRender||function(){const e=i(),[t,n]=(0,r.useState)(0),o=(0,r.useCallback)((()=>{e.current&&n(t+1)}),[t]);return[(0,r.useCallback)((()=>s.Wi.postRender(o)),[o]),t]}()[0],g=i(),y=function(e){const t=[];return r.Children.forEach(e,(e=>{(0,r.isValidElement)(e)&&t.push(e)})),t}(e);let b=y;const v=(0,r.useRef)(new Map).current,w=(0,r.useRef)(b),_=(0,r.useRef)(new Map).current,C=(0,r.useRef)(!0);var P;if((0,o.L)((()=>{C.current=!1,function(e,t){e.forEach((e=>{const n=h(e);t.set(n,e)}))}(y,_),w.current=b})),P=()=>{C.current=!0,_.clear(),v.clear()},(0,r.useEffect)((()=>()=>P()),[]),C.current)return r.createElement(r.Fragment,null,b.map((e=>r.createElement(d,{key:h(e),isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:u,mode:l},e))));b=[...b];const S=w.current.map(h),E=y.map(h),x=S.length;for(let r=0;r<x;r++){const e=S[r];-1!==E.indexOf(e)||v.has(e)||v.set(e,void 0)}return"wait"===l&&v.size&&(b=[]),v.forEach(((e,n)=>{if(-1!==E.indexOf(n))return;const o=_.get(n);if(!o)return;const i=S.indexOf(n);let s=e;if(!s){const e=()=>{_.delete(n),v.delete(n);const e=w.current.findIndex((e=>e.key===n));if(w.current.splice(e,1),!v.size){if(w.current=y,!1===g.current)return;f(),a&&a()}};s=r.createElement(d,{key:h(o),isPresent:!1,onExitComplete:e,custom:t,presenceAffectsLayout:u,mode:l},o),v.set(n,s)}b.splice(i,0,s)})),b=b.map((e=>{const t=e.key;return v.has(t)?e:r.createElement(d,{key:h(e),isPresent:!0,presenceAffectsLayout:u,mode:l},e)})),r.createElement(r.Fragment,null,v.size?b:b.map((e=>(0,r.cloneElement)(e))))}},413:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});const r=n(6451),o=n(3364)._(n(2265)),i=r._(n(4887)),s=r._(n(5793)),a=n(7929),c=n(5751),u=n(7327),l=(n(2637),n(6304)),d=r._(n(9950)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e,t,n,r,o,i){const s=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===s)return;e["data-loaded-src"]=s;("decode"in e?e.decode():Promise.resolve()).catch((()=>{})).then((()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==n?void 0:n.current){const t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function m(e){const[t,n]=o.version.split("."),r=parseInt(t,10),i=parseInt(n,10);return r>18||18===r&&i>=3?{fetchPriority:e}:{fetchpriority:e}}const h=(0,o.forwardRef)(((e,t)=>{let{src:n,srcSet:r,sizes:i,height:s,width:a,decoding:c,className:u,style:l,fetchPriority:d,placeholder:f,loading:h,unoptimized:g,fill:y,onLoadRef:b,onLoadingCompleteRef:v,setBlurComplete:w,setShowAltText:_,onLoad:C,onError:P,...S}=e;return o.default.createElement("img",{...S,...m(d),loading:h,width:a,height:s,decoding:c,"data-nimg":y?"fill":"1",className:u,style:l,sizes:i,srcSet:r,src:n,ref:(0,o.useCallback)((e=>{t&&("function"===typeof t?t(e):"object"===typeof t&&(t.current=e)),e&&(P&&(e.src=e.src),e.complete&&p(e,f,b,v,w))}),[n,f,b,v,w,P,g,t]),onLoad:e=>{p(e.currentTarget,f,b,v,w)},onError:e=>{_(!0),"empty"!==f&&w(!0),P&&P(e)}})}));function g(e){let{isAppRouter:t,imgAttributes:n}=e;const r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...m(n.fetchPriority)};return t&&i.default.preload?(i.default.preload(n.src,r),null):o.default.createElement(s.default,null,o.default.createElement("link",{key:"__nimg-"+n.src+n.srcSet+n.sizes,rel:"preload",href:n.srcSet?void 0:n.src,...r}))}const y=(0,o.forwardRef)(((e,t)=>{const n=!(0,o.useContext)(l.RouterContext),r=(0,o.useContext)(u.ImageConfigContext),i=(0,o.useMemo)((()=>{const e=f||r||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort(((e,t)=>e-t)),n=e.deviceSizes.sort(((e,t)=>e-t));return{...e,allSizes:t,deviceSizes:n}}),[r]),{onLoad:s,onLoadingComplete:p}=e,m=(0,o.useRef)(s);(0,o.useEffect)((()=>{m.current=s}),[s]);const y=(0,o.useRef)(p);(0,o.useEffect)((()=>{y.current=p}),[p]);const[b,v]=(0,o.useState)(!1),[w,_]=(0,o.useState)(!1),{props:C,meta:P}=(0,a.getImgProps)(e,{defaultLoader:d.default,imgConf:i,blurComplete:b,showAltText:w});return o.default.createElement(o.default.Fragment,null,o.default.createElement(h,{...C,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:m,onLoadingCompleteRef:y,setBlurComplete:v,setShowAltText:_,ref:t}),P.priority?o.default.createElement(g,{isAppRouter:n,imgAttributes:C}):null)}));("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});const r=n(6451)._(n(2265)).default.createContext({})},4472:function(e,t){"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},7929:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return c}});n(2637);const r=n(1511),o=n(5751);function i(e){return void 0!==e.default}new Map;function s(e){return"undefined"===typeof e?e:"number"===typeof e?Number.isFinite(e)?e:NaN:"string"===typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e){let{config:t,src:n,unoptimized:r,width:o,quality:i,sizes:s,loader:a}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};const{widths:c,kind:u}=function(e,t,n){let{deviceSizes:r,allSizes:o}=e;if(n){const e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){const e=.01*Math.min(...t);return{widths:o.filter((t=>t>=r[0]*e)),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map((e=>o.find((t=>t>=e))||o[o.length-1])))],kind:"x"}}(t,o,s),l=c.length-1;return{sizes:s||"w"!==u?s:"100vw",srcSet:c.map(((e,r)=>a({config:t,src:n,quality:i,width:e})+" "+("w"===u?e:r+1)+u)).join(", "),src:a({config:t,src:n,quality:i,width:c[l]})}}function c(e,t){let{src:n,sizes:c,unoptimized:u=!1,priority:l=!1,loading:d,className:f,quality:p,width:m,height:h,fill:g=!1,style:y,onLoad:b,onLoadingComplete:v,placeholder:w="empty",blurDataURL:_,fetchPriority:C,layout:P,objectFit:S,objectPosition:E,lazyBoundary:x,lazyRoot:z,...j}=e;const{imgConf:O,showAltText:M,blurComplete:R,defaultLoader:k}=t;let I,A=O||o.imageConfigDefault;if("allSizes"in A)I=A;else{const e=[...A.deviceSizes,...A.imageSizes].sort(((e,t)=>e-t)),t=A.deviceSizes.sort(((e,t)=>e-t));I={...A,allSizes:e,deviceSizes:t}}let L=j.loader||k;delete j.loader,delete j.srcSet;const D="__next_img_default"in L;if(D){if("custom"===I.loader)throw new Error('Image with src "'+n+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{const e=L;L=t=>{const{config:n,...r}=t;return e(r)}}if(P){"fill"===P&&(g=!0);const e={responsive:"100vw",fill:"100vw"},t={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];t&&(y={...y,...t});const n=e[P];n&&!c&&(c=n)}let U,F,B="",N=s(m),T=s(h);if(function(e){return"object"===typeof e&&(i(e)||function(e){return void 0!==e.src}(e))}(n)){const e=i(n)?n.default:n;if(!e.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(U=e.blurWidth,F=e.blurHeight,_=_||e.blurDataURL,B=e.src,!g)if(N||T){if(N&&!T){const t=N/e.width;T=Math.round(e.height*t)}else if(!N&&T){const t=T/e.height;N=Math.round(e.width*t)}}else N=e.width,T=e.height}n="string"===typeof n?n:B;let W=!l&&("lazy"===d||"undefined"===typeof d);(!n||n.startsWith("data:")||n.startsWith("blob:"))&&(u=!0,W=!1),I.unoptimized&&(u=!0),D&&n.endsWith(".svg")&&!I.dangerouslyAllowSVG&&(u=!0),l&&(C="high");const q=s(p);const G=Object.assign(g?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:S,objectPosition:E}:{},M?{}:{color:"transparent"},y),$=R||"empty"===w?null:"blur"===w?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:N,heightInt:T,blurWidth:U,blurHeight:F,blurDataURL:_||"",objectFit:G.objectFit})+'")':'url("'+w+'")';let H=$?{backgroundSize:G.objectFit||"cover",backgroundPosition:G.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:$}:{};const V=a({config:I,src:n,unoptimized:u,width:N,quality:q,sizes:c,loader:L});return{props:{...j,loading:W?"lazy":d,fetchPriority:C,width:N,height:T,decoding:"async",className:f,style:{...G,...H},sizes:V.sizes,srcSet:V.srcSet,src:V.src},meta:{unoptimized:u,priority:l,placeholder:w,fill:g}}}},5793:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return u},default:function(){return p}});const r=n(6451),o=n(3364)._(n(2265)),i=r._(n(110)),s=n(8569),a=n(1852),c=n(4472);n(2637);function u(e){void 0===e&&(e=!1);const t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce(((e,t)=>"string"===typeof t||"number"===typeof t?e:e.concat(t)),[])):e.concat(t)}const d=["name","httpEquiv","charSet","itemProp"];function f(e,t){const{inAmpMode:n}=t;return e.reduce(l,[]).reverse().concat(u(n).reverse()).filter(function(){const e=new Set,t=new Set,n=new Set,r={};return o=>{let i=!0,s=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){s=!0;const t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(let e=0,t=d.length;e<t;e++){const t=d[e];if(o.props.hasOwnProperty(t))if("charSet"===t)n.has(t)?i=!1:n.add(t);else{const e=o.props[t],n=r[t]||new Set;"name"===t&&s||!n.has(e)?(n.add(e),r[t]=n):i=!1}}}return i}}()).reverse().map(((e,t)=>{const r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((t=>e.props.href.startsWith(t)))){const t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:r})}))}const p=function(e){let{children:t}=e;const n=(0,o.useContext)(s.AmpStateContext),r=(0,o.useContext)(a.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:f,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1511:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:o,blurDataURL:i,objectFit:s}=e;const a=r?40*r:t,c=o?40*o:n,u=a&&c?"viewBox='0 0 "+a+" "+c+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},7327:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return i}});const r=n(6451)._(n(2265)),o=n(5751),i=r.default.createContext(o.imageConfigDefault)},5751:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});const n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},679:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{unstable_getImgProps:function(){return c},default:function(){return u}});const r=n(6451),o=n(7929),i=n(2637),s=n(413),a=r._(n(9950)),c=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");const{props:t}=(0,o.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(const[n,r]of Object.entries(t))void 0===r&&delete t[n];return{props:t}},u=s.Image},9950:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:o}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;const r=n},110:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});const r=n(2265),o=r.useLayoutEffect,i=r.useEffect;function s(e){const{headManager:t,reduceComponentsToState:n}=e;function s(){if(t&&t.mountedInstances){const o=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(o,e))}}return o((()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}})),o((()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)}))),i((()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}))),null}},2637:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},6691:function(e,t,n){e.exports=n(679)},4033:function(e,t,n){e.exports=n(94)}}]);