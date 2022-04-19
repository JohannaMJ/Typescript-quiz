import clsx from 'clsx';
import React from 'react';
import styles from './footer.module.css';

type FooterProps = {
	children: string;
};

const Footer = ({ children, ...props }: FooterProps) => {
	const className = clsx(styles.footer);
	return (
		<div {...props} className={className}>
			<div>{children}</div>
		</div>
	);
};

export default Footer;
