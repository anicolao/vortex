import{c as he,a as g,f as x}from"../chunks/BHnUeLfg.js";import{i as ae}from"../chunks/BZyZ3sR9.js";import{f as oe,O as se,aT as be,T as s,U as o,R as h,m as e,o as i,ad as W,Q as re,a3 as p,B as _e,ah as J,ai as ye,aj as ge,u as S}from"../chunks/mra9ftPF.js";import{s as M}from"../chunks/PaQDFcYx.js";import{i as Q}from"../chunks/BHq0IYa-.js";import{I as we,s as $e,a as ne,b as K,c as xe,e as Ee,i as Se}from"../chunks/Db2YuAzI.js";import{e as Y}from"../chunks/D1USUX2b.js";import{a as Me,s as Le}from"../chunks/BGwb_7VU.js";import{s as V}from"../chunks/B2R-KUoo.js";import{b as ke,s as Te}from"../chunks/9uzXOmBe.js";import{l as Xe}from"../chunks/BeJFB7-l.js";import{g as Z,b as ee}from"../chunks/DiRRdz5w.js";import{b as te}from"../chunks/DCEFrT2H.js";import{l as Pe,s as Be}from"../chunks/C7hNub10.js";import{C as De}from"../chunks/Dq63f4rX.js";function Ie(L,E){const w=Pe(E,["children","$$slots","$$events","$$legacy"]);/**
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
 */const b=[["path",{d:"m9 18 6-6-6-6"}]];we(L,Be({name:"chevron-right"},()=>w,{get iconNode(){return b},children:(_,m)=>{var y=he(),r=oe(y);$e(r,E,"default",{}),g(_,y)},$$slots:{default:!0}}))}var Ne=x('<div><div class="track-text svelte-17q91nm"> </div> <div class="thumb svelte-17q91nm" role="slider" aria-label="Slide to confirm payment" tabindex="0"><!></div> <div class="trail svelte-17q91nm"></div></div>');function Ue(L,E){se(E,!1);const w=be();let b=p(),_=p(),m=!1,y=0,r=p(0),v=p(!1);function N(a){e(v)||(m=!0,y="touches"in a?a.touches[0].clientX:a.clientX,window.addEventListener("mousemove",l),window.addEventListener("mouseup",c),window.addEventListener("touchmove",l),window.addEventListener("touchend",c))}function l(a){if(!m)return;const q="touches"in a?a.touches[0].clientX:a.clientX,C=e(b).clientWidth-e(_).clientWidth,j=q-y;i(r,Math.max(0,Math.min(C,j)))}function c(){m=!1;const a=e(b).clientWidth-e(_).clientWidth;e(r)>a*.9?(i(r,a),i(v,!0),w("complete"),typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([10,50,10])):i(r,0),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c)}ae();var $=Ne();let U;var k=s($),T=s(k,!0);o(k);var d=h(k,2),X=s(d);{let a=_e(()=>e(v)?"#10b981":"#a855f7");Ie(X,{get color(){return e(a)}})}o(d),te(d,a=>i(_,a),()=>e(_));var P=h(d,2);o($),te($,a=>i(b,a),()=>e(b)),W(()=>{U=ne($,1,"slider-container svelte-17q91nm",null,U,{completed:e(v)}),M(T,e(v)?"Payment Sent!":"Slide to Pay"),K(d,`transform: translateX(${e(r)??""}px)`),xe(d,"aria-valuenow",e(r)),K(P,`width: ${e(r)+25}px; opacity: ${e(r)?1:0}`)}),Y("mousedown",d,N),Y("touchstart",d,N),g(L,$),re()}var qe=x(`<div class="empty-state svelte-o2dbo"><p>You don't owe anyone. You are in the clear!</p> <div class="big-check svelte-o2dbo">✅</div></div>`),Ce=x('<div class="check">✓</div>'),Re=x('<button><div class="avatar svelte-o2dbo"> </div> <div class="info svelte-o2dbo"><span class="name svelte-o2dbo"> </span> <span class="owed svelte-o2dbo"> </span></div> <!></button>'),We=x('<h2 class="svelte-o2dbo"> </h2> <p class="subtitle svelte-o2dbo">Select someone to pay:</p> <div class="recipients-list svelte-o2dbo"></div>',1),Ye=x('<div class="payment-action svelte-o2dbo"><div class="pay-amount svelte-o2dbo"> </div> <!></div>'),je=x('<div class="page-container svelte-o2dbo"><header class="svelte-o2dbo"><button class="icon-btn svelte-o2dbo"><!></button> <h1>Settle Up</h1> <div class="spacer"></div></header> <main class="svelte-o2dbo"><!> <!></main></div>');function st(L,E){se(E,!1);const w=()=>Me(V,"$store",b),[b,_]=Le(),m=p(),y=p();w();let r=p({}),v=p(0);const N={alice:"Alice",bob:"Bob",charlie:"Charlie",david:"David"};V.subscribe(t=>{i(r,ke(t)),i(v,Te(t))});let l=p(null),c=p(0);function $(t){i(l,t.uid);const n=Math.abs(Math.min(0,e(v)));i(c,Math.min(n,t.amount)),e(c)===0&&i(c,10)}async function U(){if(!(!e(l)||!e(m)))try{await Xe("SETTLE_DEBT",{fromId:e(m).uid,toId:e(l),amount:e(c),timestamp:Date.now()}),setTimeout(()=>{Z(`${ee}/dashboard`)},1e3)}catch(t){console.error(t)}}function k(){Z(`${ee}/dashboard`)}function T(t){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t)}J(()=>w(),()=>{i(m,w().auth.user)}),J(()=>(e(r),e(m)),()=>{i(y,Object.entries(e(r)).filter(([t,n])=>{var u;return t!==((u=e(m))==null?void 0:u.uid)&&n>0}).map(([t,n])=>({uid:t,name:N[t]||t,amount:n})))}),ye(),ae();var d=je(),X=s(d),P=s(X),a=s(P);De(a,{}),o(P),ge(4),o(X);var q=h(X,2),C=s(q);{var j=t=>{var n=qe();g(t,n)},ie=t=>{var n=We(),u=oe(n),A=s(u);o(u);var R=h(u,4);Ee(R,5,()=>e(y),Se,(B,f)=>{var D=Re();let G;var O=s(D),ve=s(O,!0);o(O);var z=h(O,2),F=s(z),ce=s(F,!0);o(F);var H=h(F,2),me=s(H);o(H),o(z);var ue=h(z,2);{var fe=I=>{var pe=Ce();g(I,pe)};Q(ue,I=>{e(l),e(f),S(()=>e(l)===e(f).uid)&&I(fe)})}o(D),W(I=>{G=ne(D,1,"recipient-card svelte-o2dbo",null,G,{selected:e(l)===e(f).uid}),M(ve,(e(f),S(()=>e(f).name[0]))),M(ce,(e(f),S(()=>e(f).name))),M(me,`is owed ${I??""}`)},[()=>(e(f),S(()=>T(e(f).amount)))]),Y("click",D,()=>$(e(f))),g(B,D)}),o(R),W(B=>M(A,`You owe ${B??""}`),[()=>(e(v),S(()=>T(Math.abs(e(v)))))]),g(t,n)};Q(C,t=>{e(v)>=0?t(j):t(ie,!1)})}var le=h(C,2);{var de=t=>{var n=Ye(),u=s(n),A=s(u);o(u);var R=h(u,2);Ue(R,{$$events:{complete:U}}),o(n),W(B=>M(A,`Pay ${B??""}`),[()=>(e(c),S(()=>T(e(c))))]),g(t,n)};Q(le,t=>{e(l)&&t(de)})}o(q),o(d),Y("click",P,k),g(L,d),re(),_()}export{st as component};
