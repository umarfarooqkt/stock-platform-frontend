import actionTypes from './actionTypes';
import { getToken } from '../reducers';

export const initToken = (token, expiryDate) => (dispatch, getState) => {
    if (token !== getToken(getState())) {
        dispatch({
            type: actionTypes.INIT_TOKEN,
            payload: {
                token,
                expiryDate,
            },
        });
    }
};

export const purgeToken = () => (dispatch) => {
    dispatch({
        type: actionTypes.PURGE_TOKEN,
    });
};
