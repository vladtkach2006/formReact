import styles from './Input.module.css'

export default function Input({ type, name, id, value, onChange }) {
	return (
		<input
			className={styles.input}
			type={type}
			name={name}
			id={id}
			value={value}
			onChange={onChange}
		/>
	)
}
