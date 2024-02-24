import FormLayout from './FromLayout'
import { useStore } from '../../hooks/useStore'

export default function FormContainer() {
	const { getState, updateState, setError } = useStore()

	const onSubmit = event => {
		event.preventDefault()
	}

	const onChangeEmail = ({ target }) => {
		updateState('email', target.value)

		let errorMessage = null
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(target.value)) {
			errorMessage = 'Email must contain the characters "@" and "."'
		}
		setError('errorMessageEmail', errorMessage)
	}

	const onChangePassword = ({ target }) => {
		updateState('password', target.value)

		let errorMessage = null
		if (
			!/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(
				target.value
			)
		) {
			errorMessage =
				'The password should contain at least 6 characters using numbers, special.Symbols, Latin, the presence of lowercase and capital symbols.'
		}
		console.log(getState().isError)
		setError('errorMessagePassword', errorMessage)
	}

	return (
		<FormLayout
			onSubmit={onSubmit}
			onChangeEmail={onChangeEmail}
			getState={getState}
			onChangePassword={onChangePassword}
		/>
	)
}

