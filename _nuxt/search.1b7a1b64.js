import{T as ye,H as _e}from"./components.97a3d6da.js";import{o as g,c as _,a as d,_ as be,H as oe,f as P,r as x,D as R,B as E,t as $,i as s,F as I,j as K,g as re,I as we,J as ie,d as q,k as A,w as O,h as H,b as w,K as xe,L as ke,M as W,N as J,O as ue,s as ce,l as $e,x as Se,v as je,P as V}from"./entry.2ff9aa50.js";import{b as Oe,g as Ce}from"./use-data.1b76eb83.js";import{k as De,r as qe,_ as Ee}from"./mapping-objects.028c426a.js";import{_ as de}from"./nuxt-link.52fdb35d.js";import{c as Ne}from"./centered.260cceff.js";import"./_commonjsHelpers.042e6b4d.js";function Pe(e,t){return g(),_("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z","clip-rule":"evenodd"})])}function Te(e,t){return g(),_("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z","clip-rule":"evenodd"})])}function L(e,t){return g(),_("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z","clip-rule":"evenodd"})])}const Be={},Ie={class:"inline-block py-1 px-2 m-1 rounded-full bg-slate-100"};function Ae(e,t){return g(),_("div",Ie,[oe(e.$slots,"default")])}const He=be(Be,[["render",Ae]]),Me=(e,t)=>e.filter((a,l,n)=>l===n.findIndex(i=>i[t]===a[t])),Le={class:"flex flex-col"},Ue={class:"flex items-center justify-between text-2xl"},Re={class:"flex items-center gap-2 rounded p-1 transition hover:bg-slate-200 active:bg-slate-300"},Fe=["id","value"],Ve=["for"],ze=P({__name:"facet-field",props:{fieldName:{},facets:{},selected:{}},setup(e){const t=e;let a=x(t.selected),l=x(!0),n=x({field_name:t.fieldName,counts:[],stats:{}});const i=async(r=500,p="")=>{var u;l.value=!0;const v=await Oe(t.fieldName,r);n.value=(u=v.facet_counts)!=null&&u.length?v.facet_counts[0]:{},l.value=!1};R(async()=>{await i(10)});const f=E(()=>{let r=Me([...n.value.counts,...t.facets],"value");return r=r.sort(p=>t.selected&&t.selected.includes(p.value)?-1:1),r});return(r,p)=>{var v;return g(),_("div",Le,[d("h1",Ue,$(s(De)[r.fieldName]),1),(g(!0),_(I,null,K(f.value,u=>(g(),_("div",Re,[re(d("input",{type:"checkbox",class:"h-5 w-5 cursor-pointer ml-1",id:u.value,value:u.value,onChange:p[0]||(p[0]=h=>r.$emit("facetChange",s(a))),"onUpdate:modelValue":p[1]||(p[1]=h=>ie(a)?a.value=h:a=h)},null,40,Fe),[[we,s(a)]]),q("   "),d("label",{for:u.value,class:"flex w-full cursor-pointer items-center justify-between gap-1"},[q($(u.value)+" ",1),u.count?(g(),A(He,{key:0},{default:O(()=>[q($(u.count),1)]),_:2},1024)):H("",!0)],8,Ve)]))),256)),((v=s(n).stats)==null?void 0:v.total_values)!=s(n).counts.length?(g(),_("div",{key:0,class:"flex cursor-pointer items-center justify-center gap-2 rounded p-1 transition hover:bg-slate-200 active:bg-slate-300",onClick:p[2]||(p[2]=u=>i())},[d("span",null,"show all... ("+$(s(n).stats.total_values)+" total)",1),w(s(Pe),{class:"h-5 w-5"})])):H("",!0)])}}}),Ke={class:"text-right"},Qe=P({__name:"internal-link",props:{href:{}},setup(e){return(t,a)=>{const l=de;return g(),A(l,{href:t.href,class:"items-center grid grid-cols-[auto_auto_1fr] hover:bg-slate-200 active:bg-slate-300 p-2 rounded transition"},{default:O(()=>[d("span",null,[oe(t.$slots,"default",{},()=>[q($(t.href),1)])]),q("   "),d("span",Ke,[w(s(Te),{class:"h-5 w-5 inline-block"})])]),_:3},8,["href"])}}});function U(e,t,...a){if(e in t){let n=t[e];return typeof n=="function"?n(...a):n}let l=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(n=>`"${n}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,U),l}var Q=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Q||{}),We=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(We||{});function Y({visible:e=!0,features:t=0,ourProps:a,theirProps:l,...n}){var i;let f=fe(l,a),r=Object.assign(n,{props:f});if(e||t&2&&f.static)return z(r);if(t&1){let p=(i=f.unmount)==null||i?0:1;return U(p,{[0](){return null},[1](){return z({...n,props:{...f,hidden:!0,style:{display:"none"}}})}})}return z(r)}function z({props:e,attrs:t,slots:a,slot:l,name:n}){var i,f;let{as:r,...p}=Je(e,["unmount","static"]),v=(i=a.default)==null?void 0:i.call(a,l),u={};if(l){let h=!1,o=[];for(let[c,b]of Object.entries(l))typeof b=="boolean"&&(h=!0),b===!0&&o.push(c);h&&(u["data-headlessui-state"]=o.join(" "))}if(r==="template"){if(v=pe(v??[]),Object.keys(p).length>0||Object.keys(t).length>0){let[h,...o]=v??[];if(!Ye(h)||o.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${n} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(p).concat(Object.keys(t)).map(m=>m.trim()).filter((m,k,S)=>S.indexOf(m)===k).sort((m,k)=>m.localeCompare(k)).map(m=>`  - ${m}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(m=>`  - ${m}`).join(`
`)].join(`
`));let c=fe((f=h.props)!=null?f:{},p),b=xe(h,c);for(let m in c)m.startsWith("on")&&(b.props||(b.props={}),b.props[m]=c[m]);return b}return Array.isArray(v)&&v.length===1?v[0]:v}return ke(r,Object.assign({},p,u),{default:()=>v})}function pe(e){return e.flatMap(t=>t.type===I?pe(t.children):[t])}function fe(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},a={};for(let l of e)for(let n in l)n.startsWith("on")&&typeof l[n]=="function"?(a[n]!=null||(a[n]=[]),a[n].push(l[n])):t[n]=l[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(a).map(l=>[l,void 0])));for(let l in a)Object.assign(t,{[l](n,...i){let f=a[l];for(let r of f){if(n instanceof Event&&n.defaultPrevented)return;r(n,...i)}}});return t}function Je(e,t=[]){let a=Object.assign({},e);for(let l of t)l in a&&delete a[l];return a}function Ye(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let Xe=0;function Ge(){return++Xe}function ve(){return Ge()}var N=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(N||{});function D(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let me=Symbol("Context");var M=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(M||{});function Ze(){return W(me,null)}function et(e){J(me,e)}function ae(e,t){if(e)return e;let a=t??"button";if(typeof a=="string"&&a.toLowerCase()==="button")return"button"}function tt(e,t){let a=x(ae(e.value.type,e.value.as));return R(()=>{a.value=ae(e.value.type,e.value.as)}),ue(()=>{var l;a.value||D(t)&&D(t)instanceof HTMLButtonElement&&!((l=D(t))!=null&&l.hasAttribute("type"))&&(a.value="button")}),a}var nt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(nt||{});let ge=Symbol("DisclosureContext");function X(e){let t=W(ge,null);if(t===null){let a=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,X),a}return t}let he=Symbol("DisclosurePanelContext");function st(){return W(he,null)}let lt=P({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:t,attrs:a}){let l=x(e.defaultOpen?0:1),n=x(null),i=x(null),f={buttonId:x(null),panelId:x(null),disclosureState:l,panel:n,button:i,toggleDisclosure(){l.value=U(l.value,{[0]:1,[1]:0})},closeDisclosure(){l.value!==1&&(l.value=1)},close(r){f.closeDisclosure();let p=(()=>r?r instanceof HTMLElement?r:r.value instanceof HTMLElement?D(r):D(f.button):D(f.button))();p==null||p.focus()}};return J(ge,f),et(E(()=>U(l.value,{[0]:M.Open,[1]:M.Closed}))),()=>{let{defaultOpen:r,...p}=e,v={open:l.value===0,close:f.close};return Y({theirProps:p,ourProps:{},slot:v,slots:t,attrs:a,name:"Disclosure"})}}}),at=P({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-disclosure-button-${ve()}`}},setup(e,{attrs:t,slots:a,expose:l}){let n=X("DisclosureButton");R(()=>{n.buttonId.value=e.id}),ce(()=>{n.buttonId.value=null});let i=st(),f=E(()=>i===null?!1:i.value===n.panelId.value),r=x(null);l({el:r,$el:r}),f.value||ue(()=>{n.button.value=r.value});let p=tt(E(()=>({as:e.as,type:t.type})),r);function v(){var o;e.disabled||(f.value?(n.toggleDisclosure(),(o=D(n.button))==null||o.focus()):n.toggleDisclosure())}function u(o){var c;if(!e.disabled)if(f.value)switch(o.key){case N.Space:case N.Enter:o.preventDefault(),o.stopPropagation(),n.toggleDisclosure(),(c=D(n.button))==null||c.focus();break}else switch(o.key){case N.Space:case N.Enter:o.preventDefault(),o.stopPropagation(),n.toggleDisclosure();break}}function h(o){switch(o.key){case N.Space:o.preventDefault();break}}return()=>{let o={open:n.disclosureState.value===0},{id:c,...b}=e,m=f.value?{ref:r,type:p.value,onClick:v,onKeydown:u}:{id:c,ref:r,type:p.value,"aria-expanded":e.disabled?void 0:n.disclosureState.value===0,"aria-controls":D(n.panel)?n.panelId.value:void 0,disabled:e.disabled?!0:void 0,onClick:v,onKeydown:u,onKeyup:h};return Y({ourProps:m,theirProps:b,slot:o,attrs:t,slots:a,name:"DisclosureButton"})}}}),ot=P({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-disclosure-panel-${ve()}`}},setup(e,{attrs:t,slots:a,expose:l}){let n=X("DisclosurePanel");R(()=>{n.panelId.value=e.id}),ce(()=>{n.panelId.value=null}),l({el:n.panel,$el:n.panel}),J(he,n.panelId);let i=Ze(),f=E(()=>i!==null?(i.value&M.Open)===M.Open:n.disclosureState.value===0);return()=>{let r={open:n.disclosureState.value===0,close:n.close},{id:p,...v}=e,u={id:p,ref:n.panel};return Y({ourProps:u,theirProps:v,slot:r,attrs:t,slots:a,features:Q.RenderStrategy|Q.Static,visible:f.value,name:"DisclosurePanel"})}}});const rt={class:"mx-auto flex max-w-container items-center px-2"},it={class:"grid min-w-full gap-4 divide-y p-4 lg:grid-cols-[1fr_3fr_1fr] lg:gap-32 lg:divide-y-0 lg:px-16"},ut={key:1,class:"text-gray-400 italic"},ct={key:1,class:"min-w-full"},dt={class:"my-2 flex items-center justify-between"},pt=["disabled"],ft=d("span",{class:"sr-only"},"Previous Page",-1),vt=["disabled"],mt=d("span",{class:"sr-only"},"Next Page",-1),gt={key:0,class:"grid min-w-full grid-cols-[5fr_3fr_auto_auto] gap-x-8 gap-y-1"},ht=d("span",{class:"sr-only"},"Click to sort by Name",-1),yt=d("div",null,"Institution(s)",-1),_t=d("div",null,"url",-1),bt=d("div",{class:"text-right"},"Time",-1),wt=d("div",{class:"col-span-4 border-t"},null,-1),xt={class:"-ml-2 self-center"},kt=["innerHTML"],$t={key:1},St={class:"self-center"},jt={class:"flex items-center"},Ot={class:"self-center text-right"},Ct={key:0,class:"col-span-4 border-t italic text-gray-300 text-center"},It=P({__name:"search",setup(e){const t=$e();let a=String(t.query.q||"");const l=x(null);let n=x(!0),i=x({"historical-period":[],language:[],"time-century":[],audience:[],"begin-date":[],"end-date":[],"institution-s.institution-name":[]});const f=(o,c=!1)=>{const b=[];Object.entries(o).forEach(([k,S])=>{S&&S.length!=0&&b.push(k+":=[`"+S.join("`,`")+"`]")});const m=b.join("&&");return c?encodeURIComponent(m).replace("=",""):m},r=(o,c=!1)=>{const m=(c?decodeURIComponent(o):o).split("&&"),k={...i.value};return m.forEach(S=>{var B;const T=S.split(":=");k[T[0]]=JSON.parse((B=String(T[1]))==null?void 0:B.replaceAll("`",'"'))}),k},p=o=>{switch(t.query.sort_by){case`${o}:asc`:return`${o}:desc`;case`${o}:desc`:return"";default:return`${o}:asc`}};t.query.facets&&(i.value=r(String(t.query.facets),!0));const v=async(o="",c=1,b=25,m="",k="")=>{n.value=!0;const S=await Ce({q:o,query_by:"edition-name",per_page:b,page:c,facet_by:Object.keys(i.value).join(","),filter_by:m,sort_by:k});l.value=S,n.value=!1},u=E(()=>Number(t.query.page)||1),h=E(()=>Number(t.query.limit)||25);return Se(t,o=>{const c=o.query;v(String(c.q||""),u.value||1,h.value||25,decodeURIComponent(String(c.facets||"")),String(c.sort_by||""))},{immediate:!0}),(o,c)=>{var T,B,G,Z,ee,te,ne,se,le;const b=ye,m=_e,k=ze,S=de;return g(),_("div",null,[w(m,null,{default:O(()=>[w(b,null,{default:O(()=>[q("Browse Editions")]),_:1})]),_:1}),d("div",rt,[re(d("input",{type:"search","onUpdate:modelValue":c[0]||(c[0]=y=>ie(a)?a.value=y:a=y),onInput:c[1]||(c[1]=y=>o.$router.replace({query:{...s(t).query,q:s(a),page:1}})),class:"mx-auto my-4 h-16 min-w-full rounded border p-4 shadow",placeholder:"Search..."},null,544),[[je,s(a)]])]),d("div",null,[d("div",it,[w(s(lt),{as:"div",class:"flex flex-col pt-10",defaultOpen:""},{default:O(({open:y})=>[w(s(at),{class:"flex items-center justify-end gap-2 rounded align-top text-xl transition hover:bg-slate-200 active:bg-slate-300 lg:justify-center"},{default:O(()=>[q($(y?"Hide":"Show")+" Filters... ",1),w(s(L),{class:"h-5 w-5 rotate-180 ui-open:rotate-0"})]),_:2},1024),w(s(ot),{as:"div",class:"flex flex-col gap-2 divide-y"},{default:O(()=>{var j;return[s(n)?H("",!0):(g(!0),_(I,{key:0},K(((j=s(l))==null?void 0:j.facet_counts).sort((C,F)=>s(i)[F.field_name].length-s(i)[C.field_name].length),C=>(g(),A(k,{class:"pt-2","field-name":C.field_name,facets:C.counts,selected:s(i)[C.field_name],onFacetChange:F=>{s(i)[C.field_name]=F,o.$router.push({query:{...s(t).query,facets:f(s(i),!0),page:1}})}},null,8,["field-name","facets","selected","onFacetChange"]))),256))]}),_:1})]),_:1}),s(n)||!((T=s(l))!=null&&T.found)?(g(),A(Ne,{key:0,class:"-z-10"},{default:O(()=>[s(n)?(g(),A(s(qe),{key:0,class:"h-5 w-5 animate-spin"})):(g(),_("span",ut,"Nothing found."))]),_:1})):(g(),_("div",ct,[d("div",dt,[d("button",{class:V(["rounded border p-4 transition",s(u)<=1?"cursor-not-allowed text-gray-400":"cursor-pointer hover:bg-slate-200 active:bg-slate-300"]),disabled:s(u)<=1,onClick:c[2]||(c[2]=y=>o.$router.push({query:{...s(t).query,page:s(u)-1}}))},[ft,w(s(L),{class:"h-4 w-4 -rotate-90"})],10,pt),d("span",null," showing "+$((s(u)-1)*s(h)+1)+" - "+$(Math.min(((B=s(l))==null?void 0:B.found)||1/0,s(u)*s(h)))+" out of "+$((G=s(l))==null?void 0:G.found),1),d("button",{class:V(["rounded border p-4 transition",s(u)*s(h)>=Number((Z=s(l))==null?void 0:Z.found)?"cursor-not-allowed text-gray-400":"cursor-pointer hover:bg-slate-200 active:bg-slate-300"]),disabled:s(u)*s(h)>=Number((ee=s(l))==null?void 0:ee.found),onClick:c[3]||(c[3]=y=>o.$router.push({query:{...s(t).query,page:s(u)+1}}))},[mt,w(s(L),{class:"h-4 w-4 rotate-90"})],10,vt)]),!s(n)&&((te=s(l))!=null&&te.found)?(g(),_("div",gt,[d("div",null,[w(S,{class:"flex items-center gap-2 hover:bg-slate-200 p-1 -m-1 rounded transition active:bg-slate-300",to:{query:{...s(t).query,page:1,sort_by:p("edition-name")}}},{default:O(()=>{var y,j;return[q(" Name "),w(s(L),{class:V([{"opacity-20":!((y=s(t).query.sort_by)!=null&&y.includes("edition-name")),"rotate-180":!((j=s(t).query.sort_by)!=null&&j.includes("desc"))},"w-5 h-5"])},null,8,["class"]),ht]}),_:1},8,["to"])]),yt,_t,bt,(g(!0),_(I,null,K((ne=s(l))==null?void 0:ne.hits,y=>(g(),_(I,null,[wt,d("div",xt,[w(Qe,{href:"/editions/"+y.document.id},{default:O(()=>{var j,C;return[(j=y.highlight["edition-name"])!=null&&j.snippet?(g(),_("span",{key:0,innerHTML:(C=y.highlight["edition-name"])==null?void 0:C.snippet},null,8,kt)):(g(),_("span",$t,$(y.document["edition-name"]),1))]}),_:2},1032,["href"])]),d("div",St,$(y.document["institution-s"].map(j=>j["institution-name"]).join(", ")),1),d("div",jt,[w(Ee,{href:y.document.url,"icon-only":""},null,8,["href"])]),d("div",Ot,$(y.document["time-century"]),1)],64))),256)),Math.min(((se=s(l))==null?void 0:se.found)||1/0,s(u)*s(h))===((le=s(l))==null?void 0:le.found)?(g(),_("div",Ct," You've reached the end. ")):H("",!0)])):H("",!0)]))])])])}}});export{It as default};
