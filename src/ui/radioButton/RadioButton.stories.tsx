import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RadioButton from './';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/RadioButton',
	component: RadioButton,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof RadioButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RadioButton> = (args) => (
	<RadioButton {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	children: 'Option 1 - 4',
};