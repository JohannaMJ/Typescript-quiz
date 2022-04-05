import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../App';

const Summary = () => {
	const correctAnswers = useSelector((state: RootState) =>
		state.quiz.questions.map((question) => question.correctAnswer)
	);

	console.log('summary:', correctAnswers);

	const user = useSelector((state: RootState) => state.user);

	const userAnswers = user.answers;

	console.log(userAnswers);

	const results = userAnswers.map(
		(answer, index) => answer === correctAnswers[index]
	);
	console.log('result:', results);

	const numberOfCorrectAnswers = results.filter(
		(result) => result === true
	).length;
	console.log(numberOfCorrectAnswers);

	return (
		<div>
			<h1>Summary</h1>
			<h2>Well done {user.name}!</h2>
			<p>
				You got {numberOfCorrectAnswers}/{correctAnswers.length} points!
			</p>
		</div>
	);
};

export default Summary;
