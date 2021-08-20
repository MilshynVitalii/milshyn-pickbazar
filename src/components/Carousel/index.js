import React from 'react';
import cn from 'classnames';
import {useSelector} from 'react-redux';
import {Swiper, SwiperSlide} from "swiper/react";

import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import NextIcon from '@material-ui/icons/NavigateNextRounded';
import PrevIcon from '@material-ui/icons/NavigateBeforeRounded';

import SlideCard from './SlideCard';

import useStyles from './styles';

function Carousel() {
  const styles = useStyles();
  const nextBntNavigation = React.useRef();
  const prevBntNavigation = React.useRef();
  const sliderData = useSelector(store => store.app.carouselData)

  return (
    <Container maxWidth="xl">
      <IconButton ref={nextBntNavigation} color="primary" size="small" className={cn(styles.slideBtn, styles.nextBtn)}><NextIcon fontSize="large"/></IconButton>
      <IconButton ref={prevBntNavigation} color="primary" size="small" className={cn(styles.slideBtn, styles.prevBtn)}><PrevIcon fontSize="large"/></IconButton>
      <Swiper 
        onSwiper={(swiper) => {
          swiper.params.navigation.prevEl = prevBntNavigation.current;
          swiper.params.navigation.nextEl = nextBntNavigation.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        loop={true}
        className={styles.customContainer}
        breakpoints={{
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
        }}
      >
        {
          sliderData.map(data => (
            <SwiperSlide key={data.id}>
              <SlideCard data={data} styles={styles} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Container>
  )
}

export default Carousel;
