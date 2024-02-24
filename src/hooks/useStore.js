import { useState } from 'react'

const initialState = {
	email: '',
	password: '',
	repeatPassword: '',
	errorMessageEmail: null,
	errorMessagePassword: null,
	errorMessageRepeatPassword: null,
	isError: false
}

export const useStore = () => {
	const [state, setState] = useState(initialState)
	return {
		getState: () => state,
		updateState: (fieldName, newValue) => {
			setState(prevState => ({
				...prevState,
				[fieldName]: newValue,
				isError: false
			}))
		},
		setError: (fieldName, errorMessage) => {
			setState(prevState => ({
				...prevState,
				[fieldName]: errorMessage,
				isError: true
			}))
		}
	}
}
