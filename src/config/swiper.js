import SwiperCore, {Navigation, Thumbs} from 'swiper/core';

export default SwiperCore.use([Navigation, Thumbs]);

export const swiperBreakpoints = {
  1280: {
    slidesPerView: 3,
    spaceBetween: 40
  },
  980: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  320: {
    slidesPerView: 1,
    spaceBetween: 20
  }
}