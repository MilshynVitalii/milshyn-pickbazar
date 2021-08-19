import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {ReactSVG} from 'react-svg';

import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import SvgIcon  from '@material-ui/core/SvgIcon';
import RemoveIcon from '@material-ui/icons/Remove';

import {fetchByParentCategory} from '../../redux/actions/products';
import {fetchByChildCategory} from '../../redux/actions/products';
import {setActiveCategory} from '../../redux/actions/app';
import {menuIcons} from './constants';

function ProductsMenu({styles}) {
  const dispatch = useDispatch();
  const {categories, activeCategory} = useSelector(state => state.app);

  const onListOpen = (id) => {
    dispatch(setActiveCategory(id));
    dispatch(fetchByParentCategory(id));
  };

  const onChildCategoryClick = (id) => {
    dispatch(setActiveCategory(activeCategory.parent, id));
    dispatch(fetchByChildCategory(id));
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={styles.list}
    >
      {
        categories && categories.map(category => (
          <React.Fragment key={category.id}>
            <ListItem  
              classes={{root: styles.listMainItem, selected: styles.selectedlistItem}} 
              onClick={() => onListOpen(category.id)}
              selected={category.id === activeCategory.parent}
            >
              <ListItemIcon className={styles.icon}>
                <SvgIcon fontSize="small" viewBox="0 0 18 18">
                  <ReactSVG src={menuIcons[`Icon${category.id}`]} wrapper="svg"/>
                </SvgIcon>
              </ListItemIcon>
              <ListItemText classes={{primary: styles.itemMainText}} primary={category.title} />
            </ListItem>
            <Collapse in={category.id === activeCategory.parent} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {
                  category.childCategories.map(el => (
                    <ListItem 
                      key={el.id} 
                      classes={{root: styles.listChildItem, selected: styles.selectedlistItem}} 
                      selected={el.id === activeCategory.child}
                      onClick={() => onChildCategoryClick(el.id)}
                    >
                      <ListItemIcon className={styles.iconChild}>
                        <RemoveIcon />
                      </ListItemIcon>
                      <ListItemText classes={{primary: styles.itemChildText}} primary={el.title} />
                    </ListItem>
                  ))
                }
              </List>
            </Collapse> 
          </React.Fragment>
        ))
      }
    </List>
  )
}

export default ProductsMenu;

ProductsMenu.propTypes = {
  styles: PropTypes.object.isRequired
};
