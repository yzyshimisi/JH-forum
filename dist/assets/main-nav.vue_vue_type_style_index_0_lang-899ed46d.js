import{Z as B}from"./index-8275f3fe.js";import{u as E}from"./vuex-9af76a69.js";import{u as S}from"./vue-router-863a6505.js";import{j as A}from"./vooks-848f90ef.js";import{D as C,y as D,z as N,F as P}from"./@vicons-4a4bea9c.js";import{a3 as R,a4 as I,j as V,e as j,a5 as x,h as F}from"./naive-ui-18c654e5.js";import{d as H,r as h,j as L,o as a,c as f,Y as o,L as e,$ as t,O as c,a as $,K as _,e as q,M as U,F as K}from"./@vue-0075cdd2.js";const Y={key:0},Z={class:"navbar"},oe=H({__name:"main-nav",props:{title:{default:""},back:{type:Boolean,default:!1},theme:{type:Boolean,default:!0}},setup(g){const i=g,n=E(),m=S(),l=h(!1),k=h("left"),u=s=>{s?(localStorage.setItem("PAOPAO_THEME","dark"),n.commit("triggerTheme","dark")):(localStorage.setItem("PAOPAO_THEME","light"),n.commit("triggerTheme","light"))},w=()=>{window.history.length<=1?m.push({path:"/"}):m.go(-1)},v=()=>{l.value=!0};return L(()=>{localStorage.getItem("PAOPAO_THEME")||u(A()==="dark")}),(s,d)=>{const y=B,b=R,O=I,r=V,p=j,M=x,T=F;return a(),f(K,null,[o(n).state.drawerModelShow?(a(),f("div",Y,[e(O,{show:l.value,"onUpdate:show":d[0]||(d[0]=z=>l.value=z),width:212,placement:k.value,resizable:""},{default:t(()=>[e(b,null,{default:t(()=>[e(y)]),_:1})]),_:1},8,["show","placement"])])):c("",!0),e(T,{size:"small",bordered:!0,class:"nav-title-card"},{header:t(()=>[$("div",Z,[o(n).state.drawerModelShow&&!s.back?(a(),_(p,{key:0,class:"drawer-btn",onClick:v,quaternary:"",circle:"",size:"medium"},{icon:t(()=>[e(r,null,{default:t(()=>[e(o(C))]),_:1})]),_:1})):c("",!0),s.back?(a(),_(p,{key:1,class:"back-btn",onClick:w,quaternary:"",circle:"",size:"small"},{icon:t(()=>[e(r,null,{default:t(()=>[e(o(D))]),_:1})]),_:1})):c("",!0),q(" "+U(i.title)+" ",1),i.theme?(a(),_(M,{key:2,value:o(n).state.theme==="dark","onUpdate:value":u,size:"small",class:"theme-switch-wrap"},{"checked-icon":t(()=>[e(r,{component:o(N)},null,8,["component"])]),"unchecked-icon":t(()=>[e(r,{component:o(P)},null,8,["component"])]),_:1},8,["value"])):c("",!0)])]),_:1})],64)}}});export{oe as _};
