import{b as z,V as c,W as v,X as l,d as p,Y as B,Z as h,_ as y,$ as L,c as f,O as d,r as P,g as T,m as R,i as S}from"./index.bfe30da6.js";const $=typeof window!="undefined";var j={fontWeightActive:"400"};const k=e=>{const{fontSize:r,textColor3:t,primaryColorHover:o,primaryColorPressed:a,textColor2:i}=e;return Object.assign(Object.assign({},j),{fontSize:r,itemTextColor:t,itemTextColorHover:o,itemTextColorPressed:a,itemTextColorActive:i,separatorColor:t})},w={name:"Breadcrumb",common:z,self:k};var E=w,O=c("breadcrumb",`
 white-space: nowrap;
`,[v("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),v("a",`
 color: inherit;
 text-decoration: inherit;
 `),c("breadcrumb-item",{fontSize:"var(--font-size)",transition:"color .3s var(--bezier)",display:"inline-block"},[c("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--bezier);
 color: var(--item-text-color);
 `),l("link",{cursor:"pointer",transition:"color .3s var(--bezier)",color:"var(--item-text-color)"}),l("separator",{margin:"0 8px",color:"var(--separator-color)",transition:"color .3s var(--bezier)"}),v("&:hover",[c("icon",{color:"var(--item-text-color-hover)"}),l("link",{color:"var(--item-text-color-hover)"})]),v("&:active",[c("icon",{color:"var(--item-text-color-pressed)"}),l("link",{color:"var(--item-text-color-pressed)"})]),v("&:last-child",[l("link",`
 font-weight: var(--font-weight-active);
 cursor: unset;
 color: var(--item-text-color-active);
 `),c("icon",{color:"var(--item-text-color-active)"}),l("separator",{display:"none"})])])]);const g=Symbol("breadcrumb"),_=Object.assign(Object.assign({},h.props),{separator:{type:String,default:"/"}});var H=p({name:"Breadcrumb",props:_,setup(e){const{mergedClsPrefixRef:r}=B(e),t=h("Breadcrumb","Breadcrumb",O,E,e,r);return y(g,{separatorRef:L(e,"separator"),mergedClsPrefixRef:r}),{mergedClsPrefix:r,cssVars:f(()=>{const{common:{cubicBezierEaseInOut:o},self:{separatorColor:a,itemTextColor:i,itemTextColorHover:m,itemTextColorPressed:u,itemTextColorActive:n,fontSize:s,fontWeightActive:b}}=t.value;return{"--font-size":s,"--bezier":o,"--item-text-color":i,"--item-text-color-hover":m,"--item-text-color-pressed":u,"--item-text-color-active":n,"--separator-color":a,"--font-weight-active":b}})}},render(){return d("nav",{class:`${this.mergedClsPrefix}-breadcrumb`,style:this.cssVars,"aria-label":"Breadcrumb"},d("ul",null,this.$slots))}});const I=$?window:null,A=(e=I)=>{const r=()=>{const{hash:a,host:i,hostname:m,href:u,origin:n,pathname:s,port:b,protocol:x,search:C}=(e==null?void 0:e.location)||{};return{hash:a,host:i,hostname:m,href:u,origin:n,pathname:s,port:b,protocol:x,search:C}},t=()=>{o.value=r()},o=P(r());return T(()=>{e&&(e.addEventListener("popstate",t),e.addEventListener("hashchange",t))}),R(()=>{e&&(e.removeEventListener("popstate",t),e.removeEventListener("hashchange",t))}),o},N={separator:String,href:String};var K=p({name:"BreadcrumbItem",props:N,setup(e,{slots:r}){const t=S(g,null);if(!t)return()=>null;const{separatorRef:o,mergedClsPrefixRef:a}=t,i=A(),m=f(()=>e.href?"a":"span"),u=f(()=>i.value.href===e.href?"location":null);return()=>{var n;const{value:s}=a;return d("li",{class:`${s}-breadcrumb-item`},d(m.value,{class:`${s}-breadcrumb-item__link`,"aria-current":u.value,href:e.href},r),d("span",{class:`${s}-breadcrumb-item__separator`,"aria-hidden":"true"},r.separator?r.separator():(n=e.separator)!==null&&n!==void 0?n:o.value))}}});export{H as N,K as a};
