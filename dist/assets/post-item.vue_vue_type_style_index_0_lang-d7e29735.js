import{p as $,H,C as L,B as V,S as M,a as R,_ as j,b as D,c as I}from"./content-5125fd6e.js";import{d as P,ai as E,ak as F,$ as W,y as Y,aw as Z,W as i,Y as f,a4 as o,ay as A,a3 as t,a5 as a,ab as G,ac as J,a8 as v,Z as p,a9 as c,aa as r,a6 as _,a7 as l,ae as K,aL as Q,af as U,ah as X}from"./index-eae02f93.js";import{a as tt}from"./formatTime-0c777b4d.js";import{_ as et}from"./Thing-fd33e8eb.js";const st={class:"nickname-wrap"},at={class:"username-wrap"},nt={class:"timestamp"},ot=["innerHTML"],it={class:"opt-item"},ct={class:"opt-item"},rt={class:"opt-item"},_t={class:"opt-item"},dt=P({__name:"post-item",props:{post:null},setup(x){const C=x;E();const d=F(),z=W(),e=Y(()=>{let n=Object.assign({texts:[],imgs:[],videos:[],links:[],attachments:[],charge_attachments:[]},C.post);return n.contents.map(s=>{(+s.type==1||+s.type==2)&&n.texts.push(s),+s.type==3&&n.imgs.push(s),+s.type==4&&n.videos.push(s),+s.type==6&&n.links.push(s),+s.type==7&&n.attachments.push(s),+s.type==8&&n.charge_attachments.push(s)}),n}),k=n=>{d.push({name:"post",query:{id:n}})},b=(n,s)=>{if(n.target.dataset.detail){const u=n.target.dataset.detail.split(":");if(u.length===2){z.commit("refresh"),u[0]==="tag"?d.push({name:"home",query:{q:u[1],t:"tag"}}):d.push({name:"user",query:{username:u[1]}});return}}k(s)};return(n,s)=>{const u=K,w=Z("router-link"),h=Q,y=R,B=j,S=D,T=I,m=U,q=X,N=et;return i(),f("div",{class:"post-item",onClick:s[2]||(s[2]=g=>k(t(e).id))},[o(N,{"content-indented":""},A({avatar:a(()=>[o(u,{round:"",size:30,src:t(e).user.avatar},null,8,["src"])]),header:a(()=>[p("span",st,[o(w,{onClick:s[0]||(s[0]=v(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{username:t(e).user.username}}},{default:a(()=>[c(r(t(e).user.nickname),1)]),_:1},8,["to"])]),p("span",at," @"+r(t(e).user.username),1),t(e).is_top?(i(),_(h,{key:0,class:"top-tag",type:"warning",size:"small",round:""},{default:a(()=>[c(" 置顶 ")]),_:1})):l("",!0),t(e).visibility==1?(i(),_(h,{key:1,class:"top-tag",type:"error",size:"small",round:""},{default:a(()=>[c(" 私密 ")]),_:1})):l("",!0),t(e).visibility==2?(i(),_(h,{key:2,class:"top-tag",type:"info",size:"small",round:""},{default:a(()=>[c(" 好友可见 ")]),_:1})):l("",!0)]),"header-extra":a(()=>[p("span",nt,r(t(e).ip_loc?t(e).ip_loc+" · ":t(e).ip_loc)+" "+r(t(tt)(t(e).created_on)),1)]),footer:a(()=>[t(e).attachments.length>0?(i(),_(y,{key:0,attachments:t(e).attachments},null,8,["attachments"])):l("",!0),t(e).charge_attachments.length>0?(i(),_(y,{key:1,attachments:t(e).charge_attachments,price:t(e).attachment_price},null,8,["attachments","price"])):l("",!0),t(e).imgs.length>0?(i(),_(B,{key:2,imgs:t(e).imgs},null,8,["imgs"])):l("",!0),t(e).videos.length>0?(i(),_(S,{key:3,videos:t(e).videos},null,8,["videos"])):l("",!0),t(e).links.length>0?(i(),_(T,{key:4,links:t(e).links},null,8,["links"])):l("",!0)]),action:a(()=>[o(q,{justify:"space-between"},{default:a(()=>[p("div",it,[o(m,{size:"18",class:"opt-item-icon"},{default:a(()=>[o(t(H))]),_:1}),c(" "+r(t(e).upvote_count),1)]),p("div",ct,[o(m,{size:"18",class:"opt-item-icon"},{default:a(()=>[o(t(L))]),_:1}),c(" "+r(t(e).comment_count),1)]),p("div",rt,[o(m,{size:"18",class:"opt-item-icon"},{default:a(()=>[o(t(V))]),_:1}),c(" "+r(t(e).collection_count),1)]),p("div",_t,[o(m,{size:"18",class:"opt-item-icon"},{default:a(()=>[o(t(M))]),_:1}),c(" "+r(t(e).share_count),1)])]),_:1})]),_:2},[t(e).texts.length>0?{name:"description",fn:a(()=>[(i(!0),f(G,null,J(t(e).texts,g=>(i(),f("span",{key:g.id,class:"post-text",onClick:s[1]||(s[1]=v(O=>b(O,t(e).id),["stop"])),innerHTML:t($)(g.content).content},null,8,ot))),128))]),key:"0"}:void 0]),1024)])}}});export{dt as _};
