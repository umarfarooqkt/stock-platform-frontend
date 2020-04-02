import actionTypes from '../actions/actionTypes';

const DEFAULT_STATE = {
    data: [],
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
                data: action.payload,
                loading: false,
                loaded: true
            };
        default:
            return state;
    }
};
