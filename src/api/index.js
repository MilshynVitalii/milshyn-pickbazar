import axios from 'axios'
import store from '../redux/store'
import {showAlert} from '../redux/actions/app'

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

api.interceptors.response.use((response) => response, function (error) {
    if (error.response && error.response.status) {
        store.dispatch(showAlert('Error occurred', 'error', 3000));
    }
});

// api.interceptors.request.use((config) => {
//     if (getCookie('user-key')) {
//         config.headers['Authorization'] = `Bearer ${getCookie('user-key')}`
//     }

//     return config
// });

// export const endpoint = process.env.baseUrl;
export default api
