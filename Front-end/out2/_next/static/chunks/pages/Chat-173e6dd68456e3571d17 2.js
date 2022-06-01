(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[440],{7484:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",u="week",c="month",d="quarter",l="year",f="date",p="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:l,w:u,d:s,D:f,h:a,m:o,s:i,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},x="en",w={};w[x]=g;var b=function(e){return e instanceof M},S=function(e,t,n){var r;if(!e)return x;if("string"==typeof e)w[e]&&(r=e),t&&(w[e]=t,r=e);else{var i=e.name;w[i]=e,r=i}return!n&&r&&(x=r),r||!n&&x},O=function(e,t){if(b(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new M(n)},_=v;_.l=S,_.i=b,_.w=function(e,t){return O(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var M=function(){function g(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(_.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(h);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return _},y.isValid=function(){return!(this.$d.toString()===p)},y.isSame=function(e,t){var n=O(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return O(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<O(e)},y.$g=function(e,t,n){return _.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!_.u(t)||t,d=_.p(e),p=function(e,t){var i=_.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},h=function(e,t){return _.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case l:return r?p(1,0):p(31,11);case c:return r?p(1,g):p(0,g+1);case u:var x=this.$locale().weekStart||0,w=(m<x?m+7:m)-x;return p(r?y-w:y+(6-w),g);case s:case f:return h(v+"Hours",0);case a:return h(v+"Minutes",1);case o:return h(v+"Seconds",2);case i:return h(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,u=_.p(e),d="set"+(this.$u?"UTC":""),p=(n={},n[s]=d+"Date",n[f]=d+"Date",n[c]=d+"Month",n[l]=d+"FullYear",n[a]=d+"Hours",n[o]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[u],h=u===s?this.$D+(t-this.$W):t;if(u===c||u===l){var m=this.clone().set(f,1);m.$d[p](h),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[_.p(e)]()},y.add=function(r,d){var f,p=this;r=Number(r);var h=_.p(d),m=function(e){var t=O(p);return _.w(t.date(t.date()+Math.round(e*r)),p)};if(h===c)return this.set(c,this.$M+r);if(h===l)return this.set(l,this.$y+r);if(h===s)return m(1);if(h===u)return m(7);var g=(f={},f[o]=t,f[a]=n,f[i]=e,f)[h]||1,y=this.$d.getTime()+r*g;return _.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=_.z(this),o=this.$H,a=this.$m,s=this.$M,u=n.weekdays,c=n.months,d=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].substr(0,o)},l=function(e){return _.s(o%12||12,e,"0")},f=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:_.s(s+1,2,"0"),MMM:d(n.monthsShort,s,c,3),MMMM:d(c,s),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,u,2),ddd:d(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(o),HH:_.s(o,2,"0"),h:l(1),hh:l(2),a:f(o,a,!0),A:f(o,a,!1),m:String(a),mm:_.s(a,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:i};return r.replace(m,(function(e,t){return t||h[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,f,p){var h,m=_.p(f),g=O(r),y=(g.utcOffset()-this.utcOffset())*t,v=this-g,x=_.m(this,g);return x=(h={},h[l]=x/12,h[c]=x,h[d]=x/3,h[u]=(v-y)/6048e5,h[s]=(v-y)/864e5,h[a]=v/n,h[o]=v/t,h[i]=v/e,h)[m]||v,p?x:_.a(x)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return _.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),j=M.prototype;return O.prototype=j,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",l],["$D",f]].forEach((function(e){j[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),O.extend=function(e,t){return e.$i||(e(t,M,O),e.$i=!0),O},O.locale=S,O.isDayjs=b,O.unix=function(e){return O(1e3*e)},O.en=w[x],O.Ls=w,O.p={},O}()},3398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var i=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=i},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(i.default.useContext(o.AmpStateContext))};var r,i=(r=n(7294))&&r.__esModule?r:{default:r},o=n(3398);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,o=e.hasQuery,a=void 0!==o&&o;return n||i&&a}},2775:function(e,t,n){"use strict";var r=n(1682);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var o,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(7294)),s=(o=n(3244))&&o.__esModule?o:{default:o},u=n(3398),c=n(1165),d=n(6393);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var o=!0,a=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){a=!0;var s=i.key.slice(i.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var u=0,c=h.length;u<c;u++){var d=h[u];if(i.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?o=!1:n.add(d);else{var l=i.props[d],f=r[d]||new Set;"name"===d&&a||!f.has(l)?(f.add(l),r[d]=f):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,a.default.cloneElement(e,s)}return a.default.cloneElement(e,{key:o})}))}var g=function(e){var t=e.children,n=(0,a.useContext)(u.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(s.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,d.isInAmpMode)(n)},t)};t.default=g},3244:function(e,t,n){"use strict";var r=n(3115),i=n(2553),o=n(2012),a=(n(450),n(9807)),s=n(7690),u=n(9828);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var i=u(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var d=n(7294),l=function(e){a(n,e);var t=c(n);function n(e){var o;return i(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=l},8794:function(e,t,n){"use strict";n.d(t,{W:function(){return s}});var r=n(5893),i=(n(7294),n(9163)),o=n(8315),a=i.ZP.button.withConfig({displayName:"styles__BaseButton",componentId:"sc-x8w6a0-0"})(["display:flex;justify-content:center;align-items:center;width:175px;height:50px;border-radius:10px;background:",";color:",";transition:0.3s;&:hover{cursor:pointer;opacity:0.9;}"],(function(e){return e.color}),o.r.assets.background),s=function(e){return(0,r.jsx)(a,{onClick:e.onClick,color:e.bgColor,disabled:e.disable,children:e.text})}},8238:function(e,t,n){"use strict";n.d(t,{a:function(){return o}});var r=n(7294),i=n(4082),o=function(){return(0,r.useContext)(i.V)}},7777:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var r=n(5893),i=n(809),o=n.n(i),a=n(2447),s=n(1385),u=n(7294),c=n(9008),d=n(7484),l=n.n(d),f=n(9952),p=n(8238),h=n(9249),m=n(9163),g=n(8315),y=m.ZP.main.withConfig({displayName:"chat__Main",componentId:"sc-nkf2dm-0"})(["display:flex;justify-content:center;align-items:center;height:100vh;width:100vw;overflow-y:hidden;margin:0 -32px;background:",";@media (min-width:1024px){margin:0 -64px;}"],g.r.assets.borderLight),v=m.ZP.div.withConfig({displayName:"chat__MainContainer",componentId:"sc-nkf2dm-1"})(["display:flex;flex-direction:column;height:90%;width:90%;padding:0 32px;background:",";border-radius:20px;h1{display:flex;justify-content:center;align-items:center;text-align:center;font-size:25px;font-weight:500;padding:16px;color:",";border-bottom:1px solid ",";svg{margin-right:16px;}}"],g.r.assets.background,g.r.assets.font,g.r.assets.borderDark),x=m.ZP.div.withConfig({displayName:"chat__ContainerChat",componentId:"sc-nkf2dm-2"})(["display:flex;flex-direction:column;width:100%;height:75%;overflow-y:scroll;overflow-y:auto;overflow-x:hidden;"]),w=m.ZP.div.withConfig({displayName:"chat__MessageUser",componentId:"sc-nkf2dm-3"})(["display:flex;justify-content:",";"],(function(e){return e.userLoged?"flex-end":"flex-start"})),b=m.ZP.div.withConfig({displayName:"chat__ContainerMessage",componentId:"sc-nkf2dm-4"})(["display:flex;flex-direction:column;width:300px;background:",";margin-top:1%;margin-bottom:3px;margin-right:3%;padding:10px;margin:10px;border-radius:",";"],(function(e){return e.userLoged?g.r.colors.pink:g.r.colors.purple}),(function(e){return e.userLoged?"10px 10px 0px 10px":"10px 10px 10px 0px"})),S=m.ZP.span.withConfig({displayName:"chat__UsernameLoged",componentId:"sc-nkf2dm-5"})(["display:flex;justify-content:",";color:",";font-size:12px;font-weight:bold;margin-bottom:8px;"],(function(e){return e.userLoged?"end":"start"}),g.r.assets.font),O=m.ZP.span.withConfig({displayName:"chat__MessageBox",componentId:"sc-nkf2dm-6"})(["color:",";text-align:justify;"],g.r.assets.background),_=m.ZP.div.withConfig({displayName:"chat__ProposalContainer",componentId:"sc-nkf2dm-7"})(["display:flex;align-items:center;flex-direction:column;width:500px;padding:16px;margin:10px;background:",";border-radius:",";@media screen and (min-width:1024px){padding:32px;}"],g.r.colors.blue,(function(e){return e.userLoged?"10px 10px 0px 10px":"10px 10px 10px 0px"})),M=(m.ZP.img.withConfig({displayName:"chat__ImageProposal",componentId:"sc-nkf2dm-8"})(["width:120px;border-radius:5px;"]),m.ZP.div.withConfig({displayName:"chat__ProposalBox",componentId:"sc-nkf2dm-9"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;height:auto;width:450px;button{margin-top:16px;font-weight:bold;}"])),j=m.ZP.div.withConfig({displayName:"chat__ContainerButtonsProposal",componentId:"sc-nkf2dm-10"})(["display:flex;justify-content:space-evenly;align-items:center;width:100%;height:50px;"]),k=m.ZP.div.withConfig({displayName:"chat__ProposalDate",componentId:"sc-nkf2dm-11"})(["display:flex;justify-content:flex-end;width:100%;margin-top:16px;> span{display:flex;justify-content:flex-end;color:",";font-size:10px;}"],g.r.assets.background),$=m.ZP.div.withConfig({displayName:"chat__FooterChat",componentId:"sc-nkf2dm-12"})(["display:flex;justify-content:space-between;align-items:center;width:100%;height:20%;padding:0 8px;border-top:1px solid ",";div,input{max-height:75px;height:70px;}"],g.r.assets.borderDark),C=m.ZP.input.withConfig({displayName:"chat__FooterInput",componentId:"sc-nkf2dm-13"})(["font-size:16px;background:",";border:none;outline:none;width:80%;color:",";border-radius:10px;padding:0px 16px;&::placeholder{font-style:italic;}@media screen and (min-width:1024px){width:90%;}"],g.r.assets.borderLight,g.r.assets.font),D=m.ZP.div.withConfig({displayName:"chat__ButtonSendMessage",componentId:"sc-nkf2dm-14"})(["display:flex;justify-content:center;align-items:center;width:10%;max-width:100px;min-width:70px;border-radius:10px;background:",";transition:background-color 0.3s;cursor:pointer;svg{color:",";}&:hover{opacity:0.9;}"],g.r.colors.pink,g.r.assets.background),P=n(1912),I=n(1414),A=n(8794),R=n(6483),N=n(381),Z=n.n(N),H=(0,f.ZP)("http://localhost:3333"),E=function(){var e=(0,p.a)(),t=e.userApp,n=e.userJoinChat,i=e.loadUsersJoin,d=e.messagesReceiver,f=e.handleUsersChatJoin,m=(0,u.useState)([]),N=m[0],E=m[1],L=(0,u.useState)(!1),Y=(L[0],L[1],(0,u.useRef)());(0,u.useEffect)((function(){i()}),[]),(0,u.useEffect)((function(){var e=JSON.parse(localStorage.getItem("usersJoin"));if(e.proposal&&!1!==e.proposal){var t,n=e.confirmReservation,r=n.idHouse,i=n.idOwer,o=n.total,a=n.totalDays,s=n.checkIn,u=n.checkOut;Y.current.value="\n        Ol\xe1 ".concat(null===(t=e.userReceiver)||void 0===t?void 0:t.name,", tenho interesse em me hospedar na sua propriedade, a ").concat(e.house.name,". Gostaria de me alocar na data: ").concat(s," / ").concat(u,".\n      ");var c={name:e.userSender.name,text:Y.current.value,emailSender:e.userSender.email,emailReceiver:e.userReceiver.email,userReceiver:e.userReceiver,proposal:!0,acceptProposal:!1,idHouse:r,idOwer:i,total:o,totalDays:a,checkIn:s,checkOut:u};H.emit("send_message",c),Y.current.value="";var d=e.userSender,l=e.userReceiver;f({userSender:d,userReceiver:l})}var p={emailSender:e.userSender.email,emailReceiver:e.userReceiver.email,userSender:e.userSender,userReceiver:e.userReceiver};H.emit("list_messages",p,(function(e){E(e)}))}),[]),(0,u.useEffect)((function(){if(n){var e=n.userSender,t=n.userReceiver,r={emailSender:e.email,emailReceiver:t.email,userSender:e,userReceiver:t};H.emit("update_messages",{emailSender:t.email,emailReceiver:e.email}),H.emit("list_messages",r,(function(e){E(e)}))}}),[d]);var T=function(){var e=(0,a.Z)(o().mark((function e(t,r){var i,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i={emailSender:n.userReceiver.email,emailReceiver:n.userSender.email,acceptProposal:"accept"==r,idMessage:t.id},H.emit("handle_proposal",i),!i.acceptProposal){e.next=6;break}return a={idProperty:t.idHouse,idUser:t.idOwer,checkIn:Z()(t.checkIn).format("YYYY-MM-DD"),checkOut:Z()(t.checkOut).format("YYYY-MM-DD"),totalValue:t.total},e.next=6,R.hi.post("leases",a);case 6:return e.abrupt("return",h.Am.success("Resposta enviada com sucesso!"));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.default,{children:(0,r.jsx)("title",{children:"Queerfy | Chat"})}),(0,r.jsx)(y,{children:(0,r.jsxs)(v,{children:[(0,r.jsxs)("h1",{children:[(0,r.jsx)(P.Z,{})," Queerfy Chat"]}),(0,r.jsx)(x,{children:N.map((function(e,t){return(0,r.jsx)(r.Fragment,{children:1==e.proposal||e.acceptProposal?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(w,{userLoged:e.emailSender==n.userSender.email,children:(0,r.jsxs)(_,{userLoged:e.emailSender==n.userSender.email,children:[(0,r.jsxs)(M,{children:[(0,r.jsx)(O,{children:e.message}),(0,r.jsx)(j,{children:e.emailSender==n.userSender.email?(0,r.jsx)(A.W,{bgColor:g.r.colors.green,text:"Proposta enviada"}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(A.W,{bgColor:g.r.colors.red,onClick:function(){return T(e,"reject")},text:"Rejeitar"}),(0,r.jsx)(A.W,{bgColor:g.r.colors.green,onClick:function(){return T(e,"accept")},text:"Aceitar"})]})})]}),(0,r.jsx)(k,{children:(0,r.jsx)("span",{children:e.createdAt})})]})},e.id)}):(0,r.jsx)(w,{userLoged:e.emailSender==n.userSender.email,children:(0,r.jsxs)(b,{userLoged:e.emailSender==n.userSender.email,children:[(0,r.jsx)(S,{userLoged:e.emailSender==n.userSender.email,children:e.emailSender==n.userSender.email?"Voc\xea":e.nameUserSender}),(0,r.jsx)(O,{children:e.message}),(0,r.jsx)(k,{children:(0,r.jsx)("span",{children:e.createdAt})})]})},e.id)})}))}),(0,r.jsxs)($,{children:[(0,r.jsx)(C,{placeholder:"Digite aqui...",ref:Y}),(0,r.jsx)(D,{onClick:function(){var e=Y.current.value,r={name:t.name,text:e,emailSender:t.email,emailReceiver:n.userReceiver.email,userReceiver:n.userReceiver,proposal:!1,acceptProposal:null,idHouse:null,idOwer:null,total:null,totalDays:null,checkIn:null,checkOut:null};H.emit("send_message",r);var i={nameUserSender:n.userSender.name,emailSender:n.userSender.email,message:e,createdAt:l()().format("DD/MM/YY HH:mm:ss")};E([].concat((0,s.Z)(N),[i])),Y.current.value=""},children:(0,r.jsx)(I.Z,{size:30})})]})]})})]})}},9872:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Chat",function(){return n(7777)}])},9008:function(e,t,n){e.exports=n(2775)},8164:function(e,t,n){var r=n(4360);e.exports=function(e){if(Array.isArray(e))return r(e)}},1682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},1385:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return i}})},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,n){var r=n(8164),i=n(7381),o=n(3585),a=n(5725);e.exports=function(e){return r(e)||i(e)||o(e)||a()}},1912:function(e,t,n){"use strict";var r=n(7294),i=n(5697),o=n.n(i);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=(0,r.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,o=e.size,u=void 0===o?24:o,c=s(e,["color","size"]);return r.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),r.createElement("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}))}));u.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},u.displayName="MessageSquare",t.Z=u},1414:function(e,t,n){"use strict";var r=n(7294),i=n(5697),o=n.n(i);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=(0,r.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,o=e.size,u=void 0===o?24:o,c=s(e,["color","size"]);return r.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),r.createElement("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),r.createElement("polygon",{points:"22 2 15 22 11 13 2 9 22 2"}))}));u.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},u.displayName="Send",t.Z=u}},function(e){e.O(0,[774,885,888,179],(function(){return t=9872,e(e.s=t);var t}));var t=e.O();_N_E=t}]);