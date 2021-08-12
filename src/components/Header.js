import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';

import {setModal} from '../redux/actions/app';
import {setLogined} from '../redux/actions/auth';

import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import FilledInput from '@material-ui/core/FilledInput';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Logo from '../assets/Logo.svg';
import SearchIcon from '../assets/Search.svg';
import UserLogo from '../assets/UserLogo.png';

const useStyles = makeStyles({
    appBar: {
      boxShadow: 'none'
    },
    input: {
      width: '630px',
      margin: '10px 25px'
    },
    btn: {
      marginLeft: 'auto'
    },
    userMenuBtn: {
      marginLeft: 'auto',
      minWidth: 'auto',
      minHeight: 'auto',
      padding: '3px',
      borderRadius: '50%'
    },
    userMenuLink: {
      minWidth: '200px',
      fontSize: '15px',
      fontWeight: 700,
      padding: '16px 30px'
    }
});

function Header() {
  const styles = useStyles();
  const dispatch = useDispatch();
  const {logined} = useSelector(state => state.auth);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    dispatch(setLogined(false));
    handleClose();
  }

  const onSignUp = () => dispatch(setModal('signUp'));

  return (
    <AppBar position="fixed" color="transparent" className={styles.appBar}>
      <Container maxWidth="xl">
        <Grid container alignItems="center">
          <img src={Logo} alt="logo" />
          <FilledInput
            className={styles.input}
            type="text"
            placeholder="Search your products from here"
            startAdornment={
              <InputAdornment position="start">
                <img src={SearchIcon} alt="SearchIcon" />
              </InputAdornment>
            }
          />
          {!logined && <Button variant="contained" color="primary"  className={styles.btn} onClick={onSignUp}>Join</Button>}
          {
            logined && <Button aria-controls="simple-menu" aria-haspopup="true" className={styles.userMenuBtn} onClick={handleClick}>
              <img src={UserLogo} alt="logo" />
            </Button>
          }
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            elevation={4}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            onClose={handleClose}
          >
            <MenuItem className={styles.userMenuLink} onClick={handleClose}>Profile</MenuItem>
            <MenuItem className={styles.userMenuLink} onClick={handleClose}>Checkout</MenuItem>
            <MenuItem className={styles.userMenuLink} onClick={handleClose}>Order</MenuItem>
            <MenuItem className={styles.userMenuLink} onClick={logout}>Logout</MenuItem>
          </Menu>
        </Grid>
      </Container>
    </AppBar>
  )
}

export default Header;
