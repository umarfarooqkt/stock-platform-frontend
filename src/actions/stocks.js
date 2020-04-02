import actionTypes from './actionTypes';
import { fetchStocks, fetchGraphData } from '../service/stocks';
import { getToken } from '../reducers';

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

export const getStockInfo = (symbol) => async (dispatch, getState) => {
    dispatch({
        type: actionTypes.FETCH_STOCK_INFO_STARTED
    });

    try {
        const graphData = await fetchGraphData(symbol, getToken(getState()));
        dispatch({
            type: actionTypes.FETCH_STOCK_INFO_COMPLETE,
            payload: {
                graph: graphData
            }
        });
    } catch (err) {
        if (err.response.status === 404) {
            // No data available
            dispatch({
                type: actionTypes.FETCH_STOCK_INFO_COMPLETE,
                payload: {
                    graph: null
                }
            });
        } else {
            console.error(err);
            dispatch({
                type: actionTypes.FETCH_STOCK_INFO_COMPLETE,
                payload: err
            });
        }
    }
};
