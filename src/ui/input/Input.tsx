import React, { ChangeEventHandler } from 'react';
import clsx from 'clsx';
import styles from './input.module.css';

type InputProps = {
	value?: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	placeholder?: string;
	state: boolean;
};

const Input = ({ placeholder, value, state, ...props }: InputProps) => {
	console.log(placeholder);
	const className = clsx(styles.input, {
		[styles.input__error]: state === true,
	});
	return (
		<>
			<input
				type='text'
				{...props}
				className={className}
				placeholder={placeholder}
			/>
		</>
	);
};

export default Input;
