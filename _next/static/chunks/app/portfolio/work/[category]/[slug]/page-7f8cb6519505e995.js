(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[650],{4548:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",s="day",c="week",l="month",d="quarter",u="year",m="date",f="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},g=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},y={s:g,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+g(r,2,"0")+":"+g(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,l),i=n-o<0,a=t.clone().add(r+(i?-1:1),l);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:u,w:c,d:s,D:m,h:a,m:i,s:o,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},x="en",b={};b[x]=v;var w="$isDayjsObject",M=function(e){return e instanceof j||!(!e||!e[w])},_=function e(t,n,r){var o;if(!t)return x;if("string"==typeof t){var i=t.toLowerCase();b[i]&&(o=i),n&&(b[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;b[s]=t,o=s}return!r&&o&&(x=o),o||!r&&x},z=function(e,t){if(M(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new j(n)},$=y;$.l=_,$.i=M,$.w=function(e,t){return z(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var j=function(){function v(e){this.$L=_(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var g=v.prototype;return g.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if($.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(h);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},g.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},g.$utils=function(){return $},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(e,t){var n=z(e);return this.startOf(t)<=n&&n<=this.endOf(t)},g.isAfter=function(e,t){return z(e)<this.startOf(t)},g.isBefore=function(e,t){return this.endOf(t)<z(e)},g.$g=function(e,t,n){return $.u(e)?this[t]:this.set(n,e)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(e,t){var n=this,r=!!$.u(t)||t,d=$.p(e),f=function(e,t){var o=$.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(s)},h=function(e,t){return $.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,v=this.$M,g=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case u:return r?f(1,0):f(31,11);case l:return r?f(1,v):f(0,v+1);case c:var x=this.$locale().weekStart||0,b=(p<x?p+7:p)-x;return f(r?g-b:g+(6-b),v);case s:case m:return h(y+"Hours",0);case a:return h(y+"Minutes",1);case i:return h(y+"Seconds",2);case o:return h(y+"Milliseconds",3);default:return this.clone()}},g.endOf=function(e){return this.startOf(e,!1)},g.$set=function(e,t){var n,c=$.p(e),d="set"+(this.$u?"UTC":""),f=(n={},n[s]=d+"Date",n[m]=d+"Date",n[l]=d+"Month",n[u]=d+"FullYear",n[a]=d+"Hours",n[i]=d+"Minutes",n[o]=d+"Seconds",n[r]=d+"Milliseconds",n)[c],h=c===s?this.$D+(t-this.$W):t;if(c===l||c===u){var p=this.clone().set(m,1);p.$d[f](h),p.init(),this.$d=p.set(m,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},g.set=function(e,t){return this.clone().$set(e,t)},g.get=function(e){return this[$.p(e)]()},g.add=function(r,d){var m,f=this;r=Number(r);var h=$.p(d),p=function(e){var t=z(f);return $.w(t.date(t.date()+Math.round(e*r)),f)};if(h===l)return this.set(l,this.$M+r);if(h===u)return this.set(u,this.$y+r);if(h===s)return p(1);if(h===c)return p(7);var v=(m={},m[i]=t,m[a]=n,m[o]=e,m)[h]||1,g=this.$d.getTime()+r*v;return $.w(g,this)},g.subtract=function(e,t){return this.add(-1*e,t)},g.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=$.z(this),i=this.$H,a=this.$m,s=this.$M,c=n.weekdays,l=n.months,d=n.meridiem,u=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},m=function(e){return $.s(i%12||12,e,"0")},h=d||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return $.s(t.$y,4,"0");case"M":return s+1;case"MM":return $.s(s+1,2,"0");case"MMM":return u(n.monthsShort,s,l,3);case"MMMM":return u(l,s);case"D":return t.$D;case"DD":return $.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(n.weekdaysMin,t.$W,c,2);case"ddd":return u(n.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(i);case"HH":return $.s(i,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return h(i,a,!0);case"A":return h(i,a,!1);case"m":return String(a);case"mm":return $.s(a,2,"0");case"s":return String(t.$s);case"ss":return $.s(t.$s,2,"0");case"SSS":return $.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(r,m,f){var h,p=this,v=$.p(m),g=z(r),y=(g.utcOffset()-this.utcOffset())*t,x=this-g,b=function(){return $.m(p,g)};switch(v){case u:h=b()/12;break;case l:h=b();break;case d:h=b()/3;break;case c:h=(x-y)/6048e5;break;case s:h=(x-y)/864e5;break;case a:h=x/n;break;case i:h=x/t;break;case o:h=x/e;break;default:h=x}return f?h:$.a(h)},g.daysInMonth=function(){return this.endOf(l).$D},g.$locale=function(){return b[this.$L]},g.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=_(e,t,!0);return r&&(n.$L=r),n},g.clone=function(){return $.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},v}(),E=j.prototype;return z.prototype=E,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",s],["$M",l],["$y",u],["$D",m]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),z.extend=function(e,t){return e.$i||(e(t,j,z),e.$i=!0),z},z.locale=_,z.isDayjs=M,z.unix=function(e){return z(1e3*e)},z.en=b[x],z.Ls=b,z.p={},z}()},356:function(e,t,n){e.exports=function(e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e),r={name:"ko",weekdays:"\uc77c\uc694\uc77c_\uc6d4\uc694\uc77c_\ud654\uc694\uc77c_\uc218\uc694\uc77c_\ubaa9\uc694\uc77c_\uae08\uc694\uc77c_\ud1a0\uc694\uc77c".split("_"),weekdaysShort:"\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),weekdaysMin:"\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),months:"1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),monthsShort:"1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),ordinal:function(e){return e+"\uc77c"},formats:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY\ub144 MMMM D\uc77c",LLL:"YYYY\ub144 MMMM D\uc77c A h:mm",LLLL:"YYYY\ub144 MMMM D\uc77c dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY\ub144 MMMM D\uc77c",lll:"YYYY\ub144 MMMM D\uc77c A h:mm",llll:"YYYY\ub144 MMMM D\uc77c dddd A h:mm"},meridiem:function(e){return e<12?"\uc624\uc804":"\uc624\ud6c4"},relativeTime:{future:"%s \ud6c4",past:"%s \uc804",s:"\uba87 \ucd08",m:"1\ubd84",mm:"%d\ubd84",h:"\ud55c \uc2dc\uac04",hh:"%d\uc2dc\uac04",d:"\ud558\ub8e8",dd:"%d\uc77c",M:"\ud55c \ub2ec",MM:"%d\ub2ec",y:"\uc77c \ub144",yy:"%d\ub144"}};return n.default.locale(r,null,!0),r}(n(4548))},6537:function(e){e.exports=function(){"use strict";return function(e,t,n){e=e||{};var r=t.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(e,t,n,o){return r.fromToBase(e,t,n,o)}n.en.relativeTime=o,r.fromToBase=function(t,r,i,a,s){for(var c,l,d,u=i.$locale().relativeTime||o,m=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=m.length,h=0;h<f;h+=1){var p=m[h];p.d&&(c=a?n(t).diff(i,p.d,!0):i.diff(t,p.d,!0));var v=(e.rounding||Math.round)(Math.abs(c));if(d=c>0,v<=p.r||!p.r){v<=1&&h>0&&(p=m[h-1]);var g=u[p.l];s&&(v=s(""+v)),l="string"==typeof g?g.replace("%d",v):g(v,r,p.l,d);break}}if(r)return l;var y=d?u.future:u.past;return"function"==typeof y?y(l):y.replace("%s",l)},r.to=function(e,t){return i(e,t,this,!0)},r.from=function(e,t){return i(e,t,this)};var a=function(e){return e.$u?n.utc():n()};r.toNow=function(e){return this.to(a(this),e)},r.fromNow=function(e){return this.from(a(this),e)}}}()},239:function(e){e.exports=function(){"use strict";return function(e,t,n){n.updateLocale=function(e,t){var r=n.Ls[e];if(r)return(t?Object.keys(t):[]).forEach((function(e){r[e]=t[e]})),r}}}()},2437:function(e,t,n){Promise.resolve().then(n.t.bind(n,9167,23)),Promise.resolve().then(n.bind(n,7351))},9167:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{suspense:function(){return o},NoSSR:function(){return i}});const r=n(1283);function o(){const e=new Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,e}function i(e){let{children:t}=e;return t}},502:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7437),o=n(4548),i=n.n(o);n(356);function a(e){let{dateString:t,dateFormat:n="YYYY.MM.",className:o=" "}=e;return t?(0,r.jsx)("time",{className:o,children:i()(t).format(n)}):(0,r.jsx)(r.Fragment,{})}},7351:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var r=n(7437),o=n(1396),i=n.n(o),a=n(502),s=n(4033),c=n(9545);var l=n(135),d=n(4101);function u(e){let{nextPost:t,prevPost:n}=e;return(0,r.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-stretch w-full max-w-none",children:[n&&!t&&(0,r.jsx)("div",{}),t&&t.url&&m(t),n&&n.url&&m(n,!0),!n&&t&&(0,r.jsx)("div",{})]})}function m(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(0,r.jsxs)(i(),{href:e.url||"/",className:"flex-1 block px-10 py-16 md:p-20 relative group overflow-hidden w-full md:max-w-xl text-[".concat(e.color,"] hover:text-base-100 text-").concat(t?"right":"left"),style:{"--post-color":e.color},children:[(0,r.jsx)("div",{className:"group-hover:opacity-95 transition-all absolute top-0 left-0 opacity-0 w-full h-full -z-10 overflow-hidden",children:(0,r.jsx)(d.default,{src:e.image,width:400,height:400,className:"w-full h-full object-cover scale-125 blur-sm brightness-50 group-hover:scale-150",style:{transitionProperty:"transform",transitionDuration:"2s"}})}),(0,r.jsx)("span",{className:"opacity-30 group-hover:opacity-100 relative top-0 group-hover:top-2 group-hover:text-[var(--post-color)] transition-all",children:t?(0,r.jsxs)(r.Fragment,{children:["PREV"," ",(0,r.jsx)(l.P.arrowRight,{width:15,height:15,className:"inline-block align-[-0.1em]"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.P.arrowLeft,{width:15,height:15,className:"inline-block align-[-0.1em]"})," ","NEXT"]})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("span",{className:"group-hover:font-bold opacity-50 text-2xl break-keep relative bottom-0 group-hover:bottom-2 group-hover:opacity-100 transition-all",children:e.title})]})}var f=n(9693),h=n.n(f),p=n(4548),v=n.n(p),g=n(6537),y=n.n(g),x=n(239),b=n.n(x);n(356);function w(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n=v()(""==t?new Date:t),r=v()(e);return v()(n).from(r,!0)}v().extend(y()),v().extend(b()),v().locale("ko"),v().updateLocale("ko",{relativeTime:{future:"%s \ud6c4",past:"%s \uc804",s:"\uba87 \ucd08",m:"1\ubd84",mm:"%d\ubd84",h:"\ud55c \uc2dc\uac04",hh:"%d\uc2dc\uac04",d:"\ud558\ub8e8",dd:"%d\uc77c",M:"\uc77c \uac1c\uc6d4",MM:"%d\uac1c\uc6d4",y:"\uc77c \ub144",yy:"%d\ub144"}});var M=n(2265),_=n(4887),z=n(2535);const $=(e,t={})=>M.useMemo((()=>((e,t={})=>{const n={React:M,ReactDOM:_,_jsx_runtime:z.i,...t};return new Function(...Object.keys(n),e)(...Object.values(n)).default})(e,t)),[e,t]);var j=n(6117),E=n(1729),N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D=function(e){return"IMG"===e.tagName},L=function(e){return e&&1===e.nodeType},S=function(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()},Y=function(e){try{return Array.isArray(e)?e.filter(D):function(e){return NodeList.prototype.isPrototypeOf(e)}(e)?[].slice.call(e).filter(D):L(e)?[e].filter(D):"string"===typeof e?[].slice.call(document.querySelectorAll(e)).filter(D):[]}catch(t){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}},O=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.background=e,t},k=function(e){var t=e.getBoundingClientRect(),n=t.top,r=t.left,o=t.width,i=t.height,a=e.cloneNode(),s=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,c=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return a.removeAttribute("id"),a.style.position="absolute",a.style.top=n+s+"px",a.style.left=r+c+"px",a.style.width=o+"px",a.style.height=i+"px",a.style.transform="",a},H=function(e,t){var n=N({bubbles:!1,cancelable:!1,detail:void 0},t);if("function"===typeof window.CustomEvent)return new CustomEvent(e,n);var r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n.bubbles,n.cancelable,n.detail),r};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}");var T=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=window.Promise||function(e){function t(){}e(t,t)},o=function(e){var t=e.target;t!==$?-1!==x.indexOf(t)&&p({target:t}):h()},i=function(){if(!w&&z.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(M-e)>_.scrollOffset&&setTimeout(h,150)}},a=function(e){var t=e.key||e.keyCode;"Escape"!==t&&"Esc"!==t&&27!==t||h()},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e;if(e.background&&($.style.background=e.background),e.container&&e.container instanceof Object&&(t.container=N({},_.container,e.container)),e.template){var n=L(e.template)?e.template:document.querySelector(e.template);t.template=n}return _=N({},_,t),x.forEach((function(e){e.dispatchEvent(H("medium-zoom:update",{detail:{zoom:j}}))})),j},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e(N({},_,t))},l=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.reduce((function(e,t){return[].concat(e,Y(t))}),[]);return r.filter((function(e){return-1===x.indexOf(e)})).forEach((function(e){x.push(e),e.classList.add("medium-zoom-image")})),b.forEach((function(e){var t=e.type,n=e.listener,o=e.options;r.forEach((function(e){e.addEventListener(t,n,o)}))})),j},d=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];z.zoomed&&h();var r=t.length>0?t.reduce((function(e,t){return[].concat(e,Y(t))}),[]):x;return r.forEach((function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(H("medium-zoom:detach",{detail:{zoom:j}}))})),x=x.filter((function(e){return-1===r.indexOf(e)})),j},u=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return x.forEach((function(r){r.addEventListener("medium-zoom:"+e,t,n)})),b.push({type:"medium-zoom:"+e,listener:t,options:n}),j},m=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return x.forEach((function(r){r.removeEventListener("medium-zoom:"+e,t,n)})),b=b.filter((function(n){return!(n.type==="medium-zoom:"+e&&n.listener.toString()===t.toString())})),j},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target,n=function(){var e={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},t=void 0,n=void 0;if(_.container)if(_.container instanceof Object)t=(e=N({},e,_.container)).width-e.left-e.right-2*_.margin,n=e.height-e.top-e.bottom-2*_.margin;else{var r=(L(_.container)?_.container:document.querySelector(_.container)).getBoundingClientRect(),o=r.width,i=r.height,a=r.left,s=r.top;e=N({},e,{width:o,height:i,left:a,top:s})}t=t||e.width-2*_.margin,n=n||e.height-2*_.margin;var c=z.zoomedHd||z.original,l=S(c)?t:c.naturalWidth||t,d=S(c)?n:c.naturalHeight||n,u=c.getBoundingClientRect(),m=u.top,f=u.left,h=u.width,p=u.height,v=Math.min(Math.max(h,l),t)/h,g=Math.min(Math.max(p,d),n)/p,y=Math.min(v,g),x="scale("+y+") translate3d("+((t-h)/2-f+_.margin+e.left)/y+"px, "+((n-p)/2-m+_.margin+e.top)/y+"px, 0)";z.zoomed.style.transform=x,z.zoomedHd&&(z.zoomedHd.style.transform=x)};return new r((function(e){if(t&&-1===x.indexOf(t))e(j);else{if(z.zoomed)e(j);else{if(t)z.original=t;else{if(!(x.length>0))return void e(j);var r=x;z.original=r[0]}if(z.original.dispatchEvent(H("medium-zoom:open",{detail:{zoom:j}})),M=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,w=!0,z.zoomed=k(z.original),document.body.appendChild($),_.template){var o=L(_.template)?_.template:document.querySelector(_.template);z.template=document.createElement("div"),z.template.appendChild(o.content.cloneNode(!0)),document.body.appendChild(z.template)}if(z.original.parentElement&&"PICTURE"===z.original.parentElement.tagName&&z.original.currentSrc&&(z.zoomed.src=z.original.currentSrc),document.body.appendChild(z.zoomed),window.requestAnimationFrame((function(){document.body.classList.add("medium-zoom--opened")})),z.original.classList.add("medium-zoom-image--hidden"),z.zoomed.classList.add("medium-zoom-image--opened"),z.zoomed.addEventListener("click",h),z.zoomed.addEventListener("transitionend",(function t(){w=!1,z.zoomed.removeEventListener("transitionend",t),z.original.dispatchEvent(H("medium-zoom:opened",{detail:{zoom:j}})),e(j)})),z.original.getAttribute("data-zoom-src")){z.zoomedHd=z.zoomed.cloneNode(),z.zoomedHd.removeAttribute("srcset"),z.zoomedHd.removeAttribute("sizes"),z.zoomedHd.removeAttribute("loading"),z.zoomedHd.src=z.zoomed.getAttribute("data-zoom-src"),z.zoomedHd.onerror=function(){clearInterval(i),console.warn("Unable to reach the zoom image target "+z.zoomedHd.src),z.zoomedHd=null,n()};var i=setInterval((function(){z.zoomedHd.complete&&(clearInterval(i),z.zoomedHd.classList.add("medium-zoom-image--opened"),z.zoomedHd.addEventListener("click",h),document.body.appendChild(z.zoomedHd),n())}),10)}else if(z.original.hasAttribute("srcset")){z.zoomedHd=z.zoomed.cloneNode(),z.zoomedHd.removeAttribute("sizes"),z.zoomedHd.removeAttribute("loading");var a=z.zoomedHd.addEventListener("load",(function(){z.zoomedHd.removeEventListener("load",a),z.zoomedHd.classList.add("medium-zoom-image--opened"),z.zoomedHd.addEventListener("click",h),document.body.appendChild(z.zoomedHd),n()}))}else n()}}}))},h=function(){return new r((function(e){if(!w&&z.original){w=!0,document.body.classList.remove("medium-zoom--opened"),z.zoomed.style.transform="",z.zoomedHd&&(z.zoomedHd.style.transform=""),z.template&&(z.template.style.transition="opacity 150ms",z.template.style.opacity=0),z.original.dispatchEvent(H("medium-zoom:close",{detail:{zoom:j}})),z.zoomed.addEventListener("transitionend",(function t(){z.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(z.zoomed),z.zoomedHd&&document.body.removeChild(z.zoomedHd),document.body.removeChild($),z.zoomed.classList.remove("medium-zoom-image--opened"),z.template&&document.body.removeChild(z.template),w=!1,z.zoomed.removeEventListener("transitionend",t),z.original.dispatchEvent(H("medium-zoom:closed",{detail:{zoom:j}})),z.original=null,z.zoomed=null,z.zoomedHd=null,z.template=null,e(j)}))}else e(j)}))},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target;return z.original?h():f({target:t})},v=function(){return _},g=function(){return x},y=function(){return z.original},x=[],b=[],w=!1,M=0,_=n,z={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(t)?_=t:(t||"string"===typeof t)&&l(t),_=N({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},_);var $=O(_.background);document.addEventListener("click",o),document.addEventListener("keyup",a),document.addEventListener("scroll",i),window.addEventListener("resize",h);var j={open:f,close:h,toggle:p,update:s,clone:c,attach:l,detach:d,on:u,off:m,getOptions:v,getImages:g,getZoomedImage:y};return j};function C(e){let{src:t,alt:n,...o}=e;const i=(0,M.useRef)(null),[a,s]=(0,M.useState)(),c="oklch(var(--p))";return(0,M.useEffect)((()=>{i.current&&!i.current.classList.contains("medium-zoom-image")&&s(T(i.current,{background:c}))}),[]),(0,M.useEffect)((()=>{null===a||void 0===a||a.update({background:c})}),[c]),(0,r.jsx)("img",{ref:i,src:t,alt:n,...o})}var A=n(6394);const I={img:function(e){let{...t}=e;return(0,r.jsx)(E.E.span,{initial:{opacity:.01},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.6,ease:[.33,1,.68,1]},children:(0,r.jsx)(C,{...t})})}};function P(e){let{post:t,prevPost:n,nextPost:o}=e;var d;const{getCategoryUrl:m,getTagUrl:f}=(0,c.Z)(),{getProp:p}={getImg:e=>JSON.parse(decodeURI(e)),getProp:e=>{let{src:t,alt:n}=e;return{pathname:"/preview",query:{img:encodeURI(JSON.stringify({src:t,alt:n}))}}}},v=t.color?t.color:"oklch(var(--p))",g=$(t.body.code);return t?(0,r.jsx)(j.default,{colorName:v,children:(0,r.jsx)(A.LandingBox,{className:"!bg-base-content !text-base-100",children:(0,r.jsxs)("div",{style:{"--post-color":t.color},className:"max-w-[1920px] w-full relative flex flex-col justify-center items-center gap-20 px-5 xl:px-10 py-20 z-10 isolate",children:[(0,r.jsxs)("article",{id:t.slug,className:" flex flex-col pt-[20vh] place-items-center gap-5 w-full relative",children:[(0,r.jsxs)("header",{className:"w-full relative mb-10",children:[(0,r.jsxs)(i(),{className:"btn btn-ghost max-w-fit p-0 opacity-20 hover:opacity-70 transition-opacity absolute -top-20 left-0 group",href:c.K,children:[(0,r.jsx)(l.P.uturnLeft,{width:20,height:20,className:"inline-block"}),(0,r.jsx)("span",{className:"opacity-0 group-hover:opacity-100 transition-opacity",children:"Back To List"})]}),(0,r.jsx)("div",{className:"w-full pb-8",children:(0,r.jsx)("h1",{className:" font-extrabold break-keep text-4xl w-3/4 text-[var(--post-color)]",dangerouslySetInnerHTML:{__html:(y=t.title,y.indexOf("\u3008")>=0?y.split("\u3008").join("<br />\u3008"):y)}})}),(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row gap-5 ",children:[t.description&&(0,r.jsxs)("div",{className:"border-t border-[var(--post-color)]  py-5 w-full",children:[(0,r.jsx)("h4",{className:"text-xs mb-2 text-[var(--post-color)]",children:"DESCRIPTION"}),(0,r.jsx)("div",{className:" break-keep leading-relaxed w-3/4",dangerouslySetInnerHTML:{__html:(null===(d=t.description)||void 0===d?void 0:d.html)||""},suppressHydrationWarning:!0})]}),(0,r.jsxs)("div",{className:"border-t border-[var(--post-color)]  py-5 w-full",children:[(0,r.jsx)("h4",{className:"text-xs mb-2 text-[var(--post-color)]",children:"CATEGORY"}),(0,r.jsx)("p",{children:(0,r.jsx)(i(),{href:m(t.category),className:" font-bold uppercase hover:text-primary transition-all",children:t.category.replaceAll("-"," ")})})]}),t.tag&&(0,r.jsxs)("div",{className:"border-t border-[var(--post-color)]  py-5 w-full",children:[(0,r.jsx)("h4",{className:"text-xs mb-2 text-[var(--post-color)]",children:"TAG"}),(0,r.jsx)(A.TagOl,{data:t.tag,parentClassName:"py-1 text-sm flex flex-row gap-3 gap-x-4 flex-wrap",childColorClassName:"fill-transparent text-base-100 hover:bg-accent hover:fill-accent transition-opacity"})]}),(0,r.jsxs)("div",{className:"border-t border-[var(--post-color)]  py-5 w-full",children:[(0,r.jsx)("h4",{className:"text-xs mb-2 text-[var(--post-color)]",children:"DATE"}),(0,r.jsxs)("p",{children:[(0,r.jsxs)("span",{children:[t.startDate&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{dateString:t.startDate,dateFormat:"YYYY.MM.DD."})," - "]}),(0,r.jsx)(a.Z,{dateString:t.date,dateFormat:"YYYY.MM.DD."})]}),(0,r.jsx)("br",{}),(0,r.jsxs)("span",{children:[w(t.date)," \uc804",t.startDate&&"\uc5d0"]}),t.startDate&&(0,r.jsxs)(r.Fragment,{children:[" - ",(0,r.jsxs)("span",{children:["\ucd1d ",w(t.startDate,t.date)," \ub3d9\uc548"]})]})]})]})]})]}),(0,r.jsx)("div",{className:"".concat(h().prose," prose md:prose-lg 2xl:prose-xl max-w-screen-md overflow-visible prose-headings:!text-[var(--post-color)] prose-headings:uppercase"),children:(0,r.jsx)(g,{components:I})})]}),(0,r.jsx)(u,{nextPost:o,prevPost:n})]})})}):(0,s.notFound)();var y}},9693:function(e){e.exports={prose:"prose_prose__fpANH",hover:"prose_hover__BKHaG","table-pin-rows":"prose_table-pin-rows__LGLLF","table-pin-cols":"prose_table-pin-cols__5cZ8w",active:"prose_active__e4dK6"}},2535:function(e,t,n){const r=n(7437);e.exports.i=r}},function(e){e.O(0,[200,691,214,681,672,971,472,744],(function(){return t=2437,e(e.s=t);var t}));var t=e.O();_N_E=t}]);