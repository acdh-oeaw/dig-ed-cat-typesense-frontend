import{T as ce,H as de}from"./components.a7309788.js";import{_ as pe}from"./nuxt-link.1596e737.js";import{o as c,c as m,a as i,_ as fe,k as me,f as I,q as te,r as b,H,E as D,t as y,h as e,F as M,m as L,i as se,J as _e,M as le,d as q,n as $,w as x,j,b as g,N as ae,z as ne,O as ve,P as oe,Q as he,A as ge,v as ye,s as F}from"./entry.814c54fd.js";import{c as be}from"./centered.ae15dcb0.js";import{_ as Y}from"./external-link.vue.03136abf.js";import{_ as we}from"./internal-link.vue.05fea875.js";import{k as xe,p as ke,a as $e,e as Se,r as qe,_ as De}from"./types.cd256e9d.js";import{c as Ce,g as Ne}from"./use-data.5c59bd20.js";import{u as G,o as B,c as je,l as E,H as U,t as re,b as Be,p as Ie,N as Z,a as T}from"./use-resolve-button-type.2ebbc8b0.js";import"./_commonjsHelpers.042e6b4d.js";function Oe(a,s){return c(),m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[i("path",{"fill-rule":"evenodd",d:"M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z","clip-rule":"evenodd"})])}function Ve(a,s){return c(),m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[i("path",{"fill-rule":"evenodd",d:"M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z","clip-rule":"evenodd"})])}function P(a,s){return c(),m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[i("path",{"fill-rule":"evenodd",d:"M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z","clip-rule":"evenodd"})])}function Te(a,s){return c(),m("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"})])}const Pe={},Me={class:"inline-block py-1 px-2 m-1 rounded-full bg-slate-100"};function Ee(a,s){return c(),m("div",Me,[me(a.$slots,"default")])}const Fe=fe(Pe,[["render",Ee]]),He=(a,s)=>a.filter((_,t,l)=>t===l.findIndex(d=>d[s]===_[s])),Le=a=>a.charAt(0).toUpperCase()+a.slice(1),Ue={class:"flex flex-col"},ze={class:"flex items-center justify-between text-2xl"},Ae={class:"flex items-center gap-2 rounded p-1 transition hover:bg-slate-200 active:bg-slate-300"},Re=["id","value"],Ke=["for"],Qe={key:0},Je={key:1},We=I({__name:"facet-field",props:{fieldName:{},facets:{},selected:{}},setup(a){const s=a,_=te();let t=b(s.selected),l=b(!0),d=b({field_name:s.fieldName,counts:[],stats:{}});const f=async(o=500,r="")=>{var u;l.value=!0;const h=await Ce(s.fieldName,o,_.query);d.value=(u=h.facet_counts)!=null&&u.length?h.facet_counts[0]:{},l.value=!1};H(async()=>{await f(10)});const p=D(()=>{let o=He([...d.value.counts,...s.facets],"value");return o=o.sort(r=>s.selected&&s.selected.includes(r.value)?-1:1),o});return(o,r)=>{var h;return c(),m("div",Ue,[i("h1",ze,y(e(xe)[o.fieldName]),1),(c(!0),m(M,null,L(p.value,u=>(c(),m("div",Ae,[se(i("input",{type:"checkbox",class:"h-5 w-5 cursor-pointer ml-1",id:`${o.fieldName}:${u.value}`,value:u.value,onChange:r[0]||(r[0]=n=>o.$emit("facetChange",e(t))),"onUpdate:modelValue":r[1]||(r[1]=n=>le(t)?t.value=n:t=n)},null,40,Re),[[_e,e(t)]]),q("   "),i("label",{for:`${o.fieldName}:${u.value}`,class:"flex w-full cursor-pointer items-center justify-between gap-1"},[e(ke).includes(u.value)?(c(),m("span",Qe,y(e(Le)(e($e)[u.value])),1)):(c(),m("span",Je,y(u.value),1)),u.count?(c(),$(Fe,{key:2},{default:x(()=>[q(y(u.count),1)]),_:2},1024)):j("",!0)],8,Ke)]))),256)),((h=e(d).stats)==null?void 0:h.total_values)!=e(d).counts.length?(c(),m("div",{key:0,class:"flex cursor-pointer items-center justify-center gap-2 rounded p-1 transition hover:bg-slate-200 active:bg-slate-300",onClick:r[2]||(r[2]=u=>f())},[i("span",null,"show all... ("+y(e(d).stats.total_values)+" total)",1),g(e(Oe),{class:"h-5 w-5"})])):j("",!0)])}}});var Xe=(a=>(a[a.Open=0]="Open",a[a.Closed=1]="Closed",a))(Xe||{});let ie=Symbol("DisclosureContext");function z(a){let s=oe(ie,null);if(s===null){let _=new Error(`<${a} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(_,z),_}return s}let ue=Symbol("DisclosurePanelContext");function Ye(){return oe(ue,null)}let Ge=I({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(a,{slots:s,attrs:_}){let t=b(a.defaultOpen?0:1),l=b(null),d=b(null),f={buttonId:b(null),panelId:b(null),disclosureState:t,panel:l,button:d,toggleDisclosure(){t.value=G(t.value,{[0]:1,[1]:0})},closeDisclosure(){t.value!==1&&(t.value=1)},close(p){f.closeDisclosure();let o=(()=>p?p instanceof HTMLElement?p:p.value instanceof HTMLElement?B(p):B(f.button):B(f.button))();o==null||o.focus()}};return ae(ie,f),je(D(()=>G(t.value,{[0]:E.Open,[1]:E.Closed}))),()=>{let{defaultOpen:p,...o}=a,r={open:t.value===0,close:f.close};return U({theirProps:o,ourProps:{},slot:r,slots:s,attrs:_,name:"Disclosure"})}}}),Ze=I({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-disclosure-button-${re()}`}},setup(a,{attrs:s,slots:_,expose:t}){let l=z("DisclosureButton");H(()=>{l.buttonId.value=a.id}),ne(()=>{l.buttonId.value=null});let d=Ye(),f=D(()=>d===null?!1:d.value===l.panelId.value),p=b(null);t({el:p,$el:p}),f.value||ve(()=>{l.button.value=p.value});let o=Be(D(()=>({as:a.as,type:s.type})),p);function r(){var n;a.disabled||(f.value?(l.toggleDisclosure(),(n=B(l.button))==null||n.focus()):l.toggleDisclosure())}function h(n){var w;if(!a.disabled)if(f.value)switch(n.key){case T.Space:case T.Enter:n.preventDefault(),n.stopPropagation(),l.toggleDisclosure(),(w=B(l.button))==null||w.focus();break}else switch(n.key){case T.Space:case T.Enter:n.preventDefault(),n.stopPropagation(),l.toggleDisclosure();break}}function u(n){switch(n.key){case T.Space:n.preventDefault();break}}return()=>{let n={open:l.disclosureState.value===0},{id:w,...S}=a,k=f.value?{ref:p,type:o.value,onClick:r,onKeydown:h}:{id:w,ref:p,type:o.value,"aria-expanded":a.disabled?void 0:l.disclosureState.value===0,"aria-controls":B(l.panel)?l.panelId.value:void 0,disabled:a.disabled?!0:void 0,onClick:r,onKeydown:h,onKeyup:u};return U({ourProps:k,theirProps:S,slot:n,attrs:s,slots:_,name:"DisclosureButton"})}}}),et=I({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-disclosure-panel-${re()}`}},setup(a,{attrs:s,slots:_,expose:t}){let l=z("DisclosurePanel");H(()=>{l.panelId.value=a.id}),ne(()=>{l.panelId.value=null}),t({el:l.panel,$el:l.panel}),ae(ue,l.panelId);let d=Ie(),f=D(()=>d!==null?(d.value&E.Open)===E.Open:l.disclosureState.value===0);return()=>{let p={open:l.disclosureState.value===0,close:l.close},{id:o,...r}=a,h={id:o,ref:l.panel};return U({ourProps:h,theirProps:r,slot:p,attrs:s,slots:_,features:Z.RenderStrategy|Z.Static,visible:f.value,name:"DisclosurePanel"})}}});const ee=I({__name:"facet-disclosure",props:{loading:{type:Boolean},results:{},facetValues:{}},setup(a){const s=he(),_=(t,l=!1)=>{const d=[];Object.entries(t).forEach(([p,o])=>{o&&o.length!=0&&d.push(p+":=[`"+o.join("`,`")+"`]")});const f=d.join("&&");return l?encodeURIComponent(f).replace("=",""):f};return(t,l)=>{const d=We;return c(),$(e(Ge),{as:"div",class:"flex flex-col md:pt-10","default-open":""},{default:x(({open:f})=>[g(e(Ze),{class:"flex items-center justify-end gap-2 rounded align-top text-xl transition hover:bg-slate-200 active:bg-slate-300 lg:justify-center"},{default:x(()=>[q(y(f?"Hide":"Show")+" Filters... ",1),g(e(Te),{class:"h-5 w-5 rotate-180 ui-open:rotate-0"})]),_:2},1024),g(e(et),{as:"div",class:"flex flex-col gap-2 divide-y"},{default:x(()=>{var p;return[t.loading?j("",!0):(c(!0),m(M,{key:0},L(((p=t.results)==null?void 0:p.facet_counts).sort((o,r)=>t.facetValues[r.field_name].length-t.facetValues[o.field_name].length),o=>(c(),$(d,{class:"pt-2","field-name":o.field_name,facets:o.counts,selected:t.facetValues[o.field_name],onFacetChange:r=>{t.facetValues[o.field_name]=r,t.$router.push({query:{...e(s).query,facets:_(t.facetValues,!0),page:1}})}},null,8,["field-name","facets","selected","onFacetChange"]))),256))]}),_:1})]),_:1})}}}),tt={class:"mx-auto flex max-w-container items-center p-2 md:p-0"},st={class:"grid min-w-full h-full gap-4 divide-y md:divide-y-0 p-4 grid-rows-[auto_1fr] md:grid-rows-1 md:grid-cols-[1fr_4fr] 2xl:grid-cols-[1fr_3fr_1fr] 2xl:gap-32 2xl:divide-y-0 2xl:px-16"},lt={key:1,class:"text-gray-400 italic"},at={key:1,class:"w-full max-w-container mx-auto"},nt={class:"my-2 flex items-center justify-between"},ot=["disabled"],rt=i("span",{class:"sr-only"},"Previous Page",-1),it=["disabled"],ut=i("span",{class:"sr-only"},"Next Page",-1),ct={key:0,class:"grid min-w-full grid-cols-1 md:grid-cols-[auto_5fr_3fr_auto_auto] gap-x-8 gap-y-1"},dt={class:"hidden items-center gap-2 p-1 -m-1 md:flex"},pt=i("span",{class:"sr-only"},"Click to sort by Name",-1),ft=i("div",{class:"hidden md:block"},"Institution(s)",-1),mt=i("div",{class:"hidden md:block text-center"},"Url",-1),_t=i("div",{class:"text-right hidden md:block"},"Time",-1),vt=i("div",{class:"md:col-span-5 border-t"},null,-1),ht={class:"self-center text-gray-500 text-sm md:text-base md:text-black"},gt=i("span",{class:"md:hidden"},"ID:",-1),yt={class:"-ml-2 self-center"},bt=["innerHTML"],wt={key:1},xt={class:"self-center"},kt={class:"items-center flex"},$t={class:"self-center md:text-right"},St={key:0,class:"md:col-span-5 border-t italic text-gray-300 text-center"},Pt=I({__name:"search",setup(a){const s=te();let _=String(s.query.q||"");const t=b(null);let l=b(!0),d=b(Se);const f=(u,n=!1)=>{const S=(n?decodeURIComponent(u):u).split("&&"),k={...d.value};return S.forEach(C=>{var O,V;const N=C.split(":=");console.log((O=String(N[1]))==null?void 0:O.replaceAll("`",'"')),k[N[0]]=JSON.parse((V=String(N[1]))==null?void 0:V.replaceAll("`",'"'))}),k},p=u=>{switch(s.query.sort_by){case`${u}:asc`:return`${u}:desc`;case`${u}:desc`:return"";default:return`${u}:asc`}};s.query.facets&&(d.value=f(String(s.query.facets),!0));const o=async(u="",n=1,w=25,S="",k="")=>{l.value=!0;const C=await Ne({q:u,query_by:"edition-name",per_page:w,page:n,facet_by:Object.keys(d.value).join(","),filter_by:S,sort_by:k});t.value=C,l.value=!1},r=D(()=>Number(s.query.page)||1),h=D(()=>Number(s.query.limit)||25);return ge(s,u=>{const n=u.query;o(String(n.q||""),r.value||1,h.value||25,decodeURIComponent(String(n.facets||"")),String(n.sort_by||""))},{immediate:!0}),(u,n)=>{var C,N,O,V,A,R,K,Q,J;const w=ce,S=de,k=pe;return c(),m("div",null,[g(S,null,{default:x(()=>[g(w,null,{default:x(()=>[q("Browse Editions")]),_:1})]),_:1}),i("div",tt,[se(i("input",{type:"search","onUpdate:modelValue":n[0]||(n[0]=v=>le(_)?_.value=v:_=v),onInput:n[1]||(n[1]=v=>u.$router.replace({query:{...e(s).query,q:e(_),page:1}})),class:"mx-auto my-4 h-16 min-w-full rounded border p-4 shadow-md",placeholder:"Search..."},null,544),[[ye,e(_)]])]),i("div",st,[g(ee,{class:"hidden md:flex",loading:e(l),results:e(t),facetValues:e(d)},null,8,["loading","results","facetValues"]),e(l)||!((C=e(t))!=null&&C.found)?(c(),$(be,{key:0,class:"-z-10"},{default:x(()=>[e(l)?(c(),$(e(qe),{key:0,class:"h-5 w-5 animate-spin"})):(c(),m("span",lt,"Nothing found."))]),_:1})):(c(),m("div",at,[i("div",nt,[i("button",{class:F(["rounded border p-4 transition",e(r)<=1?"cursor-not-allowed text-gray-400":"cursor-pointer hover:bg-slate-200 active:bg-slate-300"]),disabled:e(r)<=1,onClick:n[2]||(n[2]=v=>u.$router.push({query:{...e(s).query,page:e(r)-1}}))},[rt,g(e(P),{class:"h-4 w-4 -rotate-90"})],10,ot),i("span",null," showing "+y((e(r)-1)*e(h)+1)+" - "+y(Math.min(((N=e(t))==null?void 0:N.found)||1/0,e(r)*e(h)))+" out of "+y((O=e(t))==null?void 0:O.found),1),i("button",{class:F(["rounded border p-4 transition",e(r)*e(h)>=Number((V=e(t))==null?void 0:V.found)?"cursor-not-allowed text-gray-400":"cursor-pointer hover:bg-slate-200 active:bg-slate-300"]),disabled:e(r)*e(h)>=Number((A=e(t))==null?void 0:A.found),onClick:n[3]||(n[3]=v=>u.$router.push({query:{...e(s).query,page:e(r)+1}}))},[ut,g(e(P),{class:"h-4 w-4 rotate-90"})],10,it)]),!e(l)&&((R=e(t))!=null&&R.found)?(c(),m("div",ct,[i("div",null,[i("div",dt,[q(" ID "),e(s).query.sort_by?j("",!0):(c(),$(e(P),{key:0,class:"w-4 h-4 rotate-180 opacity-50"}))])]),i("div",null,[g(k,{class:"flex items-center gap-2 hover:bg-slate-200 p-1 -m-1 rounded transition active:bg-slate-300",to:{query:{...e(s).query,page:1,sort_by:p("edition-name")}}},{default:x(()=>{var v;return[q(" Name "),e(s).query.sort_by&&e(s).query.sort_by.includes("edition-name")?(c(),$(e(P),{key:0,class:F([{"rotate-180":!((v=e(s).query.sort_by)!=null&&v.includes("desc"))},"w-4 h-4"])},null,8,["class"])):(c(),$(e(Ve),{key:1,class:"w-5 h-5 opacity-50"})),pt]}),_:1},8,["to"])]),ft,mt,_t,(c(!0),m(M,null,L((K=e(t))==null?void 0:K.hits,v=>(c(),m(M,null,[vt,i("div",ht,[gt,q(" "+y(v.document.id),1)]),i("div",yt,[g(we,{href:"/editions/"+v.document.id},{default:x(()=>{var W,X;return[(W=v.highlight["edition-name"])!=null&&W.snippet?(c(),m("span",{key:0,innerHTML:(X=v.highlight["edition-name"])==null?void 0:X.snippet},null,8,bt)):(c(),m("span",wt,y(v.document["edition-name"]),1))]}),_:2},1032,["href"])]),i("div",xt,[g(De,{institutions:v.document["institution-s"],"no-icons":""},null,8,["institutions"])]),i("div",kt,[g(Y,{class:"hidden md:flex text-black",href:v.document.url,"icon-only":""},null,8,["href"]),g(Y,{class:"md:hidden",href:v.document.url},null,8,["href"])]),i("div",$t,y(v.document["time-century"]),1)],64))),256)),Math.min(((Q=e(t))==null?void 0:Q.found)||1/0,e(r)*e(h))===((J=e(t))==null?void 0:J.found)?(c(),m("div",St," You've reached the end. ")):j("",!0)])):j("",!0)])),g(ee,{class:"md:hidden",loading:e(l),results:e(t),facetValues:e(d)},null,8,["loading","results","facetValues"])])])}}});export{Pt as default};
