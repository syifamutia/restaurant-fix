if(!self.define){let e,c={};const i=(i,n)=>(i=new URL(i+".js",n).href,c[i]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=c,document.head.appendChild(e)}else e=i,importScripts(i),c()})).then((()=>{let e=c[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(c[r])return;let s={};const o=e=>i(e,r),a={module:{uri:r},exports:s,require:o};c[r]=Promise.all(n.map((e=>a[e]||o(e)))).then((e=>(d(...e),s)))}}define(["./workbox-3ca83693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"109.bundle.js",revision:"416eca2c32bf03b3117ea0aacbbcc019"},{url:"2ec24f93d4c24e5fdd9b.jpg",revision:null},{url:"608.bundle.js",revision:"5b235b96ce5a6b00460592f3ecdea1d0"},{url:"a174fcfb1a82c6b25273.jpg",revision:null},{url:"app.webmanifest",revision:"2fa3c026d8ee59f72c24cbb510f25cb2"},{url:"app~7bd12dde.bundle.js",revision:"85144038c1788fb67ef76dd2cc994760"},{url:"app~7bd12dde.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"4c3d4eda2e5d0698fb0b4e1389946117"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~d1658f4b.bundle.js",revision:"e1b27c273b81ecfcad3c5feb9341c023"},{url:"app~e4317507.bundle.js",revision:"3f61213c9b431691e330cb05b49c08e2"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"favicon.png",revision:"cfcc214d2d8df3604c1a0bee7115c9e6"},{url:"icons/icon-128x128.png",revision:"278963fca27d1be8bdf771a6404d32c6"},{url:"icons/icon-144x144.png",revision:"5c6bf88f8bcfcd4566d63ec26d4fa6fd"},{url:"icons/icon-152x152.png",revision:"2b560345bcc62c9e31d241142a4b562a"},{url:"icons/icon-192x192.png",revision:"14b428c86c6dfd3ed9008904f6e78c74"},{url:"icons/icon-384x384.png",revision:"4d0178e21f525e5da0cad77fb59a5e7c"},{url:"icons/icon-512x512.png",revision:"d584efd35776772c0ec5cee6801c0b7f"},{url:"icons/icon-72x72.png",revision:"04d31e042ba5a8131a07c02e36bbc0bf"},{url:"icons/icon-96x96.png",revision:"43995f280873cf9be4d36084e7c33716"},{url:"index.html",revision:"b4d04abc87420301ed8eb0dc64540211"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev")),new e.StaleWhileRevalidate({cacheName:"restaurantdb-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/")),new e.StaleWhileRevalidate({cacheName:"restaurantdb-image-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
