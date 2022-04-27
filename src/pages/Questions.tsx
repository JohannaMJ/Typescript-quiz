import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../App';
import CurrentQuestion from '../components/CurrentQuestion';
import Link from '../components/Link';
import PageGrid from '../ui/pageGrid';
import LeftColumn from '../ui/leftColumn';
import Label from '../ui/label';
import LargeText from '../ui/largeText';
import Logo from '../ui/logo';
import RightColumn from '../ui/rightColumn';
import Navigation from '../ui/navigation';
import ResetButton from '../components/ResetButton';
import Aside from '../ui/aside';

const Questions = () => {
	const { index } = useParams();

	const numberOfQuestions = useSelector<RootState, number>(
		(state) => state.quiz.questions.length
	);
	const answers = useSelector<RootState, number[]>(
		(state) => state.user.answers
	);

	const indexInt = parseInt(index ?? '0', 10);
	const nextQuestionIndex = indexInt + 1;
	const previousQuestionIndex = indexInt - 1;

	console.log(indexInt, index);

	const question = useSelector(
		(state: RootState) => state.quiz.questions[indexInt]
	);

	const hasAnswer = typeof answers[indexInt] !== 'undefined';

	return (
		<PageGrid>
			<LeftColumn>
				<Logo type='twocolumn'>Quizzzzz</Logo>
				<Label>{`Question: ${indexInt + 1} / ${numberOfQuestions}`}</Label>
				<LargeText
					dangerouslySetInnerHTML={{ __html: question.question }}
				></LargeText>
			</LeftColumn>
			<RightColumn type='default'>
				<Aside>
					<ResetButton />
				</Aside>

				<CurrentQuestion {...question} questionIndex={indexInt} />
				<Navigation>
					{previousQuestionIndex >= 0 && (
						<Link to={`/quiz/${previousQuestionIndex}`}>Back</Link>
					)}
					<>
						{nextQuestionIndex === numberOfQuestions ? (
							<Link to='/summary'>See result!</Link>
						) : (
							<Link
								to={hasAnswer ? `/quiz/${nextQuestionIndex}` : ''}
								icon={hasAnswer ? 'arrow' : undefined}
							>
								{hasAnswer ? 'Next question' : 'Choose an answer'}
							</Link>
						)}
					</>
				</Navigation>
			</RightColumn>
		</PageGrid>
	);
};

export default Questions;
