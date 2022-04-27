import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Aside from './Aside';
import Button from '../button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Aside',
	component: Aside,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Aside>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Aside> = (args) => <Aside {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	children: <Button>Restart</Button>,
};
