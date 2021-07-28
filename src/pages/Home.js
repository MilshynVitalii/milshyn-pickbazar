import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {inc, dec} from '../redux/actions/counter';

function Home() {
  const dispatch = useDispatch();
  const value = useSelector(({counter}) => counter.value);

  return (
    <>
      <h3>Home</h3>
      <button type="button" onClick={() => dispatch(dec)}>-</button>
      <span>{value}</span>
      <button type="button" onClick={() => dispatch(inc)}>+</button>
    </>
  )
}

export default Home;
