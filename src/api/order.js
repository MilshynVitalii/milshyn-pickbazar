import api from './';

const fetchOrderData = async (data) => await api.post('/orders', data);

export {fetchOrderData};