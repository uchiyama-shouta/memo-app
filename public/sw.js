if(!self.define){let e,n={};const i=(i,a)=>(i=new URL(i+".js",a).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(n[s])return;let o={};const r=e=>i(e,s),t={module:{uri:s},exports:o,require:r};n[s]=Promise.all(a.map((e=>t[e]||r(e)))).then((e=>(c(...e),o)))}}define(["./workbox-5afaf374"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/LCtzMVMxGeDCNgZX457E0/_buildManifest.js",revision:"LCtzMVMxGeDCNgZX457E0"},{url:"/_next/static/LCtzMVMxGeDCNgZX457E0/_middlewareManifest.js",revision:"LCtzMVMxGeDCNgZX457E0"},{url:"/_next/static/LCtzMVMxGeDCNgZX457E0/_ssgManifest.js",revision:"LCtzMVMxGeDCNgZX457E0"},{url:"/_next/static/chunks/13-fd5cd029ff1f589c.js",revision:"LCtzMVMxGeDCNgZX457E0"},{url:"/_next/static/chunks/252f366e-6c0b9858a44bf6bc.js",revision:"LCtzMVMxGeDCNgZX457E0"},{url:"/_next/static/chunks/838.b909f3c9ff1d031b.js",revision:"LCtzMVMxGeDCNgZX457E0"},{url:"/_next/static/chunks/8d9d41f0.3012290059a08e58.js",revision:"LCtzMVMxGeDCNgZX457E0"},{url:"/_next/static/chunks/eabe11fc.f4f89119fa6fa536.js",revision:"LCtzMVMxGeDCNgZX457E0"},{url:"/_next/static/chunks/framework-087e577bf6ac2de7.js",revision:"LCtzMVMxGeDCNgZX457E0"},{url:"/_next/static/chunks/main-d245d7f1392c7823.js",revision:"LCtzMVMxGeDCNgZX457E0"},{url:"/_next/static/chunks/pages/%5Bid%5D-53be6d424aa6d073.js",revision:"LCtzMVMxGeDCNgZX457E0"},{url:"/_next/static/chunks/pages/%5Bid%5D/edit-3cd7377ea44a8efa.js",revision:"LCtzMVMxGeDCNgZX457E0"},{url:"/_next/static/chunks/pages/_app-8fd0462c216bef22.js",revision:"LCtzMVMxGeDCNgZX457E0"},{url:"/_next/static/chunks/pages/_error-1c08ea246196f2ea.js",revision:"LCtzMVMxGeDCNgZX457E0"},{url:"/_next/static/chunks/pages/index-808377efdec4a9d3.js",revision:"LCtzMVMxGeDCNgZX457E0"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"LCtzMVMxGeDCNgZX457E0"},{url:"/_next/static/chunks/webpack-114842ccc18613ac.js",revision:"LCtzMVMxGeDCNgZX457E0"},{url:"/_next/static/css/644388ac2200008a.css",revision:"LCtzMVMxGeDCNgZX457E0"},{url:"/android-chrome-128x128.png",revision:"5c28b132597e5cddf2e0df4332e5d298"},{url:"/android-chrome-144x144.png",revision:"fb43799df0cb0d2f012aeafde1a81ac5"},{url:"/android-chrome-152x152.png",revision:"3dca3a9fd1a262f4580c9b26572a9956"},{url:"/android-chrome-192x192.png",revision:"36339caca713da187603604141a119cc"},{url:"/android-chrome-256x256.png",revision:"a6b16ff49ff5444f5530086e13c094df"},{url:"/android-chrome-36x36.png",revision:"84b0fb6bff8ec66bf0b5b3a59bf51e22"},{url:"/android-chrome-384x384.png",revision:"0f55bcbe15fbb1f154548b4db540eb02"},{url:"/android-chrome-48x48.png",revision:"eeba5fac47fdd22cb51f8c530baf5e9b"},{url:"/android-chrome-512x512.png",revision:"2a5bf562816dd9dc9b600bb8d306bdb2"},{url:"/android-chrome-72x72.png",revision:"ce405ac27b8b178b44d5aa3bca60defb"},{url:"/android-chrome-96x96.png",revision:"69fb5e3575b1a45ae3069426470fe8ab"},{url:"/apple-touch-icon-114x114-precomposed.png",revision:"e828d350101fd6d369867536cfa110f9"},{url:"/apple-touch-icon-114x114.png",revision:"e828d350101fd6d369867536cfa110f9"},{url:"/apple-touch-icon-120x120-precomposed.png",revision:"d58d1ecb526bb8cd7be3a2fcd058dff6"},{url:"/apple-touch-icon-120x120.png",revision:"d58d1ecb526bb8cd7be3a2fcd058dff6"},{url:"/apple-touch-icon-144x144-precomposed.png",revision:"fb43799df0cb0d2f012aeafde1a81ac5"},{url:"/apple-touch-icon-144x144.png",revision:"fb43799df0cb0d2f012aeafde1a81ac5"},{url:"/apple-touch-icon-152x152-precomposed.png",revision:"3dca3a9fd1a262f4580c9b26572a9956"},{url:"/apple-touch-icon-152x152.png",revision:"3dca3a9fd1a262f4580c9b26572a9956"},{url:"/apple-touch-icon-180x180-precomposed.png",revision:"e775424d04331dd74631fa04772f7b06"},{url:"/apple-touch-icon-180x180.png",revision:"e775424d04331dd74631fa04772f7b06"},{url:"/apple-touch-icon-57x57-precomposed.png",revision:"c150d51d5153b237bbaa8bb5b26356f9"},{url:"/apple-touch-icon-57x57.png",revision:"c150d51d5153b237bbaa8bb5b26356f9"},{url:"/apple-touch-icon-60x60-precomposed.png",revision:"37231e9310e9259d52a1df18a1883f82"},{url:"/apple-touch-icon-60x60.png",revision:"37231e9310e9259d52a1df18a1883f82"},{url:"/apple-touch-icon-72x72-precomposed.png",revision:"ce405ac27b8b178b44d5aa3bca60defb"},{url:"/apple-touch-icon-72x72.png",revision:"ce405ac27b8b178b44d5aa3bca60defb"},{url:"/apple-touch-icon-76x76-precomposed.png",revision:"3d33144e97c138ec6df270428fde3aef"},{url:"/apple-touch-icon-76x76.png",revision:"3d33144e97c138ec6df270428fde3aef"},{url:"/apple-touch-icon-precomposed.png",revision:"e775424d04331dd74631fa04772f7b06"},{url:"/apple-touch-icon.png",revision:"e775424d04331dd74631fa04772f7b06"},{url:"/favicon.ico",revision:"fd2a7410dc0a48d0f55b52ad12f6455c"},{url:"/icon-128x128.png",revision:"5c28b132597e5cddf2e0df4332e5d298"},{url:"/icon-144x144.png",revision:"fb43799df0cb0d2f012aeafde1a81ac5"},{url:"/icon-152x152.png",revision:"3dca3a9fd1a262f4580c9b26572a9956"},{url:"/icon-160x160.png",revision:"4c3685344670b60a153ace56b43375c7"},{url:"/icon-16x16.png",revision:"af85705bd4123666b8ce4075e48e2951"},{url:"/icon-192x192.png",revision:"36339caca713da187603604141a119cc"},{url:"/icon-196x196.png",revision:"de76563f1220f3f54a4112d4c6c45fd5"},{url:"/icon-24x24.png",revision:"7a2fcac8f17073bdd87132e2a0821938"},{url:"/icon-256x256.png",revision:"a6b16ff49ff5444f5530086e13c094df"},{url:"/icon-32x32.png",revision:"99fed6ab6f8b31187fa125c1da7f3258"},{url:"/icon-36x36.png",revision:"84b0fb6bff8ec66bf0b5b3a59bf51e22"},{url:"/icon-384x384.png",revision:"0f55bcbe15fbb1f154548b4db540eb02"},{url:"/icon-48x48.png",revision:"eeba5fac47fdd22cb51f8c530baf5e9b"},{url:"/icon-512x512.png",revision:"2a5bf562816dd9dc9b600bb8d306bdb2"},{url:"/icon-72x72.png",revision:"ce405ac27b8b178b44d5aa3bca60defb"},{url:"/icon-96x96.png",revision:"69fb5e3575b1a45ae3069426470fe8ab"},{url:"/manifest.json",revision:"5ea8a0b8d82590845673e6defba2ffaa"},{url:"/site-tile-150x150.png",revision:"75f613e823bcc452ca4b9403c0faabd4"},{url:"/site-tile-310x150.png",revision:"08c8d258e1af8a89149c1a36a0c318d4"},{url:"/site-tile-310x310.png",revision:"2aa97474b6653d7cb461437be3e43002"},{url:"/site-tile-70x70.png",revision:"c83f802b68aab1933b2606aeadc85fda"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:i,state:a})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
