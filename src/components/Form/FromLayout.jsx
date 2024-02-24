import styles from './Form.module.css'

export default function FormLayout({
	onSubmit,
	getState,
	onChangeEmail,
	onChangePassword
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
				onChange={event => onChange(event, 'repeatPassword')}
			/>
			{errorMessageRepeatPassword && (
				<p className={styles.errorLabel}>{errorMessageRepeatPassword}</p>
			)}
			<button
				className={styles.buttonRegister}
				disabled={isError}
				type='submit'
			>
				Register
			</button>
		</form>
	)
}
