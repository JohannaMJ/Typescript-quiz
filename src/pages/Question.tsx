import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
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

	const nextStep = () => {
		if (answers.length === nextQuestionIndex) {
			if (nextQuestionIndex === numberOfQuestions) {
				navigate(`/summary`);
			} else {
				navigate(`/quiz/${nextQuestionIndex}`);
			}
		} else {
			alert('Choose an answer!');
		}
	};

	const previousStep = () => {
		navigate(`/quiz/${previousQuestionIndex}`);
	};

	return (
		<div>
			<h1>{`Question: ${indexInt + 1}`}</h1>
			<h2>Questions left: {numberOfQuestions - indexInt}</h2>
			<h3>{name} is playing!</h3>
			<CurrentQuestion {...question} questionIndex={indexInt} />
			{previousQuestionIndex >= 0 && (
				<button onClick={previousStep}>Previous question</button>
			)}
			{nextQuestionIndex === numberOfQuestions ? (
				<button onClick={nextStep}> Finish quiz</button>
			) : (
				<button onClick={nextStep}>Next question</button>
			)}
			<div>
				<ResetBtn />
			</div>
		</div>
	);
};

export default Questions;
