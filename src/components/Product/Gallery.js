import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Thumbs} from 'swiper/core';

import "swiper/swiper.min.css";
import "swiper/components/thumbs/thumbs.min.css"

SwiperCore.use([Thumbs]);

const useStyles = makeStyles(({palette}) => ({
  mainImage: {
    width: '60%',
    height: 'auto'
  },
  activeSlide: {
    textAlign: 'center',
    alignSelf: 'center'
  },
  thumbnails: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    border: '2px solid #f0f0f0',
    borderRadius: '6px',
    '&.swiper-slide-thumb-active': {
      borderColor: palette.primary.main
    }
  },
  activeThumb: {
    borderColor: palette.primary.main
  }
}));

function Gallery({photos}) {
  const styles = useStyles();
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
  photos: PropTypes.array.isRequired
}
