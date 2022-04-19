import React from 'react';
import UiLink, { LinkProps as Props } from '../ui/link';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

const Link = (props: LinkProps & Props<typeof RouterLink>): JSX.Element => {
	return <UiLink component={RouterLink} {...props} />;
};

export default Link;
