import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../App';
import { fetchQuestions } from '../reducers/quiz';
import PageGrid from '../ui/pageGrid';
import Logo from '../ui/logo';
import LargeText from '../ui/largeText';
import LinkButton from '../components/LinkButton';
import Card from '../ui/card';
import Label from '../ui/label';

const Quiz = () => {
	const dispatch = useDispatch();
	const name = useSelector((state: RootState) => state.user.name);
	const questions = useSelector((state: RootState) => state.quiz.questions);

	useEffect(() => {
		dispatch(fetchQuestions());
	}, [dispatch]);

	return (
		<PageGrid gridType='full-page'>
			<Logo>Quizzz</Logo>
			{name ? (
				<Card type='blankCard'>
					<LargeText style={{ gridArea: 'card' }}>
						Hi {name}! Ready to quiz?
					</LargeText>
					{questions ? (
						<LinkButton to='/quiz/0'>Start</LinkButton>
					) : (
						<Label style={{ color: 'var(--darkgreen)' }}>
							Loading questions...
						</Label>
					)}
				</Card>
			) : (
				<Card>
					<LargeText>Hi!</LargeText>
					<LinkButton to='/'>Restart and enter your name!</LinkButton>
				</Card>
			)}
		</PageGrid>
	);
};

export default Quiz;
