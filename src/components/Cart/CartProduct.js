import React from 'react';
import cn from 'classnames';
import {useDispatch} from 'react-redux';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';

import {changeCount, removeFromCart} from '../../redux/actions/cart';

const CartProduct = ({product, styles}) => {
  const dispatch = useDispatch();

  const onChangeCount = (id, count) => () => dispatch(changeCount(id, count));
  const onRemoveProduct = (id) => () => dispatch(removeFromCart(id));

  return (
    <Box py={1} px={1.7} className={styles.product}>
      <Box mr={1}>
        <Button
          color="default"
          variant="contained"
          className={cn(styles.changeCountBtn, styles.incBtn)}
          onClick={onChangeCount(product.id, product.count + 1)}
        >+</Button>
        <Typography variant="body1" className={styles.amount}>{product.count}</Typography>
        <Button
          color="default"
          variant="contained"
          className={cn(styles.changeCountBtn, styles.decBtn)}
          onClick={onChangeCount(product.id, product.count - 1)}
        >-</Button>
      </Box>
      <img 
        src={process.env.REACT_APP_BASE_URL + product.photos[0].formats.thumbnail.url}
        alt="Product Img" 
        className={styles.productImage}
        width="60px"
      />
      <Box ml={1} mr="auto" className={styles.productDetails}>
        <Typography variant="body1" conponent="div" className={styles.productName}>{product.name}</Typography>
        <Typography variant="body1" conponent="div" color="primary" className={styles.productPrice}>${product.price}</Typography>
        <Typography variant="body2" conponent="div" color="textSecondary" className={styles.productSize}>{product.count} x {product.size}</Typography>
      </Box>
      <Typography variant="body1" conponent="div" className={styles.price}>${Number(product.count * product.price).toFixed(2)}</Typography>
      <CloseIcon color="inherit" style={{fontSize: 17}} className={styles.closeIcon} onClick={onRemoveProduct(product.id)}/>
    </Box>
  )
}

export default CartProduct;
