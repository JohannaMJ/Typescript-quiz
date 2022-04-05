import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../App';
import { Options } from '../reducers/quiz';
import { user } from '../reducers/user';

interface QuestionProps {
	id: string;
	question: string;
	options: Options;
	correctAnswer: number;
}

const CurrentQuestion = ({ question, options }: QuestionProps) => {
	const dispatch = useDispatch();

	const onAnswerSubmit = (index: number) => {
		console.log('answer', index);
		dispatch(user.actions.saveAnswer(index));
	};
	return (
		<div>
			<p>{question}</p>
			{options.map((option, index) => (
				<button key={option.answer} onClick={() => onAnswerSubmit(index)}>
					{option.answer}
				</button>
			))}
			<p>{``}</p>
		</div>
	);
};

export default CurrentQuestion;
