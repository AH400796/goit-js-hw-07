import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const markUpGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt=${description}/>
    </a>`;
  })
  .join("");

gallery.innerHTML = markUpGallery;

const ligthbox = new SimpleLightbox(".gallery a", {
  captionType: "alt",
  captionDelay: 250,
});
