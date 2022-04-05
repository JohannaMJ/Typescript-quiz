import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../App';
import { Link } from 'react-router-dom';

const Quiz = () => {
	const name = useSelector((state: RootState) => state.user.name);

	return (
		<div>
			<h1>Hi! {name}</h1>
			<Link to='/quiz/0'> Start quiz!</Link>
		</div>
	);
};

export default Quiz;
