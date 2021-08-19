import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import CartButton from '../Products/CartBtn';

const useStyles = makeStyles({
  fetching: {
    backgroundColor: '#f0f0f0',
    color: '#f0f0f0',
    borderRadius: '6px'
  },
  name: {
    display: 'inline-block',
    minWidth: '150px',
    fontSize: '21px'
  },
  price: {
    fontSize: '16px',
    marginLeft: '70px'
  },
  descrText: {
    color: '#424561',
    margin: '30px 0 auto'
  },
  categoryText: {
    display: 'inline-block',
    fontSize: '13px',
    fontWeight: 700,
    padding: '7px 20px',
    backgroundColor: '#f7f7f7',
    borderRadius: '6px',
    marginRight: '30px'
  },
  brokenProduct: {
    color: '#d0d0d0',
    marginBottom: '10px'
  }
});

function Description({isFetching, product}) {
  const styles = useStyles();
  
  return (
    <>
      {
        (isFetching && <Box component="span">
          <Typography variant="h6" component="h6" className={styles.fetching}>Fetching Data</Typography>
          <Typography variant="h6" component="span" className={styles.fetching}>$0</Typography>
        </Box>)
        || (Boolean(product) && <>
            <Box component="span">
              <Typography variant="h6" component="h6" className={styles.name}>{product?.name}</Typography>
              <Typography variant="h6" color="primary" component="span" className={styles.price}>${product?.price}</Typography>
            </Box>
            <Typography variant="body2" color="textSecondary" component="span">{product?.size}</Typography>
            <Typography variant="body1" component="p" className={styles.descrText}>
              {product?.description}
            </Typography>
        </>)
        || (<Typography variant="h4" component="span" className={styles.brokenProduct}>No product found</Typography>)
      }
      <Box mt={3}>
        <CartButton disabled={!Boolean(product?.name) || isFetching}/>
      </Box>
      <Box mt={2}>
        <Typography variant="body2" component="span" className={styles.categoryText}>{product?.category?.parentCategory?.title}</Typography>
        <Typography variant="body2" component="span" className={styles.categoryText}>{product?.category?.title}</Typography>
      </Box>
    </>
  )
}

export default Description;

Description.defaultProps = {
  isFetching: true
}

Description.propTypes = {
  isFetching: PropTypes.bool,
  product: PropTypes.object
}