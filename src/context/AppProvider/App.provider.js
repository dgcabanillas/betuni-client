import { useAuth } from '../../hooks/useAuth'
import { useAlert } from '../../hooks/useAlert'
import { useToggle } from '../../hooks/useToggle'
import { useCredit } from '../../hooks/useCredit';
import AppContext from './App.context';
import { useGame } from '../../hooks/useGame';

const AppProvider = ({ children }) => {
	const auth = useAuth()
	const game = useGame()
	const credit = useCredit(auth?.user?.id)
	const betModal = useToggle()
	const loginModal = useToggle()
	const creditModal = useToggle()
	const registerModal = useToggle()
	const globalAlert = useAlert()

	return (
		<AppContext.Provider
			value={{
				auth,
				game,
				credit,
				betModal,
				loginModal,
				creditModal,
				registerModal,
				globalAlert,
			}}
		>
			{ children }
		</AppContext.Provider>
	)
}

export default AppProvider;