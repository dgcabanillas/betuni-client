import React from 'react'
import { Button, Layout } from 'antd'
import { useAppContext } from '../context/AppProvider'
import CurrentCredit from './CurrentCredit'
import Logout from './Logout'
const { Header } = Layout

const AppHeader = () => {
	const { auth, loginModal, registerModal } = useAppContext();

	return (
		<Header style={{ background: '#34495E', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
			<div style={{ fontSize: '24px', fontWeight: 'bold', color: '#F1C40F' }}>BETUNI</div>
			<div style={{ color: '#F1C40F', display: 'flex', columnGap: 16, alignItems: 'center' }}>
				{
					auth.user ? (
						<>
							<span>{auth.user.name}</span>
							<CurrentCredit />
							<Logout />
						</>
					) : (
						<>
							<Button
								type='link'
								style={{ fontSize: 12, color: '#F1C40F' }}
								onClick={loginModal.open}
							>
								INGRESAR
							</Button>
							<Button
								type='link'
								style={{ fontSize: 12, color: '#F1C40F' }}
								onClick={registerModal.open}
							>
								REGISTRAR
							</Button>
						</>
					)
				}
			</div>
		</Header>
	)
}

export default AppHeader