import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

import useStyles from './styles';

function SlideCard({data}) {
  const styles = useStyles(data.gradientColors);

  return (
    <Card className={styles.slideCard} data={data} open={true} elevation={0}>
      <CardContent className={styles.content}>
        <Typography variant="h4" component="h3" className={styles.title}>{data.title}</Typography>
        <Typography variant="subtitle1" component="span" className={styles.subtitle}>{data.description}</Typography>
      </CardContent>
      <CardActions className={styles.action}>
        <Button data={data} size="small" color="primary" className={styles.slideCardBtn}>{data.buttonText}</Button>
      </CardActions>
    </Card>
  )
}

export default SlideCard;

SlideCard.propTypes = {
  data: PropTypes.object
}