(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[514],{2022:function(e,t,n){"use strict";n.d(t,{M:function(){return x}});var r=n(2265),i=n(6141);function o(){const e=(0,r.useRef)(!1);return(0,i.L)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}var s=n(6400);var c=n(6529),l=n(4816);class a extends r.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function u({children:e,isPresent:t}){const n=(0,r.useId)(),i=(0,r.useRef)(null),o=(0,r.useRef)({width:0,height:0,top:0,left:0});return(0,r.useInsertionEffect)((()=>{const{width:e,height:r,top:s,left:c}=o.current;if(t||!i.current||!e||!r)return;i.current.dataset.motionPopId=n;const l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`\n          [data-motion-pop-id="${n}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${r}px !important;\n            top: ${s}px !important;\n            left: ${c}px !important;\n          }\n        `),()=>{document.head.removeChild(l)}}),[t]),r.createElement(a,{isPresent:t,childRef:i,sizeRef:o},r.cloneElement(e,{ref:i}))}const f=({children:e,initial:t,isPresent:n,onExitComplete:i,custom:o,presenceAffectsLayout:s,mode:a})=>{const f=(0,l.h)(d),h=(0,r.useId)(),m=(0,r.useMemo)((()=>({id:h,initial:t,isPresent:n,custom:o,onExitComplete:e=>{f.set(e,!0);for(const t of f.values())if(!t)return;i&&i()},register:e=>(f.set(e,!1),()=>f.delete(e))})),s?void 0:[n]);return(0,r.useMemo)((()=>{f.forEach(((e,t)=>f.set(t,!1)))}),[n]),r.useEffect((()=>{!n&&!f.size&&i&&i()}),[n]),"popLayout"===a&&(e=r.createElement(u,{isPresent:n},e)),r.createElement(c.O.Provider,{value:m},e)};function d(){return new Map}var h=n(9014),m=n(7258),p=n(4235);const g=e=>e.key||"";const x=({children:e,custom:t,initial:n=!0,onExitComplete:c,exitBeforeEnter:l,presenceAffectsLayout:a=!0,mode:u="sync"})=>{(0,p.k)(!l,"Replace exitBeforeEnter with mode='wait'");const d=(0,r.useContext)(h.p).forceRender||function(){const e=o(),[t,n]=(0,r.useState)(0),i=(0,r.useCallback)((()=>{e.current&&n(t+1)}),[t]);return[(0,r.useCallback)((()=>s.Wi.postRender(i)),[i]),t]}()[0],x=o(),v=function(e){const t=[];return r.Children.forEach(e,(e=>{(0,r.isValidElement)(e)&&t.push(e)})),t}(e);let w=v;const y=(0,r.useRef)(new Map).current,b=(0,r.useRef)(w),j=(0,r.useRef)(new Map).current,E=(0,r.useRef)(!0);if((0,i.L)((()=>{E.current=!1,function(e,t){e.forEach((e=>{const n=g(e);t.set(n,e)}))}(v,j),b.current=w})),(0,m.z)((()=>{E.current=!0,j.clear(),y.clear()})),E.current)return r.createElement(r.Fragment,null,w.map((e=>r.createElement(f,{key:g(e),isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:a,mode:u},e))));w=[...w];const k=b.current.map(g),P=v.map(g),N=k.length;for(let r=0;r<N;r++){const e=k[r];-1!==P.indexOf(e)||y.has(e)||y.set(e,void 0)}return"wait"===u&&y.size&&(w=[]),y.forEach(((e,n)=>{if(-1!==P.indexOf(n))return;const i=j.get(n);if(!i)return;const o=k.indexOf(n);let s=e;if(!s){const e=()=>{j.delete(n),y.delete(n);const e=b.current.findIndex((e=>e.key===n));if(b.current.splice(e,1),!y.size){if(b.current=v,!1===x.current)return;d(),c&&c()}};s=r.createElement(f,{key:g(i),isPresent:!1,onExitComplete:e,custom:t,presenceAffectsLayout:a,mode:u},i),y.set(n,s)}w.splice(o,0,s)})),w=w.map((e=>{const t=e.key;return y.has(t)?e:r.createElement(f,{key:g(e),isPresent:!0,presenceAffectsLayout:a,mode:u},e)})),r.createElement(r.Fragment,null,y.size?w:w.map((e=>(0,r.cloneElement)(e))))}},4519:function(e,t,n){Promise.resolve().then(n.t.bind(n,8326,23)),Promise.resolve().then(n.bind(n,6801)),Promise.resolve().then(n.bind(n,696)),Promise.resolve().then(n.bind(n,264)),Promise.resolve().then(n.bind(n,8698)),Promise.resolve().then(n.bind(n,1585)),Promise.resolve().then(n.bind(n,9683)),Promise.resolve().then(n.bind(n,8651)),Promise.resolve().then(n.bind(n,1364)),Promise.resolve().then(n.bind(n,2423)),Promise.resolve().then(n.bind(n,2367)),Promise.resolve().then(n.bind(n,7981)),Promise.resolve().then(n.bind(n,2138)),Promise.resolve().then(n.bind(n,313)),Promise.resolve().then(n.bind(n,3196)),Promise.resolve().then(n.bind(n,5248)),Promise.resolve().then(n.bind(n,1658))},6304:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return r}});const r=n(6451)._(n(2265)).default.createContext(null)},5329:function(e,t,n){"use strict";n.d(t,{E:function(){return o}});var r=n(135);const i=[{name:"About",href:"",icon:r.P.home,url:""},{name:"Work",href:"/work",icon:r.P.mic,url:""},{name:"Contact",href:"/contact",icon:r.P.link,url:""}].map((e=>({...e,url:e.href="/portfolio"+e.href})));function o(e){return i.find((t=>t.name==e))||i[0]}t.Z=i},5248:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(7437),i=n(6894),o=n(2265);function s(e){let{children:t,className:n,max:s=20}=e;const c=(0,o.useRef)(null),[l,a]=(0,o.useState)({x:0,y:0}),u=s,{x:f,y:d}=l;return(0,r.jsx)(i.E.div,{style:{width:"fit-content",height:"fit-content",transformOrigin:"top left"},className:n,ref:c,onMouseMove:e=>{const{clientX:t,clientY:n}=e,r=e.target.getBoundingClientRect(),i=t-(r.left+r.width/2),o=n-(r.top+r.height/2);a({x:Math.max(Math.min(i,u),-u),y:Math.max(Math.min(o,u),-u)})},onMouseLeave:e=>{a({x:0,y:0})},animate:{x:f,y:d},transition:{type:"spring",damping:10,stiffness:180},children:t})}},3196:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var r=n(7437),i=n(2265);function o(e){const[t,n]=(0,i.useState)({width:0,height:0,top:0,left:0}),r=()=>{if(e.current){const t=e.current.getBoundingClientRect();n({width:t.width,height:t.height,top:t.top,left:t.left})}};return(0,i.useEffect)((()=>{if(!e.current)return;const t=new ResizeObserver((()=>{r()}));return t.observe(e.current),()=>t.disconnect()}),[]),(0,i.useEffect)((()=>(window.addEventListener("resize",r),r(),()=>window.removeEventListener("resize",r))),[]),t}function s(){const[e,t]=(0,i.useState)({window:{width:0,height:0},body:{width:0,height:0}});function n(){t({window:{width:window.innerWidth,height:window.innerHeight},body:{width:document.body.offsetWidth,height:document.body.offsetHeight}})}return(0,i.useEffect)((()=>{const e=["resize"];return e.forEach((function(e){window.addEventListener(e,n)})),n(),()=>{e.forEach((function(e){window.removeEventListener(e,n)}))}}),[true]),(0,i.useEffect)((()=>{if(!document.body)return;const e=new ResizeObserver((()=>{n()}));return e.observe(document.body),()=>e.disconnect()}),[]),(0,i.useEffect)((()=>{if(!document.body)return;const e=new ResizeObserver((()=>{n()}));return e.observe(document.body),()=>e.disconnect()}),[]),e}var c=n(9403),l=n(4816),a=n(4235),u=n(5405);const f=new WeakMap;let d;function h({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=f.get(e))||void 0===r||r.forEach((r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){const{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})}))}function m(e){e.forEach(h)}function p(e,t){d||"undefined"!==typeof ResizeObserver&&(d=new ResizeObserver(m));const n=(0,u.I)(e);return n.forEach((e=>{let n=f.get(e);n||(n=new Set,f.set(e,n)),n.add(t),null===d||void 0===d||d.observe(e)})),()=>{n.forEach((e=>{const n=f.get(e);null===n||void 0===n||n.delete(t),(null===n||void 0===n?void 0:n.size)||null===d||void 0===d||d.unobserve(e)}))}}const g=new Set;let x;function v(e){return g.add(e),x||(x=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};g.forEach((e=>e(t)))},window.addEventListener("resize",x)),()=>{g.delete(e),!g.size&&x&&(x=void 0)}}var w=n(9464),y=n(9081);const b={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function j(e,t,n,r){const i=n[t],{length:o,position:s}=b[t],c=i.current,l=n.time;i.current=e["scroll"+s],i.scrollLength=e["scroll"+o]-e["client"+o],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=(0,w.Y)(0,i.scrollLength,i.current);const a=r-l;i.velocity=a>50?0:(0,y.R)(i.current-c,a)}const E={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},k={start:0,center:.5,end:1};function P(e,t,n=0){let r=0;if(void 0!==k[e]&&(e=k[e]),"string"===typeof e){const t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"===typeof e&&(r=t*e),n+r}const N=[0,0];function L(e,t,n,r){let i=Array.isArray(e)?e:N,o=0,s=0;return"number"===typeof e?i=[e,e]:"string"===typeof e&&(i=(e=e.trim()).includes(" ")?e.split(" "):[e,k[e]?e:"0"]),o=P(i[0],n,r),s=P(i[1],t),o-s}var z=n(1857),R=n(4330);const _={x:0,y:0};function O(e,t,n){let{offset:r=E.All}=n;const{target:i=e,axis:o="y"}=n,s="y"===o?"height":"width",c=i!==e?function(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){const e=r.getBoundingClientRect();r=r.parentElement;const t=r.getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else{if(!(r instanceof SVGGraphicsElement))break;{const{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let i=null,o=r.parentNode;for(;!i;)"svg"===o.tagName&&(i=o),o=r.parentNode;r=i}}return n}(i,e):_,l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:function(e){return"getBBox"in e&&"svg"!==e.tagName?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}(i),a={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let u=!t[o].interpolate;const f=r.length;for(let d=0;d<f;d++){const e=L(r[d],a[s],l[s],c[o]);u||e===t[o].interpolatorOffsets[d]||(u=!0),t[o].offset[d]=e}u&&(t[o].interpolate=(0,z.s)(t[o].offset,(0,R.Y)(r)),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=t[o].interpolate(t[o].current)}function W(e,t,n,r={}){return{measure:()=>function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}(e,r.target,n),update:t=>{!function(e,t,n){j(e,"x",t,n),j(e,"y",t,n),t.time=n}(e,n,t),(r.offset||r.target)&&O(e,n,r)},notify:()=>t(n)}}var Z=n(6400);const C=new WeakMap,B=new WeakMap,M=new WeakMap,S=e=>e===document.documentElement?window:e;function H(e,{container:t=document.documentElement,...n}={}){let r=M.get(t);r||(r=new Set,M.set(t,r));const i=W(t,e,{time:0,x:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0},y:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}},n);if(r.add(i),!C.has(t)){const e=()=>{for(const e of r)e.measure()},n=()=>{for(const e of r)e.update(Z.frameData.timestamp)},i=()=>{for(const e of r)e.notify()},c=()=>{Z.Wi.read(e,!1,!0),Z.Wi.update(n,!1,!0),Z.Wi.update(i,!1,!0)};C.set(t,c);const l=S(t);window.addEventListener("resize",c,{passive:!0}),t!==document.documentElement&&B.set(t,(s=c,"function"===typeof(o=t)?v(o):p(o,s))),l.addEventListener("scroll",c,{passive:!0})}var o,s;const c=C.get(t);return Z.Wi.read(c,!1,!0),()=>{var e;(0,Z.Pn)(c);const n=M.get(t);if(!n)return;if(n.delete(i),n.size)return;const r=C.get(t);C.delete(t),r&&(S(t).removeEventListener("scroll",r),null===(e=B.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}var A=n(6141);function X(e,t){(0,a.K)(Boolean(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}const T=()=>({scrollX:(0,c.BX)(0),scrollY:(0,c.BX)(0),scrollXProgress:(0,c.BX)(0),scrollYProgress:(0,c.BX)(0)});var I=n(5786);function Y(e,t){const n=function(e){const t=(0,l.h)((()=>(0,c.BX)(e))),{isStatic:n}=(0,i.useContext)(I._);if(n){const[,n]=(0,i.useState)(e);(0,i.useEffect)((()=>t.on("change",n)),[])}return t}(t()),r=()=>n.set(t());return r(),(0,A.L)((()=>{const t=()=>Z.Wi.update(r,!1,!0),n=e.map((e=>e.on("change",t)));return()=>{n.forEach((e=>e())),(0,Z.Pn)(r)}})),n}function F(e,t,n,r){if("function"===typeof e)return function(e){c.S1.current=[],e();const t=Y(c.S1.current,e);return c.S1.current=void 0,t}(e);const i="function"===typeof t?t:function(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],o=e[2+n],s=e[3+n],c=(0,z.s)(i,o,{mixer:(l=o[0],(e=>"object"===typeof e&&e.mix)(l)?l.mix:void 0),...s});var l;return t?c(r):c}(t,n,r);return Array.isArray(e)?U(e,i):U([e],(([e])=>i(e)))}function U(e,t){const n=(0,l.h)((()=>[]));return Y(e,(()=>{n.length=0;const r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)}))}var $=n(6894);function D(e){let{children:t,height:n}=e;const c=(0,i.useRef)(null),{scrollY:a}=function({container:e,target:t,layoutEffect:n=!0,...r}={}){const o=(0,l.h)(T);return(n?A.L:i.useEffect)((()=>(X("target",t),X("container",e),H((({x:e,y:t})=>{o.scrollX.set(e.current),o.scrollXProgress.set(e.progress),o.scrollY.set(t.current),o.scrollYProgress.set(t.progress)}),{...r,container:(null===e||void 0===e?void 0:e.current)||void 0,target:(null===t||void 0===t?void 0:t.current)||void 0}))),[e,t,JSON.stringify(r.offset)]),o}(),{window:u,body:f}=s(),d=o(c),h=F((()=>{if(0==f.height||0==u.height)return 0;const e=f.height-u.height-d.height;return a.get()<e?0:a.get()-e}));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{ref:c,id:"fake-footer",style:{height:n,minHeight:n},className:"hidden xl:block"}),(0,r.jsx)($.E.div,{className:" w-screen bottom-0 left-0 right-0 xl:fixed xl:overflow-hidden",style:{height:h},children:(0,r.jsx)("div",{className:" xl:absolute w-full h-full bottom-0 left-0 right-0",style:{minHeight:n},children:t})})]})}},3542:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7437),i=n(952);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var s=function(e){return i.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 38 10"},e),i.createElement("path",{d:"M2.4 4.34c5.43 1.98 20.56 1 27.5.5 5.19-.37 4.17-.3 6.02-.14",style:{fill:"none",strokeMiterlimit:10,strokeWidth:5}}))};function c(e){let{className:t}=e;return(0,r.jsx)(s,{className:"absolute top-[25%] left-0 w-[calc(120%)] ml-[-10%] h-full z-[-1] stroke-secondary "+t,preserveAspectRatio:"none"})}},135:function(e,t,n){"use strict";n.d(t,{P:function(){return _}});var r=n(7437),i=n(9558),o=n(7663),s=n(1726),c=n(4615),l=n(562),a=n(6731),u=n(3872),f=n(1067),d=n(1580),h=n(9391),m=n(6208),p=n(9529),g=n(8251),x=n(1777),v=n(1890),w=n(8658),y=n(1179),b=n(7445),j=n(8386),E=n(6184),k=n(1061),P=n(3216),N=n(5663),L=n(6101),z=n(2423),R=n(8651);n(2367),n(1585),n(2138),n(313),n(264),n(696),n(6801),n(8698),n(9683),n(1364),n(7981);const _={logo:e=>(0,r.jsx)(z.default,{...e}),x:e=>(0,r.jsx)(a.Z,{...e}),xCircle:e=>(0,r.jsx)(u.Z,{...e}),link:e=>(0,r.jsx)(i.Z,{...e}),mic:e=>(0,r.jsx)(o.Z,{...e}),home:e=>(0,r.jsx)(s.Z,{...e}),uturnLeft:e=>(0,r.jsx)(c.Z,{...e}),list:e=>(0,r.jsx)(f.Z,{...e}),gallery:e=>(0,r.jsx)(d.Z,{...e}),arrowRight:e=>(0,r.jsx)(h.Z,{...e}),arrowLeft:e=>(0,r.jsx)(m.Z,{...e}),arrowUp:e=>(0,r.jsx)(p.Z,{...e}),arrowDown:e=>(0,r.jsx)(g.Z,{...e}),chevronDoubleUp:e=>(0,r.jsx)(x.Z,{...e}),chevronDoubleRight:e=>(0,r.jsx)(v.Z,{...e,stroke:void 0}),email:e=>(0,r.jsx)(w.Z,{...e}),github:e=>(0,r.jsx)(R.default,{...e}),arrowUpRight:e=>(0,r.jsx)(y.Z,{...e}),sharp:e=>(0,r.jsx)(b.Z,{...e}),tag:e=>(0,r.jsx)(l.Z,{...e,fill:void 0}),arrowsSwap:e=>(0,r.jsx)(j.Z,{...e}),arrowsSort:e=>(0,r.jsx)(E.Z,{...e}),cursorRipple:e=>(0,r.jsx)(k.Z,{...e}),phone:e=>(0,r.jsx)(P.Z,{...e}),speakerX:e=>(0,r.jsx)(N.Z,{...e}),speakerWave:e=>(0,r.jsx)(L.Z,{...e})}},1658:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(7437),i=n(5248),o=n(5329),s=n(1396),c=n.n(s),l=n(2022),a=n(6894),u=n(2265),f=(n(3196),n(135));const d={title:"CONTACT",description:"\ub298 \uc5f4\ub824\uc788\ub294 \uc5f0\ub77d\ucc98\uc785\ub2c8\ub2e4. \n\uc774\uba54\uc77c \uc5f0\ub77d\uc744 \uc120\ud638\ud569\ub2c8\ub2e4.",copyright:"Seo Yun Kim \xa9 2023 - All right reserved",urls:[{title:"Email",text:"sksoyks@naver.com",url:"mailto:sksoyks@naver.com",icon:f.P.email,iconType:"stroke"},{title:"Tel",text:"+82 010-2923-8734",url:"tel:01029238734",icon:f.P.phone,iconType:"fill"},{title:"Saram.In",text:"blabla.com",url:"blabla.com",icon:f.P.arrowUpRight,iconType:"stroke"},{title:"Github",text:"Github.com/d-dlzndi",url:"https://github.com/d-dlzndi/d-dlzndi.github.io",icon:f.P.github,iconType:"fill"}]};function h(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("aside",{children:[(0,r.jsx)("div",{className:"",children:(0,r.jsx)(i.default,{max:10,className:"",children:(0,r.jsx)("a",{href:"/portfolio",className:"fill-secondary group inline-block origin-center transition-all",children:(0,r.jsx)(f.P.logo,{width:50,height:50})})})}),(0,r.jsx)("p",{className:"font-bold uppercase",children:d.copyright})]}),(0,r.jsx)("nav",{className:"grid grid-flow-col gap-4 relative",children:d.urls.map(((e,t)=>(0,r.jsx)(i.default,{max:5,className:"",children:(0,r.jsx)("a",{href:e.url,target:"_blank",className:"tooltip p-2 block","data-tip":e.title,children:(0,r.jsx)(e.icon,{className:"fill"==e.iconType?"fill-base-100":"fill-none stroke-base-100",width:24,height:24})})},e.title)))})]})}var m=n(7837),p=n.n(m);function g(e){let{menuIsActive:t,className:n}=e;return(0,r.jsx)("div",{className:"".concat(p().burger," ").concat(t?p().burgerActive:""," ").concat(n)})}var x=n(4033),v=n(3542);const w="right";function y(){const e=(0,x.usePathname)(),[t,n]=(0,u.useState)(!1),s=o.Z;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"fixed flex w-screen h-screen top-0 left-0 p-10 z-50 select-none pointer-events-none",children:[t&&(0,r.jsx)("div",{className:"block lg:hidden pointer-events-auto w-screen h-screen absolute top-0 left-0 cursor-pointer",onClick:()=>n(!1)},"side-menu-bg"),(0,r.jsx)(l.M,{mode:"wait",children:t&&(0,r.jsxs)(a.E.div,{initial:{translateX:"calc(".concat("","100% ").concat("+"," 100px)")},animate:{translateX:0},exit:{translateX:"calc(".concat("","100% ").concat("+"," 100px)")},transition:{duration:.6,ease:[.65,0,.35,1]},className:"block lg:hidden absolute top-0 ".concat(w,"-0 bg-primary w-[100vw] lg:w-[50vw] h-[100vh] flex pointer-events-auto"),children:[(0,r.jsx)(b,{}),(0,r.jsxs)("nav",{className:" w-full p-[20%] text-base-100 flex flex-col justify-center",children:[(0,r.jsx)("ul",{className:"flex flex-col gap-5 min-w-fit min-h-fit",children:s.map(((t,i)=>(0,r.jsx)(j,{url:t,idx:i,pathname:e,onClick:()=>n(!1)},t.name)))}),(0,r.jsx)("hr",{className:"my-10"}),(0,r.jsx)("div",{className:"text-xs footer text-base-100",children:(0,r.jsx)(h,{})})]})]},"side-menu")}),(0,r.jsx)("div",{className:"block lg:hidden absolute top-0 right-0 pointer-events-auto",children:(0,r.jsx)("button",{onClick:()=>{n((e=>!e))},className:"btn btn-primary rounded-none p-5 w-16 h-16",children:(0,r.jsx)(g,{menuIsActive:t,className:" top-[.6rem] right-[.1rem]"})})})]}),(0,r.jsxs)("div",{className:"fixed z-[45] w-full max-w-[1920px] h-0 top-0 left-[50%] -translate-x-1/2 mix-blend-exclusion invert bg-white",children:[(0,r.jsx)(i.default,{className:"absolute rounded-full top-5 left-4 lg:top-7 lg:left-10 pointer-events-auto",max:10,children:(0,r.jsx)(c(),{href:"/portfolio",className:" text-2xl font-black text-primary",children:"PORTFOLIO"})}),(0,r.jsx)("nav",{className:"hidden lg:block absolute top-8 right-8 pointer-events-auto ",children:(0,r.jsx)("ol",{className:"flex gap-12 text-primary",children:o.Z.map(((t,n)=>(0,r.jsx)("li",{style:{width:"".concat(.9*t.name.length,"em")},className:"text-right",children:(0,r.jsx)(i.default,{max:10,className:"!inline-blockrelative",children:(0,r.jsxs)(c(),{href:t.url||"/",className:"uppercase font-bold hover:font-black transition-all text-lg relative",children:[t.name,(e==t.url||t.href==(0,o.E)("Work").href&&e.indexOf(t.url||"")>=0)&&(0,r.jsx)(v.Z,{className:""})]})})},t.name)))})})]})]})}function b(){const e="M0 0 L0 ".concat(window.innerHeight," Q200 ").concat(window.innerHeight/2," 0 0"),t="M0 0 L0 ".concat(window.innerHeight," Q0 ").concat(window.innerHeight/2," 0 0"),n=("M50 0 L0 0 V".concat(window.innerHeight," H50 Q0 ").concat(window.innerHeight/2," 50 0"),{initial:{d:e},enter:{d:t},exit:{d:e}});return(0,r.jsx)("svg",{className:" absolute top-0 fill-primary pointer-events-none -scale-x-100",style:{width:"100px",height:"100vh",stroke:"none",right:"none",left:"-99px"},children:(0,r.jsx)(a.E.path,{variants:n,initial:"initial",animate:"enter",exit:"exit",transition:{duration:.6,ease:[.65,0,.35,1]}})})}function j(e){let{url:t,idx:n,pathname:i,onClick:o}=e;return(0,r.jsx)(a.E.li,{initial:{translateX:200},animate:{translateX:0},exit:{translateX:-100,transition:{duration:.4+.1*n}},transition:{delay:.3+.1*n,duration:.6,ease:[.33,1,.68,1]},onClick:o,children:(0,r.jsx)(c(),{href:t.url||"/",className:"text-5xl w-full block uppercase",children:(0,r.jsxs)("span",{className:"inline-block relative z-[1]",children:[t.name,(i==t.url||"/work"==t.href&&i.indexOf(t.url||"")>=0)&&(0,r.jsx)(v.Z,{className:""})]})})},t.name)}},7837:function(e){e.exports={main:"style_main__lz6MT",pixelBackground:"style_pixelBackground__y9BMO",column:"style_column__HPIzg",block:"style_block__eHtdm",header:"style_header__1ieuP",menu:"style_menu__JP2hW",burger:"style_burger__7NyRZ",burgerActive:"style_burgerActive__vZeLP"}}},function(e){e.O(0,[545,317,929,971,472,744],(function(){return t=4519,e(e.s=t);var t}));var t=e.O();_N_E=t}]);