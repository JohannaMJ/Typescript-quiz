import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { RootState } from '../App';
import CurrentQuestion from '../components/CurrentQuestion';

const Questions = (): JSX.Element => {
	const { index } = useParams();

	const numberOfQuestions = useSelector<RootState, number>(
		(state) => state.quiz.questions.length
	);

	const indexInt = parseInt(index ?? '0', 10);
	const nextQuestionIndex = indexInt + 1;
	const previousQuestionIndex = indexInt - 1;

	const question = useSelector(
		(state: RootState) => state.quiz.questions[indexInt]
	);
	const name = useSelector((state: RootState) => state.user.name);

	return (
		<div>
			<h1>{`Question: ${indexInt + 1}`}</h1>
			<h2>Questions left: {numberOfQuestions - indexInt}</h2>
			<h3>{name} is playing!</h3>
			<CurrentQuestion {...question} />
			{/* logiken för att displaya previous question kräver logik för att inte kunna välja ett nytt svarsalternativ om man har gått tillbaka till en fråga man redan svarat på, annars blir användarens svarsarray längre än den med korrekta savar */}
			{previousQuestionIndex >= 0 && (
				<Link to={`/quiz/${previousQuestionIndex}`}> Previous question</Link>
			)}
			{nextQuestionIndex === numberOfQuestions ? (
				<Link to={`/summary`}> Finish quiz</Link>
			) : (
				<Link to={`/quiz/${nextQuestionIndex}`}> Next question</Link>
			)}
		</div>
	);
};

export default Questions;
