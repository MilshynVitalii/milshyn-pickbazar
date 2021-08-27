import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Box from '@material-ui/core/Box';

import {addToCart} from '../../redux/actions/cart';
import CartBtn from './CartBtn';

function ProductItem({product, styles}) {
  const dispatch = useDispatch();

  const onCartAdd = (e) => dispatch(addToCart(product.id));

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Card raised={false} elevation={0} className={styles.card}>
        <Badge badgeContent={product.discount ? product.discount.amount + '%' : null} color="default" classes={{root: styles.badgeWrap, badge: styles.badge}}>
        <CardContent className={styles.content}>
          <img 
            src={process.env.REACT_APP_BASE_URL + product.photos[0].url} 
            alt="Product"
            width={`${product.photos[0].width}px`}
            height={`${product.photos[0].height}px`}
            className={styles.cardImage}
          />
          <Typography variant="body1" component={Link} to={`/product/${product.id}`} className={styles.link} gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="span" className={styles.size}>
            {product.size}
          </Typography>
        </CardContent>
        </Badge>
        <CardActions className={styles.actions}>
          <Box component="div" mr="auto">
            <Typography variant="body2" color="textSecondary" component="div" className={styles.discount}>
              {product.discount && '$' + product.finalPrice}
            </Typography>
            <Typography variant="h6" color="primary" component="div" className={styles.price}>
              ${product.price}
            </Typography>
          </Box>
          <CartBtn id={product.id} styles={styles} onCartAdd={onCartAdd} />
        </CardActions>
      </Card>
    </Grid>
  )
}

export default ProductItem;

ProductItem.defaultProps = {
  name: '',
  size: '',
  discount: null,
  finalPrice: 0,
  price: 0
};

ProductItem.propTypes = {
  product: PropTypes.object,
  styles: PropTypes.object.isRequired
};