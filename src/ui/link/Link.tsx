import React from 'react';
import clsx from 'clsx';
import styles from './link.module.css';

export type LinkProps<Type extends React.ElementType> = {
	component?: Type;
	icon?: 'arrow';
};

const LinkComponent = <Type extends React.ElementType = 'a'>({
	component,
	children,
	icon,
	...props
}: LinkProps<Type> & React.ComponentPropsWithoutRef<Type>) => {
	const className = clsx(styles.link, {
		[styles.link__with_arrow]: icon === 'arrow',
	});
	const Component = component ?? 'a';
	return (
		<Component {...props} className={className}>
			{children}
		</Component>
	);
};

export default LinkComponent;
