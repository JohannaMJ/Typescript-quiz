import clsx from 'clsx';
import React, { HTMLProps } from 'react';

import styles from './label.module.css';

type LabelProps = {} & HTMLProps<HTMLHeadingElement>;

const Label = ({ children, ...props }: LabelProps) => {
	const className = clsx(styles.label);
	return (
		<h2 {...props} className={className}>
			{children}
		</h2>
	);
};

export default Label;
