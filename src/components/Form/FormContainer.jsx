import { useState } from 'react'
import FormLayout from './FromLayout'

export default function FormContainer() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')
	const [errorMessageEmail, setErrorMessageEmail] = useState(null)
	const [errorMessagePassword, setErrorMessagePassword] = useState(null)
	const [errorMessageRepeatPassword, setErrorMessageRepeatPassword] =
		useState(null)

	const allState = {
		email,
		password,
		repeatPassword,
		errorMessageEmail,
		errorMessagePassword,
		errorMessageRepeatPassword
	}

	const onSubmit = event => {
		event.preventDefault()
	}

	return <FormLayout onSubmit={onSubmit} allState={allState} />
}
