import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

import {setCheckoutModal, showAlert} from '../../redux/actions/app';
import {deleteCheckoutData, setActiveItem, changeCheckoutItem} from '../../redux/actions/checkout';
import {fetchOrderData} from '../../redux/actions/order';
import CardItem from './CardItem';

function Card({id, cardInfo, styles}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const {isLoaded} = useSelector(state => state.order);

  React.useEffect(() => {
    isLoaded && history.push('/order');
  }, [isLoaded, history]);

  const checkoutData = useSelector(state => state.checkout);
  const {products, cartItemsLength} = useSelector(state => state.cart);
  const {userData} = useSelector(state => state.auth);

  const getItemDescription = (type) => checkoutData[type].find(data => data.id === checkoutData.active_items[type])?.description;

  const openModal = (e) => {e.preventDefault(); dispatch(setCheckoutModal(cardInfo.type))};

  const setActive = (id) => dispatch(setActiveItem(cardInfo.type, id));
  const changeItem = (id) => {dispatch(changeCheckoutItem(id)); dispatch(setCheckoutModal(cardInfo.type))};
  const deleteItem = (id) => dispatch(deleteCheckoutData(cardInfo.type, id));

  const onOrderButtonClick = () => {
    const orderData = {
      address: getItemDescription('checkout_address') || null,
      phone:  getItemDescription('checkout_phone') || null,
      when: getItemDescription('checkout_schedule') || null,
      products: cartItemsLength ? Object.keys(products) : null,
      email: userData.email || null
    };
    
    const allowToOrder = Object.entries(orderData).every(([key, data]) => {
      if(data === null) {
        key === 'email'
        ? dispatch(showAlert(`No ${key} provided. Please sign in or register`, 'error', 5000))
        : key === 'when'
        ? dispatch(showAlert(`No schedule provided`, 'error', 5000))
        : dispatch(showAlert(`No ${key} provided`, 'error', 5000))

        return false;
      } else {
        return true;
      }
    });
    
    allowToOrder && dispatch(fetchOrderData(orderData));
  };

  return (
    <Box mb={1.25} className={styles.card}>
      <Grid container spacing={1} className={styles.cardHeader}>
        <Grid item xs={6}>
          <Typography variant="body1" component="span" className={styles.cardNumer}>{id}</Typography>
          <Typography variant="body1" component="span" className={styles.cardTitle}>{cardInfo.title}</Typography>
        </Grid>
        <Grid item xs={6} className={styles.linkCard}>
          <Link href="" color="inherit" className={styles.modalLink} onClick={openModal}>{cardInfo.link}</Link>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        {
          checkoutData[cardInfo.type].map((item ,i) => (
            <Grid key={i} item xs={4}>
              <CardItem 
                itemInfo={item}
                deleteItem={deleteItem}
                changeItem={changeItem}
                setActive={setActive}
                controls={Boolean(cardInfo?.link)}
                active={checkoutData.active_items[cardInfo.type] === item.id}
                styles={styles}
              />
            </Grid>
          ))
        }
      </Grid>
      {
        cardInfo.type === 'checkout_payment' && (
          <Box mb={1.25} mt={2}>
            <Typography variant="body2" component="span" color="textSecondary" className={styles.conditions}>By making this purchase you agree to our </Typography>
            <Link variant="body2" component="span" color="secondary" className={styles.conditionsLink}>terms and conditions.</Link>
            <Button variant="contained" color="primary" onClick={onOrderButtonClick} fullWidth>Proceed to Checkout</Button>
          </Box>
        )
      }
    </Box>
  )
}

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  cardInfo: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired
};
