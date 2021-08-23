import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import ScrollToTop from './router/ScrollToTop';

import store from './redux/store';

import App from './App';

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import './config/swiper';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Provider store={store}>
          <App />
        </Provider>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);