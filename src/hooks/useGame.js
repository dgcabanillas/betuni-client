import { useEffect, useState } from 'react'
import { placeBet } from '../services/bet/placeBet'

export const useGame = () => {
	const [data, setData] = useState()
	const [result, setResult] = useState()
	const [randomNumber, setRandomNumber] = useState(0)
	const [guessedNumber, setGuessedNumber] = useState(0)
	const [disabled, setDisabled] = useState(false)

	useEffect(() => {
		if (!data) return
		setResult()
		setDisabled(true)
		let iterations = 0
		const interval = setInterval(async () => {
			iterations++
			setRandomNumber(Math.floor(Math.random() * 9) + 1)
			if (iterations === 20) {
				clearInterval(interval)
				const response = await placeBet({ 
					userId: data.userId,
					betAmount: data.betAmount,
					guessedNumber
				})
				setDisabled(false)
				setResult(response)
				setGuessedNumber(0)
				setRandomNumber(0)
				setData()
			}
		}, 100)
	}, [data])

	const choose = guessedNumber => setGuessedNumber(guessedNumber)

	const play = ({ userId, betAmount }) => setData({ userId, betAmount })

	const cancel = () => {
		setData()
		setResult()
		setRandomNumber(0)
		setGuessedNumber(0)
		setDisabled(false)
	}

	return { result, guessedNumber, disabled, randomNumber, play, choose, cancel }
}
