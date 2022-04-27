import React, { HTMLProps } from 'react';

import styles from './aside.module.css';

type AsideProps = HTMLProps<HTMLDivElement>;

const Aside = ({ children, ...props }: AsideProps) => {
	return (
		<div {...props} className={styles.container}>
			{children}
		</div>
	);
};

export default Aside;
