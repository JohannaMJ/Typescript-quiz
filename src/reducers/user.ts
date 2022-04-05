import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { quiz } from './quiz';

type UserInfo = {
	name?: string;
	answers: number[];
};

const initialState: UserInfo = {
	name: undefined,
	//hur definiera initialstate för empty array?
	answers: [],
};

console.log('user info:', initialState);

export const user = createSlice({
	name: 'user',
	initialState,
	reducers: {
		//en för att spara namn, en för att skicka in poäng
		saveUser: (state, action: PayloadAction<string>) => ({
			...state,
			name: action.payload,
		}),
		saveAnswer: (state, action: PayloadAction<number>) => {
			// const question = state.questions.find((question) => question.id === questionIndex)
			state.answers.push(action.payload);
		},
	},
});
