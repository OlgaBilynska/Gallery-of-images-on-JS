import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = makeGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);


function makeGalleryMarkup(images) {
    return images.map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>
          `  ;
    }).join('');
};

function onImageClick(event) {
    const isImgEl = event.target.classList.contains('gallery__item');

    if (!isImgEl) {
        return;
    }

    const imgEl = event.target;
    const imgGallery = imgEl.closest('.gallery');

    console.log(imgGallery);
}




