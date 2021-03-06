import React from 'react';
import { useDispatch } from 'react-redux';
import { Options } from '../reducers/quiz';
import { user } from '../reducers/user';

type QuestionProps = {
	id: string;
	question: string;
	options: Options;
	correctAnswer: number;
	questionIndex: number;
};

const CurrentQuestion = ({
	question,
	options,
	questionIndex,
}: QuestionProps) => {
	const dispatch = useDispatch();

	const onAnswerSubmit = (index: number) => {
		console.log('answer', index);
		dispatch(user.actions.saveAnswer([questionIndex, index]));
	};
	return (
		<div>
			<p dangerouslySetInnerHTML={{ __html: question }}></p>
			{options.map((option, index) => (
				<button
					key={option}
					onClick={() => onAnswerSubmit(index)}
					dangerouslySetInnerHTML={{ __html: option }}
				></button>
			))}
		</div>
	);
};

export default CurrentQuestion;
