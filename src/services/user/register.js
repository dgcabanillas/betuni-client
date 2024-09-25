import { xhr } from '../xhr'

export const register = async ({ name, username, password }) => {
	return await xhr.post('/user/register', { name, username, password })
}