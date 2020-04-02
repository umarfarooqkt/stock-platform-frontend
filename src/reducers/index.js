import authReducer, * as auth from './auth';
import portfolioReducer from './portfolio';
import stocksReducer from './stocks';

export default {
    auth: authReducer,
    portfolio: portfolioReducer,
    stocks: stocksReducer
};

export const hasToken = state => auth.hasToken(state.auth);

export const getToken = state => auth.getToken(state.auth);
