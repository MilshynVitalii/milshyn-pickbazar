import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import BG from '../assets/main-bg.png';

const useStyles = makeStyles({
  grid: {
    height: '100vh',
    background: `url(${BG}) no-repeat center top`,
    backgroundSize: 'cover'
  },
  title: {
    fontSize: '45px',
    width: '100%',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: '19px',
    textAlign: 'center'
  }
});

function Home() {
  const styles = useStyles();

  return (
    <Paper square={true} elevation={0} className={styles.root}>
      <Grid container alignItems="center" justifyContent="center" className={styles.grid}>
        <Box>
          <Typography variant="h3" component="h1" className={styles.title}>
            Groceries Delivered in 90 Minute
          </Typography>
          <Typography variant="subtitle1" component="div" color="textSecondary" className={styles.subtitle}>
            Get your healthy foods & snacks delivered at your doorsteps all day everyday
          </Typography>
        </Box>
      </Grid>
    </Paper>
  )
}

export default Home;
