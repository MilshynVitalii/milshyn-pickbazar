import React from 'react';
import cn from 'classnames';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as yup from 'yup';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

import {modalsDescription as modals} from './constants';
import {setCheckoutModal} from '../../../redux/actions/app';
import {addCheckoutData, changeCheckoutItem} from '../../../redux/actions/checkout';
import ModalPortal from '../../ModalPortal';

function Modal({styles}) {
  const dispatch = useDispatch();
  const {checkoutModal: modal} = useSelector(state => state.app);
  const {itemToChange} = useSelector(state => state.checkout);

  const validationSchema = yup.object().shape(modals[modal]?.validation);

  const handleModalVisibility = () => {dispatch(changeCheckoutItem(null)); dispatch(setCheckoutModal(''))}

  const onSubmit = (values) => {
    dispatch(addCheckoutData(modal, values));
    handleModalVisibility();
  }

  return (
    <ModalPortal>
      <Dialog 
        open={modal in modals} 
        onClose={handleModalVisibility} 
        scroll="body"
        classes={{paper: styles.modal}}
      >
        <DialogTitle id="form-dialog-title" color="primary" className={styles.modalTitle}>
          {itemToChange ? `Change ${modals[modal]?.action}` : modals[modal]?.title}
        </DialogTitle>
        <DialogContent className={styles.modalContent}>
          <Formik
            key={modal}
            initialValues={modals[modal]?.values}
            validateOnBlur
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({values, errors, touched, isValid, dirty, handleChange, handleBlur, handleSubmit}) => {
              return <form autoComplete="off">
                {
                  modals[modal]?.values && Object.keys(modals[modal].values).map(key => {
                    return <FormControl key={key} className={styles.modalControl} error={errors[key] && touched[key]} fullWidth>
                      <FilledInput
                        name={key}
                        type="text"
                        placeholder={`Enter ${key}`}
                        value={values[key]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={cn(styles.modalInput, {[styles.modalTextField]: key === 'description'})}
                      />
                      {errors[key] && touched[key] && <FormHelperText className={styles.modalError}>{errors[key]}</FormHelperText>}
                    </FormControl>
                  })
                }
                <Button 
                  type="submit" 
                  color="primary" 
                  variant="contained" 
                  disabled={!isValid || !dirty}
                  onClick={handleSubmit} 
                  fullWidth={true}
                  className={styles.modalBtn}
                >Save {modals[modal]?.action}</Button>
              </form>;
            }}
          </Formik>
        </DialogContent>
      </Dialog>
    </ModalPortal>
  )
}

export default Modal;