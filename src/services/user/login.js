import { xhr } from '../xhr'

export const login = async ({ username, password }) => {
	return await xhr.post('/user/login', { username, password })
}