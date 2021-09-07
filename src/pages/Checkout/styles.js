import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(({palette, breakpoints}) => ({
  checkout: {
    marginTop: '100px',
    [breakpoints.up('md')]: {
      flexDirection: 'row-reverse'
    }
  },
  cards: {
    [breakpoints.up('md')]: {
      margin: '-22.5px'
    }
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '22.5px',
    boxShadow: '0px 2px 16px 0px #00000014',
    maxWidth: '640px',
    marginLeft: 'auto',
    marginRight: 'auto',
    [breakpoints.up('md')]: {
      marginRight: 0
    }
  },
  cardHeader: {
    marginBottom: '30px',
  },
  cardNumer: {
    display: 'inline-block',
    width: '35px',
    height: '35px',
    fontSize: '19px',
    fontWeight: 700,
    backgroundColor: palette.primary.main,
    borderRadius: '50%',
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: '35px',
    marginRight: '15px'
  },
  cardTitle: {
    fontSize: '19px',
    fontWeight: 700
  },
  linkCard: {
    textAlign: 'center',
    [breakpoints.up('sm')]: {
      textAlign: 'right',
    }
  },
  modalLink: {
    color: palette.primary.main,
    fontSize: '13px',
    fontWeight: 700,
    lineHeight: '35px'
  },
  item: {
    position: 'relative',
    backgroundColor: '#f7f7f7',
    border: '1px solid #f7f7f7',
    padding: '10px 15px 8px',
    height: '100%',
    cursor: 'pointer',
    '&:hover .MuiBox-root': {
      display: 'block'
    }
  },
  activeItem: {
    backgroundColor: '#ffffff !important',
    border: `1px solid ${palette.primary.main}`
  },
  itemActions: {
    display: 'block',
    padding: 0,
  },
  itemControls: {
    display: 'none',
    position: 'absolute',
    right: '15px',
    top: '10px'
  },
  itemTitle: {
    fontSize: '15px',
    fontWeight: 700
  },
  itemDescr: {
    fontSize: '15px'
  },
  actionAdd: {
    color: '#ffffff',
    backgroundColor: palette.primary.main,
    marginRight: '5px',
    '&:hover': {
      backgroundColor: palette.primary.main,
      opacity: 0.9
    }
  },
  actionRemove: {
    color: '#ffffff',
    backgroundColor: palette.error.main,
    '&:hover': {
      backgroundColor: palette.error.main,
      opacity: 0.9
    }
  },
  itemContent: {
    padding: 0,
    paddingTop: '10px',
    wordBreak: 'break-word',
    '&:last-child': {
      paddingBottom: 0
    }
  },
  order: {
    width: '250px',
    margin: '0 auto',
    [breakpoints.up('md')]: {
      margin: '-22.5px 0 0 30px',
      width: '250px',
    }
  },
  orderTitle: {
    fontSize: '15px',
    fontWeight: 700,
    marginBottom: '20px'
  },
  tableCellList: {
    padding: '12px 0 !important',
    border: 'none !important'
  },
  tableCell: {
    padding: '5px 0 !important',
    border: 'none !important'
  },
  tableCellBorder: {
    borderTop: '1px solid #e6e6e6 !important',
    paddingTop: '12px !important'
  },
  boldText: {
    fontWeight: 700
  },
  modal: {
    backgroundColor: '#f7f8f9',
    maxWidth: '360px',
    padding: '30px 30px 40px'
  },
  modalTitle: {
    padding: '0 0 15px'
  },
  modalContent: {
    padding: 0
  },
  modalInput: {
    alignItems: 'flex-start',
    marginBottom: '15px'
  },
  modalTextField: {
    height: '170px'
  },
  modalBtn: {
    '&:disabled': {
      background: palette.primary.main,
      color: '#ffffff',
      opacity: 0.5
    }
  },
  modalError: {
    position: 'relative',
    top: '-15px',
    textAlign: 'right'
  },
  conditions: {
    fontSize: '13px'
  },
  conditionsLink: {
    display: 'inline-block',
    fontSize: '13px',
    color: '#FF5B60',
    marginBottom: '30px'
  },
  paymentCard: {
    backgroundColor: '#E4F4FF'
  },
  visaTitle: {
    margin: '15px 0 0 0 !important',
    color: '#77798C',
    fontSize: '10px'
  },
  visaName: {
    fontSize: '12px',
    fontWeight: 700
  },
  visaNumber: {
    fontSize: '14px',
    fontWeight: 700
  }
}));