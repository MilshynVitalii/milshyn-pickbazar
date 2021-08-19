import api from './';

async function signUp(data) {
    const res = await api.post(`/auth/local/register`, data);
    return res;
}

async function signIn(data) {
    const res = await api.post(`/auth/local`, data);
    return res;
}

async function googleSignIn(data) {
    const res = await api.get('/auth/google/callback', data);
    return res;
}

export {signUp, signIn, googleSignIn};