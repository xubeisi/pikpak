import{b as W,aQ as i,at as a,V as m,X as l,aZ as H,ah as L,W as B,d as T,Y as M,Z as P,c as j,r as O,O as t,a6 as F,av as N,ad as R,a_ as V,a$ as Z,b0 as Q,b1 as K,ab as X,b2 as Y,ar as q,a1 as h,o as D,e as G,f as x}from"./index.3e33d447.js";var J={iconMargin:"12px 8px 0 12px",iconSize:"26px",closeSize:"16px",closeMargin:"14px 16px 0 0",padding:"15px"};const U=o=>{const{lineHeight:n,borderRadius:c,fontWeightStrong:z,baseColor:s,dividerColor:w,actionColor:I,textColor1:g,textColor2:r,closeColor:e,closeColorHover:d,closeColorPressed:f,infoColor:v,successColor:C,warningColor:p,errorColor:b,fontSize:y}=o;return Object.assign(Object.assign({},J),{fontSize:y,lineHeight:n,titleFontWeight:z,borderRadius:c,border:`1px solid ${w}`,color:I,titleTextColor:g,iconColor:r,contentTextColor:r,closeColor:e,closeColorHover:d,closeColorPressed:f,borderInfo:`1px solid ${i(s,a(v,{alpha:.25}))}`,colorInfo:i(s,a(v,{alpha:.08})),titleTextColorInfo:g,iconColorInfo:v,contentTextColorInfo:r,closeColorInfo:e,closeColorHoverInfo:d,closeColorPressedInfo:f,borderSuccess:`1px solid ${i(s,a(C,{alpha:.25}))}`,colorSuccess:i(s,a(C,{alpha:.08})),titleTextColorSuccess:g,iconColorSuccess:C,contentTextColorSuccess:r,closeColorSuccess:e,closeColorHoverSuccess:d,closeColorPressedSuccess:f,borderWarning:`1px solid ${i(s,a(p,{alpha:.33}))}`,colorWarning:i(s,a(p,{alpha:.08})),titleTextColorWarning:g,iconColorWarning:p,contentTextColorWarning:r,closeColorWarning:e,closeColorHoverWarning:d,closeColorPressedWarning:f,borderError:`1px solid ${i(s,a(b,{alpha:.25}))}`,colorError:i(s,a(b,{alpha:.08})),titleTextColorError:g,iconColorError:b,contentTextColorError:r,closeColorError:e,closeColorHoverError:d,closeColorPressedError:f})},oo={name:"Alert",common:W,self:U};var eo=oo,ro=m("alert",`
 line-height: var(--line-height);
 border-radius: var(--border-radius);
 position: relative;
 transition: background-color .3s var(--bezier);
 background-color: var(--color);
 text-align: start;
`,[l("icon",{color:"var(--icon-color)"}),m("alert-body",{border:"var(--border)",padding:"var(--padding)"},[l("title",{color:"var(--title-text-color)"}),l("content",{color:"var(--content-text-color)"})]),H({originalTransition:"transform .3s var(--bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),l("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--icon-size);
 height: var(--icon-size);
 font-size: var(--icon-size);
 margin: var(--icon-margin);
 `),l("close",`
 transition: color .3s var(--bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--close-margin);
 font-size: var(--close-size);
 `),L("show-icon",[m("alert-body",{paddingLeft:"calc(var(--icon-margin-left) + var(--icon-size) + var(--icon-margin-right))"})]),m("alert-body",`
 border-radius: var(--border-radius);
 transition: border-color .3s var(--bezier);
 `,[l("title",`
 transition: color .3s var(--bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--title-font-weight);
 `,[B("& +",[l("content",{marginTop:"9px"})])]),l("content",{transition:"color .3s var(--bezier)",fontSize:"var(--font-size)"})]),l("icon",{transition:"color .3s var(--bezier)"})]);const to=Object.assign(Object.assign({},P.props),{title:{type:String,default:void 0},showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},closable:{type:Boolean,default:!1},onClose:Function,onAfterLeave:{type:Function,default:void 0},onAfterHide:{type:Function,validator:()=>!0,default:void 0}});var io=T({name:"Alert",inheritAttrs:!1,props:to,setup(o){const{mergedClsPrefixRef:n}=M(o),c=P("Alert","Alert",ro,eo,o,n),z=j(()=>{const{common:{cubicBezierEaseInOut:r},self:e}=c.value,{fontSize:d,borderRadius:f,titleFontWeight:v,lineHeight:C,contentTextColor:p,titleTextColor:b,iconSize:y,iconMargin:S,closeSize:_,closeMargin:$,padding:A}=e,{type:u}=o,{left:k,right:E}=q(S);return{"--bezier":r,"--color":e[h("color",u)],"--close-color":e[h("closeColor",u)],"--close-color-hover":e[h("closeColorHover",u)],"--close-color-pressed":e[h("closeColorPressed",u)],"--icon-color":e[h("iconColor",u)],"--border":e[h("border",u)],"--title-text-color":b,"--content-text-color":p,"--line-height":C,"--border-radius":f,"--font-size":d,"--title-font-weight":v,"--icon-size":y,"--icon-margin":S,"--close-size":_,"--close-margin":$,"--padding":A,"--icon-margin-left":k,"--icon-margin-right":E}}),s=O(!0),w=()=>{const{onAfterLeave:r,onAfterHide:e}=o;r&&r(),e&&e()};return{mergedClsPrefix:n,visible:s,handleCloseClick:()=>{var r;Promise.resolve((r=o.onClose)===null||r===void 0?void 0:r.call(o)).then(e=>{e!==!1&&(s.value=!1)})},handleAfterLeave:()=>{w()},mergedTheme:c,cssVars:z}},render(){return t(Y,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:o,$slots:n}=this,c={class:[`${o}-alert`,this.showIcon&&`${o}-alert--show-icon`],style:this.cssVars,role:"alert"};return this.visible?t("div",Object.assign({},F(this.$attrs,c)),this.closable&&t(N,{clsPrefix:o,class:`${o}-alert__close`,onClick:this.handleCloseClick}),this.showIcon&&t("div",{class:`${o}-alert__icon`,"aria-hidden":"true"},n.icon?n.icon():t(R,{clsPrefix:o},{default:()=>{switch(this.type){case"success":return t(K,null);case"info":return t(Q,null);case"warning":return t(Z,null);case"error":return t(V,null);default:return null}}})),t("div",{class:`${o}-alert-body`},this.title!==void 0&&t("div",{class:`${o}-alert-body__title`},X(n,"header",void 0,()=>[this.title])),n.default&&t("div",{class:`${o}-alert-body__content`},n))):null}})}});const no={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},so=x("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[x("circle",{cx:"10",cy:"10",r:"7"}),x("path",{d:"M21 21l-6-6"}),x("path",{d:"M10 13v.01"}),x("path",{d:"M10 10a1.5 1.5 0 1 0-1.14-2.474"})],-1);var ao=T({name:"ZoomQuestion",render:function(n,c){return D(),G("svg",no,[so])}});export{io as N,ao as Z};
