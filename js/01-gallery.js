import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const markUpGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
  })
  .join("");

gallery.innerHTML = markUpGallery;

gallery.addEventListener("click", clickOnImagePreview);

let instance;
let imagePreview;

function clickOnImagePreview(event) {
  event.preventDefault();

  imagePreview = event.target;
  instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`);

  showInstance();
}

function showInstance() {
  if (imagePreview.nodeName !== "IMG") {
    return;
  } else {
    instance.show();

    addListenerOnDocument();
    addListenerOnInstance();
  }
}

function closeModalOnPressEscape(event) {
  if (event.code !== "Escape") {
    return;
  } else {
    instance.close();

    removeListenerFromInstance();
  }
}

function addListenerOnDocument() {
  document.addEventListener("keydown", closeModalOnPressEscape);
}

function addListenerOnInstance() {
  document
    .querySelector(".basicLightbox")
    .addEventListener("click", removeListenerFromInstance);
}

function removeListenerFromInstance() {
  document.removeEventListener("keydown", closeModalOnPressEscape);
}
