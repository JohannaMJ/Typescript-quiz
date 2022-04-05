import { createSlice } from '@reduxjs/toolkit';

export type Options = [
	{ answer: string },
	{ answer: string },
	{ answer: string },
	{ answer: string }
];

type Question = {
	id: string;
	question: string;
	options: Options;
	correctAnswer: number;
};

const questions: Question[] = [
	//here goes an array of question object, structure example:
	{
		id: '1',
		question: 'What year is it?',
		options: [
			{ answer: '2000' },
			{ answer: '3000' },
			{ answer: '300' },
			{ answer: '2022' },
		],
		correctAnswer: 3,
	},
	{
		id: '2',
		question: 'What animal is it?',
		options: [
			{ answer: 'fish' },
			{ answer: 'mouse' },
			{ answer: 'cat' },
			{ answer: 'rhino' },
		],
		correctAnswer: 2,
	},
];

console.log('array of questions:', questions);

const initialState = {
	questions,
};

export const quiz = createSlice({
	name: 'quiz',
	initialState,
	reducers: {
		//en för att gå till nästa fråga och en för att restarta quizet
		// nextQuestion: (state: typeof Question) => {
		// 	return (state.currentQuestion += 1);
		// },
		restart: () => {
			return initialState;
		},
	},
});