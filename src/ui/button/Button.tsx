import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import clsx from 'clsx';
import styles from './button.module.css';

type ButtonProps = {
	buttonType?: 'primary' | 'secondary';
	state: boolean;
} & DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;

const Button = ({
	buttonType = 'primary',
	state,
	children,
	...props
}: ButtonProps) => {
	const className = clsx(styles.button, {
		[styles.button__secondary]: buttonType === 'secondary',
		[styles.button__chosen]: buttonType === 'secondary' && state === true,
	});

	return (
		<button {...props} className={className}>
			{children}
		</button>
	);
};

export default Button;
