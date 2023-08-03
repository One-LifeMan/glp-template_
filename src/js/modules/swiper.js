// -------------------------------SWIPER START
// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
// import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination, Scrollbar],

    wrapperClass:                   'swiper-wrapper',

    slideClass:                     'swiper-slide',
    slideActiveClass:               'swiper-slide-active',
    slideNextClass:                 'swiper-slide-next',
    slidePrevClass:                 'swiper-slide-prev',
    slideVisibleClass:              'swiper-slide-visible',


    direction: 'horizontal',
    loop: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        bulletActiveClass:          'swiper-pagination-bullet-active',
        bulletClass:                'swiper-pagination-bullet',
        clickableClass:             'swiper-pagination-clickable',
        currentClass:               'swiper-pagination-current',
        hiddenClass:                'swiper-pagination-hidden',
        horizontalClass:            'swiper-pagination-horizontal',
        lockClass:                  'swiper-pagination-lock',
        modifierClass:              'swiper-pagination-',
        paginationDisabledClass:    'swiper-pagination-disabled',
        progressbarFillClass:       'swiper-pagination-progressbar-fill',
        progressbarOppositeClass:   'swiper-pagination-progressbar-opposite',
        totalClass:                 'swiper-pagination-total',
        verticalClass:              'swiper-pagination-vertical',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        disabledClass:              'swiper-button-disabled',
        hiddenClass:                'swiper-button-hidden',
        lockClass:                  'swiper-button-lock',
        navigationDisabledClass:    'swiper-navigation-disabled',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragClass:                  'swiper-scrollbar-drag',
        horizontalClass:            'swiper-scrollbar-horizontal',
        lockClass:                  'swiper-scrollbar-lock',
        scrollbarDisabledClass:     'swiper-scrollbar-disabled',
        verticalClass:              'swiper-scrollbar-vertical',
    },
});
// -------------------------------SWIPER END