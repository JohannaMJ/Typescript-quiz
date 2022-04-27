import clsx from 'clsx';
import React, { HTMLProps } from 'react';
import styles from './card.module.css';

type CardProps = {
	type?: 'card' | 'blankCard';
} & HTMLProps<HTMLDivElement>;

const Card = ({ type = 'blankCard', ...props }: CardProps) => {
	const cardClassName = clsx(styles.blankCard, {
		[styles.card]: type === 'card',
	});
	return (
		<div className={styles.container}>
			<div {...props} className={cardClassName} />
		</div>
	);
};

export default Card;
