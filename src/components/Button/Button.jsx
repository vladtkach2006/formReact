import React from 'react'
import styles from './Button.module.css'

export const Button = React.forwardRef(
	({ children, disabled, type, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={styles.button}
				type={type}
				disabled={disabled}
				{...props}
			>
				{children}
			</button>
		)
	}
)
export default Button
