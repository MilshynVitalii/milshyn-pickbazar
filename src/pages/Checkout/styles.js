import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(({palette}) => ({
  checkout: {
    marginTop: '100px'
  },
  cards: {
    margin: '-22.5px'
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '22.5px',
    boxShadow: '0px 2px 16px 0px #00000014',
    maxWidth: '640px',
    marginLeft: 'auto'
  },
  cardHeader: {
    marginBottom: '30px'
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
    textAlign: 'right'
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
    backgroundColor: '#ffffff',
    border: `1px solid ${palette.primary.main}`
  },
  itemActions: {
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
    '&:last-child': {
      paddingBottom: 0
    }
  },
  order: {
    marginTop: '-22.5px',
    width: '250px'
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
  }
}));