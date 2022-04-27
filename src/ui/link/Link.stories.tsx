import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Link from './Link';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Link',
	component: Link,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Link>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	children: 'Länk',
	href: 'www.dn.se',
};

export const WithIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithIcon.args = {
	children: 'Nästa fråga',
	href: '',
	icon: 'arrow',
};
