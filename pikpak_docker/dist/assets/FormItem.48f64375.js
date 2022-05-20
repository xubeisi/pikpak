import{b as Ve,V as I,ah as B,W as Y,d as ce,Y as Re,Z as te,_ as oe,O as $,b3 as ge,c as P,i as re,as as he,r as Q,b4 as Me,X as Te,b5 as Ne,$ as G,aX as pe,w as Ce,b6 as He,af as Be,ab as be,aR as ye,a1 as T}from"./index.227ee509.js";import{g as Pe}from"./get.cfad72f5.js";var De={blankHeightSmall:"28px",blankHeightMedium:"34px",blankHeightLarge:"40px",feedbackPadding:"4px 0 0 2px",feedbackHeightSmall:"24px",feedbackHeightMedium:"24px",feedbackHeightLarge:"26px",feedbackFontSizeSmall:"13px",feedbackFontSizeMedium:"14px",feedbackFontSizeLarge:"14px",labelFontSizeLeftSmall:"14px",labelFontSizeLeftMedium:"14px",labelFontSizeLeftLarge:"15px",labelFontSizeTopSmall:"13px",labelFontSizeTopMedium:"14px",labelFontSizeTopLarge:"14px",labelHeightSmall:"24px",labelHeightMedium:"26px",labelHeightLarge:"28px",labelPaddingVertical:"0 0 8px 2px",labelPaddingHorizontal:"0 12px 0 0",labelTextAlignVertical:"left",labelTextAlignHorizontal:"right"};const We=r=>{const{textColor1:e,errorColor:t,warningColor:n,lineHeight:i,textColor3:o}=r;return Object.assign(Object.assign({},De),{lineHeight:i,labelTextColor:e,asteriskColor:t,feedbackTextColorError:t,feedbackTextColorWarning:n,feedbackTextColor:o})},Ye={name:"Form",common:Ve,self:We};var Oe=Ye,Ke=I("form",[B("inline",`
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `,[I("form-item",{width:"auto",marginRight:"18px"},[Y("&:last-child",{marginRight:0})])])]);const Z=Symbol("form"),Ae=Symbol("formItemInsts");var Je=globalThis&&globalThis.__awaiter||function(r,e,t,n){function i(o){return o instanceof t?o:new t(function(a){a(o)})}return new(t||(t=Promise))(function(o,a){function f(u){try{h(n.next(u))}catch(m){a(m)}}function s(u){try{h(n.throw(u))}catch(m){a(m)}}function h(u){u.done?o(u.value):i(u.value).then(f,s)}h((n=n.apply(r,e||[])).next())})};const Ue=Object.assign(Object.assign({},te.props),{inline:Boolean,labelWidth:[Number,String],labelAlign:String,labelPlacement:{type:String,default:"top"},model:{type:Object,default:()=>{}},rules:Object,disabled:Boolean,size:String,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:!0},onSubmit:{type:Function,default:r=>r.preventDefault()},showLabel:{type:Boolean,default:void 0}});var Vt=ce({name:"Form",props:Ue,setup(r){const{mergedClsPrefixRef:e}=Re(r);te("Form","Form",Ke,Oe,r,e);const t={};function n(a,f=()=>!0){return Je(this,void 0,void 0,function*(){return yield new Promise((s,h)=>{const u=[];for(const m of ge(t)){const l=t[m];for(const w of l)w.path&&u.push(w.internalValidate(null,f))}Promise.all(u).then(m=>{if(m.some(l=>!l.valid)){const l=m.filter(w=>w.errors).map(w=>w.errors);a?a(l):h(l)}else a?a():s()})})})}function i(){for(const a of ge(t)){const f=t[a];for(const s of f)s.restoreValidation()}}return oe(Z,r),oe(Ae,{formItems:t}),Object.assign({validate:n,restoreValidation:i},{mergedClsPrefix:e})},render(){const{mergedClsPrefix:r}=this;return $("form",{class:[`${r}-form`,this.inline&&`${r}-form--inline`],onSubmit:this.onSubmit},this.$slots)}});function N(){return N=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},N.apply(this,arguments)}function Ze(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,U(r,e)}function fe(r){return fe=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},fe(r)}function U(r,e){return U=Object.setPrototypeOf||function(n,i){return n.__proto__=i,n},U(r,e)}function Xe(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ee(r,e,t){return Xe()?ee=Reflect.construct:ee=function(i,o,a){var f=[null];f.push.apply(f,o);var s=Function.bind.apply(i,f),h=new s;return a&&U(h,a.prototype),h},ee.apply(null,arguments)}function Ge(r){return Function.toString.call(r).indexOf("[native code]")!==-1}function se(r){var e=typeof Map=="function"?new Map:void 0;return se=function(n){if(n===null||!Ge(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e!="undefined"){if(e.has(n))return e.get(n);e.set(n,i)}function i(){return ee(n,arguments,fe(this).constructor)}return i.prototype=Object.create(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),U(i,n)},se(r)}var Qe=/%[sdj%]/g,et=function(){};typeof process!="undefined"&&process.env;function le(r){if(!r||!r.length)return null;var e={};return r.forEach(function(t){var n=t.field;e[n]=e[n]||[],e[n].push(t)}),e}function E(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];var i=0,o=t.length;if(typeof r=="function")return r.apply(null,t);if(typeof r=="string"){var a=r.replace(Qe,function(f){if(f==="%%")return"%";if(i>=o)return f;switch(f){case"%s":return String(t[i++]);case"%d":return Number(t[i++]);case"%j":try{return JSON.stringify(t[i++])}catch{return"[Circular]"}break;default:return f}});return a}return r}function tt(r){return r==="string"||r==="url"||r==="hex"||r==="email"||r==="date"||r==="pattern"}function v(r,e){return!!(r==null||e==="array"&&Array.isArray(r)&&!r.length||tt(e)&&typeof r=="string"&&!r)}function rt(r,e,t){var n=[],i=0,o=r.length;function a(f){n.push.apply(n,f||[]),i++,i===o&&t(n)}r.forEach(function(f){e(f,a)})}function ve(r,e,t){var n=0,i=r.length;function o(a){if(a&&a.length){t(a);return}var f=n;n=n+1,f<i?e(r[f],o):t([])}o([])}function nt(r){var e=[];return Object.keys(r).forEach(function(t){e.push.apply(e,r[t]||[])}),e}var xe=function(r){Ze(e,r);function e(t,n){var i;return i=r.call(this,"Async Validation Error")||this,i.errors=t,i.fields=n,i}return e}(se(Error));function it(r,e,t,n,i){if(e.first){var o=new Promise(function(l,w){var z=function(d){return n(d),d.length?w(new xe(d,le(d))):l(i)},c=nt(r);ve(c,t,z)});return o.catch(function(l){return l}),o}var a=e.firstFields===!0?Object.keys(r):e.firstFields||[],f=Object.keys(r),s=f.length,h=0,u=[],m=new Promise(function(l,w){var z=function(b){if(u.push.apply(u,b),h++,h===s)return n(u),u.length?w(new xe(u,le(u))):l(i)};f.length||(n(u),l(i)),f.forEach(function(c){var b=r[c];a.indexOf(c)!==-1?ve(b,t,z):rt(b,t,z)})});return m.catch(function(l){return l}),m}function at(r){return!!(r&&r.message!==void 0)}function ot(r,e){for(var t=r,n=0;n<e.length;n++){if(t==null)return t;t=t[e[n]]}return t}function we(r,e){return function(t){var n;return r.fullFields?n=ot(e,r.fullFields):n=e[t.field||r.fullField],at(t)?(t.field=t.field||r.fullField,t.fieldValue=n,t):{message:typeof t=="function"?t():t,fieldValue:n,field:t.field||r.fullField}}}function ke(r,e){if(e){for(var t in e)if(e.hasOwnProperty(t)){var n=e[t];typeof n=="object"&&typeof r[t]=="object"?r[t]=N({},r[t],n):r[t]=n}}return r}var je=function(e,t,n,i,o,a){e.required&&(!n.hasOwnProperty(e.field)||v(t,a||e.type))&&i.push(E(o.messages.required,e.fullField))},ft=function(e,t,n,i,o){(/^\s+$/.test(t)||t==="")&&i.push(E(o.messages.whitespace,e.fullField))},ie={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,url:new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i"),hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},K={integer:function(e){return K.number(e)&&parseInt(e,10)===e},float:function(e){return K.number(e)&&!K.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!K.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(ie.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(ie.url)},hex:function(e){return typeof e=="string"&&!!e.match(ie.hex)}},st=function(e,t,n,i,o){if(e.required&&t===void 0){je(e,t,n,i,o);return}var a=["integer","float","array","regexp","object","method","email","number","date","url","hex"],f=e.type;a.indexOf(f)>-1?K[f](t)||i.push(E(o.messages.types[f],e.fullField,e.type)):f&&typeof t!==e.type&&i.push(E(o.messages.types[f],e.fullField,e.type))},lt=function(e,t,n,i,o){var a=typeof e.len=="number",f=typeof e.min=="number",s=typeof e.max=="number",h=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,u=t,m=null,l=typeof t=="number",w=typeof t=="string",z=Array.isArray(t);if(l?m="number":w?m="string":z&&(m="array"),!m)return!1;z&&(u=t.length),w&&(u=t.replace(h,"_").length),a?u!==e.len&&i.push(E(o.messages[m].len,e.fullField,e.len)):f&&!s&&u<e.min?i.push(E(o.messages[m].min,e.fullField,e.min)):s&&!f&&u>e.max?i.push(E(o.messages[m].max,e.fullField,e.max)):f&&s&&(u<e.min||u>e.max)&&i.push(E(o.messages[m].range,e.fullField,e.min,e.max))},H="enum",dt=function(e,t,n,i,o){e[H]=Array.isArray(e[H])?e[H]:[],e[H].indexOf(t)===-1&&i.push(E(o.messages[H],e.fullField,e[H].join(", ")))},ut=function(e,t,n,i,o){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||i.push(E(o.messages.pattern.mismatch,e.fullField,t,e.pattern));else if(typeof e.pattern=="string"){var a=new RegExp(e.pattern);a.test(t)||i.push(E(o.messages.pattern.mismatch,e.fullField,t,e.pattern))}}},g={required:je,whitespace:ft,type:st,range:lt,enum:dt,pattern:ut},ct=function(e,t,n,i,o){var a=[],f=e.required||!e.required&&i.hasOwnProperty(e.field);if(f){if(v(t,"string")&&!e.required)return n();g.required(e,t,i,a,o,"string"),v(t,"string")||(g.type(e,t,i,a,o),g.range(e,t,i,a,o),g.pattern(e,t,i,a,o),e.whitespace===!0&&g.whitespace(e,t,i,a,o))}n(a)},mt=function(e,t,n,i,o){var a=[],f=e.required||!e.required&&i.hasOwnProperty(e.field);if(f){if(v(t)&&!e.required)return n();g.required(e,t,i,a,o),t!==void 0&&g.type(e,t,i,a,o)}n(a)},gt=function(e,t,n,i,o){var a=[],f=e.required||!e.required&&i.hasOwnProperty(e.field);if(f){if(t===""&&(t=void 0),v(t)&&!e.required)return n();g.required(e,t,i,a,o),t!==void 0&&(g.type(e,t,i,a,o),g.range(e,t,i,a,o))}n(a)},ht=function(e,t,n,i,o){var a=[],f=e.required||!e.required&&i.hasOwnProperty(e.field);if(f){if(v(t)&&!e.required)return n();g.required(e,t,i,a,o),t!==void 0&&g.type(e,t,i,a,o)}n(a)},pt=function(e,t,n,i,o){var a=[],f=e.required||!e.required&&i.hasOwnProperty(e.field);if(f){if(v(t)&&!e.required)return n();g.required(e,t,i,a,o),v(t)||g.type(e,t,i,a,o)}n(a)},bt=function(e,t,n,i,o){var a=[],f=e.required||!e.required&&i.hasOwnProperty(e.field);if(f){if(v(t)&&!e.required)return n();g.required(e,t,i,a,o),t!==void 0&&(g.type(e,t,i,a,o),g.range(e,t,i,a,o))}n(a)},yt=function(e,t,n,i,o){var a=[],f=e.required||!e.required&&i.hasOwnProperty(e.field);if(f){if(v(t)&&!e.required)return n();g.required(e,t,i,a,o),t!==void 0&&(g.type(e,t,i,a,o),g.range(e,t,i,a,o))}n(a)},vt=function(e,t,n,i,o){var a=[],f=e.required||!e.required&&i.hasOwnProperty(e.field);if(f){if(t==null&&!e.required)return n();g.required(e,t,i,a,o,"array"),t!=null&&(g.type(e,t,i,a,o),g.range(e,t,i,a,o))}n(a)},xt=function(e,t,n,i,o){var a=[],f=e.required||!e.required&&i.hasOwnProperty(e.field);if(f){if(v(t)&&!e.required)return n();g.required(e,t,i,a,o),t!==void 0&&g.type(e,t,i,a,o)}n(a)},wt="enum",kt=function(e,t,n,i,o){var a=[],f=e.required||!e.required&&i.hasOwnProperty(e.field);if(f){if(v(t)&&!e.required)return n();g.required(e,t,i,a,o),t!==void 0&&g[wt](e,t,i,a,o)}n(a)},Ft=function(e,t,n,i,o){var a=[],f=e.required||!e.required&&i.hasOwnProperty(e.field);if(f){if(v(t,"string")&&!e.required)return n();g.required(e,t,i,a,o),v(t,"string")||g.pattern(e,t,i,a,o)}n(a)},qt=function(e,t,n,i,o){var a=[],f=e.required||!e.required&&i.hasOwnProperty(e.field);if(f){if(v(t,"date")&&!e.required)return n();if(g.required(e,t,i,a,o),!v(t,"date")){var s;t instanceof Date?s=t:s=new Date(t),g.type(e,s,i,a,o),s&&g.range(e,s.getTime(),i,a,o)}}n(a)},St=function(e,t,n,i,o){var a=[],f=Array.isArray(t)?"array":typeof t;g.required(e,t,i,a,o,f),n(a)},ae=function(e,t,n,i,o){var a=e.type,f=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(v(t,a)&&!e.required)return n();g.required(e,t,i,f,o,a),v(t,a)||g.type(e,t,i,f,o)}n(f)},Rt=function(e,t,n,i,o){var a=[],f=e.required||!e.required&&i.hasOwnProperty(e.field);if(f){if(v(t)&&!e.required)return n();g.required(e,t,i,a,o)}n(a)},J={string:ct,method:mt,number:gt,boolean:ht,regexp:pt,integer:bt,float:yt,array:vt,object:xt,enum:kt,pattern:Ft,date:qt,url:ae,hex:ae,email:ae,required:St,any:Rt};function de(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var ue=de(),X=function(){function r(t){this.rules=null,this._messages=ue,this.define(t)}var e=r.prototype;return e.define=function(n){var i=this;if(!n)throw new Error("Cannot configure a schema with no rules");if(typeof n!="object"||Array.isArray(n))throw new Error("Rules must be an object");this.rules={},Object.keys(n).forEach(function(o){var a=n[o];i.rules[o]=Array.isArray(a)?a:[a]})},e.messages=function(n){return n&&(this._messages=ke(de(),n)),this._messages},e.validate=function(n,i,o){var a=this;i===void 0&&(i={}),o===void 0&&(o=function(){});var f=n,s=i,h=o;if(typeof s=="function"&&(h=s,s={}),!this.rules||Object.keys(this.rules).length===0)return h&&h(null,f),Promise.resolve(f);function u(c){var b=[],d={};function L(j){if(Array.isArray(j)){var S;b=(S=b).concat.apply(S,j)}else b.push(j)}for(var y=0;y<c.length;y++)L(c[y]);b.length?(d=le(b),h(b,d)):h(null,f)}if(s.messages){var m=this.messages();m===ue&&(m=de()),ke(m,s.messages),s.messages=m}else s.messages=this.messages();var l={},w=s.keys||Object.keys(this.rules);w.forEach(function(c){var b=a.rules[c],d=f[c];b.forEach(function(L){var y=L;typeof y.transform=="function"&&(f===n&&(f=N({},f)),d=f[c]=y.transform(d)),typeof y=="function"?y={validator:y}:y=N({},y),y.validator=a.getValidationMethod(y),y.validator&&(y.field=c,y.fullField=y.fullField||c,y.type=a.getType(y),l[c]=l[c]||[],l[c].push({rule:y,value:d,source:f,field:c}))})});var z={};return it(l,s,function(c,b){var d=c.rule,L=(d.type==="object"||d.type==="array")&&(typeof d.fields=="object"||typeof d.defaultField=="object");L=L&&(d.required||!d.required&&c.value),d.field=c.field;function y(x,V){return N({},V,{fullField:d.fullField+"."+x,fullFields:d.fullFields?[].concat(d.fullFields,[x]):[x]})}function j(x){x===void 0&&(x=[]);var V=Array.isArray(x)?x:[x];!s.suppressWarning&&V.length&&r.warning("async-validator:",V),V.length&&d.message!==void 0&&(V=[].concat(d.message));var p=V.map(we(d,f));if(s.first&&p.length)return z[d.field]=1,b(p);if(!L)b(p);else{if(d.required&&!c.value)return d.message!==void 0?p=[].concat(d.message).map(we(d,f)):s.error&&(p=[s.error(d,E(s.messages.required,d.field))]),b(p);var O={};d.defaultField&&Object.keys(c.value).map(function(F){O[F]=d.defaultField}),O=N({},O,c.rule.fields);var R={};Object.keys(O).forEach(function(F){var q=O[F],M=Array.isArray(q)?q:[q];R[F]=M.map(y.bind(null,F))});var k=new r(R);k.messages(s.messages),c.rule.options&&(c.rule.options.messages=s.messages,c.rule.options.error=s.error),k.validate(c.value,c.rule.options||s,function(F){var q=[];p&&p.length&&q.push.apply(q,p),F&&F.length&&q.push.apply(q,F),b(q.length?q:null)})}}var S;d.asyncValidator?S=d.asyncValidator(d,c.value,j,c.source,s):d.validator&&(S=d.validator(d,c.value,j,c.source,s),S===!0?j():S===!1?j(typeof d.message=="function"?d.message(d.fullField||d.field):d.message||(d.fullField||d.field)+" fails"):S instanceof Array?j(S):S instanceof Error&&j(S.message)),S&&S.then&&S.then(function(){return j()},function(x){return j(x)})},function(c){u(c)},f)},e.getType=function(n){if(n.type===void 0&&n.pattern instanceof RegExp&&(n.type="pattern"),typeof n.validator!="function"&&n.type&&!J.hasOwnProperty(n.type))throw new Error(E("Unknown rule type %s",n.type));return n.type||"string"},e.getValidationMethod=function(n){if(typeof n.validator=="function")return n.validator;var i=Object.keys(n),o=i.indexOf("message");return o!==-1&&i.splice(o,1),i.length===1&&i[0]==="required"?J.required:J[this.getType(n)]||void 0},r}();X.register=function(e,t){if(typeof t!="function")throw new Error("Cannot register a validator by type, validator is not a function");J[e]=t};X.warning=et;X.messages=ue;X.validators=J;function Pt(r){const e=re(Z,null);return{mergedSize:P(()=>r.size!==void 0?r.size:(e==null?void 0:e.size)!==void 0?e.size:"medium")}}function Ot(r){const e=re(Z,null),t=P(()=>{if(n.value==="top")return;const{labelWidth:l}=r;if(l!==void 0)return he(l);if((e==null?void 0:e.labelWidth)!==void 0)return he(e.labelWidth)}),n=P(()=>{const{labelPlacement:l}=r;return l!==void 0?l:e!=null&&e.labelPlacement?e.labelPlacement:"top"}),i=P(()=>{const{labelAlign:l}=r;if(l)return l;if(e!=null&&e.labelAlign)return e.labelAlign}),o=P(()=>[{width:t.value},r.labelStyle]),a=P(()=>{const{showRequireMark:l}=r;return l!==void 0?l:e==null?void 0:e.showRequireMark}),f=P(()=>{const{requireMarkPlacement:l}=r;return l!==void 0?l:e==null?void 0:e.requireMarkPlacement}),s=Q(!1),h=P(()=>{const{validationStatus:l}=r;if(l!==void 0)return l;if(s.value)return"error"}),u=P(()=>{const{showFeedback:l}=r;return l!==void 0?l:(e==null?void 0:e.showFeedback)!==void 0?e.showFeedback:!0}),m=P(()=>{const{showLabel:l}=r;return l!==void 0?l:(e==null?void 0:e.showLabel)!==void 0?e.showLabel:!0});return{validationErrored:s,mergedLabelStyle:o,mergedLabelPlacement:n,mergedLabelAlign:i,mergedShowRequireMark:a,mergedRequireMarkPlacement:f,mergedValidationStatus:h,mergedShowFeedback:u,mergedShowLabel:m}}function At(r){const e=re(Z,null),t=P(()=>{const{rulePath:a}=r;if(a!==void 0)return a;const{path:f}=r;if(f!==void 0)return f}),n=P(()=>{const a=[],{rule:f}=r;if(f!==void 0&&(Array.isArray(f)?a.push(...f):a.push(f)),e){const{rules:s}=e,{value:h}=t;if(s!==void 0&&h!==void 0){const u=Pe(s,h);u!==void 0&&(Array.isArray(u)?a.push(...u):a.push(u))}}return a}),i=P(()=>n.value.some(a=>a.required)),o=P(()=>i.value||r.required);return{mergedRules:n,mergedRequired:o}}var jt=ce({name:"FormItemFeedback",props:{clsPrefix:{type:String,required:!0},explains:Array,feedback:String},render(){var r;const{feedback:e,clsPrefix:t}=this;return e?$("div",{key:e,class:`${t}-form-item-feedback__line`},e):(r=this.explains)===null||r===void 0?void 0:r.map(n=>$("div",{key:n,class:`${t}-form-item-feedback__line`},n))}});const{cubicBezierEaseInOut:Fe}=Me;function $t({name:r="fade-down",fromOffset:e="-4px",enterDuration:t=".3s",leaveDuration:n=".3s",enterCubicBezier:i=Fe,leaveCubicBezier:o=Fe}={}){return[Y(`&.${r}-transition-enter-from, &.${r}-transition-leave-to`,{opacity:0,transform:`translateY(${e})`}),Y(`&.${r}-transition-enter-to, &.${r}-transition-leave-from`,{opacity:1,transform:"translateY(0)"}),Y(`&.${r}-transition-leave-active`,{transition:`opacity ${n} ${o}, transform ${n} ${o}`}),Y(`&.${r}-transition-enter-active`,{transition:`opacity ${t} ${i}, transform ${t} ${i}`})]}var _t=I("form-item",{display:"grid",lineHeight:"var(--line-height)"},[I("form-item-label",`
 grid-area: label;
 align-items: center;
 line-height: 1.25;
 text-align: var(--label-text-align);
 font-size: var(--label-font-size);
 height: var(--label-height);
 padding: var(--label-padding);
 color: var(--label-text-color);
 transition: color .3s var(--bezier);
 box-sizing: border-box;
 `,[Te("asterisk",`
 color: var(--asterisk-color);
 transition: color .3s var(--bezier);
 `)]),I("form-item-blank",{gridArea:"blank",minHeight:"var(--blank-height)"}),B("left-labelled",`
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 `,[I("form-item-label",`
 height: var(--blank-height);
 line-height: var(--blank-height);
 box-sizing: border-box;
 white-space: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `)]),B("top-labelled",`
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: var(--label-height) 1fr;
 grid-template-columns: minmax(0, 100%);
 `,[B("no-label",`
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `),I("form-item-label",{display:"flex",alignItems:"flex-end",justifyContent:"var(--label-text-align)"})]),I("form-item-blank",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `),I("form-item-feedback-wrapper",`
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--feedback-height);
 font-size: var(--feedback-font-size);
 padding: var(--feedback-padding);
 line-height: 1.25;
 transform-origin: top left;
 `,[I("form-item-feedback",{transition:"color .3s var(--bezier)",color:"var(--feedback-text-color)"},[B("warning",{color:"var(--feedback-text-color-warning)"}),B("error",{color:"var(--feedback-text-color-error)"}),$t({fromOffset:"-3px",enterDuration:".3s",leaveDuration:".2s"})])])]),qe=globalThis&&globalThis.__awaiter||function(r,e,t,n){function i(o){return o instanceof t?o:new t(function(a){a(o)})}return new(t||(t=Promise))(function(o,a){function f(u){try{h(n.next(u))}catch(m){a(m)}}function s(u){try{h(n.throw(u))}catch(m){a(m)}}function h(u){u.done?o(u.value):i(u.value).then(f,s)}h((n=n.apply(r,e||[])).next())})};const Et=Object.assign(Object.assign({},te.props),{label:String,labelWidth:[Number,String],labelStyle:[String,Object],labelAlign:String,labelPlacement:String,path:String,first:Boolean,rulePath:String,required:Boolean,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:void 0},rule:[Object,Array],size:String,ignorePathChange:Boolean,validationStatus:String,feedback:String,showLabel:{type:Boolean,default:void 0}});function Se(r,e){return(...t)=>{var n;try{const i=r(...t);return!e&&(typeof i=="boolean"||i instanceof Error||Array.isArray(i))||((n=i)===null||n===void 0?void 0:n.then)?i:(i===void 0||ye("form-item/validate",`You return a ${typeof i} typed value in the validator method, which is not recommended. Please use `+(e?"`Promise`":"`boolean`, `Error` or `Promise`")+" typed value instead."),!0)}catch(i){ye("form-item/validate","An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."),console.error(i);return}}}var Mt=ce({name:"FormItem",props:Et,setup(r){Ne(Ae,"formItems",G(r,"path"));const{mergedClsPrefixRef:e}=Re(r),t=re(Z,null),n=Pt(r),i=Ot(r),{validationErrored:o}=i,{mergedRequired:a,mergedRules:f}=At(r),{mergedSize:s}=n,{mergedLabelPlacement:h,mergedLabelAlign:u}=i,m=Q([]),l=Q(pe()),w=P(()=>{const{feedback:p}=r;return p!=null?!0:m.value.length}),z=t?G(t,"disabled"):Q(!1),c=te("Form","FormItem",_t,Oe,r,e);Ce(G(r,"path"),()=>{r.ignorePathChange||b()});function b(){m.value=[],o.value=!1,r.feedback&&(l.value=pe())}function d(){x("blur")}function L(){x("change")}function y(){x("focus")}function j(){x("input")}function S(p,O){return qe(this,void 0,void 0,function*(){let R,k,F,q;return typeof p=="string"?(R=p,k=O):p!==null&&typeof p=="object"&&(R=p.trigger,k=p.callback,F=p.shouldRuleBeApplied,q=p.options),yield new Promise((M,C)=>{x(R,F,q).then(({valid:D,errors:_})=>{D?(k&&k(),M()):(k&&k(_),C(_))})})})}const x=(p=null,O=()=>!0,R={suppressWarning:!0})=>qe(this,void 0,void 0,function*(){const{path:k}=r;R?R.first||(R.first=r.first):R={};const{value:F}=f,q=t?Pe(t.model,k,null):void 0,M=(p?F.filter(_=>Array.isArray(_.trigger)?_.trigger.includes(p):_.trigger===p):F).filter(O).map(_=>{const A=Object.assign({},_);return A.validator&&(A.validator=Se(A.validator,!1)),A.asyncValidator&&(A.asyncValidator=Se(A.asyncValidator,!0)),A});if(!M.length)return yield Promise.resolve({valid:!0});const C=k!=null?k:"__n_no_path__",D=new X({[C]:M});return yield new Promise(_=>{D.validate({[C]:q},R,(A,me)=>{A!=null&&A.length?(m.value=A.map(W=>(W==null?void 0:W.message)||""),o.value=!0,_({valid:!1,errors:A})):(b(),_({valid:!0}))})})});oe(He,{path:G(r,"path"),disabled:z,mergedSize:n.mergedSize,restoreValidation:b,handleContentBlur:d,handleContentChange:L,handleContentFocus:y,handleContentInput:j});const V={validate:S,restoreValidation:b,internalValidate:x};return Object.assign(Object.assign(Object.assign(Object.assign({mergedClsPrefix:e,mergedRequired:a,hasFeedback:w,feedbackId:l,explains:m},i),n),V),{cssVars:P(()=>{var p;const{value:O}=s,{value:R}=h,k=R==="top"?"vertical":"horizontal",{common:{cubicBezierEaseInOut:F},self:{labelTextColor:q,asteriskColor:M,lineHeight:C,feedbackTextColor:D,feedbackTextColorWarning:_,feedbackTextColorError:A,feedbackPadding:me,[T("labelHeight",O)]:W,[T("blankHeight",O)]:$e,[T("feedbackFontSize",O)]:_e,[T("feedbackHeight",O)]:Ee,[T("labelPadding",k)]:ze,[T("labelTextAlign",k)]:Ie,[T(T("labelFontSize",R),O)]:Le}}=c.value;let ne=(p=u.value)!==null&&p!==void 0?p:Ie;return R==="top"&&(ne=ne==="right"?"flex-end":"flex-start"),{"--bezier":F,"--line-height":C,"--blank-height":$e,"--label-font-size":Le,"--label-text-align":ne,"--label-height":W,"--label-padding":ze,"--asterisk-color":M,"--label-text-color":q,"--feedback-padding":me,"--feedback-font-size":_e,"--feedback-height":Ee,"--feedback-text-color":D,"--feedback-text-color-warning":_,"--feedback-text-color-error":A}})})},render(){const{$slots:r,mergedClsPrefix:e,mergedShowLabel:t,mergedShowRequireMark:n,mergedRequireMarkPlacement:i}=this;return $("div",{class:[`${e}-form-item`,`${e}-form-item--${this.mergedSize}-size`,`${e}-form-item--${this.mergedLabelPlacement}-labelled`,!t&&`${e}-form-item--no-label`],style:this.cssVars},t&&(this.label||r.label)?$("label",{class:`${e}-form-item-label`,style:this.mergedLabelStyle},i!=="left"?be(r,"label",void 0,()=>[this.label]):null,(n!==void 0?n:this.mergedRequired)?$("span",{class:`${e}-form-item-label__asterisk`},i!=="left"?"\xA0*":"*\xA0"):null,i==="left"?be(r,"label",void 0,()=>[this.label]):null):null,$("div",{class:[`${e}-form-item-blank`,this.mergedValidationStatus&&`${e}-form-item-blank--${this.mergedValidationStatus}`]},r),this.mergedShowFeedback?$("div",{key:this.feedbackId,class:`${e}-form-item-feedback-wrapper`},$(Be,{name:"fade-down-transition",mode:"out-in"},{default:()=>{const o=$(jt,{clsPrefix:e,explains:this.explains,feedback:this.feedback}),{hasFeedback:a,mergedValidationStatus:f}=this;return a?f==="warning"?$("div",{key:"controlled-warning",class:`${e}-form-item-feedback ${e}-form-item-feedback--warning`},o):f==="error"?$("div",{key:"controlled-error",class:`${e}-form-item-feedback ${e}-form-item-feedback--error`},o):f==="success"?$("div",{key:"controlled-success",class:`${e}-form-item-feedback ${e}-form-item-feedback--success`},o):$("div",{key:"controlled-default",class:`${e}-form-item-feedback`},o):null}})):null)}});export{Mt as N,Vt as a};
