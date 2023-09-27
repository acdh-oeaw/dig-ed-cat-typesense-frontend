import{T as N,H as q}from"./components.a7309788.js";import{t as _,a as V,c as I,f as T,_ as B}from"./network-graph.vue.607f7c12.js";import{c as G}from"./centered.ae15dcb0.js";import{_ as E}from"./client-only.3b44a50e.js";import{f as v,r as m,o as c,c as p,a as i,i as f,v as F,n as H,h as l,j as U,F as z,m as D,J as M,K as S,t as A,g as J,b as n,w as u,d as K,I as h}from"./entry.814c54fd.js";import{a as L}from"./use-data.5c59bd20.js";import{r as R}from"./XMarkIcon.798f93e3.js";import{_ as j}from"./vis-container.vue.c0071e48.js";import"./_commonjsHelpers.042e6b4d.js";const O={class:"flex flex-col bg-white p-2 rounded border shadow"},P={class:"h-8 w-64 rounded border shadow grid grid-cols-[1fr_auto]"},Q={class:"mt-2"},W={class:"flex items-center gap-2"},X=["id","value"],Y=["for"],Z=v({__name:"graph-toolbar",props:{data:{}},setup(y){const a=m(_),o=m("");return(r,e)=>(c(),p("div",O,[i("div",P,[f(i("input",{type:"text",placeholder:"Filter Nodes...","onUpdate:modelValue":e[0]||(e[0]=t=>o.value=t),class:"h-full w-fit pl-2",onInput:e[1]||(e[1]=t=>r.$emit("inputChange",{query:o.value,types:a.value}))},null,544),[[F,o.value]]),o.value?(c(),H(l(R),{key:0,class:"h-5 w-5 text-gray-600 shrink-0 self-center cursor-pointer pr-2",onClick:e[2]||(e[2]=t=>{o.value="",r.$emit("inputChange",{query:o.value,types:a.value})})})):U("",!0)]),i("div",Q,[(c(!0),p(z,null,D(l(_),t=>(c(),p("div",W,[f(i("input",{type:"checkbox",class:"h-4 w-4",style:S(`accent-color: ${l(V)[t]}`),id:t,value:t,"onUpdate:modelValue":e[3]||(e[3]=d=>a.value=d),onChange:e[4]||(e[4]=d=>r.$emit("inputChange",{query:o.value,types:a.value}))},null,44,X),[[M,a.value]]),i("label",{for:t,class:"text-lg"},A(t),9,Y)]))),256))])]))}}),ee={class:"relative"},de=v({__name:"network",async setup(y){let a,o;const r=I(([a,o]=J(()=>L()),a=await a,o(),a)),e=m(r),t=m(s=>{e.value=T(r,{types:s.types||[],query:s.query||""})}),d=s=>{switch(s.attributes.type){case"Edition":h(`/editions/${s.index+1}`);break;case"Institution":h({path:"/search",query:{facets:encodeURIComponent(`institution-s.institution-name:=["${s.attributes.label}"]`)}});break}};return(s,te)=>{const g=N,w=q,k=B,C=G,b=E;return c(),p("div",ee,[n(w,null,{default:u(()=>[n(g,null,{default:u(()=>[K("Network Graph")]),_:1})]),_:1}),n(b,null,{default:u(()=>[n(Z,{data:l(e),onInputChange:l(t),class:"absolute z-20 right-0 bottom-0 m-2"},null,8,["data","onInputChange"]),n(C,null,{default:u(()=>[n(j,null,{default:u(({width:x,height:$})=>[n(k,{data:l(e),width:x,height:$,onNodeClick:d},null,8,["data","width","height"])]),_:1})]),_:1})]),_:1})])}}});export{de as default};