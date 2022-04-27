import clsx from 'clsx';
import React, { HTMLProps } from 'react';
import styles from './largeText.module.css';

type LargetextType = {
	component?: React.ElementType<any>;
} & HTMLProps<HTMLParagraphElement | HTMLSpanElement>;

const LargeText = ({
	children,
	component: Component = 'p',
	...props
}: LargetextType) => {
	const className = clsx(styles.largeText);
	return (
		<Component {...props} className={className}>
			{children}
		</Component>
	);
};

export default LargeText;
