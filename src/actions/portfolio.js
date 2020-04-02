import actionTypes from './actionTypes';
import { getToken } from '../reducers';
import { deleteFavourite, fetchPortfolio, postFavourite } from '../service/portfolio';

export const getPortfolio = () => async (dispatch, getState) => {
    dispatch({
        type: actionTypes.FETCH_PORTFOLIO_STARTED
    });

    try {
        const portfolio = await fetchPortfolio(getToken(getState()));
        dispatch({
            type: actionTypes.FETCH_PORTFOLIO_COMPLETE,
            payload: portfolio.map((favourite) => favourite.stock_symbol)
        });
    } catch (err) {
        console.error(err);
        dispatch({
            type: actionTypes.FETCH_PORTFOLIO_COMPLETE,
            payload: err
        });
    }
};

export const addFavourite = (symbol) => async (dispatch, getState) => {
    dispatch({
        type: actionTypes.ADD_FAVOURITE_STARTED
    });

    try {
        const portfolio = await postFavourite(symbol, getToken(getState()));
        dispatch({
            type: actionTypes.ADD_FAVOURITE_COMPLETE,
            payload: portfolio
        });
    } catch (err) {
        console.error(err);
        dispatch({
            type: actionTypes.ADD_FAVOURITE_COMPLETE,
            payload: err
        });
    }
};

export const removeFavourite = (symbol) => async (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FAVOURITE_STARTED
    });

    try {
        const portfolio = await deleteFavourite(symbol, getToken(getState()));
        dispatch({
            type: actionTypes.REMOVE_FAVOURITE_COMPLETE,
            payload: portfolio
        });
    } catch (err) {
        console.error(err);
        dispatch({
            type: actionTypes.REMOVE_FAVOURITE_COMPLETE,
            payload: err
        });
    }

    getPortfolio();
};
