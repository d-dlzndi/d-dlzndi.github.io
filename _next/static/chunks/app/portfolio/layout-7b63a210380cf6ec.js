(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[514],{2314:function(e,t,n){Promise.resolve().then(n.bind(n,6801)),Promise.resolve().then(n.bind(n,696)),Promise.resolve().then(n.bind(n,264)),Promise.resolve().then(n.bind(n,8698)),Promise.resolve().then(n.bind(n,1585)),Promise.resolve().then(n.bind(n,9683)),Promise.resolve().then(n.bind(n,8651)),Promise.resolve().then(n.bind(n,1364)),Promise.resolve().then(n.bind(n,2423)),Promise.resolve().then(n.bind(n,2367)),Promise.resolve().then(n.bind(n,7981)),Promise.resolve().then(n.bind(n,2138)),Promise.resolve().then(n.bind(n,313)),Promise.resolve().then(n.bind(n,4981)),Promise.resolve().then(n.bind(n,5761)),Promise.resolve().then(n.bind(n,1393)),Promise.resolve().then(n.bind(n,5583))},5932:function(e,t,n){"use strict";n.d(t,{M:function(){return x}});var r=n(2265),i=n(1046);function o(){let e=(0,r.useRef)(!1);return(0,i.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var l=n(397),s=n(3756),a=n(2390);class c extends r.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function u(e){let{children:t,isPresent:n}=e,i=(0,r.useId)(),o=(0,r.useRef)(null),l=(0,r.useRef)({width:0,height:0,top:0,left:0});return(0,r.useInsertionEffect)(()=>{let{width:e,height:t,top:r,left:s}=l.current;if(n||!o.current||!e||!t)return;o.current.dataset.motionPopId=i;let a=document.createElement("style");return document.head.appendChild(a),a.sheet&&a.sheet.insertRule('\n          [data-motion-pop-id="'.concat(i,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(r,"px !important;\n            left: ").concat(s,"px !important;\n          }\n        ")),()=>{document.head.removeChild(a)}},[n]),r.createElement(c,{isPresent:n,childRef:o,sizeRef:l},r.cloneElement(t,{ref:o}))}let f=e=>{let{children:t,initial:n,isPresent:i,onExitComplete:o,custom:l,presenceAffectsLayout:c,mode:f}=e,h=(0,a.h)(d),m=(0,r.useId)(),g=(0,r.useMemo)(()=>({id:m,initial:n,isPresent:i,custom:l,onExitComplete:e=>{for(let t of(h.set(e,!0),h.values()))if(!t)return;o&&o()},register:e=>(h.set(e,!1),()=>h.delete(e))}),c?void 0:[i]);return(0,r.useMemo)(()=>{h.forEach((e,t)=>h.set(t,!1))},[i]),r.useEffect(()=>{i||h.size||!o||o()},[i]),"popLayout"===f&&(t=r.createElement(u,{isPresent:i},t)),r.createElement(s.O.Provider,{value:g},t)};function d(){return new Map}var h=n(5458),m=n(458),g=n(462);let p=e=>e.key||"",x=e=>{let{children:t,custom:n,initial:s=!0,onExitComplete:a,exitBeforeEnter:c,presenceAffectsLayout:u=!0,mode:d="sync"}=e;(0,g.k)(!c,"Replace exitBeforeEnter with mode='wait'");let x=(0,r.useContext)(h.p).forceRender||function(){let e=o(),[t,n]=(0,r.useState)(0),i=(0,r.useCallback)(()=>{e.current&&n(t+1)},[t]);return[(0,r.useCallback)(()=>l.Wi.postRender(i),[i]),t]}()[0],v=o(),w=function(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}(t),b=w,y=(0,r.useRef)(new Map).current,j=(0,r.useRef)(b),E=(0,r.useRef)(new Map).current,k=(0,r.useRef)(!0);if((0,i.L)(()=>{k.current=!1,function(e,t){e.forEach(e=>{let n=p(e);t.set(n,e)})}(w,E),j.current=b}),(0,m.z)(()=>{k.current=!0,E.clear(),y.clear()}),k.current)return r.createElement(r.Fragment,null,b.map(e=>r.createElement(f,{key:p(e),isPresent:!0,initial:!!s&&void 0,presenceAffectsLayout:u,mode:d},e)));b=[...b];let P=j.current.map(p),N=w.map(p),L=P.length;for(let e=0;e<L;e++){let t=P[e];-1!==N.indexOf(t)||y.has(t)||y.set(t,void 0)}return"wait"===d&&y.size&&(b=[]),y.forEach((e,t)=>{if(-1!==N.indexOf(t))return;let i=E.get(t);if(!i)return;let o=P.indexOf(t),l=e;l||(l=r.createElement(f,{key:p(i),isPresent:!1,onExitComplete:()=>{E.delete(t),y.delete(t);let e=j.current.findIndex(e=>e.key===t);if(j.current.splice(e,1),!y.size){if(j.current=w,!1===v.current)return;x(),a&&a()}},custom:n,presenceAffectsLayout:u,mode:d},i),y.set(t,l)),b.splice(o,0,l)}),b=b.map(e=>{let t=e.key;return y.has(t)?e:r.createElement(f,{key:p(e),isPresent:!0,presenceAffectsLayout:u,mode:d},e)}),r.createElement(r.Fragment,null,y.size?b:b.map(e=>(0,r.cloneElement)(e)))}},2130:function(e,t,n){"use strict";n.d(t,{E:function(){return o}});var r=n(6344);let i=[{name:"About",href:"",icon:r.P.home,url:""},{name:"Work",href:"/work",icon:r.P.mic,url:""},{name:"Contact",href:"/contact",icon:r.P.link,url:""}].map(e=>({...e,url:e.href="/portfolio"+e.href}));function o(e){return i.find(t=>t.name==e)||i[0]}t.Z=i},5761:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(7437),i=n(4443),o=n(2265);function l(e){let{children:t,className:n,max:l=20}=e,s=(0,o.useRef)(null),[a,c]=(0,o.useState)({x:0,y:0}),{x:u,y:f}=a;return(0,r.jsx)(i.E.div,{style:{width:"fit-content",height:"fit-content",transformOrigin:"top left"},className:""+n,ref:s,onMouseMove:e=>{let{clientX:t,clientY:n}=e,r=e.target.getBoundingClientRect();c({x:Math.max(Math.min(t-(r.left+r.width/2),l),-l),y:Math.max(Math.min(n-(r.top+r.height/2),l),-l)})},onMouseLeave:e=>{c({x:0,y:0})},animate:{x:u,y:f},transition:{type:"spring",damping:10,stiffness:180},children:t})}},4981:function(e,t,n){"use strict";let r,i;n.r(t),n.d(t,{default:function(){return I}});var o=n(7437),l=n(2265),s=n(6524),a=n(2390),c=n(462),u=n(3811);let f=new WeakMap;function d(e){var t;let{target:n,contentRect:r,borderBoxSize:i}=e;null===(t=f.get(n))||void 0===t||t.forEach(e=>{e({target:n,contentSize:r,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(n,i)}})})}function h(e){e.forEach(d)}let m=new Set;var g=n(7861),p=n(9248);let x=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),v=()=>({time:0,x:x(),y:x()}),w={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function b(e,t,n,r){let i=n[t],{length:o,position:l}=w[t],s=i.current,a=n.time;i.current=e["scroll"+l],i.scrollLength=e["scroll"+o]-e["client"+o],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=(0,g.Y)(0,i.scrollLength,i.current);let c=r-a;i.velocity=c>50?0:(0,p.R)(i.current-s,c)}let y={All:[[0,0],[1,1]]},j={start:0,center:.5,end:1};function E(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=0;if(void 0!==j[e]&&(e=j[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),n+r}let k=[0,0];var P=n(7179),N=n(4210);let L={x:0,y:0};var Z=n(397);let z=new WeakMap,R=new WeakMap,W=new WeakMap,_=e=>e===document.documentElement?window:e;var O=n(1046);function M(e,t){(0,c.K)(!!(!t||t.current),"You have defined a ".concat(e," options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its `layoutEffect: false` option."))}let B=()=>({scrollX:(0,s.BX)(0),scrollY:(0,s.BX)(0),scrollXProgress:(0,s.BX)(0),scrollYProgress:(0,s.BX)(0)}),H=e=>"object"==typeof e&&e.mix,C=e=>H(e)?e.mix:void 0;var S=n(7813);function A(e,t){let n=function(e){let t=(0,a.h)(()=>(0,s.BX)(e)),{isStatic:n}=(0,l.useContext)(S._);if(n){let[,n]=(0,l.useState)(e);(0,l.useEffect)(()=>t.on("change",n),[])}return t}(t()),r=()=>n.set(t());return r(),(0,O.L)(()=>{let t=()=>Z.Wi.update(r,!1,!0),n=e.map(e=>e.on("change",t));return()=>{n.forEach(e=>e()),(0,Z.Pn)(r)}}),n}function X(e,t){let n=(0,a.h)(()=>[]);return A(e,()=>{n.length=0;let r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)})}var T=n(4443);function I(e){let{children:t,height:n}=e,c=(0,l.useRef)(null),{scrollY:d}=function(){let{container:e,target:t,layoutEffect:n=!0,...o}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=(0,a.h)(B);return(n?O.L:l.useEffect)(()=>(M("target",t),M("container",e),function(e){let{container:t=document.documentElement,...n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=W.get(t);o||(o=new Set,W.set(t,o));let l=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return{measure:()=>(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=arguments.length>2?arguments[2]:void 0;if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight})(e,r.target,n),update:t=>{b(e,"x",n,t),b(e,"y",n,t),n.time=t,(r.offset||r.target)&&function(e,t,n){let{offset:r=y.All}=n,{target:i=e,axis:o="y"}=n,l="y"===o?"height":"width",s=i!==e?function(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){let e=r.getBoundingClientRect(),t=(r=r.parentElement).getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else if(r instanceof SVGGraphicsElement){let{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let i=null,o=r.parentNode;for(;!i;)"svg"===o.tagName&&(i=o),o=r.parentNode;r=i}else break;return n}(i,e):L,a=i===e?{width:e.scrollWidth,height:e.scrollHeight}:"getBBox"in i&&"svg"!==i.tagName?i.getBBox():{width:i.clientWidth,height:i.clientHeight},c={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let u=!t[o].interpolate,f=r.length;for(let e=0;e<f;e++){let n=function(e,t,n,r){let i=Array.isArray(e)?e:k,o=0;return"number"==typeof e?i=[e,e]:"string"==typeof e&&(i=(e=e.trim()).includes(" ")?e.split(" "):[e,j[e]?e:"0"]),E(i[0],n,r)-E(i[1],t)}(r[e],c[l],a[l],s[o]);u||n===t[o].interpolatorOffsets[e]||(u=!0),t[o].offset[e]=n}u&&(t[o].interpolate=(0,P.s)(t[o].offset,(0,N.Y)(r)),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=t[o].interpolate(t[o].current)}(e,n,r)},notify:()=>t(n)}}(t,e,v(),n);if(o.add(l),!z.has(t)){let e=()=>{for(let e of o)e.measure()},n=()=>{for(let e of o)e.update(Z.frameData.timestamp)},l=()=>{for(let e of o)e.notify()},s=()=>{Z.Wi.read(e,!1,!0),Z.Wi.update(n,!1,!0),Z.Wi.update(l,!1,!0)};z.set(t,s);let a=_(t);window.addEventListener("resize",s,{passive:!0}),t!==document.documentElement&&R.set(t,"function"==typeof t?(m.add(t),i||(i=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};m.forEach(e=>e(t))},window.addEventListener("resize",i)),()=>{m.delete(t),!m.size&&i&&(i=void 0)}):function(e,t){r||"undefined"==typeof ResizeObserver||(r=new ResizeObserver(h));let n=(0,u.I)(e);return n.forEach(e=>{let n=f.get(e);n||(n=new Set,f.set(e,n)),n.add(t),null==r||r.observe(e)}),()=>{n.forEach(e=>{let n=f.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==r||r.unobserve(e)})}}(t,s)),a.addEventListener("scroll",s,{passive:!0})}let s=z.get(t);return Z.Wi.read(s,!1,!0),()=>{var e;(0,Z.Pn)(s);let n=W.get(t);if(!n||(n.delete(l),n.size))return;let r=z.get(t);z.delete(t),r&&(_(t).removeEventListener("scroll",r),null===(e=R.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}(e=>{let{x:t,y:n}=e;s.scrollX.set(t.current),s.scrollXProgress.set(t.progress),s.scrollY.set(n.current),s.scrollYProgress.set(n.progress)},{...o,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[e,t,JSON.stringify(o.offset)]),s}(),{window:g,body:p}=function(){let[e,t]=(0,l.useState)({window:{width:0,height:0},body:{width:0,height:0}});function n(){t({window:{width:window.innerWidth,height:window.innerHeight},body:{width:document.body.offsetWidth,height:document.body.offsetHeight}})}return(0,l.useEffect)(()=>{let e=["resize"];return e.forEach(function(e){window.addEventListener(e,n,{passive:!0})}),n(),()=>{e.forEach(function(e){window.removeEventListener(e,n)})}},[!0]),(0,l.useEffect)(()=>{if(!document.body)return;let e=new ResizeObserver(()=>{n()});return e.observe(document.body),()=>e.disconnect()},[]),e}(),x=function(e){let[t,n]=(0,l.useState)({width:0,height:0,top:0,left:0}),r=()=>{if(e.current){let t=e.current.getBoundingClientRect();n({width:t.width,height:t.height,top:t.top,left:t.left})}};return(0,l.useEffect)(()=>{if(!e.current)return;let t=new ResizeObserver(()=>{r()});return t.observe(e.current),()=>t.disconnect()},[]),(0,l.useEffect)(()=>(window.addEventListener("resize",r,{passive:!0}),r(),()=>window.removeEventListener("resize",r)),[]),t}(c),w=function(e,t,n,r){if("function"==typeof e)return function(e){s.S1.current=[],e();let t=A(s.S1.current,e);return s.S1.current=void 0,t}(e);let i="function"==typeof t?t:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r=!Array.isArray(t[0]),i=r?0:-1,o=t[0+i],l=t[1+i],s=t[2+i],a=t[3+i],c=(0,P.s)(l,s,{mixer:C(s[0]),...a});return r?c(o):c}(t,void 0,void 0);return Array.isArray(e)?X(e,i):X([e],e=>{let[t]=e;return i(t)})}(()=>{if(0==p.height||0==g.height)return 0;let e=p.height-g.height-x.height;return d.get()<e?0:d.get()-e});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{ref:c,id:"fake-footer",style:{height:n,minHeight:n},className:"hidden xl:block"}),(0,o.jsx)(T.E.div,{className:" w-screen bottom-0 left-0 right-0 xl:fixed xl:overflow-hidden",style:{height:w},children:(0,o.jsx)("div",{className:" xl:absolute w-full h-full bottom-0 left-0 right-0",style:{minHeight:n},children:t})})]})}},6344:function(e,t,n){"use strict";n.d(t,{P:function(){return _}});var r=n(7437),i=n(3275),o=n(9878),l=n(9914),s=n(7519),a=n(3143),c=n(7656),u=n(5560),f=n(7946),d=n(1359),h=n(9515),m=n(4271),g=n(7657),p=n(3784),x=n(5685),v=n(9249),w=n(6050),b=n(188),y=n(385),j=n(5435),E=n(4454),k=n(6389),P=n(838),N=n(4346),L=n(2537),Z=n(7814),z=n(7548),R=n(2423),W=n(8651);n(2367),n(1585),n(2138),n(313),n(264),n(696),n(6801),n(8698),n(9683),n(1364),n(7981);let _={logo:e=>(0,r.jsx)(R.default,{...e}),x:e=>(0,r.jsx)(u.Z,{...e}),xCircle:e=>(0,r.jsx)(f.Z,{...e}),link:e=>(0,r.jsx)(i.Z,{...e}),mic:e=>(0,r.jsx)(o.Z,{...e}),home:e=>(0,r.jsx)(l.Z,{...e}),uturnLeft:e=>(0,r.jsx)(s.Z,{...e}),list:e=>(0,r.jsx)(d.Z,{...e}),gallery:e=>(0,r.jsx)(h.Z,{...e}),arrowRight:e=>(0,r.jsx)(m.Z,{...e}),arrowLeft:e=>(0,r.jsx)(g.Z,{...e}),arrowUp:e=>(0,r.jsx)(p.Z,{...e}),arrowDown:e=>(0,r.jsx)(x.Z,{...e}),chevronDoubleUp:e=>(0,r.jsx)(v.Z,{...e}),chevronDoubleRight:e=>(0,r.jsx)(w.Z,{...e,stroke:void 0}),chevronDoubleDown:e=>(0,r.jsx)(b.Z,{...e}),email:e=>(0,r.jsx)(y.Z,{...e}),github:e=>(0,r.jsx)(W.default,{...e}),arrowUpRight:e=>(0,r.jsx)(j.Z,{...e}),sharp:e=>(0,r.jsx)(E.Z,{...e}),tag:e=>(0,r.jsx)(a.Z,{...e,fill:void 0}),arrowsSwap:e=>(0,r.jsx)(k.Z,{...e}),arrowsSort:e=>(0,r.jsx)(P.Z,{...e}),cursorRipple:e=>(0,r.jsx)(N.Z,{...e}),phone:e=>(0,r.jsx)(L.Z,{...e}),speakerX:e=>(0,r.jsx)(Z.Z,{...e}),speakerWave:e=>(0,r.jsx)(z.Z,{...e}),play:e=>(0,r.jsx)(c.Z,{...e})}},1393:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(7437);let i=()=>!0;function o(e){let{children:t,className:n}=e;return(0,r.jsx)("button",{onClick:()=>(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{top:0,behavior:"smooth"};i()&&window.scrollTo(e)})(),className:"cursor-n-resize ".concat(n),children:t})}},2250:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7437),i=n(2846);function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e){return i.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 38 10"},e),i.createElement("path",{d:"M2.4 4.34c5.43 1.98 20.56 1 27.5.5 5.19-.37 4.17-.3 6.02-.14",style:{fill:"none",strokeMiterlimit:10,strokeWidth:5}}))};function s(e){let{className:t}=e;return(0,r.jsx)(l,{className:"absolute top-[25%] left-0 w-[calc(120%)] ml-[-10%] h-full z-[-1] stroke-secondary "+t,preserveAspectRatio:"none"})}},5583:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(7437),i=n(5761),o=n(2130),l=n(8792),s=n(5932),a=n(4443),c=n(2265);n(4981);var u=n(6344);let f=new Date().getFullYear(),d=[{title:"Email",text:"sksoyks@naver.com",url:"mailto:sksoyks@naver.com",icon:u.P.email,iconType:"stroke"},{title:"Tel",text:"+82 010-2923-8734",url:"tel:01029238734",icon:u.P.phone,iconType:"fill"},{title:"Github",text:"github.com/d-dlzndi",url:"https://github.com/d-dlzndi/d-dlzndi.github.io",icon:u.P.github,iconType:"fill"}],h={copyright:"Seo Yun Kim \xa9 ".concat(f," - All right reserved"),urls:d};var m=n(1393);function g(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("aside",{children:[(0,r.jsx)("div",{className:"",children:(0,r.jsx)(i.default,{max:10,className:"",children:(0,r.jsx)(m.default,{children:(0,r.jsx)(u.P.logo,{width:50,height:50,className:"fill-secondary group inline-block origin-center transition-all"})})})}),(0,r.jsx)("p",{className:"font-bold uppercase",children:h.copyright})]}),(0,r.jsx)("nav",{className:"grid grid-flow-col gap-4 relative",children:h.urls.map((e,t)=>(0,r.jsx)(i.default,{max:5,className:"",children:(0,r.jsx)("a",{href:e.url,target:"_blank",className:"tooltip p-2 block","data-tip":e.title,children:(0,r.jsx)(e.icon,{className:"fill"==e.iconType?"fill-base-100":"fill-none stroke-base-100",width:24,height:24})})},e.title))})]})}var p=n(69),x=n.n(p);function v(e){let{menuIsActive:t,className:n}=e;return(0,r.jsx)("div",{className:"".concat(x().burger," ").concat(t?x().burgerActive:""," ").concat(n)})}var w=n(7907),b=n(2250);function y(){let e=(0,w.usePathname)(),[t,n]=(0,c.useState)(!1),u=()=>{n(e=>!e)},f=o.Z;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"fixed flex w-screen h-screen top-0 left-0 p-10 z-50 select-none pointer-events-none",children:[t&&(0,r.jsx)("div",{className:"block lg:hidden pointer-events-auto w-screen h-screen absolute top-0 left-0 cursor-pointer",onClick:()=>n(!1)},"side-menu-bg"),(0,r.jsx)(s.M,{mode:"wait",children:t&&(0,r.jsxs)(a.E.div,{initial:{translateX:"calc(".concat("","100% ").concat("+"," 100px)")},animate:{translateX:0},exit:{translateX:"calc(".concat("","100% ").concat("+"," 100px)")},transition:{duration:.6,ease:[.65,0,.35,1]},className:"block lg:hidden absolute top-0 ".concat("right","-0 bg-primary w-[100vw] lg:w-[50vw] h-[100vh] flex pointer-events-auto"),children:[(0,r.jsx)(j,{}),(0,r.jsxs)("nav",{className:" w-full p-[20%] text-base-100 flex flex-col justify-center",children:[(0,r.jsx)("ul",{className:"flex flex-col gap-5 min-w-fit min-h-fit",children:f.map((t,i)=>(0,r.jsx)(E,{url:t,idx:i,pathname:e,onClick:()=>n(!1)},t.name))}),(0,r.jsx)("hr",{className:"my-10"}),(0,r.jsx)("div",{className:"text-xs footer text-base-100",children:(0,r.jsx)(g,{})})]})]},"side-menu")}),(0,r.jsx)("div",{className:"block lg:hidden absolute top-0 right-0 pointer-events-auto",children:(0,r.jsx)("button",{onClick:()=>u(),className:"btn btn-primary rounded-none p-5 w-16 h-16",children:(0,r.jsx)(v,{menuIsActive:t,className:" top-[.6rem] right-[.1rem]"})})})]}),(0,r.jsxs)("div",{className:"fixed z-[45] w-full max-w-[1920px] h-0 top-0 left-[50%] -translate-x-1/2 mix-blend-exclusion invert bg-white",children:[(0,r.jsx)(i.default,{className:"absolute rounded-full top-5 left-4 lg:top-7 lg:left-10 pointer-events-auto",max:10,children:(0,r.jsx)("a",{href:"/portfolio",className:" text-2xl font-black text-primary",children:"PORTFOLIO"})}),(0,r.jsx)("nav",{className:"hidden lg:block absolute top-8 right-8 pointer-events-auto ",children:(0,r.jsx)("ol",{className:"flex gap-12 text-primary",children:o.Z.map((t,n)=>(0,r.jsx)("li",{style:{width:"".concat(.9*t.name.length,"em")},className:"text-right",children:(0,r.jsx)(i.default,{max:10,className:"!inline-blockrelative",children:(0,r.jsxs)(l.default,{href:t.url||"/",className:"uppercase font-bold hover:font-black transition-all text-lg relative",children:[t.name,(e==t.url||t.href==(0,o.E)("Work").href&&e.indexOf(t.url||"")>=0)&&(0,r.jsx)(b.Z,{className:""})]})})},t.name))})})]})]})}function j(){let e="M0 0 L0 ".concat(window.innerHeight," Q200 ").concat(window.innerHeight/2," 0 0"),t="M0 0 L0 ".concat(window.innerHeight," Q0 ").concat(window.innerHeight/2," 0 0");return"M50 0 L0 0 V".concat(window.innerHeight," H50 Q0 ").concat(window.innerHeight/2," 50 0"),(0,r.jsx)("svg",{className:" absolute top-0 fill-primary pointer-events-none -scale-x-100",style:{width:"100px",height:"100vh",stroke:"none",right:"none",left:"-99px"},children:(0,r.jsx)(a.E.path,{variants:{initial:{d:e},enter:{d:t},exit:{d:e}},initial:"initial",animate:"enter",exit:"exit",transition:{duration:.6,ease:[.65,0,.35,1]}})})}function E(e){let{url:t,idx:n,pathname:i,onClick:o}=e;return(0,r.jsx)(a.E.li,{initial:{translateX:200},animate:{translateX:0},exit:{translateX:-100,transition:{duration:.4+.1*n}},transition:{delay:.3+.1*n,duration:.6,ease:[.33,1,.68,1]},onClick:o,children:(0,r.jsx)(l.default,{href:t.url||"/",className:"text-5xl w-full block uppercase",children:(0,r.jsxs)("span",{className:"inline-block relative z-[1]",children:[t.name,(i==t.url||"/work"==t.href&&i.indexOf(t.url||"")>=0)&&(0,r.jsx)(b.Z,{className:""})]})})},t.name)}},69:function(e){e.exports={main:"style_main__lz6MT",pixelBackground:"style_pixelBackground__y9BMO",column:"style_column__HPIzg",block:"style_block__eHtdm",header:"style_header__1ieuP",menu:"style_menu__JP2hW",burger:"style_burger__7NyRZ",burgerActive:"style_burgerActive__vZeLP"}}},function(e){e.O(0,[531,396,929,971,69,744],function(){return e(e.s=2314)}),_N_E=e.O()}]);