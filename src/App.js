import React from 'react';
import {Switch,Route} from "react-router-dom";

import Header from './components/Header';
import Home from './pages/Home';
import Product from './pages/Product';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/product" component={Product} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </>
  );
}

export default App;
