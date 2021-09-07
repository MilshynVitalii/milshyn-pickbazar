import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import useStyles from './styles';
import {checkoutData} from './constants';
import Card from '../../components/Checkout/Card';
import Order from '../../components/Checkout/Order';
import Modal from '../../components/Checkout/Modal';

const Checkout = () => {
  const styles = useStyles();

  return (
    <Container maxWidth="xl">
      <Modal styles={styles}/>
      <Grid container spacing={3} className={styles.checkout}>
        <Grid item xs={12} md={4} lg={6}>
          <Order styles={styles}/>
        </Grid>
        
        <Grid item xs={12} md={8} lg={6} className={styles.cards}>
          {
            checkoutData.map((data, i) => <Card key={i} id={++i} cardInfo={data} styles={styles} />)
          }
        </Grid>
      </Grid>
    </Container>
  )
}

export default Checkout;