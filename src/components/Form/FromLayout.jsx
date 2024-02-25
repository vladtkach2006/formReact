import { useEffect } from 'react'
import styles from './Form.module.css'

export default function FormLayout({
	onSubmit,
	getState,
	onChangeEmail,
	onChangePassword,
	coincidencePasswords,
	resetState,
	submitButtonRef
}) {
	const {
		email,
		password,
		repeatPassword,
		errorMessageEmail,
		errorMessagePassword,
		errorMessageRepeatPassword,
		isError
	} = getState()

	// useEffect(() => {
	// 	// Проверяем, все ли поля заполнены
	// 	if (email && password && repeatPassword && !isError) {
	// 		// Если все поля заполнены, устанавливаем фокус на кнопку Register
	// 		submitButtonRef.current.focus()
	// 	}
	// }, [email, password, repeatPassword, isError, submitButtonRef])

	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<h1>Sing up</h1>
			<label htmlFor='email'>Email</label>
			<input
				className={styles.input}
				type='email'
				name='email'
				id='email'
				value={email}
				onChange={onChangeEmail}
			/>
			{errorMessageEmail && (
				<p className={styles.errorLabel}>{errorMessageEmail}</p>
			)}
			<label htmlFor='password'>Password</label>
			<input
				className={styles.input}
				type='password'
				name='password'
				id='password'
				value={password}
				onChange={onChangePassword}
			/>
			{errorMessagePassword && (
				<p className={styles.errorLabel}>{errorMessagePassword}</p>
			)}
			<label htmlFor='repeatPassword'>Repeat password</label>
			<input
				className={styles.input}
				type='password'
				name='repeatPassword'
				id='repeatPassword'
				value={repeatPassword}
				onChange={coincidencePasswords}
			/>
			{errorMessageRepeatPassword && (
				<p className={styles.errorLabel}>{errorMessageRepeatPassword}</p>
			)}
			<button
				className={styles.buttonRegister}
				disabled={isError}
				type='submit'
				ref={submitButtonRef}
			>
				Register
			</button>
			<button
				className={styles.buttonRegister}
				type='reset'
				onClick={resetState}
			>
				Reset form
			</button>
		</form>
	)
}
