import{_ as Te,a as qe}from"./post-item.vue_vue_type_style_index_0_lang-5f11405c.js";import{_ as xe}from"./post-skeleton-90d64848.js";import{d as W,r as i,j as ee,o as c,c as v,Y as $,a as x,L as t,$ as s,K as P,O as T,a0 as Q,e as L,M as X,F as G,a2 as J,n as Ie,w as ze}from"./@vue-ca177dbe.js";import{u as te}from"./vuex-d28e9067.js";import{l as Y}from"./lodash-94eb5868.js";import{g as Ue,a as Re,c as Ae,b as Ee,_ as Le}from"./index-73bc78f0.js";import{p as Pe}from"./content-b78f505d.js";import{V as z,P as V}from"./IEnum-a180d93e.js";import{I as Se,V as Ne,A as Ve,d as Fe,E as Be}from"./@vicons-6d35273b.js";import{o as Me,v as Oe,j as je,e as De,w as He,x as Ke,y as Ge,z as Je,A as Ze,B as Qe,C as Xe,a as Ye,D as We,E as et,F as tt,G as at,H as ot,I as nt}from"./naive-ui-2035804c.js";import{_ as st}from"./main-nav.vue_vue_type_style_index_0_lang-07eb30dc.js";import{b as lt,u as it}from"./vue-router-88cc84d1.js";import"./formatTime-000dbebb.js";import"./moment-b7869f98.js";import"./copy-to-clipboard-1dd3075d.js";import"./toggle-selection-93f4ad84.js";import"./axios-4a70c6fc.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-973e5707.js";import"./evtd-b614532e.js";import"./@css-render-480a363d.js";import"./vooks-2c48c2b5.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";import"./nonesir-video-db921567.js";const rt=F=>{const q=new FileReader,r=_=>["application/zip","application/x-zip","application/octet-stream","application/x-zip-compressed"].includes(_),I=()=>{const _=new Uint8Array(q.result).subarray(0,4);let d="";for(let p=0;p<_.length;p++)d+=_[p].toString(16);switch(d){case"504b0304":case"504b0506":case"504b0708":return r("application/zip");case"504b030414":return r("application/x-zip-compressed");case"504b0508":return r("application/x-zip");case"504b5370":return r("application/octet-stream");default:return!1}};return new Promise((_,d)=>{q.onloadend=()=>{const p=F.type;_(p===""||p==="application/octet-stream"?I():r(p))},q.readAsArrayBuffer(F.slice(0,4))})},ut={key:0,class:"compose-wrap"},ct={class:"compose-line"},pt={class:"compose-user"},_t={class:"compose-line compose-options"},dt={class:"attachment"},mt={class:"submit-wrap"},vt={class:"attachment-list-wrap"},gt={key:0,class:"attachment-price-wrap"},ft=x("span",null," 附件价格￥",-1),yt={key:0,class:"eye-wrap"},ht={key:1,class:"link-wrap"},wt={key:1,class:"compose-wrap"},bt=x("div",{class:"login-wrap"},[x("span",{class:"login-banner"}," 登录后，精彩更多")],-1),kt={key:0,class:"login-only-wrap"},Ct={key:1,class:"login-wrap"},$t=W({__name:"compose",emits:["post-success"],setup(F,{emit:q}){const r=te(),I=i([]),_=i(!1),d=i(!1),p=i(!1),w=i(!1),b=i(""),U=i([]),E=i(),S=i(0),f=i("public/image"),u=i([]),h=i([]),k=i([]),y=i([]),C=i(z.FRIEND),R=i(z.FRIEND),M=[{value:z.PUBLIC,label:"公开"},{value:z.PRIVATE,label:"私密"},{value:z.FRIEND,label:"好友可见"}],N=+"300",B=i("true".toLowerCase()==="true"),O=i("true".toLowerCase()==="true"),j=i("true".toLowerCase()==="true"),A=i("false".toLowerCase()==="true"),ae=i("true".toLowerCase()==="true"),oe="/v1/attachment",Z=i(),ne=()=>{p.value=!p.value,p.value&&w.value&&(w.value=!1)},se=()=>{w.value=!w.value,w.value&&p.value&&(p.value=!1)},le=Y.debounce(a=>{Ue({k:a}).then(e=>{let n=[];e.suggest.map(o=>{n.push({label:o,value:o})}),I.value=n,_.value=!1}).catch(e=>{_.value=!1})},200),ie=Y.debounce(a=>{Re({k:a}).then(e=>{let n=[];e.suggest.map(o=>{n.push({label:o,value:o})}),I.value=n,_.value=!1}).catch(e=>{_.value=!1})},200),re=(a,e)=>{_.value||(_.value=!0,e==="@"?le(a):ie(a))},ue=a=>{a.length>N||(b.value=a)},D=a=>{f.value=a},ce=a=>{for(let l=0;l<a.length;l++){var e=a[l].name,n=e.split(".").slice(0,-1).join("."),o=e.split(".").pop();n.length>30&&(a[l].name=n.substring(0,18)+"..."+n.substring(n.length-9)+"."+o)}u.value=a},pe=async a=>{var e,n,o,l,g;return f.value==="public/image"&&!["image/png","image/jpg","image/jpeg","image/gif"].includes((e=a.file.file)==null?void 0:e.type)?(window.$message.warning("图片仅允许 png/jpg/gif 格式"),!1):f.value==="image"&&((n=a.file.file)==null?void 0:n.size)>10485760?(window.$message.warning("图片大小不能超过10MB"),!1):f.value==="public/video"&&!["video/mp4","video/quicktime"].includes((o=a.file.file)==null?void 0:o.type)?(window.$message.warning("视频仅允许 mp4/mov 格式"),!1):f.value==="public/video"&&((l=a.file.file)==null?void 0:l.size)>104857600?(window.$message.warning("视频大小不能超过100MB"),!1):f.value==="attachment"&&!await rt(a.file.file)?(window.$message.warning("附件仅允许 zip 格式"),!1):f.value==="attachment"&&((g=a.file.file)==null?void 0:g.size)>104857600?(window.$message.warning("附件大小不能超过100MB"),!1):!0},_e=({file:a,event:e})=>{var n;try{let o=JSON.parse((n=e.target)==null?void 0:n.response);o.code===0&&(f.value==="public/image"&&h.value.push({id:a.id,content:o.data.content}),f.value==="public/video"&&k.value.push({id:a.id,content:o.data.content}),f.value==="attachment"&&y.value.push({id:a.id,content:o.data.content}))}catch{window.$message.error("上传失败")}},de=({file:a,event:e})=>{var n;try{let o=JSON.parse((n=e.target)==null?void 0:n.response);if(o.code!==0){let l=o.msg||"上传失败";o.details&&o.details.length>0&&o.details.map(g=>{l+=":"+g}),window.$message.error(l)}}catch{window.$message.error("上传失败")}},me=({file:a})=>{let e=h.value.findIndex(n=>n.id===a.id);e>-1&&h.value.splice(e,1),e=k.value.findIndex(n=>n.id===a.id),e>-1&&k.value.splice(e,1),e=y.value.findIndex(n=>n.id===a.id),e>-1&&y.value.splice(e,1)},ve=()=>{if(b.value.trim().length===0){window.$message.warning("请输入内容哦");return}let{tags:a,users:e}=Pe(b.value);const n=[];let o=100;n.push({content:b.value,type:V.TEXT,sort:o}),h.value.map(l=>{o++,n.push({content:l.content,type:V.IMAGEURL,sort:o})}),k.value.map(l=>{o++,n.push({content:l.content,type:V.VIDEOURL,sort:o})}),y.value.map(l=>{o++,n.push({content:l.content,type:V.ATTACHMENT,sort:o})}),U.value.length>0&&U.value.map(l=>{o++,n.push({content:l,type:V.LINKURL,sort:o})}),d.value=!0,Ae({contents:n,tags:Array.from(new Set(a)),users:Array.from(new Set(e)),attachment_price:+S.value*100,visibility:C.value}).then(l=>{var g;window.$message.success("发布成功"),d.value=!1,q("post-success",l),p.value=!1,w.value=!1,(g=E.value)==null||g.clear(),u.value=[],b.value="",U.value=[],h.value=[],k.value=[],y.value=[],C.value=R.value}).catch(l=>{d.value=!1})},H=a=>{r.commit("triggerAuth",!0),r.commit("triggerAuthKey",a)};return ee(()=>{"friend".toLowerCase()==="friend"?R.value=z.FRIEND:"friend".toLowerCase()==="public"?R.value=z.PUBLIC:R.value=z.PRIVATE,C.value=R.value,Z.value="Bearer "+localStorage.getItem("PAOPAO_TOKEN")}),(a,e)=>{const n=Me,o=Oe,l=je,g=De,K=He,ge=Ke,fe=Ge,ye=Je,he=Ze,we=Qe,be=Xe,ke=Ye,Ce=We,$e=et;return c(),v("div",null,[$(r).state.userInfo.id>0?(c(),v("div",ut,[x("div",ct,[x("div",pt,[t(n,{round:"",size:30,src:$(r).state.userInfo.avatar},null,8,["src"])]),t(o,{type:"textarea",size:"large",autosize:"",bordered:!1,loading:_.value,value:b.value,prefix:["@","#"],options:I.value,onSearch:re,"onUpdate:value":ue,placeholder:"说说您的新鲜事..."},null,8,["loading","value","options"])]),t(we,{ref_key:"uploadRef",ref:E,abstract:"","list-type":"image",multiple:!0,max:9,action:oe,headers:{Authorization:Z.value},data:{type:f.value},"file-list":u.value,onBeforeUpload:pe,onFinish:_e,onError:de,onRemove:me,"onUpdate:fileList":ce},{default:s(()=>[x("div",_t,[x("div",dt,[t(K,{abstract:""},{default:s(({handleClick:m})=>[t(g,{disabled:u.value.length>0&&f.value==="public/video"||u.value.length===9,onClick:()=>{D("public/image"),m()},quaternary:"",circle:"",type:"primary"},{icon:s(()=>[t(l,{size:"20",color:"var(--primary-color)"},{default:s(()=>[t($(Se))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1}),O.value?(c(),P(K,{key:0,abstract:""},{default:s(({handleClick:m})=>[t(g,{disabled:u.value.length>0&&f.value!=="public/video"||u.value.length===9,onClick:()=>{D("public/video"),m()},quaternary:"",circle:"",type:"primary"},{icon:s(()=>[t(l,{size:"20",color:"var(--primary-color)"},{default:s(()=>[t($(Ne))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1})):T("",!0),j.value?(c(),P(K,{key:1,abstract:""},{default:s(({handleClick:m})=>[t(g,{disabled:u.value.length>0&&f.value==="public/video"||u.value.length===9,onClick:()=>{D("attachment"),m()},quaternary:"",circle:"",type:"primary"},{icon:s(()=>[t(l,{size:"20",color:"var(--primary-color)"},{default:s(()=>[t($(Ve))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1})):T("",!0),t(g,{quaternary:"",circle:"",type:"primary",onClick:Q(ne,["stop"])},{icon:s(()=>[t(l,{size:"20",color:"var(--primary-color)"},{default:s(()=>[t($(Fe))]),_:1})]),_:1},8,["onClick"]),ae.value?(c(),P(g,{key:2,quaternary:"",circle:"",type:"primary",onClick:Q(se,["stop"])},{icon:s(()=>[t(l,{size:"20",color:"var(--primary-color)"},{default:s(()=>[t($(Be))]),_:1})]),_:1},8,["onClick"])):T("",!0)]),x("div",mt,[t(fe,{trigger:"hover",placement:"bottom"},{trigger:s(()=>[t(ge,{class:"text-statistic",type:"circle","show-indicator":!1,status:"success","stroke-width":10,percentage:b.value.length/$(N)*100},null,8,["percentage"])]),default:s(()=>[L(" "+X(b.value.length)+" / "+X($(N)),1)]),_:1}),t(g,{loading:d.value,onClick:ve,type:"primary",secondary:"",round:""},{default:s(()=>[L(" 发布 ")]),_:1},8,["loading"])])]),x("div",vt,[t(ye),y.value.length>0?(c(),v("div",gt,[A.value?(c(),P(he,{key:0,value:S.value,"onUpdate:value":e[0]||(e[0]=m=>S.value=m),min:0,max:1e5,placeholder:"请输入附件价格，0为免费附件"},{prefix:s(()=>[ft]),_:1},8,["value"])):T("",!0)])):T("",!0)])]),_:1},8,["headers","data","file-list"]),w.value?(c(),v("div",yt,[t(Ce,{value:C.value,"onUpdate:value":e[1]||(e[1]=m=>C.value=m),name:"radiogroup"},{default:s(()=>[t(ke,null,{default:s(()=>[(c(),v(G,null,J(M,m=>t(be,{key:m.value,value:m.value,label:m.label},null,8,["value","label"])),64))]),_:1})]),_:1},8,["value"])])):T("",!0),p.value?(c(),v("div",ht,[t($e,{value:U.value,"onUpdate:value":e[2]||(e[2]=m=>U.value=m),placeholder:"请输入以http(s)://开头的链接",min:0,max:3},{"create-button-default":s(()=>[L(" 创建链接 ")]),_:1},8,["value"])])):T("",!0)])):(c(),v("div",wt,[bt,B.value?T("",!0):(c(),v("div",kt,[t(g,{strong:"",secondary:"",round:"",type:"primary",onClick:e[3]||(e[3]=m=>H("signin"))},{default:s(()=>[L(" 登录 ")]),_:1})])),B.value?(c(),v("div",Ct,[t(g,{strong:"",secondary:"",round:"",type:"primary",onClick:e[4]||(e[4]=m=>H("signin"))},{default:s(()=>[L(" 登录 ")]),_:1}),t(g,{strong:"",secondary:"",round:"",type:"info",onClick:e[5]||(e[5]=m=>H("signup"))},{default:s(()=>[L(" 注册 ")]),_:1})])):T("",!0)]))])}}});const Tt={key:0,class:"skeleton-wrap"},qt={key:1},xt={key:0,class:"empty-wrap"},It={key:1},zt={key:2},Ut={key:0,class:"pagination-wrap"},Rt=W({__name:"Home",setup(F){const q=te(),r=lt(),I=it(),_=i(!1),d=i([]),p=i(+r.query.p||1),w=i(20),b=i(0),U=Ie(()=>{let u="泡泡广场";return r.query&&r.query.q&&(r.query.t&&r.query.t==="tag"?u="#"+decodeURIComponent(r.query.q):u="搜索: "+decodeURIComponent(r.query.q)),u}),E=()=>{_.value=!0,Ee({query:r.query.q?decodeURIComponent(r.query.q):null,type:r.query.t,page:p.value,page_size:w.value}).then(u=>{_.value=!1,d.value=u.list,b.value=Math.ceil(u.pager.total_rows/w.value),window.scrollTo(0,0)}).catch(u=>{_.value=!1})},S=u=>{if(p.value!=1){I.push({name:"post",query:{id:u.id}});return}let h=[],k=d.value.length;k==w.value&&k--;for(var y=0;y<k;y++){let C=d.value[y];if(!C.is_top)break;h.push(C)}for(h.push(u);y<k;y++)h.push(d.value[y]);d.value=h},f=u=>{I.push({name:"home",query:{...r.query,p:u}})};return ee(()=>{E()}),ze(()=>({path:r.path,query:r.query,refresh:q.state.refresh}),(u,h)=>{if(u.refresh!==h.refresh){p.value=+r.query.p||1,setTimeout(()=>{E()},0);return}h.path!=="/post"&&u.path==="/"&&(p.value=+r.query.p||1,setTimeout(()=>{E()},0))}),(u,h)=>{const k=st,y=$t,C=ot,R=xe,M=nt,N=Te,B=qe,O=tt,j=at;return c(),v("div",null,[t(k,{title:$(U)},null,8,["title"]),t(O,{class:"main-content-wrap",bordered:""},{default:s(()=>[t(C,null,{default:s(()=>[t(y,{onPostSuccess:S})]),_:1}),_.value?(c(),v("div",Tt,[t(R,{num:w.value},null,8,["num"])])):(c(),v("div",qt,[d.value.length===0?(c(),v("div",xt,[t(M,{size:"large",description:"暂无数据"})])):T("",!0),$(q).state.desktopModelShow?(c(),v("div",It,[(c(!0),v(G,null,J(d.value,A=>(c(),P(C,{key:A.id},{default:s(()=>[t(N,{post:A},null,8,["post"])]),_:2},1024))),128))])):(c(),v("div",zt,[(c(!0),v(G,null,J(d.value,A=>(c(),P(C,{key:A.id},{default:s(()=>[t(B,{post:A},null,8,["post"])]),_:2},1024))),128))]))]))]),_:1}),b.value>0?(c(),v("div",Ut,[t(j,{page:p.value,"onUpdate:page":f,"page-slot":$(q).state.collapsedRight?5:8,"page-count":b.value},null,8,["page","page-slot","page-count"])])):T("",!0)])}}});const ca=Le(Rt,[["__scopeId","data-v-f42b0645"]]);export{ca as default};
