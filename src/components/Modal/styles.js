import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(({palette}) => ({
  dialog: {
    textAlign: 'center',
    padding: '40px 60px',
    width: '460px'
  },
  dialogSignIn: {
    textAlign: 'center',
    padding: '40px 60px',
    width: '460px',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    overflow: 'hidden'
  },
  title: {
    color: palette.primary.main,
    padding: 0,
    fontSize: '21px',
    marginBottom: '10px'
  },
  content: {
    padding: 0
  },
  actions: {
    padding: 0,
    display: 'block'
  },
  actionsSignIn: {
    padding: 0,
    display: 'block',
    paddingBottom: '35px'
  },
  contentText: {
    marginBottom: '30px',
    fontSize: '15px'
  },
  continue: {
    width: '100%',
    '&:disabled': {
      background: palette.primary.main,
      color: '#ffffff',
      opacity: 0.5
    }
  },
  formControl: {
    position: 'relative',
    marginBottom: '10px'
  },
  errorText: {
    position: 'absolute',
    top: '50%',
    right: '15px',
    transform: 'translateY(-50%)',
    color: 'transparent',
    margin: 0
  },
  conditionsLink: {
    margin: '20px 0 30px',
    fontSize: '13px',
    '& a': {
      fontWeight: 'bold'
    }
  },
  redirect: {
    textAlign: 'center',
    marginTop: '20px',
    '& a': {
      fontWeight: 700,
      color: palette.primary.main
    }
  },
  reset: {
    color: palette.primary.main,
    padding: '16px',
    fontSize: '15px',
    backgroundColor: palette.action.hover,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    '& a': {
      fontWeight: 700,
      color: palette.primary.main
    }
  }
}));