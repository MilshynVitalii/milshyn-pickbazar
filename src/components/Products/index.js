import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Grid from '@material-ui/core/Grid';

import ProductsContainer from './ProductsContainer';
import ProductsMenu from './ProductsMenu';
import {fetchMoreProducts} from '../../redux/actions/products';

import useStyles from './styles';

function Products() {
  const styles = useStyles();
  const {products, fetchMore} = useSelector(state => state.products);
  const {activeCategory} = useSelector(state => state.app);
  const dispatch = useDispatch();

  const loadMoreProducts = () => dispatch(fetchMoreProducts(products.length, 10, activeCategory.parent, activeCategory.child));

  return (
    <Grid container>
      <Grid item xs={12} sm={4} md={3} lg={2}>
        <ProductsMenu styles={styles}/>
      </Grid>
      <Grid item xs={12} sm={8} md={9} lg={10} className={styles.productsContainer}>
        <ProductsContainer 
          products={products} 
          styles={styles} 
          fetchMore={fetchMore} 
          loadMoreProducts={loadMoreProducts}
        />
      </Grid>
    </Grid>
  )
}

export default Products;
