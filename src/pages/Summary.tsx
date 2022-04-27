import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../App';
import ResetBtn from '../components/ResetButton';
import Aside from '../ui/aside';
import Label from '../ui/label';
import LargeText from '../ui/largeText';
import LeftColumn from '../ui/leftColumn';
import Logo from '../ui/logo';
import PageGrid from '../ui/pageGrid';
import Result from '../ui/result';
import RightColumn from '../ui/rightColumn';

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
		<PageGrid>
			<LeftColumn>
				<Logo type='twocolumn'>Quizzzzz</Logo>

				<Label>Result</Label>
				{numberOfCorrectAnswers >= correctAnswers.length / 2 ? (
					<LargeText>Well done, {user.name}. You got </LargeText>
				) : (
					<LargeText>
						You need to practice more, {user.name}. You got{' '}
					</LargeText>
				)}
			</LeftColumn>
			<RightColumn type='resultGrid'>
				<Result
					result={numberOfCorrectAnswers}
					numberOfQuestions={correctAnswers.length}
				/>
				<Aside>
					<ResetBtn />
				</Aside>
			</RightColumn>
		</PageGrid>
	);
};

export default Summary;
