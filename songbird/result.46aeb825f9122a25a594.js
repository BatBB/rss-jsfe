!function(){"use strict";var e={91:function(e){e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},371:function(e,t,n){e.exports=n.p+"assets/favicon.ico"},543:function(e,t,n){e.exports=n.p+"assets/github-logo.png"},103:function(e,t,n){e.exports=n.p+"assets/rs_school_js.svg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}n.m=e,n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e}(),n.b=document.baseURI||self.location.href,function(){var e={levels:{en:["Warming-up","Passerines","Forest birds","Songbirds","Predator birds","Sea birds"],ru:["Разминка","Воробьиные","Лесные птицы","Певчие птицы","Хищные птицы","Морские птицы"]},description:{en:"Listen to the player.\nChoose an answer from the list.",ru:"Послушайте плеер.\nВыберите ответ из списка."},nav:{en:["Home","Quiz","Result","Gallery"],ru:["Начальная страница","Викторина","Результат","Галерея"]},score:{en:"Score:",ru:"Набрано баллов:"},congratulation:{en:"Сongratulations!",ru:"Поздравляем!"},resultText:{en:`You scored ${localStorage.getItem("score")} points out of 30`,ru:`Вы набрали ${localStorage.getItem("score")} баллов из 30`},resultBtn:{en:"Play again",ru:"Сыграть еще раз"},play:{en:"Play",ru:"Играть"},nextLevel:{en:"Next level",ru:"Следующий уровень"},result:{en:"Result",ru:"Результат"}};const t={nav:function(){const t=localStorage.getItem("lang");document.querySelectorAll(".nav-link").forEach(((n,r)=>{n.textContent=e.nav[t][r]}))},score:function(){const t=localStorage.getItem("lang");let n=localStorage.getItem("score")||"0";document.getElementById("score").innerHTML=`${e.score[t]} ${n}`}};var r=t,o=n(91),c=n.n(o),s=new URL(n(371),n.b),a=new URL(n(103),n.b),u=new URL(n(543),n.b);c()(s),c()(a),c()(u),r.nav();let l=localStorage.getItem("lang");localStorage.getItem("score");const i=document.querySelector(".score-congratulation"),g=document.querySelector(".score-text"),f=document.querySelector(".score-btn");i.textContent=e.congratulation[l],g.textContent=e.resultText[l],f.textContent=e.resultBtn[l]}()}();