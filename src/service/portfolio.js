import axios from 'axios';
import { getBackEndURL } from './index';
import { getAuthHeaders } from './auth';

export const fetchPortfolio = async (token) => {
    const res = await axios.get(`${getBackEndURL()}/portfolio/allfavourites`, {
        headers: getAuthHeaders(token)
    });
    return res.data;
};

export const postFavourite = async (symbol, token) => {
    const res = await axios({
        method: 'post',
        url: `${getBackEndURL()}/portfolio/addfavourite`,
        headers: getAuthHeaders(token),
        data: {
            stock_symbol: symbol,
            favourite_status: true
        }
    });

    return res.data;
};

export const deleteFavourite = async (symbol, token) => {
    const res = await axios({
        method: 'delete',
        url: `${getBackEndURL()}/portfolio/deletefavourite`,
        headers: getAuthHeaders(token),
        params: {
            symbol
        }
    });

    return res.data;
};
