import{_ as qe}from"./post-item.vue_vue_type_style_index_0_lang-acc2d681.js";import{_ as $e}from"./post-skeleton-cd4157b0.js";import{d as Q,r as u,j as X,o as c,c as f,U as q,a as $,L as t,Y as s,K as N,O as T,Z as K,e as P,M as G,F as Y,$ as Z,n as Te,w as Ie}from"./@vue-f70ab1bd.js";import{u as W}from"./vuex-cc1858c6.js";import{l as J}from"./lodash-3329902d.js";import{g as Ue,a as xe,c as Le,b as Ee,_ as Re}from"./index-1063388e.js";import{p as ze}from"./content-83d95999.js";import{V as I,P as S}from"./IEnum-ea67d3af.js";import{I as Ae,V as Pe,A as Se,d as Ne,E as Ve}from"./@vicons-fc06a0bb.js";import{m as Be,s as Oe,N as Me,c as Fe,t as De,v as je,w as He,x as Ke,y as Ge,z as Je,A as Qe,i as Xe,B as Ye,C as Ze,D as We,E as et,F as tt,G as at}from"./naive-ui-9980ffcb.js";import{_ as ot}from"./main-nav.vue_vue_type_style_index_0_lang-455f4f57.js";import{b as nt,u as st}from"./vue-router-29025daf.js";import"./formatTime-936c40eb.js";import"./moment-b7869f98.js";import"./copy-to-clipboard-ca358197.js";import"./toggle-selection-93f4ad84.js";import"./axios-707ed124.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-804c4158.js";import"./evtd-b614532e.js";import"./@css-render-66126308.js";import"./vooks-dfdd6eef.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";import"./nonesir-video-29a967e9.js";const lt={key:0,class:"compose-wrap"},it={class:"compose-line"},ut={class:"compose-user"},rt={class:"compose-line compose-options"},ct={class:"attachment"},pt={class:"submit-wrap"},_t={class:"attachment-list-wrap"},mt={key:0,class:"attachment-price-wrap"},dt=$("span",null," 附件价格￥",-1),vt={key:0,class:"eye-wrap"},gt={key:1,class:"link-wrap"},ft={key:1,class:"compose-wrap"},ht=$("div",{class:"login-wrap"},[$("span",{class:"login-banner"}," 登录后，精彩更多")],-1),yt={class:"login-wrap"},wt=Q({__name:"compose",emits:["post-success"],setup(ee,{emit:V}){const r=W(),L=u([]),h=u(!1),y=u(!1),g=u(!1),w=u(!1),b=u(""),U=u([]),E=u(),z=u(0),_=u("public/image"),l=u([]),v=u([]),k=u([]),d=u([]),C=u(I.FRIEND),x=u(I.FRIEND),O=[{value:I.PUBLIC,label:"公开"},{value:I.PRIVATE,label:"私密"},{value:I.FRIEND,label:"好友可见"}],A=+"300",M="true".toLocaleLowerCase()==="true",F="true".toLocaleLowerCase()==="true",B="false".toLocaleLowerCase()==="true",te="true".toLocaleLowerCase()==="true",ae="/v1/attachment",j=u(),oe=()=>{g.value=!g.value,g.value&&w.value&&(w.value=!1)},ne=()=>{w.value=!w.value,w.value&&g.value&&(g.value=!1)},se=J.debounce(a=>{Ue({k:a}).then(e=>{let n=[];e.suggest.map(o=>{n.push({label:o,value:o})}),L.value=n,h.value=!1}).catch(e=>{h.value=!1})},200),le=J.debounce(a=>{xe({k:a}).then(e=>{let n=[];e.suggest.map(o=>{n.push({label:o,value:o})}),L.value=n,h.value=!1}).catch(e=>{h.value=!1})},200),ie=(a,e)=>{h.value||(h.value=!0,e==="@"?se(a):le(a))},ue=a=>{a.length>A||(b.value=a)},D=a=>{_.value=a},re=a=>{l.value=a},ce=async a=>{var e,n,o,i,m,R;return _.value==="public/image"&&!["image/png","image/jpg","image/jpeg","image/gif"].includes((e=a.file.file)==null?void 0:e.type)?(window.$message.warning("图片仅允许 png/jpg/gif 格式"),!1):_.value==="image"&&((n=a.file.file)==null?void 0:n.size)>10485760?(window.$message.warning("图片大小不能超过10MB"),!1):_.value==="public/video"&&!["video/mp4","video/quicktime"].includes((o=a.file.file)==null?void 0:o.type)?(window.$message.warning("视频仅允许 mp4/mov 格式"),!1):_.value==="public/video"&&((i=a.file.file)==null?void 0:i.size)>104857600?(window.$message.warning("视频大小不能超过100MB"),!1):_.value==="attachment"&&!["application/zip"].includes((m=a.file.file)==null?void 0:m.type)?(window.$message.warning("附件仅允许 zip 格式"),!1):_.value==="attachment"&&((R=a.file.file)==null?void 0:R.size)>104857600?(window.$message.warning("附件大小不能超过100MB"),!1):!0},pe=({file:a,event:e})=>{var n;try{let o=JSON.parse((n=e.target)==null?void 0:n.response);o.code===0&&(_.value==="public/image"&&v.value.push({id:a.id,content:o.data.content}),_.value==="public/video"&&k.value.push({id:a.id,content:o.data.content}),_.value==="attachment"&&d.value.push({id:a.id,content:o.data.content}))}catch{window.$message.error("上传失败")}},_e=({file:a,event:e})=>{var n;try{let o=JSON.parse((n=e.target)==null?void 0:n.response);if(o.code!==0){let i=o.msg||"上传失败";o.details&&o.details.length>0&&o.details.map(m=>{i+=":"+m}),window.$message.error(i)}}catch{window.$message.error("上传失败")}},me=({file:a})=>{let e=v.value.findIndex(n=>n.id===a.id);e>-1&&v.value.splice(e,1),e=k.value.findIndex(n=>n.id===a.id),e>-1&&k.value.splice(e,1),e=d.value.findIndex(n=>n.id===a.id),e>-1&&d.value.splice(e,1)},de=()=>{if(b.value.trim().length===0){window.$message.warning("请输入内容哦");return}let{tags:a,users:e}=ze(b.value);const n=[];let o=100;n.push({content:b.value,type:S.TEXT,sort:o}),v.value.map(i=>{o++,n.push({content:i.content,type:S.IMAGEURL,sort:o})}),k.value.map(i=>{o++,n.push({content:i.content,type:S.VIDEOURL,sort:o})}),d.value.map(i=>{o++,n.push({content:i.content,type:S.ATTACHMENT,sort:o})}),U.value.length>0&&U.value.map(i=>{o++,n.push({content:i,type:S.LINKURL,sort:o})}),y.value=!0,Le({contents:n,tags:Array.from(new Set(a)),users:Array.from(new Set(e)),attachment_price:+z.value*100,visibility:C.value}).then(i=>{var m;window.$message.success("发布成功"),y.value=!1,V("post-success",i),g.value=!1,w.value=!1,(m=E.value)==null||m.clear(),l.value=[],b.value="",U.value=[],v.value=[],k.value=[],d.value=[],C.value=x.value}).catch(i=>{y.value=!1})},H=a=>{r.commit("triggerAuth",!0),r.commit("triggerAuthKey",a)};return X(()=>{"friend".toLowerCase()==="friend"?x.value=I.FRIEND:"friend".toLowerCase()==="public"?x.value=I.PUBLIC:x.value=I.PRIVATE,C.value=x.value,j.value="Bearer "+localStorage.getItem("PAOPAO_TOKEN")}),(a,e)=>{const n=Be,o=Oe,i=Me,m=Fe,R=De,ve=je,ge=He,fe=Ke,he=Ge,ye=Je,we=Qe,be=Xe,ke=Ye,Ce=Ze;return c(),f("div",null,[q(r).state.userInfo.id>0?(c(),f("div",lt,[$("div",it,[$("div",ut,[t(n,{round:"",size:30,src:q(r).state.userInfo.avatar},null,8,["src"])]),t(o,{type:"textarea",size:"large",autosize:"",bordered:!1,loading:h.value,value:b.value,prefix:["@","#"],options:L.value,onSearch:ie,"onUpdate:value":ue,placeholder:"说说您的新鲜事..."},null,8,["loading","value","options"])]),t(ye,{ref_key:"uploadRef",ref:E,abstract:"","list-type":"image",multiple:!0,max:9,action:ae,headers:{Authorization:j.value},data:{type:_.value},onBeforeUpload:ce,onFinish:pe,onError:_e,onRemove:me,"onUpdate:fileList":re},{default:s(()=>[$("div",rt,[$("div",ct,[t(R,{abstract:""},{default:s(({handleClick:p})=>[t(m,{disabled:l.value.length>0&&_.value==="public/video"||l.value.length===9,onClick:()=>{D("public/image"),p()},quaternary:"",circle:"",type:"primary"},{icon:s(()=>[t(i,{size:"20",color:"var(--primary-color)"},{default:s(()=>[t(q(Ae))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1}),M?(c(),N(R,{key:0,abstract:""},{default:s(({handleClick:p})=>[t(m,{disabled:l.value.length>0&&_.value!=="public/video"||l.value.length===9,onClick:()=>{D("public/video"),p()},quaternary:"",circle:"",type:"primary"},{icon:s(()=>[t(i,{size:"20",color:"var(--primary-color)"},{default:s(()=>[t(q(Pe))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1})):T("",!0),F?(c(),N(R,{key:1,abstract:""},{default:s(({handleClick:p})=>[t(m,{disabled:l.value.length>0&&_.value==="public/video"||l.value.length===9,onClick:()=>{D("attachment"),p()},quaternary:"",circle:"",type:"primary"},{icon:s(()=>[t(i,{size:"20",color:"var(--primary-color)"},{default:s(()=>[t(q(Se))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1})):T("",!0),t(m,{quaternary:"",circle:"",type:"primary",onClick:K(oe,["stop"])},{icon:s(()=>[t(i,{size:"20",color:"var(--primary-color)"},{default:s(()=>[t(q(Ne))]),_:1})]),_:1},8,["onClick"]),te?(c(),N(m,{key:2,quaternary:"",circle:"",type:"primary",onClick:K(ne,["stop"])},{icon:s(()=>[t(i,{size:"20",color:"var(--primary-color)"},{default:s(()=>[t(q(Ve))]),_:1})]),_:1},8,["onClick"])):T("",!0)]),$("div",pt,[t(ge,{trigger:"hover",placement:"bottom"},{trigger:s(()=>[t(ve,{class:"text-statistic",type:"circle","show-indicator":!1,status:"success","stroke-width":10,percentage:b.value.length/q(A)*100},null,8,["percentage"])]),default:s(()=>[P(" "+G(b.value.length)+" / "+G(q(A)),1)]),_:1}),t(m,{loading:y.value,onClick:de,type:"primary",secondary:"",round:""},{default:s(()=>[P(" 发布 ")]),_:1},8,["loading"])])]),$("div",_t,[t(fe),d.value.length>0?(c(),f("div",mt,[B?(c(),N(he,{key:0,value:z.value,"onUpdate:value":e[0]||(e[0]=p=>z.value=p),min:0,max:1e5,placeholder:"请输入附件价格，0为免费附件"},{prefix:s(()=>[dt]),_:1},8,["value"])):T("",!0)])):T("",!0)])]),_:1},8,["headers","data"]),w.value?(c(),f("div",vt,[t(ke,{value:C.value,"onUpdate:value":e[1]||(e[1]=p=>C.value=p),name:"radiogroup"},{default:s(()=>[t(be,null,{default:s(()=>[(c(),f(Y,null,Z(O,p=>t(we,{key:p.value,value:p.value,label:p.label},null,8,["value","label"])),64))]),_:1})]),_:1},8,["value"])])):T("",!0),g.value?(c(),f("div",gt,[t(Ce,{value:U.value,"onUpdate:value":e[2]||(e[2]=p=>U.value=p),placeholder:"请输入以http(s)://开头的链接",min:0,max:3},{"create-button-default":s(()=>[P(" 创建链接 ")]),_:1},8,["value"])])):T("",!0)])):(c(),f("div",ft,[ht,$("div",yt,[t(m,{strong:"",secondary:"",round:"",type:"primary",onClick:e[3]||(e[3]=p=>H("signin"))},{default:s(()=>[P(" 登录 ")]),_:1}),t(m,{strong:"",secondary:"",round:"",type:"info",onClick:e[4]||(e[4]=p=>H("signup"))},{default:s(()=>[P(" 注册 ")]),_:1})])]))])}}});const bt={key:0,class:"skeleton-wrap"},kt={key:1},Ct={key:0,class:"empty-wrap"},qt={key:0,class:"pagination-wrap"},$t=Q({__name:"Home",setup(ee){const V=W(),r=nt(),L=st(),h=u(!1),y=u([]),g=u(+r.query.p||1),w=u(20),b=u(0),U=Te(()=>{let l="泡泡广场";return r.query&&r.query.q&&(r.query.t&&r.query.t==="tag"?l="#"+decodeURIComponent(r.query.q):l="搜索: "+decodeURIComponent(r.query.q)),l}),E=()=>{h.value=!0,Ee({query:r.query.q?decodeURIComponent(r.query.q):null,type:r.query.t,page:g.value,page_size:w.value}).then(l=>{h.value=!1,y.value=l.list,b.value=Math.ceil(l.pager.total_rows/w.value),window.scrollTo(0,0)}).catch(l=>{h.value=!1})},z=l=>{if(g.value!=1){L.push({name:"post",query:{id:l.id}});return}let v=[],k=y.value.length;k==w.value&&k--;for(var d=0;d<k;d++){let C=y.value[d];if(!C.is_top)break;v.push(C)}for(v.push(l);d<k;d++)v.push(y.value[d]);y.value=v},_=l=>{L.push({name:"home",query:{...r.query,p:l}})};return X(()=>{E()}),Ie(()=>({path:r.path,query:r.query,refresh:V.state.refresh}),(l,v)=>{if(l.refresh!==v.refresh){g.value=+r.query.p||1,setTimeout(()=>{E()},0);return}v.path!=="/post"&&l.path==="/"&&(g.value=+r.query.p||1,setTimeout(()=>{E()},0))}),(l,v)=>{const k=ot,d=wt,C=tt,x=$e,O=at,A=qe,M=We,F=et;return c(),f("div",null,[t(k,{title:q(U)},null,8,["title"]),t(M,{class:"main-content-wrap",bordered:""},{default:s(()=>[t(C,null,{default:s(()=>[t(d,{onPostSuccess:z})]),_:1}),h.value?(c(),f("div",bt,[t(x,{num:w.value},null,8,["num"])])):(c(),f("div",kt,[y.value.length===0?(c(),f("div",Ct,[t(O,{size:"large",description:"暂无数据"})])):T("",!0),(c(!0),f(Y,null,Z(y.value,B=>(c(),N(C,{key:B.id},{default:s(()=>[t(A,{post:B},null,8,["post"])]),_:2},1024))),128))]))]),_:1}),b.value>0?(c(),f("div",qt,[t(F,{page:g.value,"onUpdate:page":_,"page-slot":q(V).state.collapsedRight?5:8,"page-count":b.value},null,8,["page","page-slot","page-count"])])):T("",!0)])}}});const na=Re($t,[["__scopeId","data-v-936146f2"]]);export{na as default};
