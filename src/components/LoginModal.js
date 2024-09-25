import React, { useEffect, useState } from 'react'
import { Button, Modal, Input } from 'antd'
import { useAppContext } from '../context/AppProvider'
import { login } from '../services/user/login'

const LoginModal = () => {
	const { auth, loginModal, registerModal } = useAppContext()
	const [error, setError] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	useEffect(() => {
		setError('')
		setUsername('')
		setPassword('')
	}, [loginModal.isOpen])

	const handleLogin = async () =>  {
		const { data, error } = await login({ username, password })
		if (error) {
			setError(error)
		} else {
			loginModal.close()
			auth.login(data.user)
		}
	}

	const openRegister = () => {
		loginModal.close()
		registerModal.open()
	}

	return (
		<Modal
			title='Ingresar'
			onOk={handleLogin}
			open={loginModal.isOpen}
			onCancel={loginModal.close}
			cancelButtonProps={{ style: { display: 'none' }}}
			okText='Ingresar'
		>
			<form>
				<Input
					placeholder='Usuario'
					value={username}
					onChange={e => setUsername(e.target.value)}
					style={{ marginBottom: 16 }}
				/>
				<Input
					type='password'
					placeholder='Password'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<Button
					type='link'
					onClick={openRegister}
					style={{ padding: 12, height: 'fit-content' }}
				>
					Quiero crear una cuenta
				</Button>
				{
					error && (
						<div style={{ color: 'red', padding: 12 }}>
							{error}
						</div>
					)
				}
			</form>
		</Modal>
	)
}

export default LoginModal