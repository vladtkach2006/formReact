import styles from './Form.module.css'
import Input from '../Input/Input'
import Button from '../Button/Button'

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

	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<h1>Sing up</h1>
			<label htmlFor='email'>Email</label>
			<Input
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
			<Input
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
			<Input
				type='password'
				name='repeatPassword'
				id='repeatPassword'
				value={repeatPassword}
				onChange={coincidencePasswords}
			/>
			{errorMessageRepeatPassword && (
				<p className={styles.errorLabel}>{errorMessageRepeatPassword}</p>
			)}
			<Button
				disabled={isError}
				type='submit'
				ref={submitButtonRef}
			>
				Register
			</Button>
			<Button
				type='reset'
				onClick={resetState}
			>
				Reset form
			</Button>
		</form>
	)
}
