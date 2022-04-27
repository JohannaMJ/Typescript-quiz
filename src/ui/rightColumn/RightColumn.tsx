import clsx from 'clsx';
import React, { HTMLProps } from 'react';

import styles from './rightColumn.module.css';

type RightColumnProps = {
	type: 'default' | 'resultGrid';
} & HTMLProps<HTMLDivElement>;

const RightColumn = ({ type = 'default', ...props }: RightColumnProps) => {
	const className = clsx(styles.rightColumn, {
		[styles.rightColumn__resultGrid]: type === 'resultGrid',
	});
	return <div {...props} className={className} />;
};

export default RightColumn;
