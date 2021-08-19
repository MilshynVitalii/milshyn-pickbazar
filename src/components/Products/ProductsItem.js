import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Box from '@material-ui/core/Box';

import CartBtn from './CartBtn';

function ProductItem({id, category, name, size, discount, finalPrice, price, photo, styles}) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Card raised={false} elevation={0} className={styles.card}>
        <Badge badgeContent={discount ? discount.amount + '%' : null} color="default" classes={{root: styles.badgeWrap, badge: styles.badge}}>
        <CardContent className={styles.content}>
          <img 
            src={process.env.REACT_APP_BASE_URL + photo.url} 
            alt="Product"
            width={`${photo.width}px`}
            height={`${photo.height}px`}
            className={styles.cardImage}
          />
          <Typography variant="body1" component={Link} to={`/product/${category}/${id}`} className={styles.link} gutterBottom>
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="span" className={styles.size}>
            {size}
          </Typography>
        </CardContent>
        </Badge>
        <CardActions className={styles.actions}>
          <Box component="div" mr="auto">
            <Typography variant="body2" color="textSecondary" component="div" className={styles.discount}>
              {discount && '$' + finalPrice}
            </Typography>
            <Typography variant="h6" color="primary" component="div" className={styles.price}>
              ${price}
            </Typography>
          </Box>
          <CartBtn />
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
  name: PropTypes.string,
  size: PropTypes.string,
  discount: PropTypes.any,
  finalPrice: PropTypes.number,
  price: PropTypes.number,
  photo: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired
};