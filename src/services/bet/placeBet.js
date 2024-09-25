import { xhr } from '../xhr'

export const placeBet = async ({ userId, betAmount, guessedNumber }) => {
	return await xhr.post('/bet', { userId, betAmount, guessedNumber })
}