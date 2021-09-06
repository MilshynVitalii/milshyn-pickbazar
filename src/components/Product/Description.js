import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import CartButton from '../Products/CartBtn';
import {addToCart} from '../../redux/actions/cart';

const Description = ({isFetching, product, styles}) => {
  const dispatch = useDispatch();

  const isVisibleInfo = product?.id || isFetching ? '' : styles.infoInvisible;
  const nameClass = isFetching ? styles.fetching : styles.name;
  const priceClass = isFetching ? styles.fetching : styles.price;
  const nameText = isFetching ? 'Fetching Data' : product?.name;
  const priceText = isFetching ? '$0' : product?.price;

  const onCartAdd = () => dispatch(addToCart(product.id));

  return (
    <> 
      {!product?.id && !isFetching && <Typography variant="h4" component="span" className={styles.brokenProduct}>No product found</Typography>}
      
      <Box component="span" className={isVisibleInfo}>
        <Typography variant="h6" component="h6" className={nameClass}>{nameText}</Typography>
        <Typography variant="h6" color="primary" component="span" className={priceClass}>${priceText}</Typography>
      </Box>
      <Typography variant="body2" color="textSecondary" component="span">{product?.size}</Typography>
      <Typography variant="body1" component="p" className={styles.descrText}>
        {product?.description}
      </Typography>

      <Box mt={3}>
        <CartButton disabled={!Boolean(product?.name) || isFetching} id={product?.id} styles={styles} onCartAdd={onCartAdd}/>
      </Box>
      <Box mt={2}>
        <Typography variant="body2" component="span" className={styles.categoryText}>{product?.category?.parentCategory?.title}</Typography>
        <Typography variant="body2" component="span" className={styles.categoryText}>{product?.category?.title}</Typography>
      </Box>
    </>
  )
}

export default Description;

Description.defaultProps = {
  isFetching: true
}

Description.propTypes = {
  isFetching: PropTypes.bool,
  product: PropTypes.object,
  styles: PropTypes.object,
}