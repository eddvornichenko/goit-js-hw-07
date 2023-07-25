import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const galleryItem = galleryItems
  .map(
    (item) => `<li class="gallery__item">
<a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</li>`
  )
  .join("");
gallery.innerHTML = galleryItem;

gallery.addEventListener("click", handleGalleryClick);

function handleGalleryClick(event) {
  event.preventDefault();

  const { target } = event;
  if (target.nodeName !== "IMG") {
    return;
  }

  const largeImageUrl = target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${largeImageUrl}" width="800" height="600">
  `, {
    onShow: () => {
      window.addEventListener("keydown", handleKeyPress);
    },
    onClose: () => {
      window.removeEventListener("keydown", handleKeyPress);
    }
  });
  instance.show();

  function handleKeyPress(event) {
    if (event.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", handleKeyPress);
    }
  }
}
