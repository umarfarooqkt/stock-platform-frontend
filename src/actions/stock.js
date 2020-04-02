import actionTypes from './actionTypes';
import { fetchStocks } from '../service/stocks';

export const getStocks = () => async (dispatch) => {
    dispatch({
        type: actionTypes.FETCH_STOCKS_STARTED
    });

    try {
        const stocks = await fetchStocks();
        dispatch({
            type: actionTypes.FETCH_STOCKS_COMPLETE,
            payload: stocks
        });
    } catch (err) {
        console.error(err);
        dispatch({
            type: actionTypes.FETCH_STOCKS_COMPLETE,
            payload: err
        });
    }
};
