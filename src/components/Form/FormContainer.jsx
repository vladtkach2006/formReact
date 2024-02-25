import FormLayout from './FromLayout'
import { useStore } from '../../hooks/useStore'
import { useRef, useEffect } from 'react'

export default function FormContainer() {
	const { getState, updateState, resetState } = useStore()
	const submitButtonRef = useRef(null)

	useEffect(() => {
		const { email, password, repeatPassword, isError } = getState()
		const allFieldsFilled = email && password && repeatPassword && !isError
		if (allFieldsFilled) {
			submitButtonRef.current.focus()
		}
	}, [getState])

	const getFormData = formData => {
		const { email, password, repeatPassword } = formData
		console.log({ email, password, repeatPassword })
	}

	const onSubmit = event => {
		const { email, password, repeatPassword, isError } = getState()
		event.preventDefault()
		if (email && password && repeatPassword && !isError) {
			getFormData(getState())
		}
	}

	const onChangeEmail = ({ target }) => {
		updateState('email', target.value)

		let errorMessage = null
		if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(target.value)) {
			updateState('errorMessageEmail', errorMessage)
			updateState('isError', false)
		} else {
			errorMessage = 'Email must contain the characters "@" and "."'
			updateState('errorMessageEmail', errorMessage)
			updateState('isError', true)
		}
	}

	const onChangePassword = ({ target }) => {
		updateState('password', target.value)

		let errorMessage = null

		if (
			/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/.test(
				target.value
			)
		) {
			updateState('errorMessagePassword', errorMessage)
			updateState('isError', false)
		} else {
			errorMessage =
				'The password should contain at least 6 characters using numbers, special.Symbols, Latin, the presence of lowercase and capital symbols.'
			updateState('errorMessagePassword', errorMessage)
			updateState('isError', true)
		}
	}

	const coincidencePasswords = ({ target }) => {
		updateState('repeatPassword', target.value)
		const { password } = getState()
		const repeatPassword = target.value

		let errorMessage = null
		if (repeatPassword === password && repeatPassword == password) {
			updateState('errorMessageRepeatPassword', errorMessage)
			updateState('isError', false)
		} else {
			errorMessage = 'Password mismatch'
			updateState('errorMessageRepeatPassword', errorMessage)
			updateState('isError', true)
		}
	}

	return (
		<FormLayout
			onSubmit={onSubmit}
			onChangeEmail={onChangeEmail}
			getState={getState}
			onChangePassword={onChangePassword}
			coincidencePasswords={coincidencePasswords}
			resetState={resetState}
			submitButtonRef={submitButtonRef}
		/>
	)
}
