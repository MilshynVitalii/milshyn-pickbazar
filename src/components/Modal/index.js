import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import cn from 'classnames';
import {Formik} from 'formik';
import * as yup from 'yup';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import ModalPortal from '../ModalPortal';
import OAuth from './OAuth';
import {setModal} from '../../redux/actions/app';
import {modalsDescription as modals} from './constants';
import useStyles from './styles';

const Modal = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const {modal} = useSelector(state => state.app);

  const validationSchema = yup.object().shape(modals[modal]?.validation);

  const handleModalVisibility = () => dispatch(setModal(''));

  const onRedirect = to => e => {e.preventDefault(); dispatch(setModal(to))};

  return (
    <ModalPortal>
      <Dialog 
        open={modal in modals} 
        onClose={handleModalVisibility} 
        aria-labelledby="form-dialog-title"
        classes={{paper: cn({[styles.dialogSignIn]: modal === 'signIn', [styles.dialog]: modal !== 'signIn'})}}
        scroll="body"
      >
        <DialogTitle id="form-dialog-title" color="primary" className={styles.title}>{modals[modal]?.title}</DialogTitle>
        <DialogContent className={styles.content}>
          <DialogContentText className={styles.contentText}>{modals[modal]?.subtitle}</DialogContentText>
          <Formik
            key={modal}
            initialValues={modals[modal]?.values}
            validateOnBlur
            validationSchema={validationSchema}
            onSubmit={(values) => {
              dispatch(modals[modal]?.action(values));
            }}
          >
            {({values, errors, touched, isValid, dirty, handleChange, handleBlur, handleSubmit}) => {
              return <form autoComplete="off">
                {
                  modals[modal]?.values && Object.keys(modals[modal].values).map(key => {
                    return <FormControl key={key} className={styles.formControl} fullWidth error={errors[key] && touched[key]}>
                      <FilledInput
                        name={key}
                        type={key.toLowerCase().includes('password') ? 'password' : 'text'}
                        placeholder={key === 'confirmPassword' ? 'Confirm password' : `Your ${key}`}
                        value={values[key]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors[key] && touched[key] && <FormHelperText className={styles.errorText}>{errors[key]}</FormHelperText>}
                    </FormControl>
                  })
                }
                {
                  modal === 'signUp' && <Typography variant="body2" component="p" color="textSecondary" className={styles.conditionsLink}>
                    By signing up, you agree to Pickbazar's <Link underline="always">Terms & Condtion</Link>
                  </Typography>
                }
                <Button 
                  type="submit" 
                  color="primary" 
                  variant="contained" 
                  disabled={!isValid || !dirty}
                  className={styles.continue}
                  onClick={handleSubmit} 
                >Continue</Button>
              </form>;
            }}
          </Formik>
        </DialogContent>
        <DialogActions className={cn({[styles.actionsSignIn]: modal === 'signIn', [styles.actions]: modal !== 'signIn'})}>
          {
            modal !== 'reset' && <OAuth styles={styles} />
          }
          <Typography variant="subtitle1" component="p" className={styles.redirect}>
            {modals[modal]?.redirect.text} <Link 
              href="#" 
              underline="always" 
              onClick={onRedirect(modals[modal]?.redirect.to)}
            >{modals[modal]?.redirect.linkText || ''}</Link>
          </Typography>
        </DialogActions>
        {
          modal === 'signIn' && <Typography variant="subtitle1" component="p" className={styles.reset}>
            Forgot your password? <Link href="#" underline="always" onClick={onRedirect('reset')}>Reset It</Link>
          </Typography>
        }
      </Dialog>
    </ModalPortal>
  )
}

export default Modal;
