import{_ as ye}from"./main-nav.vue_vue_type_style_index_0_lang-2ea8aeac.js";import{d as te,W as r,Y as m,Z as d,r as c,be as ee,a2 as ke,a4 as a,a5 as s,a6 as b,a7 as v,$ as be,ch as ae,bP as Ce,a3 as u,a9 as p,aa as q,bw as Ie,bo as $e,by as x,ci as Pe,cj as Ue,ck as Se,cl as Re,cm as qe,cn as xe,ae as Be,K as Ae,_ as Ne,af as ze,co as Ke,cp as De,cq as Fe,cr as Me,a8 as B,aB as je,aC as Ee,al as Te}from"./index-eae02f93.js";import{c as Ve}from"./Upload-c3141dde.js";import{_ as Le}from"./Alert-6350fa6b.js";import{_ as Oe}from"./InputGroup-585cc965.js";const We={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Ge=d("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[d("path",{d:"M9 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3"}),d("path",{d:"M9 15h3l8.5-8.5a1.5 1.5 0 0 0-3-3L9 12v3"}),d("path",{d:"M16 5l3 3"})],-1),He=[Ge],Je=te({name:"Edit",render:function(O,W){return r(),m("svg",We,He)}}),M=$=>(je("data-v-a681720e"),$=$(),Ee(),$),Ye={class:"base-line avatar"},Ze={class:"base-line"},Qe=M(()=>d("span",{class:"base-label"},"昵称",-1)),Xe={key:0},ea={class:"base-line"},aa=M(()=>d("span",{class:"base-label"},"用户名",-1)),ta={key:0},sa={key:1},na=M(()=>d("br",null,null,-1)),oa={key:2,class:"phone-bind-wrap"},la={class:"captcha-img-wrap"},ra={class:"captcha-img"},ia=["src"],ua={class:"form-submit-wrap"},da={key:0},ca={key:1},pa=M(()=>d("br",null,null,-1)),_a={key:2,class:"phone-bind-wrap"},va={class:"captcha-img-wrap"},ma={class:"captcha-img"},fa=["src"],ha={class:"form-submit-wrap"},ga={key:1,class:"phone-bind-wrap"},wa={class:"form-submit-wrap"},ya=te({__name:"Setting",setup($){const O="/v1/attachment",W="Bearer "+localStorage.getItem("PAOPAO_TOKEN"),A=c("public/avatar"),P="true".toLowerCase()==="true",se="false".toLowerCase()==="true",o=be(),U=c(!1),N=c(!1),z=c(!1),G=c(),H=c(),C=c(!1),K=c(!1),S=c(!1),R=c(!1),I=c(60),y=c(!1),k=c(!1),J=c(),Y=c(),Z=c(),Q=c(),t=ee({id:"",b64s:"",imgCaptcha:"",phone:"",phone_captcha:"",password:"",old_password:"",reenteredPassword:""}),i=ee({id:"",b64s:"",imgCaptcha:"",activate_code:""}),ne=async n=>{var e,f;return A.value==="public/avatar"&&!["image/png","image/jpg","image/jpeg"].includes((e=n.file.file)==null?void 0:e.type)?(window.$message.warning("头像仅允许 png/jpg 格式"),!1):A.value==="image"&&((f=n.file.file)==null?void 0:f.size)>1048576?(window.$message.warning("头像大小不能超过1MB"),!1):!0},oe=({file:n,event:e})=>{var f;try{let h=JSON.parse((f=e.target)==null?void 0:f.response);h.code===0&&A.value==="public/avatar"&&Pe({avatar:h.data.content}).then(_=>{var D;window.$message.success("头像更新成功"),(D=G.value)==null||D.clear(),o.commit("updateUserinfo",{...o.state.userInfo,avatar:h.data.content})}).catch(_=>{console.log(_)})}catch{window.$message.error("上传失败")}},le=(n,e)=>!!t.password&&t.password.startsWith(e)&&t.password.length>=e.length,re=(n,e)=>e===t.password,ie=()=>{var n;t.reenteredPassword&&((n=Q.value)==null||n.validate({trigger:"password-input"}))},ue=n=>{var e;n.preventDefault(),(e=Z.value)==null||e.validate(f=>{f||(K.value=!0,Ue({password:t.password,old_password:t.old_password}).then(h=>{K.value=!1,S.value=!1,window.$message.success("密码重置成功"),o.commit("userLogout"),o.commit("triggerAuth",!0),o.commit("triggerAuthKey","signin")}).catch(h=>{K.value=!1}))})},de=n=>{var e;n.preventDefault(),(e=J.value)==null||e.validate(f=>{f||(N.value=!0,Se({phone:t.phone,captcha:t.phone_captcha}).then(h=>{N.value=!1,y.value=!1,window.$message.success("绑定成功"),o.commit("updateUserinfo",{...o.state.userInfo,phone:t.phone}),t.id="",t.b64s="",t.imgCaptcha="",t.phone="",t.phone_captcha=""}).catch(h=>{N.value=!1}))})},ce=n=>{var e;n.preventDefault(),(e=Y.value)==null||e.validate(f=>{if(i.imgCaptcha===""){window.$message.warning("请输入图片验证码");return}U.value=!0,f||(z.value=!0,Re({activate_code:i.activate_code,captcha_id:i.id,imgCaptcha:i.imgCaptcha}).then(h=>{z.value=!1,k.value=!1,window.$message.success("激活成功"),o.commit("updateUserinfo",{...o.state.userInfo,activation:i.activate_code}),i.id="",i.b64s="",i.imgCaptcha="",i.activate_code=""}).catch(h=>{z.value=!1,h.code===20012&&E()}))})},j=()=>{ae().then(n=>{t.id=n.id,t.b64s=n.b64s}).catch(n=>{console.log(n)})},E=()=>{ae().then(n=>{i.id=n.id,i.b64s=n.b64s}).catch(n=>{console.log(n)})},pe=()=>{qe({nickname:o.state.userInfo.nickname||""}).then(n=>{C.value=!1,window.$message.success("昵称修改成功")}).catch(n=>{C.value=!0})},_e=()=>{if(!(I.value>0&&R.value)){if(t.imgCaptcha===""){window.$message.warning("请输入图片验证码");return}U.value=!0,xe({phone:t.phone,img_captcha:t.imgCaptcha,img_captcha_id:t.id}).then(n=>{R.value=!0,U.value=!1,window.$message.success("发送成功");let e=setInterval(()=>{I.value--,I.value===0&&(clearInterval(e),I.value=60,R.value=!1)},1e3)}).catch(n=>{U.value=!1,n.code===20012&&j(),console.log(n)})}},ve={phone:[{required:!0,message:"请输入手机号",trigger:["input"],validator:(n,e)=>/^[1]+[3-9]{1}\d{9}$/.test(e)}],phone_captcha:[{required:!0,message:"请输入手机验证码"}]},me={activate_code:[{required:!0,message:"请输入激活码",trigger:["input"],validator:(n,e)=>/\d{6}$/.test(e)}]},fe={password:[{required:!0,message:"请输入新密码"}],old_password:[{required:!0,message:"请输入旧密码"}],reenteredPassword:[{required:!0,message:"请再次输入密码",trigger:["input","blur"]},{validator:le,message:"两次密码输入不一致",trigger:"input"},{validator:re,message:"两次密码输入不一致",trigger:["blur","password-input"]}]},he=()=>{C.value=!0,setTimeout(()=>{var n;(n=H.value)==null||n.focus()},30)};return ke(()=>{o.state.userInfo.id===0&&(o.commit("triggerAuth",!0),o.commit("triggerAuthKey","signin")),j(),E()}),(n,e)=>{const f=ye,h=Be,_=Ae,D=Ve,g=Ne,ge=ze,F=Ce,X=Le,w=Ke,we=Oe,T=De,V=Fe,L=Me;return r(),m("div",null,[a(f,{title:"设置",theme:""}),a(F,{title:"基本信息",size:"small",class:"setting-card"},{default:s(()=>[d("div",Ye,[a(h,{class:"avatar-img",size:80,src:u(o).state.userInfo.avatar},null,8,["src"]),!P||P&&u(o).state.userInfo.phone&&u(o).state.userInfo.phone.length>0?(r(),b(D,{key:0,ref_key:"avatarRef",ref:G,action:O,headers:{Authorization:W},data:{type:A.value},onBeforeUpload:ne,onFinish:oe},{default:s(()=>[a(_,{size:"small"},{default:s(()=>[p("更改头像")]),_:1})]),_:1},8,["headers","data"])):v("",!0)]),d("div",Ze,[Qe,C.value?v("",!0):(r(),m("div",Xe,q(u(o).state.userInfo.nickname),1)),Ie(a(g,{ref_key:"inputInstRef",ref:H,class:"nickname-input",value:u(o).state.userInfo.nickname,"onUpdate:value":e[0]||(e[0]=l=>u(o).state.userInfo.nickname=l),type:"text",size:"small",placeholder:"请输入昵称",onBlur:pe,maxlength:16},null,8,["value"]),[[$e,C.value]]),!C.value&&(!P||P&&u(o).state.userInfo.phone&&u(o).state.userInfo.phone.length>0&&u(o).state.userInfo.status==1)?(r(),b(_,{key:1,quaternary:"",round:"",type:"success",size:"small",onClick:he},{icon:s(()=>[a(ge,null,{default:s(()=>[a(u(Je))]),_:1})]),_:1})):v("",!0)]),d("div",ea,[aa,p(" @"+q(u(o).state.userInfo.username),1)])]),_:1}),P?(r(),b(F,{key:0,title:"手机号",size:"small",class:"setting-card"},{default:s(()=>[u(o).state.userInfo.phone&&u(o).state.userInfo.phone.length>0?(r(),m("div",ta,[p(q(u(o).state.userInfo.phone)+" ",1),!y.value&&u(o).state.userInfo.status==1?(r(),b(_,{key:0,quaternary:"",round:"",type:"success",onClick:e[1]||(e[1]=l=>y.value=!0)},{default:s(()=>[p(" 换绑手机 ")]),_:1})):v("",!0)])):(r(),m("div",sa,[a(X,{title:"手机绑定提示",type:"warning"},{default:s(()=>[p(" 成功绑定手机后，才能进行换头像、发动态、回复等交互~"),na,y.value?v("",!0):(r(),m("a",{key:0,class:"hash-link",onClick:e[2]||(e[2]=l=>y.value=!0)}," 立即绑定 "))]),_:1})])),y.value?(r(),m("div",oa,[a(L,{ref_key:"phoneFormRef",ref:J,model:t,rules:ve},{default:s(()=>[a(w,{path:"phone",label:"手机号"},{default:s(()=>[a(g,{value:t.phone,"onUpdate:value":e[3]||(e[3]=l=>t.phone=l.trim()),placeholder:"请输入中国大陆手机号",onKeydown:e[4]||(e[4]=x(B(()=>{},["prevent"]),["enter"]))},null,8,["value"])]),_:1}),a(w,{path:"img_captcha",label:"图形验证码"},{default:s(()=>[d("div",la,[a(g,{value:t.imgCaptcha,"onUpdate:value":e[5]||(e[5]=l=>t.imgCaptcha=l),placeholder:"请输入图形验证码后获取验证码"},null,8,["value"]),d("div",ra,[t.b64s?(r(),m("img",{key:0,src:t.b64s,onClick:j},null,8,ia)):v("",!0)])])]),_:1}),a(w,{path:"phone_captcha",label:"短信验证码"},{default:s(()=>[a(we,null,{default:s(()=>[a(g,{value:t.phone_captcha,"onUpdate:value":e[6]||(e[6]=l=>t.phone_captcha=l),placeholder:"请输入收到的短信验证码"},null,8,["value"]),a(_,{type:"primary",ghost:"",disabled:R.value,loading:U.value,onClick:_e},{default:s(()=>[p(q(I.value>0&&R.value?I.value+"s后重新发送":"发送验证码"),1)]),_:1},8,["disabled","loading"])]),_:1})]),_:1}),a(V,{gutter:[0,24]},{default:s(()=>[a(T,{span:24},{default:s(()=>[d("div",ua,[a(_,{quaternary:"",round:"",onClick:e[7]||(e[7]=l=>y.value=!1)},{default:s(()=>[p(" 取消 ")]),_:1}),a(_,{secondary:"",round:"",type:"primary",loading:N.value,onClick:de},{default:s(()=>[p(" 绑定 ")]),_:1},8,["loading"])])]),_:1})]),_:1})]),_:1},8,["model"])])):v("",!0)]),_:1})):v("",!0),se?(r(),b(F,{key:1,title:"激活码",size:"small",class:"setting-card"},{default:s(()=>[u(o).state.userInfo.activation&&u(o).state.userInfo.activation.length>0?(r(),m("div",da,[p(q(u(o).state.userInfo.activation)+" ",1),k.value?v("",!0):(r(),b(_,{key:0,quaternary:"",round:"",type:"success",onClick:e[8]||(e[8]=l=>k.value=!0)},{default:s(()=>[p(" 重新激活 ")]),_:1}))])):(r(),m("div",ca,[a(X,{title:"激活码激活提示",type:"warning"},{default:s(()=>[p(" 成功激活后后，才能发（公开/好友可见）动态、回复~"),pa,k.value?v("",!0):(r(),m("a",{key:0,class:"hash-link",onClick:e[9]||(e[9]=l=>k.value=!0)}," 立即激活 "))]),_:1})])),k.value?(r(),m("div",_a,[a(L,{ref_key:"activateFormRef",ref:Y,model:i,rules:me},{default:s(()=>[a(w,{path:"activate_code",label:"激活码"},{default:s(()=>[a(g,{value:i.activate_code,"onUpdate:value":e[10]||(e[10]=l=>i.activate_code=l.trim()),placeholder:"请输入激活码",onKeydown:e[11]||(e[11]=x(B(()=>{},["prevent"]),["enter"]))},null,8,["value"])]),_:1}),a(w,{path:"img_captcha",label:"图形验证码"},{default:s(()=>[d("div",va,[a(g,{value:i.imgCaptcha,"onUpdate:value":e[12]||(e[12]=l=>i.imgCaptcha=l),placeholder:"请输入图形验证码后获取验证码"},null,8,["value"]),d("div",ma,[i.b64s?(r(),m("img",{key:0,src:i.b64s,onClick:E},null,8,fa)):v("",!0)])])]),_:1}),a(V,{gutter:[0,24]},{default:s(()=>[a(T,{span:24},{default:s(()=>[d("div",ha,[a(_,{quaternary:"",round:"",onClick:e[13]||(e[13]=l=>k.value=!1)},{default:s(()=>[p(" 取消 ")]),_:1}),a(_,{secondary:"",round:"",type:"primary",loading:z.value,onClick:ce},{default:s(()=>[p(" 激活 ")]),_:1},8,["loading"])])]),_:1})]),_:1})]),_:1},8,["model"])])):v("",!0)]),_:1})):v("",!0),a(F,{title:"账户安全",size:"small",class:"setting-card"},{default:s(()=>[p(" 您已设置密码 "),S.value?v("",!0):(r(),b(_,{key:0,quaternary:"",round:"",type:"success",onClick:e[14]||(e[14]=l=>S.value=!0)},{default:s(()=>[p(" 重置密码 ")]),_:1})),S.value?(r(),m("div",ga,[a(L,{ref_key:"formRef",ref:Z,model:t,rules:fe},{default:s(()=>[a(w,{path:"old_password",label:"旧密码"},{default:s(()=>[a(g,{value:t.old_password,"onUpdate:value":e[15]||(e[15]=l=>t.old_password=l),type:"password",placeholder:"请输入当前密码",onKeydown:e[16]||(e[16]=x(B(()=>{},["prevent"]),["enter"]))},null,8,["value"])]),_:1}),a(w,{path:"password",label:"新密码"},{default:s(()=>[a(g,{value:t.password,"onUpdate:value":e[17]||(e[17]=l=>t.password=l),type:"password",placeholder:"请输入新密码",onInput:ie,onKeydown:e[18]||(e[18]=x(B(()=>{},["prevent"]),["enter"]))},null,8,["value"])]),_:1}),a(w,{ref_key:"rPasswordFormItemRef",ref:Q,first:"",path:"reenteredPassword",label:"重复密码"},{default:s(()=>[a(g,{value:t.reenteredPassword,"onUpdate:value":e[19]||(e[19]=l=>t.reenteredPassword=l),disabled:!t.password,type:"password",placeholder:"请再次输入密码",onKeydown:e[20]||(e[20]=x(B(()=>{},["prevent"]),["enter"]))},null,8,["value","disabled"])]),_:1},512),a(V,{gutter:[0,24]},{default:s(()=>[a(T,{span:24},{default:s(()=>[d("div",wa,[a(_,{quaternary:"",round:"",onClick:e[21]||(e[21]=l=>S.value=!1)},{default:s(()=>[p(" 取消 ")]),_:1}),a(_,{secondary:"",round:"",type:"primary",loading:K.value,onClick:ue},{default:s(()=>[p(" 更新 ")]),_:1},8,["loading"])])]),_:1})]),_:1})]),_:1},8,["model"])])):v("",!0)]),_:1})])}}});const Pa=Te(ya,[["__scopeId","data-v-a681720e"]]);export{Pa as default};
