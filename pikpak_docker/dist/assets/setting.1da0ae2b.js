import{bb as Ie,bg as Z,bh as Pe,i as ne,a as Le,c as N,b as G,W as j,V as S,d as I,Y as Q,r as T,g as se,w as Y,$ as V,Z as L,O as b,X as y,ah as D,aZ as He,aB as xe,_ as we,aw as W,bi as Oe,aJ as We,b2 as Ve,aK as Me,aX as Ue,a5 as Je,t as Ke,ab as ue,ad as qe,aT as Xe,ak as Ye,al as Ze,ac as Ge,ao as ye,aj as Ce,ap as Qe,af as Fe,S as de,aR as ce,at as et,ai as tt,aD as ot,a1 as O,aa as te,a3 as z,E as at,G as rt,o as oe,h as he,f,u as p,s as C,k as _,A as ae,bj as re,M,J as X,e as lt,l as fe,F as it,p as A,bk as pe,x as nt}from"./index.227ee509.js";import{Z as le,N as st}from"./ZoomQuestion.8246d0ae.js";import{N as P,a as ge}from"./FormItem.48f64375.js";import{N as ut}from"./Space.21aba37f.js";import"./get.cfad72f5.js";var dt=/\s/;function ct(e){for(var t=e.length;t--&&dt.test(e.charAt(t)););return t}var ht=/^\s+/;function ft(e){return e&&e.slice(0,ct(e)+1).replace(ht,"")}var me=0/0,pt=/^[-+]0x[0-9a-f]+$/i,gt=/^0b[01]+$/i,mt=/^0o[0-7]+$/i,vt=parseInt;function ve(e){if(typeof e=="number")return e;if(Ie(e))return me;if(Z(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Z(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=ft(e);var o=gt.test(e);return o||mt.test(e)?vt(e.slice(2),o?2:8):pt.test(e)?me:+e}var bt=function(){return Pe.Date.now()},ie=bt,xt="Expected a function",wt=Math.max,yt=Math.min;function Ct(e,t,o){var r,d,u,n,s,c,l=0,m=!1,i=!1,F=!0;if(typeof e!="function")throw new TypeError(xt);t=ve(t)||0,Z(o)&&(m=!!o.leading,i="maxWait"in o,u=i?wt(ve(o.maxWait)||0,t):u,F="trailing"in o?!!o.trailing:F);function v(w){var B=r,H=d;return r=d=void 0,l=w,n=e.apply(H,B),n}function a(w){return l=w,s=setTimeout(E,t),m?v(w):n}function x(w){var B=w-c,H=w-l,q=t-B;return i?yt(q,u-H):q}function g(w){var B=w-c,H=w-l;return c===void 0||B>=t||B<0||i&&H>=u}function E(){var w=ie();if(g(w))return h(w);s=setTimeout(E,x(w))}function h(w){return s=void 0,F&&r?v(w):(r=d=void 0,n)}function k(){s!==void 0&&clearTimeout(s),l=0,r=c=d=s=void 0}function R(){return s===void 0?n:h(ie())}function $(){var w=ie(),B=g(w);if(r=arguments,d=this,c=w,B){if(s===void 0)return a(c);if(i)return clearTimeout(s),s=setTimeout(E,t),v(c)}return s===void 0&&(s=setTimeout(E,t)),n}return $.cancel=k,$.flush=R,$}var Ft="Expected a function";function Bt(e,t,o){var r=!0,d=!0;if(typeof e!="function")throw new TypeError(Ft);return Z(o)&&(r="leading"in o?!!o.leading:r,d="trailing"in o?!!o.trailing:d),Ct(e,t,{leading:r,maxWait:t,trailing:d})}function Be(e,t){const o=ne(Le,null);return N(()=>e.hljs||(o==null?void 0:o.mergedHljsRef.value))}const Et=e=>{const{textColor2:t,fontSize:o,fontWeightStrong:r}=e;return{textColor:t,fontSize:o,fontWeightStrong:r,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401"}},_t={name:"Code",common:G,self:Et};var Ee=_t,kt=j([S("code",`
 font-size: var(--font-size);
 font-family: var(--font-family);
 `,[j("pre",`
 margin: 0;
 font-family: inherit;
 `),j("[class^=hljs]",`
 color: var(--text-color);
 transition: 
 color .3s var(--bezier),
 background-color .3s var(--bezier);
 `)]),({props:e})=>{const t=`${e.bPrefix}code`;return[`${t} .hljs-comment,
 ${t} .hljs-quote {
 color: var(--mono-3);
 font-style: italic;
 }`,`${t} .hljs-doctag,
 ${t} .hljs-keyword,
 ${t} .hljs-formula {
 color: var(--hue-3);
 }`,`${t} .hljs-section,
 ${t} .hljs-name,
 ${t} .hljs-selector-tag,
 ${t} .hljs-deletion,
 ${t} .hljs-subst {
 color: var(--hue-5);
 }`,`${t} .hljs-literal {
 color: var(--hue-1);
 }`,`${t} .hljs-string,
 ${t} .hljs-regexp,
 ${t} .hljs-addition,
 ${t} .hljs-attribute,
 ${t} .hljs-meta-string {
 color: var(--hue-4);
 }`,`${t} .hljs-built_in,
 ${t} .hljs-class .hljs-title {
 color: var(--hue-6-2);
 }`,`${t} .hljs-attr,
 ${t} .hljs-variable,
 ${t} .hljs-template-variable,
 ${t} .hljs-type,
 ${t} .hljs-selector-class,
 ${t} .hljs-selector-attr,
 ${t} .hljs-selector-pseudo,
 ${t} .hljs-number {
 color: var(--hue-6);
 }`,`${t} .hljs-symbol,
 ${t} .hljs-bullet,
 ${t} .hljs-link,
 ${t} .hljs-meta,
 ${t} .hljs-selector-id,
 ${t} .hljs-title {
 color: var(--hue-2);
 }`,`${t} .hljs-emphasis {
 font-style: italic;
 }`,`${t} .hljs-strong {
 font-weight: var(--font-weight-strong);
 }`,`${t} .hljs-link {
 text-decoration: underline;
 }`]}]);const $t=Object.assign(Object.assign({},L.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,internalNoHighlight:Boolean});var St=I({name:"Code",props:$t,setup(e,{slots:t}){const{internalNoHighlight:o}=e,{mergedClsPrefixRef:r}=Q(),d=T(null),u=o?{value:void 0}:Be(e),n=(l,m,i)=>{const{value:F}=u;return!F||!(l&&F.getLanguage(l))?null:F.highlight(i?m.trim():m,{language:l}).value},s=()=>{if(t.default)return;const{value:l}=d;if(!l)return;const{language:m}=e,i=e.uri?window.decodeURIComponent(e.code):e.code;if(m){const v=n(m,i,e.trim);if(v!==null){l.innerHTML=e.inline?v:`<pre>${v}</pre>`;return}}if(e.inline){l.textContent=i;return}const F=document.createElement("pre");F.textContent=i,l.appendChild(F)};se(s),Y(V(e,"language"),s),Y(V(e,"code"),s),o||Y(u,s);const c=L("Code","Code",kt,Ee,e,r);return{mergedClsPrefix:r,codeRef:d,cssVars:N(()=>{const{common:{cubicBezierEaseInOut:l,fontFamilyMono:m},self:{textColor:i,fontSize:F,fontWeightStrong:v,"mono-3":a,"hue-1":x,"hue-2":g,"hue-3":E,"hue-4":h,"hue-5":k,"hue-5-2":R,"hue-6":$,"hue-6-2":w}}=c.value;return{"--font-size":F,"--font-family":m,"--font-weight-strong":v,"--bezier":l,"--text-color":i,"--mono-3":a,"--hue-1":x,"--hue-2":g,"--hue-3":E,"--hue-4":h,"--hue-5":k,"--hue-5-2":R,"--hue-6":$,"--hue-6-2":w}})}},render(){const{mergedClsPrefix:e}=this;return b("code",{class:`${e}-code`,style:this.cssVars,ref:"codeRef"},this.$slots)}});const Tt=e=>{const{fontWeight:t,textColor1:o,textColor2:r,dividerColor:d,fontSize:u}=e;return{titleFontSize:u,titleFontWeight:t,dividerColor:d,titleTextColor:o,fontSize:u,textColor:r,arrowColor:r}},Rt={name:"Collapse",common:G,self:Tt};var Nt=Rt,Dt=S("collapse",{width:"100%"},[S("collapse-item",`
 font-size: var(--font-size);
 color: var(--text-color);
 transition:
 color .3s var(--bezier),
 border-color .3s var(--bezier);
 margin: 16px 0 0 0;
 `,[S("collapse-item","margin-left: 32px;"),j("&:first-child",{marginTop:0}),j("&:first-child >",[y("header",{paddingTop:0})]),D("left-arrow-placement",[y("header",[S("collapse-item-arrow",{marginRight:"4px"})])]),D("right-arrow-placement",[y("header",[S("collapse-item-arrow",{marginLeft:"4px"})])]),y("content-wrapper",[y("content-inner",{paddingTop:"16px"}),He({duration:"0.15s"})]),D("active",[y("header",[D("active",[S("collapse-item-arrow",{transform:"rotate(90deg)"})])])]),j("&:not(:first-child)",{borderTop:"1px solid var(--divider-color)"}),y("header",`
 font-size: var(--title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--bezier);
 position: relative;
 padding: 16px 0 0 0;
 color: var(--title-text-color);
 `,[y("header-main",`
 cursor: pointer;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--title-font-weight);
 transition: color .3s var(--bezier);
 flex: 1;
 color: var(--title-text-color);
 `),y("header-extra",`
 cursor: pointer;
 display: flex;
 align-items: center;
 transition: color .3s var(--bezier);
 color: var(--text-color);
 `),S("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--bezier),
 color .3s var(--bezier);
 font-size: 18px;
 color: var(--arrow-color);
 `)])])]);const jt=Object.assign(Object.assign({},L.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),_e=Symbol("collapse");var At=I({name:"Collapse",props:jt,setup(e,{slots:t}){const{mergedClsPrefixRef:o}=Q(e),r=T(e.defaultExpandedNames),d=N(()=>e.expandedNames),u=xe(d,r),n=L("Collapse","Collapse",Dt,Nt,e,o);function s(m){const{"onUpdate:expandedNames":i,onUpdateExpandedNames:F,onExpandedNamesChange:v}=e;F&&W(F,m),i&&W(i,m),v&&W(v,m),r.value=m}function c(m){const{onItemHeaderClick:i}=e;i&&W(i,m)}function l(m,i,F){const{accordion:v}=e,{value:a}=u;if(v)m?(s([i]),c({name:i,expanded:!0,event:F})):(s([]),c({name:i,expanded:!1,event:F}));else if(!Array.isArray(a))s([i]),c({name:i,expanded:!0,event:F});else{const x=a.slice(),g=x.findIndex(E=>i===E);~g?(x.splice(g,1),s(x),c({name:i,expanded:!1,event:F})):(x.push(i),s(x),c({name:i,expanded:!0,event:F}))}}return we(_e,{props:e,mergedClsPrefixRef:o,expandedNamesRef:u,slots:t,toggleItem:l}),{mergedTheme:n,mergedClsPrefix:o,cssVars:N(()=>{const{common:{cubicBezierEaseInOut:m},self:{titleFontWeight:i,dividerColor:F,titleTextColor:v,textColor:a,arrowColor:x,fontSize:g,titleFontSize:E}}=n.value;return{"--font-size":g,"--bezier":m,"--text-color":a,"--divider-color":F,"--title-font-size":E,"--title-text-color":v,"--title-font-weight":i,"--arrow-color":x}})}},render(){return b("div",{class:`${this.mergedClsPrefix}-collapse`,style:this.cssVars},this.$slots)}}),zt=I({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:Oe(V(e,"show"))}},render(){return b(Ve,null,{default:()=>{const{show:e,displayDirective:t,onceTrue:o,clsPrefix:r}=this,d=t==="show"&&o,u=b("div",{class:`${r}-collapse-item__content-wrapper`},b("div",{class:`${r}-collapse-item__content-inner`},this.$slots));return d?We(u,[[Me,e]]):e?u:null}})}});const It={title:String,name:[String,Number],displayDirective:String};var U=I({name:"CollapseItem",props:It,setup(e){const t=Ue(),o=Je(()=>{var l;return(l=e.name)!==null&&l!==void 0?l:t}),r=ne(_e);r||Ke("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:d,props:u,mergedClsPrefixRef:n,slots:s}=r,c=N(()=>{const{value:l}=d;if(Array.isArray(l)){const{value:m}=o;return!~l.findIndex(i=>i===m)}else if(l){const{value:m}=o;return m!==l}return!0});return{collapseSlots:s,randomName:t,mergedClsPrefix:n,collapsed:c,mergedDisplayDirective:N(()=>{const{displayDirective:l}=e;return l||u.displayDirective}),arrowPlacement:N(()=>u.arrowPlacement),handleClick(l){r&&r.toggleItem(c.value,o.value,l)}}},render(){const{collapseSlots:e,$slots:t,arrowPlacement:o,collapsed:r,title:d,mergedDisplayDirective:u,mergedClsPrefix:n}=this,s=ue(t,"header",void 0,()=>[d]),c=t["header-extra"]||e["header-extra"];return b("div",{class:[`${n}-collapse-item`,`${n}-collapse-item--${o}-arrow-placement`,!r&&`${n}-collapse-item--active`]},b("div",{class:[`${n}-collapse-item__header`,!r&&`${n}-collapse-item__header--active`]},b("div",{class:`${n}-collapse-item__header-main`,onClick:this.handleClick},o==="right"&&s,b("div",{class:`${n}-collapse-item-arrow`},ue(t.arrow?t:e.arrow?e:t,"arrow",{collapsed:r},()=>{var l;return[b(qe,{clsPrefix:n},{default:(l=e.expandIcon)!==null&&l!==void 0?l:()=>b(Xe,null)})]})),o==="left"&&s),c&&b("div",{class:`${n}-collapse-item__header-extra`,onClick:this.handleClick},{default:c})),b(zt,{clsPrefix:n,displayDirective:u,show:!r},t))}});const Pt=e=>{const{textColor2:t,modalColor:o,borderColor:r,fontSize:d,primaryColor:u}=e;return{loaderFontSize:d,loaderTextColor:t,loaderColor:o,loaderBorder:`1px solid ${r}`,loadingColor:u}},Lt=Ye({name:"Log",common:G,peers:{Scrollbar:Ze,Code:Ee},self:Pt});var Ht=Lt,Ot=I({name:"LogLoader",props:{clsPrefix:{type:String,required:!0}},setup(){return{locale:Ge("Log").localeRef}},render(){const{clsPrefix:e}=this;return b("div",{class:`${e}-log-loader`},b(ye,{clsPrefix:e,strokeWidth:24,scale:.85}),b("span",{class:`${e}-log-loader__content`},this.locale.loading))}}),Wt=I({props:{line:{type:String,default:""}},setup(e){const{trimRef:t,highlightRef:o,languageRef:r,mergedHljsRef:d}=ne(ke),u=T(null);function n(){const c=t.value?(e.line||"").trim():e.line;u.value&&(u.value.innerHTML=s(r.value,c,!1))}function s(c,l,m){m&&(l=l.trim());const{value:i}=d;return i&&c&&i.getLanguage(c)?i.highlight(l,{language:c}).value:l}return se(()=>{o.value&&n()}),Y(V(e,"line"),()=>{o.value&&n()}),{highlight:o,selfRef:u}},render(){const{highlight:e}=this;return b("pre",{ref:"selfRef"},e?null:this.line)}}),Vt=S("log",`
 position: relative;
 box-sizing: border-box;
 transition:
 border-color .3s var(--bezier),
 color .3s var(--bezier);
`,[y("lines",`
 margin: 0;
 white-space: pre-wrap;
 `),j("pre",`
 margin: 0;
 `),S("log-loader",`
 transition:
 color .3s var(--bezier),
 background-color .3s var(--bezier),
 border-color .3s var(--bezier);
 box-sizing: border-box;
 position: absolute;
 right: 16px;
 top: 8px;
 height: 34px;
 border-radius: 17px;
 line-height: 34px;
 white-space: nowrap;
 overflow: hidden;
 border: var(--loader-border);
 color: var(--loader-text-color);
 background-color: var(--loader-color);
 font-size: var(--loader-font-size);
 `,[Ce(),y("content",`
 display: inline-block;
 vertical-align: bottom;
 line-height: 34px;
 padding-left: 40px;
 padding-right: 20px;
 white-space: nowrap;
 `),S("base-loading",`
 color: var(--loading-color);
 position: absolute;
 left: 12px;
 top: calc(50% - 10px);
 font-size: 20px;
 width: 20px;
 height: 20px;
 display: inline-block;
 `)])]);const ke=Symbol("log"),Mt=Object.assign(Object.assign({},L.props),{loading:{type:Boolean,default:!1},trim:{type:Boolean,default:!1},log:String,fontSize:{type:Number,default:14},lines:{type:Array,default:()=>[]},lineHeight:{type:Number,default:1.25},language:String,rows:{type:Number,default:15},offsetTop:{type:Number,default:0},offsetBottom:{type:Number,default:0},hljs:{type:Object,default:void 0},onReachTop:Function,onReachBottom:Function,onRequireMore:Function});var Ut=I({name:"Log",props:Mt,setup(e){const{mergedClsPrefixRef:t}=Q(e),o=T(!1),r=N(()=>e.language!==void 0),d=N(()=>{const a=Math.floor(e.fontSize*e.lineHeight);return`calc(${e.rows*a}px)`}),u=N(()=>{const{log:a}=e;return a?a.split(`
`):e.lines}),n=T(null),s=L("Log","Log",Vt,Ht,e,t);function c(a){const x=a.target,g=x.firstElementChild;if(o.value){de(()=>{o.value=!1});return}const E=x.offsetHeight,h=x.scrollTop,k=g.offsetHeight,R=h,$=k-h-E;if(R<=e.offsetTop){const{onReachTop:w,onRequireMore:B}=e;B&&B("top"),w&&w()}if($<=e.offsetBottom){const{onReachBottom:w,onRequireMore:B}=e;B&&B("bottom"),w&&w()}}const l=Bt(m,300);function m(a){if(o.value){de(()=>{o.value=!1});return}if(n.value){const{containerRef:x,contentRef:g}=n.value;if(x&&g){const E=x.offsetHeight,h=x.scrollTop,k=g.offsetHeight,R=h,$=k-h-E,w=a.deltaY;if(R===0&&w<0){const{onRequireMore:B}=e;B&&B("top")}if($<=0&&w>0){const{onRequireMore:B}=e;B&&B("bottom")}}}}function i(a){const{value:x}=n;if(!x)return;const{slient:g,top:E,position:h}=a;g&&(o.value=!0),E!==void 0?x.scrollTo({left:0,top:E}):(h==="bottom"||h==="top")&&x.scrollTo({position:h})}function F(a=!1){ce("log","`scrollToTop` is deprecated, please use `scrollTo({ position: 'top'})` instead."),i({position:"top",slient:a})}function v(a=!1){ce("log","`scrollToTop` is deprecated, please use `scrollTo({ position: 'bottom'})` instead."),i({position:"bottom",slient:a})}return we(ke,{languageRef:V(e,"language"),mergedHljsRef:Be(e),trimRef:V(e,"trim"),highlightRef:r}),{mergedClsPrefix:t,scrollbarRef:n,mergedTheme:s,styleHeight:d,mergedLines:u,scrollTo:i,scrollToTop:F,scrollToBottom:v,handleWheel:l,handleScroll:c,cssVars:N(()=>{const{self:{loaderFontSize:a,loaderTextColor:x,loaderColor:g,loaderBorder:E,loadingColor:h},common:{cubicBezierEaseInOut:k}}=s.value;return{"--bezier":k,"--loader-font-size":a,"--loader-border":E,"--loader-color":g,"--loader-text-color":x,"--loading-color":h}})}},render(){const{mergedClsPrefix:e,mergedTheme:t}=this;return b("div",{class:`${e}-log`,style:[{lineHeight:this.lineHeight,height:this.styleHeight},this.cssVars],onWheelPassive:this.handleWheel},[b(Qe,{ref:"scrollbarRef",theme:t.peers.Scrollbar,themeOverrides:t.peerOverrides.Scrollbar,onScroll:this.handleScroll},{default:()=>b(St,{internalNoHighlight:!0,theme:t.peers.Code,themeOverrides:t.peerOverrides.Code},{default:()=>this.mergedLines.map((o,r)=>b(Wt,{key:r,line:o}))})}),b(Fe,{name:"fade-in-scale-up-transition"},{default:()=>this.loading?b(Ot,{clsPrefix:e}):null})])}}),Jt={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"};const Kt=e=>{const{primaryColor:t,opacityDisabled:o,borderRadius:r}=e,d="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},Jt),{textColor:"white",loadingColor:t,opacityDisabled:o,railColor:d,railColorActive:t,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${et(t,{alpha:.2})}`})},qt={name:"Switch",common:G,self:Kt};var Xt=qt,Yt=S("switch",`
 height: var(--height);
 min-width: var(--width);
 vertical-align: middle;
 user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[y("children-placeholder",`
 height: var(--rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),y("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),y("button-placeholder",`
 width: calc(1.75 * var(--rail-height));
 height: var(--rail-height);
 `),S("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--button-width) - 4px);
 color: var(--loading-color);
 transition: color .3s var(--bezier);
 `,[Ce({originalTransform:"translateX(-50%) translateY(-50%)"})]),y("checked, unchecked",`
 transition: color .3s var(--bezier);
 color: var(--text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),y("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--rail-height) - var(--offset));
 `),y("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--rail-height) - var(--offset));
 `),j("&:focus",[y("rail",`
 box-shadow: var(--box-shadow-focus);
 `)]),D("round",[y("rail",{borderRadius:"calc(var(--rail-height) / 2)"},[y("button",{borderRadius:"calc(var(--button-height) / 2)"})])]),tt("disabled",[D("pressed",[y("rail",[y("button",{maxWidth:"var(--button-width-pressed)"})])]),y("rail",[j("&:active",[y("button",{maxWidth:"var(--button-width-pressed)"})])]),D("active",[D("pressed",[y("rail",[y("button",{left:"calc(100% - var(--offset) - var(--button-width-pressed))"})])]),y("rail",[j("&:active",[y("button",{left:"calc(100% - var(--offset) - var(--button-width-pressed))"})])])])]),D("active",[y("rail",[y("button",{left:"calc(100% - (var(--rail-height) + var(--button-width)) / 2)"})])]),y("rail",`
 overflow: hidden;
 height: var(--rail-height);
 min-width: var(--rail-width);
 border-radius: var(--rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 background-color .3s var(--bezier),
 box-shadow .3s var(--bezier);
 background-color: var(--rail-color);
 `,[y("button",`
 top: var(--offset);
 left: var(--offset);
 height: var(--button-width);
 width: var(--button-width-pressed);
 max-width: var(--button-width);
 border-radius: var(--button-border-radius);
 background-color: var(--button-color);
 box-shadow: var(--button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--bezier),
 left .3s var(--bezier),
 opacity .3s var(--bezier),
 max-width .3s var(--bezier),
 box-shadow .3s var(--bezier);
 `)]),D("active",[y("rail",{backgroundColor:"var(--rail-color-active)"})]),D("disabled",[y("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]);const Zt=Object.assign(Object.assign({},L.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},onChange:[Function,Array]});var be=I({name:"Switch",props:Zt,setup(e){const{mergedClsPrefixRef:t}=Q(e),o=L("Switch","Switch",Yt,Xt,e,t),r=ot(e),{mergedSizeRef:d,mergedDisabledRef:u}=r,n=T(e.defaultValue),s=V(e,"value"),c=xe(s,n),l=T(!1);function m(h){const{"onUpdate:value":k,onChange:R,onUpdateValue:$}=e,{nTriggerFormInput:w,nTriggerFormChange:B}=r;k&&W(k,h),$&&W($,h),R&&W(R,h),n.value=h,w(),B()}function i(){const{nTriggerFormFocus:h}=r;h()}function F(){const{nTriggerFormBlur:h}=r;h()}function v(){u.value||(c.value!==e.checkedValue?m(e.checkedValue):m(e.uncheckedValue))}function a(){i()}function x(){F(),l.value=!1}function g(h){h.code==="Space"&&(m(!c.value),l.value=!1)}function E(h){h.code==="Space"&&(h.preventDefault(),l.value=!0)}return{handleClick:v,handleBlur:x,handleFocus:a,handleKeyup:g,handleKeydown:E,pressed:l,mergedClsPrefix:t,mergedValue:c,mergedDisabled:u,cssVars:N(()=>{const{value:h}=d,{self:{opacityDisabled:k,railColor:R,railColorActive:$,buttonBoxShadow:w,buttonColor:B,boxShadowFocus:H,loadingColor:q,textColor:$e,[O("buttonHeight",h)]:J,[O("buttonWidth",h)]:Se,[O("buttonWidthPressed",h)]:Te,[O("railHeight",h)]:K,[O("railWidth",h)]:ee,[O("railBorderRadius",h)]:Re,[O("buttonBorderRadius",h)]:Ne},common:{cubicBezierEaseInOut:De}}=o.value,je=te((z(K)-z(J))/2),Ae=te(Math.max(z(K),z(J))),ze=z(K)>z(J)?ee:te(z(ee)+z(J)-z(K));return{"--bezier":De,"--button-border-radius":Ne,"--button-box-shadow":w,"--button-color":B,"--button-width":Se,"--button-width-pressed":Te,"--button-height":J,"--height":Ae,"--offset":je,"--opacity-disabled":k,"--rail-border-radius":Re,"--rail-color":R,"--rail-color-active":$,"--rail-height":K,"--rail-width":ee,"--width":ze,"--box-shadow-focus":H,"--loading-color":q,"--text-color":$e}})}},render(){const{mergedClsPrefix:e,mergedValue:t,mergedDisabled:o,checkedValue:r,$slots:d}=this,u=t===r,{checked:n,unchecked:s}=d;return b("div",{role:"switch","aria-checked":u,class:[`${e}-switch`,u&&`${e}-switch--active`,o&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.pressed&&`${e}-switch--pressed`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},b("div",{class:`${e}-switch__rail`,"aria-hidden":"true"},(n||s)&&b("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},b("div",{class:`${e}-switch__rail-placeholder`},b("div",{class:`${e}-switch__button-placeholder`}),n==null?void 0:n()),b("div",{class:`${e}-switch__rail-placeholder`},b("div",{class:`${e}-switch__button-placeholder`}),s==null?void 0:s())),b("div",{class:`${e}-switch__button`},b(Fe,{name:"fade-in-scale-up-transition"},{default:()=>this.loading?b(ye,{key:"loading",clsPrefix:e,strokeWidth:20}):null}),n&&b("div",{key:"checked",class:`${e}-switch__checked`},n()),s&&b("div",{key:"unchecked",class:`${e}-switch__unchecked`},s()))))}}),Gt="/pikpak/assets/aria2-tip-1.e9ebfae4.png",Qt="/pikpak/assets/aria2-tip-2.f3636f8d.png";const eo={class:"list-page"},to=A(" \u7ED1\u5B9Atelegram "),oo=_("p",null,null,-1),ao=A("Telegram\u7ED1\u5B9A"),ro=_("a",{href:"https://t.me/PikPak_Bot",target:"_blank"},"Telegram\u673A\u5668\u4EBA\u5730\u5740",-1),lo=A("aria2\u8BBE\u7F6E "),io=A("\u9009\u62E9\u6587\u4EF6\u5939\u65F6\u4FDD\u5B58\u6587\u4EF6\u5939\u7ED3\u6784"),no=A("\u9009\u62E9\u6587\u4EF6\u5939\u65F6\u4EC5\u4FDD\u5B58\u6587\u4EF6"),so=_("img",{src:Gt,alt:""},null,-1),uo=_("br",null,null,-1),co=_("br",null,null,-1),ho=_("img",{src:Qt,alt:""},null,-1),fo=A("\u6D4B\u8BD5\u5E76\u4FDD\u5B58"),po=A("\u81EA\u52A8\u767B\u5F55\u8BBE\u7F6E "),go=A("\u4FDD\u5B58"),mo=_("p",null,null,-1),vo=A("\u4FDD\u5B58\u8BBE\u7F6E"),bo=A("\u6062\u590D\u9ED8\u8BA4"),xo=_("a",{href:"https://mypikpak.com/",target:"_blank",class:"n-button"},"\u5B98\u65B9\u7F51\u7AD9",-1),wo=_("a",{href:"https://t.me/pikpak_userservice",target:"_blank",class:"n-button"},"\u5B98\u65B9\u4EA4\u6D41\u7FA4",-1),yo=_("a",{href:"https://github.com/mumuchenchen/pikpak",target:"_blank",class:"n-button"},"\u5F00\u6E90\u4ED3\u5E93",-1),Co=_("a",{href:"https://www.tjsky.net/?p=201",target:"_blank",class:"n-button"},"\u90E8\u7F72\u6559\u7A0B",-1),Fo=_("a",{href:"https://t.me/mumuchenchen",target:"_blank"},"\u95EE\u9898\u53CD\u9988",-1),Bo=_("br",null,null,-1),To=I({setup(e){const t=T(["\u624B\u673A\u6CE8\u518C\u767B\u9646","\u6DFB\u52A0\u63A8\u5E7F\u4E0B\u8F7D","\u7ED1\u5B9ATelegram","\u76F4\u63A5\u5206\u4EAB\u529F\u80FD\uFF08\u4E0B\u7EBF\uFF09","\u4FEE\u6539\u4F20\u8F93\u81EA\u52A8\u8BF7\u6C42\u65B9\u5F0F","\u4F20\u8F93\u53EA\u663E\u793A\u4FDD\u5B58\u4E2D","\u81EA\u5B9A\u4E49\u83DC\u5355","\u8D44\u6E90\u5E93\u5206\u9875\uFF0C\u5206\u4EAB\u79D2\u4F20\u652F\u6301\u6587\u4EF6\u53CA","...."]),o=T({host:"",token:"",dir:!0}),r=()=>{let v={id:"",jsonrpc:"2.0",method:"aria2.getGlobalStat",params:[]};o.value.token&&v.params.splice(0,0,"token:"+o.value.token),fetch(o.value.host,{method:"POST",body:JSON.stringify(v),headers:new Headers({"Content-Type":"application/json"})}).then(a=>a.json()).then(a=>{a.error&&a.error.message?window.$message.error(a.error.message):a.result&&(window.localStorage.setItem("pikpakAria2",JSON.stringify(o.value)),window.$message.success("\u4FDD\u5B58\u6210\u529F"))}).catch(a=>console.error("Error:",a))},d=T(!1),u=T({username:"",password:""}),n=at(),s=()=>{d.value?n.warning({title:"\u8B66\u544A",content:"\u8BB0\u4F4F\u767B\u9646\u662F\u6307\u6D4F\u89C8\u5668\u672C\u5730\u660E\u6587\u4FDD\u5B58\u7528\u6237\u540D\u5BC6\u7801\u7528\u4E8E\u4E0B\u6B21\u81EA\u52A8\u767B\u9646\uFF0C\u8BF7\u52FF\u5728\u975E\u4FE1\u4EFB\u8BBE\u5907\u9009\u62E9",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{window.localStorage.setItem("pikpakLoginData",JSON.stringify(u.value))},onNegativeClick:()=>{}}):window.localStorage.removeItem("pikpakLoginData")},c=T(""),l=()=>{let v=c.value.split(`
`).filter(a=>a!="");window.localStorage.setItem("proxy",JSON.stringify(v)),window.localStorage.setItem("isSettingProxy","true")},m=()=>{window.localStorage.setItem("proxy",JSON.stringify(pe)),window.localStorage.removeItem("isSettingProxy"),c.value=pe.join(`
`)};se(()=>{let v=JSON.parse(window.localStorage.getItem("pikpakAria2")||"{}");v.dir===void 0&&(v.dir=!0),v.host&&(o.value=v);let a=JSON.parse(window.localStorage.getItem("pikpakLoginData")||"{}");a.username&&a.password&&(u.value=a,d.value=!0);let x=JSON.parse(window.localStorage.getItem("proxy")||"[]");x.length&&(c.value=x.join(`
`))});const i=T(),F=()=>{let v=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(!v&&!v.access_token)return window.$message.error("\u8BF7\u5148\u767B\u9646"),!1;let a=i.value&&decodeURIComponent(i.value).match(/(^|&)token=([^&]*)(&|$)/);if(console.log(a),!a||!a.length||a.length!=4)return window.$message.error("\u8BF7\u8F93\u5165\u6B63\u786E\u94FE\u63A5"),!1;nt.post("https://api-drive.mypikpak.com/user/v1/bind",{accessToken:v.access_token,thirdType:"TG",thirdToken:a[2]}).then(x=>{i.value="",x.data.bound?window.$message.success("\u7ED1\u5B9A\u6210\u529F"):window.$message.error("\u7ED1\u5B9A\u5931\u8D25")})};return(v,a)=>{const x=rt("n-text");return oe(),he("div",eo,[f(p(At),{"default-expanded-names":["-1","0","2","3"]},{default:C(()=>[f(p(U),{name:"-1"},{header:C(()=>[to,_("a",{onClick:a[0]||(a[0]=re(()=>{},["stop"])),href:"https://www.tjsky.net/?p=220#Telegram",target:"_blank"},[f(p(ae),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:C(()=>[f(p(le))]),_:1})])]),default:C(()=>[f(p(M),{value:i.value,"onUpdate:value":a[1]||(a[1]=g=>i.value=g),placeholder:"\u590D\u5236telegram\u7ED1\u5B9A\u94FE\u63A5\u5230\u8FD9"},null,8,["value"]),oo,f(p(X),{disabled:!i.value,type:"primary",onClick:F},{default:C(()=>[ao]),_:1},8,["disabled"]),ro]),_:1}),f(p(U),{name:"0",title:"aria2\u8BBE\u7F6E"},{header:C(()=>[lo,_("a",{onClick:a[2]||(a[2]=re(()=>{},["stop"])),href:"https://www.tjsky.net/?p=220#arai2",target:"_blank"},[f(p(ae),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:C(()=>[f(p(le))]),_:1})])]),default:C(()=>[f(p(ge),{"label-width":"100px","label-align":"left","label-placement":"left"},{default:C(()=>[f(p(P),{label:"aria2\u94FE\u63A5\uFF1A"},{default:C(()=>[f(p(M),{value:o.value.host,"onUpdate:value":a[3]||(a[3]=g=>o.value.host=g),placeholder:"\u4F8B\u5982http://localhost:6800/jsonrpc"},null,8,["value"])]),_:1}),f(p(P),{label:"aria2Token\uFF1A"},{default:C(()=>[f(p(M),{value:o.value.token,"onUpdate:value":a[4]||(a[4]=g=>o.value.token=g),type:"password","show-password-on":"mousedown"},null,8,["value"])]),_:1}),f(p(P),{label:"\u6587\u4EF6\u5939\u8BBE\u7F6E\uFF1A"},{default:C(()=>[f(p(be),{value:o.value.dir,"onUpdate:value":a[5]||(a[5]=g=>o.value.dir=g)},{checked:C(()=>[io]),unchecked:C(()=>[no]),_:1},8,["value"])]),_:1}),o.value.host&&o.value.host.indexOf("https://")===-1&&o.value.host.indexOf("http://localhost")==-1&&o.value.host.indexOf("http://127.0.0.1")===-1?(oe(),lt(p(st),{key:0,title:"\u7531\u4E8E\u6D4F\u89C8\u5668\u9650\u5236\uFF0C\u8BF7\u6309\u4E0B\u56FE\u8BBE\u7F6E\u5F00\u59CB\u6DF7\u5408\u6A21\u5F0F",type:"info"},{default:C(()=>[so,uo,co,ho]),_:1})):fe("",!0),f(p(P),null,{default:C(()=>[f(p(X),{type:"primary",onClick:r},{default:C(()=>[fo]),_:1})]),_:1})]),_:1})]),_:1}),f(p(U),{name:"1",title:"\u81EA\u52A8\u767B\u5F55\u8BBE\u7F6E"},{header:C(()=>[po,_("a",{onClick:a[6]||(a[6]=re(()=>{},["stop"])),href:"https://www.tjsky.net/?p=220#i-6",target:"_blank"},[f(p(ae),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:C(()=>[f(p(le))]),_:1})])]),default:C(()=>[f(p(ge),{"label-width":"100px","label-align":"left","label-placement":"left"},{default:C(()=>[f(p(P),{label:"\u662F\u5426\u5F00\u542F"},{default:C(()=>[f(p(be),{value:d.value,"onUpdate:value":a[7]||(a[7]=g=>d.value=g)},null,8,["value"])]),_:1}),d.value?(oe(),he(it,{key:0},[f(p(P),{label:"\u7528\u6237\u540D"},{default:C(()=>[f(p(M),{value:u.value.username,"onUpdate:value":a[8]||(a[8]=g=>u.value.username=g),placeholder:"\u7528\u6237\u540D"},null,8,["value"])]),_:1}),f(p(P),{label:"\u5BC6\u7801"},{default:C(()=>[f(p(M),{value:u.value.password,"onUpdate:value":a[9]||(a[9]=g=>u.value.password=g),type:"password","show-password-on":"mousedown"},null,8,["value"])]),_:1})],64)):fe("",!0),f(p(P),null,{default:C(()=>[f(p(X),{type:"primary",onClick:s},{default:C(()=>[go]),_:1})]),_:1})]),_:1})]),_:1}),f(p(U),{name:"3",title:"\u4EE3\u7406\u8BBE\u7F6E"},{default:C(()=>[f(p(M),{type:"textarea",value:c.value,"onUpdate:value":a[10]||(a[10]=g=>c.value=g),rows:"4",placeholder:"\u652F\u6301\u591A\u4E2A\u968F\u673A\uFF0C\u4E00\u884C\u4E00\u4E2A\uFF0C\u4E3A\u7A7A\u5219\u4E0D\u4EE3\u7406"},null,8,["value"]),mo,f(p(X),{type:"primary",onClick:l},{default:C(()=>[vo]),_:1}),f(x,{onClick:m},{default:C(()=>[bo]),_:1})]),_:1}),f(p(U),{title:"\u5173\u4E8E",name:"2"},{default:C(()=>[f(p(ut),null,{default:C(()=>[xo,wo,yo,Co,Fo]),_:1}),Bo]),_:1}),f(p(U),{title:"\u529F\u80FD\u5217\u8868",name:"3"},{default:C(()=>[f(p(Ut),{lines:t.value},null,8,["lines"])]),_:1})]),_:1})])}}});export{To as default};
