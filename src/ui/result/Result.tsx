import clsx from 'clsx';
import React from 'react';
import styles from './result.module.css';

type ResultProps = {
	result: number;
};

const Result = ({ result, ...props }: ResultProps) => {
	const className = clsx(styles.result);
	return (
		<div {...props} className={className}>
			{result}
		</div>
	);
};

export default Result;
