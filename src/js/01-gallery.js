import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

function patternHtml(item) {
    return `<a class="gallery__item" href=${item.original}>
                <img
                    class="gallery__image"
                    src=${item.preview}
                    alt=${item.description}
                />
            </a>`
}
const galleryImg = galleryItems.map(item => patternHtml(item)).join('');
document.querySelector('.gallery').innerHTML = galleryImg;

// модальное окно
const lightbox = new SimpleLightbox('.gallery a', { captionsData:'alt' });

