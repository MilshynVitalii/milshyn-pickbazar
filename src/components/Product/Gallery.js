import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from "swiper/react";

function Gallery({photos, styles}) {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  
  return (
    <>
      <Swiper thumbs={{ swiper: thumbsSwiper }}>
        {
          photos.map(photo => (
            <SwiperSlide key={photo.hash} className={styles.activeSlide}>
              <img 
                src={process.env.REACT_APP_BASE_URL + photo.url} 
                alt="Product"
                width={`${photo.width}px`}
                height={`${photo.height}px`}
                className={styles.mainImage}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
      <Swiper 
        onSwiper={setThumbsSwiper} 
        spaceBetween={10} 
        slidesPerView={4} 
        freeMode={true} 
        watchSlidesVisibility={true} 
        watchSlidesProgress={true} 
        centerInsufficientSlides={true}
      >
        {
          photos.map(photo => (
            <SwiperSlide key={photo.hash} className={styles.thumbnails}>
              <img 
                src={process.env.REACT_APP_BASE_URL + photo.formats.thumbnail.url} 
                alt="Product"
                width={`${photo.formats.thumbnail.width}px`}
                height={`${photo.formats.thumbnail.height}px`}
                className={styles.mainImage}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
}

export default Gallery;

Gallery.propTypes = {
  photos: PropTypes.array.isRequired,
  styles: PropTypes.object
}
