import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../button/Button';
import Input from '../input/Input';

import Card from './Card';
import LargeText from '../largeText';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Card',
	component: Card,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	type: 'card',
	children: (
		<>
			<Input placeholder='Tjabba' />
			<Button>Starta</Button>
		</>
	),
};

export const BlankCard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BlankCard.args = {
	type: 'blankCard',
	children: (
		<>
			<LargeText>Hej</LargeText>
			<Button>Starta</Button>
		</>
	),
};
