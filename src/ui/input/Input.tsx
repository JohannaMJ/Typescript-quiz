import React, { HTMLProps } from 'react';
import clsx from 'clsx';
import styles from './input.module.css';

type InputProps = {
	error?: boolean;
} & HTMLProps<HTMLInputElement>;

const Input = ({ error, ...props }: InputProps) => {
	console.log(props);
	const className = clsx(styles.input, {
		[styles.input__error]: error,
	});
	return <input type='text' {...props} className={className} />;
};

export default Input;
