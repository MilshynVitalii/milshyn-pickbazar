import React from 'react';
import cn from 'classnames';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import {useSelector} from 'react-redux';

function Order({styles}) {
  const {products, cartItemsLength} = useSelector(state => state.cart);

  const deliveryFee = 3;

  const total = Object.values(products).reduce((t, pr) => t + pr.price * pr.count, 0);

  return (
    <Box ml={2} className={styles.order}>
      <Typography variant="body1" component="h4" align="center" className={styles.orderTitle}>
        {cartItemsLength ? 'Your Order' : 'No products'}
      </Typography>
      {
        !!cartItemsLength && <Table className={styles.table} size="small">
          <TableBody>
            {
              Object.values(products).map(product => (
                <TableRow key={product.id}>
                  <TableCell padding="none" className={styles.tableCellList}>
                    <Typography variant="body2" component="span" className={styles.boldText}>{product.count}</Typography>
                    <Typography variant="body2" component="span">{` x ${product.name} | ${product.size}`}</Typography>
                  </TableCell>
                  <TableCell padding="none" align="right" className={styles.tableCellList}>
                    <Typography variant="body2" component="span">${(product.price * product.count).toFixed(2)}</Typography>
                  </TableCell>
                </TableRow>
              ))
            }
            <TableRow>
              <TableCell padding="none" className={cn(styles.tableCell, styles.tableCellBorder)}>
                <Typography variant="body2" component="span">Sub Total</Typography>
              </TableCell>
              <TableCell padding="none" align="right" className={cn(styles.tableCell, styles.tableCellBorder)}>
                <Typography variant="body2" component="span">${total.toFixed(2)}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell padding="none" className={styles.tableCell}>
                <Typography variant="body2" component="span">Delivery Fee</Typography>
              </TableCell>
              <TableCell padding="none" align="right" className={styles.tableCell}>
                <Typography variant="body2" component="span">$3.00</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell padding="none" className={styles.tableCell}>
                <Typography variant="body2" component="span">Discount</Typography>
              </TableCell>
              <TableCell padding="none" align="right" className={styles.tableCell}>
                <Typography variant="body2" component="span">$0.00</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell padding="none" className={styles.tableCellList}>
                <Typography variant="body2" component="span" className={styles.boldText}>Total </Typography>
                <Typography variant="caption" component="span" className={styles.boldText}>(Incl. VAT)</Typography>
              </TableCell>
              <TableCell padding="none" align="right" className={styles.tableCellList}>
                <Typography variant="body2" component="span">${(deliveryFee + total).toFixed(2)}</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      }
    </Box>
  )
}

export default Order;
