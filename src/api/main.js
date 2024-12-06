import axios from "axios";

const API_URL = "https://api.blockchain.com/v3/exchange/"
const symbol = "BTC-USD"

// Метод для регистрации пользователя
export const getBTCValue = async () => {
    try {
        // Отправка запроса на маршрут регистрации
        const response = await axios.get(`${API_URL}/tickers/${symbol}`);
        // console.log('заброс был оправлен')
        const { data } = response.data
        if (response.status == 200){
            return response.data.price_24h
        } else {
            return "Ошибка"
        }
    } catch (error) {
        console.error('Error registering user:', error.response?.data || error.message);
        throw error;
    }
};
