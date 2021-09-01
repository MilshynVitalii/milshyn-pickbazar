import React from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import useStyles from './styles';
import {checkoutData} from './constants';
import Card from '../../components/Checkout/Card';
import Order from '../../components/Checkout/Order';
import Modal from '../../components/Checkout/Modal';

function Checkout() {
  const styles = useStyles();

  return (
    <Box px={3}>
      <Modal styles={styles}/>
      <Grid container spacing={3} className={styles.checkout}>
        <Grid item xs={6} className={styles.cards}>
          {
            checkoutData.map((data, i) => <Card key={i} id={++i} cardInfo={data} styles={styles} />)
          }
        </Grid>
        
        <Grid item xs={6}>
          <Order styles={styles}/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Checkout;