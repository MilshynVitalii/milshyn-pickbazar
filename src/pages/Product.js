import React from 'react';
import cn from 'classnames';
import {makeStyles} from '@material-ui/core/styles';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';
import ImageIcon from '@material-ui/icons/Image';

import Gallery from '../components/Product/Gallery';
import Description from '../components/Product/Description';
import ProductsItem from '../components/Products/ProductsItem';
import useProductsStyles from '../components/Products/styles';
import {fetchByParentCategory, setActiveProduct} from '../redux/actions/products';
import Empty from '../assets/empty.svg';

const useStyles = makeStyles({
  main: {
    marginTop: '70px',
    paddingTop: '30px',
    paddingBottom: '80px',
  },
  item: {
    backgroundColor: '#ffffff',
    border: '1px solid #fafafa',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '50px 5%'
  },
  images: {
    padding: '20px 0',
    textAlign: 'center'
  },
  productsTitle: {
    fontSize: '13px',
    fontWeight: 700,
    margin: '50px 0 30px'
  },
  brokenImage: {
    color: '#f0f0f0',
    fontSize: '200px'
  },
});

function Product() {
  const styles = useStyles();
  const productsStyles = useProductsStyles();
  const {categoryID, productID} = useParams();

  const dispatch = useDispatch();
  const {products, product, isProductFetching} = useSelector(state => state.products);

  React.useEffect(() => {
    dispatch(setActiveProduct(productID));
    dispatch(fetchByParentCategory(categoryID));
  }, [dispatch, categoryID, productID]);

  return (
    <Container maxWidth="xl" className={styles.main}>
      <Grid container>
        <Grid item xs={12} md={6} className={cn(styles.item, styles.images)}>
          {
               (isProductFetching && <ImageIcon className={styles.brokenImage}/>)
            || (product?.id === Number(productID) && <Gallery photos={product?.photos}/>)
            || (Boolean(product === undefined) && <BrokenImageIcon className={styles.brokenImage}/>)
          }
        </Grid>
        <Grid item xs={12} md={6} className={cn(styles.item, styles.details)}>
          <Description isFetching={isProductFetching} product={product}/>
        </Grid>
      </Grid>

      <Typography variant="body1" component="div" className={styles.productsTitle}>Related Items</Typography>

      <Grid container spacing={2}>
        {
          Boolean(products.length)
          ?  products.map(props => <ProductsItem 
              key={props.id}
              id={props.id}
              category={props.category.parentCategory.id}
              name={props.name}
              size={props.size} 
              discount={props.discount}
              finalPrice={props.finalPrice}
              price={props.price}
              photo={props.photos[0]}
              styles={productsStyles}
            />)
          : <Box mt={2} mx="auto">
              <img src={Empty} alt="Empty page" />
              <Typography variant="body1" color="textSecondary" component="p" align="center">No proucts found</Typography>
            </Box> 
        }
      </Grid>
    </Container>
  )
}

export default Product;