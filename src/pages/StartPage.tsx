import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { user } from '../reducers/user';
import Input from '../ui/input/Input';

const StartPage = () => {
	const [name, setName] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const addName = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (name) {
			dispatch(user.actions.saveUser(name));
			setName('');
			navigate('/quiz');
		}
	};

	const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};

	return (
		<>
			<h1>Välkommen till quiz!</h1>
			<div>
				<form onSubmit={addName}>
					<Input
						// type='text'
						value={name}
						onChange={onNameChange}
						placeholder='Who is taking the test?'
						state={false}
						// required
					/>
					<button type='submit' disabled={!name}>
						Go!
					</button>
				</form>
			</div>
		</>
	);
};
export default StartPage;
