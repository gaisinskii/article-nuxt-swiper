import { SwiperOptions } from 'swiper/types/swiper-options'

const settings: { [key: string]: SwiperOptions } = {
  'with-small-picture': {
    slidesPerView: 2.5,
    slidesPerGroup: 1,
    slidesOffsetAfter: 16,
    spaceBetween: 8,
    navigation: {
      nextEl: '.swiper-button-next--with-small-picture',
      prevEl: '.swiper-button-prev--with-small-picture'
    },
    breakpoints: {
      769: {
        slidesPerView: 4.5,
        slidesPerGroup: 1.5,
        spaceBetween: 16,
        slidesOffsetAfter: 40
      },
      1024: {
        slidesPerView: 5.5,
        slidesPerGroup: 5.5,
        slidesOffsetAfter: 0,
        spaceBetween: 16
      }
    }
  },
  'with-text': {
    slidesPerView: 1.75,
    slidesPerGroup: 1,
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesOffsetAfter: 16,
    spaceBetween: 8,
    navigation: {
      nextEl: '.swiper-button-next--with-text',
      prevEl: '.swiper-button-prev--with-text'
    },
    breakpoints: {
      769: {
        slidesPerView: 3.2,
        centeredSlides: false,
        centeredSlidesBounds: false,
        slidesPerGroup: 1.2,
        spaceBetween: 16,
        slidesOffsetAfter: 40
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        slidesOffsetAfter: 0,
        spaceBetween: 16
      }
    }
  },
  'with-big-picture': {
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next--with-big-picture',
      prevEl: '.swiper-button-prev--with-big-picture'
    },
    breakpoints: {
      769: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3
      }
    }
  }
}

export default settings
