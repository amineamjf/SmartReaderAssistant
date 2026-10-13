/* Smart Remplacement - Service Worker (cache d'abord, mise à jour manuelle : changer VERSION puis publier) */
const VERSION='v1',CACHE='smart-remplacement-'+VERSION;
const CORE=['./','index.html','manifest.webmanifest','icons/icon-180.png','icons/icon-192.png','icons/icon-512.png','icons/icon-512-maskable.png'];
const FONT=/^https:\/\/fonts\.(googleapis|gstatic)\.com\//;
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith('smart-remplacement-')&&x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
 const r=e.request;if(r.method!=='GET')return;
 const u=new URL(r.url);
 if(u.origin===location.origin){
  e.respondWith(caches.match(r,{ignoreSearch:true}).then(h=>h||fetch(r).then(n=>{if(n&&n.ok){const c=n.clone();caches.open(CACHE).then(x=>x.put(r,c))}return n}).catch(()=>r.mode==='navigate'?caches.match('index.html'):Response.error())));
  return}
 if(FONT.test(r.url)){
  e.respondWith(caches.open(CACHE).then(c=>c.match(r).then(h=>{const f=fetch(r).then(n=>{if(n&&(n.ok||n.type==='opaque'))c.put(r,n.clone());return n}).catch(()=>h);return h||f})))}
});
