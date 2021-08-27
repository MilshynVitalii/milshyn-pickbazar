import React from 'react';
import {useSelector} from 'react-redux';

import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CloseIcon from '@material-ui/icons/Close';

import {ReactComponent  as BagIcon} from '../../assets/bag.svg';
import CartProduct from './CartProduct';
import EmptyIcon from '../../assets/empty.svg';
import useStyles from './styles';

function OpenPanel() {
  const styles = useStyles();
  const [cartOpen, setCartOpen] = React.useState(false);
  const {products, cartItemsLength} = useSelector(state => state.cart);

  const total = Object.values(products).reduce((t, pr) => t + pr.price * pr.count, 0);

  const toggleOpen = (state) => (event) => setCartOpen(state);

  return (
    <>
      <Paper elevation={0} className={styles.openCart}>
        <Box mb={1.5} className={styles.textBox}>
          <BagIcon />
          <Typography variant="caption" component="div" align="center" color="inherit">{cartItemsLength} Item(s)</Typography>
        </Box>
        <Button variant="contained" color="inherit" fullWidth={true} className={styles.openBtn} onClick={toggleOpen(true)}>
          ${total.toFixed(2)}
        </Button>
      </Paper>
      
      <Drawer 
        anchor="right" 
        open={cartOpen} 
        ModalProps={{hideBackdrop: true}}
        elevation={10}
        classes={{paper: styles.drawer}} 
        onClose={toggleOpen(false)}
      >
        <Card raised={false} className={styles.drawerContent}>
          <CardHeader 
            action={<CloseIcon color="inherit" style={{fontSize: 17}} onClick={toggleOpen(false)}/>} 
            avatar={<BagIcon />} 
            title={`${cartItemsLength} Item(s)`}
            classes={{avatar: styles.cartHeaderIcon, action: styles.closeIcon}}
            className={styles.cartHeader}
          >
            <Typography variant="caption" component="div">3 Item(s)</Typography>
          </CardHeader>
          <CardContent className={styles.cartContent}>
            {
              cartItemsLength
              ? Object.values(products).map(product => <CartProduct key={product.id} product={product} styles={styles}/>)
              : <Box mt={10} mx="auto" className={styles.cartEmpty}>
                  <img src={EmptyIcon} alt="" width="232px" height="292px"/>
                  <Typography variant="body1" color="textSecondary" component="p" align="center">No proucts found</Typography>
                </Box> 
            }
          </CardContent>
          <CardActions className={styles.cartAction}>
            <Box mt={2} className={styles.checkout}>
              <Typography variant="body2" component="span" color="inherit" className={styles.checkoutText}>Checkout</Typography>
              <Button variant="outlined" color="primary" className={styles.checkoutBtn}>${total.toFixed(2)}</Button>
            </Box>
          </CardActions>
        </Card>
      </Drawer>
    </>
  )
}

export default OpenPanel;
