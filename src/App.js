import React from 'react';
import {Switch,Route} from "react-router-dom";
import {useSelector} from 'react-redux';
import {ThemeProvider} from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Alert from '@material-ui/lab/Alert';

import Header from './components/Header';
import Modal from './components/Modal';
import GoogleAuthCallback from './components/GoogleAuthCallback';
import Cart from './components/Cart';
import Home from './pages/Home';
import Product from './pages/Product';
import Checkout from './pages/Checkout';

import theme from './theme';

function App() {
  const {alert} = useSelector(state => state.app);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!!alert.text.length && <Alert severity={alert.type}>{alert.text}</Alert>}
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/product/:productID" component={Product} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/auth/google/callback" component={GoogleAuthCallback}/>
      </Switch>
      <Modal />
      <Cart />
    </ThemeProvider>
  );
}

export default App;
