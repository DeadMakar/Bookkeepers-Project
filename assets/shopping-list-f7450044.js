import{K as i}from"./modal-local-storage-7d0d3e33.js";const s={ShopUlEl:document.querySelector(".shopping-list-container"),ShopStubEl:document.querySelector(".shopping-list-section"),shopRemoveBtn:document.querySelector(".shopping-delete-btn"),target:document.querySelector(".js-guard")};function t(o){const e=o.map(()=>{`${o.book_image}${o.title}${list_name}${description}${o.author}`}).join("");return s.ShopUlEl.insertAdjacentHTML("beforeend",e),e}function n(){const o=`<div class="shopping-error-wrap">
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
    </div>`;s.ShopStubEl.innerHTML=o}r();function r(){try{const o=JSON.parse(localStorage.getItem(i));if(console.log(o),console.log(o),t(o),o.length===0){n(o);return}}catch(o){console.error("Error:",o)}}
