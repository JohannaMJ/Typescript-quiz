import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { user } from '../reducers/user';
import Button, { ButtonProps } from '../ui/button/Button';

const ResetBtn = (props: ButtonProps<'button'>) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const restart = () => {
		dispatch(user.actions.reset());
		navigate('/');
	};

	return (
		<Button onClick={restart} {...props}>
			Restart
		</Button>
	);
};

export default ResetBtn;
