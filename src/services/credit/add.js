import { xhr } from '../xhr'

export const addFunds = async ({ id, amount }) => {
	return await xhr.post('/credit/add', { id, amount })
}