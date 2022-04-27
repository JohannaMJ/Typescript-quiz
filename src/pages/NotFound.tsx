import React from 'react';
import LargeText from '../ui/largeText';
import Logo from '../ui/logo';
import PageGrid from '../ui/pageGrid';
import LinkButton from '../components/LinkButton';
import Card from '../ui/card';

const NotFound = () => {
	return (
		<PageGrid gridType='full-page'>
			<Logo>Quizzz</Logo>
			<Card type='blankCard'>
				<LargeText>Page not found :(</LargeText>
				<LinkButton to='/'>Startpage</LinkButton>
			</Card>
		</PageGrid>
	);
};

export default NotFound;
