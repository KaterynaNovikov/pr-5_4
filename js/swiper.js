
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/swiper-bundle.min.css';

const initializeSwiper = () => {
    const swiper = new Swiper('.swiper-container', {
        modules: [Navigation, Pagination, Autoplay],
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
};

export default initializeSwiper;
