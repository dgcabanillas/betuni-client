import React from 'react'
import { Button, Modal } from 'antd'
import { useAppContext } from '../context/AppProvider'

const bets = [
	{ id: 1, value: 10 },
	{ id: 2, value: 50 },
	{ id: 3, value: 100 },
	{ id: 4, value: 500 },
]

const BetModal = () => {
	const { auth, game, credit, betModal, globalAlert } = useAppContext()

	const handleCancel = () => {
		game.cancel()
		betModal.close()
	}

	const placeBet = async (betAmount) => {
		betModal.close()
		if (!auth?.user?.id) {
			globalAlert.open('error', 'No has iniciado sesión')
			game.cancel()
		} else {
			game.play({ userId: auth.user.id, betAmount })
			betModal.close()
		}
	}

	return (
		<Modal
			title='Selecciona tu apuesta'
			open={betModal.isOpen}
			onCancel={handleCancel}
			cancelButtonProps={{ style: { display: 'none' }}}
			style={{ maxWidth: 300 }}
			footer={null}
		>
			<div style={{ display: 'flex', flexDirection: 'column', rowGap: 16 }}>
				{
					bets.map(bet => (
						<Button
							key={bet.id}
							type='primary'
							size='large'
							ghost
							onClick={() => placeBet(bet.value)}
							style={{ flexGrow: 1, fontWeight: 600, fontSize: 36, height: 'fit-content' }}
							disabled={credit.amount < bet.value}
						>
							S/. {bet.value}
						</Button>
					))
				}
			</div>
		</Modal>
	)
}

export default BetModal