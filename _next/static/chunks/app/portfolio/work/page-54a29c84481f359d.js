(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[438],{8945:function(e,t,r){Promise.resolve().then(r.bind(r,7135)),Promise.resolve().then(r.bind(r,7997))},9539:function(e){"use strict";var t,r,n,s,i,a,l,o,c,u,d,h,f,m,p,x,g,y,v,b,w,_;e.exports=(t="millisecond",r="second",n="minute",s="hour",i="week",a="month",l="quarter",o="year",c="date",u="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},(p={})[m="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||"th")+"]"}},x="$isDayjsObject",g=function(e){return e instanceof w||!(!e||!e[x])},y=function e(t,r,n){var s;if(!t)return m;if("string"==typeof t){var i=t.toLowerCase();p[i]&&(s=i),r&&(p[i]=r,s=i);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var l=t.name;p[l]=t,s=l}return!n&&s&&(m=s),s||!n&&m},v=function(e,t){if(g(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new w(r)},(b={s:f,z:function(e){var t=-e.utcOffset(),r=Math.abs(t);return(t<=0?"+":"-")+f(Math.floor(r/60),2,"0")+":"+f(r%60,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),s=t.clone().add(n,a),i=r-s<0,l=t.clone().add(n+(i?-1:1),a);return+(-(n+(r-s)/(i?s-l:l-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:a,y:o,w:i,d:"day",D:c,h:s,m:n,s:r,ms:t,Q:l})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=y,b.i=g,b.w=function(e,t){return v(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},_=(w=function(){function e(e){this.$L=y(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var f=e.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(b.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(d);if(n){var s=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return b},f.isValid=function(){return this.$d.toString()!==u},f.isSame=function(e,t){var r=v(e);return this.startOf(t)<=r&&r<=this.endOf(t)},f.isAfter=function(e,t){return v(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<v(e)},f.$g=function(e,t,r){return b.u(e)?this[t]:this.set(r,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,t){var l=this,u=!!b.u(t)||t,d=b.p(e),h=function(e,t){var r=b.w(l.$u?Date.UTC(l.$y,t,e):new Date(l.$y,t,e),l);return u?r:r.endOf("day")},f=function(e,t){return b.w(l.toDate()[e].apply(l.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),l)},m=this.$W,p=this.$M,x=this.$D,g="set"+(this.$u?"UTC":"");switch(d){case o:return u?h(1,0):h(31,11);case a:return u?h(1,p):h(0,p+1);case i:var y=this.$locale().weekStart||0,v=(m<y?m+7:m)-y;return h(u?x-v:x+(6-v),p);case"day":case c:return f(g+"Hours",0);case s:return f(g+"Minutes",1);case n:return f(g+"Seconds",2);case r:return f(g+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,i){var l,u=b.p(e),d="set"+(this.$u?"UTC":""),h=((l={}).day=d+"Date",l[c]=d+"Date",l[a]=d+"Month",l[o]=d+"FullYear",l[s]=d+"Hours",l[n]=d+"Minutes",l[r]=d+"Seconds",l[t]=d+"Milliseconds",l)[u],f="day"===u?this.$D+(i-this.$W):i;if(u===a||u===o){var m=this.clone().set(c,1);m.$d[h](f),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[b.p(e)]()},f.add=function(e,t){var l,c=this;e=Number(e);var u=b.p(t),d=function(t){var r=v(c);return b.w(r.date(r.date()+Math.round(t*e)),c)};if(u===a)return this.set(a,this.$M+e);if(u===o)return this.set(o,this.$y+e);if("day"===u)return d(1);if(u===i)return d(7);var h=((l={})[n]=6e4,l[s]=36e5,l[r]=1e3,l)[u]||1,f=this.$d.getTime()+e*h;return b.w(f,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||u;var n=e||"YYYY-MM-DDTHH:mm:ssZ",s=b.z(this),i=this.$H,a=this.$m,l=this.$M,o=r.weekdays,c=r.months,d=r.meridiem,f=function(e,r,s,i){return e&&(e[r]||e(t,n))||s[r].slice(0,i)},m=function(e){return b.s(i%12||12,e,"0")},p=d||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(h,function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return b.s(t.$y,4,"0");case"M":return l+1;case"MM":return b.s(l+1,2,"0");case"MMM":return f(r.monthsShort,l,c,3);case"MMMM":return f(c,l);case"D":return t.$D;case"DD":return b.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return f(r.weekdaysMin,t.$W,o,2);case"ddd":return f(r.weekdaysShort,t.$W,o,3);case"dddd":return o[t.$W];case"H":return String(i);case"HH":return b.s(i,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return b.s(a,2,"0");case"s":return String(t.$s);case"ss":return b.s(t.$s,2,"0");case"SSS":return b.s(t.$ms,3,"0");case"Z":return s}return null}(e)||s.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(e,t,c){var u,d=this,h=b.p(t),f=v(e),m=(f.utcOffset()-this.utcOffset())*6e4,p=this-f,x=function(){return b.m(d,f)};switch(h){case o:u=x()/12;break;case a:u=x();break;case l:u=x()/3;break;case i:u=(p-m)/6048e5;break;case"day":u=(p-m)/864e5;break;case s:u=p/36e5;break;case n:u=p/6e4;break;case r:u=p/1e3;break;default:u=p}return c?u:b.a(u)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return p[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=y(e,t,!0);return n&&(r.$L=n),r},f.clone=function(){return b.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},e}()).prototype,v.prototype=_,[["$ms",t],["$s",r],["$m",n],["$H",s],["$W","day"],["$M",a],["$y",o],["$D",c]].forEach(function(e){_[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),v.extend=function(e,t){return e.$i||(e(t,w,v),e.$i=!0),v},v.locale=y,v.isDayjs=g,v.unix=function(e){return v(1e3*e)},v.en=p[m],v.Ls=p,v.p={},v)},7922:function(e,t,r){"use strict";var n,s;e.exports=(n=r(9539),s={name:"ko",weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),ordinal:function(e){return e+"일"},formats:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h:mm",LLLL:"YYYY년 MMMM D일 dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY년 MMMM D일",lll:"YYYY년 MMMM D일 A h:mm",llll:"YYYY년 MMMM D일 dddd A h:mm"},meridiem:function(e){return e<12?"오전":"오후"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",m:"1분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"}},(n&&"object"==typeof n&&"default"in n?n:{default:n}).default.locale(s,null,!0),s)},5932:function(e,t,r){"use strict";r.d(t,{M:function(){return g}});var n=r(2265),s=r(1046);function i(){let e=(0,n.useRef)(!1);return(0,s.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var a=r(397),l=r(3756),o=r(2390);class c extends n.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function u(e){let{children:t,isPresent:r}=e,s=(0,n.useId)(),i=(0,n.useRef)(null),a=(0,n.useRef)({width:0,height:0,top:0,left:0});return(0,n.useInsertionEffect)(()=>{let{width:e,height:t,top:n,left:l}=a.current;if(r||!i.current||!e||!t)return;i.current.dataset.motionPopId=s;let o=document.createElement("style");return document.head.appendChild(o),o.sheet&&o.sheet.insertRule('\n          [data-motion-pop-id="'.concat(s,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(n,"px !important;\n            left: ").concat(l,"px !important;\n          }\n        ")),()=>{document.head.removeChild(o)}},[r]),n.createElement(c,{isPresent:r,childRef:i,sizeRef:a},n.cloneElement(t,{ref:i}))}let d=e=>{let{children:t,initial:r,isPresent:s,onExitComplete:i,custom:a,presenceAffectsLayout:c,mode:d}=e,f=(0,o.h)(h),m=(0,n.useId)(),p=(0,n.useMemo)(()=>({id:m,initial:r,isPresent:s,custom:a,onExitComplete:e=>{for(let t of(f.set(e,!0),f.values()))if(!t)return;i&&i()},register:e=>(f.set(e,!1),()=>f.delete(e))}),c?void 0:[s]);return(0,n.useMemo)(()=>{f.forEach((e,t)=>f.set(t,!1))},[s]),n.useEffect(()=>{s||f.size||!i||i()},[s]),"popLayout"===d&&(t=n.createElement(u,{isPresent:s},t)),n.createElement(l.O.Provider,{value:p},t)};function h(){return new Map}var f=r(5458),m=r(458),p=r(462);let x=e=>e.key||"",g=e=>{let{children:t,custom:r,initial:l=!0,onExitComplete:o,exitBeforeEnter:c,presenceAffectsLayout:u=!0,mode:h="sync"}=e;(0,p.k)(!c,"Replace exitBeforeEnter with mode='wait'");let g=(0,n.useContext)(f.p).forceRender||function(){let e=i(),[t,r]=(0,n.useState)(0),s=(0,n.useCallback)(()=>{e.current&&r(t+1)},[t]);return[(0,n.useCallback)(()=>a.Wi.postRender(s),[s]),t]}()[0],y=i(),v=function(e){let t=[];return n.Children.forEach(e,e=>{(0,n.isValidElement)(e)&&t.push(e)}),t}(t),b=v,w=(0,n.useRef)(new Map).current,_=(0,n.useRef)(b),M=(0,n.useRef)(new Map).current,$=(0,n.useRef)(!0);if((0,s.L)(()=>{$.current=!1,function(e,t){e.forEach(e=>{let r=x(e);t.set(r,e)})}(v,M),_.current=b}),(0,m.z)(()=>{$.current=!0,M.clear(),w.clear()}),$.current)return n.createElement(n.Fragment,null,b.map(e=>n.createElement(d,{key:x(e),isPresent:!0,initial:!!l&&void 0,presenceAffectsLayout:u,mode:h},e)));b=[...b];let k=_.current.map(x),j=v.map(x),D=k.length;for(let e=0;e<D;e++){let t=k[e];-1!==j.indexOf(t)||w.has(t)||w.set(t,void 0)}return"wait"===h&&w.size&&(b=[]),w.forEach((e,t)=>{if(-1!==j.indexOf(t))return;let s=M.get(t);if(!s)return;let i=k.indexOf(t),a=e;a||(a=n.createElement(d,{key:x(s),isPresent:!1,onExitComplete:()=>{M.delete(t),w.delete(t);let e=_.current.findIndex(e=>e.key===t);if(_.current.splice(e,1),!w.size){if(_.current=v,!1===y.current)return;g(),o&&o()}},custom:r,presenceAffectsLayout:u,mode:h},s),w.set(t,a)),b.splice(i,0,a)}),b=b.map(e=>{let t=e.key;return w.has(t)?e:n.createElement(d,{key:x(e),isPresent:!0,presenceAffectsLayout:u,mode:h},e)}),n.createElement(n.Fragment,null,w.size?b:b.map(e=>(0,n.cloneElement)(e)))}},9689:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(7437),s=r(9539),i=r.n(s);function a(e){let{dateString:t,dateFormat:r="YYYY.MM.",className:s=" "}=e;return t?(0,n.jsx)("time",{className:s,children:i()(t).format(r)}):(0,n.jsx)(n.Fragment,{})}r(7922)},2250:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(7437),s=r(2846);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var a=function(e){return s.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 38 10"},e),s.createElement("path",{d:"M2.4 4.34c5.43 1.98 20.56 1 27.5.5 5.19-.37 4.17-.3 6.02-.14",style:{fill:"none",strokeMiterlimit:10,strokeWidth:5}}))};function l(e){let{className:t}=e;return(0,n.jsx)(a,{className:"absolute top-[25%] left-0 w-[calc(120%)] ml-[-10%] h-full z-[-1] stroke-secondary "+t,preserveAspectRatio:"none"})}},929:function(e,t,r){"use strict";r.d(t,{f:function(){return s}});var n=r(7437);function s(e){let{className:t,commonChildClassName:r="border-base-content",commonTitleClassName:s="",datas:i}=e;return(0,n.jsx)("div",{className:"flex flex-col lg:flex-row gap-5 mb-16 lg:mb-28 ".concat(t),children:i.map(e=>(0,n.jsxs)("div",{className:"flex-1 shrink-0 border-t py-5 w-full ".concat(r," ").concat(e.className),children:[(0,n.jsx)("h4",{className:"text-xs mb-2 xl:text-sm 2xl:text-base uppercase ".concat(s),children:e.title}),e.children]},e.title))})}},7997:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return M}});var n=r(7437),s=r(3665),i=r(8792),a=r(7907),l=r(4443),o=r(5932),c=r(1744),u=r.n(c),d=r(928),h=r(9689);function f(e){let{post:t}=e,{getImgBase64:r}=(0,s.Z)();return(0,n.jsxs)(i.default,{href:t.url||"/",className:"block relative w-full h-full aspect-w-16 aspect-h-9 bg-cover bg-no-repeat",children:[(0,n.jsx)(d.Z,{src:t.image,alt:t.title,width:700,height:400,base64:r(t,t.image),className:u().img+" w-full h-full object-center object-cover scale-110"}),(0,n.jsx)("div",{className:u()["work-thumb-text"]+" "+u().bg+" backdrop-blur-sm backdrop-saturate-50 mix-blend-multiply ",style:{backgroundColor:(null==t?void 0:t.color)||"oklch(var(--p))"}}),(0,n.jsxs)("div",{className:"".concat(u()["work-thumb-text"]," ").concat(u().inner," bg-clip-text"),children:[t.category&&(0,n.jsx)("span",{className:u().category+" block absolute top-5 left-5 font-extrabold uppercase text-4xl break-keep",dangerouslySetInnerHTML:{__html:t.category.replaceAll("-","<br />")}}),(0,n.jsxs)("p",{className:u().date+" absolute bottom-5 left-5 font-extralight",children:[(0,n.jsx)(h.Z,{dateString:t.startDate}),(0,n.jsx)("br",{}),"-",(0,n.jsx)("br",{}),(0,n.jsx)(h.Z,{dateString:t.date})]}),(0,n.jsx)("h4",{className:u().title+" bottom-5 right-5 font-medium text-right text-2xl",children:t.title})]})]})}function m(e){let{posts:t}=e;return(0,n.jsx)(l.E.div,{layout:!0,layoutRoot:!0,className:"grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-[1px]",children:(0,n.jsx)(o.M,{children:t.map((e,t)=>(0,n.jsx)(l.E.div,{layout:!0,viewport:{once:!0},initial:{opacity:.1,top:20},whileInView:{opacity:1,top:0},exit:{opacity:0,top:-20,transition:{duration:.3}},transition:{delay:t%2==0?.2:.3,duration:1,ease:[0,.55,.45,1]},className:u()["work-thumb"]+" min-h-fit min-w-fit origin-center",children:(0,n.jsx)(f,{post:e})},e.slug))})})}var p=r(6344),x=r(2265),g=(e,t)=>{let[r,n]=(0,x.useState)(t);return(0,x.useEffect)(()=>{try{let t=window.localStorage.getItem(e);t&&n(JSON.parse(t))}catch(e){console.log(e)}},[e]),[r,t=>{try{let s=t instanceof Function?t(r):t;window.localStorage.setItem(e,JSON.stringify(s)),n(t)}catch(e){console.log(e)}}]},y=r(7129),v=r(6850),b=r(2250);function w(e){let{posts:t}=e,{getCategoryUrl:r,getImgBase64:a,getImgSize:c}=(0,s.Z)();return(0,n.jsx)(l.E.ul,{layout:!0,layoutRoot:!0,children:(0,n.jsx)(o.M,{children:t.map((e,t)=>(0,n.jsxs)(l.E.li,{layout:!0,viewport:{once:!0},initial:{opacity:0,bottom:-50},animate:{opacity:1,bottom:0},transition:{delay:.08*t,duration:.7,ease:[0,.55,.45,1]},className:"relative flex flex-row justify-stretch items-stretch pb-4 min-h-[4rem] md:min-h-[7rem] xl:min-h-[9rem] last:border-b border-base-content",style:{"--post-color":e.color},children:[(0,n.jsxs)(i.default,{href:r(e.category),className:"block hover:border-primary hover:text-primary hover:font-bold border-t border-base-content pt-2 flex-[2] shrink-0 uppercase font-extralight md:text-2xl leading-none group",style:{overflowWrap:"anywhere"},children:[(0,n.jsx)(p.P.chevronDoubleUp,{width:20,height:20,className:"hidden group-hover:inline-block align-top"}),e.category.replaceAll("-"," ")]}),(0,n.jsxs)(i.default,{href:e.url||"/",className:"border-t border-base-content hover:border-[var(--post-color)] pt-2 flex-[3] md:flex-[4] xl:flex-[6] shrink-0 flex flex-row group",children:[(0,n.jsxs)("div",{className:"pr-4 group-hover:font-black group-hover:text-[var(--post-color)] xl:group-hover:text-4xl flex-[2] shrink-0 font-semibold text-xl md:text-2xl break-keep leading-none whitespace-pre-wrap",children:[e.title.replaceAll("〈","\n〈"),(0,n.jsx)(p.P.arrowUpRight,{width:20,height:20,className:"hidden group-hover:inline-block align-top"})]}),(0,n.jsx)("div",{className:"hidden xl:block flex-[2] shrink-0 relative",children:(0,n.jsx)("div",{className:"pointer-events-none opacity-0 group-hover:opacity-100 z-[1] transition-all max-w-none w-full absolute top-6 left-0 -translate-y-1/3 2xl:scale-110 shadow-2xl bg-[var(--post-color)]",children:(0,n.jsx)(d.Z,{src:e.image,width:400,height:400,size:c(e,e.image),className:" w-full h-full object-cover",base64:a(e,e.image)})})}),(0,n.jsx)("div",{className:"group-hover:opacity-100 group-hover:text-[var(--post-color)] hidden md:block flex-[2] shrink-0 opacity-25 ",children:(0,n.jsxs)("div",{className:"pl-[50%]",children:[e.startDate&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.Z,{dateString:e.startDate}),(0,n.jsx)("br",{}),"-",(0,n.jsx)("br",{})]}),(0,n.jsx)(h.Z,{dateString:e.date})]})})]})]},e.slug))})})}var _=r(929);function M(e){let{children:t}=e,r=(0,a.useSearchParams)(),l=r.get("category"),o=r.get("tag");"NULL"!=l&&null!=l||o||(l="All");let{filterPosts:c,categories:u,tags:d,getCategoryUrl:h,allPosts:f,postsByCategory:x}=(0,s.Z)({category:l,tag:o}),[M,$]=g("work_list_mode","gallery"),k=()=>{$(e=>"list"==e?"gallery":"list")},j=l&&["All",...u].includes(l)?"CATEGORY":o&&d.includes(o)?"TAG":"WORK",D="CATEGORY"==j?"".concat(null==l?void 0:l.replaceAll("-"," ").toUpperCase())||"":"TAG"==j?"Tag : ".concat(o)||0:"",N=e=>e&&Object.keys(x).includes(e)?x[e].length:f.length;return(0,n.jsx)(y.t,{className:" bg-base-100 ",children:(0,n.jsxs)("div",{className:"mx-auto max-w-screen-2xl flex flex-col items-center px-4 lg:p-10 mt-56 mb-[10em] min-h-screen",children:[(0,n.jsx)(_.f,{datas:[{title:"FILTER",className:"hidden lg:block",children:(0,n.jsx)("p",{className:"xl:text-lg 2xl:text-xl",children:D})},{title:"CATEGORY",className:"",children:(0,n.jsx)("ul",{className:" text-xl leading-none -mt-px xl:text-2xl flex flex-col gap-2 xl:gap-1 uppercase font-normal",children:["All",...u].map((e,t)=>(0,n.jsx)("li",{children:(0,n.jsxs)(i.default,{href:h(e),className:"relative z-[1] ".concat(l==e?"text-primary font-bold":" hover:text-primary transition-colors"),children:[e.replaceAll("-"," "),(0,n.jsx)("span",{className:"pl-[2px] text-xs font-normal align-top opacity-30",children:N(e)}),l==e&&(0,n.jsx)(b.Z,{})]})},e+"_"+t))})},{title:"TAG",className:"",children:(0,n.jsx)(v.i,{data:d,parentClassName:"xl:text-lg flex mt-[0.6rem] flex-row flex-wrap gap-x-4 gap-y-3 font-medium",childColorClassName:"fill-none stroke-accent hover:fill-accent hover:stroke-none hover:text-accent",showCount:!0,selectedChild:o||""})},{title:"VIEW",className:"",children:(0,n.jsxs)("div",{id:"work-btn-set",className:" mt-[0.6rem] flex gap-2",children:[(0,n.jsx)("button",{onClick:()=>k(),children:(0,n.jsx)(p.P.gallery,{width:24,height:24,className:"".concat("gallery"!==M?"opacity-25":" "," xl:w-7 xl:h-7")})}),(0,n.jsx)("button",{onClick:()=>k(),children:(0,n.jsx)(p.P.list,{width:24,height:24,className:"".concat("list"!==M?"opacity-25":" "," xl:w-7 xl:h-7")})})]})}]}),(0,n.jsx)("div",{className:"w-full",children:"list"==M?(0,n.jsx)(w,{posts:c}):(0,n.jsx)(m,{posts:c})})]})})}},1744:function(e){e.exports={"gallery-contents":"worklist_gallery-contents__wv1Jd",img:"worklist_img__uPjs0","work-thumb":"worklist_work-thumb__t_nSA","work-thumb-text":"worklist_work-thumb-text__dx4Sg",bg:"worklist_bg__6wpy9",inner:"worklist_inner__5YPi_",category:"worklist_category__1dr73",date:"worklist_date__foWoV",title:"worklist_title__vj7Er"}}},function(e){e.O(0,[531,396,734,929,31,971,69,744],function(){return e(e.s=8945)}),_N_E=e.O()}]);