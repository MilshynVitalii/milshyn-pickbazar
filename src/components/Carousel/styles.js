import {makeStyles} from '@material-ui/core/styles';
import {lightGreen} from '@material-ui/core/colors';

export default makeStyles({
  slideBtn: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: '#ffffff',
    boxShadow: '0 3px 6px 0 rgba(0,0,0, 0.16)',
    zIndex: 100,
    '&:hover': {
      backgroundColor: lightGreen[50],
    }
  },
  prevBtn: {
    left: '25px',
  },
  nextBtn: {
    right: '25px',
  },
  title: {
    fontSize: '41px',
    marginBottom: '10px'
  },
  subtitle: {
    fontSize: '20px'
  },
  content: {
    padding: '90px 16px 0',
    textAlign: 'center'
  },
  action: {
    padding: '35px 16px 90px',
    justifyContent: 'center'
  },
  slideCard: colors => ({
    color: '#ffffff',
    background: `linear-gradient(90deg, ${colors.start}, ${colors.end})`
  }),
  slideCardBtn: colors => ({
    fontSize: '18px',
    color: colors.start,
    backgroundColor: '#ffffff',
    borderRadius: '180px',
    padding: '10px',
    width: '180px',
    '&:hover': {
      backgroundColor: '#ffffff',
      opacity: 0.8
    }
  })
});