import React from 'react';
import Button, { ButtonProps as Props } from '../ui/button';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

const LinkButton = (
	props: LinkProps & Props<typeof RouterLink>
): JSX.Element => {
	return <Button component={RouterLink} {...props} />;
};

export default LinkButton;
