import{K as a,N as r}from"./modal-local-storage-204f5fc4.js";const s={ShopUlEl:document.querySelector(".shopping-list-container"),ShopStubEl:document.querySelector(".shopping-list-container"),shopRemoveBtnEl:document.querySelector(".shopping-delete-btn"),targetEl:document.querySelector(".js-guard")};function n(i){const t=i.map(e=>`<li class="shopping-item">
      <div class="shopping-list-item">
        <div class="shopping-book-overlay">
          <img
            class="shopping-book-img"
            src="${e.book_image}"
            alt="${e.title}"
            width="100"
            height="142"
          />

      <p class="shopping-book-overlay-text">quick view</p>
    </div>

    <div class="shopping-item-container">
      <h3 class="shopping-book-title">${e.title}</h3>

      <p class="shopping-book-category-text">${e.list_name}</p>

      <p class="shopping-book-description">${e.description}</p>

      <p class="shopping-book-author">${e.author}</p>

      <div class="shopping-link-wrap">
        <a
          href="${e.buy_links[0].url}"
          target="_blank"
          rel="noopener noreferrer"
          class="shopping-link"
        >
          <picture>
            <source
              srcset="
                ./img/images/amazon-1x.png 1x,
                ./img/images/amazon-2x.png 2x
              "
              media="(min-width: 1440px)"
            />
            <source
              srcset="
                ./img/images/amazon-1x.png 1x,
                ./img/images/amazon-2x.png 2x
              "
              media="(min-width: 768px)"
            />
            <source
              srcset="
                ./img/images/amazon-1x.png 1x,
                ./img/images/amazon-2x.png 2x
              "
              media="(max-width: 768px)"
            />
            <img
              class="shopping-img-amazon"
              src="./img/images/amazon-1x.png"
              alt="amazon"
              width="32"
              height="11"
            />
          </picture>
        </a>
        <a
          href="${e.buy_links[1].url}"
          target="_blank"
          rel="noopener noreferrer"
          class="shopping-link"
        >
          <picture>
            <source
              srcset="./img/images/book-1x.png 1x, ./img/images/book-2x.png 2x"
              media="(min-width: 1440px)"
            />
            <source
              srcset="./img/images/book-1x.png 1x, ./img/images/book-2x.png 2x"
              media="(min-width: 768px)"
            />
            <source
              srcset="./img/images/book-1x.png 1x, ./img/images/book-2x.png 2x"
              media="(max-width: 768px)"
            />
            <img
              class="shopping-img-book"
              src="./img/images/book-1x.png"
              alt="book"
              width="11"
              height="11"
            />
          </picture>
        </a>
      </div>
    </div>
  </div>
  <button class="shopping-delete-btn" type="button">
    <svg class="shopping-delete-btn-icon" width="16" height="16">
      <use href="./img/icons/symbol-defs.svg#icon-delete"></use>
    </svg>
  </button>
</li>
`).join("");s.ShopUlEl.insertAdjacentHTML("beforeend",t)}function p(){const i=`<li class="shopping-error-wrap">
      <p class="shopping-error-text">
        This page is empty, add some books and proceed to order.
      </p>
      
        <picture>
          <source
            srcset="
              ./img/images/oooops-tab-1x.png 1x,
              ./img/images/oooops-tab-2x.png 2x 
            "
            media="(min-width: 1440px)"
          />
          <source
            srcset="
              ./img/images/oooops-tab-1x.png 1x,
              ./img/images/oooops-tab-2x.png 2x
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
              ./img/images/oooops-mob-1x.png 1x,
              ./img/images/oooops-mob-2x.png 2x
            "
            media="(max-width: 768px)"
          />
          <img
        class="shopping-error-img"
        src="./img/images/oooops-mob-1x.png"
        alt="books"
        width="265"
        height="198"
      />
        </picture>
    </li>`;s.ShopStubEl.innerHTML=i}let o=JSON.parse(localStorage.getItem(a))||[];g();function g(){try{if(o.length===0){p(o);return}n(o)}catch(i){console.error("Error:",i),r.Notify.failure("Sorry, there are no images matching your search query. Please try again.")}}
