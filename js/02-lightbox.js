import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const makeGalleryMarkup = images => {
    return images.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}"> 
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `;
})
.join('');
}

const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = makeGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

galleryContainer.addEventListener('click', onImageClick);

const galleryLinks = document.querySelectorAll('.gallery__link');

const options = {
    captions: true,
    captionsData: 'alt',
    captionType: 'attr',
    captionPosition: 'bottom',
    captionDelay: 250,
    captionClass: 'caption',
    loop: true,
    close: true,
    enableKeyboard: true,
    sourceAttr: 'href',
};

const lightbox = new SimpleLightbox(galleryLinks, options);

function onImageClick (event) {
    event.preventDefault();

     const isImgEl = event.target.classList.contains('gallery__item');

    if (!isImgEl) {
        return;
    }

    const imgEl = event.target;
    const imgSource = imgEl.closest('.href');

  lightbox.open();
}





