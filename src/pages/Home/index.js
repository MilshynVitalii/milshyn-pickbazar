import React from 'react';
import {useDispatch} from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Carousel from '../../components/Carousel';
import Products from '../../components/Products';
import {fetchCarouselData} from '../../redux/actions/app';
import {fetchProducts} from '../../redux/actions/products';
import {fetchCategories, setActiveCategory} from '../../redux/actions/app';

import useStyles from './styles';

const Home = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCarouselData());
    dispatch(fetchCategories());
    dispatch(setActiveCategory());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Paper square={true} elevation={0}>
      <Grid container alignItems="center" justifyContent="center" className={styles.grid}>
        <Box>
          <Typography variant="h3" component="h1" className={styles.title}>
            Groceries Delivered in 90 Minute
          </Typography>
          <Typography variant="subtitle1" component="div" color="textSecondary" className={styles.subtitle}>
            Get your healthy foods & snacks delivered at your doorsteps all day everyday
          </Typography>
        </Box>
      </Grid>
      <Box component="div" pt={3.7} pb={3.7} className={styles.carousel}>
        <Carousel />
      </Box>
      <Box component="div" className={styles.products}>
        <Products />
      </Box>
    </Paper>
  )
}

export default Home;
