import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {ReactSVG} from 'react-svg';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import ProductsItem from './ProductsItem';
import EmptyIcon from '../../assets/empty.svg';

function Products({products, styles, fetchMore, loadMoreProducts}) {
  return (
    <Grid container spacing={2} className={cn([styles.products], {[styles.emptyCategory]: !!products.length === false})}>
      {
        products.length 
          ?  products.map(props => {
              return <ProductsItem 
                key={props.id} 
                id={props.id}
                category={props.category.parentCategory.id}
                name={props.name}
                size={props.size} 
                discount={props.discount}
                finalPrice={props.finalPrice}
                price={props.price}
                photo={props.photos[0]}
                styles={styles}
              />
            })
          : <Grid item xs={12}>
          <Box>
            <ReactSVG src={EmptyIcon}/>
            <Typography variant="subtitle1" color="textSecondary" component="p" className={styles.price}>
              No products found by this category
            </Typography>
          </Box>
        </Grid>
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