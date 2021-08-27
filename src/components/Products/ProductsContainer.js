import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ProductsItem from './ProductsItem';
import EmptyIcon from '../../assets/empty.svg';

function Products({products, styles, fetchMore, loadMoreProducts}) {
  return (
    <Grid container spacing={2} className={cn([styles.products], {[styles.emptyCategory]: !!products.length === false})}>
      {
        products.length 
          ?  products.map(product => {
              return <ProductsItem 
                key={product.id} 
                product={product}
                styles={styles}
              />
            })
          : (
            <Grid item xs={12}>
              <img src={EmptyIcon} alt="" width="232px" height="292px"/>
              <Typography variant="subtitle1" color="textSecondary" component="p" className={styles.price}>
                No products found by this category
              </Typography>
            </Grid>
          )
      }
      {
        fetchMore && <Grid item xs={12}>
          <Button color="primary" variant="contained" className={styles.loadMoreBtn} onClick={loadMoreProducts}>
            Load More
          </Button>
        </Grid>
      }
    </Grid>
  )
}

export default Products;

Products.defaultProps = {
  fetchMore: false
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
  styles: PropTypes.object.isRequired,
  fetchMore: PropTypes.bool,
  loadMoreProducts: PropTypes.func
}