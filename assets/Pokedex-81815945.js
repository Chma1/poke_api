import{g,L as h}from"./getData-7d85c3da.js";import{_ as y,g as v,h as b,u as o,o as t,b as f,c as a,a as e,f as P,t as B,i as N}from"./index-fe6663f1.js";const R={key:1,class:"container"},$={key:0,class:"content"},C={class:"text-center text-uppercase my-3"},V={class:"text-primary"},D={class:"text-end"},E={class:"text-center"},L=["src"],T={key:1,class:"text-center my-2 display-5"},w={class:"text-end"},I={__name:"Pokedex",setup(S){const{getPokemon:d,showPokemon:l,loading:p}=g(),m=v(),k=b(),c=()=>{m.push("/pokedex")},n=d;return l(`https://pokeapi.co/api/v2/pokemon/${k.params.name}`),(u,s)=>{var r,_,i;return o(p)?(t(),f(h,{key:0})):(t(),a("div",R,[o(n)?(t(),a("div",$,[e("h1",C,[P("This Pokemon: "),e("b",V,B(u.$route.params.name),1)]),e("div",D,[e("button",{class:"btn btn-danger",onClick:s[0]||(s[0]=x=>c())},"Regresar")]),e("div",E,[e("img",{src:(i=(_=(r=o(n).sprites)==null?void 0:r.other)==null?void 0:_.home)==null?void 0:i.front_default,alt:"pokemon",class:"img_pokemon"},null,8,L)])])):(t(),a("h3",T,"Not Exist")),e("div",w,[o(n)?N("",!0):(t(),a("button",{key:0,class:"btn btn-danger",onClick:s[1]||(s[1]=x=>c())},"Regresar"))])]))}}},z=y(I,[["__scopeId","data-v-52c58a65"]]);export{z as default};
