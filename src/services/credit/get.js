import { xhr } from '../xhr'

export const getCredits = async ({ id }) => {
	return await xhr.post('/credit/get', { id })
}