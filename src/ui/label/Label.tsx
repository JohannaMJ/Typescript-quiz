import clsx from 'clsx';
import React from 'react';

import styles from './label.module.css';

type LabelProps = {
	label: string;
};

const Label = ({ label, ...props }: LabelProps) => {
	const className = clsx(styles.label);
	return (
		<div {...props} className={className}>
			{label}
		</div>
	);
};

export default Label;
