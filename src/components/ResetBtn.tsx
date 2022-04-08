import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { user } from '../reducers/user';

const ResetBtn = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const restart = () => {
		dispatch(user.actions.reset());
		navigate('/');
	};

	return <button onClick={restart}>Restart</button>;
};

export default ResetBtn;
