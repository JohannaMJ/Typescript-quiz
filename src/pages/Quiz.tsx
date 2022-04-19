import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../App';
import { fetchQuestions } from '../reducers/quiz';
import Link from '../components/Link';

const Quiz = () => {
	const dispatch = useDispatch();
	const name = useSelector((state: RootState) => state.user.name);
	const questions = useSelector((state: RootState) => state.quiz.questions);

	useEffect(() => {
		dispatch(fetchQuestions());
	}, [dispatch]);

	return (
		<div>
			{name ? (
				<div>
					<h1>Hi {name}!</h1>
					{questions ? (
						<Link to='/quiz/0'>Start quiz</Link>
					) : (
						<p>Loading questions...</p>
					)}
				</div>
			) : (
				<div>
					<h1>Hi!</h1>
					<Link to='/'>Restart and enter your name!</Link>
				</div>
			)}
		</div>
	);
};

export default Quiz;
