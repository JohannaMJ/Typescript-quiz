import clsx from 'clsx';
import React, { HTMLProps } from 'react';

import styles from './pageGrid.module.css';

type PageGridProps = {
	gridType?: 'full-page' | 'two-column';
} & HTMLProps<HTMLDivElement>;

const PageGrid = ({ gridType = 'two-column', ...props }: PageGridProps) => {
	const className = clsx(styles.pageGrid, {
		[styles.pageGrid_fullPage]: gridType === 'full-page',
		[styles.pageGrid_twoColumn]: gridType === 'two-column',
	});
	return <div {...props} className={className} />;
};

export default PageGrid;
