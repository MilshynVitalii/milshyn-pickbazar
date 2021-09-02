import api from './';

async function fetchOrderData(data) {
  const res = await api.post('/orders', data);
  return res;
}

export {fetchOrderData};