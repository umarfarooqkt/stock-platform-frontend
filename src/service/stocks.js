import axios from 'axios';
import { getBackEndURL } from './index';

export const fetchStocks = async () => {
    const res = await axios.get(`${getBackEndURL()}/stock/allcompanies`);
    return res.data;
};
