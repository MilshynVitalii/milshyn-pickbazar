import React from 'react';
import {useSelector} from 'react-redux';

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Button from '@material-ui/core/Button';

function CartBtn({id, disabled, onCartAdd, styles}) {
  const {products: cartProducts} = useSelector(state => state.cart);

  return (
    <Button 
      size="small" 
      color="primary" 
      variant="outlined" 
      startIcon={<ShoppingBasketIcon />} 
      disabled={disabled || id in cartProducts}
      className={styles?.cartButton}
      onClick={onCartAdd}
    >
      {id in cartProducts ? 'In Cart' : 'Cart'}
    </Button>
  )
}

export default CartBtn;
