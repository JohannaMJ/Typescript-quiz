import clsx from 'clsx';
import React, { HTMLProps } from 'react';

import styles from './logo.module.css';

type LogoProps = {
	type?: 'fullpage' | 'twocolumn';
} & HTMLProps<HTMLDivElement>;

const Logo = ({ type = 'fullpage', children, ...props }: LogoProps) => {
	const className = clsx(styles.logo, {
		[styles.logo__twocolumn]: type === 'twocolumn',
	});

	const containerClassName = clsx(styles.container, {
		[styles.container__twocolumn]: type === 'twocolumn',
	});

	return (
		<div className={containerClassName}>
			<div {...props} className={className}>
				{children}
			</div>
		</div>
	);
};

export default Logo;
