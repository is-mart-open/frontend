if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let d={};const t=e=>i(e,f),o={module:{uri:f},exports:d,require:t};s[f]=Promise.all(n.map((e=>o[e]||t(e)))).then((e=>(r(...e),d)))}}define(["./workbox-21445d85"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.0c0988b4.css",revision:"be4c5f4db6e18af17d17ac806e8adf06"},{url:"assets/index.b98df1bd.js",revision:"f034872ea349289af515479c5298b77f"},{url:"assets/vendor.2704674a.js",revision:"827e943a5c499f5c332756b7775473dc"},{url:"index.html",revision:"31d05a3047f7d6344b7533f76457fb04"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icons/favicon.svg",revision:"d73be6ffdab5cb2dfc95af53df76e746"},{url:"manifest.webmanifest",revision:"ce8f6f9eb439faa24ec6b06df79dc1b1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
