import{Z as b,_ as k}from"./index-83d7d999.js";import{d as B,H as p,e as C,q as N,w as s,j as a,k as n,A as _,x as i}from"./@vue-a481fc63.js";import{S as U,I as V,T as z,b as I,e as R,i as S}from"./naive-ui-eecf2ec3.js";const T={class:"whisper-wrap"},W={class:"whisper-line"},$={class:"whisper-line send-wrap"},j=B({__name:"whisper",props:{show:{type:Boolean,default:!1},user:{}},emits:["success"],setup(r,{emit:u}){const d=r,o=p(""),t=p(!1),c=()=>{u("success")},m=()=>{t.value=!0,b({user_id:d.user.id,content:o.value}).then(e=>{window.$message.success("发送成功"),t.value=!1,o.value="",c()}).catch(e=>{t.value=!1})};return(e,l)=>{const h=U,w=V,f=z,v=I,g=R,y=S;return C(),N(y,{show:e.show,"onUpdate:show":c,class:"whisper-card",preset:"card",size:"small",title:"私信","mask-closable":!1,bordered:!1,style:{width:"360px"}},{default:s(()=>[a("div",T,[n(f,{"show-icon":!1},{default:s(()=>[_(" 即将发送私信给: "),n(w,{style:{"max-width":"100%"}},{default:s(()=>[n(h,{type:"success"},{default:s(()=>[_(i(e.user.nickname)+"@"+i(e.user.username),1)]),_:1})]),_:1})]),_:1}),a("div",W,[n(v,{type:"textarea",placeholder:"请输入私信内容（请勿发送不和谐内容，否则将会被封号）",autosize:{minRows:5,maxRows:10},value:o.value,"onUpdate:value":l[0]||(l[0]=x=>o.value=x),maxlength:"200","show-count":""},null,8,["value"])]),a("div",$,[n(g,{strong:"",secondary:"",type:"primary",loading:t.value,onClick:m},{default:s(()=>[_(" 发送 ")]),_:1},8,["loading"])])])]),_:1},8,["show"])}}});const H=k(j,[["__scopeId","data-v-0cbfe47c"]]);export{H as _};
