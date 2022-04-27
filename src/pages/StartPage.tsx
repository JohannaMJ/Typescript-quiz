import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { user } from '../reducers/user';
import Button from '../ui/button';
import Card from '../ui/card';
import Footer from '../ui/footer';
import Input from '../ui/input/Input';
import Logo from '../ui/logo';
import PageGrid from '../ui/pageGrid';

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
		} else {
			Swal.fire('Enter name to play!');
		}
	};

	const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};

	return (
		<form onSubmit={addName}>
			<PageGrid gridType='full-page'>
				<Logo>Welcome to quiz!</Logo>
				<Card type='card'>
					<Input
						value={name}
						onChange={onNameChange}
						placeholder='Who is about to play?'
					/>
					<Button type='submit'>Go!</Button>
				</Card>
				<Footer>Quiz made by Johanna, with a lot of help from Johan 👯‍♀️</Footer>
			</PageGrid>
		</form>
	);
};
export default StartPage;
