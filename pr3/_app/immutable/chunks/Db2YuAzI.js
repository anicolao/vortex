import{b as Pe,a as ne,d as ze,c as Be}from"./BHnUeLfg.js";import{i as Fe}from"./BZyZ3sR9.js";import{Z as y,b as Ee,aX as Ne,h as E,g as B,aC as Te,a as j,m as F,c as We,d as Ve,s as ue,i as R,$ as m,am as $e,aJ as Ue,av as le,V as Ye,aY as M,_ as Y,aZ as ye,a1 as je,B as qe,a_ as Se,aH as x,a$ as Ge,b0 as Xe,a3 as Ze,k as oe,b1 as Ke,W as we,Y as Ce,b2 as X,q as Ie,b3 as Je,b4 as Qe,aG as xe,X as q,aD as er,b5 as rr,E as ir,b6 as ar,j as fr,I as ke,b7 as Oe,e as Me,b8 as tr,b9 as sr,ba as nr,bb as ur,bc as lr,bd as or,be as cr,bf as dr,bg as vr,bh as hr,bi as gr,O as _r,Q as br,T as pr,ab as P,u as ce,R as Ar,U as Er,f as Nr,aW as Tr,bj as Sr}from"./mra9ftPF.js";import{a as wr,b as Cr,n as Ir,c as kr}from"./B26qZVl3.js";import{B as Or}from"./BGwb_7VU.js";import{c as Mr,d as Lr}from"./D1USUX2b.js";import{l as de,p as z}from"./C7hNub10.js";function mr(e,r){return r}function Rr(e,r,i){for(var a=[],f=r.length,t,s=r.length,l=0;l<f;l++){let g=r[l];Ce(g,()=>{if(t){if(t.pending.delete(g),t.done.add(g),t.pending.size===0){var o=e.outrogroups;J(x(t.done)),o.delete(t),o.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var c=a.length===0&&i!==null;if(c){var v=i,u=v.parentNode;xe(u),u.append(v),e.items.clear()}J(r,!c)}else t={pending:new Set(r),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(t)}function J(e,r=!0){for(var i=0;i<e.length;i++)q(e[i],r)}var ve;function Hr(e,r,i,a,f,t=null){var s=e,l=new Map,c=(r&Ne)!==0;if(c){var v=e;s=E?B(Te(v)):v.appendChild(y())}E&&j();var u=null,g=qe(()=>{var d=i();return Se(d)?d:d==null?[]:x(d)}),o,_=!0;function N(){n.fallback=u,Dr(n,o,s,r,a),u!==null&&(o.length===0?u.f&M?(u.f^=M,U(u,null,s)):we(u):Ce(u,()=>{u=null}))}var S=Ee(()=>{o=F(g);var d=o.length;let C=!1;if(E){var I=We(s)===Ve;I!==(d===0)&&(s=ue(),B(s),R(!1),C=!0)}for(var p=new Set,k=Ye,b=je(),h=0;h<d;h+=1){E&&m.nodeType===$e&&m.data===Ue&&(s=m,C=!0,R(!1));var T=o[h],w=a(T,h),A=_?null:l.get(w);A?(A.v&&le(A.v,T),A.i&&le(A.i,h),b&&k.unskip_effect(A.e)):(A=Pr(l,_?s:ve??(ve=y()),T,w,h,f,r,i),_||(A.e.f|=M),l.set(w,A)),p.add(w)}if(d===0&&t&&!u&&(_?u=Y(()=>t(s)):(u=Y(()=>t(ve??(ve=y()))),u.f|=M)),d>p.size&&ye(),E&&d>0&&B(ue()),!_)if(b){for(const[H,D]of l)p.has(H)||k.skip_effect(D.e);k.oncommit(N),k.ondiscard(()=>{})}else N();C&&R(!0),F(g)}),n={effect:S,items:l,outrogroups:null,fallback:u};_=!1,E&&(s=m)}function W(e){for(;e!==null&&!(e.f&Je);)e=e.next;return e}function Dr(e,r,i,a,f){var A,H,D,ee,re,ie,ae,fe,te;var t=(a&Qe)!==0,s=r.length,l=e.items,c=W(e.effect.first),v,u=null,g,o=[],_=[],N,S,n,d;if(t)for(d=0;d<s;d+=1)N=r[d],S=f(N,d),n=l.get(S).e,n.f&M||((H=(A=n.nodes)==null?void 0:A.a)==null||H.measure(),(g??(g=new Set)).add(n));for(d=0;d<s;d+=1){if(N=r[d],S=f(N,d),n=l.get(S).e,e.outrogroups!==null)for(const O of e.outrogroups)O.pending.delete(n),O.done.delete(n);if(n.f&M)if(n.f^=M,n===c)U(n,null,i);else{var C=u?u.next:c;n===e.effect.last&&(e.effect.last=n.prev),n.prev&&(n.prev.next=n.next),n.next&&(n.next.prev=n.prev),L(e,u,n),L(e,n,C),U(n,C,i),u=n,o=[],_=[],c=W(u.next);continue}if(n.f&X&&(we(n),t&&((ee=(D=n.nodes)==null?void 0:D.a)==null||ee.unfix(),(g??(g=new Set)).delete(n))),n!==c){if(v!==void 0&&v.has(n)){if(o.length<_.length){var I=_[0],p;u=I.prev;var k=o[0],b=o[o.length-1];for(p=0;p<o.length;p+=1)U(o[p],I,i);for(p=0;p<_.length;p+=1)v.delete(_[p]);L(e,k.prev,b.next),L(e,u,k),L(e,b,I),c=I,u=b,d-=1,o=[],_=[]}else v.delete(n),U(n,c,i),L(e,n.prev,n.next),L(e,n,u===null?e.effect.first:u.next),L(e,u,n),u=n;continue}for(o=[],_=[];c!==null&&c!==n;)(v??(v=new Set)).add(c),_.push(c),c=W(c.next);if(c===null)continue}n.f&M||o.push(n),u=n,c=W(n.next)}if(e.outrogroups!==null){for(const O of e.outrogroups)O.pending.size===0&&(J(x(O.done)),(re=e.outrogroups)==null||re.delete(O));e.outrogroups.size===0&&(e.outrogroups=null)}if(c!==null||v!==void 0){var h=[];if(v!==void 0)for(n of v)n.f&X||h.push(n);for(;c!==null;)!(c.f&X)&&c!==e.fallback&&h.push(c),c=W(c.next);var T=h.length;if(T>0){var w=a&Ne&&s===0?i:null;if(t){for(d=0;d<T;d+=1)(ae=(ie=h[d].nodes)==null?void 0:ie.a)==null||ae.measure();for(d=0;d<T;d+=1)(te=(fe=h[d].nodes)==null?void 0:fe.a)==null||te.fix()}Rr(e,h,w)}}t&&Ie(()=>{var O,se;if(g!==void 0)for(n of g)(se=(O=n.nodes)==null?void 0:O.a)==null||se.apply()})}function Pr(e,r,i,a,f,t,s,l){var c=s&Ge?s&Xe?oe(i):Ze(i,!1,!1):null,v=s&Ke?oe(f):null;return{v:c,i:v,e:Y(()=>(t(r,c??i,v??f,l),()=>{e.delete(a)}))}}function U(e,r,i){if(e.nodes)for(var a=e.nodes.start,f=e.nodes.end,t=r&&!(r.f&M)?r.nodes.start:i;a!==null;){var s=er(a);if(t.before(a),a===f)return;a=s}}function L(e,r,i){r===null?e.effect.first=i:r.next=i,i===null?e.effect.last=r:i.prev=r}function zr(e,r,i,a,f){var l;E&&j();var t=(l=r.$$slots)==null?void 0:l[i],s=!1;t===!0&&(t=r.children,s=!0),t===void 0||t(e,s?()=>a:a)}function Br(e,r,i,a,f,t){let s=E;E&&j();var l=null;E&&m.nodeType===rr&&(l=m,j());var c=E?m:e,v=new Or(c,!1);Ee(()=>{const u=r()||null;var g=ar;if(u===null){v.ensure(null,null);return}return v.ensure(u,o=>{if(u){if(l=E?l:document.createElementNS(g,u),Pe(l,l),a){E&&wr(u)&&l.append(document.createComment(""));var _=E?Te(l):l.appendChild(y());E&&(_===null?R(!1):B(_)),a(l,_)}fr.nodes.end=l,o.before(l)}E&&B(o)}),()=>{}},ir),ke(()=>{}),s&&(R(!0),B(c))}function Fr(e,r){var i=void 0,a;Oe(()=>{i!==(i=r())&&(a&&(q(a),a=null),i&&(a=Y(()=>{Me(()=>i(e))})))})}function Le(e){var r,i,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var f=e.length;for(r=0;r<f;r++)e[r]&&(i=Le(e[r]))&&(a&&(a+=" "),a+=i)}else for(i in e)e[i]&&(a&&(a+=" "),a+=i);return a}function Wr(){for(var e,r,i=0,a="",f=arguments.length;i<f;i++)(e=arguments[i])&&(r=Le(e))&&(a&&(a+=" "),a+=r);return a}function Vr(e){return typeof e=="object"?Wr(e):e??""}const he=[...` 	
\r\f \v\uFEFF`];function $r(e,r,i){var a=e==null?"":""+e;if(r&&(a=a?a+" "+r:r),i){for(var f in i)if(i[f])a=a?a+" "+f:f;else if(a.length)for(var t=f.length,s=0;(s=a.indexOf(f,s))>=0;){var l=s+t;(s===0||he.includes(a[s-1]))&&(l===a.length||he.includes(a[l]))?a=(s===0?"":a.substring(0,s))+a.substring(l+1):s=l}}return a===""?null:a}function ge(e,r=!1){var i=r?" !important;":";",a="";for(var f in e){var t=e[f];t!=null&&t!==""&&(a+=" "+f+": "+t+i)}return a}function Z(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Ur(e,r){if(r){var i="",a,f;if(Array.isArray(r)?(a=r[0],f=r[1]):a=r,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var t=!1,s=0,l=!1,c=[];a&&c.push(...Object.keys(a).map(Z)),f&&c.push(...Object.keys(f).map(Z));var v=0,u=-1;const S=e.length;for(var g=0;g<S;g++){var o=e[g];if(l?o==="/"&&e[g-1]==="*"&&(l=!1):t?t===o&&(t=!1):o==="/"&&e[g+1]==="*"?l=!0:o==='"'||o==="'"?t=o:o==="("?s++:o===")"&&s--,!l&&t===!1&&s===0){if(o===":"&&u===-1)u=g;else if(o===";"||g===S-1){if(u!==-1){var _=Z(e.substring(v,u).trim());if(!c.includes(_)){o!==";"&&g++;var N=e.substring(v,g).trim();i+=" "+N+";"}}v=g+1,u=-1}}}}return a&&(i+=ge(a)),f&&(i+=ge(f,!0)),i=i.trim(),i===""?null:i}return e==null?null:String(e)}function Yr(e,r,i,a,f,t){var s=e.__className;if(E||s!==i||s===void 0){var l=$r(i,a,t);(!E||l!==e.getAttribute("class"))&&(l==null?e.removeAttribute("class"):r?e.className=l:e.setAttribute("class",l)),e.__className=i}else if(t&&f!==t)for(var c in t){var v=!!t[c];(f==null||v!==!!f[c])&&e.classList.toggle(c,v)}return t}function K(e,r={},i,a){for(var f in i){var t=i[f];r[f]!==t&&(i[f]==null?e.style.removeProperty(f):e.style.setProperty(f,t,a))}}function yr(e,r,i,a){var f=e.__style;if(E||f!==r){var t=Ur(r,a);(!E||t!==e.getAttribute("style"))&&(t==null?e.removeAttribute("style"):e.style.cssText=t),e.__style=r}else a&&(Array.isArray(a)?(K(e,i==null?void 0:i[0],a[0]),K(e,i==null?void 0:i[1],a[1],"important")):K(e,i,a));return a}function Q(e,r,i=!1){if(e.multiple){if(r==null)return;if(!Se(r))return tr();for(var a of e.options)a.selected=r.includes(_e(a));return}for(a of e.options){var f=_e(a);if(sr(f,r)){a.selected=!0;return}}(!i||r!==void 0)&&(e.selectedIndex=-1)}function jr(e){var r=new MutationObserver(()=>{Q(e,e.__value)});r.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ke(()=>{r.disconnect()})}function _e(e){return"__value"in e?e.__value:e.value}const V=Symbol("class"),$=Symbol("style"),me=Symbol("is custom element"),Re=Symbol("is html");function qr(e){if(E){var r=!1,i=()=>{if(!r){if(r=!0,e.hasAttribute("value")){var a=e.value;G(e,"value",null),e.value=a}if(e.hasAttribute("checked")){var f=e.checked;G(e,"checked",null),e.checked=f}}};e.__on_r=i,Ie(i),cr()}}function Gr(e,r){r?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function G(e,r,i,a){var f=He(e);E&&(f[r]=e.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&e.nodeName==="LINK")||f[r]!==(f[r]=i)&&(r==="loading"&&(e[hr]=i),i==null?e.removeAttribute(r):typeof i!="string"&&De(e).includes(r)?e[r]=i:e.setAttribute(r,i))}function Xr(e,r,i,a,f=!1,t=!1){if(E&&f&&e.tagName==="INPUT"){var s=e,l=s.type==="checkbox"?"defaultChecked":"defaultValue";l in i||qr(s)}var c=He(e),v=c[me],u=!c[Re];let g=E&&v;g&&R(!1);var o=r||{},_=e.tagName==="OPTION";for(var N in r)N in i||(i[N]=null);i.class?i.class=Vr(i.class):i[V]&&(i.class=null),i[$]&&(i.style??(i.style=null));var S=De(e);for(const b in i){let h=i[b];if(_&&b==="value"&&h==null){e.value=e.__value="",o[b]=h;continue}if(b==="class"){var n=e.namespaceURI==="http://www.w3.org/1999/xhtml";Yr(e,n,h,a,r==null?void 0:r[V],i[V]),o[b]=h,o[V]=i[V];continue}if(b==="style"){yr(e,h,r==null?void 0:r[$],i[$]),o[b]=h,o[$]=i[$];continue}var d=o[b];if(!(h===d&&!(h===void 0&&e.hasAttribute(b)))){o[b]=h;var C=b[0]+b[1];if(C!=="$$")if(C==="on"){const T={},w="$$"+b;let A=b.slice(2);var I=kr(A);if(Cr(A)&&(A=A.slice(0,-7),T.capture=!0),!I&&d){if(h!=null)continue;e.removeEventListener(A,o[w],T),o[w]=null}if(h!=null)if(I)e[`__${A}`]=h,Lr([A]);else{let H=function(D){o[b].call(this,D)};o[w]=Mr(A,e,H,T)}else I&&(e[`__${A}`]=void 0)}else if(b==="style")G(e,b,h);else if(b==="autofocus")lr(e,!!h);else if(!v&&(b==="__value"||b==="value"&&h!=null))e.value=e.__value=h;else if(b==="selected"&&_)Gr(e,h);else{var p=b;u||(p=Ir(p));var k=p==="defaultValue"||p==="defaultChecked";if(h==null&&!v&&!k)if(c[b]=null,p==="value"||p==="checked"){let T=e;const w=r===void 0;if(p==="value"){let A=T.defaultValue;T.removeAttribute(p),T.defaultValue=A,T.value=T.__value=w?A:null}else{let A=T.defaultChecked;T.removeAttribute(p),T.defaultChecked=A,T.checked=w?A:!1}}else e.removeAttribute(b);else k||S.includes(p)&&(v||typeof h!="string")?(e[p]=h,p in c&&(c[p]=or)):typeof h!="function"&&G(e,p,h)}}}return g&&R(!0),o}function be(e,r,i=[],a=[],f=[],t,s=!1,l=!1){nr(f,i,a,c=>{var v=void 0,u={},g=e.nodeName==="SELECT",o=!1;if(Oe(()=>{var N=r(...c.map(F)),S=Xr(e,v,N,t,s,l);o&&g&&"value"in N&&Q(e,N.value);for(let d of Object.getOwnPropertySymbols(u))N[d]||q(u[d]);for(let d of Object.getOwnPropertySymbols(N)){var n=N[d];d.description===ur&&(!v||n!==v[d])&&(u[d]&&q(u[d]),u[d]=Y(()=>Fr(e,()=>n))),S[d]=n}v=S}),g){var _=e;Me(()=>{Q(_,v.value,!0),jr(_)})}o=!0})}function He(e){return e.__attributes??(e.__attributes={[me]:e.nodeName.includes("-"),[Re]:e.namespaceURI===dr})}var pe=new Map;function De(e){var r=e.getAttribute("is")||e.nodeName,i=pe.get(r);if(i)return i;pe.set(r,i=[]);for(var a,f=e,t=Element.prototype;t!==f;){a=gr(f);for(var s in a)a[s].set&&i.push(s);f=vr(f)}return i}/**
 * @license lucide-svelte v0.563.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2026 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Zr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v0.563.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2026 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Kr=e=>{for(const r in e)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1};/**
 * @license lucide-svelte v0.563.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2026 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Ae=(...e)=>e.filter((r,i,a)=>!!r&&r.trim()!==""&&a.indexOf(r)===i).join(" ").trim();var Jr=ze("<svg><!><!></svg>");function ti(e,r){const i=de(r,["children","$$slots","$$events","$$legacy"]),a=de(i,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);_r(r,!1);let f=z(r,"name",8,void 0),t=z(r,"color",8,"currentColor"),s=z(r,"size",8,24),l=z(r,"strokeWidth",8,2),c=z(r,"absoluteStrokeWidth",8,!1),v=z(r,"iconNode",24,()=>[]);Fe();var u=Jr();be(u,(_,N,S)=>({...Zr,..._,...a,width:s(),height:s(),stroke:t(),"stroke-width":N,class:S}),[()=>Kr(a)?void 0:{"aria-hidden":"true"},()=>(P(c()),P(l()),P(s()),ce(()=>c()?Number(l())*24/Number(s()):l())),()=>(P(Ae),P(f()),P(i),ce(()=>Ae("lucide-icon","lucide",f()?`lucide-${f()}`:"",i.class)))]);var g=pr(u);Hr(g,1,v,mr,(_,N)=>{var S=Tr(()=>Sr(F(N),2));let n=()=>F(S)[0],d=()=>F(S)[1];var C=Be(),I=Nr(C);Br(I,n,!0,(p,k)=>{be(p,()=>({...d()}))}),ne(_,C)});var o=Ar(g);zr(o,r,"default",{}),Er(u),ne(e,u),br()}export{ti as I,Yr as a,yr as b,G as c,Hr as e,mr as i,qr as r,zr as s};
