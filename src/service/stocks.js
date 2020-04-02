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

    res.data.graph_data.forEach((point) => {
        const date = point.date_time.split("-");
        const new_date = `${date[1]}-${date[0]}-${date[2]}-${date[3]}`
        point.date_time = new_date;
    })
    return res.data.graph_data;
};
