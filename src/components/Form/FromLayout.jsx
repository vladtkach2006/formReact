import styles from './Form.module.css'

export default function FormLayout({ onSubmit, allState }) {
	const {
		email,
		password,
		repeatPassword,
		errorMessageEmail,
		errorMessagePassword,
		errorMessageRepeatPassword
	} = allState

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
			/>
			{errorMessageEmail && (
				<p className={styles.errorLabel}>{errorMessageEmail}</p>
			)}
			<label htmlFor='email'>Password</label>
			<input
				className={styles.input}
				type='password'
				name='password'
				id='password'
				value={password}
			/>
			{errorMessagePassword && (
				<p className={styles.errorLabel}>{errorMessagePassword}</p>
			)}
			<label htmlFor='email'>Repeat password</label>
			<input
				className={styles.input}
				type='password'
				name='repeatPassword'
				id='repeatPassword'
				value={repeatPassword}
			/>
			{errorMessageRepeatPassword && (
				<p className={styles.errorLabel}>{errorMessageRepeatPassword}</p>
			)}
			<button className={styles.buttonRegister} type='submit'>
				Register
			</button>
		</form>
	)
}
