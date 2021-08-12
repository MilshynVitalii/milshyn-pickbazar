import * as yup from 'yup';
import {signUp, signIn} from '../../redux/actions/auth';

export const modalsDescription = {
  signUp: {
    title: 'Sign Up',
    subtitle: 'Welcome!',
    action: signUp,
    values: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validation: {
      username: yup.string().min(4, 'Too short!').required("Field is required"),
      email: yup.string().email('Incorrect email').required("Field is required"),
      password: yup.string().required("Field is required"),
      confirmPassword: yup.string().oneOf([yup.ref('password')], "Passwords doesn't match").required("Field is required")
    },
    redirect: {
      text: 'Already have an account?',
      linkText: 'Login',
      to: 'signIn'
    }
  },
  signIn: {
    title: 'Welcome Back',
    subtitle: 'Login with your email & password',
    action: signIn,
    values: {
      identifier: '',
      password: ''
    },
    validation: {
      identifier: yup.string().min(4, 'Too short!').required("Field is required"),
      password: yup.string().required("Field is required")
    },
    redirect: {
      text: 'Don’t have account yet?',
      linkText: 'Sign Up',
      to: 'signUp'
    }
  },
  reset: {
    title: 'Forgot Password',
    subtitle: 'We’ll send you a link to reset your password',
    action: 'reset',
    values: {
      email: ''
    },
    validation: {
      email: yup.string().email('Incorrect email').required("Field is required")
    },
    redirect: {
      text: 'Back to ',
      linkText: 'Login',
      to: 'signIn'
    }
  }
}