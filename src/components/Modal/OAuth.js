import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import SvgIcon from '@material-ui/core/SvgIcon';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import FacebookIcon from '../../assets/FacebookIcon.svg'
import GoogleIcon from '../../assets/GoogleIcon.svg'

function FaceBookIconComponent() {
  return <img src={FacebookIcon} alt="facebook" />
}

function GoogleIconComponent() {
  return <img src={GoogleIcon} alt="facebook" />
}

const useStyles = makeStyles(({palette}) => ({
  facebookButton: {
    marginTop: '15px',
    background: '#4267B2',
    height: '48px',
    '&:hover': {
      background: "#385185"
    }
  },
  googleButton: {
    marginTop: '15px',
    background: '#4286F4',
    height: '48px',
    '&:hover': {
      background: "#2462c7"
    }
  },
  divider: {
    position: 'relative',
    bottom: '17px',
    zIndex: 0,
  },
  dividerText: {
    position: 'relative',
    display: 'inline-block',
    fontSize: '15px',
    padding: '15px 3px 5px',
    background: '#ffffff',
    zIndex: 10,
  }
}));

function OAuth() {
  const styles = useStyles();

  return (
    <Box component="span">
      <Typography variant="subtitle1" component="span" className={styles.dividerText}>or</Typography>
      <Divider className={styles.divider}/>
      <Button 
        type="submit" 
        color="primary" 
        variant="contained" 
        startIcon={<SvgIcon component={FaceBookIconComponent} />}
        className={styles.facebookButton}
        onClick={()=>{}} 
        fullWidth
      >Continue with Facebook</Button>
      <Button 
        href={`${process.env.REACT_APP_BASE_URL}/connect/google`}
        color="primary" 
        variant="contained" 
        startIcon={<SvgIcon component={GoogleIconComponent} />}
        className={styles.googleButton}
        onClick={()=>{}}
        fullWidth 
      >Continue with Facebook</Button>
    </Box>
  )
}

export default OAuth;
