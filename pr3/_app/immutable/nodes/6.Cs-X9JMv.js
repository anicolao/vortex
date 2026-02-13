import{c as pe,a as g,f as x}from"../chunks/BHnUeLfg.js";import{i as te}from"../chunks/BZyZ3sR9.js";import{f as ae,O as oe,aT as he,T as s,U as o,R as h,m as e,o as i,ad as W,Q as se,a3 as p,B as be,ah as J,ai as _e,aj as ye,u as S}from"../chunks/mra9ftPF.js";import{s as M}from"../chunks/PaQDFcYx.js";import{i as Q}from"../chunks/BHq0IYa-.js";import{I as ge,s as we,a as re,b as K,c as $e,e as xe,i as Ee}from"../chunks/Db2YuAzI.js";import{e as Y}from"../chunks/D1USUX2b.js";import{a as Se,s as Me}from"../chunks/BGwb_7VU.js";import{s as V}from"../chunks/B2R-KUoo.js";import{b as Le,s as ke}from"../chunks/9uzXOmBe.js";import{l as Te}from"../chunks/Dh2dDEoX.js";import{g as Z}from"../chunks/DQHeCYGR.js";import{b as ee}from"../chunks/DCEFrT2H.js";import{l as Xe,s as Pe}from"../chunks/C7hNub10.js";import{C as Be}from"../chunks/Dq63f4rX.js";function De(L,E){const w=Xe(E,["children","$$slots","$$events","$$legacy"]);/**
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
 */const b=[["path",{d:"m9 18 6-6-6-6"}]];ge(L,Pe({name:"chevron-right"},()=>w,{get iconNode(){return b},children:(_,m)=>{var y=pe(),r=ae(y);we(r,E,"default",{}),g(_,y)},$$slots:{default:!0}}))}var Ie=x('<div><div class="track-text svelte-17q91nm"> </div> <div class="thumb svelte-17q91nm" role="slider" aria-label="Slide to confirm payment" tabindex="0"><!></div> <div class="trail svelte-17q91nm"></div></div>');function Ne(L,E){oe(E,!1);const w=he();let b=p(),_=p(),m=!1,y=0,r=p(0),v=p(!1);function N(a){e(v)||(m=!0,y="touches"in a?a.touches[0].clientX:a.clientX,window.addEventListener("mousemove",l),window.addEventListener("mouseup",c),window.addEventListener("touchmove",l),window.addEventListener("touchend",c))}function l(a){if(!m)return;const q="touches"in a?a.touches[0].clientX:a.clientX,C=e(b).clientWidth-e(_).clientWidth,j=q-y;i(r,Math.max(0,Math.min(C,j)))}function c(){m=!1;const a=e(b).clientWidth-e(_).clientWidth;e(r)>a*.9?(i(r,a),i(v,!0),w("complete"),typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([10,50,10])):i(r,0),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c)}te();var $=Ie();let U;var k=s($),T=s(k,!0);o(k);var d=h(k,2),X=s(d);{let a=be(()=>e(v)?"#10b981":"#a855f7");De(X,{get color(){return e(a)}})}o(d),ee(d,a=>i(_,a),()=>e(_));var P=h(d,2);o($),ee($,a=>i(b,a),()=>e(b)),W(()=>{U=re($,1,"slider-container svelte-17q91nm",null,U,{completed:e(v)}),M(T,e(v)?"Payment Sent!":"Slide to Pay"),K(d,`transform: translateX(${e(r)??""}px)`),$e(d,"aria-valuenow",e(r)),K(P,`width: ${e(r)+25}px; opacity: ${e(r)?1:0}`)}),Y("mousedown",d,N),Y("touchstart",d,N),g(L,$),se()}var Ue=x(`<div class="empty-state svelte-o2dbo"><p>You don't owe anyone. You are in the clear!</p> <div class="big-check svelte-o2dbo">✅</div></div>`),qe=x('<div class="check">✓</div>'),Ce=x('<button><div class="avatar svelte-o2dbo"> </div> <div class="info svelte-o2dbo"><span class="name svelte-o2dbo"> </span> <span class="owed svelte-o2dbo"> </span></div> <!></button>'),Re=x('<h2 class="svelte-o2dbo"> </h2> <p class="subtitle svelte-o2dbo">Select someone to pay:</p> <div class="recipients-list svelte-o2dbo"></div>',1),We=x('<div class="payment-action svelte-o2dbo"><div class="pay-amount svelte-o2dbo"> </div> <!></div>'),Ye=x('<div class="page-container svelte-o2dbo"><header class="svelte-o2dbo"><button class="icon-btn svelte-o2dbo"><!></button> <h1>Settle Up</h1> <div class="spacer"></div></header> <main class="svelte-o2dbo"><!> <!></main></div>');function ot(L,E){oe(E,!1);const w=()=>Se(V,"$store",b),[b,_]=Me(),m=p(),y=p();w();let r=p({}),v=p(0);const N={alice:"Alice",bob:"Bob",charlie:"Charlie",david:"David"};V.subscribe(t=>{i(r,Le(t)),i(v,ke(t))});let l=p(null),c=p(0);function $(t){i(l,t.uid);const n=Math.abs(Math.min(0,e(v)));i(c,Math.min(n,t.amount)),e(c)===0&&i(c,10)}async function U(){if(!(!e(l)||!e(m)))try{await Te("SETTLE_DEBT",{fromId:e(m).uid,toId:e(l),amount:e(c),timestamp:Date.now()}),setTimeout(()=>{Z("/dashboard")},1e3)}catch(t){console.error(t)}}function k(){Z("/dashboard")}function T(t){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t)}J(()=>w(),()=>{i(m,w().auth.user)}),J(()=>(e(r),e(m)),()=>{i(y,Object.entries(e(r)).filter(([t,n])=>{var u;return t!==((u=e(m))==null?void 0:u.uid)&&n>0}).map(([t,n])=>({uid:t,name:N[t]||t,amount:n})))}),_e(),te();var d=Ye(),X=s(d),P=s(X),a=s(P);Be(a,{}),o(P),ye(4),o(X);var q=h(X,2),C=s(q);{var j=t=>{var n=Ue();g(t,n)},ne=t=>{var n=Re(),u=ae(n),A=s(u);o(u);var R=h(u,4);xe(R,5,()=>e(y),Ee,(B,f)=>{var D=Ce();let G;var O=s(D),de=s(O,!0);o(O);var z=h(O,2),F=s(z),ve=s(F,!0);o(F);var H=h(F,2),ce=s(H);o(H),o(z);var me=h(z,2);{var ue=I=>{var fe=qe();g(I,fe)};Q(me,I=>{e(l),e(f),S(()=>e(l)===e(f).uid)&&I(ue)})}o(D),W(I=>{G=re(D,1,"recipient-card svelte-o2dbo",null,G,{selected:e(l)===e(f).uid}),M(de,(e(f),S(()=>e(f).name[0]))),M(ve,(e(f),S(()=>e(f).name))),M(ce,`is owed ${I??""}`)},[()=>(e(f),S(()=>T(e(f).amount)))]),Y("click",D,()=>$(e(f))),g(B,D)}),o(R),W(B=>M(A,`You owe ${B??""}`),[()=>(e(v),S(()=>T(Math.abs(e(v)))))]),g(t,n)};Q(C,t=>{e(v)>=0?t(j):t(ne,!1)})}var ie=h(C,2);{var le=t=>{var n=We(),u=s(n),A=s(u);o(u);var R=h(u,2);Ne(R,{$$events:{complete:U}}),o(n),W(B=>M(A,`Pay ${B??""}`),[()=>(e(c),S(()=>T(e(c))))]),g(t,n)};Q(ie,t=>{e(l)&&t(le)})}o(q),o(d),Y("click",P,k),g(L,d),se(),_()}export{ot as component};
