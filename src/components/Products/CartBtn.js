import React from 'react';

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Button from '@material-ui/core/Button';

function CartBtn({disabled, styles}) {
  return (
    <Button 
      size="small" 
      color="primary" 
      variant="outlined" 
      startIcon={<ShoppingBasketIcon />} 
      disabled={disabled}
      className={styles?.cartButton}
    >
      Cart
    </Button>
  )
}

export default CartBtn;
