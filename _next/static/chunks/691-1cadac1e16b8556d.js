(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[691],{413:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});const r=n(6451),i=n(3364)._(n(2265)),o=r._(n(4887)),s=r._(n(5793)),a=n(7929),u=n(5751),l=n(7327),c=(n(2637),n(6304)),d=r._(n(9950)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e,t,n,r,i,o){const s=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===s)return;e["data-loaded-src"]=s;("decode"in e?e.decode():Promise.resolve()).catch((()=>{})).then((()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){const t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function m(e){const[t,n]=i.version.split("."),r=parseInt(t,10),o=parseInt(n,10);return r>18||18===r&&o>=3?{fetchPriority:e}:{fetchpriority:e}}const g=(0,i.forwardRef)(((e,t)=>{let{src:n,srcSet:r,sizes:o,height:s,width:a,decoding:u,className:l,style:c,fetchPriority:d,placeholder:f,loading:g,unoptimized:h,fill:y,onLoadRef:b,onLoadingCompleteRef:v,setBlurComplete:w,setShowAltText:_,onLoad:S,onError:C,...P}=e;return i.default.createElement("img",{...P,...m(d),loading:g,width:a,height:s,decoding:u,"data-nimg":y?"fill":"1",className:l,style:c,sizes:o,srcSet:r,src:n,ref:(0,i.useCallback)((e=>{t&&("function"===typeof t?t(e):"object"===typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&p(e,f,b,v,w))}),[n,f,b,v,w,C,h,t]),onLoad:e=>{p(e.currentTarget,f,b,v,w)},onError:e=>{_(!0),"empty"!==f&&w(!0),C&&C(e)}})}));function h(e){let{isAppRouter:t,imgAttributes:n}=e;const r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...m(n.fetchPriority)};return t&&o.default.preload?(o.default.preload(n.src,r),null):i.default.createElement(s.default,null,i.default.createElement("link",{key:"__nimg-"+n.src+n.srcSet+n.sizes,rel:"preload",href:n.srcSet?void 0:n.src,...r}))}const y=(0,i.forwardRef)(((e,t)=>{const n=!(0,i.useContext)(c.RouterContext),r=(0,i.useContext)(l.ImageConfigContext),o=(0,i.useMemo)((()=>{const e=f||r||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort(((e,t)=>e-t)),n=e.deviceSizes.sort(((e,t)=>e-t));return{...e,allSizes:t,deviceSizes:n}}),[r]),{onLoad:s,onLoadingComplete:p}=e,m=(0,i.useRef)(s);(0,i.useEffect)((()=>{m.current=s}),[s]);const y=(0,i.useRef)(p);(0,i.useEffect)((()=>{y.current=p}),[p]);const[b,v]=(0,i.useState)(!1),[w,_]=(0,i.useState)(!1),{props:S,meta:C}=(0,a.getImgProps)(e,{defaultLoader:d.default,imgConf:o,blurComplete:b,showAltText:w});return i.default.createElement(i.default.Fragment,null,i.default.createElement(g,{...S,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:m,onLoadingCompleteRef:y,setBlurComplete:v,setShowAltText:_,ref:t}),C.priority?i.default.createElement(h,{isAppRouter:n,imgAttributes:S}):null)}));("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});const r=n(6451)._(n(2265)).default.createContext({})},4472:function(e,t){"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},7929:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return u}});n(2637);const r=n(1511),i=n(5751);function o(e){return void 0!==e.default}new Map;function s(e){return"undefined"===typeof e?e:"number"===typeof e?Number.isFinite(e)?e:NaN:"string"===typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:s,loader:a}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};const{widths:u,kind:l}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){const e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){const e=.01*Math.min(...t);return{widths:i.filter((t=>t>=r[0]*e)),kind:"w"}}return{widths:i,kind:"w"}}return"number"!==typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map((e=>i.find((t=>t>=e))||i[i.length-1])))],kind:"x"}}(t,i,s),c=u.length-1;return{sizes:s||"w"!==l?s:"100vw",srcSet:u.map(((e,r)=>a({config:t,src:n,quality:o,width:e})+" "+("w"===l?e:r+1)+l)).join(", "),src:a({config:t,src:n,quality:o,width:u[c]})}}function u(e,t){let{src:n,sizes:u,unoptimized:l=!1,priority:c=!1,loading:d,className:f,quality:p,width:m,height:g,fill:h=!1,style:y,onLoad:b,onLoadingComplete:v,placeholder:w="empty",blurDataURL:_,fetchPriority:S,layout:C,objectFit:P,objectPosition:j,lazyBoundary:z,lazyRoot:x,...O}=e;const{imgConf:E,showAltText:M,blurComplete:I,defaultLoader:k}=t;let A,R=E||i.imageConfigDefault;if("allSizes"in R)A=R;else{const e=[...R.deviceSizes,...R.imageSizes].sort(((e,t)=>e-t)),t=R.deviceSizes.sort(((e,t)=>e-t));A={...R,allSizes:e,deviceSizes:t}}let L=O.loader||k;delete O.loader,delete O.srcSet;const D="__next_img_default"in L;if(D){if("custom"===A.loader)throw new Error('Image with src "'+n+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{const e=L;L=t=>{const{config:n,...r}=t;return e(r)}}if(C){"fill"===C&&(h=!0);const e={responsive:"100vw",fill:"100vw"},t={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];t&&(y={...y,...t});const n=e[C];n&&!u&&(u=n)}let U,N,F="",T=s(m),B=s(g);if(function(e){return"object"===typeof e&&(o(e)||function(e){return void 0!==e.src}(e))}(n)){const e=o(n)?n.default:n;if(!e.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(U=e.blurWidth,N=e.blurHeight,_=_||e.blurDataURL,F=e.src,!h)if(T||B){if(T&&!B){const t=T/e.width;B=Math.round(e.height*t)}else if(!T&&B){const t=B/e.height;T=Math.round(e.width*t)}}else T=e.width,B=e.height}n="string"===typeof n?n:F;let W=!c&&("lazy"===d||"undefined"===typeof d);(!n||n.startsWith("data:")||n.startsWith("blob:"))&&(l=!0,W=!1),A.unoptimized&&(l=!0),D&&n.endsWith(".svg")&&!A.dangerouslyAllowSVG&&(l=!0),c&&(S="high");const q=s(p);const G=Object.assign(h?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:j}:{},M?{}:{color:"transparent"},y),H=I||"empty"===w?null:"blur"===w?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:T,heightInt:B,blurWidth:U,blurHeight:N,blurDataURL:_||"",objectFit:G.objectFit})+'")':'url("'+w+'")';let V=H?{backgroundSize:G.objectFit||"cover",backgroundPosition:G.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{};const $=a({config:A,src:n,unoptimized:l,width:T,quality:q,sizes:u,loader:L});return{props:{...O,loading:W?"lazy":d,fetchPriority:S,width:T,height:B,decoding:"async",className:f,style:{...G,...V},sizes:$.sizes,srcSet:$.srcSet,src:$.src},meta:{unoptimized:l,priority:c,placeholder:w,fill:h}}}},5793:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return l},default:function(){return p}});const r=n(6451),i=n(3364)._(n(2265)),o=r._(n(110)),s=n(8569),a=n(1852),u=n(4472);n(2637);function l(e){void 0===e&&(e=!1);const t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce(((e,t)=>"string"===typeof t||"number"===typeof t?e:e.concat(t)),[])):e.concat(t)}const d=["name","httpEquiv","charSet","itemProp"];function f(e,t){const{inAmpMode:n}=t;return e.reduce(c,[]).reverse().concat(l(n).reverse()).filter(function(){const e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,s=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){s=!0;const t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=d.length;e<t;e++){const t=d[e];if(i.props.hasOwnProperty(t))if("charSet"===t)n.has(t)?o=!1:n.add(t);else{const e=i.props[t],n=r[t]||new Set;"name"===t&&s||!n.has(e)?(n.add(e),r[t]=n):o=!1}}}return o}}()).reverse().map(((e,t)=>{const r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((t=>e.props.href.startsWith(t)))){const t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,i.default.cloneElement(e,t)}return i.default.cloneElement(e,{key:r})}))}const p=function(e){let{children:t}=e;const n=(0,i.useContext)(s.AmpStateContext),r=(0,i.useContext)(a.HeadManagerContext);return i.default.createElement(o.default,{reduceComponentsToState:f,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1511:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:s}=e;const a=r?40*r:t,u=i?40*i:n,l=a&&u?"viewBox='0 0 "+a+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+l+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(l?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},7327:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});const r=n(6451)._(n(2265)),i=n(5751),o=r.default.createContext(i.imageConfigDefault)},5751:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});const n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},679:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{unstable_getImgProps:function(){return u},default:function(){return l}});const r=n(6451),i=n(7929),o=n(2637),s=n(413),a=r._(n(9950)),u=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");const{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(const[n,r]of Object.entries(t))void 0===r&&delete t[n];return{props:t}},l=s.Image},9950:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;const r=n},110:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});const r=n(2265),i=r.useLayoutEffect,o=r.useEffect;function s(e){const{headManager:t,reduceComponentsToState:n}=e;function s(){if(t&&t.mountedInstances){const i=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}return i((()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}})),i((()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)}))),o((()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}))),null}},2637:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},6691:function(e,t,n){e.exports=n(679)}}]);