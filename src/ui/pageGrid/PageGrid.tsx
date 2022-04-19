import React from 'react';

type PageGridProps = {
	logo: string;
};

const PageGrid = ({ logo, ...props }: PageGridProps) => {
	return <div {...props}>PageGrid</div>;
};

export default PageGrid;
