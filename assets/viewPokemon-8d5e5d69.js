import{g as l,L as p}from"./getData-7d85c3da.js";import{_ as k,r as u,u as a,o as e,b as v,c as o,a as n,F as f,d as x,e as g,w as h,f as y,t as w}from"./index-fe6663f1.js";const P={key:1,class:"container my-3 d-flex justify-content-center"},B={class:"row"},L={class:"card-head text-center m-2 p-2"},N={__name:"viewPokemon",setup(V){const{showPokemon:c,loading:r,getPokemon:_}=l();c("https://pokeapi.co/api/v2/pokemon");const d=_;return(C,D)=>{var t;const i=u("router-link");return a(r)?(e(),v(p,{key:0})):(e(),o("div",P,[n("div",B,[(e(!0),o(f,null,x((t=a(d))==null?void 0:t.results,(s,m)=>(e(),o("div",{class:"card col-sm-3 mt-2 m-1",key:m},[n("div",L,[g(i,{to:`/pokedex/${s.name}`,class:"nav_pokemon text-dark"},{default:h(()=>[y(w(s.name),1)]),_:2},1032,["to"])])]))),128))])]))}}},j=k(N,[["__scopeId","data-v-9d97e1e6"]]);export{j as default};
