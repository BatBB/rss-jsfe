!function(){"use strict";var e,t={617:function(e,t,n){var r=n(91),o=n.n(r),c=new URL(n(371),n.b),a=new URL(n(103),n.b),i=new URL(n(543),n.b),l=(o()(c),o()(a),o()(i),n(337));const u={nav:function(){const e=localStorage.getItem("lang");document.querySelectorAll(".nav-link").forEach(((t,n)=>{t.textContent=l.Z.nav[e][n]}))},score:function(){const e=localStorage.getItem("lang");let t=localStorage.getItem("score")||"0";document.getElementById("score").innerHTML=`${l.Z.score[e]} ${t}`}};var s=u,f=n(499),p=n(410);s.nav();const d=document.getElementById("gallery");let g=localStorage.getItem("lang");for(let e=0;e<6;e++)for(let t=0;t<6;t++){const n=f.Z[g][e][t],r=new p.Z;r.audioSrc=n.audio;const o=r.createPlayerBlock();o.querySelector(".audioplayer-img").style.backgroundImage=`url(${n.image})`;let c=`${n.name} (${n.species})`;o.querySelector(".audioplayer-title").textContent=c;const a=document.createElement("div");a.className="card";const i=document.createElement("div");i.className="description",i.textContent=n.description,a.append(o),a.append(i),d.append(a)}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var c=n[e]={exports:{}};return t[e](c,c.exports,r),c.exports}r.m=t,e=[],r.O=function(t,n,o,c){if(!n){var a=1/0;for(s=0;s<e.length;s++){n=e[s][0],o=e[s][1],c=e[s][2];for(var i=!0,l=0;l<n.length;l++)(!1&c||a>=c)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(i=!1,c<a&&(a=c));if(i){e.splice(s--,1);var u=o();void 0!==u&&(t=u)}}return t}c=c||0;for(var s=e.length;s>0&&e[s-1][2]>c;s--)e[s]=e[s-1];e[s]=[n,o,c]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e}(),function(){r.b=document.baseURI||self.location.href;var e={121:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,c,a=n[0],i=n[1],l=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(l)var s=l(r)}for(t&&t(n);u<a.length;u++)c=a[u],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(s)},n=self.webpackChunksongbird=self.webpackChunksongbird||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[330],(function(){return r(617)}));o=r.O(o)}();