import api from './';

async function signUp(data) {
    const res = await api.post(`/auth/local/register`, data);
    return res;
}

async function signIn(data) {
    const res = await api.post(`/auth/local`, data);
    return res;
}

export {signUp, signIn};