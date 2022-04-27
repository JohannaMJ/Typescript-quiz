import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Label from '../label/Label';
import LargeText from '../largeText/LargeText';
import LeftColumn from './';
import Logo from '../logo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/LeftColumn',
	component: LeftColumn,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof LeftColumn>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LeftColumn> = (args) => (
	<LeftColumn {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	children: (
		<>
			<Logo type='twocolumn'>Quizzzzz</Logo>
			<Label style={{ background: 'red', gridArea: 'label' }}>
				Fråga 1 av 10
			</Label>
			<LargeText
				style={{ background: 'green', height: 400, gridArea: 'question' }}
			>
				Hur mår du?
			</LargeText>
		</>
	),
};
