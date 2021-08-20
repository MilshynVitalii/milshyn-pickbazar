import React from 'react';
import cn from 'classnames';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';
import ImageIcon from '@material-ui/icons/Image';

import Gallery from '../../components/Product/Gallery';
import Description from '../../components/Product/Description';
import ProductsItem from '../../components/Products/ProductsItem';
import useProductsStyles from '../../components/Products/styles';
import {fetchByParentCategory, setActiveProduct} from '../../redux/actions/products';
import {ReactComponent as Empty} from '../../assets/empty.svg';

import useStyles from './styles';

function Product() {
  const styles = useStyles();
  const productsStyles = useProductsStyles();
  const {productID} = useParams();

  const dispatch = useDispatch();
  const {products, product, isProductFetching} = useSelector(state => state.products);

  const parentCategory = product?.category?.parentCategory?.id;
  
  React.useEffect(() => {
    dispatch(setActiveProduct(productID));
    dispatch(fetchByParentCategory(parentCategory));
  }, [dispatch, productID, parentCategory]);

  return (
    <Container maxWidth="xl" className={styles.main}>
      <Grid container>
        <Grid item xs={12} md={6} className={cn(styles.item, styles.images)}>
          {
               (isProductFetching && <ImageIcon className={styles.brokenImage}/>)
            || (product?.id === Number(productID) && <Gallery photos={product?.photos} styles={styles}/>)
            || (product === undefined && <BrokenImageIcon className={styles.brokenImage}/>)
          }
        </Grid>
        <Grid item xs={12} md={6} className={cn(styles.item, styles.details)}>
          <Description isFetching={isProductFetching} product={product} styles={styles}/>
        </Grid>
      </Grid>

      <Typography variant="body1" component="div" className={styles.productsTitle}>Related Items</Typography>

      <Grid container spacing={2}>
        {
          products.length
          ?  products.map(product => <ProductsItem 
              key={product.id}
              product={product}
              styles={productsStyles}
            />)
          : <Box mt={2} mx="auto">
              <Empty />
              <Typography variant="body1" color="textSecondary" component="p" align="center">No proucts found</Typography>
            </Box> 
        }
      </Grid>
    </Container>
  )
}

export default Product;