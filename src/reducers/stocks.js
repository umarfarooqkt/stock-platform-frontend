import actionTypes from '../actions/actionTypes';

const DEFAULT_STATE = {
    stockList: [],
    stockInfo: null,
    loading: false,
    loaded: false,
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.FETCH_STOCKS_STARTED:
            return {
                ...state,
                loading: true
            };
        case actionTypes.FETCH_STOCKS_COMPLETE:
            return {
                ...state,
                stockList: action.payload,
                loading: false,
                loaded: true
            };
        case actionTypes.FETCH_STOCK_INFO_STARTED:
            return {
                ...state,
                loading: true
            };
        case actionTypes.FETCH_STOCK_INFO_COMPLETE:
            return {
                ...state,
                stockInfo: action.payload,
                loading: false,
                loaded: true
            };
        default:
            return state;
    }
};
