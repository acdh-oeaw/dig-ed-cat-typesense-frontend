import{T as i,H as m}from"./components.7a4f3d43.js";import{_,a as c}from"./mapComponent.vue.f3fe5e4e.js";import{i as r}from"./institutions_places_enriched.f5a6266c.js";import{f as u,o as p,c as f,b as n,w as o,d,g}from"./entry.5439b902.js";import"./_commonjsHelpers.042e6b4d.js";const x={class:"mx-auto h-full w-screen relative"},b=u({__name:"map",setup(h){const e=r.map(t=>({name:t["Institution Name"],lat:String(t["Institution Lat"]),long:String(t["Institution Lng"])}));return(t,w)=>{const a=i,s=m,l=c;return p(),f("div",x,[n(s,null,{default:o(()=>[n(a,null,{default:o(()=>[d("Map of all DigEdCat Institutions")]),_:1})]),_:1}),n(l,null,{default:o(()=>[n(_,{name:"full-map",points:g(e),class:"absolute min-w-full min-h-full"},null,8,["points"])]),_:1})])}}});export{b as default};
