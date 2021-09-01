import api from './';

async function fetchOrderData(data) {
  const res = await api.get('/orders', data);
  return res;
}

export {fetchOrderData};