import{d as Y,H as k,R as oe,b as G,e as w,q as K,w as a,j as y,k as s,f as C,A as S,Z as q,y as N,Y as $,bf as f,c as J,E as Z,r as me,F as se,u as ne,x as A,h as P,a5 as Pe,s as re,l as Le,ag as Oe}from"./@vue-a481fc63.js";import{c as Te,a as Ae,u as pe,b as Ce}from"./vue-router-e5a2430e.js";import{c as Ee,u as B}from"./vuex-44de225f.js";import{a as Ie}from"./axios-4a70c6fc.js";import{_ as Re,N as Me,a as _e,b as he,c as $e,d as Ue,e as ge,f as Se,g as De,h as fe,i as xe,j as W,k as qe,u as Ne,l as Ke,m as Fe,n as Ve,o as ze,p as He,q as We,r as Ye,s as Be,t as je}from"./naive-ui-eecf2ec3.js";import{h as D}from"./moment-2ab8298d.js";import{S as Qe,M as Ze,L as Ge,C as Je,B as Xe,P as et,W as tt,a as ot,H as ae,b as le,c as ue}from"./@vicons-f0266f88.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-7c8d4b48.js";import"./evtd-b614532e.js";import"./@css-render-7124a1a5.js";import"./vooks-6d99783e.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}})();const st="modulepreload",nt=function(e){return"/"+e},ie={},T=function(t,r,c){if(!r||r.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(r.map(n=>{if(n=nt(n),n in ie)return;ie[n]=!0;const m=n.endsWith(".css"),d=m?'[rel="stylesheet"]':"";if(!!c)for(let b=i.length-1;b>=0;b--){const _=i[b];if(_.href===n&&(!m||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${d}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":st,m||(v.as="script",v.crossOrigin=""),v.href=n,document.head.appendChild(v),m)return new Promise((b,_)=>{v.addEventListener("load",b),v.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t()).catch(n=>{const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=n,window.dispatchEvent(m),!m.defaultPrevented)throw n})},rt=[{path:"/",name:"home",meta:{title:"广场",keepAlive:!0},component:()=>T(()=>import("./Home-8f332f80.js"),["assets/Home-8f332f80.js","assets/whisper-add-friend-a089fe49.js","assets/naive-ui-eecf2ec3.js","assets/seemly-76b7b838.js","assets/@vue-a481fc63.js","assets/vueuc-7c8d4b48.js","assets/evtd-b614532e.js","assets/@css-render-7124a1a5.js","assets/vooks-6d99783e.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/whisper-add-friend-01aea97d.css","assets/whisper-a49b30ec.js","assets/whisper-61451957.css","assets/post-item.vue_vue_type_style_index_0_lang-a1344ccc.js","assets/content-ce222c7b.js","assets/@vicons-f0266f88.js","assets/paopao-video-player-2fe58954.js","assets/content-2fda112b.css","assets/vuex-44de225f.js","assets/vue-router-e5a2430e.js","assets/copy-to-clipboard-4ef7d3eb.js","assets/@babel-725317a4.js","assets/toggle-selection-93f4ad84.js","assets/post-item-d81938d1.css","assets/post-skeleton-52dd5817.js","assets/post-skeleton-f1900002.css","assets/lodash-e0b37ac3.js","assets/IEnum-5453a777.js","assets/main-nav.vue_vue_type_style_index_0_lang-ace3749f.js","assets/main-nav-569a7b0c.css","assets/v3-infinite-loading-2c58ec2f.js","assets/v3-infinite-loading-1ff9ffe7.css","assets/@opentiny-d73a2d67.js","assets/vue-1e3b54ec.js","assets/xss-a5544f63.js","assets/cssfilter-af71ba68.js","assets/@opentiny-0f942bd4.css","assets/axios-4a70c6fc.js","assets/moment-2ab8298d.js","assets/Home-76ff8b7e.css","assets/vfonts-7afd136d.css"])},{path:"/post",name:"post",meta:{title:"泡泡详情"},component:()=>T(()=>import("./Post-caa8362e.js"),["assets/Post-caa8362e.js","assets/@vue-a481fc63.js","assets/vuex-44de225f.js","assets/IEnum-5453a777.js","assets/@vicons-f0266f88.js","assets/naive-ui-eecf2ec3.js","assets/seemly-76b7b838.js","assets/vueuc-7c8d4b48.js","assets/evtd-b614532e.js","assets/@css-render-7124a1a5.js","assets/vooks-6d99783e.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/content-ce222c7b.js","assets/paopao-video-player-2fe58954.js","assets/content-2fda112b.css","assets/vue-router-e5a2430e.js","assets/post-skeleton-52dd5817.js","assets/post-skeleton-f1900002.css","assets/lodash-e0b37ac3.js","assets/@babel-725317a4.js","assets/whisper-a49b30ec.js","assets/whisper-61451957.css","assets/copy-to-clipboard-4ef7d3eb.js","assets/toggle-selection-93f4ad84.js","assets/main-nav.vue_vue_type_style_index_0_lang-ace3749f.js","assets/main-nav-569a7b0c.css","assets/v3-infinite-loading-2c58ec2f.js","assets/v3-infinite-loading-1ff9ffe7.css","assets/axios-4a70c6fc.js","assets/moment-2ab8298d.js","assets/Post-137ee336.css","assets/vfonts-7afd136d.css"])},{path:"/topic",name:"topic",meta:{title:"话题"},component:()=>T(()=>import("./Topic-c82c2d65.js"),["assets/Topic-c82c2d65.js","assets/@vicons-f0266f88.js","assets/@vue-a481fc63.js","assets/naive-ui-eecf2ec3.js","assets/seemly-76b7b838.js","assets/vueuc-7c8d4b48.js","assets/evtd-b614532e.js","assets/@css-render-7124a1a5.js","assets/vooks-6d99783e.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/main-nav.vue_vue_type_style_index_0_lang-ace3749f.js","assets/vuex-44de225f.js","assets/vue-router-e5a2430e.js","assets/main-nav-569a7b0c.css","assets/axios-4a70c6fc.js","assets/moment-2ab8298d.js","assets/Topic-384e019e.css","assets/vfonts-7afd136d.css"])},{path:"/anouncement",name:"anouncement",meta:{title:"公告"},component:()=>T(()=>import("./Anouncement-4a7c807f.js"),["assets/Anouncement-4a7c807f.js","assets/post-skeleton-52dd5817.js","assets/naive-ui-eecf2ec3.js","assets/seemly-76b7b838.js","assets/@vue-a481fc63.js","assets/vueuc-7c8d4b48.js","assets/evtd-b614532e.js","assets/@css-render-7124a1a5.js","assets/vooks-6d99783e.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-ace3749f.js","assets/vuex-44de225f.js","assets/vue-router-e5a2430e.js","assets/@vicons-f0266f88.js","assets/main-nav-569a7b0c.css","assets/axios-4a70c6fc.js","assets/moment-2ab8298d.js","assets/Anouncement-662e2d95.css","assets/vfonts-7afd136d.css"])},{path:"/profile",name:"profile",meta:{title:"主页"},component:()=>T(()=>import("./Profile-e9cc5bab.js"),["assets/Profile-e9cc5bab.js","assets/whisper-a49b30ec.js","assets/@vue-a481fc63.js","assets/naive-ui-eecf2ec3.js","assets/seemly-76b7b838.js","assets/vueuc-7c8d4b48.js","assets/evtd-b614532e.js","assets/@css-render-7124a1a5.js","assets/vooks-6d99783e.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/whisper-61451957.css","assets/post-item.vue_vue_type_style_index_0_lang-a1344ccc.js","assets/content-ce222c7b.js","assets/@vicons-f0266f88.js","assets/paopao-video-player-2fe58954.js","assets/content-2fda112b.css","assets/vuex-44de225f.js","assets/vue-router-e5a2430e.js","assets/copy-to-clipboard-4ef7d3eb.js","assets/@babel-725317a4.js","assets/toggle-selection-93f4ad84.js","assets/post-item-d81938d1.css","assets/post-skeleton-52dd5817.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-ace3749f.js","assets/main-nav-569a7b0c.css","assets/v3-infinite-loading-2c58ec2f.js","assets/v3-infinite-loading-1ff9ffe7.css","assets/axios-4a70c6fc.js","assets/moment-2ab8298d.js","assets/Profile-5fc46d20.css","assets/vfonts-7afd136d.css"])},{path:"/u",name:"user",meta:{title:"用户详情"},component:()=>T(()=>import("./User-56241649.js"),["assets/User-56241649.js","assets/post-item.vue_vue_type_style_index_0_lang-a1344ccc.js","assets/content-ce222c7b.js","assets/@vue-a481fc63.js","assets/@vicons-f0266f88.js","assets/naive-ui-eecf2ec3.js","assets/seemly-76b7b838.js","assets/vueuc-7c8d4b48.js","assets/evtd-b614532e.js","assets/@css-render-7124a1a5.js","assets/vooks-6d99783e.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/paopao-video-player-2fe58954.js","assets/content-2fda112b.css","assets/vuex-44de225f.js","assets/vue-router-e5a2430e.js","assets/copy-to-clipboard-4ef7d3eb.js","assets/@babel-725317a4.js","assets/toggle-selection-93f4ad84.js","assets/post-item-d81938d1.css","assets/post-skeleton-52dd5817.js","assets/post-skeleton-f1900002.css","assets/whisper-a49b30ec.js","assets/whisper-61451957.css","assets/main-nav.vue_vue_type_style_index_0_lang-ace3749f.js","assets/main-nav-569a7b0c.css","assets/whisper-add-friend-a089fe49.js","assets/whisper-add-friend-01aea97d.css","assets/v3-infinite-loading-2c58ec2f.js","assets/v3-infinite-loading-1ff9ffe7.css","assets/axios-4a70c6fc.js","assets/moment-2ab8298d.js","assets/User-4853e1bd.css","assets/vfonts-7afd136d.css"])},{path:"/messages",name:"messages",meta:{title:"消息"},component:()=>T(()=>import("./Messages-77b3ecb5.js"),["assets/Messages-77b3ecb5.js","assets/@vue-a481fc63.js","assets/vuex-44de225f.js","assets/vue-router-e5a2430e.js","assets/@vicons-f0266f88.js","assets/naive-ui-eecf2ec3.js","assets/seemly-76b7b838.js","assets/vueuc-7c8d4b48.js","assets/evtd-b614532e.js","assets/@css-render-7124a1a5.js","assets/vooks-6d99783e.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/whisper-a49b30ec.js","assets/whisper-61451957.css","assets/main-nav.vue_vue_type_style_index_0_lang-ace3749f.js","assets/main-nav-569a7b0c.css","assets/v3-infinite-loading-2c58ec2f.js","assets/v3-infinite-loading-1ff9ffe7.css","assets/axios-4a70c6fc.js","assets/moment-2ab8298d.js","assets/Messages-95307a34.css","assets/vfonts-7afd136d.css"])},{path:"/collection",name:"collection",meta:{title:"收藏"},component:()=>T(()=>import("./Collection-461838a4.js"),["assets/Collection-461838a4.js","assets/whisper-a49b30ec.js","assets/@vue-a481fc63.js","assets/naive-ui-eecf2ec3.js","assets/seemly-76b7b838.js","assets/vueuc-7c8d4b48.js","assets/evtd-b614532e.js","assets/@css-render-7124a1a5.js","assets/vooks-6d99783e.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/whisper-61451957.css","assets/post-item.vue_vue_type_style_index_0_lang-a1344ccc.js","assets/content-ce222c7b.js","assets/@vicons-f0266f88.js","assets/paopao-video-player-2fe58954.js","assets/content-2fda112b.css","assets/vuex-44de225f.js","assets/vue-router-e5a2430e.js","assets/copy-to-clipboard-4ef7d3eb.js","assets/@babel-725317a4.js","assets/toggle-selection-93f4ad84.js","assets/post-item-d81938d1.css","assets/post-skeleton-52dd5817.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-ace3749f.js","assets/main-nav-569a7b0c.css","assets/v3-infinite-loading-2c58ec2f.js","assets/v3-infinite-loading-1ff9ffe7.css","assets/axios-4a70c6fc.js","assets/moment-2ab8298d.js","assets/Collection-a1f12801.css","assets/vfonts-7afd136d.css"])},{path:"/contacts",name:"contacts",meta:{title:"好友"},component:()=>T(()=>import("./Contacts-c9f9749e.js"),["assets/Contacts-c9f9749e.js","assets/whisper-a49b30ec.js","assets/@vue-a481fc63.js","assets/naive-ui-eecf2ec3.js","assets/seemly-76b7b838.js","assets/vueuc-7c8d4b48.js","assets/evtd-b614532e.js","assets/@css-render-7124a1a5.js","assets/vooks-6d99783e.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/whisper-61451957.css","assets/@vicons-f0266f88.js","assets/post-skeleton-52dd5817.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-ace3749f.js","assets/vuex-44de225f.js","assets/vue-router-e5a2430e.js","assets/main-nav-569a7b0c.css","assets/v3-infinite-loading-2c58ec2f.js","assets/v3-infinite-loading-1ff9ffe7.css","assets/axios-4a70c6fc.js","assets/moment-2ab8298d.js","assets/Contacts-c993e2de.css","assets/vfonts-7afd136d.css"])},{path:"/following",name:"following",meta:{title:"关注"},component:()=>T(()=>import("./Following-3c24dad7.js"),["assets/Following-3c24dad7.js","assets/whisper-a49b30ec.js","assets/@vue-a481fc63.js","assets/naive-ui-eecf2ec3.js","assets/seemly-76b7b838.js","assets/vueuc-7c8d4b48.js","assets/evtd-b614532e.js","assets/@css-render-7124a1a5.js","assets/vooks-6d99783e.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/whisper-61451957.css","assets/vue-router-e5a2430e.js","assets/@vicons-f0266f88.js","assets/post-skeleton-52dd5817.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-ace3749f.js","assets/vuex-44de225f.js","assets/main-nav-569a7b0c.css","assets/v3-infinite-loading-2c58ec2f.js","assets/v3-infinite-loading-1ff9ffe7.css","assets/axios-4a70c6fc.js","assets/moment-2ab8298d.js","assets/Following-c2ff25f8.css","assets/vfonts-7afd136d.css"])},{path:"/wallet",name:"wallet",meta:{title:"钱包"},component:()=>T(()=>import("./Wallet-a45eba56.js"),["assets/Wallet-a45eba56.js","assets/post-skeleton-52dd5817.js","assets/naive-ui-eecf2ec3.js","assets/seemly-76b7b838.js","assets/@vue-a481fc63.js","assets/vueuc-7c8d4b48.js","assets/evtd-b614532e.js","assets/@css-render-7124a1a5.js","assets/vooks-6d99783e.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-ace3749f.js","assets/vuex-44de225f.js","assets/vue-router-e5a2430e.js","assets/@vicons-f0266f88.js","assets/main-nav-569a7b0c.css","assets/qrcode-9719fc56.js","assets/encode-utf8-f813de00.js","assets/dijkstrajs-f906a09e.js","assets/axios-4a70c6fc.js","assets/moment-2ab8298d.js","assets/Wallet-77044929.css","assets/vfonts-7afd136d.css"])},{path:"/setting",name:"setting",meta:{title:"设置"},component:()=>T(()=>import("./Setting-7f380165.js"),["assets/Setting-7f380165.js","assets/main-nav.vue_vue_type_style_index_0_lang-ace3749f.js","assets/vuex-44de225f.js","assets/@vue-a481fc63.js","assets/vue-router-e5a2430e.js","assets/vooks-6d99783e.js","assets/evtd-b614532e.js","assets/@vicons-f0266f88.js","assets/naive-ui-eecf2ec3.js","assets/seemly-76b7b838.js","assets/vueuc-7c8d4b48.js","assets/@css-render-7124a1a5.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/main-nav-569a7b0c.css","assets/axios-4a70c6fc.js","assets/moment-2ab8298d.js","assets/Setting-bfd24152.css","assets/vfonts-7afd136d.css"])},{path:"/404",name:"404",meta:{title:"404"},component:()=>T(()=>import("./404-26df6a69.js"),["assets/404-26df6a69.js","assets/main-nav.vue_vue_type_style_index_0_lang-ace3749f.js","assets/vuex-44de225f.js","assets/@vue-a481fc63.js","assets/vue-router-e5a2430e.js","assets/vooks-6d99783e.js","assets/evtd-b614532e.js","assets/@vicons-f0266f88.js","assets/naive-ui-eecf2ec3.js","assets/seemly-76b7b838.js","assets/vueuc-7c8d4b48.js","assets/@css-render-7124a1a5.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/main-nav-569a7b0c.css","assets/axios-4a70c6fc.js","assets/moment-2ab8298d.js","assets/404-020b2afd.css","assets/vfonts-7afd136d.css"])},{path:"/:pathMatch(.*)",redirect:"/404"}],ve=Te({history:Ae(),routes:rt});ve.beforeEach((e,t,r)=>{document.title=`${e.meta.title} | 泡泡 - 一个清新文艺的微社区`,r()});const at=Ee({state:{refresh:Date.now(),refreshTopicFollow:Date.now(),theme:localStorage.getItem("PAOPAO_THEME"),collapsedLeft:document.body.clientWidth<=821,collapsedRight:document.body.clientWidth<=821,drawerModelShow:document.body.clientWidth<=821,desktopModelShow:document.body.clientWidth>821,authModalShow:!1,authModelTab:"signin",unreadMsgCount:0,userLogined:!1,userInfo:{id:0,username:"",nickname:"",created_on:0,follows:0,followings:0,is_admin:!1}},mutations:{refresh(e,t){e.refresh=t||Date.now()},refreshTopicFollow(e){e.refreshTopicFollow=Date.now()},updateUnreadMsgCount(e,t){e.unreadMsgCount=t},triggerTheme(e,t){e.theme=t},triggerAuth(e,t){e.authModalShow=t},triggerAuthKey(e,t){e.authModelTab=t},triggerCollapsedLeft(e,t){e.collapsedLeft=t,e.drawerModelShow=t,e.desktopModelShow=!t},triggerCollapsedRight(e,t){e.collapsedRight=t},updateUserinfo(e,t){e.userInfo=t,e.userInfo.id>0&&(e.userLogined=!0)},userLogout(e){localStorage.removeItem("PAOPAO_TOKEN"),e.userInfo={id:0,nickname:"",username:"",created_on:0,follows:0,followings:0,is_admin:!1},e.userLogined=!1}},actions:{},modules:{}}),X=Ie.create({baseURL:"https://okbiu.com",timeout:3e4});X.interceptors.request.use(e=>(localStorage.getItem("PAOPAO_TOKEN")&&(e.headers.Authorization="Bearer "+localStorage.getItem("PAOPAO_TOKEN")),e),e=>Promise.reject(e));X.interceptors.response.use(e=>{const{data:t={},code:r=0}=(e==null?void 0:e.data)||{};if(+r==0)return t||{};Promise.reject((e==null?void 0:e.data)||{})},(e={})=>{var r;const{response:t={}}=e||{};return+(t==null?void 0:t.status)==401?(localStorage.removeItem("PAOPAO_TOKEN"),(t==null?void 0:t.data.code)!==10005?window.$message.warning((t==null?void 0:t.data.msg)||"鉴权失败"):window.$store.commit("triggerAuth",!0)):window.$message.error(((r=t==null?void 0:t.data)==null?void 0:r.msg)||"请求失败"),Promise.reject((t==null?void 0:t.data)||{})});function o(e){return X(e)}const ce=e=>o({method:"post",url:"/v1/auth/login",data:e}),lt=e=>o({method:"post",url:"/v1/auth/register",data:e}),Q=(e="")=>o({method:"get",url:"/v1/user/info",headers:{Authorization:`Bearer ${e}`}}),ut={class:"auth-wrap"},it={key:0},ct=Y({__name:"auth",setup(e){const t=k("true".toLowerCase()==="true"),r=B(),c=k(!1),i=k(),n=oe({username:"",password:""}),m=k(),d=oe({username:"",password:"",repassword:""}),U={username:{required:!0,message:"请输入账户名"},password:{required:!0,message:"请输入密码"},repassword:[{required:!0,message:"请输入密码"},{validator:(_,u)=>!!d.password&&d.password.startsWith(u)&&d.password.length>=u.length,message:"两次密码输入不一致",trigger:"input"}]},v=_=>{var u;_.preventDefault(),_.stopPropagation(),(u=i.value)==null||u.validate(E=>{E||(c.value=!0,ce({username:n.username,password:n.password}).then(h=>{const I=(h==null?void 0:h.token)||"";return localStorage.setItem("PAOPAO_TOKEN",I),Q(I)}).then(h=>{window.$message.success("登录成功"),c.value=!1,r.commit("updateUserinfo",h),r.commit("triggerAuth",!1),r.commit("refresh"),n.username="",n.password=""}).catch(h=>{c.value=!1}))})},b=_=>{var u;_.preventDefault(),_.stopPropagation(),(u=m.value)==null||u.validate(E=>{E||(c.value=!0,lt({username:d.username,password:d.password}).then(h=>ce({username:d.username,password:d.password})).then(h=>{const I=(h==null?void 0:h.token)||"";return localStorage.setItem("PAOPAO_TOKEN",I),Q(I)}).then(h=>{window.$message.success("注册成功"),c.value=!1,r.commit("updateUserinfo",h),r.commit("triggerAuth",!1),d.username="",d.password="",d.repassword=""}).catch(h=>{c.value=!1}))})};return G(()=>{const _=localStorage.getItem("PAOPAO_TOKEN")||"";_?Q(_).then(u=>{r.commit("updateUserinfo",u),r.commit("triggerAuth",!1)}).catch(u=>{r.commit("userLogout")}):r.commit("userLogout")}),(_,u)=>{const E=Re,h=Me,I=_e,R=he,L=$e,x=Ue,l=ge,O=Se,F=De,H=fe,V=xe;return w(),K(V,{show:f(r).state.authModalShow,"onUpdate:show":u[7]||(u[7]=p=>f(r).state.authModalShow=p),class:"auth-card",preset:"card",size:"small","mask-closable":!1,bordered:!1,style:{width:"360px"}},{default:a(()=>[y("div",ut,[s(H,{bordered:!1},{default:a(()=>[t.value?$("",!0):(w(),C("div",it,[s(I,{justify:"center"},{default:a(()=>[s(h,null,{default:a(()=>[s(E,{type:"success"},{default:a(()=>[S("账号登录")]),_:1})]),_:1})]),_:1}),s(x,{ref_key:"loginRef",ref:i,model:n,rules:{username:{required:!0,message:"请输入账户名"},password:{required:!0,message:"请输入密码"}}},{default:a(()=>[s(L,{label:"账户",path:"username"},{default:a(()=>[s(R,{value:n.username,"onUpdate:value":u[0]||(u[0]=p=>n.username=p),placeholder:"请输入用户名",onKeyup:q(N(v,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1}),s(L,{label:"密码",path:"password"},{default:a(()=>[s(R,{type:"password","show-password-on":"mousedown",value:n.password,"onUpdate:value":u[1]||(u[1]=p=>n.password=p),placeholder:"请输入账户密码",onKeyup:q(N(v,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1})]),_:1},8,["model"]),s(l,{type:"primary",block:"",secondary:"",strong:"",loading:c.value,onClick:v},{default:a(()=>[S(" 登录 ")]),_:1},8,["loading"])])),t.value?(w(),K(F,{key:1,"default-value":f(r).state.authModelTab,size:"large","justify-content":"space-evenly"},{default:a(()=>[s(O,{name:"signin",tab:"登录"},{default:a(()=>[s(x,{ref_key:"loginRef",ref:i,model:n,rules:{username:{required:!0,message:"请输入账户名"},password:{required:!0,message:"请输入密码"}}},{default:a(()=>[s(L,{label:"账户",path:"username"},{default:a(()=>[s(R,{value:n.username,"onUpdate:value":u[2]||(u[2]=p=>n.username=p),placeholder:"请输入用户名",onKeyup:q(N(v,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1}),s(L,{label:"密码",path:"password"},{default:a(()=>[s(R,{type:"password","show-password-on":"mousedown",value:n.password,"onUpdate:value":u[3]||(u[3]=p=>n.password=p),placeholder:"请输入账户密码",onKeyup:q(N(v,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1})]),_:1},8,["model"]),s(l,{type:"primary",block:"",secondary:"",strong:"",loading:c.value,onClick:v},{default:a(()=>[S(" 登录 ")]),_:1},8,["loading"])]),_:1}),s(O,{name:"signup",tab:"注册"},{default:a(()=>[s(x,{ref_key:"registerRef",ref:m,model:d,rules:U},{default:a(()=>[s(L,{label:"用户名",path:"username"},{default:a(()=>[s(R,{value:d.username,"onUpdate:value":u[4]||(u[4]=p=>d.username=p),placeholder:"用户名注册后无法修改"},null,8,["value"])]),_:1}),s(L,{label:"密码",path:"password"},{default:a(()=>[s(R,{type:"password","show-password-on":"mousedown",placeholder:"密码不少于6位",value:d.password,"onUpdate:value":u[5]||(u[5]=p=>d.password=p),onKeyup:q(N(b,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1}),s(L,{label:"重复密码",path:"repassword"},{default:a(()=>[s(R,{type:"password","show-password-on":"mousedown",placeholder:"请再次输入密码",value:d.repassword,"onUpdate:value":u[6]||(u[6]=p=>d.repassword=p),onKeyup:q(N(b,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1})]),_:1},8,["model"]),s(l,{type:"primary",block:"",secondary:"",strong:"",loading:c.value,onClick:b},{default:a(()=>[S(" 注册 ")]),_:1},8,["loading"])]),_:1})]),_:1},8,["default-value"])):$("",!0)]),_:1})])]),_:1},8,["show"])}}});const we=(e,t)=>{const r=e.__vccOpts||e;for(const[c,i]of t)r[c]=i;return r},dt=we(ct,[["__scopeId","data-v-053dfa44"]]),io=e=>o({method:"get",url:"/v1/posts",params:e}),mt=e=>o({method:"get",url:"/v1/tags",params:e}),co=e=>o({method:"get",url:"/v1/post",params:e}),mo=e=>o({method:"get",url:"/v1/post/star",params:e}),po=e=>o({method:"post",url:"/v1/post/star",data:e}),_o=e=>o({method:"get",url:"/v1/post/collection",params:e}),ho=e=>o({method:"post",url:"/v1/post/collection",data:e}),go=e=>o({method:"get",url:"/v1/post/comments",params:e}),fo=e=>o({method:"get",url:"/v1/user/contacts",params:e}),vo=e=>o({method:"get",url:"/v1/trends/index",params:e}),wo=e=>o({method:"post",url:"/v1/post",data:e}),yo=e=>o({method:"delete",url:"/v1/post",data:e}),bo=e=>o({method:"post",url:"/v1/post/lock",data:e}),ko=e=>o({method:"post",url:"/v1/post/stick",data:e}),Po=e=>o({method:"post",url:"/v1/post/highlight",data:e}),Lo=e=>o({method:"post",url:"/v1/post/visibility",data:e}),Oo=e=>o({method:"post",url:"/v1/tweet/comment/thumbsup",data:e}),To=e=>o({method:"post",url:"/v1/tweet/comment/thumbsdown",data:e}),Ao=e=>o({method:"post",url:"/v1/tweet/reply/thumbsup",data:e}),Co=e=>o({method:"post",url:"/v1/tweet/reply/thumbsdown",data:e}),Eo=e=>o({method:"post",url:"/v1/post/comment",data:e}),Io=e=>o({method:"delete",url:"/v1/post/comment",data:e}),Ro=e=>o({method:"post",url:"/v1/post/comment/highlight",data:e}),Mo=e=>o({method:"post",url:"/v1/post/comment/reply",data:e}),$o=e=>o({method:"delete",url:"/v1/post/comment/reply",data:e}),Uo=e=>o({method:"post",url:"/v1/topic/stick",data:e}),So=e=>o({method:"post",url:"/v1/topic/follow",data:e}),Do=e=>o({method:"post",url:"/v1/topic/unfollow",data:e}),xo=(e={})=>o({method:"get",url:"/v1/captcha",params:e}),qo=e=>o({method:"post",url:"/v1/captcha",data:e}),No=e=>o({method:"post",url:"/v1/user/whisper",data:e}),Ko=e=>o({method:"post",url:"/v1/friend/requesting",data:e}),Fo=e=>o({method:"post",url:"/v1/friend/add",data:e}),Vo=e=>o({method:"post",url:"/v1/user/follow",data:e}),zo=e=>o({method:"post",url:"/v1/user/unfollow",data:e}),Ho=e=>o({method:"get",url:"/v1/user/follows",params:e}),Wo=e=>o({method:"get",url:"/v1/user/followings",params:e}),Yo=e=>o({method:"post",url:"/v1/friend/reject",data:e}),Bo=e=>o({method:"post",url:"/v1/friend/delete",data:e}),jo=e=>o({method:"post",url:"/v1/user/phone",data:e}),Qo=e=>o({method:"post",url:"/v1/user/activate",data:e}),Zo=e=>o({method:"post",url:"/v1/user/password",data:e}),Go=e=>o({method:"post",url:"/v1/user/nickname",data:e}),Jo=e=>o({method:"post",url:"/v1/user/avatar",data:e}),de=(e={})=>o({method:"get",url:"/v1/user/msgcount/unread",params:e}),Xo=e=>o({method:"get",url:"/v1/user/messages",params:e}),es=e=>o({method:"post",url:"/v1/user/message/read",data:e}),ts=e=>o({method:"get",url:"/v1/user/collections",params:e}),os=e=>o({method:"get",url:"/v1/user/profile",params:e}),ss=e=>o({method:"get",url:"/v1/user/posts",params:e}),ns=e=>o({method:"get",url:"/v1/user/wallet/bills",params:e}),rs=e=>o({method:"post",url:"/v1/user/recharge",data:e}),as=e=>o({method:"get",url:"/v1/user/recharge",params:e}),ls=e=>o({method:"get",url:"/v1/suggest/users",params:e}),us=e=>o({method:"get",url:"/v1/suggest/tags",params:e}),is=e=>o({method:"get",url:"/v1/attachment/precheck",params:e}),cs=e=>o({method:"get",url:"/v1/attachment",params:e}),ds=e=>o({method:"post",url:"/v1/admin/user/status",data:e}),pt=()=>o({method:"get",url:"/v1/admin/site/status"});D.locale("zh-cn");const _t=e=>D.unix(e).fromNow(),ms=e=>{let t=D.unix(e),r=D();return t.year()!=r.year()?t.utc(!0).format("YYYY-MM-DD HH:mm"):D().diff(t,"month")>3?t.utc(!0).format("MM-DD HH:mm"):t.fromNow()},ps=e=>{let t=D.unix(e),r=D();return t.year()!=r.year()?t.utc(!0).format("YYYY-MM-DD"):D().diff(t,"month")>3?t.utc(!0).format("MM-DD"):t.fromNow()},_s=e=>D.unix(e).utc(!0).format("YYYY年MM月"),ht={key:0,class:"rightbar-wrap"},gt={class:"search-wrap"},ft={class:"post-num"},vt={class:"post-num"},wt={class:"copyright"},yt=["href"],bt=["href"],kt={class:"site-info-item"},Pt=Y({__name:"rightbar",setup(e){const t=k([]),r=k([]),c=k(!1),i=k(""),n=B(),m=pe(),d=k(0),U=k(0),v=k(0),b=k(0),_=k(null),u="2023 paopao.info",E="Roc's Me",h="",I="泡泡(PaoPao)开源社区",R="https://www.paopao.info",L=+"6",x=+"12",l=()=>{pt().then(g=>{d.value=g.register_user_count,U.value=g.online_user_count,v.value=g.history_max_online,b.value=g.server_up_time}).catch(g=>{}),p.disconnect()},O=()=>{c.value=!0,mt({type:"hot_extral",num:x,extral_num:L}).then(g=>{t.value=g.topics,r.value=g.extral_topics??[],V.value=!0,c.value=!1}).catch(g=>{c.value=!1})},F=g=>g>=1e3?(g/1e3).toFixed(1)+"k":g,H=()=>{m.push({name:"home",query:{q:i.value}})},V=J({get:()=>n.state.userLogined&&r.value.length!==0,set:g=>{}});Z(()=>({refreshTopicFollow:n.state.refreshTopicFollow,userLogined:n.state.userLogined}),(g,z)=>{(g.refreshTopicFollow!==z.refreshTopicFollow||g.userLogined)&&O(),n.state.userInfo.is_admin&&l()});const p=new IntersectionObserver(g=>{g.forEach(z=>{z.isIntersecting&&l()})},{root:null,rootMargin:"0px",threshold:1});return G(()=>{_.value&&p.observe(_.value),O()}),(g,z)=>{const ye=W,be=he,ee=me("router-link"),te=qe,j=fe,ke=_e;return f(n).state.collapsedRight?$("",!0):(w(),C("div",ht,[y("div",gt,[s(be,{round:"",clearable:"",placeholder:"搜一搜...",value:i.value,"onUpdate:value":z[0]||(z[0]=M=>i.value=M),onKeyup:q(N(H,["prevent"]),["enter"])},{prefix:a(()=>[s(ye,{component:f(Qe)},null,8,["component"])]),_:1},8,["value","onKeyup"])]),V.value?(w(),K(j,{key:0,class:"hottopic-wrap",title:"关注话题",embedded:"",bordered:!1,size:"small"},{default:a(()=>[s(te,{show:c.value},{default:a(()=>[(w(!0),C(se,null,ne(r.value,M=>(w(),C("div",{class:"hot-tag-item",key:M.id},[s(ee,{class:"hash-link",to:{name:"home",query:{q:M.tag,t:"tag"}}},{default:a(()=>[S(" #"+A(M.tag),1)]),_:2},1032,["to"]),y("div",ft,A(F(M.quote_num)),1)]))),128))]),_:1},8,["show"])]),_:1})):$("",!0),s(j,{class:"hottopic-wrap",title:"热门话题",embedded:"",bordered:!1,size:"small"},{default:a(()=>[s(te,{show:c.value},{default:a(()=>[(w(!0),C(se,null,ne(t.value,M=>(w(),C("div",{class:"hot-tag-item",key:M.id},[s(ee,{class:"hash-link",to:{name:"home",query:{q:M.tag,t:"tag"}}},{default:a(()=>[S(" #"+A(M.tag),1)]),_:2},1032,["to"]),y("div",vt,A(F(M.quote_num)),1)]))),128))]),_:1},8,["show"])]),_:1}),s(j,{class:"copyright-wrap",embedded:"",bordered:!1,size:"small"},{default:a(()=>[y("div",wt,"© "+A(f(u)),1),y("div",null,[s(ke,null,{default:a(()=>[y("a",{href:f(h),target:"_blank",class:"hash-link"},A(f(E)),9,yt),y("a",{href:f(R),target:"_blank",class:"hash-link"},A(f(I)),9,bt)]),_:1})])]),_:1}),f(n).state.userInfo.is_admin?(w(),C("div",{key:1,class:"site-info",ref_key:"userInfoElement",ref:_},[y("span",kt,A(d.value)+" 注册用户，"+A(U.value)+" 人在线，最高在线 "+A(v.value)+" 人，站点上线于 "+A(f(_t)(b.value)),1)],512)):$("",!0)]))}}});const Lt=we(Pt,[["__scopeId","data-v-0a6cd0b6"]]),Ot="/assets/logo-52afee68.png",Tt={class:"sidebar-wrap"},At={class:"logo-wrap"},Ct={key:0,class:"user-wrap"},Et={class:"user-info"},It={class:"nickname"},Rt={class:"nickname-txt"},Mt={class:"username"},$t={class:"user-mini-wrap"},Ut={key:1,class:"user-wrap"},St={key:0,class:"login-only-wrap"},Dt={key:1,class:"login-wrap"},xt=Y({__name:"sidebar",setup(e){const t=B(),r=Ce(),c=pe(),i=k(!1),n=k(r.name||""),m=k(),d="true".toLowerCase()==="true",U="false".toLowerCase()==="true",v="false".toLocaleLowerCase()==="true",b=k("true".toLowerCase()==="true"),_=+"5000";Z(r,()=>{n.value=r.name}),Z(t.state,()=>{t.state.userInfo.id>0?m.value||(de().then(l=>{i.value=l.count>0,t.commit("updateUnreadMsgCount",l.count)}).catch(l=>{console.log(l)}),m.value=setInterval(()=>{de().then(l=>{i.value=l.count>0,t.commit("updateUnreadMsgCount",l.count)}).catch(l=>{console.log(l)})},_)):m.value&&clearInterval(m.value)}),G(()=>{window.onresize=()=>{t.commit("triggerCollapsedLeft",document.body.clientWidth<=821),t.commit("triggerCollapsedRight",document.body.clientWidth<=821)}});const u=J(()=>{const l=[{label:"广场",key:"home",icon:()=>P(ae),href:"/"},{label:"话题",key:"topic",icon:()=>P(le),href:"/topic"}];return U&&l.push({label:"公告",key:"anouncement",icon:()=>P(Ze),href:"/anouncement"}),l.push({label:"主页",key:"profile",icon:()=>P(Ge),href:"/profile"}),l.push({label:"消息",key:"messages",icon:()=>P(Je),href:"/messages"}),l.push({label:"收藏",key:"collection",icon:()=>P(Xe),href:"/collection"}),d&&l.push({label:"好友",key:"contacts",icon:()=>P(et),href:"/contacts"}),v&&l.push({label:"钱包",key:"wallet",icon:()=>P(tt),href:"/wallet"}),l.push({label:"设置",key:"setting",icon:()=>P(ot),href:"/setting"}),t.state.userInfo.id>0?l:[{label:"广场",key:"home",icon:()=>P(ae),href:"/"},{label:"话题",key:"topic",icon:()=>P(le),href:"/topic"}]}),E=l=>"href"in l?P("div",{},l.label):l.label,h=l=>l.key==="messages"?P(Ke,{dot:!0,show:i.value,processing:!0},{default:()=>P(W,{color:l.key===n.value?"var(--n-item-icon-color-active)":"var(--n-item-icon-color)"},{default:l.icon})}):P(W,null,{default:l.icon}),I=(l,O={})=>{n.value=l,c.push({name:l,query:{t:new Date().getTime()}})},R=()=>{r.path==="/"&&t.commit("refresh"),I("home")},L=l=>{t.commit("triggerAuth",!0),t.commit("triggerAuthKey",l)},x=()=>{t.commit("userLogout"),t.commit("refresh"),R()};return window.$store=t,window.$message=Ne(),(l,O)=>{const F=Fe,H=Ve,V=ze,p=ge;return w(),C("div",Tt,[y("div",At,[s(F,{class:"logo-img",width:"36",src:f(Ot),"preview-disabled":!0,onClick:R},null,8,["src"])]),s(H,{accordion:!0,"icon-size":24,options:u.value,"render-label":E,"render-icon":h,value:n.value,"onUpdate:value":I},null,8,["options","value"]),f(t).state.userInfo.id>0?(w(),C("div",Ct,[s(V,{class:"user-avatar",round:"",size:34,src:f(t).state.userInfo.avatar},null,8,["src"]),y("div",Et,[y("div",It,[y("span",Rt,A(f(t).state.userInfo.nickname),1),s(p,{class:"logout",quaternary:"",circle:"",size:"tiny",onClick:x},{icon:a(()=>[s(f(W),null,{default:a(()=>[s(f(ue))]),_:1})]),_:1})]),y("div",Mt,"@"+A(f(t).state.userInfo.username),1)]),y("div",$t,[s(p,{class:"logout",quaternary:"",circle:"",onClick:x},{icon:a(()=>[s(f(W),{size:24},{default:a(()=>[s(f(ue))]),_:1})]),_:1})])])):(w(),C("div",Ut,[b.value?$("",!0):(w(),C("div",St,[s(p,{strong:"",secondary:"",round:"",type:"primary",onClick:O[0]||(O[0]=g=>L("signin"))},{default:a(()=>[S(" 登录 ")]),_:1})])),b.value?(w(),C("div",Dt,[s(p,{strong:"",secondary:"",round:"",type:"primary",onClick:O[1]||(O[1]=g=>L("signin"))},{default:a(()=>[S(" 登录 ")]),_:1}),s(p,{strong:"",secondary:"",round:"",type:"info",onClick:O[2]||(O[2]=g=>L("signup"))},{default:a(()=>[S(" 注册 ")]),_:1})])):$("",!0)]))])}}});const qt={"has-sider":"",class:"main-wrap",position:"static"},Nt={key:0},Kt={class:"content-wrap"},Ft=Y({__name:"App",setup(e){const t=B(),r=J(()=>t.state.theme==="dark"?We:null);return(c,i)=>{const n=xt,m=me("router-view"),d=Lt,U=dt,v=Ye,b=Be,_=je,u=He;return w(),K(u,{theme:r.value},{default:a(()=>[s(b,null,{default:a(()=>[s(v,null,{default:a(()=>{var E;return[y("div",{class:Le(["app-container",{dark:((E=r.value)==null?void 0:E.name)==="dark",mobile:!f(t).state.desktopModelShow}])},[y("div",qt,[f(t).state.desktopModelShow?(w(),C("div",Nt,[s(n)])):$("",!0),y("div",Kt,[s(m,{class:"app-wrap"},{default:a(({Component:h})=>[(w(),K(Pe,null,[c.$route.meta.keepAlive?(w(),K(re(h),{key:0})):$("",!0)],1024)),c.$route.meta.keepAlive?$("",!0):(w(),K(re(h),{key:0}))]),_:1})]),s(d)]),s(U)],2)]}),_:1})]),_:1}),s(_)]),_:1},8,["theme"])}}});Oe(Ft).use(ve).use(at).mount("#app");export{Q as $,po as A,ho as B,co as C,go as D,Ot as E,Uo as F,Do as G,So as H,mt as I,_t as J,_s as K,os as L,ds as M,Ko as N,Fo as O,Yo as P,es as Q,Xo as R,ts as S,ps as T,is as U,cs as V,fo as W,Ho as X,Wo as Y,No as Z,we as _,us as a,ns as a0,rs as a1,as as a2,xo as a3,Jo as a4,Zo as a5,jo as a6,Qo as a7,Go as a8,qo as a9,xt as aa,vo as b,wo as c,io as d,ss as e,Vo as f,ls as g,Bo as h,ms as i,Co as j,$o as k,Oo as l,To as m,Mo as n,Io as o,Ro as p,Eo as q,mo as r,_o as s,Ao as t,zo as u,yo as v,bo as w,ko as x,Po as y,Lo as z};
