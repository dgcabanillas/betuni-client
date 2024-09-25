import React from 'react'
import { Button } from 'antd'
import { useAppContext } from '../context/AppProvider'

const CurrentCredit = () => {
	const { credit, creditModal } = useAppContext()

	return (
		<Button
			ghost
			style={{ fontSize: 14, fontWeight: 'bold', color: '#F1C40F', border: '1px solid #F1C40F' }}
			onClick={creditModal.open}
		>
			S/. { credit.amount }
		</Button>
	)
}

export default CurrentCredit