import clsx from 'clsx';
import React, { HTMLProps } from 'react';

import styles from './leftColumn.module.css';

type LeftColumnProps = HTMLProps<HTMLDivElement>;

const LeftColumn = (props: LeftColumnProps) => {
	return <div {...props} className={styles.leftColumn} />;
};

export default LeftColumn;
