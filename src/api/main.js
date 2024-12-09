import axios from "axios";

const API_URL = "https://api.blockchain.com/v3/exchange/"
const symbol = "BTC-USD"

export const getBTCValue = async () => {
    try {
        const response = await axios.get(`${API_URL}/tickers/${symbol}`);
        const { data } = response.data
        if (response.status == 200){
            return response.data.price_24h
        }
    } catch (error) {
        console.error('Error getting data:', error.response?.data || error.message);
        // throw error;
        return "Ошибка получения";
    }
};
