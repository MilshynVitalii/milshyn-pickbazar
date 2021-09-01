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

function CardItem({itemInfo, deleteItem, changeItem, setActive, active, controls, styles}) {

  const setAcitveItem = () => setActive(itemInfo.id);
  const onChange = (e) => {e.stopPropagation(); changeItem(itemInfo.id)};
  const onDelete = (e) => {e.stopPropagation(); deleteItem(itemInfo.id)};

  return (
    <Card elevation={0} className={cn(styles.item, {[styles.activeItem]: active})} onClick={setAcitveItem}>
      <CardActions className={styles.itemActions}>
        <Typography variant="body2" component="span" className={styles.itemTitle}>{itemInfo.title}</Typography>
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
        <Typography variant="body1" component="div">
          {itemInfo.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardItem;

CardItem.propTypes = {
  itemInfo: PropTypes.object.isRequired,
  deleteItem: PropTypes.func.isRequired,
  changeItem: PropTypes.func.isRequired,
  setActive: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  controls: PropTypes.bool.isRequired,
  styles: PropTypes.object.isRequired
};
