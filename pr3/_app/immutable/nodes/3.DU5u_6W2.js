import{a as v,f as E,c as tt,t as D}from"../chunks/Bmj0PmUK.js";import"../chunks/BXY8mwAH.js";import{a6 as Y,a8 as k,m as a,aR as j,o as z,a0 as B,f as C,a7 as I,a9 as l,ab as y,aa as r,ah as at}from"../chunks/9Y9rDYax.js";import{s as T}from"../chunks/CuUxtOoW.js";import{i as R}from"../chunks/BtpUgM9C.js";import{I as et,s as st,e as it,a as ot,i as rt}from"../chunks/BB8SYtfv.js";import{e as nt}from"../chunks/DBHRyS1n.js";import{i as H}from"../chunks/D8uZUpcf.js";import{a as lt,s as vt}from"../chunks/DZe_NpQR.js";import{s as X}from"../chunks/B2R-KUoo.js";import{s as ct,a as dt}from"../chunks/9uzXOmBe.js";import{o as mt}from"../chunks/C7zVJvmC.js";import{b as ft}from"../chunks/aR18Ss7S.js";import{g as pt}from"../chunks/CQ1Wmn_d.js";import{l as ht,s as gt}from"../chunks/B59DNuwg.js";var ut=E('<canvas class="svelte-1l80i4v"></canvas>');function xt(b,u){Y(u,!1);let e=B(),x,h=[];const c=200;mt(()=>{const i=a(e).getContext("2d");if(!i)return;let m=j(e,a(e).width=a(e).offsetWidth),n=j(e,a(e).height=a(e).offsetHeight);window.addEventListener("resize",()=>{m=j(e,a(e).width=a(e).offsetWidth),n=j(e,a(e).height=a(e).offsetHeight),M()});function M(){h=[];for(let t=0;t<c;t++){const f=Math.random()*Math.PI*2,g=Math.random()*(Math.min(m,n)/2);h.push({x:m/2+Math.cos(f)*g,y:n/2+Math.sin(f)*g,radius:Math.random()*2+1,color:`rgba(${130+Math.random()*50}, 50, ${200+Math.random()*55}, ${Math.random()*.5+.5})`,velocity:{x:0,y:0},angle:f,distance:g})}}function _(){i&&(x=requestAnimationFrame(_),i.fillStyle="rgba(5, 5, 5, 0.1)",i.fillRect(0,0,m,n),h.forEach(t=>{t.angle+=.02*(200/(t.distance+50));let f=m/2+Math.cos(t.angle)*t.distance,g=n/2+Math.sin(t.angle)*t.distance;t.x+=(f-t.x)*.1,t.y+=(g-t.y)*.1,i.beginPath(),i.arc(t.x,t.y,t.radius,0,Math.PI*2,!1),i.fillStyle=t.color,i.fill()}))}return M(),_(),()=>{cancelAnimationFrame(x),window.removeEventListener("resize",()=>{})}}),H();var d=ut();ft(d,i=>z(e,i),()=>a(e)),v(b,d),k()}function _t(b,u){const e=ht(u,["children","$$slots","$$events","$$legacy"]);/**
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
 */const x=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];et(b,gt({name:"plus"},()=>e,{get iconNode(){return x},children:(h,c)=>{var d=tt(),i=C(d);st(i,u,"default",{}),v(h,d)},$$slots:{default:!0}}))}var yt=E('<span class="primary-text svelte-x1i5gj"> </span> <span class="secondary-text svelte-x1i5gj">paid by You (if true)</span>',1),bt=E('<span class="primary-text svelte-x1i5gj">Settlement</span>'),Mt=E('<div class="activity-item glass-panel svelte-x1i5gj"><div class="activity-icon"><!></div> <div class="activity-details svelte-x1i5gj"><!></div> <div class="activity-amount svelte-x1i5gj"> </div></div>'),$t=E('<div class="dashboard svelte-x1i5gj"><!> <div class="header svelte-x1i5gj"><div class="logo svelte-x1i5gj">The Vortex</div> <div class="settings-icon">⚙️</div></div> <div class="balance-container svelte-x1i5gj"><h2 class="svelte-x1i5gj">Your Net Balance</h2> <div> </div></div> <div class="activity-feed svelte-x1i5gj"></div> <button class="fab svelte-x1i5gj"><!></button></div>');function Xt(b,u){Y(u,!1);const e=()=>lt(X,"$store",x),[x,h]=vt();e();let c=B(0),d=B([]);X.subscribe(p=>{z(c,ct(p)),z(d,dt(p))});function i(){pt("/expense/new")}function m(p){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(p)}H();var n=$t(),M=l(n);xt(M,{});var _=y(M,4),t=y(l(_),2);let f;var g=l(t);r(t),r(_);var w=y(_,2);it(w,5,()=>a(d),rt,(p,$)=>{var P=Mt(),N=l(P),V=l(N);{var W=s=>{var o=D("🧾");v(s,o)},q=s=>{var o=D("💸");v(s,o)},G=s=>{var o=D("📝");v(s,o)};R(V,s=>{a($).type==="ADD_EXPENSE"?s(W):a($).type==="SETTLE_DEBT"?s(q,1):s(G,!1)})}r(N);var A=y(N,2),J=l(A);{var K=s=>{var o=yt(),L=C(o),Z=l(L,!0);r(L),at(2),I(()=>T(Z,a($).payload.description||"Expense")),v(s,o)},O=s=>{var o=bt();v(s,o)};R(J,s=>{a($).type==="ADD_EXPENSE"?s(K):s(O,!1)})}r(A);var F=y(A,2),Q=l(F,!0);r(F),r(P),I(s=>T(Q,s),[()=>m(a($).payload.amount)]),v(p,P)}),r(w);var S=y(w,2),U=l(S);_t(U,{size:32}),r(S),r(n),I(p=>{f=ot(t,1,"amount svelte-x1i5gj",null,f,{positive:a(c)>=0,negative:a(c)<0}),T(g,`${a(c)>=0?"+":""}${p??""}`)},[()=>m(a(c))]),nt("click",S,i),v(b,n),k(),h()}export{Xt as component};
