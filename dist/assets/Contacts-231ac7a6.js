import{u as P,b as R}from"./vue-router-863a6505.js";import{d as k,o as e,c as n,a as s,L as a,M as d,r as c,j as S,$ as f,Y as U,O as h,F as y,a2 as V,K as q}from"./@vue-0075cdd2.js";import{o as x,F as D,G as L,I as T,H as j}from"./naive-ui-18c654e5.js";import{_ as b,N as E}from"./index-8275f3fe.js";import{_ as G}from"./post-skeleton-701feee1.js";import{_ as H}from"./main-nav.vue_vue_type_style_index_0_lang-899ed46d.js";import{u as K}from"./vuex-9af76a69.js";import"./seemly-76b7b838.js";import"./vueuc-471a8e21.js";import"./evtd-b614532e.js";import"./@css-render-d7709484.js";import"./vooks-848f90ef.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";import"./axios-4a70c6fc.js";import"./@vicons-4a4bea9c.js";/* empty css               */const O={class:"avatar"},Y={class:"base-info"},A={class:"username"},J={class:"uid"},Q=k({__name:"contact-item",props:{contact:{}},setup(C){const l=P(),u=t=>{l.push({name:"user",query:{username:t}})};return(t,o)=>{const _=x;return e(),n("div",{class:"contact-item",onClick:o[0]||(o[0]=r=>u(t.contact.username))},[s("div",O,[a(_,{size:"large",src:t.contact.avatar},null,8,["src"])]),s("div",Y,[s("div",A,[s("strong",null,d(t.contact.nickname),1),s("span",null," @"+d(t.contact.username),1)]),s("div",J,"UID. "+d(t.contact.user_id),1)])])}}});const W=b(Q,[["__scopeId","data-v-08ee9b2e"]]),X={key:0,class:"skeleton-wrap"},Z={key:1},tt={key:0,class:"empty-wrap"},et={key:0,class:"pagination-wrap"},ot=k({__name:"Contacts",setup(C){const l=K(),u=R(),t=c(!1),o=c([]),_=c(+u.query.p||1),r=c(20),m=c(0),$=i=>{_.value=i,v()};S(()=>{v()});const v=(i=!1)=>{o.value.length===0&&(t.value=!0),E({page:_.value,page_size:r.value}).then(p=>{t.value=!1,o.value=p.list,m.value=Math.ceil(p.pager.total_rows/r.value),i&&setTimeout(()=>{window.scrollTo(0,99999)},50)}).catch(p=>{t.value=!1})};return(i,p)=>{const w=H,I=G,z=T,B=W,N=j,F=D,M=L;return e(),n(y,null,[s("div",null,[a(w,{title:"好友"}),a(F,{class:"main-content-wrap",bordered:""},{default:f(()=>[t.value?(e(),n("div",X,[a(I,{num:r.value},null,8,["num"])])):(e(),n("div",Z,[o.value.length===0?(e(),n("div",tt,[a(z,{size:"large",description:"暂无数据"})])):h("",!0),(e(!0),n(y,null,V(o.value,g=>(e(),q(N,{key:g.user_id},{default:f(()=>[a(B,{contact:g},null,8,["contact"])]),_:2},1024))),128))]))]),_:1})]),m.value>0?(e(),n("div",et,[a(M,{page:_.value,"onUpdate:page":$,"page-slot":U(l).state.collapsedRight?5:8,"page-count":m.value},null,8,["page","page-slot","page-count"])])):h("",!0)],64)}}});const zt=b(ot,[["__scopeId","data-v-3b2bf978"]]);export{zt as default};
