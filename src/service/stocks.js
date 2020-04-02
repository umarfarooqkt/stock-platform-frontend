import axios from 'axios';
import { getBackEndURL } from './index';
import { getAuthHeaders } from './auth';

export const fetchStocks = async () => {
    const res = await axios.get(`${getBackEndURL()}/stock/allcompanies`);
    return res.data;
};

export const fetchGraphData = async (symbol, token) => {
    const res = await axios.get(`${getBackEndURL()}/graph/getdatacompany`, {
        params: {
            symbol
        },
        headers: getAuthHeaders(token)
    });
    return res.data.graph_data;
};
