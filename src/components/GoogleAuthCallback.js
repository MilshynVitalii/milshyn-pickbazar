import React from "react";
import {useLocation, useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux';

import {googleSignIn} from '../redux/actions/auth';
import api from '../api';

function GoogleAuthCallback() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  React.useEffect(() => {
    if (!location) {
      return;
    }
    const { search } = location;
    api.get(`/auth/google/callback?${search}`)
       .then(res => dispatch(googleSignIn(res.data)))
       .then(() => history.replace('/'));
  }, [location, dispatch, history]);

  return <></>;
}

export default GoogleAuthCallback;