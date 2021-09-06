import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CreateIcon from '@material-ui/icons/Create';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import {ReactComponent as VisaIcon} from '../../assets/visa.svg';

const CardItem = ({itemInfo, type, deleteItem, changeItem, setActive, active, controls, styles}) => {
  const isPaymentItem = type === 'checkout_payment';
  const cardStyles = cn(styles.item, {[styles.paymentCard]: isPaymentItem, [styles.activeItem]: active})

  const setAcitveItem = () => setActive(itemInfo.id);
  const onChange = (e) => {e.stopPropagation(); changeItem(itemInfo.id)};
  const onDelete = (e) => {e.stopPropagation(); deleteItem(itemInfo.id)};

  return (
    <Card elevation={0} className={cardStyles} onClick={setAcitveItem}>
      <CardActions className={styles.itemActions}>
        {
          isPaymentItem 
          ? <>
              <VisaIcon />
              <Typography variant="body2" component="div" className={styles.visaTitle}>Card Number</Typography>
          </>
          : <Typography variant="body2" component="span" className={styles.itemTitle}>{itemInfo.title}</Typography>
        }
        {
          controls && (
            <Box className={styles.itemControls}>
              <IconButton color="primary" size="small" className={styles.actionAdd} onClick={onChange}>
                <CreateIcon style={{fontSize: 14}}/>
              </IconButton>
              <IconButton color="secondary" size="small" className={styles.actionRemove} onClick={onDelete}>
                <CloseIcon style={{fontSize: 14}}/>
              </IconButton>
            </Box>
          )
        }
      </CardActions>
      <CardContent className={styles.itemContent}>
        <Typography variant="body1" component="div" className={cn(styles.itemDescr, {[styles.visaNumber]: isPaymentItem})}>{itemInfo.description}</Typography>
        {
          isPaymentItem && (
            <Typography variant="body2" component="div" className={styles.visaName}>{itemInfo.title}</Typography>
          )
        }
      </CardContent>
    </Card>
  )
}

export default CardItem;

CardItem.propTypes = {
  itemInfo: PropTypes.object.isRequired,
  type: PropTypes.string,
  deleteItem: PropTypes.func.isRequired,
  changeItem: PropTypes.func.isRequired,
  setActive: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  controls: PropTypes.bool.isRequired,
  styles: PropTypes.object.isRequired
};
