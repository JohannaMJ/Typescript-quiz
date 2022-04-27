import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RadioButton from '../radioButton/RadioButton';
import Options from './';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Options',
	component: Options,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Options>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Options> = (args) => (
	<Options {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	children: (
		<>
			<RadioButton>Option 1</RadioButton>
			<RadioButton>Option 2</RadioButton>
			<RadioButton>Option 3</RadioButton>
			<RadioButton>Option 4</RadioButton>
		</>
	),
};
