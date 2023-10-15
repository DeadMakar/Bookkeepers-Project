(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const L=document.querySelector("#openBurger");L.addEventListener("click",S);const v=document.querySelector("#closeBurger");v.addEventListener("click",B);function S(){document.getElementById("overlay").style.display="flex",c(".overlay"),c("#openBurger"),c("#closeBurger")}function c(i){document.querySelector(i).classList.toggle("active")}function B(){document.getElementById("overlay").style.display="none",c(".overlay"),c("#openBurger"),c("#closeBurger")}document.addEventListener("DOMContentLoaded",function(){let i=document.querySelector("html"),n=document.querySelector("#openBurger"),t=document.querySelector("#closeBurger");n.addEventListener("click",function(){i.classList.add("unscroll")}),t.addEventListener("click",function(){i.classList.remove("unscroll")})});const E=()=>{const i=localStorage.getItem("theme");let n=!1,t;return i==="light"&&(t="light"),i==="dark"&&(t="dark"),window.matchMedia("(prefers-color-scheme: dark)").matches&&(t=i||"dark",n=!0),window.matchMedia("(prefers-color-scheme: light)").matches&&(t=i||"light",n=!0),window.matchMedia("(prefers-color-scheme: no-preference)").matches&&(t=i||"none",n=!0),{supports:n,theme:t}};document.addEventListener("DOMContentLoaded",i=>{console.clear();const n=E(),t=document.querySelector("[js-toggle]");document.querySelector("[js-clearStorage]");const r=document.documentElement;(()=>{switch(n.theme){case"dark":t.checked=!0,r.classList.add("dark"),r.classList.remove("light");break;case"light":t.checked=!1,r.classList.remove("dark"),r.classList.add("light");break}})(),t.addEventListener("click",o=>{t.checked?(r.classList.add("dark"),r.classList.remove("light"),localStorage.setItem("theme","dark")):(r.classList.remove("dark"),r.classList.add("light"),localStorage.setItem("theme","light"))},!1)},!1);const m=document.getElementById("fonds-list"),s=document.querySelector(".supp-btn");let a=0;const g=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./img/images/save-the-children-1x.png",img2x:"./img/images/save-the-children-2x.png",width:129,height:32},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/images/project-hope-1x.png",img2x:"./img/images/project-hope-2x.png",width:62,height:32},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/images/international-medical-corps-1x.png",img2x:"./img/images/international-medical-corps-2x.png",width:103,height:32},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/images/razom-1x.png",img2x:"./img/images/razom-2x.png",width:82,height:32},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/images/action-against-hunger-1x.png",img2x:"./img/images/action-against-hunger-2x.png",width:55,height:32},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/images/sergiy-prytula-1x.png",img2x:"./img/images/sergiy-prytula-2x.png",width:115,height:32},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/images/medecins-sans-frontieres-1x.png",img2x:"./img/images/medecins-sans-frontieres-2x.png",width:94,height:32},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/images/world-vision-1x.png",img2x:"./img/images/world-vision-2x.png",width:85,height:30},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/images/united24-1x.png",img2x:"./img/images/united24-2x.png",width:109,height:10}],u=6;let d=0;function I(i,n){const t=document.createElement("li"),r=document.createElement("a"),e=document.createElement("img"),o=(n+1).toString().padStart(2,"0"),{img:l,img2x:f,width:y,height:w,url:k,title:x}=i;return t.classList.add("list-item"),r.href=k,r.target="_blank",window.devicePixelRatio>1?e.src=f||l:e.src=l,e.style.width=y+"px",e.style.height=w+"px",e.alt=x,r.appendChild(e),t.appendChild(document.createTextNode(o+" ")),t.appendChild(r),t}function p(){const i=d*u,n=i+u;m.innerHTML="";const t=document.createDocumentFragment();for(let r=i;r<n;r++){const e=r%g.length,o=I(g[e],e);t.appendChild(o)}m.appendChild(t)}function P(){d=(d-1+g.length)%g.length,p()}s.addEventListener("click",()=>{a++,a===1?(s.style.transition="transform 0.3s ease",s.style.transform="rotate(270deg)"):a===2?(s.style.transition="transform 0.3s ease",s.style.transform="rotate(90deg)",a=0):a===3&&(s.style.transition="transform 0.3s ease",s.style.transform="rotate(270deg)",a=1),setTimeout(()=>{a===1&&P()},200)});p();const h="storedBooks";function C(i){const n=JSON.parse(localStorage.getItem(h))||[];n.push(i),localStorage.setItem(h,JSON.stringify(n))}export{h as K,C as s};
