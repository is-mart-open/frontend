if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let t={};const o=e=>i(e,d),c={module:{uri:d},exports:t,require:o};s[d]=Promise.all(n.map((e=>c[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-21445d85"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.352a1298.css",revision:"2df7bf2807a33454c5e2264f2d2b5ac7"},{url:"assets/index.ecd20040.js",revision:"cda0fab4d1463f6f2c4c97ff3a4bd53b"},{url:"assets/vendor.2704674a.js",revision:"827e943a5c499f5c332756b7775473dc"},{url:"index.html",revision:"1b83da98e29d4596557caf40d61942b8"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icons/favicon.svg",revision:"d73be6ffdab5cb2dfc95af53df76e746"},{url:"manifest.webmanifest",revision:"67fbb51c30a35476f2ab4d2e216ad036"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
