import{T as i,H as m}from"./components.447d12b2.js";import{_,a as c}from"./mapComponent.vue.3593bc87.js";import{i as u}from"./institutions_places_enriched.f5a6266c.js";import{f as r,o as p,c as f,b as n,w as o,d,i as x}from"./entry.b0ee85e0.js";import"./_commonjsHelpers.042e6b4d.js";const g={class:"mx-auto min-h-full min-w-full relative"},b=r({__name:"map",setup(h){const a=u.map(t=>({name:t["Institution Name"],lat:String(t["Institution Lat"]),long:String(t["Institution Lng"])}));return(t,w)=>{const e=i,l=m,s=c;return p(),f("div",g,[n(l,null,{default:o(()=>[n(e,null,{default:o(()=>[d("Map of all DigEdCat Institutions")]),_:1})]),_:1}),n(s,null,{default:o(()=>[n(_,{name:"full-map",points:x(a),class:"absolute min-w-full min-h-full"},null,8,["points"])]),_:1})])}}});export{b as default};