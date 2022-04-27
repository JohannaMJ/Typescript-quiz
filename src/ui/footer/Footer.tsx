import clsx from 'clsx';
import React, { HTMLProps } from 'react';
import styles from './footer.module.css';

type FooterProps = {} & HTMLProps<HTMLDivElement>;

const Footer = ({ ...props }: FooterProps) => {
	const className = clsx(styles.footer);
	return <div {...props} className={className} />;
};

export default Footer;
