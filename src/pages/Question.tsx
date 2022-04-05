import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { RootState } from '../App';
import CurrentQuestion from '../components/CurrentQuestion';

// type QuestionProps = { active: number }
// { active }: QuestionProps

const Questions = (): JSX.Element => {
	let { index } = useParams();

	const numberOfQuestions = useSelector<RootState, number>(
		(state) => state.quiz.questions.length
	);

	const indexInt = parseInt(index ?? '0', 10);

	const question = useSelector(
		(state: RootState) => state.quiz.questions[indexInt]
	);
	const name = useSelector((state: RootState) => state.user.name);

	console.log('no of questions:', numberOfQuestions);
	console.log('int', indexInt);
	console.log('question:', question);

	return (
		<div>
			<h1>{`Question: ${indexInt + 1}`}</h1>
			<h2>Questions left: {numberOfQuestions - indexInt}</h2>
			<h3>{name} is playing!</h3>
			<CurrentQuestion {...question} />
			{indexInt + 1 === numberOfQuestions ? (
				<Link to={`/summary`}> Finish quiz</Link>
			) : (
				<Link to={`/quiz/${indexInt + 1}`}> Next question</Link>
			)}
		</div>
	);
};

export default Questions;
