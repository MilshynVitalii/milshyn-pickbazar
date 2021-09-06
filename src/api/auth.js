import api from './';

const signUp = async (data) => await api.post(`/auth/local/register`, data);

const signIn = async (data) => await api.post(`/auth/local`, data);

const googleSignIn = async (data) => await api.get('/auth/google/callback', data);

export {signUp, signIn, googleSignIn};