(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[444],{5405:function(e,s,t){"use strict";t.d(s,{I:function(){return r}});var l=t(4235);function r(e,s,t){var r;if("string"===typeof e){let a=document;s&&((0,l.k)(Boolean(s.current),"Scope provided, but no element detected."),a=s.current),t?(null!==(r=t[e])&&void 0!==r||(t[e]=a.querySelectorAll(e)),e=t[e]):e=a.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}},9991:function(e,s,t){Promise.resolve().then(t.bind(t,6424))},6424:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return O}});var l=t(7437),r=t(6117),a=t(4101),n=t(8924);var i=()=>({allPosts:[...n.fd].sort(((e,s)=>Date.parse(s.date)-Date.parse(e.date)))}),c=t(4033),o=t(9545),d=t(502),m=t(1396),x=t.n(m),h=t(2265),p=t(5405);const u={some:0,all:1};function g(e,{root:s,margin:t,amount:l,once:r=!1}={}){const[a,n]=(0,h.useState)(!1);return(0,h.useEffect)((()=>{if(!e.current||r&&a)return;const i={root:s&&s.current||void 0,margin:t,amount:l};return function(e,s,{root:t,margin:l,amount:r="some"}={}){const a=(0,p.I)(e),n=new WeakMap,i=new IntersectionObserver((e=>{e.forEach((e=>{const t=n.get(e.target);if(e.isIntersecting!==Boolean(t))if(e.isIntersecting){const t=s(e);"function"===typeof t?n.set(e.target,t):i.unobserve(e.target)}else t&&(t(e),n.delete(e.target))}))}),{root:t,rootMargin:l,threshold:"number"===typeof r?r:u[r]});return a.forEach((e=>i.observe(e))),()=>i.disconnect()}(e.current,(()=>(n(!0),r?void 0:()=>n(!1))),i)}),[s,e,t,r]),a}var f=t(1729);function j(e){let{textSource:s,className:t,childClassName:r="",delay:a=0}=e;const n=s||["\uc548\ub155\ud558\uc138\uc694 \ubc18\uac11\uc2b5\ub2c8\ub2e4","\ub8f0\ub8e8\ub784\ub77c","\uc544\uc8fc \uba4b\uc9c4 \ub0a0\uc528\uc608\uc694"],i=(0,h.useRef)(null),c=g(i,{once:!0,margin:"-10%"}),o={initial:{y:"-20%",opacity:0},open:e=>({y:"0%",opacity:1,transition:{duration:.7,delay:.1*e+a,ease:[.33,1,.68,1]}})};return(0,l.jsx)("div",{ref:i,className:t,children:n.map(((e,s)=>(0,l.jsx)("div",{className:"overflow-visible m-0 "+r,children:(0,l.jsx)(f.E.p,{className:" whitespace-nowrap",children:e.split("").map(((e,t)=>(0,l.jsx)(f.E.span,{className:"inline-block",custom:4*s+t,variants:o,initial:"initial",animate:c?"open":"",children:" "==e?"\xa0":e},t)))})},s)))})}var v=t(135);const N=[{category:"Animation",slug:"A-Metal-Flower"},{category:"Animation",slug:"GameJam-Korea2023"}];function y(e){const{allPosts:s,tags:t,getTagUrl:r}=(0,o.Z)(),a=N.reduce(((e,t)=>{const l=s.find((e=>e.category==t.category&&e.slug==t.slug));return l?[...e,l]:e}),[]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w,{}),(0,l.jsx)(E,{}),(0,l.jsx)(S,{}),(0,l.jsx)(_,{posts:a})]})}function b(e){let{children:s,className:t}=e;return(0,l.jsx)("div",{className:" w-screen min-h-screen flex justify-center items-center "+t,children:(0,l.jsx)("div",{className:"w-screen h-full max-w-[1920px] relative",children:s})})}function w(){var e;const{allPosts:s}=i(),t=s.find((e=>"Intro"==e.slug));return t?(0,l.jsx)(b,{className:"h-screen text-primary",children:(0,l.jsxs)("div",{className:"flex flex-col mt-[30vh] lg:m-0 lg:flex-row gap-5 p-10 h-screen justify-stretch items-start lg:items-end text-primary relative",children:[(0,l.jsx)(j,{textSource:t.title.split("\\n"),className:"text-5xl lg:text-[12vw] w-full my-[-0.1em] leading-none font-black",delay:.5}),(0,l.jsx)(f.E.div,{initial:{opacity:0,translateY:20},whileInView:{opacity:1,translateY:0},transition:{delay:3,duration:1},viewport:{once:!0},className:" lg:absolute lg:top-1/3 lg:left-3/4 w-28 break-keep whitespace-pre",dangerouslySetInnerHTML:{__html:(null===(e=t.body)||void 0===e?void 0:e.html)||""}})]})}):(0,c.notFound)()}const k=[{name:"Maya",progress:80},{name:"Unreal Engine 5",progress:50},{name:"Photoshop",progress:50}],P=["\ub3c4\uc804\uc801\uc778","\ub048\uc9c8\uae34","\ud638\uae30\uc2ec\uc774 \ub9ce\uc740","\uacbd\uccad\ud558\ub294","\ub298 \uc0c1\uc0c1\ud558\ub294"];function E(){const{tags:e,getTagUrl:s}=(0,o.Z)(),t=[{title:"Self-Introduce",content:(0,l.jsx)("p",{children:"\uc790\uae30 \uc18c\uac1c\ub97c \uc5ec\uae30\uc5d0 \uc785\ub825\ud569\ub2c8\ub2e4. \uc790\uae30 \uc18c\uac1c\ub97c \uc5ec\uae30\uc5d0 \uc785\ub825\ud569\ub2c8\ub2e4. \uc790\uae30 \uc18c\uac1c\ub97c \uc5ec\uae30\uc5d0 \uc785\ub825\ud569\ub2c8\ub2e4. \uc790\uae30 \uc18c\uac1c\ub97c \uc5ec\uae30\uc5d0 \uc785\ub825\ud569\ub2c8\ub2e4. \uc790\uae30 \uc18c\uac1c\ub97c \uc5ec\uae30\uc5d0 \uc785\ub825\ud569\ub2c8\ub2e4."})},{title:"Education",content:(0,l.jsx)(A,{data:[{name:"\ud654\uc815\uace0\ub4f1\ud559\uad50 \uc878\uc5c5",year:"2019.02."},{name:"\uac15\uc6d0\ub300\ud559\uad50 \uc601\uc0c1\ub514\uc790\uc778\uc804\uacf5 \uc878\uc5c5",year:"2024.02."}]})},{title:"experience",content:(0,l.jsxs)("ol",{className:" list-disc list-inside",children:[(0,l.jsx)("li",{children:"\uc548\ub155\ud558\uc138\uc694"}),(0,l.jsx)("li",{children:"\uc548\ub155\ud558\uc138\uc694"}),(0,l.jsx)("li",{children:"\uc548\ub155\ud558\uc138\uc694"}),(0,l.jsx)("li",{children:"\uc548\ub155\ud558\uc138\uc694"})]})},{title:"activity",content:(0,l.jsx)("p",{children:"\uc790\uae30 \uc18c\uac1c\ub97c \uc5ec\uae30\uc5d0 \uc785\ub825\ud569\ub2c8\ub2e4. \uc790\uae30 \uc18c\uac1c\ub97c \uc5ec\uae30\uc5d0 \uc785\ub825\ud569\ub2c8\ub2e4. \uc790\uae30 \uc18c\uac1c\ub97c \uc5ec\uae30\uc5d0 \uc785\ub825\ud569\ub2c8\ub2e4. \uc790\uae30 \uc18c\uac1c\ub97c \uc5ec\uae30\uc5d0 \uc785\ub825\ud569\ub2c8\ub2e4. \uc790\uae30 \uc18c\uac1c\ub97c \uc5ec\uae30\uc5d0 \uc785\ub825\ud569\ub2c8\ub2e4."})},{title:"ability",content:(0,l.jsx)(l.Fragment,{children:k.map(((e,s)=>(0,l.jsx)("div",{className:"radial-progress bg-primary text-secondary border-4 border-primary",style:{"--value":e.progress,"--size":"12rem","--thickness":"1rem"},role:"progressbar",children:(0,l.jsxs)("p",{className:"text-center",children:[(0,l.jsx)("span",{className:" font-bold text-xl",children:e.name}),(0,l.jsx)("br",{}),e.progress+"%"]})},s)))})},{title:"skills",content:(0,l.jsx)(D,{skills:k,colors:["progress-info","progress-success","progress-warning","progress-error"]})},{title:"tags",content:(0,l.jsx)("div",{className:"flex flex-wrap gap-2",children:e.map(((e,t)=>(0,l.jsx)(x(),{href:s(e),className:" bg-base-100 text-primary border rounded-full px-2 py-px",children:"#"+e},t)))})}];return(0,l.jsx)(b,{className:"bg-primary text-base-100",children:(0,l.jsxs)("div",{className:"flex place-items-stretch min-h-screen p-10 py-20",children:[(0,l.jsx)("div",{className:"w-1/4 relative",children:(0,l.jsx)(a.default,{src:"/3.jpg",className:" sticky block top-[5vh] w-full h-full max-h-[90vh] object-cover",width:1200,height:800})}),(0,l.jsxs)("div",{className:"w-3/4 mt-[50vh] ",children:[(0,l.jsx)("h1",{className:"pl-10 font-bold text-9xl",children:"ABOUT ME"}),(0,l.jsxs)("div",{className:"pt-10 flex justify-stretch",children:[(0,l.jsx)("div",{className:"flex-1"}),(0,l.jsxs)("div",{className:"flex-[2]",children:[(0,l.jsx)("p",{className:" font-extrabold text-3xl pb-5",children:"\uae40\uc11c\uc724"}),(0,l.jsxs)("p",{className:" font-light",children:["Seo Yun Kim ",(0,l.jsx)("br",{}),"2001. 01. 29."]})]}),(0,l.jsx)("div",{className:"flex-[3] text-xl flex flex-col gap-2 place-items-start",children:P.map(((e,s)=>(0,l.jsxs)("span",{className:"px-3 py-[2px] border rounded-full",children:[(0,l.jsx)(v.P.sharp,{width:20,height:20,className:" fill-current inline-block",style:{verticalAlign:"-.12em"}}),e.replaceAll(" ","-")]},s)))})]}),(0,l.jsxs)("div",{className:"pt-48 flex justify-stretch",children:[(0,l.jsx)("div",{className:"flex-1"}),(0,l.jsx)("div",{className:"flex-[5] flex flex-col gap-28",children:t.map(((e,s)=>(0,l.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,l.jsx)("h4",{className:"font-extrabold uppercase text-xl",children:e.title}),(0,l.jsx)("div",{className:"pr-10",children:e.content})]},s)))})]})]})]})})}function S(e){let{}=e;return(0,l.jsx)(b,{className:"bg-secondary",children:(0,l.jsx)("div",{children:"\uc545"})})}function M(e){let{children:s,className:t,title:r}=e;return(0,l.jsxs)(b,{className:t,children:[(0,l.jsx)("div",{className:"pt-48 px-24 min-h-[50vh] text-center",children:(0,l.jsx)("h1",{className:" text-primary text-7xl font-bold",children:r})}),s]})}function _(e){let{posts:s}=e;return(0,l.jsx)(M,{title:"Animation",className:"bg-base-content text-base-100",children:(0,l.jsx)("div",{className:"w-full flex flex-col px-[15%] py-48 gap-60",children:s.map(((e,s)=>{var t;return(0,l.jsx)("div",{className:"px-20",children:(0,l.jsx)("div",{className:"w-full aspect-w-15 aspect-h-9 relative",children:(0,l.jsxs)("div",{className:"absolute top-0 left-0 flex ",children:[(0,l.jsx)(a.default,{src:e.image,className:"absolute block top-0 left-0 w-full h-full object-cover pb-[8%]",width:1200,height:800}),(0,l.jsxs)("div",{className:"bg-base-content w-full min-h-[12%] sticky bottom-0 self-end flex place-self-stretch py-4",children:[(0,l.jsxs)("div",{className:"w-1/2",children:[(0,l.jsxs)("span",{children:[(0,l.jsx)(d.Z,{dateString:e.startDate}),"-",(0,l.jsx)(d.Z,{dateString:e.date})]}),(0,l.jsx)("h3",{className:"font-bold text-6xl",children:e.title})]}),(0,l.jsx)("div",{className:"w-1/4 pr-10 break-keep",children:(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:(null===(t=e.description)||void 0===t?void 0:t.html)||""}})}),(0,l.jsx)("div",{className:"w-1/4 text-right text-7xl font-bold hover:underline text-primary",children:(0,l.jsx)(x(),{href:e.url||"/",children:"MORE"})})]})]})})},e._id)}))})})}function A(e){let{data:s,lastData:t,lastUse:r=!1}=e;t||(t={year:"".concat((new Date).getFullYear(),".").concat((new Date).getMonth(),"."),name:"NOW"});const a="bg-accent";return(0,l.jsxs)("ul",{className:"timeline timeline-vertical ml-[-100%] pl-[10em]",children:[s.map(((e,t)=>(0,l.jsxs)("li",{className:"",children:[0!==t&&(0,l.jsx)("hr",{className:a}),(0,l.jsx)("div",{className:"timeline-start",children:e.year}),(0,l.jsx)("div",{className:"timeline-middle",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",className:"w-5 h-5 fill-accent",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})})}),(0,l.jsx)("div",{className:"timeline-end timeline-box text-neutral border-0",children:e.name}),(r&&t==s.length-1||!r&&t!=s.length-1)&&(0,l.jsx)("hr",{className:t==s.length-1?"":a})]},e.name))),r&&(0,l.jsxs)("li",{children:[(0,l.jsx)("hr",{}),(0,l.jsx)("div",{className:"timeline-start",children:t.year}),(0,l.jsx)("div",{className:"timeline-middle",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",className:"w-5 h-5 fill-secondary",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})})}),(0,l.jsx)("div",{className:"timeline-end timeline-box text-neutral border-0",children:t.name})]})]})}const I=[{name:"Maya",progress:80},{name:"Unreal Engine 5",progress:50},{name:"Photoshop",progress:50},{name:"Photoshop",progress:60},{name:"Photoshop",progress:95},{name:"Photoshop",progress:70},{name:"Photoshop",progress:90},{name:"Photoshop",progress:70},{name:"Photoshop",progress:50},{name:"Photoshop",progress:60},{name:"Photoshop",progress:95},{name:"Photoshop",progress:70}],U=["progress","progress-primary","progress-secondary","progress-accent","progress-info","progress-success","progress-warning","progress-error"];function D(e){let{skills:s,headUse:t=!1,colors:r=U}=e;return s||(s=I),(0,l.jsx)("div",{className:"overflow-x-auto",children:(0,l.jsxs)("table",{className:"table",children:[t&&(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{}),(0,l.jsx)("th",{children:"\ud504\ub85c\uadf8\ub7a8"}),(0,l.jsx)("th",{children:"\uc219\ub828\ub3c4"})]})}),(0,l.jsx)("tbody",{children:s.map(((e,s)=>(0,l.jsxs)("tr",{className:"text-lg",children:[(0,l.jsx)("th",{children:String(s+1).padStart(2,"0")}),(0,l.jsx)("td",{children:e.name}),(0,l.jsx)("td",{className:"w-1/2",children:(0,l.jsx)("progress",{className:"progress w-full ".concat(r[s%r.length]),value:e.progress,max:"100"})})]},e.name+"_"+s)))})]})})}function O(e){return(0,l.jsx)(r.default,{children:(0,l.jsx)(y,{})})}}},function(e){e.O(0,[152,691,449,609,971,472,744],(function(){return s=9991,e(e.s=s);var s}));var s=e.O();_N_E=s}]);