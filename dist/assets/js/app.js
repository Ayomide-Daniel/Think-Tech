// import './jquery-3.5.1.min';
// import './swiper.min';
$(document).ready(() => {
    $('.swiper-slide').slick();
    new Swiper('.swiper-wrapper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});