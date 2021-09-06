import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(({breakpoints}) => ({
  order: {
    [breakpoints.up('sm')]: {
      paddingLeft: '60px',
      paddingRight: '60px'
    }
  },
  subTitle: {
    fontSize: '15px',
    margin: '30px 0'
  },
  text: {
    fontSize: '15px',
    color: '#424561'
  },
  textBold: {
    fontSize: '15px',
    fontWeight: 700
  },
  mainData: {
    marginTop: '10px'
  },
  detailsTitle: {
    margin: '60px 0 30px'
  },
}));