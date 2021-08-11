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
    redirect: {
      text: 'Back to ',
      linkText: 'Login',
      to: 'signIn'
    }
  }
}