import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(({breakpoints}) => ({
  header: {
    flexWrap: 'nowrap'
  },
  appBar: {
    boxShadow: 'none',
    backgroundColor: '#ffffff'
  },
  appBarHome: {
    boxShadow: 'none',
    backgroundColor: '#fafafa'
  },
  logo: {
    margin: '23px 0'
  },
  input: {
    width: '630px',
    margin: '0 25px',
    [breakpoints.down('xs')]: {
      display: 'none'
    }
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
}));