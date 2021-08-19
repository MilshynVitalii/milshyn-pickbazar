import api from './';

async function fetchProducts(data) {
  const res = await api.get('/products', data);
  return res;
}

export {fetchProducts};