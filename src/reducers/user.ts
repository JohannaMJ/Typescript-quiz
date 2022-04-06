import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserInfo = {
	name?: string;
	answers: number[];
};

const initialState: UserInfo = {
	name: undefined,
	answers: [],
};

console.log('user info:', initialState);

export const user = createSlice({
	name: 'user',
	initialState,
	reducers: {
		saveUser: (state, action: PayloadAction<string>) => ({
			...state,
			name: action.payload,
		}),
		saveAnswer: (state, action: PayloadAction<number>) => {
			state.answers.push(action.payload);
		},
		reset: () => {
			return initialState;
		},
	},
});
