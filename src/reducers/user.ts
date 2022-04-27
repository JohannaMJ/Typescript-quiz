import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserInfo = {
	name?: string;
	answers: number[];
};

const initialState: UserInfo = {
	name: undefined,
	answers: [],
};

export const user = createSlice({
	name: 'user',
	initialState,
	reducers: {
		saveUser: (state, action: PayloadAction<string>) => ({
			...state,
			name: action.payload,
		}),
		saveAnswer: (state, action: PayloadAction<[number, number]>) => {
			const [questionIndex, answerValue] = action.payload;
			if (typeof state.answers[questionIndex] !== 'undefined') {
				state.answers[questionIndex] = answerValue;
			} else {
				state.answers.push(answerValue);
			}
		},
		reset: () => {
			return initialState;
		},
	},
});
