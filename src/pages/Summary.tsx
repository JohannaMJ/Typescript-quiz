import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../App';

const Summary = () => {
	const correctAnswers = useSelector((state: RootState) =>
		state.quiz.questions.map((question) => question.correctAnswer)
	);
	const user = useSelector((state: RootState) => state.user);
	const userAnswers = user.answers;

	const results = userAnswers.map(
		(answer, index) => answer === correctAnswers[index]
	);
	const numberOfCorrectAnswers = results.filter(
		(result) => result === true
	).length;

	console.log('correct answer aray:', correctAnswers);
	console.log('user answer array', userAnswers);
	console.log('results:', results);
	console.log("amount of user's correct answers", numberOfCorrectAnswers);

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
