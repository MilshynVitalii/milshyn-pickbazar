import React from 'react';

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

function OAuth({styles}) {

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
        fullWidth
      >Continue with Facebook</Button>
      <Button 
        href={`${process.env.REACT_APP_BASE_URL}/connect/google`}
        color="primary" 
        variant="contained" 
        startIcon={<SvgIcon component={GoogleIconComponent} />}
        className={styles.googleButton}
        fullWidth 
      >Continue with Google</Button>
    </Box>
  )
}

export default OAuth;
