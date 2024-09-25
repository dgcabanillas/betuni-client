import axios from 'axios'
import { API_URL } from '../utils/constants';

export const xhr = {
	post: async (endpoint = '', params = {}) => {
		try {
			const response = await axios.post(`${API_URL}${endpoint}`, params);
			return { data: response.data };
		} catch (error) {
			return { error: error?.response?.data?.message || 'Algo salió mal' };
		}
	}
}