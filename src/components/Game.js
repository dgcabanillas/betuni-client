import React, { useEffect } from 'react'
import { Button, Col, Row } from 'antd'
import { useAppContext } from '../context/AppProvider'

const buttons = new Array(9).fill(0).map((_, index) => index + 1)

const Game = () => {
	const { game, credit, betModal, globalAlert } = useAppContext()

	useEffect(() => {
		if (!game.result) return
		const { data, error } = game.result
		if (error) {
			globalAlert.open('error', error)
			game.cancel()
		} else {
			credit.updateAmount(data.balance)
		}
	}, [game])

	const handleSelect = value => {
		if (game.disabled) {
			globalAlert.open('error', 'TIenes un juego en progreso')
			return
		}
		game.choose(value)
		betModal.open()
	}

	return (
		<div style={{ maxWidth: '300px', margin: '0 auto', padding: '50px 0' }}>
      <h2 style={{ textAlign: 'center' }}>
				{
					game?.result?.data ? (
						<span style={{ color: game.result.data.won ? 'green' : 'red' }}>
							{
								game.result.data.won
									? '¡Eres todo un ganador!'
									: '¡No te preocupes, sigue intentando!'
							}
						</span>
					) : game.guessedNumber ? (
						`¡Toda la confianza en el ${game.guessedNumber}!`
					) : (
						'¡Ven y prueba tu suerte!'
					)
				}
			</h2>
      <Row>
				{
					buttons.map(value => (
						<Col span={8} key={value} style={{ padding: 4 }}>
							<Button
								type='primary'
								ghost={value === (game.result?.data ? game.result.data.drawnNumber : game.randomNumber)}
								style={{ width: '100%', height: '80px', fontSize: 36, fontWeight: 600 }}
								onClick={() => handleSelect(value)}
							>
								{value}
							</Button>
						</Col>
					))
				}
			</Row>
			{
				!!game?.result && (
					<Button
						ghost
						type='primary'
						style={{ width: '100%', marginTop: 16, fontWeight: 500 }}
						onClick={game.cancel}
					>
						Habilitar juego
					</Button>
				)
			}
			<span style={{ textAlign: 'center', display: 'block', marginTop: 16, fontWeight: 500 }}>
					¡Acierta el número ganador y multiplica tu apuesta por 10!
			</span>
    </div>
	)
}

export default Game