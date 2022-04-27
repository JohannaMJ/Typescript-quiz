import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { quiz } from './reducers/quiz';
import { user } from './reducers/user';

import './styles/theme.css';
import './styles/base.css';

import StartPage from './pages/StartPage';
import Quiz from './pages/Quiz';
import Question from './pages/Questions';
import Summary from './pages/Summary';
import NotFound from './pages/NotFound';

const reducer = combineReducers({
	quiz: quiz.reducer,
	user: user.reducer,
});

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<StartPage />} />
					<Route path='quiz' element={<Quiz />} />
					<Route path='quiz/:index' element={<Question />} />
					<Route path='summary' element={<Summary />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
