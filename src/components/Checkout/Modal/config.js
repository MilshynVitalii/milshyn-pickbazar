import * as yup from 'yup';
import store from '../../../redux/store';

const addressValues = {title: '', description: ''};
const phoneValues = {description: ''};

Object.defineProperty(addressValues, 'type', {
  get() {
    return 'checkout_address'
  }
});

Object.defineProperty(phoneValues, 'type', {
  get() {
    return 'checkout_phone'
  }
});

const [addressValuesProxy, phoneValuesProxy] = [addressValues, phoneValues].map(obj => new Proxy(obj, {
  get(target, prop){
    const {checkout} = store.getState();
    return checkout[target.type].find(data => data.id === checkout.itemToChange)?.[prop] || target[prop];
  },
  set(target, prop, value) {
    target[prop] = value;
    return true;
  }
}));

const modalsDescription = {
  checkout_address: {
    title: 'Add New Address',
    action: 'address',
    values: addressValuesProxy,
    validation: {
      title: yup.string().min(4, 'Too short!').required("Field is required"),
      description: yup.string().required("Field is required")
    },
  },
  checkout_phone: {
    title: 'Add New Number',
    action: 'phone',
    values: phoneValuesProxy,
    validation: {
      description: yup
          .number()
          .required('Field is required')
          .test(/^[0-9]{5,12}$/, 'From 5 to 12 digits', (value, context) => context.type.test(value))
          .typeError('Phone have to contain only numbers')
          .positive('Phone have to contain only numbers')
          .integer('Phone have to contain only numbers')
    }
  },
};

export {modalsDescription};