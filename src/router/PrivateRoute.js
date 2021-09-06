import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {setModal} from '../redux/actions/app';

const PrivateRoute = ({component: Component, ...rest}) => {
  const dispatch = useDispatch();
  const {logined} = useSelector(state => state.auth);

  const onRender = props => {
    if(logined) {
      return <Component {...props} />
    } else {
      dispatch(setModal('signIn'));
      return <Redirect to="/" /> 
    }
  }

  return (
    <Route {...rest} render={onRender} />
  );
};

export default PrivateRoute;