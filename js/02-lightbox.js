import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item">
           <a class="gallery__link" href="${item.original}">
              <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
           </a>
         </li>`
  )
  .join("");

gallery.innerHTML = galleryMarkup;

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  scrollZoom: false,
});
