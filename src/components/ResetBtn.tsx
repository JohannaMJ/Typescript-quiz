import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { user } from '../reducers/user';
import Button from '../ui/button/Button';

const ResetBtn = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const restart = () => {
		dispatch(user.actions.reset());
		navigate('/');
	};

	return (
		<Button onClick={restart} state={false}>
			Restart
		</Button>
	);
};

export default ResetBtn;
