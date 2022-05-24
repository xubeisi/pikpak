import{b as oe,at as re,O as h,d as V,Y as B,aD as A,r as F,c as $,aB as P,_ as ae,$ as M,aw as i,W as m,V as n,X as p,ah as w,be as ce,aV as de,aW as le,i as ne,a5 as ie,Z as U,aX as te,ab as se,bf as be,a1 as T}from"./index.bfe30da6.js";var ue={sizeSmall:"14px",sizeMedium:"16px",sizeLarge:"18px",labelPadding:"0 8px"};const he=o=>{const{baseColor:x,inputColorDisabled:b,cardColor:g,modalColor:z,popoverColor:a,textColorDisabled:f,borderColor:t,primaryColor:c,textColor2:k,fontSizeSmall:y,fontSizeMedium:s,fontSizeLarge:u,borderRadiusSmall:v}=o;return Object.assign(Object.assign({},ue),{fontSizeSmall:y,fontSizeMedium:s,fontSizeLarge:u,borderRadius:v,color:x,colorChecked:c,colorDisabled:b,colorDisabledChecked:b,colorTableHeader:g,colorTableHeaderModal:z,colorTableHeaderPopover:a,checkMarkColor:x,checkMarkColorDisabled:f,checkMarkColorDisabledChecked:f,border:`1px solid ${t}`,borderDisabled:`1px solid ${t}`,borderDisabledChecked:`1px solid ${t}`,borderChecked:`1px solid ${c}`,borderFocus:`1px solid ${c}`,boxShadowFocus:`0 0 0 2px ${re(c,{alpha:.3})}`,textColor:k,textColorDisabled:f})},fe={name:"Checkbox",common:oe,self:he};var ke=fe,ve=h("svg",{viewBox:"0 0 64 64",class:"check-icon"},h("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),me=h("svg",{viewBox:"0 0 100 100",class:"line-icon"},h("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"}));const I=Symbol("checkboxGroup"),xe={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:{type:[Function,Array],validator:()=>!0,default:void 0}};var ye=V({name:"CheckboxGroup",props:xe,setup(o){const{mergedClsPrefixRef:x}=B(o),b=A(o),{mergedSizeRef:g,mergedDisabledRef:z}=b,a=F(o.defaultValue),f=$(()=>o.value),t=P(f,a),c=$(()=>{var s;return((s=t.value)===null||s===void 0?void 0:s.length)||0}),k=$(()=>Array.isArray(t.value)?new Set(t.value):new Set);function y(s,u){const{nTriggerFormInput:v,nTriggerFormChange:S}=b,{onChange:e,"onUpdate:value":d,onUpdateValue:r}=o;if(Array.isArray(t.value)){const l=Array.from(t.value),C=l.findIndex(D=>D===u);s?~C||(l.push(u),r&&i(r,l),d&&i(d,l),v(),S(),a.value=l,e&&i(e,l)):~C&&(l.splice(C,1),r&&i(r,l),d&&i(d,l),e&&i(e,l),a.value=l,v(),S())}else s?(r&&i(r,[u]),d&&i(d,[u]),e&&i(e,[u]),a.value=[u],v(),S()):(r&&i(r,[]),d&&i(d,[]),e&&i(e,[]),a.value=[],v(),S())}return ae(I,{checkedCountRef:c,maxRef:M(o,"max"),minRef:M(o,"min"),valueSetRef:k,disabledRef:z,mergedSizeRef:g,toggleCheckbox:y}),{mergedClsPrefix:x}},render(){return h("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),ge=m([n("checkbox",`
 line-height: 1;
 font-size: var(--font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 align-items: center;
 white-space: nowrap;
 vertical-align: middle;
 --merged-color-table-header: var(--color-table-header);
 `,[m("&:hover",[n("checkbox-box",[p("border",{border:"var(--border-checked)"})])]),m("&:focus:not(:active)",[n("checkbox-box",[p("border",{border:"var(--border-focus)",boxShadow:"var(--box-shadow-focus)"})])]),w("table-header",[n("checkbox-box",{backgroundColor:"var(--merged-color-table-header)"})]),w("checked",[n("checkbox-box",{backgroundColor:"var(--color-checked)"},[n("checkbox-icon",[m(".check-icon",`
 width: 100%;
 opacity: 1;
 transform: scale(1);
 `)])])]),w("indeterminate",[n("checkbox-box",[n("checkbox-icon",[m(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),m(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),w("checked, indeterminate",[m("&:focus:not(:active)",[n("checkbox-box",[p("border",{border:"var(--border-checked)",boxShadow:"var(--box-shadow-focus)"})])]),n("checkbox-box",`
 background-color: var(--color-checked);
 border-left: 0;
 border-top: 0;
 `,[p("border",{border:"var(--border-checked)"})])]),w("disabled",{cursor:"not-allowed"},[w("checked",[n("checkbox-box",`
 background-color: var(--color-disabled-checked);
 `,[p("border",{border:"var(--border-disabled-checked)"}),n("checkbox-icon",[m(".check-icon, .line-icon",{fill:"var(--check-mark-color-disabled-checked)"})])])]),n("checkbox-box",`
 background-color: var(--color-disabled);
 `,[p("border",{border:"var(--border-disabled)"}),n("checkbox-icon",[m(".check-icon, .line-icon",{fill:"var(--check-mark-color-disabled)"})])]),p("label",{color:"var(--text-color-disabled)"})]),n("checkbox-box",`
 height: var(--size);
 width: var(--size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--border-radius);
 background-color: var(--color);
 position: relative;
 transition:
 background-color 0.3s var(--bezier);
 `,[p("border",`
 transition:
 border-color .3s var(--bezier),
 box-shadow .3s var(--bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--border);
 `),n("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[m(".check-icon, .line-icon",`
 fill: var(--check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--bezier),
 transform 0.3s var(--bezier),
 opacity 0.3s var(--bezier),
 border-color 0.3s var(--bezier);
 `),ce({left:"1px",top:"1px"})])]),p("label",`
 color: var(--text-color);
 transition: color .3s var(--bezier);
 user-select: none;
 padding: var(--label-padding);
 `,[m("&:empty",{display:"none"})])]),de(n("checkbox",`
 --merged-color-table-header: var(--color-table-header-modal);
 `)),le(n("checkbox",`
 --merged-color-table-header: var(--color-table-header-popover);
 `))]);const Ce=Object.assign(Object.assign({},U.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateTableHeader:Boolean,onChange:[Function,Array]});var Se=V({name:"Checkbox",props:Ce,setup(o){const{mergedClsPrefixRef:x}=B(o),b=A(o,{mergedSize(e){const{size:d}=o;if(d!==void 0)return d;if(a){const{value:r}=a.mergedSizeRef;if(r!==void 0)return r}if(e){const{mergedSize:r}=e;if(r!==void 0)return r.value}return"medium"},mergedDisabled(e){const{disabled:d}=o;if(d!==void 0)return d;if(a){if(a.disabledRef.value)return!0;const{maxRef:{value:r},checkedCountRef:l}=a;if(r!==void 0&&l.value>=r&&!k.value)return!0;const{minRef:{value:C}}=a;if(C!==void 0&&l.value<=C&&k.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:g,mergedSizeRef:z}=b,a=ne(I,null),f=F(o.defaultChecked),t=M(o,"checked"),c=P(t,f),k=ie(()=>{if(a){const e=a.valueSetRef.value;return e&&o.value!==void 0?e.has(o.value):!1}else return c.value===o.checkedValue}),y=U("Checkbox","Checkbox",ge,ke,o,x);function s(e){if(a&&o.value!==void 0)a.toggleCheckbox(!k.value,o.value);else{const{onChange:d,"onUpdate:checked":r,onUpdateChecked:l}=o,{nTriggerFormInput:C,nTriggerFormChange:D}=b,R=k.value?o.uncheckedValue:o.checkedValue;r&&i(r,R,e),l&&i(l,R,e),d&&i(d,R,e),C(),D(),f.value=R}}function u(e){g.value||s(e)}function v(e){if(!g.value)switch(e.code){case"Space":case"Enter":case"NumpadEnter":s(e)}}function S(e){switch(e.code){case"Space":e.preventDefault()}}return Object.assign(b,{mergedClsPrefix:x,mergedDisabled:g,renderedChecked:k,mergedTheme:y,labelId:te(),handleClick:u,handleKeyUp:v,handleKeyDown:S,cssVars:$(()=>{const{value:e}=z,{common:{cubicBezierEaseInOut:d},self:{borderRadius:r,color:l,colorChecked:C,colorDisabled:D,colorTableHeader:R,colorTableHeaderModal:N,colorTableHeaderPopover:H,checkMarkColor:L,checkMarkColorDisabled:j,border:K,borderFocus:_,borderDisabled:O,borderChecked:E,boxShadowFocus:G,textColor:W,textColorDisabled:X,checkMarkColorDisabledChecked:Y,colorDisabledChecked:Z,borderDisabledChecked:q,labelPadding:J,[T("fontSize",e)]:Q,[T("size",e)]:ee}}=y.value;return{"--size":ee,"--bezier":d,"--border-radius":r,"--border":K,"--border-checked":E,"--border-focus":_,"--border-disabled":O,"--border-disabled-checked":q,"--box-shadow-focus":G,"--color":l,"--color-checked":C,"--color-table-header":R,"--color-table-header-modal":N,"--color-table-header-popover":H,"--color-disabled":D,"--color-disabled-checked":Z,"--text-color":W,"--text-color-disabled":X,"--check-mark-color":L,"--check-mark-color-disabled":j,"--check-mark-color-disabled-checked":Y,"--font-size":Q,"--label-padding":J}})})},render(){const{$slots:o,renderedChecked:x,mergedDisabled:b,indeterminate:g,privateTableHeader:z,cssVars:a,labelId:f,label:t,mergedClsPrefix:c,focusable:k,handleKeyUp:y,handleKeyDown:s,handleClick:u}=this;return h("div",{class:[`${c}-checkbox`,x&&`${c}-checkbox--checked`,b&&`${c}-checkbox--disabled`,g&&`${c}-checkbox--indeterminate`,z&&`${c}-checkbox--table-header`],tabindex:b||!k?void 0:0,role:"checkbox","aria-checked":g?"mixed":x,"aria-labelledby":f,style:a,onKeyup:y,onKeydown:s,onClick:u,onMousedown:()=>{const v=S=>{S.preventDefault()};window.addEventListener("selectstart",v),setTimeout(()=>{window.removeEventListener("selectstart",v)},0)}},h("div",{class:`${c}-checkbox-box`},h(be,null,{default:()=>this.indeterminate?h("div",{key:"indeterminate",class:`${c}-checkbox-icon`},me):h("div",{key:"check",class:`${c}-checkbox-icon`},ve)}),h("div",{class:`${c}-checkbox-box__border`})),t!==null||o.default?h("span",{class:`${c}-checkbox__label`,id:f},se(o,"default",void 0,()=>[t])):null)}});export{ye as N,Se as a,ke as c};
