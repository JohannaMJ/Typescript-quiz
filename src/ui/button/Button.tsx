import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import clsx from 'clsx';
import styles from './button.module.css';

export type ButtonProps<Type extends React.ElementType> = {
	component?: Type;
} & DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;

const Button = <Type extends React.ElementType = 'button'>({
	component,
	children,
	...props
}: ButtonProps<Type> & React.ComponentPropsWithoutRef<Type>) => {
	const className = clsx(styles.button);
	const Component = component ?? 'button';

	return (
		<Component {...props} className={className}>
			{children}
		</Component>
	);
};

export default Button;
