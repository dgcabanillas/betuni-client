import React from 'react'
import { Layout } from 'antd'
import AppAlert from './components/AppAlert'
import AppHeader from './components/AppHeader'
import LoginModal from './components/LoginModal'
import RegisterModal from './components/RegisterModal'
import AppProvider from './context/AppProvider'
import CreditModal from './components/CreditModal'
import BetModal from './components/BetModal'
import Game from './components/Game'

const Content = () => {
	return (
		<>
			<AppAlert />
			<LoginModal />
			<RegisterModal />
			<CreditModal />
			<BetModal />
			<Layout style={{ minHeight: '100vh' }}>
				<AppHeader />
				<Game />
			</Layout>
		</>
	)
}

const App = () => {
	return (
		<div>
			<AppProvider>
				<Content />
			</AppProvider>
		</div>
	)
}

export default App