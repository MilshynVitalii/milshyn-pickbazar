import React from "react";
import {useLocation, useHistory} from "react-router-dom";
import {useDispatch} from 'react-redux';

import {googleSignIn} from '../redux/actions/auth';

function GoogleAuthCallback() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  React.useEffect(() => {
    if (!location) {
      return;
    }
    
    const searchParams = new URLSearchParams(location.search);
    const access_token = searchParams.get('access_token');

    dispatch(googleSignIn({params: {access_token}}));

    history.replace('/');

  }, [location, dispatch, history]);

  return <></>;
}

export default GoogleAuthCallback;