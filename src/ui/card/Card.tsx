import clsx from 'clsx';
import React from 'react';
import styles from './card.module.css';

type CardProps = {};

const Card = (props: CardProps) => {
	const className = clsx(styles.card);
	return (
		<div {...props} className={className}>
			<div>Container for form (input &button)</div>
		</div>
	);
};

export default Card;
