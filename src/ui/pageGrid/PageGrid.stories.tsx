import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RightColumn from '../rightColumn/RightColumn';
import PageGrid from '.';
import Options from '../options';
import RadioButton from '../radioButton';
import Navigation from '../navigation';
import LinkComponent from '../link';
import LeftColumn from '../leftColumn';
import Label from '../label';
import LargeText from '../largeText';
import Footer from '../footer';
import Card from '../card';
import Input from '../input';
import Button from '../button';
import Logo from '../logo';
import Result from '../result';
import Aside from '../aside';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/PageGrid',
	component: PageGrid,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof PageGrid>;

const Template: ComponentStory<typeof PageGrid> = (args) => (
	<PageGrid {...args} />
);

export const FullPage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FullPage.args = {
	gridType: 'full-page',
	children: (
		<>
			<Logo>Quiz timez!!</Logo>
			<Card type='card'>
				<Input placeholder='Vem spelar?' />
				<Button>Starta</Button>
			</Card>
			<Footer>Quiz made by...</Footer>
		</>
	),
};

export const FullPage_Welcome = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FullPage_Welcome.args = {
	gridType: 'full-page',
	children: (
		<>
			<Logo>Quiz timez!!</Logo>
			<Card type='blankCard'>
				<LargeText>Hej ...! Ready to quiz?</LargeText>
				<Button>Start quiz</Button>
			</Card>
		</>
	),
};

export const TwoColumn = Template.bind({});
TwoColumn.args = {
	gridType: 'two-column',
	children: (
		<>
			<LeftColumn>
				<Logo type='twocolumn'>Quizzzzz</Logo>
				<Label>Fråga 1 av 10</Label>
				<LargeText>Hur mår du?</LargeText>
			</LeftColumn>
			<RightColumn type='default'>
				<Aside>
					<Button>Restart</Button>
				</Aside>
				<Options>
					<RadioButton name='test'>Option 1</RadioButton>
					<RadioButton name='test'>Option 2</RadioButton>
					<RadioButton name='test'>Option 3</RadioButton>
					<RadioButton name='test'>Option 4</RadioButton>
				</Options>
				<Navigation>
					<LinkComponent>Tillbaka</LinkComponent>
					<LinkComponent icon='arrow'>Nästa fråga</LinkComponent>
				</Navigation>
			</RightColumn>
		</>
	),
};

export const TwoColumn_ResultPage = Template.bind({});
TwoColumn_ResultPage.args = {
	gridType: 'two-column',
	children: (
		<>
			<LeftColumn>
				<Logo type='twocolumn'>Quizzzzz</Logo>
				<Label>Result</Label>
				<LargeText>Grattis! Du fick:</LargeText>
			</LeftColumn>
			<RightColumn type='resultGrid'>
				<Result result={4} numberOfQuestions={10}></Result>
				<Aside>
					<Button>Restart</Button>
				</Aside>
			</RightColumn>
		</>
	),
};
