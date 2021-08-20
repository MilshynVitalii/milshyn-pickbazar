import {makeStyles} from '@material-ui/core/styles';
import BG from '../../assets/main-bg.png';

export default makeStyles({
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
  },
  carousel: {
    position: 'relative',
    backgroundColor: '#ffffff',
    '& ul': {
      margin: '0px !important',
      display: 'flex !important'
    }
  },
  products: {
    borderTop: '1px solid #f7f7f7'
  }
});