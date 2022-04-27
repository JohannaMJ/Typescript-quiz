import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Logo from '.';
import Button from '../button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Logo',
	component: Logo,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	type: 'fullpage',
	children: 'Quiz timez!!',
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
	type: 'twocolumn',
	children: 'Quiz timez!!',
};
