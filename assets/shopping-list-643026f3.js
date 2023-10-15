import{K as i}from"./modal-local-storage-961f2a5c.js";const a=document.querySelector("#openBurger");a.addEventListener("click",g);const p=document.querySelector("#closeBurger");p.addEventListener("click",d);function g(){document.getElementById("overlay").style.display="block",r(".overlay"),r("#openBurger"),r("#closeBurger")}function r(e){document.querySelector(e).classList.toggle("active")}function d(){document.getElementById("overlay").style.display="none",r(".overlay"),r("#openBurger"),r("#closeBurger")}const h=()=>{const e=localStorage.getItem("theme");let o=!1,t;return e==="light"&&(t="light"),e==="dark"&&(t="dark"),window.matchMedia("(prefers-color-scheme: dark)").matches&&(t=e||"dark",o=!0),window.matchMedia("(prefers-color-scheme: light)").matches&&(t=e||"light",o=!0),window.matchMedia("(prefers-color-scheme: no-preference)").matches&&(t=e||"none",o=!0),{supports:o,theme:t}};document.addEventListener("DOMContentLoaded",e=>{console.clear();const o=h(),t=document.querySelector("[js-toggle]"),l=document.querySelector("[js-clearStorage]"),s=document.documentElement;(()=>{switch(o.theme){case"dark":t.checked=!0,s.classList.add("dark"),s.classList.remove("light");break;case"light":t.checked=!1,s.classList.remove("dark"),s.classList.add("light");break}})(),o.supports&&addFooter(),l.addEventListener("click",c=>{localStorage.removeItem("theme"),console.info("local storage cleared")},!1),t.addEventListener("click",c=>{t.checked?(s.classList.add("dark"),s.classList.remove("light"),localStorage.setItem("theme","dark")):(s.classList.remove("dark"),s.classList.add("light"),localStorage.setItem("theme","light"))},!1)},!1);const n={ShopUlEl:document.querySelector(".shopping-list-container"),ShopStubEl:document.querySelector(".shopping-list-section"),shopRemoveBtn:document.querySelector(".shopping-delete-btn"),target:document.querySelector(".js-guard")};function m(e){const o=e.map(()=>{`${e.book_image}${e.title}${list_name}${description}${e.author}`}).join("");return n.ShopUlEl.insertAdjacentHTML("beforeend",o),o}function u(){const e=`<div class="shopping-error-wrap">
      <p class="shopping-error-text">
        This page is empty, add some books and proceed to order.
      </p>
      <img
        class="shopping-error-img"
        src="./img/images/oooops-mob-1x.png"
        alt="books"
        width="265"
        height="198"
      />
    </div>`;n.ShopStubEl.innerHTML=e}k();function k(){try{const e=JSON.parse(localStorage.getItem(i));if(console.log(e),console.log(e),m(e),e.length===0){u(e);return}}catch(e){console.error("Error:",e)}}