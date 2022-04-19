import clsx from 'clsx';
import React from 'react';
import styles from './largeText.module.css';

type LargetextProps = {
	question: string;
};

const LargeText = ({ question, ...props }: LargetextProps) => {
	const className = clsx(styles.largeText);
	return (
		<p {...props} className={className}>
			{question}
		</p>
	);
};

export default LargeText;
