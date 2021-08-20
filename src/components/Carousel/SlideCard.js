import React from 'react';
import PropTypes from 'prop-types';
import {styled} from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

function SlideCard({data, styles}) {
  const StyledCard = styled(Card)({
    color: '#ffffff',
    background: `linear-gradient(90deg, ${data.gradientColors.start}, ${data.gradientColors.end})`
  });
  const StyledBtn = styled(Button)({
    fontSize: '18px',
    color: data.gradientColors.start,
    backgroundColor: '#ffffff',
    borderRadius: '180px',
    padding: '10px',
    width: '180px',
    '&:hover': {
      backgroundColor: '#ffffff',
      opacity: 0.8
    }
  });
  return (
    <StyledCard open={true} elevation={0}>
      <CardContent className={styles.content}>
        <Typography variant="h4" component="h3" className={styles.title}>{data.title}</Typography>
        <Typography variant="subtitle1" component="span" className={styles.subtitle}>{data.description}</Typography>
      </CardContent>
      <CardActions className={styles.action}>
        <StyledBtn size="small" color="primary">{data.buttonText}</StyledBtn>
      </CardActions>
    </StyledCard>
  )
}

export default SlideCard;

SlideCard.propTypes = {
  data: PropTypes.object,
  styles: PropTypes.object
}