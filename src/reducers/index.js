import authReducer, * as auth from './auth';

export default {
    auth: authReducer,
};

export const hasToken = state => auth.hasToken(state.auth);

export const getToken = state => auth.getToken(state.auth);
