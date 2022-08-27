import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryMarkup = addImgGallery(galleryItems);

function addImgGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
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
}

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

gallery.addEventListener("click", onClickImgContainer);

function onClickImgContainer(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const modal = basicLightbox.create(
    `<img src="${
      event.target.closest("img").dataset.source
    }" width="800" height="600">`
  );

  modal.show();
}

function onCloseModal(event) {
  const onModal = document.querySelector(".basicLightbox");

  if (event.code === "Escape") {
    onModal.remove();
  }
}

document.addEventListener("keydown", onCloseModal);
