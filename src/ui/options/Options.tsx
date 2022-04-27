import React, { HTMLProps } from 'react';

import styles from './options.module.css';

type OptionsProps = HTMLProps<HTMLDivElement>;

const Options = (props: OptionsProps) => {
	return (
		<div className={styles.container}>
			<div {...props} className={styles.options} />
		</div>
	);
};

export default Options;
