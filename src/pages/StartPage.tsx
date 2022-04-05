import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../App';
import { user } from '../reducers/user';

const StartPage = () => {
	const [name, setName] = useState('');
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	const addName = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (name) {
			dispatch(user.actions.saveUser(name));
			setName('');
			navigate('/quiz');
		} else {
			alert('Write your name to take the test :)');
		}
	};

	const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};
	console.log('name', name);
	return (
		<>
			<h1>Välkommen till quiz!</h1>
			<form onSubmit={addName}>
				<input
					type='text'
					value={name}
					onChange={onNameChange}
					placeholder='Who is taking the test?'
					// required
				/>
				<button type='submit'>Go!</button>
			</form>
		</>
	);
};
export default StartPage;
