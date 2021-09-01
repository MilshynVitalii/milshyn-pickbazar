import * as yup from 'yup';

export const modalsDescription = {
  checkout_address: {
    title: 'Add New Address',
    action: 'address',
    values: {
      title: '',
      description: ''
    },
    validation: {
      title: yup.string().min(4, 'Too short!').required("Field is required"),
      description: yup.string().required("Field is required")
    }
  },
  checkout_phone: {
    title: 'Add New Number',
    action: 'phone',
    values: {
      phone: ''
    },
    validation: {
      phone: yup.number("Digits only").required("Field is required")
    }
  }
}