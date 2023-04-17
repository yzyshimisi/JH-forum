import{_ as _e}from"./post-item.vue_vue_type_style_index_0_lang-02b1501b.js";import{_ as re}from"./post-skeleton-a5bf805a.js";import{t as ue,_ as I,u as pe,w as de,r as me,x as he,y as ve}from"./index-ce5b62d8.js";import{Q as P,R,S as T,b as B,e as S,i as A,u as fe,T as ge,F as we,G as ye,o as ke,M as be,j as xe,O as $e,k as Ue,f as ze,g as Fe,I as Ie,H as Se}from"./naive-ui-ddb574dd.js";import{d as q,r as c,o as i,K as F,Y as t,a as _,L as n,e as h,M as $,D as qe,n as We,w as Me,j as Ce,c as m,U as x,O as z,F as Pe,$ as Re}from"./@vue-f70ab1bd.js";import{_ as Te}from"./main-nav.vue_vue_type_style_index_0_lang-d6d2ed7f.js";import{u as Be}from"./vuex-cc1858c6.js";import{b as Ae}from"./vue-router-29025daf.js";import{e as De}from"./@vicons-fc06a0bb.js";import"./content-16569a30.js";import"./nonesir-video-29a967e9.js";import"./formatTime-936c40eb.js";import"./moment-b7869f98.js";import"./axios-707ed124.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-804c4158.js";import"./evtd-b614532e.js";import"./@css-render-66126308.js";import"./vooks-dfdd6eef.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";const Ne={class:"whisper-wrap"},Ve={class:"whisper-line"},Le={class:"whisper-line send-wrap"},Oe=q({__name:"whisper",props:{show:{type:Boolean,default:!1},user:null},emits:["success"],setup(r,{emit:U}){const u=r,a=c(""),o=c(!1),e=()=>{U("success")},l=()=>{o.value=!0,ue({user_id:u.user.id,content:a.value}).then(p=>{window.$message.success("发送成功"),o.value=!1,a.value="",e()}).catch(p=>{o.value=!1})};return(p,d)=>{const v=P,f=R,g=T,w=B,y=S,k=A;return i(),F(k,{show:r.show,"onUpdate:show":e,class:"whisper-card",preset:"card",size:"small",title:"私信","mask-closable":!1,bordered:!1,style:{width:"360px"}},{default:t(()=>[_("div",Ne,[n(g,{"show-icon":!1},{default:t(()=>[h(" 即将发送私信给: "),n(f,{style:{"max-width":"100%"}},{default:t(()=>[n(v,{type:"success"},{default:t(()=>[h($(r.user.nickname)+"@"+$(r.user.username),1)]),_:1})]),_:1})]),_:1}),_("div",Ve,[n(w,{type:"textarea",placeholder:"请输入私信内容（请勿发送不和谐内容，否则将会被封号）",autosize:{minRows:5,maxRows:10},value:a.value,"onUpdate:value":d[0]||(d[0]=b=>a.value=b),maxlength:"200","show-count":""},null,8,["value"])]),_("div",Le,[n(y,{strong:"",secondary:"",type:"primary",loading:o.value,onClick:l},{default:t(()=>[h(" 发送 ")]),_:1},8,["loading"])])])]),_:1},8,["show"])}}});const je=I(Oe,[["__scopeId","data-v-0cbfe47c"]]),He={class:"whisper-wrap"},Ee={class:"whisper-line"},Ge={class:"whisper-line send-wrap"},Ke=q({__name:"whisper-add-friend",props:{show:{type:Boolean,default:!1},user:null},emits:["success"],setup(r,{emit:U}){const u=r,a=c(""),o=c(!1),e=()=>{U("success")},l=()=>{o.value=!0,pe({user_id:u.user.id,greetings:a.value}).then(p=>{window.$message.success("发送成功"),o.value=!1,a.value="",e()}).catch(p=>{o.value=!1})};return(p,d)=>{const v=P,f=R,g=T,w=B,y=S,k=A;return i(),F(k,{show:r.show,"onUpdate:show":e,class:"whisper-card",preset:"card",size:"small",title:"申请添加朋友","mask-closable":!1,bordered:!1,style:{width:"360px"}},{default:t(()=>[_("div",He,[n(g,{"show-icon":!1},{default:t(()=>[h(" 发送添加朋友申请给: "),n(f,{style:{"max-width":"100%"}},{default:t(()=>[n(v,{type:"success"},{default:t(()=>[h($(r.user.nickname)+"@"+$(r.user.username),1)]),_:1})]),_:1})]),_:1}),_("div",Ee,[n(w,{type:"textarea",placeholder:"请输入真挚的问候语",autosize:{minRows:5,maxRows:10},value:a.value,"onUpdate:value":d[0]||(d[0]=b=>a.value=b),maxlength:"120","show-count":""},null,8,["value"])]),_("div",Ge,[n(y,{strong:"",secondary:"",type:"primary",loading:o.value,onClick:l},{default:t(()=>[h(" 发送 ")]),_:1},8,["loading"])])])]),_:1},8,["show"])}}});const Qe=I(Ke,[["__scopeId","data-v-60be56a2"]]),Ye={key:0,class:"profile-baseinfo"},Je={class:"avatar"},Xe={class:"base-info"},Ze={class:"username"},es={class:"uid"},ss={key:0,class:"user-opts"},ns={key:0,class:"skeleton-wrap"},ts={key:1},as={key:0,class:"empty-wrap"},os={key:0,class:"pagination-wrap"},ls=q({__name:"User",setup(r){fe();const U=ge(),u=Be(),a=Ae(),o=c(!1),e=qe({id:0,avatar:"",username:"",nickname:"",is_admin:!1,is_friend:!0,status:1}),l=c(!1),p=c(!1),d=c(!1),v=c([]),f=c(a.query.username||""),g=c(+a.query.p||1),w=c(20),y=c(0),k=()=>{o.value=!0,me({username:f.value,page:g.value,page_size:w.value}).then(s=>{o.value=!1,v.value=s.list,y.value=Math.ceil(s.pager.total_rows/w.value),window.scrollTo(0,0)}).catch(s=>{o.value=!1})},b=()=>{l.value=!0,de({username:f.value}).then(s=>{l.value=!1,e.id=s.id,e.avatar=s.avatar,e.username=s.username,e.nickname=s.nickname,e.is_admin=s.is_admin,e.is_friend=s.is_friend,e.status=s.status,k()}).catch(s=>{l.value=!1,console.log(s)})},D=s=>{g.value=s,k()},N=()=>{p.value=!0},V=()=>{d.value=!0},L=()=>{p.value=!1},O=()=>{d.value=!1},j=We(()=>{let s=[{label:"私信",key:"whisper"}];return u.state.userInfo.is_admin&&(e.status===1?s.push({label:"禁言",key:"banned"}):s.push({label:"解封",key:"deblocking"})),e.is_friend?s.push({label:"删除好友",key:"delete"}):s.push({label:"添加朋友",key:"requesting"}),s}),H=s=>{switch(s){case"whisper":N();break;case"delete":E();break;case"requesting":V();break;case"banned":case"deblocking":G();break}},E=()=>{U.warning({title:"删除好友",content:"将好友 “"+e.nickname+"” 删除，将同时删除 点赞/收藏 列表中关于该朋友的 “好友可见” 推文",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{l.value=!0,he({user_id:e.id}).then(s=>{l.value=!1,e.is_friend=!1,k()}).catch(s=>{l.value=!1,console.log(s)})}})},G=()=>{U.warning({title:"警告",content:"确定对该用户进行"+(e.status===1?"禁言":"解封")+"处理吗？",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{l.value=!0,ve({id:e.id,status:e.status===1?2:1}).then(s=>{l.value=!1,b()}).catch(s=>{l.value=!1,console.log(s)})}})};return Me(()=>({path:a.path,query:a.query}),(s,W)=>{W.path==="/user"&&s.path==="/user"&&(f.value=a.query.username||"",b())}),Ce(()=>{b()}),(s,W)=>{const K=Te,Q=ke,M=be,Y=xe,J=S,X=$e,Z=je,ee=Ue,se=ze,ne=Fe,te=re,ae=Ie,oe=_e,le=Se,ie=we,ce=ye;return i(),m("div",null,[n(K,{title:"用户详情"}),n(ie,{class:"main-content-wrap profile-wrap",bordered:""},{default:t(()=>[n(ee,{show:l.value},{default:t(()=>[e.id>0?(i(),m("div",Ye,[_("div",Je,[n(Q,{size:"large",src:e.avatar},null,8,["src"])]),_("div",Xe,[_("div",Ze,[_("strong",null,$(e.nickname),1),_("span",null," @"+$(e.username),1),x(u).state.userInfo.id>0&&x(u).state.userInfo.username!=e.username&&e.is_friend?(i(),F(M,{key:0,class:"top-tag",type:"info",size:"small",round:""},{default:t(()=>[h(" 好友 ")]),_:1})):z("",!0),e.is_admin?(i(),F(M,{key:1,class:"top-tag",type:"error",size:"small",round:""},{default:t(()=>[h(" 管理员 ")]),_:1})):z("",!0)]),_("div",es,"UID. "+$(e.id),1)]),x(u).state.userInfo.id>0&&x(u).state.userInfo.username!=e.username?(i(),m("div",ss,[n(X,{placement:"bottom-end",trigger:"click",size:"small",options:x(j),onSelect:H},{default:t(()=>[n(J,{quaternary:"",circle:""},{icon:t(()=>[n(Y,null,{default:t(()=>[n(x(De))]),_:1})]),_:1})]),_:1},8,["options"])])):z("",!0)])):z("",!0),n(Z,{show:p.value,user:e,onSuccess:L},null,8,["show","user"]),n(Qe,{show:d.value,user:e,onSuccess:O},null,8,["show","user"])]),_:1},8,["show"]),n(ne,{class:"profile-tabs-wrap",animated:""},{default:t(()=>[n(se,{name:"post",tab:"泡泡"})]),_:1}),o.value?(i(),m("div",ns,[n(te,{num:w.value},null,8,["num"])])):(i(),m("div",ts,[v.value.length===0?(i(),m("div",as,[n(ae,{size:"large",description:"暂无数据"})])):z("",!0),(i(!0),m(Pe,null,Re(v.value,C=>(i(),F(le,{key:C.id},{default:t(()=>[n(oe,{post:C},null,8,["post"])]),_:2},1024))),128))]))]),_:1}),y.value>0?(i(),m("div",os,[n(ce,{page:g.value,"onUpdate:page":D,"page-slot":x(u).state.collapsedRight?5:8,"page-count":y.value},null,8,["page","page-slot","page-count"])])):z("",!0)])}}});const Rs=I(ls,[["__scopeId","data-v-46a0183a"]]);export{Rs as default};
