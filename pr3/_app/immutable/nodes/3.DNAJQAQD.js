import{a as v,f as j,c as tt,t as D}from"../chunks/BHnUeLfg.js";import{i as X}from"../chunks/BZyZ3sR9.js";import{O as Y,aR as at,Q as k,m as a,aS as E,o as z,a3 as R,f as C,ad as I,T as l,R as y,U as r,aj as et}from"../chunks/mra9ftPF.js";import{s as T}from"../chunks/PaQDFcYx.js";import{i as L}from"../chunks/BHq0IYa-.js";import{I as st,s as it,e as ot,a as rt,i as nt}from"../chunks/Db2YuAzI.js";import{e as lt}from"../chunks/D1USUX2b.js";import{a as vt,s as ct}from"../chunks/BGwb_7VU.js";import{s as U}from"../chunks/B2R-KUoo.js";import{s as dt,a as mt}from"../chunks/9uzXOmBe.js";import{b as ft}from"../chunks/DCEFrT2H.js";import{g as gt}from"../chunks/v7pxL7TP.js";import{l as ht,s as pt}from"../chunks/C7hNub10.js";var ut=j('<canvas class="svelte-1l80i4v"></canvas>');function xt(b,u){Y(u,!1);let e=R(),x,h=[];const c=200;at(()=>{const i=a(e).getContext("2d");if(!i)return;let m=E(e,a(e).width=a(e).offsetWidth),n=E(e,a(e).height=a(e).offsetHeight);window.addEventListener("resize",()=>{m=E(e,a(e).width=a(e).offsetWidth),n=E(e,a(e).height=a(e).offsetHeight),M()});function M(){h=[];for(let t=0;t<c;t++){const f=Math.random()*Math.PI*2,p=Math.random()*(Math.min(m,n)/2);h.push({x:m/2+Math.cos(f)*p,y:n/2+Math.sin(f)*p,radius:Math.random()*2+1,color:`rgba(${130+Math.random()*50}, 50, ${200+Math.random()*55}, ${Math.random()*.5+.5})`,velocity:{x:0,y:0},angle:f,distance:p})}}function _(){i&&(x=requestAnimationFrame(_),i.fillStyle="rgba(5, 5, 5, 0.1)",i.fillRect(0,0,m,n),h.forEach(t=>{t.angle+=.02*(200/(t.distance+50));let f=m/2+Math.cos(t.angle)*t.distance,p=n/2+Math.sin(t.angle)*t.distance;t.x+=(f-t.x)*.1,t.y+=(p-t.y)*.1,i.beginPath(),i.arc(t.x,t.y,t.radius,0,Math.PI*2,!1),i.fillStyle=t.color,i.fill()}))}return M(),_(),()=>{cancelAnimationFrame(x),window.removeEventListener("resize",()=>{})}}),X();var d=ut();ft(d,i=>z(e,i),()=>a(e)),v(b,d),k()}function _t(b,u){const e=ht(u,["children","$$slots","$$events","$$legacy"]);/**
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
 */const x=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];st(b,pt({name:"plus"},()=>e,{get iconNode(){return x},children:(h,c)=>{var d=tt(),i=C(d);it(i,u,"default",{}),v(h,d)},$$slots:{default:!0}}))}var yt=j('<span class="primary-text svelte-x1i5gj"> </span> <span class="secondary-text svelte-x1i5gj">paid by You (if true)</span>',1),bt=j('<span class="primary-text svelte-x1i5gj">Settlement</span>'),Mt=j('<div class="activity-item glass-panel svelte-x1i5gj"><div class="activity-icon"><!></div> <div class="activity-details svelte-x1i5gj"><!></div> <div class="activity-amount svelte-x1i5gj"> </div></div>'),$t=j('<div class="dashboard svelte-x1i5gj"><!> <div class="header svelte-x1i5gj"><div class="logo svelte-x1i5gj">The Vortex</div> <div class="settings-icon">⚙️</div></div> <div class="balance-container svelte-x1i5gj"><h2 class="svelte-x1i5gj">Your Net Balance</h2> <div> </div></div> <div class="activity-feed svelte-x1i5gj"></div> <button class="fab svelte-x1i5gj"><!></button></div>');function Ft(b,u){Y(u,!1);const e=()=>vt(U,"$store",x),[x,h]=ct();e();let c=R(0),d=R([]);U.subscribe(g=>{z(c,dt(g)),z(d,mt(g))});function i(){gt("/expense/new")}function m(g){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(g)}X();var n=$t(),M=l(n);xt(M,{});var _=y(M,4),t=y(l(_),2);let f;var p=l(t);r(t),r(_);var S=y(_,2);ot(S,5,()=>a(d),nt,(g,$)=>{var P=Mt(),N=l(P),V=l(N);{var W=s=>{var o=D("🧾");v(s,o)},q=s=>{var o=D("💸");v(s,o)},O=s=>{var o=D("📝");v(s,o)};L(V,s=>{a($).type==="ADD_EXPENSE"?s(W):a($).type==="SETTLE_DEBT"?s(q,1):s(O,!1)})}r(N);var A=y(N,2),Q=l(A);{var G=s=>{var o=yt(),F=C(o),Z=l(F,!0);r(F),et(2),I(()=>T(Z,a($).payload.description||"Expense")),v(s,o)},J=s=>{var o=bt();v(s,o)};L(Q,s=>{a($).type==="ADD_EXPENSE"?s(G):s(J,!1)})}r(A);var B=y(A,2),K=l(B,!0);r(B),r(P),I(s=>T(K,s),[()=>m(a($).payload.amount)]),v(g,P)}),r(S);var w=y(S,2),H=l(w);_t(H,{size:32}),r(w),r(n),I(g=>{f=rt(t,1,"amount svelte-x1i5gj",null,f,{positive:a(c)>=0,negative:a(c)<0}),T(p,`${a(c)>=0?"+":""}${g??""}`)},[()=>m(a(c))]),lt("click",w,i),v(b,n),k(),h()}export{Ft as component};
