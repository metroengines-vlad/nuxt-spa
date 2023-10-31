import{g,f as ve,b as n,h as C,I as k,m as me,i as ge,j as _,k as ye,r as he,l as p,n as S,q as R,_ as be,s as $,v as ke,w as u,o as _e,d as f,a as i}from"./entry.51d54a1d.js";import{c as A,m as D,V as w,a as V,b as Ce,d as pe,e as Ve,f as Se,g as Ae,h as Ie,i as xe,j as Pe,k as I,l as je,R as Le,u as Ne,n as $e,o as we,p as Be,q as Te,r as Ee,s as Re,t as De,v as Oe,w as Ge,x as Fe,L as Me,y as Ue,z as qe,A as ze}from"./VSpacer.e8565af3.js";import{m as y,u as x}from"./resizeObserver.57251e8d.js";const O=g()({name:"VCardActions",props:y(),setup(e,l){let{slots:t}=l;return ve({VBtn:{variant:"text"}}),x(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ke=A("v-card-subtitle"),G=A("v-card-title"),He=C({appendAvatar:String,appendIcon:k,prependAvatar:String,prependIcon:k,subtitle:String,title:String,...y(),...D()},"VCardItem"),Je=g()({name:"VCardItem",props:He(),setup(e,l){let{slots:t}=l;return x(()=>{var v;const a=!!(e.prependAvatar||e.prependIcon),s=!!(a||t.prepend),o=!!(e.appendAvatar||e.appendIcon),d=!!(o||t.append),r=!!(e.title||t.title),c=!!(e.subtitle||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[s&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(V,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(w,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[r&&n(G,{key:"title"},{default:()=>{var m;return[((m=t.title)==null?void 0:m.call(t))??e.title]}}),c&&n(Ke,{key:"subtitle"},{default:()=>{var m;return[((m=t.subtitle)==null?void 0:m.call(t))??e.subtitle]}}),(v=t.default)==null?void 0:v.call(t)]),d&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(V,{key:"append-defaults",disabled:!o,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):o&&n(w,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),F=A("v-card-text"),We=C({appendAvatar:String,appendIcon:k,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:k,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...Ce(),...y(),...D(),...pe(),...Ve(),...Se(),...Ae(),...Ie(),...xe(),...Pe(),...I(),...me(),...je({variant:"elevated"})},"VCard"),B=g()({name:"VCard",directives:{Ripple:Le},props:We(),setup(e,l){let{attrs:t,slots:a}=l;const{themeClasses:s}=ge(e),{borderClasses:o}=Ne(e),{colorClasses:d,colorStyles:r,variantClasses:c}=$e(e),{densityClasses:v}=we(e),{dimensionStyles:m}=Be(e),{elevationClasses:X}=Te(e),{loaderClasses:Z}=Ee(e),{locationStyles:ee}=Re(e),{positionClasses:te}=De(e),{roundedClasses:ae}=Oe(e),h=Ge(e,t),ne=_(()=>e.link!==!1&&h.isLink.value),b=_(()=>!e.disabled&&e.link!==!1&&(e.link||h.isClickable.value));return x(()=>{const se=ne.value?"a":e.tag,le=!!(a.title||e.title),ie=!!(a.subtitle||e.subtitle),oe=le||ie,re=!!(a.append||e.appendAvatar||e.appendIcon),de=!!(a.prepend||e.prependAvatar||e.prependIcon),ce=!!(a.image||e.image),ue=oe||de||re,fe=!!(a.text||e.text);return ye(n(se,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":b.value},s.value,o.value,d.value,v.value,X.value,Z.value,te.value,ae.value,c.value,e.class],style:[r.value,m.value,ee.value,e.style],href:h.href.value,onClick:b.value&&h.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var L;return[ce&&n("div",{key:"image",class:"v-card__image"},[a.image?n(V,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(Fe,{key:"image-img",cover:!0,src:e.image},null)]),n(Me,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),ue&&n(Je,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),fe&&n(F,{key:"text"},{default:()=>{var N;return[((N=a.text)==null?void 0:N.call(a))??e.text]}}),(L=a.default)==null?void 0:L.call(a),a.actions&&n(O,null,{default:a.actions}),Ue(b.value,"v-card")]}}),[[he("ripple"),b.value&&e.ripple]])}),{}}}),M=(()=>p.reduce((e,l)=>(e[l]={type:[Boolean,String,Number],default:!1},e),{}))(),U=(()=>p.reduce((e,l)=>{const t="offset"+S(l);return e[t]={type:[String,Number],default:null},e},{}))(),q=(()=>p.reduce((e,l)=>{const t="order"+S(l);return e[t]={type:[String,Number],default:null},e},{}))(),T={col:Object.keys(M),offset:Object.keys(U),order:Object.keys(q)};function Ye(e,l,t){let a=e;if(!(t==null||t===!1)){if(l){const s=l.replace(e,"");a+=`-${s}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const Qe=["auto","start","end","center","baseline","stretch"],Xe=C({cols:{type:[Boolean,String,Number],default:!1},...M,offset:{type:[String,Number],default:null},...U,order:{type:[String,Number],default:null},...q,alignSelf:{type:String,default:null,validator:e=>Qe.includes(e)},...y(),...I()},"VCol"),Ze=g()({name:"VCol",props:Xe(),setup(e,l){let{slots:t}=l;const a=_(()=>{const s=[];let o;for(o in T)T[o].forEach(r=>{const c=e[r],v=Ye(o,r,c);v&&s.push(v)});const d=s.some(r=>r.startsWith("v-col-"));return s.push({"v-col":!d||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),s});return()=>{var s;return R(e.tag,{class:[a.value,e.class],style:e.style},(s=t.default)==null?void 0:s.call(t))}}}),P=["start","end","center"],z=["space-between","space-around","space-evenly"];function j(e,l){return p.reduce((t,a)=>{const s=e+S(a);return t[s]=l(),t},{})}const et=[...P,"baseline","stretch"],K=e=>et.includes(e),H=j("align",()=>({type:String,default:null,validator:K})),tt=[...P,...z],J=e=>tt.includes(e),W=j("justify",()=>({type:String,default:null,validator:J})),at=[...P,...z,"stretch"],Y=e=>at.includes(e),Q=j("alignContent",()=>({type:String,default:null,validator:Y})),E={align:Object.keys(H),justify:Object.keys(W),alignContent:Object.keys(Q)},nt={align:"align",justify:"justify",alignContent:"align-content"};function st(e,l,t){let a=nt[e];if(t!=null){if(l){const s=l.replace(e,"");a+=`-${s}`}return a+=`-${t}`,a.toLowerCase()}}const lt=C({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:K},...H,justify:{type:String,default:null,validator:J},...W,alignContent:{type:String,default:null,validator:Y},...Q,...y(),...I()},"VRow"),it=g()({name:"VRow",props:lt(),setup(e,l){let{slots:t}=l;const a=_(()=>{const s=[];let o;for(o in E)E[o].forEach(d=>{const r=e[d],c=st(o,d,r);c&&s.push(c)});return s.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),s});return()=>{var s;return R(e.tag,{class:["v-row",a.value,e.class],style:e.style},(s=t.default)==null?void 0:s.call(t))}}}),ot={name:"IndexPage"},rt=i("p",null,"Vuetify: create amazing applications.",-1),dt=i("p",null,[f(" For more information on Vuetify, check out the "),i("a",{href:"https://vuetifyjs.com",target:"_blank",rel:"noopener noreferrer"}," documentation "),f(". ")],-1),ct=i("p",null,[f(" If you have questions, please join the official "),i("a",{href:"https://chat.vuetifyjs.com/",target:"_blank",rel:"noopener noreferrer",title:"chat"}," discord "),f(". ")],-1),ut=i("p",null,[f(" Find a bug? Report it on the github "),i("a",{href:"https://github.com/vuetifyjs/vuetify/issues",target:"_blank",rel:"noopener noreferrer",title:"contribute"}," issue board "),f(". ")],-1),ft=i("p",null,"Thank you for developing with Vuetify",-1),vt=i("div",{class:"text-xs-right"},[i("em",null,[i("small",null,"— John Leider")])],-1),mt=i("hr",{class:"my-3"},null,-1),gt=i("a",{href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"}," Nuxt Documentation ",-1),yt=i("br",null,null,-1),ht=i("a",{href:"https://github.com/nuxt/nuxt.js",target:"_blank",rel:"noopener noreferrer"}," Nuxt GitHub ",-1);function bt(e,l,t,a,s,o){const d=$("NuxtLogo"),r=$("VuetifyLogo");return _e(),ke(it,{justify:"center",align:"center"},{default:u(()=>[n(Ze,{cols:"12",sm:"8",md:"6"},{default:u(()=>[n(B,{class:"logo py-4 d-flex justify-center"},{default:u(()=>[n(d),n(r)]),_:1}),n(B,null,{default:u(()=>[n(G,{class:"headline"},{default:u(()=>[f(" Welcome to the Vuetify + Nuxt.js template ")]),_:1}),n(F,null,{default:u(()=>[rt,dt,ct,ut,ft,vt,mt,gt,yt,ht]),_:1}),n(O,null,{default:u(()=>[n(qe),n(ze,{color:"primary",nuxt:"",to:"/inspire"},{default:u(()=>[f(" Continue ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const pt=be(ot,[["render",bt]]);export{pt as default};
