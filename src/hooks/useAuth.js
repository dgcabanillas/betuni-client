import { useCallback, useEffect, useState } from 'react'

export const useAuth = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const data = sessionStorage.getItem('user-data');
		if (!data) return;
		setUser(JSON.parse(data));
	}, [])

	const login = useCallback(data => {
		setUser(data)
		sessionStorage.setItem('user-data', JSON.stringify(data));
	}, [])

	const logout = useCallback(() => {
		setUser(null);
		sessionStorage.removeItem('user-data');
	}, [])

	return { user, login, logout  }
}
