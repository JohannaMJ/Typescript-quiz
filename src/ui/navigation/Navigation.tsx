import React, { HTMLProps } from 'react';
import styles from './navigation.module.css';

type NavigationProps = HTMLProps<HTMLDivElement>;

const Navigation = (props: NavigationProps) => {
	return <div {...props} className={styles.navigation} />;
};

export default Navigation;
