import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(({palette}) => ({
  main: {
    marginTop: '70px',
    paddingTop: '30px',
    paddingBottom: '80px',
  },
  item: {
    backgroundColor: '#ffffff',
    border: '1px solid #fafafa',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '50px 5%'
  },
  images: {
    padding: '20px 0',
    textAlign: 'center'
  },
  productsTitle: {
    fontSize: '13px',
    fontWeight: 700,
    margin: '50px 0 30px'
  },
  brokenImage: {
    color: '#f0f0f0',
    fontSize: '200px'
  },
  mainImage: {
    width: '60%',
    height: 'auto'
  },
  activeSlide: {
    textAlign: 'center',
    alignSelf: 'center'
  },
  thumbnails: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    border: '2px solid #f0f0f0',
    borderRadius: '6px',
    '&.swiper-slide-thumb-active': {
      borderColor: palette.primary.main
    }
  },
  activeThumb: {
    borderColor: palette.primary.main
  },
  fetching: {
    backgroundColor: '#f0f0f0',
    color: '#f0f0f0',
    borderRadius: '6px'
  },
  name: {
    display: 'inline-block',
    minWidth: '150px',
    fontSize: '21px',
    marginRight: '60px'
  },
  price: {
    fontSize: '16px',
    '&::before': {
      content: '$',
      display: 'block',
      position: 'relative',
      left: '-15px'
    }
  },
  descrText: {
    color: '#424561',
    margin: '30px 0 auto'
  },
  categoryText: {
    display: 'inline-block',
    fontSize: '13px',
    fontWeight: 700,
    padding: '7px 20px',
    backgroundColor: '#f7f7f7',
    borderRadius: '6px',
    marginRight: '30px'
  },
  brokenProduct: {
    color: '#d0d0d0',
    marginBottom: '10px'
  },
  infoInvisible: {
    display: 'none'
  }
}));