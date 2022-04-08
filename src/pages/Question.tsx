import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../App';
import CurrentQuestion from '../components/CurrentQuestion';
import ResetBtn from '../components/ResetBtn';

const Questions = () => {
	const { index } = useParams();
	const navigate = useNavigate();

	const name = useSelector((state: RootState) => state.user.name);
	const numberOfQuestions = useSelector<RootState, number>(
		(state) => state.quiz.questions.length
	);
	const answers = useSelector<RootState, number[]>(
		(state) => state.user.answers
	);

	const indexInt = parseInt(index ?? '0', 10);
	const nextQuestionIndex = indexInt + 1;
	const previousQuestionIndex = indexInt - 1;

	const question = useSelector(
		(state: RootState) => state.quiz.questions[indexInt]
	);

	return (
		<div>
			<h1>{`Question: ${indexInt + 1}`}</h1>
			<h2>Questions left: {numberOfQuestions - indexInt}</h2>
			<h3>{name} is playing!</h3>
			<CurrentQuestion {...question} questionIndex={indexInt} />
			{previousQuestionIndex >= 0 && (
				<Link to={`/quiz/${previousQuestionIndex}`}>Previous question</Link>
			)}
			{answers.length === nextQuestionIndex ? (
				<div>
					{nextQuestionIndex === numberOfQuestions ? (
						<Link to='/summary'> Finish quiz</Link>
					) : (
						<Link to={`/quiz/${nextQuestionIndex}`}>Next question</Link>
					)}
				</div>
			) : (
				<p>Choose an answer to proceed</p>
			)}

			<div>
				<ResetBtn />
			</div>
		</div>
	);
};

export default Questions;
