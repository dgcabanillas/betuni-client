import { useContext } from 'react'
import AppContext from './App.context'

export const useAppContext = () => {
	return useContext(AppContext);
}