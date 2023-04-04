import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>
`;

const galleryMarkup = galleryItems.map(createGalleryItem).join('');
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

galleryList.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
const galleryItem = evt.target.closest('.gallery__item');
const originalUrl = galleryItem.querySelector('.gallery__image').dataset.source;
    console.log(originalUrl)
const gallery = new SimpleLightbox('.gallery a', {
        
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
    console.log(gallery)



    
    
}




