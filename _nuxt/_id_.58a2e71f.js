import{T as z,H as A}from"./components.fbea15c1.js";import{c as D}from"./centered.8efe6d84.js";import{f as $,o as t,c as o,a,t as e,b as c,F as _,j as w,h as g,w as d,k as u,d as m,l as E,r as b,m as H,i as s}from"./entry.ac54af07.js";import{_ as p,r as F,p as L,k as S}from"./mapping-objects.2be93399.js";import{_ as k,a as I}from"./mapComponent.vue.a42696d4.js";import{a as O}from"./use-data.1b76eb83.js";import"./_commonjsHelpers.042e6b4d.js";const R={class:"rounded border border-slate-200"},q={key:0,class:"p-5"},G={class:"text-2xl"},J={class:"text-sm"},K={class:"text-sm"},M={key:1,class:"p-3 flex-col flex gap-1 divide-y"},P={class:"col-span-2 text-lg"},Q={class:"text-sm"},x=$({__name:"institution-card",props:{institution:{},institutions:{}},setup(B){return(n,f)=>{const y=I;return t(),o("div",R,[n.institution?(t(),o("div",q,[a("h1",G,e(n.institution["institution-name"]),1),a("h2",null,e(n.institution["located-at"])+", "+e(n.institution["part-of"]),1),a("h3",J,[c(p,{href:n.institution["institution-website"]},null,8,["href"])]),a("h3",K,[c(p,{href:n.institution["institution-gnd"]},null,8,["href"])])])):n.institutions?(t(),o("div",M,[(t(!0),o(_,null,w(n.institutions,l=>(t(),o("div",null,[a("div",P,[c(p,{href:l["institution-website"]},{default:d(()=>[m(e(l["institution-name"]),1)]),_:2},1032,["href"])]),a("div",Q,e(l["located-at"])+", "+e(l["part-of"]),1)]))),256))])):g("",!0),c(y,null,{default:d(()=>[n.institution?(t(),u(k,{key:0,points:[{lat:n.institution["institution-lat"],long:n.institution["institution-lng"]}],name:n.institution["institution-name"],zoom:13,class:"h-64 w-full"},null,8,["points","name"])):n.institutions?(t(),u(k,{key:1,points:n.institutions.map(l=>({lat:l["institution-lat"],long:l["institution-lng"],name:l["institution-name"]})),name:"institutions","zoom-out":"",class:"h-64 w-full"},null,8,["points"])):g("",!0)]),_:1})])}}}),U=["0","0.5","1","1.5","2","not provided"],W={key:1,class:"flex flex-col max-w-container mx-auto"},X={class:"text-center text-5xl mt-10 mb-10"},Y={class:"grid m-2 lg:m-0 lg:grid-cols-[2fr_1fr]"},Z={class:"grid md:grid-cols-2"},tt={class:"font-semibold"},st={key:0},nt={key:1},it={key:2},ot={key:3},et=a("div",{class:"md:col-span-2 border-b pt-1 mb-1 last:border-0"},null,-1),at={key:0,class:"flex flex-col"},lt={class:"m-5 mb-0 text-2xl text-center"},gt=$({__name:"[id]",async setup(B){let n,f;const l=E().params.id,h=b(!0),i=b({}),j=Object.entries(S);return i.value=([n,f]=H(()=>O(String(l))),n=await n,f(),n),h.value=!1,(rt,ut)=>{const v=z,C=A,T=D;return t(),o("div",null,[c(C,null,{default:d(()=>[s(h)?(t(),u(v,{key:0},{default:d(()=>[m("Loading...")]),_:1})):(t(),u(v,{key:1},{default:d(()=>[m(e(s(i)["edition-name"])+" - DigEdCat",1)]),_:1}))]),_:1}),s(h)?(t(),u(T,{key:0,class:"-z-10"},{default:d(()=>[c(s(F),{class:"h-5 w-5 animate-spin"})]),_:1})):(t(),o("div",W,[a("div",null,[a("h1",X,e(s(i)["edition-name"]),1)]),a("div",Y,[a("div",Z,[(t(!0),o(_,null,w(s(j),([r,N])=>(t(),o(_,null,[a("span",tt,e(N),1),s(U).includes(s(i)[r])?(t(),o("span",st,e(s(L)[s(i)[r]]),1)):typeof s(i)[r]=="object"?(t(),o("span",nt,[typeof s(i)[r][0]=="string"?(t(),o(_,{key:0},[m(e(Array(s(i)[r]).join(", ")),1)],64)):(t(),o(_,{key:1},[m(e(Array(s(i)[r]).map(V=>V["institution-name"]).join(", ")),1)],64))])):r==="url"?(t(),o("span",it,[c(p,{href:s(i)[r]},null,8,["href"])])):(t(),o("span",ot,e(s(i)[r]),1)),et],64))),256))]),s(i)["institution-s"].length?(t(),o("div",at,[a("h1",lt," Institution"+e(s(i)["institution-s"].length===1?"":"s")+": ",1),s(i)["institution-s"].length!=1?(t(),u(x,{key:0,institutions:s(i)["institution-s"],class:"m-5 mb-0"},null,8,["institutions"])):(t(),u(x,{key:1,institution:s(i)["institution-s"][0],class:"m-5 mb-0"},null,8,["institution"]))])):g("",!0)])]))])}}});export{gt as default};
