import React from 'react';
import cn from 'classnames';
import {styled} from '@material-ui/core/styles';
import {useSelector} from 'react-redux';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation} from 'swiper/core';

import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import NextIcon from '@material-ui/icons/NavigateNextRounded';
import PrevIcon from '@material-ui/icons/NavigateBeforeRounded';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import useStyles from './styles';

SwiperCore.use([Navigation]);

function CarouselCmp() {
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
          sliderData.map(data => {
            const StyledCard = styled(Card)({
              color: '#ffffff',
              background: `linear-gradient(90deg, ${data.gradientColors.start}, ${data.gradientColors.end})`
            });
            const StyledBtn = styled(Button)({
              fontSize: '18px',
              color: data.gradientColors.start,
              backgroundColor: '#ffffff',
              borderRadius: '180px',
              padding: '10px',
              width: '180px',
              '&:hover': {
                backgroundColor: '#ffffff',
                opacity: 0.8
              }
            });
            return (
              <SwiperSlide key={data.id}>
                <StyledCard open={true} elevation={0}>
                  <CardContent className={styles.content}>
                    <Typography variant="h4" component="h3" className={styles.title}>{data.title}</Typography>
                    <Typography variant="subtitle1" component="span" className={styles.subtitle}>{data.description}</Typography>
                  </CardContent>
                  <CardActions className={styles.action}>
                    <StyledBtn size="small" color="primary">{data.buttonText}</StyledBtn>
                  </CardActions>
                </StyledCard>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </Container>
  )
}

export default CarouselCmp;
