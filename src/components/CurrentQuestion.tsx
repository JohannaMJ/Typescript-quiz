import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../App';
import { Options } from '../reducers/quiz';
import { user } from '../reducers/user';
import AnswerOptions from '../ui/options';
import RadioButton from '../ui/radioButton';

type QuestionProps = {
	id: string;
	question: string;
	options: Options;
	correctAnswer: number;
	questionIndex: number;
};

const CurrentQuestion = ({ options, questionIndex }: QuestionProps) => {
	const dispatch = useDispatch();
	const currentAnswer = useSelector<RootState, number | undefined>(
		(state) => state.user.answers[questionIndex]
	);

	const onAnswerSubmit = (optionIndex: number) => {
		dispatch(user.actions.saveAnswer([questionIndex, optionIndex]));
	};
	return (
		<AnswerOptions>
			{options.map((option, optionIndex) => (
				<RadioButton
					key={option}
					onClick={() => onAnswerSubmit(optionIndex)}
					name={`question-${questionIndex}`}
					checked={currentAnswer === optionIndex}
					readOnly
				>
					{option}
				</RadioButton>
			))}
		</AnswerOptions>
	);
};

export default CurrentQuestion;
