import React from 'react';
import cn from 'classnames';
import moment from 'moment';
import {useSelector, useDispatch} from 'react-redux';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {setLoaded} from '../../redux/actions/order';
import {cleanCart} from '../../redux/actions/cart';
import useStyles from './styles';

function Order() {
  const styles = useStyles();
  const dispatch = useDispatch();

  React.useEffect(()=>{
    dispatch(cleanCart());
    dispatch(setLoaded(false));
  }, [dispatch]);

  const {products, id, created_at} = useSelector(state => state.order.data);
  const {active_items, checkout_address, checkout_schedule} = useSelector(state => state.checkout);

  const total = Object.values(products).reduce((t, {price}) => t + price, 0);

  const orderData = {
    receive: [
      {title: 'Order Number', data: id},
      {title: 'Date', data: moment(created_at).format('MMMM DD, YYYY')},
      {title: 'Total', data: '$' + total},
      {title: 'Payment Method', data: 'Cash on delivery'}
    ],
    details: [
      {title: 'Order Date:', data: moment(created_at).format('MMMM DD, YYYY')},
      {title: 'Order Time:', data: moment(created_at).format('HH:MMa, MM/DD/YY')},
      {title: 'Delivery Time:', data: checkout_schedule.find(el => el.id === active_items.checkout_schedule).description},
      {title: 'Delivery Location:', data: checkout_address.find(el => el.id === active_items.checkout_address).description},
    ],
    amount: [
      {title: 'Sub Total:', data: '$' + total},
      {title: 'Payment Method:', data: 'Cash On Delivery'},
      {title: 'Cash on delivery:', data: '$10'},
      {title: 'Total:', data: '$' + (10 + total)},
    ]
  };

  return (
    <Box mt={8} mb={4} mx="auto" p={4} maxWidth="790px" bgcolor="#ffffff">
      <Typography variant="h6" component="h3">Order Received</Typography>
      <Typography variant="body2" component="p" className={styles.subTitle}>Thank you. Your order has been received</Typography>

      <Grid container>
        {
          orderData.receive.map(({title, data}) => (
            <Grid key={title} item xs={3}>
              <Typography variant="body2" component="div" className={styles.textBold}>{title}</Typography> 
              <Typography variant="body2" component="div" className={cn(styles.text, styles.mainData)}>{data}</Typography> 
            </Grid>
          ))
        }
      </Grid>

      <Typography variant="h6" component="h3" className={styles.detailsTitle}>Order Details</Typography>

      {
        orderData.details.map(({title, data}) => (
          <Grid key={title} container className={styles.detailsRow}>
            <Grid item xs={3}>
              <Typography variant="body2" component="div" className={styles.textBold}>{title}</Typography> 
            </Grid>
            <Grid item xs={9}>
              <Typography variant="body2" component="div" className={styles.text}>{data}</Typography> 
            </Grid>
          </Grid>
        ))
      }

      <Typography variant="h6" component="h3" className={styles.detailsTitle}>Total Amount:</Typography>

      {
        orderData.amount.map(({title, data}) => (
          <Grid key={title} container className={styles.detailsRow}>
            <Grid item xs={3}>
              <Typography variant="body2" component="div" className={styles.textBold}>{title}</Typography> 
            </Grid>
            <Grid item xs={9}>
              <Typography variant="body2" component="div" className={styles.text}>{data}</Typography> 
            </Grid>
          </Grid>
        ))
      }
    </Box>
  )
}

export default Order;
