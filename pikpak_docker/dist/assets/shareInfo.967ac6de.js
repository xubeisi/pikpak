var A=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var q=(i,o)=>{var d={};for(var r in i)j.call(i,r)&&o.indexOf(r)<0&&(d[r]=i[r]);if(i!=null&&A)for(var r of A(i))o.indexOf(r)<0&&L.call(i,r)&&(d[r]=i[r]);return d};import{d as V,o as m,e as O,f as t,B as G,D as U,c as J,r as c,w as Q,g as W,G as Y,s as l,u,x as K,k as f,h as I,p as x,q as S,Q as X,J as M,l as T,M as Z,by as ee,A as ae,N as te,O as h,y as se,P as ue}from"./index.a49f5493.js";import{N as oe,e as le,b as re,a as ne}from"./Spin.0a575336.js";import{a as ie,N as de}from"./BreadcrumbItem.2d213ea1.js";import{N as ce,a as _e}from"./FormItem.96a9482f.js";import{N as pe}from"./InputGroup.ad725d8e.js";import{N as ve}from"./Space.97e1592c.js";import"./Checkbox.f0d22f72.js";import"./get.69c10f29.js";const he={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},me=t("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[t("path",{d:"M14 3v4a1 1 0 0 0 1 1h4"}),t("path",{d:"M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"}),t("path",{d:"M9 17v-5"}),t("path",{d:"M12 17v-1"}),t("path",{d:"M15 17v-3"})],-1);var fe=V({name:"FileAnalytics",render:function(o,d){return m(),O("svg",he,[me])}});const ke={class:"share-info-page"},ye={key:0,class:"header"},ge={class:"title n-ellipsis"},we=x("\u5168\u90E8\u6587\u4EF6"),Fe={class:"action"},Ne={key:1,class:"share-password"},Be=f("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[f("img",{src:"https://www.mypikpak.com/logo.png",class:"logo-box__icon",alt:""}),f("div",{class:"logo-box__text"},"PikPak")],-1),xe=x("\u63D0\u53D6\u6587\u4EF6"),Ee={key:2,class:"share-file-box",style:{height:"100vh"}},De=x("\u53BB\u9996\u9875"),Ke=V({setup(i){const o=G(),d=U(),r=J(()=>o.params.id),a=c(),k=c(!0),_=c(""),p=c([]),E=c([]),b=c(""),H=c([{type:"selection"},{title:"\u540D\u79F0",key:"name",sorter:"default",render:e=>h("div",{class:"file-info",onClick:()=>{e.kind==="drive#folder"&&(o.query.id||(b.value=e.id),d.push({name:"shareInfo",params:o.params,query:{id:e.id}}))}},[h("img",{src:e.thumbnail_link||e.icon_link}),h(ne,{class:"title"},{default:()=>String(e.name)}),h("span",{class:"action"},"1")])},{title:"\u5927\u5C0F",key:"size",sorter:(e,s)=>e.size-s.size,align:"right",render:e=>Number(e.size)>0?se(Number(e.size)):"",className:"size",width:100},{title:"\u4FEE\u6539\u65F6\u95F4",key:"modified_time",sorter:"default",align:"right",render:e=>h(ue,{time:new Date(String(e.modified_time)||""),format:"MM-dd HH:MM"}),className:"modified_time",width:160},{title:"",key:"action",width:60,align:"right",render:e=>h(ve,{justify:"end"},{default:()=>[]})}]),y=()=>{var e,s,g,w,F;if(((e=a.value)==null?void 0:e.share_status)!=="OK"&&o.query.id)return d.push({name:"shareInfo",params:o.params,query:{id:""}});k.value=!0,K.get("https://api-drive.mypikpak.com/drive/v1/share"+(o.query.id&&((s=a.value)==null?void 0:s.pass_code_token)?"/detail":""),{params:{share_id:r.value,parent_id:o.query.id,pass_code_token:((g=a.value)==null?void 0:g.pass_code_token)||void 0,pass_code:(w=a.value)!=null&&w.pass_code_token?void 0:_.value,limit:"30",page_token:(F=a.value)==null?void 0:F.next_page_token}}).then(v=>{var B;const N=v.data,{files:D}=N,C=q(N,["files"]),n=(B=a.value)==null?void 0:B.next_page_token;a.value=Object.assign(a.value||{},C),v.data.share_status==="OK"?(n||(E.value=[]),E.value=E.value.concat(D)):window.$message.error(v.data.share_status)}).finally(()=>{k.value=!1})},P=e=>{var s;e.target.offsetHeight+e.target.scrollTop>=e.target.scrollHeight-30&&((s=a.value)==null?void 0:s.next_page_token)&&!k.value&&y()},R=()=>{var s;const e=[];o.query.id&&e.push(b.value),K.post("https://api-drive.mypikpak.com/drive/v1/share/restore",{share_id:r.value,pass_code_token:(s=a.value)==null?void 0:s.pass_code_token,ancestor_ids:e,file_ids:p.value||void 0,folder_type:"DOWNLOAD"}).then(g=>{window.$message.success("\u8F6C\u5B58\u6210\u529F\uFF0C\u53EF\u80FD\u9700\u8981\u7B49\u5F85\u4E00\u6BB5\u65F6\u95F4"),p.value=[]})};Q(o,(e,s)=>{_.value=String(o.params.password)||"",p.value=[],a.value&&(a.value.next_page_token="",a.value.files=[]),y()});const $=()=>{window.location.href="./"};return W(()=>{_.value=String(o.params.password)||"",b.value="",y(),window.onbeforeunload=function(e){return!window.$downId||window.$downId.length===0?null:(e=e||window.event,e&&(e.returnValue="\u8FD8\u6709\u5F85\u4E0B\u8F7D\u6587\u4EF6"),"\u8FD8\u6709\u5F85\u4E0B\u8F7D\u6587\u4EF6?")}}),(e,s)=>{const g=Y("router-link");return m(),O(u(oe),{show:k.value,description:"\u83B7\u53D6\u4E2D"},{default:l(()=>{var w,F,v,D,C;return[f("div",ke,[((w=a.value)==null?void 0:w.share_status)==="OK"?(m(),I("div",ye,[f("div",ge,[t(u(de),{separator:">"},{default:l(()=>[t(u(ie),null,{default:l(()=>[t(g,{to:{query:{id:""}}},{default:l(()=>[we]),_:1})]),_:1})]),_:1}),t(u(X),{depth:"3",style:{"font-size":"12px"}},{default:l(()=>{var n,N,B,z;return[x(" \u5931\u6548\u65F6\u95F4\uFF1A "+S(((n=a.value)==null?void 0:n.expiration_left)==="-1"?"\u6C38\u4E45\u6709\u6548":((N=a.value)==null?void 0:N.expiration_left)+"\u5929")+" \u5931\u6548\u6B21\u6570\uFF1A"+S(((B=a.value)==null?void 0:B.restore_count_left)==="-1"?"\u65E0\u9650\u6B21":((z=a.value)==null?void 0:z.restore_count_left)+"\u6B21"),1)]}),_:1})]),f("div",Fe,[t(u(M),{type:"primary",onClick:R},{default:l(()=>[x(S(p.value.length?"\u8F6C\u5B58\u5DF2\u9009":"\u8F6C\u5B58\u5168\u90E8"),1)]),_:1})])])):T("",!0),((F=a.value)==null?void 0:F.share_status)==="PASS_CODE_EMPTY"||((v=a.value)==null?void 0:v.share_status)==="PASS_CODE_ERROR"?(m(),I("div",Ne,[Be,t(u(_e),{class:"password-form"},{default:l(()=>[t(u(ce),{label:"\u8BF7\u8F93\u5165\u63D0\u53D6\u7801"},{default:l(()=>[t(u(pe),null,{default:l(()=>[t(u(Z),{value:_.value,"onUpdate:value":s[0]||(s[0]=n=>_.value=n),type:"password","show-password-on":"mousedown",onKeyup:ee(y,["enter"]),placeholder:"\u8BF7\u8F93\u5165\u63D0\u53D6\u7801"},null,8,["value","onKeyup"]),t(u(M),{type:"primary",loading:k.value&&!!_.value,onClick:y},{default:l(()=>[xe]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})])):((D=a.value)==null?void 0:D.share_status)==="DELETED"?(m(),I("div",Ee,[t(u(le),{description:"\u62B1\u6B49\uFF0C\u8BE5\u5206\u4EAB\u5DF2\u88AB\u4F5C\u8005\u5220\u9664"},{icon:l(()=>[t(u(ae),null,{default:l(()=>[t(u(fe))]),_:1})]),extra:l(()=>[t(u(M),{size:"small",onClick:$},{default:l(()=>[De]),_:1})]),_:1})])):((C=a.value)==null?void 0:C.share_status)==="OK"?(m(),O(u(te),{key:3,style:{"max-height":"calc(100vh - 110px)"},onScroll:P},{default:l(()=>[t(u(re),{"checked-row-keys":p.value,"onUpdate:checked-row-keys":s[1]||(s[1]=n=>p.value=n),"row-key":n=>n.id,data:E.value,size:"small",columns:H.value,bordered:!1},null,8,["checked-row-keys","row-key","data","columns"])]),_:1})):T("",!0)])]}),_:1},8,["show"])}}});export{Ke as default};
