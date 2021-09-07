import api from './';

const getCarouselData = async () => await api.get('/coupons');

const fetchCategories = async () => await api.get('/categories');

export {getCarouselData, fetchCategories};