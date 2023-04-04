import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
//    preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//     description: 'Hokkaido Flower'

const galleryList = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
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
  const instance = basicLightbox.create(`<img src="${originalUrl}" />`,
    {
    onShow: () =>  document.addEventListener('keydown', onEscape),
    onClose: () =>  document.removeEventListener('keydown', onEscape) }   
    );
  const onEscape = (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
    
  }
  instance.show();
}



