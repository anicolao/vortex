import{b as ze,a as ne,d as Be,c as De}from"./Bmj0PmUK.js";import"./BXY8mwAH.js";import{W as y,b as Ee,aV as Ne,h as E,g as D,aA as Te,a as q,m as F,c as Fe,d as Ve,s as ue,i as m,Y as R,ak as We,aH as Ue,at as le,R as Ye,aW as M,X as $,aX as $e,_ as ye,B as qe,aK as Se,aF as x,aY as Ke,aZ as Xe,a0 as je,k as oe,a_ as Ge,T as we,V as Ce,a$ as j,q as ke,b0 as Ze,b1 as Je,aE as Qe,U as K,aB as xe,b2 as er,E as rr,b3 as ir,j as ar,a1 as Ie,b4 as Oe,e as Me,b5 as fr,b6 as tr,b7 as sr,b8 as nr,b9 as ur,ba as lr,bb as or,bc as cr,bd as dr,be as vr,bf as hr,a6 as gr,a8 as _r,a9 as br,O as z,u as ce,ab as pr,aa as Ar,f as Er,aU as Nr,bg as Tr}from"./9Y9rDYax.js";import{b as Sr,c as wr,d as Cr,f as kr,n as Ir,g as Or}from"./DBHRyS1n.js";import{B as Mr}from"./DZe_NpQR.js";import{i as Lr}from"./D8uZUpcf.js";import{l as de,p as B}from"./B59DNuwg.js";function Rr(e,r){return r}function mr(e,r,i){for(var a=[],f=r.length,t,s=r.length,l=0;l<f;l++){let g=r[l];Ce(g,()=>{if(t){if(t.pending.delete(g),t.done.add(g),t.pending.size===0){var o=e.outrogroups;J(x(t.done)),o.delete(t),o.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var c=a.length===0&&i!==null;if(c){var v=i,u=v.parentNode;Qe(u),u.append(v),e.items.clear()}J(r,!c)}else t={pending:new Set(r),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(t)}function J(e,r=!0){for(var i=0;i<e.length;i++)K(e[i],r)}var ve;function Hr(e,r,i,a,f,t=null){var s=e,l=new Map,c=(r&Ne)!==0;if(c){var v=e;s=E?D(Te(v)):v.appendChild(y())}E&&q();var u=null,g=qe(()=>{var d=i();return Se(d)?d:d==null?[]:x(d)}),o,_=!0;function N(){n.fallback=u,Pr(n,o,s,r,a),u!==null&&(o.length===0?u.f&M?(u.f^=M,Y(u,null,s)):we(u):Ce(u,()=>{u=null}))}var S=Ee(()=>{o=F(g);var d=o.length;let C=!1;if(E){var k=Fe(s)===Ve;k!==(d===0)&&(s=ue(),D(s),m(!1),C=!0)}for(var p=new Set,I=Ye,b=ye(),h=0;h<d;h+=1){E&&R.nodeType===We&&R.data===Ue&&(s=R,C=!0,m(!1));var T=o[h],w=a(T,h),A=_?null:l.get(w);A?(A.v&&le(A.v,T),A.i&&le(A.i,h),b&&I.unskip_effect(A.e)):(A=zr(l,_?s:ve??(ve=y()),T,w,h,f,r,i),_||(A.e.f|=M),l.set(w,A)),p.add(w)}if(d===0&&t&&!u&&(_?u=$(()=>t(s)):(u=$(()=>t(ve??(ve=y()))),u.f|=M)),d>p.size&&$e(),E&&d>0&&D(ue()),!_)if(b){for(const[H,P]of l)p.has(H)||I.skip_effect(P.e);I.oncommit(N),I.ondiscard(()=>{})}else N();C&&m(!0),F(g)}),n={effect:S,items:l,outrogroups:null,fallback:u};_=!1,E&&(s=R)}function V(e){for(;e!==null&&!(e.f&Ze);)e=e.next;return e}function Pr(e,r,i,a,f){var A,H,P,ee,re,ie,ae,fe,te;var t=(a&Je)!==0,s=r.length,l=e.items,c=V(e.effect.first),v,u=null,g,o=[],_=[],N,S,n,d;if(t)for(d=0;d<s;d+=1)N=r[d],S=f(N,d),n=l.get(S).e,n.f&M||((H=(A=n.nodes)==null?void 0:A.a)==null||H.measure(),(g??(g=new Set)).add(n));for(d=0;d<s;d+=1){if(N=r[d],S=f(N,d),n=l.get(S).e,e.outrogroups!==null)for(const O of e.outrogroups)O.pending.delete(n),O.done.delete(n);if(n.f&M)if(n.f^=M,n===c)Y(n,null,i);else{var C=u?u.next:c;n===e.effect.last&&(e.effect.last=n.prev),n.prev&&(n.prev.next=n.next),n.next&&(n.next.prev=n.prev),L(e,u,n),L(e,n,C),Y(n,C,i),u=n,o=[],_=[],c=V(u.next);continue}if(n.f&j&&(we(n),t&&((ee=(P=n.nodes)==null?void 0:P.a)==null||ee.unfix(),(g??(g=new Set)).delete(n))),n!==c){if(v!==void 0&&v.has(n)){if(o.length<_.length){var k=_[0],p;u=k.prev;var I=o[0],b=o[o.length-1];for(p=0;p<o.length;p+=1)Y(o[p],k,i);for(p=0;p<_.length;p+=1)v.delete(_[p]);L(e,I.prev,b.next),L(e,u,I),L(e,b,k),c=k,u=b,d-=1,o=[],_=[]}else v.delete(n),Y(n,c,i),L(e,n.prev,n.next),L(e,n,u===null?e.effect.first:u.next),L(e,u,n),u=n;continue}for(o=[],_=[];c!==null&&c!==n;)(v??(v=new Set)).add(c),_.push(c),c=V(c.next);if(c===null)continue}n.f&M||o.push(n),u=n,c=V(n.next)}if(e.outrogroups!==null){for(const O of e.outrogroups)O.pending.size===0&&(J(x(O.done)),(re=e.outrogroups)==null||re.delete(O));e.outrogroups.size===0&&(e.outrogroups=null)}if(c!==null||v!==void 0){var h=[];if(v!==void 0)for(n of v)n.f&j||h.push(n);for(;c!==null;)!(c.f&j)&&c!==e.fallback&&h.push(c),c=V(c.next);var T=h.length;if(T>0){var w=a&Ne&&s===0?i:null;if(t){for(d=0;d<T;d+=1)(ae=(ie=h[d].nodes)==null?void 0:ie.a)==null||ae.measure();for(d=0;d<T;d+=1)(te=(fe=h[d].nodes)==null?void 0:fe.a)==null||te.fix()}mr(e,h,w)}}t&&ke(()=>{var O,se;if(g!==void 0)for(n of g)(se=(O=n.nodes)==null?void 0:O.a)==null||se.apply()})}function zr(e,r,i,a,f,t,s,l){var c=s&Ke?s&Xe?oe(i):je(i,!1,!1):null,v=s&Ge?oe(f):null;return{v:c,i:v,e:$(()=>(t(r,c??i,v??f,l),()=>{e.delete(a)}))}}function Y(e,r,i){if(e.nodes)for(var a=e.nodes.start,f=e.nodes.end,t=r&&!(r.f&M)?r.nodes.start:i;a!==null;){var s=xe(a);if(t.before(a),a===f)return;a=s}}function L(e,r,i){r===null?e.effect.first=i:r.next=i,i===null?e.effect.last=r:i.prev=r}function Br(e,r,i,a,f){var l;E&&q();var t=(l=r.$$slots)==null?void 0:l[i],s=!1;t===!0&&(t=r.children,s=!0),t===void 0||t(e,s?()=>a:a)}function Dr(e,r,i,a,f,t){let s=E;E&&q();var l=null;E&&R.nodeType===er&&(l=R,q());var c=E?R:e,v=new Mr(c,!1);Ee(()=>{const u=r()||null;var g=ir;if(u===null){v.ensure(null,null);return}return v.ensure(u,o=>{if(u){if(l=E?l:document.createElementNS(g,u),ze(l,l),a){E&&Sr(u)&&l.append(document.createComment(""));var _=E?Te(l):l.appendChild(y());E&&(_===null?m(!1):D(_)),a(l,_)}ar.nodes.end=l,o.before(l)}E&&D(o)}),()=>{}},rr),Ie(()=>{}),s&&(m(!0),D(c))}function Fr(e,r){var i=void 0,a;Oe(()=>{i!==(i=r())&&(a&&(K(a),a=null),i&&(a=$(()=>{Me(()=>i(e))})))})}function Le(e){var r,i,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var f=e.length;for(r=0;r<f;r++)e[r]&&(i=Le(e[r]))&&(a&&(a+=" "),a+=i)}else for(i in e)e[i]&&(a&&(a+=" "),a+=i);return a}function Vr(){for(var e,r,i=0,a="",f=arguments.length;i<f;i++)(e=arguments[i])&&(r=Le(e))&&(a&&(a+=" "),a+=r);return a}function Wr(e){return typeof e=="object"?Vr(e):e??""}const he=[...` 	
\r\f \v\uFEFF`];function Ur(e,r,i){var a=e==null?"":""+e;if(r&&(a=a?a+" "+r:r),i){for(var f in i)if(i[f])a=a?a+" "+f:f;else if(a.length)for(var t=f.length,s=0;(s=a.indexOf(f,s))>=0;){var l=s+t;(s===0||he.includes(a[s-1]))&&(l===a.length||he.includes(a[l]))?a=(s===0?"":a.substring(0,s))+a.substring(l+1):s=l}}return a===""?null:a}function ge(e,r=!1){var i=r?" !important;":";",a="";for(var f in e){var t=e[f];t!=null&&t!==""&&(a+=" "+f+": "+t+i)}return a}function G(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Yr(e,r){if(r){var i="",a,f;if(Array.isArray(r)?(a=r[0],f=r[1]):a=r,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var t=!1,s=0,l=!1,c=[];a&&c.push(...Object.keys(a).map(G)),f&&c.push(...Object.keys(f).map(G));var v=0,u=-1;const S=e.length;for(var g=0;g<S;g++){var o=e[g];if(l?o==="/"&&e[g-1]==="*"&&(l=!1):t?t===o&&(t=!1):o==="/"&&e[g+1]==="*"?l=!0:o==='"'||o==="'"?t=o:o==="("?s++:o===")"&&s--,!l&&t===!1&&s===0){if(o===":"&&u===-1)u=g;else if(o===";"||g===S-1){if(u!==-1){var _=G(e.substring(v,u).trim());if(!c.includes(_)){o!==";"&&g++;var N=e.substring(v,g).trim();i+=" "+N+";"}}v=g+1,u=-1}}}}return a&&(i+=ge(a)),f&&(i+=ge(f,!0)),i=i.trim(),i===""?null:i}return e==null?null:String(e)}function $r(e,r,i,a,f,t){var s=e.__className;if(E||s!==i||s===void 0){var l=Ur(i,a,t);(!E||l!==e.getAttribute("class"))&&(l==null?e.removeAttribute("class"):r?e.className=l:e.setAttribute("class",l)),e.__className=i}else if(t&&f!==t)for(var c in t){var v=!!t[c];(f==null||v!==!!f[c])&&e.classList.toggle(c,v)}return t}function Z(e,r={},i,a){for(var f in i){var t=i[f];r[f]!==t&&(i[f]==null?e.style.removeProperty(f):e.style.setProperty(f,t,a))}}function yr(e,r,i,a){var f=e.__style;if(E||f!==r){var t=Yr(r,a);(!E||t!==e.getAttribute("style"))&&(t==null?e.removeAttribute("style"):e.style.cssText=t),e.__style=r}else a&&(Array.isArray(a)?(Z(e,i==null?void 0:i[0],a[0]),Z(e,i==null?void 0:i[1],a[1],"important")):Z(e,i,a));return a}function Q(e,r,i=!1){if(e.multiple){if(r==null)return;if(!Se(r))return fr();for(var a of e.options)a.selected=r.includes(_e(a));return}for(a of e.options){var f=_e(a);if(tr(f,r)){a.selected=!0;return}}(!i||r!==void 0)&&(e.selectedIndex=-1)}function qr(e){var r=new MutationObserver(()=>{Q(e,e.__value)});r.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ie(()=>{r.disconnect()})}function _e(e){return"__value"in e?e.__value:e.value}const W=Symbol("class"),U=Symbol("style"),Re=Symbol("is custom element"),me=Symbol("is html");function Kr(e){if(E){var r=!1,i=()=>{if(!r){if(r=!0,e.hasAttribute("value")){var a=e.value;X(e,"value",null),e.value=a}if(e.hasAttribute("checked")){var f=e.checked;X(e,"checked",null),e.checked=f}}};e.__on_r=i,ke(i),or()}}function Xr(e,r){r?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function X(e,r,i,a){var f=He(e);E&&(f[r]=e.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&e.nodeName==="LINK")||f[r]!==(f[r]=i)&&(r==="loading"&&(e[vr]=i),i==null?e.removeAttribute(r):typeof i!="string"&&Pe(e).includes(r)?e[r]=i:e.setAttribute(r,i))}function jr(e,r,i,a,f=!1,t=!1){if(E&&f&&e.tagName==="INPUT"){var s=e,l=s.type==="checkbox"?"defaultChecked":"defaultValue";l in i||Kr(s)}var c=He(e),v=c[Re],u=!c[me];let g=E&&v;g&&m(!1);var o=r||{},_=e.tagName==="OPTION";for(var N in r)N in i||(i[N]=null);i.class?i.class=Wr(i.class):i[W]&&(i.class=null),i[U]&&(i.style??(i.style=null));var S=Pe(e);for(const b in i){let h=i[b];if(_&&b==="value"&&h==null){e.value=e.__value="",o[b]=h;continue}if(b==="class"){var n=e.namespaceURI==="http://www.w3.org/1999/xhtml";$r(e,n,h,a,r==null?void 0:r[W],i[W]),o[b]=h,o[W]=i[W];continue}if(b==="style"){yr(e,h,r==null?void 0:r[U],i[U]),o[b]=h,o[U]=i[U];continue}var d=o[b];if(!(h===d&&!(h===void 0&&e.hasAttribute(b)))){o[b]=h;var C=b[0]+b[1];if(C!=="$$")if(C==="on"){const T={},w="$$"+b;let A=b.slice(2);var k=Or(A);if(wr(A)&&(A=A.slice(0,-7),T.capture=!0),!k&&d){if(h!=null)continue;e.removeEventListener(A,o[w],T),o[w]=null}if(h!=null)if(k)e[`__${A}`]=h,kr([A]);else{let H=function(P){o[b].call(this,P)};o[w]=Cr(A,e,H,T)}else k&&(e[`__${A}`]=void 0)}else if(b==="style")X(e,b,h);else if(b==="autofocus")ur(e,!!h);else if(!v&&(b==="__value"||b==="value"&&h!=null))e.value=e.__value=h;else if(b==="selected"&&_)Xr(e,h);else{var p=b;u||(p=Ir(p));var I=p==="defaultValue"||p==="defaultChecked";if(h==null&&!v&&!I)if(c[b]=null,p==="value"||p==="checked"){let T=e;const w=r===void 0;if(p==="value"){let A=T.defaultValue;T.removeAttribute(p),T.defaultValue=A,T.value=T.__value=w?A:null}else{let A=T.defaultChecked;T.removeAttribute(p),T.defaultChecked=A,T.checked=w?A:!1}}else e.removeAttribute(b);else I||S.includes(p)&&(v||typeof h!="string")?(e[p]=h,p in c&&(c[p]=lr)):typeof h!="function"&&X(e,p,h)}}}return g&&m(!0),o}function be(e,r,i=[],a=[],f=[],t,s=!1,l=!1){sr(f,i,a,c=>{var v=void 0,u={},g=e.nodeName==="SELECT",o=!1;if(Oe(()=>{var N=r(...c.map(F)),S=jr(e,v,N,t,s,l);o&&g&&"value"in N&&Q(e,N.value);for(let d of Object.getOwnPropertySymbols(u))N[d]||K(u[d]);for(let d of Object.getOwnPropertySymbols(N)){var n=N[d];d.description===nr&&(!v||n!==v[d])&&(u[d]&&K(u[d]),u[d]=$(()=>Fr(e,()=>n))),S[d]=n}v=S}),g){var _=e;Me(()=>{Q(_,v.value,!0),qr(_)})}o=!0})}function He(e){return e.__attributes??(e.__attributes={[Re]:e.nodeName.includes("-"),[me]:e.namespaceURI===cr})}var pe=new Map;function Pe(e){var r=e.getAttribute("is")||e.nodeName,i=pe.get(r);if(i)return i;pe.set(r,i=[]);for(var a,f=e,t=Element.prototype;t!==f;){a=hr(f);for(var s in a)a[s].set&&i.push(s);f=dr(f)}return i}/**
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
 */const Gr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const Zr=e=>{for(const r in e)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1};/**
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
 */const Ae=(...e)=>e.filter((r,i,a)=>!!r&&r.trim()!==""&&a.indexOf(r)===i).join(" ").trim();var Jr=Be("<svg><!><!></svg>");function ti(e,r){const i=de(r,["children","$$slots","$$events","$$legacy"]),a=de(i,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);gr(r,!1);let f=B(r,"name",8,void 0),t=B(r,"color",8,"currentColor"),s=B(r,"size",8,24),l=B(r,"strokeWidth",8,2),c=B(r,"absoluteStrokeWidth",8,!1),v=B(r,"iconNode",24,()=>[]);Lr();var u=Jr();be(u,(_,N,S)=>({...Gr,..._,...a,width:s(),height:s(),stroke:t(),"stroke-width":N,class:S}),[()=>Zr(a)?void 0:{"aria-hidden":"true"},()=>(z(c()),z(l()),z(s()),ce(()=>c()?Number(l())*24/Number(s()):l())),()=>(z(Ae),z(f()),z(i),ce(()=>Ae("lucide-icon","lucide",f()?`lucide-${f()}`:"",i.class)))]);var g=br(u);Hr(g,1,v,Rr,(_,N)=>{var S=Nr(()=>Tr(F(N),2));let n=()=>F(S)[0],d=()=>F(S)[1];var C=De(),k=Er(C);Dr(k,n,!0,(p,I)=>{be(p,()=>({...d()}))}),ne(_,C)});var o=pr(g);Br(o,r,"default",{}),Ar(u),ne(e,u),_r()}export{ti as I,$r as a,yr as b,X as c,Hr as e,Rr as i,Kr as r,Br as s};
