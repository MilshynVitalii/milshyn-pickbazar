import api from './';

async function getCarouselData() {
    const res = await api.get('/coupons');
    return res;
}

async function fetchCategories() {
    const res = await api.get('/categories');
    return res;
  }

export {getCarouselData, fetchCategories};