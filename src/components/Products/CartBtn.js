import React from 'react';
import {styled} from '@material-ui/core/styles';

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Button from '@material-ui/core/Button';

function CartBtn({disabled}) {
  const CartButton = styled(Button)(({theme}) => ({
    borderRadius: '85px',
    padding: '6px 17px',
    borderColor: '#F7F7F7',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: '#ffffff'
    }
  }));

  return (
    <CartButton size="small" color="primary" variant="outlined" startIcon={<ShoppingBasketIcon />} disabled={disabled}>
      Cart
    </CartButton>
  )
}

export default CartBtn;
