import React from 'react'
import { Button } from 'antd'
import { useAppContext } from '../context/AppProvider'

const Logout = () => {
	const { auth } = useAppContext()

	return (
		<Button
			type='link'
			style={{ color: '#F1C40F', padding: 0, fontSize: 10 }}
			onClick={auth.logout}
		>
			cerrar sesión
		</Button>
	)
}

export default Logout