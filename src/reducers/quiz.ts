import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { uid } from 'uid';

export type Options = [string, string, string, string];

type Question = {
	id: string;
	question: string;
	options: Options;
	correctAnswer: number;
};

const questions: Question[] = [];

console.log('array of questions:', questions);

const initialState = {
	questions,
};

export const quiz = createSlice({
	name: 'quiz',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchQuestions.fulfilled, (state, action) => {
			console.log(action.payload.results);

			const questions = action.payload.results.map<Question>((result) => {
				const correctAnswer = Math.floor(
					Math.random() * result.incorrect_answers.length + 1
				);

				const options = [
					...result.incorrect_answers.slice(0, correctAnswer),
					result.correct_answer,
					...result.incorrect_answers.slice(correctAnswer),
				] as Options;

				console.log('random answer:', correctAnswer);

				return {
					id: uid(),
					question: result.question,
					options,
					correctAnswer,
				};
			});

			console.log('parsed questions', questions);
			return { ...state, questions };
		});
	},
});

type OpentdbResult = {
	question: string;
	correct_answer: string;
	incorrect_answers: [string, string, string];
};

type OpentdbResponse = {
	results: OpentdbResult[];
};

export const fetchQuestions = createAsyncThunk(
	'quiz/fetchQuestions',
	async () => {
		const response = await fetch(
			'https://opentdb.com/api.php?amount=5&type=multiple'
		);
		const data: OpentdbResponse = await response.json();

		return data;
	}
);
