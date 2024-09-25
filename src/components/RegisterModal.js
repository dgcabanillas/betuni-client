import React, { useEffect, useState } from 'react'
import { Modal, Input, Button } from 'antd'
import { useAppContext } from '../context/AppProvider'
import { register } from '../services/user/register'

const RegisterModal = () => {
	const { auth, loginModal, registerModal, globalAlert } = useAppContext()
	const [error, setError] = useState('')
	const [name, setName] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	useEffect(() => {
		setError('')
		setName('')
		setUsername('')
		setPassword('')
	}, [registerModal.isOpen])

	const handleRegister = async () =>  {
		const { data, error } = await register({ name, username, password })
		if (error) {
			setError(error)
		} else {
			registerModal.close()
			auth.login(data.user)
			globalAlert.open('success', data.message)
		}
	}

	const openLogin = () => {
		registerModal.close()
		loginModal.open()
	}

	return (
		<Modal
			title='Registrar'
			onOk={handleRegister}
			open={registerModal.isOpen}
			onCancel={registerModal.close}
			cancelButtonProps={{ style: { display: 'none' }}}
			okText='Registrar'
		>
			<form>
				<Input
					placeholder='Nombre'
					value={name}
					onChange={e => setName(e.target.value)}
					style={{ marginBottom: 16 }}
				/>
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
					onClick={openLogin}
					style={{ padding: 12, height: 'fit-content' }}
				>
					Ya tengo una cuenta
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

export default RegisterModal