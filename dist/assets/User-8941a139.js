import{_ as Fe,a as Ie}from"./post-item.vue_vue_type_style_index_0_lang-a71d385c.js";import{_ as Me}from"./post-skeleton-0f731355.js";import{C as Se,_ as D,D as Ce,E as qe,B as C,F as We,G as Oe,H as Be,I as Re}from"./index-9b430c9c.js";import{R as Z,K as ee,S as se,b as ae,e as N,i as te,T as Ae,F as De,G as Ne,j as K,o as Ve,O as He,P as Ee,k as Ge,f as je,g as Le,I as Ke,H as Qe}from"./naive-ui-62663ad7.js";import{d as V,r as i,o as c,Q as F,a1 as o,a as p,V as a,e as b,M as g,E as Je,n as Xe,w as Ye,j as Ze,c as h,_ as k,O as T,F as Q,a4 as J,s as X}from"./@vue-e0e89260.js";import{_ as es}from"./main-nav.vue_vue_type_style_index_0_lang-75e5a344.js";import{u as ss}from"./vuex-473b3783.js";import{b as as}from"./vue-router-b8e3382f.js";import{i as ts,w as ns,x as Y,y as os,z as ls,D as is,G as us}from"./@vicons-0524c43e.js";import"./content-5374027e.js";import"./paopao-video-player-aa5e8b3f.js";import"./formatTime-cdf4e6f1.js";import"./moment-2ab8298d.js";import"./copy-to-clipboard-1dd3075d.js";import"./toggle-selection-93f4ad84.js";import"./axios-4a70c6fc.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-59ca65c3.js";import"./evtd-b614532e.js";import"./@css-render-580d83ec.js";import"./vooks-a50491fd.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";const cs={class:"whisper-wrap"},rs={class:"whisper-line"},_s={class:"whisper-line send-wrap"},ps=V({__name:"whisper",props:{show:{type:Boolean,default:!1},user:{}},emits:["success"],setup(q,{emit:y}){const d=q,r=i(""),t=i(!1),s=()=>{y("success")},l=()=>{t.value=!0,Se({user_id:d.user.id,content:r.value}).then(_=>{window.$message.success("发送成功"),t.value=!1,r.value="",s()}).catch(_=>{t.value=!1})};return(_,f)=>{const u=Z,m=ee,n=se,w=ae,P=N,U=te;return c(),F(U,{show:_.show,"onUpdate:show":s,class:"whisper-card",preset:"card",size:"small",title:"私信","mask-closable":!1,bordered:!1,style:{width:"360px"}},{default:o(()=>[p("div",cs,[a(n,{"show-icon":!1},{default:o(()=>[b(" 即将发送私信给: "),a(m,{style:{"max-width":"100%"}},{default:o(()=>[a(u,{type:"success"},{default:o(()=>[b(g(_.user.nickname)+"@"+g(_.user.username),1)]),_:1})]),_:1})]),_:1}),p("div",rs,[a(w,{type:"textarea",placeholder:"请输入私信内容（请勿发送不和谐内容，否则将会被封号）",autosize:{minRows:5,maxRows:10},value:r.value,"onUpdate:value":f[0]||(f[0]=z=>r.value=z),maxlength:"200","show-count":""},null,8,["value"])]),p("div",_s,[a(P,{strong:"",secondary:"",type:"primary",loading:t.value,onClick:l},{default:o(()=>[b(" 发送 ")]),_:1},8,["loading"])])])]),_:1},8,["show"])}}});const ds=D(ps,[["__scopeId","data-v-0cbfe47c"]]),ms={class:"whisper-wrap"},vs={class:"whisper-line"},hs={class:"whisper-line send-wrap"},fs=V({__name:"whisper-add-friend",props:{show:{type:Boolean,default:!1},user:{}},emits:["success"],setup(q,{emit:y}){const d=q,r=i(""),t=i(!1),s=()=>{y("success")},l=()=>{t.value=!0,Ce({user_id:d.user.id,greetings:r.value}).then(_=>{window.$message.success("发送成功"),t.value=!1,r.value="",s()}).catch(_=>{t.value=!1})};return(_,f)=>{const u=Z,m=ee,n=se,w=ae,P=N,U=te;return c(),F(U,{show:_.show,"onUpdate:show":s,class:"whisper-card",preset:"card",size:"small",title:"申请添加朋友","mask-closable":!1,bordered:!1,style:{width:"360px"}},{default:o(()=>[p("div",ms,[a(n,{"show-icon":!1},{default:o(()=>[b(" 发送添加朋友申请给: "),a(m,{style:{"max-width":"100%"}},{default:o(()=>[a(u,{type:"success"},{default:o(()=>[b(g(_.user.nickname)+"@"+g(_.user.username),1)]),_:1})]),_:1})]),_:1}),p("div",vs,[a(w,{type:"textarea",placeholder:"请输入真挚的问候语",autosize:{minRows:5,maxRows:10},value:r.value,"onUpdate:value":f[0]||(f[0]=z=>r.value=z),maxlength:"120","show-count":""},null,8,["value"])]),p("div",hs,[a(P,{strong:"",secondary:"",type:"primary",loading:t.value,onClick:l},{default:o(()=>[b(" 发送 ")]),_:1},8,["loading"])])])]),_:1},8,["show"])}}});const gs=D(fs,[["__scopeId","data-v-60be56a2"]]),ws={key:0,class:"profile-baseinfo"},ks={class:"avatar"},bs={class:"base-info"},ys={class:"username"},$s={class:"userinfo"},xs={class:"info-item"},Ps={class:"info-item"},Us={class:"info-item"},zs={key:0,class:"user-opts"},Ts={key:0,class:"skeleton-wrap"},Fs={key:1},Is={key:0,class:"empty-wrap"},Ms={key:1},Ss={key:2},Cs={key:0,class:"pagination-wrap"},qs=V({__name:"User",setup(q){const y=Ae(),d=ss(),r=as(),t=i(!1),s=Je({id:0,avatar:"",username:"",nickname:"",is_admin:!1,is_friend:!0,is_following:!1,follows:0,followings:0,status:1}),l=i(!1),_=i(!1),f=i(!1),u=i([]),m=i(r.query.username||""),n=i(+r.query.p||1),w=i("post"),P=i(+r.query.p||1),U=i(1),z=i(1),H=i(1),E=i(1),v=i(20),$=i(0),ne=()=>{switch(w.value){case"post":W();break;case"comment":O();break;case"highlight":B();break;case"media":R();break;case"star":A();break}},W=()=>{t.value=!0,C({username:m.value,style:"post",page:n.value,page_size:v.value}).then(e=>{t.value=!1,u.value=e.list||[],$.value=Math.ceil(e.pager.total_rows/v.value),window.scrollTo(0,0)}).catch(e=>{u.value=[],t.value=!1})},O=()=>{t.value=!0,C({username:m.value,style:"comment",page:n.value,page_size:v.value}).then(e=>{t.value=!1,u.value=e.list||[],$.value=Math.ceil(e.pager.total_rows/v.value),window.scrollTo(0,0)}).catch(e=>{u.value=[],t.value=!1})},B=()=>{t.value=!0,C({username:m.value,style:"highlight",page:n.value,page_size:v.value}).then(e=>{t.value=!1,u.value=e.list||[],$.value=Math.ceil(e.pager.total_rows/v.value),window.scrollTo(0,0)}).catch(e=>{u.value=[],t.value=!1})},R=()=>{t.value=!0,C({username:m.value,style:"media",page:n.value,page_size:v.value}).then(e=>{t.value=!1,u.value=e.list||[],$.value=Math.ceil(e.pager.total_rows/v.value),window.scrollTo(0,0)}).catch(e=>{u.value=[],t.value=!1})},A=()=>{t.value=!0,C({username:m.value,style:"star",page:n.value,page_size:v.value}).then(e=>{t.value=!1,u.value=e.list||[],$.value=Math.ceil(e.pager.total_rows/v.value),window.scrollTo(0,0)}).catch(e=>{u.value=[],t.value=!1})},oe=e=>{switch(w.value=e,w.value){case"post":n.value=P.value,W();break;case"comment":n.value=U.value,O();break;case"highlight":n.value=z.value,B();break;case"media":n.value=H.value,R();break;case"star":n.value=E.value,A();break}},I=()=>{l.value=!0,qe({username:m.value}).then(e=>{l.value=!1,s.id=e.id,s.avatar=e.avatar,s.username=e.username,s.nickname=e.nickname,s.is_admin=e.is_admin,s.is_friend=e.is_friend,s.is_following=e.is_following,s.follows=e.follows,s.followings=e.followings,s.status=e.status,ne()}).catch(e=>{l.value=!1,console.log(e)})},le=e=>{switch(n.value=e,w.value){case"post":P.value=e,W();break;case"comment":U.value=n.value,O();break;case"highlight":z.value=n.value,B();break;case"media":H.value=n.value,R();break;case"star":E.value=n.value,A();break}},ie=()=>{_.value=!0},ue=()=>{f.value=!0},ce=()=>{_.value=!1},re=()=>{f.value=!1},x=e=>()=>X(K,null,{default:()=>X(e)}),_e=Xe(()=>{let e=[{label:"私信",key:"whisper",icon:x(ns)}];return d.state.userInfo.is_admin&&(s.status===1?e.push({label:"禁言",key:"banned",icon:x(Y)}):e.push({label:"解封",key:"deblocking",icon:x(Y)})),s.is_following?e.push({label:"取消关注",key:"unfollow",icon:x(os)}):e.push({label:"关注",key:"follow",icon:x(ls)}),s.is_friend?e.push({label:"删除好友",key:"delete",icon:x(is)}):e.push({label:"添加朋友",key:"requesting",icon:x(us)}),e}),pe=e=>{switch(e){case"whisper":ie();break;case"delete":de();break;case"requesting":ue();break;case"follow":case"unfollow":me();break;case"banned":case"deblocking":ve();break}},de=()=>{y.warning({title:"删除好友",content:"将好友 “"+s.nickname+"” 删除，将同时删除 点赞/收藏 列表中关于该朋友的 “好友可见” 推文",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{l.value=!0,We({user_id:s.id}).then(e=>{l.value=!1,s.is_friend=!1,W()}).catch(e=>{l.value=!1,console.log(e)})}})},me=()=>{y.success({title:"提示",content:"确定"+(s.is_following?"取消关注":"关注")+"该用户吗？",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{l.value=!0,s.is_following?Oe({user_id:s.id}).then(e=>{l.value=!1,window.$message.success("取消关注成功"),I()}).catch(e=>{l.value=!1,console.log(e)}):Be({user_id:s.id}).then(e=>{l.value=!1,window.$message.success("关注成功"),I()}).catch(e=>{l.value=!1,console.log(e)})}})},ve=()=>{y.warning({title:"警告",content:"确定对该用户进行"+(s.status===1?"禁言":"解封")+"处理吗？",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{l.value=!0,Re({id:s.id,status:s.status===1?2:1}).then(e=>{l.value=!1,s.status===1?window.$message.success("禁言成功"):window.$message.success("解封成功"),I()}).catch(e=>{l.value=!1,console.log(e)})}})};return Ye(()=>({path:r.path,query:r.query}),(e,G)=>{G.path==="/user"&&e.path==="/user"&&(m.value=r.query.username||"",I())}),Ze(()=>{I()}),(e,G)=>{const he=es,fe=Ve,j=He,ge=N,we=Ee,ke=ds,be=Ge,M=je,ye=Le,$e=Me,xe=Ke,Pe=Fe,L=Qe,Ue=Ie,ze=De,Te=Ne;return c(),h("div",null,[a(he,{title:"用户详情"}),a(ze,{class:"main-content-wrap profile-wrap",bordered:""},{default:o(()=>[a(be,{show:l.value},{default:o(()=>[s.id>0?(c(),h("div",ws,[p("div",ks,[a(fe,{size:"large",src:s.avatar},null,8,["src"])]),p("div",bs,[p("div",ys,[p("strong",null,g(s.nickname),1),p("span",null," @"+g(s.username),1),k(d).state.userInfo.id>0&&k(d).state.userInfo.username!=s.username&&s.is_friend?(c(),F(j,{key:0,class:"top-tag",type:"info",size:"small",round:""},{default:o(()=>[b(" 好友 ")]),_:1})):T("",!0),s.is_admin?(c(),F(j,{key:1,class:"top-tag",type:"error",size:"small",round:""},{default:o(()=>[b(" 管理员 ")]),_:1})):T("",!0)]),p("div",$s,[p("span",xs,"UID. "+g(s.id),1),p("span",Ps,"关注  "+g(s.follows),1),p("span",Us,"粉丝  "+g(s.followings),1)])]),k(d).state.userInfo.id>0&&k(d).state.userInfo.username!=s.username?(c(),h("div",zs,[a(we,{placement:"bottom-end",trigger:"click",size:"small",options:_e.value,onSelect:pe},{default:o(()=>[a(ge,{quaternary:"",circle:""},{icon:o(()=>[a(k(K),null,{default:o(()=>[a(k(ts))]),_:1})]),_:1})]),_:1},8,["options"])])):T("",!0)])):T("",!0),a(ke,{show:_.value,user:s,onSuccess:ce},null,8,["show","user"]),a(gs,{show:f.value,user:s,onSuccess:re},null,8,["show","user"])]),_:1},8,["show"]),a(ye,{class:"profile-tabs-wrap",type:"line",animated:"","onUpdate:value":oe},{default:o(()=>[a(M,{name:"post",tab:"泡泡"}),a(M,{name:"comment",tab:"评论"}),a(M,{name:"highlight",tab:"亮点"}),a(M,{name:"media",tab:"图文"}),a(M,{name:"star",tab:"喜欢"})]),_:1}),t.value?(c(),h("div",Ts,[a($e,{num:v.value},null,8,["num"])])):(c(),h("div",Fs,[u.value.length===0?(c(),h("div",Is,[a(xe,{size:"large",description:"暂无数据"})])):T("",!0),k(d).state.desktopModelShow?(c(),h("div",Ms,[(c(!0),h(Q,null,J(u.value,S=>(c(),F(L,{key:S.id},{default:o(()=>[a(Pe,{post:S},null,8,["post"])]),_:2},1024))),128))])):(c(),h("div",Ss,[(c(!0),h(Q,null,J(u.value,S=>(c(),F(L,{key:S.id},{default:o(()=>[a(Ue,{post:S},null,8,["post"])]),_:2},1024))),128))]))]))]),_:1}),$.value>0?(c(),h("div",Cs,[a(Te,{page:n.value,"onUpdate:page":le,"page-slot":k(d).state.collapsedRight?5:8,"page-count":$.value},null,8,["page","page-slot","page-count"])])):T("",!0)])}}});const _a=D(qs,[["__scopeId","data-v-db2359f3"]]);export{_a as default};
