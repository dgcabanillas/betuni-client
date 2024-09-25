import { useEffect, useState } from 'react'
import { getCredits } from '../services/credit/get'

export const useCredit = (userId) => {
	const [amount, updateAmount] = useState(0)

	useEffect(() => {
		if (!userId) return
		const fetcher = async () => {
			const { data, error } = await getCredits({ id: userId })
			if (error) return
			updateAmount(data.balance)
		}
		fetcher();
	}, [userId])

	return { amount, updateAmount }
}
