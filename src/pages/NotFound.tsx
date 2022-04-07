import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div>
			<h1>PageNotFound</h1>
			<Link to='/'>Go to startpage</Link>
		</div>
	);
};

export default NotFound;
