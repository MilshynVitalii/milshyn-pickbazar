import {makeStyles} from '@material-ui/core/styles';
import {lightGreen} from '@material-ui/core/colors';

export default makeStyles(({palette}) => ({
  openCart: {
    position: 'fixed',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    width: '100px',
    backgroundColor: palette.primary.main,
    padding: '10px',
    borderRadius: '6px 0 0 6px',
    color: '#ffffff',
    zIndex: 1300
  },
  textBox: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    '& svg': {
      width: '13px'
    }
  },
  openBtn: {
    backgroundColor: palette.background.paper,
    fontSize: '13px',
    fontWeight: 700,
    color: palette.primary.main,
    '&:hover': {
      backgroundColor: lightGreen[50],
    }
  },
  drawer: {
    width: '100%',
    maxWidth: '420px'
  },
  drawerContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    boxShadow: 'none',
    overflow: 'auto'
  },
  cartHeader: {
    color: palette.primary.main,
    padding: '15px 25px 7px',
    borderBottom: '1px solid #F1F1F1'
  },
  cartContent: {
    padding: '0',
    marginBottom: 'auto'
  },
  cartAction: {
    padding: '0 25px 25px'
  },
  cartHeaderIcon: {
    marginRight: '10px',
    '& svg': {
      width: '19px',
      height: 'auto'
    }
  },
  closeIcon: {
    color: 'rgba(0, 0, 0, 0.25)',
    cursor: 'pointer',
    alignSelf: 'center',
    margin: 0,
    '&:hover': {
      color: '#e94d4a'
    }
  },
  checkout: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderRadius: '85px',
    backgroundColor: palette.primary.main,
    color: '#ffffff',
    fontSize: '13px'
  },
  checkoutBtn: {
    backgroundColor: '#ffffff',
    borderRadius: '85px',
    border: `2px solid ${palette.primary.main}`,
    fontSize: '13px',
    padding: '10px',
    minWidth: '85px',
    '&:hover': {
      borderWidth: '2px',
      backgroundColor: lightGreen[50]
    }
  },
  checkoutText: {
    fontSize: '13px',
    fontWeight: 700,
    marginLeft: '26px'
  },
  product: {
    display: 'flex',
    borderBottom: '1px solid #F1F1F1'
  },
  amount: {
    backgroundColor: '#F7F7F7',
    fontSize: '15px',
    fontWeight: 700,
    textAlign: 'center',
    width: '30px',
    padding: '4px 0'
  },
  changeCountBtn: {
    fontSize: '15px',
    color: '#77798c',
    backgroundColor: '#f7f7f7',
    padding: 0,
    minWidth: '30px'
  },
  incBtn: {
    borderRadius: '200px 200px 0 0'
  },
  decBtn: {
    borderRadius: '0 0 200px 200px'
  },
  productDetails: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  productPrice: {
    fontSize: '15px',
    fontWeight: 700,
  },
  productSize: {
    fontSize: '13px'
  },
  price: {
    fontSize: '15px',
    fontWeight: 700,
    alignSelf: 'center',
    marginRight: '20px'
  },
  cartEmpty: {
    textAlign: 'center'
  },
  productImage: {
    maxWidth: '60px',
    height: 'auto',
    alignSelf: 'center'
  }
}));