import{c as pe,a as y,f as x}from"../chunks/Bmj0PmUK.js";import"../chunks/BXY8mwAH.js";import{f as te,a6 as ae,a9 as s,aa as o,ab as h,m as e,o as i,a7 as W,a8 as oe,a0 as p,B as he,af as K,ag as be,ah as _e,u as S}from"../chunks/9Y9rDYax.js";import{s as M}from"../chunks/CuUxtOoW.js";import{i as G}from"../chunks/BtpUgM9C.js";import{I as ge,s as ye,a as se,b as Q,c as we,e as $e,i as xe}from"../chunks/BB8SYtfv.js";import{e as Y}from"../chunks/DBHRyS1n.js";import{i as re}from"../chunks/D8uZUpcf.js";import{a as Ee,s as Se}from"../chunks/DZe_NpQR.js";import{s as V}from"../chunks/B2R-KUoo.js";import{b as Me,s as Le}from"../chunks/9uzXOmBe.js";import{l as ke}from"../chunks/DehJPUGh.js";import{g as Z}from"../chunks/Ds7fTFb8.js";import{c as Xe}from"../chunks/C7zVJvmC.js";import{b as ee}from"../chunks/aR18Ss7S.js";import{l as Pe,s as Be}from"../chunks/B59DNuwg.js";import{C as De}from"../chunks/DeYLOleU.js";function Ie(L,E){const w=Pe(E,["children","$$slots","$$events","$$legacy"]);/**
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
 */const b=[["path",{d:"m9 18 6-6-6-6"}]];ge(L,Be({name:"chevron-right"},()=>w,{get iconNode(){return b},children:(_,m)=>{var g=pe(),r=te(g);ye(r,E,"default",{}),y(_,g)},$$slots:{default:!0}}))}var Ne=x('<div><div class="track-text svelte-17q91nm"> </div> <div class="thumb svelte-17q91nm" role="slider" aria-label="Slide to confirm payment" tabindex="0"><!></div> <div class="trail svelte-17q91nm"></div></div>');function Te(L,E){ae(E,!1);const w=Xe();let b=p(),_=p(),m=!1,g=0,r=p(0),v=p(!1);function T(a){e(v)||(m=!0,g="touches"in a?a.touches[0].clientX:a.clientX,window.addEventListener("mousemove",l),window.addEventListener("mouseup",c),window.addEventListener("touchmove",l),window.addEventListener("touchend",c))}function l(a){if(!m)return;const C="touches"in a?a.touches[0].clientX:a.clientX,U=e(b).clientWidth-e(_).clientWidth,A=C-g;i(r,Math.max(0,Math.min(U,A)))}function c(){m=!1;const a=e(b).clientWidth-e(_).clientWidth;e(r)>a*.9?(i(r,a),i(v,!0),w("complete"),typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([10,50,10])):i(r,0),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c)}re();var $=Ne();let q;var k=s($),X=s(k,!0);o(k);var d=h(k,2),P=s(d);{let a=he(()=>e(v)?"#10b981":"#a855f7");Ie(P,{get color(){return e(a)}})}o(d),ee(d,a=>i(_,a),()=>e(_));var B=h(d,2);o($),ee($,a=>i(b,a),()=>e(b)),W(()=>{q=se($,1,"slider-container svelte-17q91nm",null,q,{completed:e(v)}),M(X,e(v)?"Payment Sent!":"Slide to Pay"),Q(d,`transform: translateX(${e(r)??""}px)`),we(d,"aria-valuenow",e(r)),Q(B,`width: ${e(r)+25}px; opacity: ${e(r)?1:0}`)}),Y("mousedown",d,T),Y("touchstart",d,T),y(L,$),oe()}var qe=x(`<div class="empty-state svelte-o2dbo"><p>You don't owe anyone. You are in the clear!</p> <div class="big-check svelte-o2dbo">✅</div></div>`),Ce=x('<div class="check">✓</div>'),Ue=x('<button><div class="avatar svelte-o2dbo"> </div> <div class="info svelte-o2dbo"><span class="name svelte-o2dbo"> </span> <span class="owed svelte-o2dbo"> </span></div> <!></button>'),Re=x('<h2 class="svelte-o2dbo"> </h2> <p class="subtitle svelte-o2dbo">Select someone to pay:</p> <div class="recipients-list svelte-o2dbo"></div>',1),We=x('<div class="payment-action svelte-o2dbo"><div class="pay-amount svelte-o2dbo"> </div> <!></div>'),Ye=x('<div class="page-container svelte-o2dbo"><header class="svelte-o2dbo"><button class="icon-btn svelte-o2dbo"><!></button> <h1>Settle Up</h1> <div class="spacer"></div></header> <main class="svelte-o2dbo"><!> <!></main></div>');function rt(L,E){ae(E,!1);const w=()=>Ee(V,"$store",b),[b,_]=Se(),m=p(),g=p();w();let r=p({}),v=p(0);const T={alice:"Alice",bob:"Bob",charlie:"Charlie",david:"David"};V.subscribe(t=>{i(r,Me(t)),i(v,Le(t))});let l=p(null),c=p(0);function $(t){i(l,t.uid);const n=Math.abs(Math.min(0,e(v)));i(c,Math.min(n,t.amount)),e(c)===0&&i(c,10)}async function q(){if(!(!e(l)||!e(m)))try{await ke("SETTLE_DEBT",{fromId:e(m).uid,toId:e(l),amount:e(c),timestamp:Date.now()}),setTimeout(()=>{Z("/dashboard")},1e3)}catch(t){console.error(t)}}function k(){Z("/dashboard")}function X(t){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t)}K(()=>w(),()=>{i(m,w().auth.user)}),K(()=>(e(r),e(m)),()=>{i(g,Object.entries(e(r)).filter(([t,n])=>{var u;return t!==((u=e(m))==null?void 0:u.uid)&&n>0}).map(([t,n])=>({uid:t,name:T[t]||t,amount:n})))}),be(),re();var d=Ye(),P=s(d),B=s(P),a=s(B);De(a,{}),o(B),_e(4),o(P);var C=h(P,2),U=s(C);{var A=t=>{var n=qe();y(t,n)},ne=t=>{var n=Re(),u=te(n),j=s(u);o(u);var R=h(u,4);$e(R,5,()=>e(g),xe,(D,f)=>{var I=Ue();let H;var z=s(I),de=s(z,!0);o(z);var F=h(z,2),O=s(F),ve=s(O,!0);o(O);var J=h(O,2),ce=s(J);o(J),o(F);var me=h(F,2);{var ue=N=>{var fe=Ce();y(N,fe)};G(me,N=>{e(l),e(f),S(()=>e(l)===e(f).uid)&&N(ue)})}o(I),W(N=>{H=se(I,1,"recipient-card svelte-o2dbo",null,H,{selected:e(l)===e(f).uid}),M(de,(e(f),S(()=>e(f).name[0]))),M(ve,(e(f),S(()=>e(f).name))),M(ce,`is owed ${N??""}`)},[()=>(e(f),S(()=>X(e(f).amount)))]),Y("click",I,()=>$(e(f))),y(D,I)}),o(R),W(D=>M(j,`You owe ${D??""}`),[()=>(e(v),S(()=>X(Math.abs(e(v)))))]),y(t,n)};G(U,t=>{e(v)>=0?t(A):t(ne,!1)})}var ie=h(U,2);{var le=t=>{var n=We(),u=s(n),j=s(u);o(u);var R=h(u,2);Te(R,{$$events:{complete:q}}),o(n),W(D=>M(j,`Pay ${D??""}`),[()=>(e(c),S(()=>X(e(c))))]),y(t,n)};G(ie,t=>{e(l)&&t(le)})}o(C),o(d),Y("click",B,k),y(L,d),oe(),_()}export{rt as component};
