import{a8 as le,g as $,n as vt,z as ft,q as Ee,h as S,a9 as A,j as d,aa as q,ab as Te,ac as _e,ad as mt,ae as gt,af as ht,b as r,Y as ze,ag as ke,m as G,i as H,f as Re,A as E,R as ue,S as yt,P as Ne,O as bt,H as ce,F as M,ah as Ct,K as Ae,G as St,Z as _t,ai as kt,aj as wt,M as de,ak as xt,C as k,I as K,D as Q,al as pt,am as Vt,an as It,B as D,ao as ve,N as Bt,x as Oe,y as De,ap as Pt,aq as we,a5 as Me,ar as $t,as as xe,k as ie,r as Ge,a4 as Lt,U as Et}from"./entry.51d54a1d.js";import{m as T,u as z,a as Tt}from"./resizeObserver.57251e8d.js";const zt=["top","bottom"],Rt=["start","end","left","right"];function Nt(e,t){let[a,n]=e.split(" ");return n||(n=le(zt,a)?"start":le(Rt,a)?"top":"center"),{side:pe(a,t),align:pe(n,t)}}function pe(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function At(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",a=arguments.length>2?arguments[2]:void 0;return $()({name:a??vt(ft(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...T()},setup(n,l){let{slots:s}=l;return()=>{var i;return Ee(n.tag,{class:[e,n.class],style:n.style},(i=s.default)==null?void 0:i.call(s))}}})}const He=S({border:[Boolean,Number,String]},"border");function We(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:A();return{borderClasses:d(()=>{const n=q(e)?e.value:e.border,l=[];if(n===!0||n==="")l.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const s of String(n).split(" "))l.push(`border-${s}`);return l})}}const Ot=[null,"default","comfortable","compact"],fe=S({density:{type:String,default:"default",validator:e=>Ot.includes(e)}},"density");function me(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:A();return{densityClasses:d(()=>`${t}--density-${e.density}`)}}const Fe=S({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function je(e){return{elevationClasses:d(()=>{const a=q(e)?e.value:e.elevation,n=[];return a==null||n.push(`elevation-${a}`),n})}}const ee=S({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function te(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:A();return{roundedClasses:d(()=>{const n=q(e)?e.value:e.rounded,l=[];if(n===!0||n==="")l.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const s of String(n).split(" "))l.push(`rounded-${s}`);return l})}}const W=S({tag:{type:String,default:"div"}},"tag");function ge(e){return Te(()=>{const t=[],a={};if(e.value.background)if(_e(e.value.background)){if(a.backgroundColor=e.value.background,!e.value.text&&mt(e.value.background)){const n=gt(e.value.background);if(n.a==null||n.a===1){const l=ht(n);a.color=l,a.caretColor=l}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(_e(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:a}})}function J(e,t){const a=d(()=>({text:q(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:l}=ge(a);return{textColorClasses:n,textColorStyles:l}}function Ve(e,t){const a=d(()=>({background:q(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:l}=ge(a);return{backgroundColorClasses:n,backgroundColorStyles:l}}const Dt=["elevated","flat","tonal","outlined","text","plain"];function qe(e,t){return r(ze,null,[e&&r("span",{key:"overlay",class:`${t}__overlay`},null),r("span",{key:"underlay",class:`${t}__underlay`},null)])}const he=S({color:String,variant:{type:String,default:"elevated",validator:e=>Dt.includes(e)}},"variant");function Ue(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:A();const a=d(()=>{const{variant:s}=ke(e);return`${t}--variant-${s}`}),{colorClasses:n,colorStyles:l}=ge(d(()=>{const{variant:s,color:i}=ke(e);return{[["elevated","flat"].includes(s)?"background":"text"]:i}}));return{colorClasses:n,colorStyles:l,variantClasses:a}}const Xe=S({divided:Boolean,...He(),...T(),...fe(),...Fe(),...ee(),...W(),...G(),...he()},"VBtnGroup"),Ie=$()({name:"VBtnGroup",props:Xe(),setup(e,t){let{slots:a}=t;const{themeClasses:n}=H(e),{densityClasses:l}=me(e),{borderClasses:s}=We(e),{elevationClasses:i}=je(e),{roundedClasses:o}=te(e);Re({VBtn:{height:"auto",color:E(e,"color"),density:E(e,"density"),flat:!0,variant:E(e,"variant")}}),z(()=>r(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,s.value,l.value,i.value,o.value,e.class],style:e.style},a))}}),Mt=S({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Gt=S({value:null,disabled:Boolean,selectedClass:String},"group-item");function Ht(e,t){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=ue("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const l=yt();Ne(Symbol.for(`${t.description}:id`),l);const s=bt(t,null);if(!s){if(!a)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const i=E(e,"value"),o=d(()=>!!(s.disabled.value||e.disabled));s.register({id:l,value:i,disabled:o},n),ce(()=>{s.unregister(l)});const u=d(()=>s.isSelected(l)),v=d(()=>u.value&&[s.selectedClass.value,e.selectedClass]);return M(u,h=>{n.emit("group:selected",{value:h})}),{id:l,isSelected:u,toggle:()=>s.select(l,!u.value),select:h=>s.select(l,h),selectedClass:v,value:i,disabled:o,group:s}}function Wt(e,t){let a=!1;const n=Ct([]),l=Ae(e,"modelValue",[],c=>c==null?[]:Ye(n,kt(c)),c=>{const f=jt(n,c);return e.multiple?f:f[0]}),s=ue("useGroup");function i(c,f){const _=c,y=Symbol.for(`${t.description}:id`),x=wt(y,s==null?void 0:s.vnode).indexOf(f);x>-1?n.splice(x,0,_):n.push(_)}function o(c){if(a)return;u();const f=n.findIndex(_=>_.id===c);n.splice(f,1)}function u(){const c=n.find(f=>!f.disabled);c&&e.mandatory==="force"&&!l.value.length&&(l.value=[c.id])}St(()=>{u()}),ce(()=>{a=!0});function v(c,f){const _=n.find(y=>y.id===c);if(!(f&&(_!=null&&_.disabled)))if(e.multiple){const y=l.value.slice(),w=y.findIndex(m=>m===c),x=~w;if(f=f??!x,x&&e.mandatory&&y.length<=1||!x&&e.max!=null&&y.length+1>e.max)return;w<0&&f?y.push(c):w>=0&&!f&&y.splice(w,1),l.value=y}else{const y=l.value.includes(c);if(e.mandatory&&y)return;l.value=f??!y?[c]:[]}}function h(c){if(e.multiple,l.value.length){const f=l.value[0],_=n.findIndex(x=>x.id===f);let y=(_+c)%n.length,w=n[y];for(;w.disabled&&y!==_;)y=(y+c)%n.length,w=n[y];if(w.disabled)return;l.value=[n[y].id]}else{const f=n.find(_=>!_.disabled);f&&(l.value=[f.id])}}const C={register:i,unregister:o,selected:l,select:v,disabled:E(e,"disabled"),prev:()=>h(n.length-1),next:()=>h(1),isSelected:c=>l.value.includes(c),selectedClass:d(()=>e.selectedClass),items:d(()=>n),getItemIndex:c=>Ft(n,c)};return Ne(t,C),C}function Ft(e,t){const a=Ye(e,[t]);return a.length?e.findIndex(n=>n.id===a[0]):-1}function Ye(e,t){const a=[];return t.forEach(n=>{const l=e.find(i=>_t(n,i.value)),s=e[n];(l==null?void 0:l.value)!=null?a.push(l.id):s!=null&&a.push(s.id)}),a}function jt(e,t){const a=[];return t.forEach(n=>{const l=e.findIndex(s=>s.id===n);if(~l){const s=e[l];a.push(s.value!=null?s.value:l)}}),a}const Ke=Symbol.for("vuetify:v-btn-toggle"),qt=S({...Xe(),...Mt()},"VBtnToggle");$()({name:"VBtnToggle",props:qt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const{isSelected:n,next:l,prev:s,select:i,selected:o}=Wt(e,Ke);return z(()=>{const[u]=Ie.filterProps(e);return r(Ie,de({class:["v-btn-toggle",e.class]},u,{style:e.style}),{default:()=>{var v;return[(v=a.default)==null?void 0:v.call(a,{isSelected:n,next:l,prev:s,select:i,selected:o})]}})}),{next:l,prev:s,select:i}}});const Ut=S({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),se=$(!1)({name:"VDefaultsProvider",props:Ut(),setup(e,t){let{slots:a}=t;const{defaults:n,disabled:l,reset:s,root:i,scoped:o}=xt(e);return Re(n,{reset:s,root:i,scoped:o,disabled:l}),()=>{var u;return(u=a.default)==null?void 0:u.call(a)}}});const Xt=["x-small","small","default","large","x-large"],ne=S({size:{type:[String,Number],default:"default"}},"size");function ae(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:A();return Te(()=>{let a,n;return le(Xt,e.size)?a=`${t}--size-${e.size}`:e.size&&(n={width:k(e.size),height:k(e.size)}),{sizeClasses:a,sizeStyles:n}})}const Yt=S({color:String,start:Boolean,end:Boolean,icon:K,...T(),...ne(),...W({tag:"i"}),...G()},"VIcon"),Y=$()({name:"VIcon",props:Yt(),setup(e,t){let{attrs:a,slots:n}=t;const l=Q(),{themeClasses:s}=H(e),{iconData:i}=pt(d(()=>l.value||e.icon)),{sizeClasses:o}=ae(e),{textColorClasses:u,textColorStyles:v}=J(E(e,"color"));return z(()=>{var C,c;const h=(C=n.default)==null?void 0:C.call(n);return h&&(l.value=(c=Vt(h).filter(f=>f.type===It&&f.children&&typeof f.children=="string")[0])==null?void 0:c.children),r(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",s.value,o.value,u.value,{"v-icon--clickable":!!a.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:k(e.size),height:k(e.size),width:k(e.size)},v.value,e.style],role:a.onClick?"button":void 0,"aria-hidden":!a.onClick},{default:()=>[h]})}),{}}});function Je(e,t){const a=Q(),n=D(!1);if(ve){const l=new IntersectionObserver(s=>{e==null||e(s,l),n.value=!!s.find(i=>i.isIntersecting)},t);ce(()=>{l.disconnect()}),M(a,(s,i)=>{i&&(l.unobserve(i),n.value=!1),s&&l.observe(s)},{flush:"post"})}return{intersectionRef:a,isIntersecting:n}}const Kt=S({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...T(),...ne(),...W({tag:"div"}),...G()},"VProgressCircular"),Jt=$()({name:"VProgressCircular",props:Kt(),setup(e,t){let{slots:a}=t;const n=20,l=2*Math.PI*n,s=Q(),{themeClasses:i}=H(e),{sizeClasses:o,sizeStyles:u}=ae(e),{textColorClasses:v,textColorStyles:h}=J(E(e,"color")),{textColorClasses:C,textColorStyles:c}=J(E(e,"bgColor")),{intersectionRef:f,isIntersecting:_}=Je(),{resizeRef:y,contentRect:w}=Tt(),x=d(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),m=d(()=>Number(e.width)),p=d(()=>u.value?Number(e.size):w.value?w.value.width:Math.max(m.value,32)),P=d(()=>n/(1-m.value/p.value)*2),I=d(()=>m.value/p.value*P.value),R=d(()=>k((100-x.value)/100*l));return Bt(()=>{f.value=s.value,y.value=s.value}),z(()=>r(e.tag,{ref:s,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":_.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},i.value,o.value,v.value,e.class],style:[u.value,h.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:x.value},{default:()=>[r("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${P.value} ${P.value}`},[r("circle",{class:["v-progress-circular__underlay",C.value],style:c.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":I.value,"stroke-dasharray":l,"stroke-dashoffset":0},null),r("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":I.value,"stroke-dasharray":l,"stroke-dashoffset":R.value},null)]),a.default&&r("div",{class:"v-progress-circular__content"},[a.default({value:x.value})])]})),{}}}),Ze=S({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Qe(e){return{dimensionStyles:d(()=>({height:k(e.height),maxHeight:k(e.maxHeight),maxWidth:k(e.maxWidth),minHeight:k(e.minHeight),minWidth:k(e.minWidth),width:k(e.width)}))}}const Be={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},et=S({location:String},"location");function tt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=Oe();return{locationStyles:d(()=>{if(!e.location)return{};const{side:s,align:i}=Nt(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function o(v){return a?a(v):0}const u={};return s!=="center"&&(t?u[Be[s]]=`calc(100% - ${o(s)}px)`:u[s]=0),i!=="center"?t?u[Be[i]]=`calc(100% - ${o(i)}px)`:u[i]=0:(s==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),u})}}const Zt=S({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...T(),...et({location:"top"}),...ee(),...W(),...G()},"VProgressLinear"),Qt=$()({name:"VProgressLinear",props:Zt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const n=Ae(e,"modelValue"),{isRtl:l,rtlClasses:s}=Oe(),{themeClasses:i}=H(e),{locationStyles:o}=tt(e),{textColorClasses:u,textColorStyles:v}=J(e,"color"),{backgroundColorClasses:h,backgroundColorStyles:C}=Ve(d(()=>e.bgColor||e.color)),{backgroundColorClasses:c,backgroundColorStyles:f}=Ve(e,"color"),{roundedClasses:_}=te(e),{intersectionRef:y,isIntersecting:w}=Je(),x=d(()=>parseInt(e.max,10)),m=d(()=>parseInt(e.height,10)),p=d(()=>parseFloat(e.bufferValue)/x.value*100),P=d(()=>parseFloat(n.value)/x.value*100),I=d(()=>l.value!==e.reverse),R=d(()=>e.indeterminate?"fade-transition":"slide-x-transition"),N=d(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function b(g){if(!y.value)return;const{left:V,right:O,width:L}=y.value.getBoundingClientRect(),U=I.value?L-g.clientX+(O-L):g.clientX-V;n.value=Math.round(U/L*x.value)}return z(()=>r(e.tag,{ref:y,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&w.value,"v-progress-linear--reverse":I.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},_.value,i.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?k(m.value):0,"--v-progress-linear-height":k(m.value),...o.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:P.value,onClick:e.clickable&&b},{default:()=>[e.stream&&r("div",{key:"stream",class:["v-progress-linear__stream",u.value],style:{...v.value,[I.value?"left":"right"]:k(-m.value),borderTop:`${k(m.value/2)} dotted`,opacity:N.value,top:`calc(50% - ${k(m.value/4)})`,width:k(100-p.value,"%"),"--v-progress-linear-stream-to":k(m.value*(I.value?1:-1))}},null),r("div",{class:["v-progress-linear__background",h.value],style:[C.value,{opacity:N.value,width:k(e.stream?p.value:100,"%")}]},null),r(De,{name:R.value},{default:()=>[e.indeterminate?r("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(g=>r("div",{key:g,class:["v-progress-linear__indeterminate",g,c.value],style:f.value},null))]):r("div",{class:["v-progress-linear__determinate",c.value],style:[f.value,{width:k(P.value,"%")}]},null)]}),a.default&&r("div",{class:"v-progress-linear__content"},[a.default({value:P.value,buffer:p.value})])]})),{}}}),en=S({loading:[Boolean,String]},"loader");function tn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:A();return{loaderClasses:d(()=>({[`${t}--loading`]:e.loading}))}}function Vn(e,t){var n;let{slots:a}=t;return r("div",{class:`${e.name}__loader`},[((n=a.default)==null?void 0:n.call(a,{color:e.color,isActive:e.active}))||r(Qt,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const nn=["static","relative","fixed","absolute","sticky"],an=S({position:{type:String,validator:e=>nn.includes(e)}},"position");function sn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:A();return{positionClasses:d(()=>e.position?`${t}--${e.position}`:void 0)}}function In(){var e,t;return(t=(e=ue("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function ln(e,t){const a=Pt("RouterLink"),n=d(()=>!!(e.href||e.to)),l=d(()=>(n==null?void 0:n.value)||we(t,"click")||we(e,"click"));if(typeof a=="string")return{isLink:n,isClickable:l,href:E(e,"href")};const s=e.to?a.useLink(e):void 0;return{isLink:n,isClickable:l,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&d(()=>{var i,o;return e.exact?(i=s.isExactActive)==null?void 0:i.value:(o=s.isActive)==null?void 0:o.value}),href:d(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const rn=S({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function on(e,t){M(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&t&&Me(()=>{t(!0)})},{immediate:!0})}const re=Symbol("rippleStop"),un=80;function Pe(e,t){e.style.transform=t,e.style.webkitTransform=t}function oe(e){return e.constructor.name==="TouchEvent"}function nt(e){return e.constructor.name==="KeyboardEvent"}const cn=function(e,t){var C;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=0,l=0;if(!nt(e)){const c=t.getBoundingClientRect(),f=oe(e)?e.touches[e.touches.length-1]:e;n=f.clientX-c.left,l=f.clientY-c.top}let s=0,i=.3;(C=t._ripple)!=null&&C.circle?(i=.15,s=t.clientWidth/2,s=a.center?s:s+Math.sqrt((n-s)**2+(l-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const o=`${(t.clientWidth-s*2)/2}px`,u=`${(t.clientHeight-s*2)/2}px`,v=a.center?o:`${n-s}px`,h=a.center?u:`${l-s}px`;return{radius:s,scale:i,x:v,y:h,centerX:o,centerY:u}},Z={show(e,t){var f;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((f=t==null?void 0:t._ripple)!=null&&f.enabled))return;const n=document.createElement("span"),l=document.createElement("span");n.appendChild(l),n.className="v-ripple__container",a.class&&(n.className+=` ${a.class}`);const{radius:s,scale:i,x:o,y:u,centerX:v,centerY:h}=cn(e,t,a),C=`${s*2}px`;l.className="v-ripple__animation",l.style.width=C,l.style.height=C,t.appendChild(n);const c=window.getComputedStyle(t);c&&c.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),l.classList.add("v-ripple__animation--enter"),l.classList.add("v-ripple__animation--visible"),Pe(l,`translate(${o}, ${u}) scale3d(${i},${i},${i})`),l.dataset.activated=String(performance.now()),setTimeout(()=>{l.classList.remove("v-ripple__animation--enter"),l.classList.add("v-ripple__animation--in"),Pe(l,`translate(${v}, ${h}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const a=t[t.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const n=performance.now()-Number(a.dataset.activated),l=Math.max(250-n,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=a.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(a.parentNode)},300)},l)}};function at(e){return typeof e>"u"||!!e}function F(e){const t={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[re])){if(e[re]=!0,oe(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(t.center=a._ripple.centered||nt(e),a._ripple.class&&(t.class=a._ripple.class),oe(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{Z.show(e,a,t)},a._ripple.showTimer=window.setTimeout(()=>{var n;(n=a==null?void 0:a._ripple)!=null&&n.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},un)}else Z.show(e,a,t)}}function $e(e){e[re]=!0}function B(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{B(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),Z.hide(t)}}function st(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let j=!1;function lt(e){!j&&(e.keyCode===xe.enter||e.keyCode===xe.space)&&(j=!0,F(e))}function it(e){j=!1,B(e)}function rt(e){j&&(j=!1,B(e))}function ot(e,t,a){const{value:n,modifiers:l}=t,s=at(n);if(s||Z.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=l.center,e._ripple.circle=l.circle,$t(n)&&n.class&&(e._ripple.class=n.class),s&&!a){if(l.stop){e.addEventListener("touchstart",$e,{passive:!0}),e.addEventListener("mousedown",$e);return}e.addEventListener("touchstart",F,{passive:!0}),e.addEventListener("touchend",B,{passive:!0}),e.addEventListener("touchmove",st,{passive:!0}),e.addEventListener("touchcancel",B),e.addEventListener("mousedown",F),e.addEventListener("mouseup",B),e.addEventListener("mouseleave",B),e.addEventListener("keydown",lt),e.addEventListener("keyup",it),e.addEventListener("blur",rt),e.addEventListener("dragstart",B,{passive:!0})}else!s&&a&&ut(e)}function ut(e){e.removeEventListener("mousedown",F),e.removeEventListener("touchstart",F),e.removeEventListener("touchend",B),e.removeEventListener("touchmove",st),e.removeEventListener("touchcancel",B),e.removeEventListener("mouseup",B),e.removeEventListener("mouseleave",B),e.removeEventListener("keydown",lt),e.removeEventListener("keyup",it),e.removeEventListener("dragstart",B),e.removeEventListener("blur",rt)}function dn(e,t){ot(e,t,!1)}function vn(e){delete e._ripple,ut(e)}function fn(e,t){if(t.value===t.oldValue)return;const a=at(t.oldValue);ot(e,t,a)}const mn={mounted:dn,unmounted:vn,updated:fn},gn=S({active:{type:Boolean,default:void 0},symbol:{type:null,default:Ke},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:K,appendIcon:K,block:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...He(),...T(),...fe(),...Ze(),...Fe(),...Gt(),...en(),...et(),...an(),...ee(),...rn(),...ne(),...W({tag:"button"}),...G(),...he({variant:"elevated"})},"VBtn"),Bn=$()({name:"VBtn",directives:{Ripple:mn},props:gn(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:a,slots:n}=t;const{themeClasses:l}=H(e),{borderClasses:s}=We(e),{colorClasses:i,colorStyles:o,variantClasses:u}=Ue(e),{densityClasses:v}=me(e),{dimensionStyles:h}=Qe(e),{elevationClasses:C}=je(e),{loaderClasses:c}=tn(e),{locationStyles:f}=tt(e),{positionClasses:_}=sn(e),{roundedClasses:y}=te(e),{sizeClasses:w,sizeStyles:x}=ae(e),m=Ht(e,e.symbol,!1),p=ln(e,a),P=d(()=>{var g;return e.active!==void 0?e.active:p.isLink.value?(g=p.isActive)==null?void 0:g.value:m==null?void 0:m.isSelected.value}),I=d(()=>(m==null?void 0:m.disabled.value)||e.disabled),R=d(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),N=d(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function b(g){var V;I.value||p.isLink.value&&(g.metaKey||g.ctrlKey||g.shiftKey||g.button!==0||a.target==="_blank")||((V=p.navigate)==null||V.call(p,g),m==null||m.toggle())}return on(p,m==null?void 0:m.select),z(()=>{var ye,be;const g=p.isLink.value?"a":e.tag,V=!!(e.prependIcon||n.prepend),O=!!(e.appendIcon||n.append),L=!!(e.icon&&e.icon!==!0),U=(m==null?void 0:m.isSelected.value)&&(!p.isLink.value||((ye=p.isActive)==null?void 0:ye.value))||!m||((be=p.isActive)==null?void 0:be.value);return ie(r(g,{type:g==="a"?void 0:"button",class:["v-btn",m==null?void 0:m.selectedClass.value,{"v-btn--active":P.value,"v-btn--block":e.block,"v-btn--disabled":I.value,"v-btn--elevated":R.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},l.value,s.value,U?i.value:void 0,v.value,C.value,c.value,_.value,y.value,w.value,u.value,e.class],style:[U?o.value:void 0,h.value,f.value,x.value,e.style],disabled:I.value||void 0,href:p.href.value,onClick:b,value:N.value},{default:()=>{var Ce;return[qe(!0,"v-btn"),!e.icon&&V&&r("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?r(se,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):r(Y,{key:"prepend-icon",icon:e.prependIcon},null)]),r("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&L?r(Y,{key:"content-icon",icon:e.icon},null):r(se,{key:"content-defaults",disabled:!L,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var Se;return[((Se=n.default)==null?void 0:Se.call(n))??e.text]}})]),!e.icon&&O&&r("span",{key:"append",class:"v-btn__append"},[n.append?r(se,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):r(Y,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&r("span",{key:"loader",class:"v-btn__loader"},[((Ce=n.loader)==null?void 0:Ce.call(n))??r(Jt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Ge("ripple"),!I.value&&e.ripple,null]])}),{}}});function hn(e){return{aspectStyles:d(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const ct=S({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...T(),...Ze()},"VResponsive"),Le=$()({name:"VResponsive",props:ct(),setup(e,t){let{slots:a}=t;const{aspectStyles:n}=hn(e),{dimensionStyles:l}=Qe(e);return z(()=>{var s;return r("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[l.value,e.style]},[r("div",{class:"v-responsive__sizer",style:n.value},null),(s=a.additional)==null?void 0:s.call(a),a.default&&r("div",{class:["v-responsive__content",e.contentClass]},[a.default()])])}),{}}}),yn=S({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),X=(e,t)=>{let{slots:a}=t;const{transition:n,disabled:l,...s}=e,{component:i=De,...o}=typeof n=="object"?n:{};return Ee(i,de(typeof n=="string"?{name:l?"":n}:o,s,{disabled:l}),a)};function bn(e,t){if(!ve)return;const a=t.modifiers||{},n=t.value,{handler:l,options:s}=typeof n=="object"?n:{handler:n,options:{}},i=new IntersectionObserver(function(){var C;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;const v=(C=e._observe)==null?void 0:C[t.instance.$.uid];if(!v)return;const h=o.some(c=>c.isIntersecting);l&&(!a.quiet||v.init)&&(!a.once||h||v.init)&&l(h,o,u),h&&a.once?dt(e,t):v.init=!0},s);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:i},i.observe(e)}function dt(e,t){var n;const a=(n=e._observe)==null?void 0:n[t.instance.$.uid];a&&(a.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const Cn={mounted:bn,unmounted:dt},Sn=Cn,_n=S({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...ct(),...T(),...yn()},"VImg"),kn=$()({name:"VImg",directives:{intersect:Sn},props:_n(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:a,slots:n}=t;const l=D(""),s=Q(),i=D(e.eager?"loading":"idle"),o=D(),u=D(),v=d(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),h=d(()=>v.value.aspect||o.value/u.value||0);M(()=>e.src,()=>{C(i.value!=="idle")}),M(h,(b,g)=>{!b&&g&&s.value&&w(s.value)}),Lt(()=>C());function C(b){if(!(e.eager&&b)&&!(ve&&!b&&!e.eager)){if(i.value="loading",v.value.lazySrc){const g=new Image;g.src=v.value.lazySrc,w(g,null)}v.value.src&&Me(()=>{var g,V;if(a("loadstart",((g=s.value)==null?void 0:g.currentSrc)||v.value.src),(V=s.value)!=null&&V.complete){if(s.value.naturalWidth||f(),i.value==="error")return;h.value||w(s.value,null),c()}else h.value||w(s.value),_()})}}function c(){var b;_(),i.value="loaded",a("load",((b=s.value)==null?void 0:b.currentSrc)||v.value.src)}function f(){var b;i.value="error",a("error",((b=s.value)==null?void 0:b.currentSrc)||v.value.src)}function _(){const b=s.value;b&&(l.value=b.currentSrc||b.src)}let y=-1;function w(b){let g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const V=()=>{clearTimeout(y);const{naturalHeight:O,naturalWidth:L}=b;O||L?(o.value=L,u.value=O):!b.complete&&i.value==="loading"&&g!=null?y=window.setTimeout(V,g):(b.currentSrc.endsWith(".svg")||b.currentSrc.startsWith("data:image/svg+xml"))&&(o.value=1,u.value=1)};V()}const x=d(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),m=()=>{var V;if(!v.value.src||i.value==="idle")return null;const b=r("img",{class:["v-img__img",x.value],src:v.value.src,srcset:v.value.srcset,alt:e.alt,sizes:e.sizes,ref:s,onLoad:c,onError:f},null),g=(V=n.sources)==null?void 0:V.call(n);return r(X,{transition:e.transition,appear:!0},{default:()=>[ie(g?r("picture",{class:"v-img__picture"},[g,b]):b,[[Et,i.value==="loaded"]])]})},p=()=>r(X,{transition:e.transition},{default:()=>[v.value.lazySrc&&i.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",x.value],src:v.value.lazySrc,alt:e.alt},null)]}),P=()=>n.placeholder?r(X,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!n.error)&&r("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,I=()=>n.error?r(X,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&r("div",{class:"v-img__error"},[n.error()])]}):null,R=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,N=D(!1);{const b=M(h,g=>{g&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{N.value=!0})}),b())})}return z(()=>{const[b]=Le.filterProps(e);return ie(r(Le,de({class:["v-img",{"v-img--booting":!N.value},e.class],style:[{width:k(e.width==="auto"?o.value:e.width)},e.style]},b,{aspectRatio:h.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>r(ze,null,[r(m,null,null),r(p,null,null),r(R,null,null),r(P,null,null),r(I,null,null)]),default:n.default}),[[Ge("intersect"),{handler:C,options:e.options},null,{once:!0}]])}),{currentSrc:l,image:s,state:i,naturalWidth:o,naturalHeight:u}}}),wn=S({start:Boolean,end:Boolean,icon:K,image:String,...T(),...fe(),...ee(),...ne(),...W(),...G(),...he({variant:"flat"})},"VAvatar"),Pn=$()({name:"VAvatar",props:wn(),setup(e,t){let{slots:a}=t;const{themeClasses:n}=H(e),{colorClasses:l,colorStyles:s,variantClasses:i}=Ue(e),{densityClasses:o}=me(e),{roundedClasses:u}=te(e),{sizeClasses:v,sizeStyles:h}=ae(e);return z(()=>r(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},n.value,l.value,o.value,u.value,v.value,i.value,e.class],style:[s.value,h.value,e.style]},{default:()=>{var C;return[e.image?r(kn,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?r(Y,{key:"icon",icon:e.icon},null):(C=a.default)==null?void 0:C.call(a),qe(!1,"v-avatar")]}})),{}}});const $n=At("v-spacer","div","VSpacer");export{Bn as A,Ve as B,gn as C,Y as D,J as E,In as F,pe as G,Vn as L,X as M,mn as R,Pn as V,se as a,He as b,At as c,Ze as d,Fe as e,en as f,et as g,an as h,ee as i,rn as j,W as k,he as l,fe as m,Ue as n,me as o,Qe as p,je as q,tn as r,tt as s,sn as t,We as u,te as v,ln as w,kn as x,qe as y,$n as z};
