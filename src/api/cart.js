import api from './';

const fetchProducts = async (data) => await api.get('/products', data);

export {fetchProducts};