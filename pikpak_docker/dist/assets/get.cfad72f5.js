import{ba as f,bb as s,bc as o,bd as p}from"./index.227ee509.js";var h=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,d=/^\w*$/;function y(r,n){if(f(r))return!1;var e=typeof r;return e=="number"||e=="symbol"||e=="boolean"||r==null||s(r)?!0:d.test(r)||!h.test(r)||n!=null&&r in Object(n)}var m="Expected a function";function u(r,n){if(typeof r!="function"||n!=null&&typeof n!="function")throw new TypeError(m);var e=function(){var t=arguments,a=n?n.apply(this,t):t[0],i=e.cache;if(i.has(a))return i.get(a);var c=r.apply(this,t);return e.cache=i.set(a,c)||i,c};return e.cache=new(u.Cache||o),e}u.Cache=o;var g=500;function l(r){var n=u(r,function(t){return e.size===g&&e.clear(),t}),e=n.cache;return n}var E=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,C=/\\(\\)?/g,I=l(function(r){var n=[];return r.charCodeAt(0)===46&&n.push(""),r.replace(E,function(e,t,a,i){n.push(a?i.replace(C,"$1"):t||e)}),n}),P=I;function T(r,n){return f(r)?r:y(r,n)?[r]:P(p(r))}var b=1/0;function w(r){if(typeof r=="string"||s(r))return r;var n=r+"";return n=="0"&&1/r==-b?"-0":n}function z(r,n){n=T(n,r);for(var e=0,t=n.length;r!=null&&e<t;)r=r[w(n[e++])];return e&&e==t?r:void 0}function N(r,n,e){var t=r==null?void 0:z(r,n);return t===void 0?e:t}export{N as g};
