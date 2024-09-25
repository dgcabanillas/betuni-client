import React from 'react'
import { Alert } from 'antd'
import { useAppContext } from '../context/AppProvider'

const AppAlert = () => {
	const { globalAlert } = useAppContext();

	if (!globalAlert.isOpen) return null;

	return (
		<div
			style={{
				position: 'fixed',
				bottom: '12px',
				right: '24px',
				zIndex: 1000
			}}
		>
			<Alert
				closable
				showIcon
				type={globalAlert.type}
				message={globalAlert.message}
				style={{ marginBottom: 16 }}
				onClose={globalAlert.close}
			/>
		</div>
	)
}

export default AppAlert