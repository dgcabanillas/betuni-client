import React from 'react'
import { Button, Modal } from 'antd'
import { useAppContext } from '../context/AppProvider'
import { addFunds } from '../services/credit/add'

const amounts = [
	{ id: 1, value: 10 },
	{ id: 2, value: 50 },
	{ id: 3, value: 100 }
]

const CreditModal = () => {
	const { auth, credit, globalAlert, creditModal } = useAppContext()

	const addCredit = async (amount) => {
		if (!auth.user) {
			creditModal.close()
			globalAlert.open('error', 'No has iniciado sesión!')
			return;
		}
		const { data, error } = await addFunds({ id: auth.user.id, amount })
		if (error) {
			creditModal.close()
			globalAlert.open('error', error)
		} else {
			creditModal.close()
			globalAlert.open('success', data.message)
			credit.updateAmount(data.balance)
		}
	}

	return (
		<Modal
			title='Agregar fondos'
			open={creditModal.isOpen}
			onCancel={creditModal.close}
			cancelButtonProps={{ style: { display: 'none' }}}
			footer={null}
		>
			<div style={{ display: 'flex', columnGap: 16 }}>
				{
					amounts.map((amount) => (
						<Button
							key={amount.id}
							type='primary'
							size='large'
							ghost
							onClick={() => addCredit(amount.value)}
							style={{ flexGrow: 1, fontWeight: 600, fontSize: 36, height: 'fit-content' }}
						>
							S/. {amount.value}
						</Button>
					))
				}
			</div>
		</Modal>
	)
}

export default CreditModal