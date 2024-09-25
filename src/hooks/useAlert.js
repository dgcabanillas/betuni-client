import { useEffect, useState } from 'react'
import { useToggle } from './useToggle'

export const useAlert = (duration = 5000) => {
	const [type, setType] = useState('success')
	const [message, setMessage] = useState('')
	const toggle = useToggle()

	useEffect(() => {
		if (!toggle.isOpen) return
		setTimeout(() => {
			setType('success')
			setMessage('')
			toggle.close()
		}, duration)
		// eslint-disable-next-line
	}, [toggle.isOpen])

	const open = (type, message) => {
		setType(type)
		setMessage(message)
		toggle.open()
	}

	return {
		type,
		message,
		isOpen: toggle.isOpen,
		open,
		close: toggle.close
	}
}
