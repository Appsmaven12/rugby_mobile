import { config } from '@fortawesome/fontawesome-svg-core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const instance = axios.create({
    headers: {
        "Content-type": "application/json"
    }
})

const handleConfig = async (config) => {
    const token = await AsyncStorage.getItem('accessToken')
    if (token) {
        config.headers['Authorization'] = token
    }
    return config
}

instance.interceptors.request.use((config) => handleConfig(config), (error) => Promise.reject(error))

instance.interceptors.response.use(function (response) {
    return response
})


export default instance