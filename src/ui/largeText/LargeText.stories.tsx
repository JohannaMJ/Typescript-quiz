import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LargeText from './';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/LargeText',
	component: LargeText,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof LargeText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LargeText> = (args) => (
	<LargeText {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	question: 'vem är bäst?',
};
