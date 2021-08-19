import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(({palette}) => ({
  productsContainer: {
    backgroundColor: '#f7f7f7',
    display: 'flex',
    alignItems: 'flex-start',
    padding: '15px 0'
  },
  products: {
    margin: 0
  },
  loadMoreBtn: {
    display: 'block',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    color: palette.primary.main,
    '&:hover': {
      backgroundColor: '#e8f5e9'
    }
  },
  emptyCategory: {
    textAlign: 'center',
    alignSelf: 'center'
  },
  list: {
    marginTop: '30px'
  },
  icon: {
    minWidth: '35px',
    color: 'inherit'
  },
  iconChild: {
    minWidth: '15px',
    color: 'inherit'
  },
  listMainItem: {
    paddingLeft: '27px',
    cursor: 'pointer',
    '&:hover': {
      color: palette.primary.main,
    }
  },
  listChildItem: {
    paddingLeft: '57px',
    cursor: 'pointer',
    '&:hover': {
      color: palette.primary.main,
    }
  },
  itemMainText: {
    fontWeight: 700,
    fontSize: '15px'
  },
  itemChildText: {
    fontWeight: 700,
    fontSize: '13px'
  },
  selectedlistItem: {
    color: palette.primary.main,
    background: 'transparent !important'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  content: {
    width: '100%',
    padding: '25px',
    paddingBottom: '0',
    display: 'flex',
    flexDirection: 'column',
  },
  actions: {
    padding: '25px'
  },
  cardImage: {
    display: 'block',
    width: '100%',
    height: 'auto',
    maxWidth: '280px',
    margin: 'auto'
  },
  badgeWrap: {
    width: '100%',
    flexGrow: 1
  },
  badge: {
    top: '27px',
    right: '34px',
    backgroundColor: '#ffad5e',
    color: '#ffffff'
  },
  link: {
    fontSize: '15px',
    fontWeight: '700',
    marginTop: '20px',
    textDecoration: 'none',
    color: 'inherit'
  },
  size: {
    fontSize: '13px'
  },
  price: {
    fontSize: '15px'
  },
  discount: {
    fontSize: '13px',
    textDecoration: 'line-through',
    color: '#ffad5e'
  }
}));