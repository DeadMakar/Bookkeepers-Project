(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const k=document.querySelector("#openBurger");k.addEventListener("click",v);const L=document.querySelector("#closeBurger");L.addEventListener("click",S);function v(){document.getElementById("overlay").style.display="flex",l(".overlay"),l("#openBurger"),l("#closeBurger")}function l(t){document.querySelector(t).classList.toggle("active")}function S(){document.getElementById("overlay").style.display="none",l(".overlay"),l("#openBurger"),l("#closeBurger")}document.addEventListener("DOMContentLoaded",function(){let t=document.querySelector("html"),n=document.querySelector("#openBurger"),i=document.querySelector("#closeBurger");n.addEventListener("click",function(){t.classList.add("unscroll")}),i.addEventListener("click",function(){t.classList.remove("unscroll")})});const E=()=>{const t=localStorage.getItem("theme");let n=!1,i;return t==="light"&&(i="light"),t==="dark"&&(i="dark"),window.matchMedia("(prefers-color-scheme: dark)").matches&&(i=t||"dark",n=!0),window.matchMedia("(prefers-color-scheme: light)").matches&&(i=t||"light",n=!0),window.matchMedia("(prefers-color-scheme: no-preference)").matches&&(i=t||"none",n=!0),{supports:n,theme:i}};document.addEventListener("DOMContentLoaded",t=>{console.clear();const n=E(),i=document.querySelector("[js-toggle]");document.querySelector("[js-clearStorage]");const r=document.documentElement;(()=>{switch(n.theme){case"dark":i.checked=!0,r.classList.add("dark"),r.classList.remove("light");break;case"light":i.checked=!1,r.classList.remove("dark"),r.classList.add("light");break}})(),i.addEventListener("click",o=>{i.checked?(r.classList.add("dark"),r.classList.remove("light"),localStorage.setItem("theme","dark")):(r.classList.remove("dark"),r.classList.add("light"),localStorage.setItem("theme","light"))},!1)},!1);const g=document.getElementById("fonds-list"),B=document.querySelector(".supp-btn"),c=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"img/images/save-the-children-1x.png",img2x:"img/images/save-the-children-2x.png",width:129,height:32},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"img/images/project-hope-1x.png",img2x:"img/images/project-hope-2x.png",width:62,height:32},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"img/images/international-medical-corps-1x.png",img2x:"img/images/international-medical-corps-2x.png",width:103,height:32},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"img/images/razom-1x.png",img2x:"img/images/razom-2x.png",width:82,height:32},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"img/images/action-against-hunger-1x.png",img2x:"img/images/action-against-hunger-2x.png",width:55,height:32},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"img/images/sergiy-prytula-1x.png",img2x:"img/images/sergiy-prytula-2x.png",width:115,height:32},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"img/images/medecins-sans-frontieres-1x.png",img2x:"img/images/medecins-sans-frontieres-2x.png",width:94,height:32},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"img/images/world-vision-1x.png",img2x:"img/images/world-vision-2x.png",width:85,height:30},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"img/images/united24-1x.png",img2x:"img/images/united24-2x.png",width:109,height:10}],m=6;let a=0;function I(t,n){const i=document.createElement("li"),r=document.createElement("a"),e=document.createElement("img"),o=(n+1).toString().padStart(2,"0"),{img:s,img2x:p,width:f,height:w,url:y,title:x}=t;return i.classList.add("list-item"),r.href=y,r.target="_blank",window.devicePixelRatio>1?e.src=p||s:e.src=s,e.style.width=f+"px",e.style.height=w+"px",e.alt=x,r.appendChild(e),i.appendChild(document.createTextNode(o+" ")),i.appendChild(r),i}function d(){const t=a*m,n=t+m;g.innerHTML="";const i=document.createDocumentFragment();for(let r=t;r<n;r++){const e=r%c.length,o=I(c[e],e);i.appendChild(o)}g.appendChild(i)}function h(){a=(a-1+c.length)%c.length,d()}function P(){a=(a+1)%c.length,d()}B.addEventListener("click",()=>{setTimeout(()=>{h()},200)});g.addEventListener("wheel",t=>{setTimeout(()=>{t.deltaY>0?P():h()},200)});d();const u="storedBooks";function C(t){const n=JSON.parse(localStorage.getItem(u))||[];n.push(t),localStorage.setItem(u,JSON.stringify(n))}export{u as K,C as s};
