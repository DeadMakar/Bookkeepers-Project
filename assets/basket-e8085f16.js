(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(o){if(o.ep)return;o.ep=!0;const t=i(o);fetch(o.href,t)}})();const a={ShopUlEl:document.querySelector(".shopping-list-container"),ShopStubEl:document.querySelector(".shopping-list-section"),shopRemoveBtn:document.querySelector(".shopping-delete-btn")};function c(e){const s=e.map(()=>{`${book_image}${title}${list_name}${description}${author}`}).join("");a.ShopUlEl.insertAdjacentHTML("beforeend",s)}function l(){const e=`<div class="shopping-error-wrap">
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
    </div>`;return a.ShopStubEl.innerHTML=e,e}p();function p(){try{const e=JSON.parse(localStorage.getItem(STORED_BOOKS));e.length===0&&l(),c(e),g(e)}catch{l()}}function g(e){let s=e;const i=e.currentTarget,r=e.indexOf(i);e.splice(r,1),localStorage.setItem(STORED_BOOKS,JSON.stringify(s))}
