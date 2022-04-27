import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LinkComponent from '../link/Link';
import Navigation from './';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Navigation',
	component: Navigation,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Navigation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navigation> = (args) => (
	<Navigation {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	children: (
		<>
			<LinkComponent>Föregående fråga</LinkComponent>
			<LinkComponent icon='arrow'>Nästa fråga</LinkComponent>
		</>
	),
};
