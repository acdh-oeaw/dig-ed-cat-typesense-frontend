import{c as v,g as y,r as B}from"./use-data.e5575958.js";import{a as _,o as n,b as i,c as d,w as b,e as m,t as e,f as N,h as s,i as k,j as V,r as f,u as a,F as c,k as g}from"./entry.6e0463b0.js";const x={class:"relative w-full h-64 bg-slate-200"},C=s("br",null,null,-1),j=_({__name:"map",props:{points:{}},setup(p){return(t,r)=>{const o=v;return n(),i("div",x,[t.points[0]?(n(),d(o,{key:0,class:"z-0"},{default:b(()=>[m(e(t.points[0].lat)+" ",1),C,m(" "+e(t.points[0].long),1)]),_:1})):N("",!0)])}}}),z={class:"m-5 rounded border border-slate-200"},D={class:"p-5"},F={class:"text-2xl"},S={class:"text-sm"},E=["href"],L={class:"text-sm"},O=["href"],R=_({__name:"institution-card",props:{institution:{}},setup(p){return(t,r)=>(n(),i("div",z,[s("div",D,[s("h1",F,e(t.institution["institution-name"]),1),s("h2",null,e(t.institution["located-at"])+", "+e(t.institution["part-of"]),1),s("h3",S,[s("a",{href:t.institution["institution-website"]},e(t.institution["institution-website"]),9,E)]),s("h3",L,[s("a",{href:t.institution["institution-gnd"]},e(t.institution["institution-gnd"]),9,O)])]),k(j,{points:[{lat:t.institution["institution-lat"],long:t.institution["institution-lng"]}]},null,8,["points"])]))}}),T={key:1,class:"flex mx-auto"},q={class:"grid grid-cols-2 max-w-container"},A={class:"flex flex-col"},J=_({__name:"[id]",setup(p){const r=V().params.id,o=f(!0),l=f();return y(String(r)).then(h=>{l.value=h.value,o.value=!1}),(h,G)=>{const w=v;return a(o)?(n(),d(w,{key:0,class:"-z-10"},{default:b(()=>[k(a(B),{class:"h-5 w-5 animate-spin"})]),_:1})):(n(),i("div",T,[s("div",q,[(n(!0),i(c,null,g(Object.entries(a(l)),([u,$])=>(n(),i(c,null,[s("span",null,e(u),1),s("span",null,e($),1)],64))),256))]),s("div",A,[(n(!0),i(c,null,g(a(l)["institution-s"],u=>(n(),d(R,{institution:u},null,8,["institution"]))),256))])]))}}});export{J as default};
