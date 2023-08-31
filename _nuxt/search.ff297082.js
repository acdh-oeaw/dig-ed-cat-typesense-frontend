import{T as ve,H as me}from"./components.9bfbe96f.js";import{o as h,c as y,a as d,_ as he,H as le,f as q,r as x,D as U,B as E,t as $,h as s,F as I,j as z,g as se,I as ge,J as ae,d as C,k as M,w as S,i as A,b as w,K as _e,L as ye,M as Q,N as W,O as oe,s as re,l as be,x as we,v as xe,P as te}from"./entry.11600ff1.js";import{b as ke,g as $e}from"./use-data.1b76eb83.js";import{k as Se,r as je,_ as Oe}from"./mapping-objects.4052e57d.js";import{c as De}from"./centered.5e6ce8d3.js";import{_ as Ce}from"./nuxt-link.fc5ca4b6.js";import"./_commonjsHelpers.042e6b4d.js";function Ee(e,t){return h(),y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z","clip-rule":"evenodd"})])}function Pe(e,t){return h(),y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z","clip-rule":"evenodd"})])}function F(e,t){return h(),y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z","clip-rule":"evenodd"})])}const Te={},qe={class:"inline-block py-1 px-2 m-1 rounded-full bg-slate-100"};function Ne(e,t){return h(),y("div",qe,[le(e.$slots,"default")])}const Be=he(Te,[["render",Ne]]),Ie=(e,t)=>e.filter((a,l,n)=>l===n.findIndex(u=>u[t]===a[t])),Ae={class:"flex flex-col"},He={class:"flex items-center justify-between text-2xl"},Me={class:"flex items-center gap-2 rounded p-1 transition hover:bg-slate-200 active:bg-slate-300"},Le=["id","value"],Ue=["for"],Re=q({__name:"facet-field",props:{fieldName:{},facets:{},selected:{}},setup(e){const t=e;let a=x(t.selected),l=x(!0),n=x({field_name:t.fieldName,counts:[],stats:{}});const u=async(r=500,c="")=>{var v;l.value=!0;const i=await ke(t.fieldName,r);n.value=(v=i.facet_counts)!=null&&v.length?i.facet_counts[0]:[],l.value=!1};U(async()=>{await u(10)});const p=E(()=>{let r=Ie([...n.value.counts,...t.facets],"value");return r=r.sort(c=>t.selected&&t.selected.includes(c.value)?-1:1),r});return(r,c)=>{var i;return h(),y("div",Ae,[d("h1",He,$(s(Se)[r.fieldName]),1),(h(!0),y(I,null,z(p.value,v=>(h(),y("div",Me,[se(d("input",{type:"checkbox",class:"h-5 w-5 cursor-pointer ml-1",id:v.value,value:v.value,onChange:c[0]||(c[0]=f=>r.$emit("facetChange",s(a))),"onUpdate:modelValue":c[1]||(c[1]=f=>ae(a)?a.value=f:a=f)},null,40,Le),[[ge,s(a)]]),C("   "),d("label",{for:v.value,class:"flex w-full cursor-pointer items-center justify-between gap-1"},[C($(v.value)+" ",1),v.count?(h(),M(Be,{key:0},{default:S(()=>[C($(v.count),1)]),_:2},1024)):A("",!0)],8,Ue)]))),256)),((i=s(n).stats)==null?void 0:i.total_values)!=s(n).counts.length?(h(),y("div",{key:0,class:"flex cursor-pointer items-center justify-center gap-2 rounded p-1 transition hover:bg-slate-200 active:bg-slate-300",onClick:c[2]||(c[2]=v=>u())},[d("span",null," show all... ("+$(s(n).stats.total_values)+" total)",1),w(s(Ee),{class:"h-5 w-5"})])):A("",!0)])}}}),Fe={class:"text-right"},Ve=q({__name:"internal-link",props:{href:{}},setup(e){return(t,a)=>{const l=Ce;return h(),M(l,{href:t.href,class:"items-center grid grid-cols-[auto_auto_1fr] hover:bg-slate-200 active:bg-slate-300 p-2 rounded transition"},{default:S(()=>[d("span",null,[le(t.$slots,"default",{},()=>[C($(t.href),1)])]),C("   "),d("span",Fe,[w(s(Pe),{class:"h-5 w-5 inline-block"})])]),_:3},8,["href"])}}});function L(e,t,...a){if(e in t){let n=t[e];return typeof n=="function"?n(...a):n}let l=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(n=>`"${n}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,L),l}var K=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(K||{}),ze=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(ze||{});function J({visible:e=!0,features:t=0,ourProps:a,theirProps:l,...n}){var u;let p=ue(l,a),r=Object.assign(n,{props:p});if(e||t&2&&p.static)return V(r);if(t&1){let c=(u=p.unmount)==null||u?0:1;return L(c,{[0](){return null},[1](){return V({...n,props:{...p,hidden:!0,style:{display:"none"}}})}})}return V(r)}function V({props:e,attrs:t,slots:a,slot:l,name:n}){var u,p;let{as:r,...c}=Ke(e,["unmount","static"]),i=(u=a.default)==null?void 0:u.call(a,l),v={};if(l){let f=!1,o=[];for(let[g,_]of Object.entries(l))typeof _=="boolean"&&(f=!0),_===!0&&o.push(g);f&&(v["data-headlessui-state"]=o.join(" "))}if(r==="template"){if(i=ie(i??[]),Object.keys(c).length>0||Object.keys(t).length>0){let[f,...o]=i??[];if(!Qe(f)||o.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${n} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(c).concat(Object.keys(t)).map(m=>m.trim()).filter((m,k,O)=>O.indexOf(m)===k).sort((m,k)=>m.localeCompare(k)).map(m=>`  - ${m}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(m=>`  - ${m}`).join(`
`)].join(`
`));let g=ue((p=f.props)!=null?p:{},c),_=_e(f,g);for(let m in g)m.startsWith("on")&&(_.props||(_.props={}),_.props[m]=g[m]);return _}return Array.isArray(i)&&i.length===1?i[0]:i}return ye(r,Object.assign({},c,v),{default:()=>i})}function ie(e){return e.flatMap(t=>t.type===I?ie(t.children):[t])}function ue(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},a={};for(let l of e)for(let n in l)n.startsWith("on")&&typeof l[n]=="function"?(a[n]!=null||(a[n]=[]),a[n].push(l[n])):t[n]=l[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(a).map(l=>[l,void 0])));for(let l in a)Object.assign(t,{[l](n,...u){let p=a[l];for(let r of p){if(n instanceof Event&&n.defaultPrevented)return;r(n,...u)}}});return t}function Ke(e,t=[]){let a=Object.assign({},e);for(let l of t)l in a&&delete a[l];return a}function Qe(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let We=0;function Je(){return++We}function ce(){return Je()}var T=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(T||{});function j(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let de=Symbol("Context");var H=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(H||{});function Ye(){return Q(de,null)}function Xe(e){W(de,e)}function ne(e,t){if(e)return e;let a=t??"button";if(typeof a=="string"&&a.toLowerCase()==="button")return"button"}function Ge(e,t){let a=x(ne(e.value.type,e.value.as));return U(()=>{a.value=ne(e.value.type,e.value.as)}),oe(()=>{var l;a.value||j(t)&&j(t)instanceof HTMLButtonElement&&!((l=j(t))!=null&&l.hasAttribute("type"))&&(a.value="button")}),a}var Ze=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ze||{});let pe=Symbol("DisclosureContext");function Y(e){let t=Q(pe,null);if(t===null){let a=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,Y),a}return t}let fe=Symbol("DisclosurePanelContext");function et(){return Q(fe,null)}let tt=q({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:t,attrs:a}){let l=x(e.defaultOpen?0:1),n=x(null),u=x(null),p={buttonId:x(null),panelId:x(null),disclosureState:l,panel:n,button:u,toggleDisclosure(){l.value=L(l.value,{[0]:1,[1]:0})},closeDisclosure(){l.value!==1&&(l.value=1)},close(r){p.closeDisclosure();let c=(()=>r?r instanceof HTMLElement?r:r.value instanceof HTMLElement?j(r):j(p.button):j(p.button))();c==null||c.focus()}};return W(pe,p),Xe(E(()=>L(l.value,{[0]:H.Open,[1]:H.Closed}))),()=>{let{defaultOpen:r,...c}=e,i={open:l.value===0,close:p.close};return J({theirProps:c,ourProps:{},slot:i,slots:t,attrs:a,name:"Disclosure"})}}}),nt=q({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-disclosure-button-${ce()}`}},setup(e,{attrs:t,slots:a,expose:l}){let n=Y("DisclosureButton");U(()=>{n.buttonId.value=e.id}),re(()=>{n.buttonId.value=null});let u=et(),p=E(()=>u===null?!1:u.value===n.panelId.value),r=x(null);l({el:r,$el:r}),p.value||oe(()=>{n.button.value=r.value});let c=Ge(E(()=>({as:e.as,type:t.type})),r);function i(){var o;e.disabled||(p.value?(n.toggleDisclosure(),(o=j(n.button))==null||o.focus()):n.toggleDisclosure())}function v(o){var g;if(!e.disabled)if(p.value)switch(o.key){case T.Space:case T.Enter:o.preventDefault(),o.stopPropagation(),n.toggleDisclosure(),(g=j(n.button))==null||g.focus();break}else switch(o.key){case T.Space:case T.Enter:o.preventDefault(),o.stopPropagation(),n.toggleDisclosure();break}}function f(o){switch(o.key){case T.Space:o.preventDefault();break}}return()=>{let o={open:n.disclosureState.value===0},{id:g,..._}=e,m=p.value?{ref:r,type:c.value,onClick:i,onKeydown:v}:{id:g,ref:r,type:c.value,"aria-expanded":e.disabled?void 0:n.disclosureState.value===0,"aria-controls":j(n.panel)?n.panelId.value:void 0,disabled:e.disabled?!0:void 0,onClick:i,onKeydown:v,onKeyup:f};return J({ourProps:m,theirProps:_,slot:o,attrs:t,slots:a,name:"DisclosureButton"})}}}),lt=q({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-disclosure-panel-${ce()}`}},setup(e,{attrs:t,slots:a,expose:l}){let n=Y("DisclosurePanel");U(()=>{n.panelId.value=e.id}),re(()=>{n.panelId.value=null}),l({el:n.panel,$el:n.panel}),W(fe,n.panelId);let u=Ye(),p=E(()=>u!==null?(u.value&H.Open)===H.Open:n.disclosureState.value===0);return()=>{let r={open:n.disclosureState.value===0,close:n.close},{id:c,...i}=e,v={id:c,ref:n.panel};return J({ourProps:v,theirProps:i,slot:r,attrs:t,slots:a,features:K.RenderStrategy|K.Static,visible:p.value,name:"DisclosurePanel"})}}});const st={class:"mx-auto flex max-w-container items-center px-2"},at={class:"grid min-w-full gap-4 divide-y p-4 lg:grid-cols-[1fr_3fr_1fr] lg:gap-32 lg:divide-y-0 lg:px-16"},ot={key:1,class:"min-w-full"},rt={class:"my-2 flex items-center justify-between"},it=["disabled"],ut=d("span",{class:"sr-only"},"Previous Page",-1),ct=["disabled"],dt=d("span",{class:"sr-only"},"Next Page",-1),pt={key:0,class:"grid min-w-full grid-cols-[5fr_3fr_auto_auto] gap-x-8 gap-y-1"},ft=d("div",null,"Name",-1),vt=d("div",null,"Institution(s)",-1),mt=d("div",null,"url",-1),ht=d("div",{class:"text-right"},"time",-1),gt=d("div",{class:"col-span-4 border-t"},null,-1),_t={class:"-ml-2 self-center"},yt=["innerHTML"],bt={key:1},wt={class:"self-center"},xt={class:"flex items-center"},kt={class:"self-center text-right"},$t={key:0,class:"col-span-4 border-t italic text-gray-300 text-center"},Tt=q({__name:"search",setup(e){const t=be();let a=String(t.query.q||"");const l=x(null);let n=x(!0),u=x({"historical-period":[],language:[],"time-century":[],audience:[],"begin-date":[],"end-date":[],"institution-s.institution-name":[]});const p=(f,o=!1)=>{const g=[];Object.entries(f).forEach(([m,k])=>{k&&k.length!=0&&g.push(m+":=[`"+k.join("`,`")+"`]")});const _=g.join("&&");return o?encodeURIComponent(_).replace("=",""):_},r=(f,o=!1)=>{const _=(o?decodeURIComponent(f):f).split("&&"),m={...u.value};return _.forEach(k=>{var N;const O=k.split(":=");m[O[0]]=JSON.parse((N=String(O[1]))==null?void 0:N.replaceAll("`",'"'))}),m};t.query.facets&&(u.value=r(String(t.query.facets),!0));const c=async(f="",o=1,g=25,_="")=>{n.value=!0;const m=await $e({q:f,query_by:"edition-name",per_page:g,page:o,facet_by:Object.keys(u.value).join(","),filter_by:_});l.value=m,n.value=!1},i=E(()=>Number(t.query.page)||1),v=E(()=>Number(t.query.limit)||25);return we(t,f=>{const{query:o}=f;c(String(o.q||""),i.value||1,v.value||25,decodeURIComponent(String(o.facets||"")))},{immediate:!0}),(f,o)=>{var k,O,N,X,G,Z,ee;const g=ve,_=me,m=Re;return h(),y("div",null,[w(_,null,{default:S(()=>[w(g,null,{default:S(()=>[C("Browse Editions")]),_:1})]),_:1}),d("div",st,[se(d("input",{type:"search","onUpdate:modelValue":o[0]||(o[0]=b=>ae(a)?a.value=b:a=b),onInput:o[1]||(o[1]=b=>f.$router.replace({query:{...s(t).query,q:s(a),page:1}})),class:"mx-auto my-4 h-16 min-w-full rounded border p-4 shadow",placeholder:"Search..."},null,544),[[xe,s(a)]])]),d("div",null,[d("div",at,[w(s(tt),{as:"div",class:"flex flex-col pt-10",defaultOpen:""},{default:S(({open:b})=>[w(s(nt),{class:"flex items-center justify-end gap-2 rounded align-top text-xl transition hover:bg-slate-200 active:bg-slate-300 lg:justify-center"},{default:S(()=>[C($(b?"Hide":"Show")+" Filters... ",1),w(s(F),{class:"h-5 w-5 rotate-180 ui-open:rotate-0"})]),_:2},1024),w(s(lt),{as:"div",class:"flex flex-col gap-2 divide-y"},{default:S(()=>{var D,B;return[s(n)?A("",!0):(h(!0),y(I,{key:0},z((B=(D=s(l))==null?void 0:D.facet_counts)==null?void 0:B.sort((P,R)=>s(u)[R.field_name].length-s(u)[P.field_name].length),P=>(h(),M(m,{class:"pt-2","field-name":P.field_name,facets:P.counts,selected:s(u)[P.field_name],onFacetChange:R=>{s(u)[P.field_name]=R,f.$router.push({query:{...s(t).query,facets:p(s(u),!0),page:1}})}},null,8,["field-name","facets","selected","onFacetChange"]))),256))]}),_:1})]),_:1}),s(n)?(h(),M(De,{key:0,class:"-z-10"},{default:S(()=>[w(s(je),{class:"h-5 w-5 animate-spin"})]),_:1})):(h(),y("div",ot,[d("div",rt,[d("button",{class:te(["rounded border p-4 transition",s(i)<=1?"cursor-not-allowed text-gray-400":"cursor-pointer hover:bg-slate-200 active:bg-slate-300"]),disabled:s(i)<=1,onClick:o[2]||(o[2]=b=>f.$router.push({query:{...s(t).query,page:s(i)-1}}))},[ut,w(s(F),{class:"h-4 w-4 -rotate-90"})],10,it),d("span",null," showing "+$((s(i)-1)*s(v)+1)+" - "+$(Math.min(((k=s(l))==null?void 0:k.found)||1/0,s(i)*s(v)))+" out of "+$((O=s(l))==null?void 0:O.found),1),d("button",{class:te(["rounded border p-4 transition",s(i)*s(v)>=Number((N=s(l))==null?void 0:N.found)?"cursor-not-allowed text-gray-400":"cursor-pointer hover:bg-slate-200 active:bg-slate-300"]),disabled:s(i)*s(v)>=Number((X=s(l))==null?void 0:X.found),onClick:o[3]||(o[3]=b=>f.$router.push({query:{...s(t).query,page:s(i)+1}}))},[dt,w(s(F),{class:"h-4 w-4 rotate-90"})],10,ct)]),s(n)?A("",!0):(h(),y("div",pt,[ft,vt,mt,ht,(h(!0),y(I,null,z((G=s(l))==null?void 0:G.hits,b=>(h(),y(I,null,[gt,d("div",_t,[w(Ve,{href:"/editions/"+b.document.id},{default:S(()=>{var D,B;return[(D=b.highlight["edition-name"])!=null&&D.snippet?(h(),y("span",{key:0,innerHTML:(B=b.highlight["edition-name"])==null?void 0:B.snippet},null,8,yt)):(h(),y("span",bt,$(b.document["edition-name"]),1))]}),_:2},1032,["href"])]),d("div",wt,$(b.document["institution-s"].map(D=>D["institution-name"]).join(", ")),1),d("div",xt,[w(Oe,{href:b.document.url,"icon-only":""},null,8,["href"])]),d("div",kt,$(b.document["time-century"]),1)],64))),256)),Math.min(((Z=s(l))==null?void 0:Z.found)||1/0,s(i)*s(v))===((ee=s(l))==null?void 0:ee.found)?(h(),y("div",$t," You've reached the end. ")):A("",!0)]))]))])])])}}});export{Tt as default};
