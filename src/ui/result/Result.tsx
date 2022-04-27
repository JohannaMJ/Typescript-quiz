import clsx from 'clsx';
import React from 'react';
import LargeText from '../largeText';
import styles from './result.module.css';

type ResultProps = {
	result: number;
	numberOfQuestions: number;
};

const Result = ({ result, numberOfQuestions, ...props }: ResultProps) => {
	const className = clsx(styles.result);
	return (
		<p {...props} className={className}>
			{result}
			<LargeText component='span'>av {numberOfQuestions}</LargeText>
		</p>
	);
};

export default Result;
