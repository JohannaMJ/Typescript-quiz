import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../App';
import { useNavigate } from 'react-router-dom';
import { fetchQuestions } from '../reducers/quiz';

const Quiz = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const name = useSelector((state: RootState) => state.user.name);
	const questions = useSelector((state: RootState) => state.quiz.questions);

	useEffect(() => {
		dispatch(fetchQuestions());
	}, [dispatch]);

	const startGame = () => {
		if (questions) {
			navigate('/quiz/0');
		}
	};

	const navigateBack = () => {
		navigate('/');
	};

	return (
		<div>
			<h1>Hi {name}!</h1>
			{name ? (
				<button onClick={startGame}>Start quiz!</button>
			) : (
				<button onClick={navigateBack}>Go back and enter your name</button>
			)}
		</div>
	);
};

export default Quiz;
