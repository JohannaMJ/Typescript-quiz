import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Options from '../options/Options';
import Navigation from '../navigation/Navigation';
import RightColumn from './';
import RadioButton from '../radioButton';
import LinkComponent from '../link';
import Result from '../result';
import Button from '../button';
import Aside from '../aside';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/RightColumn',
	component: RightColumn,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof RightColumn>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RightColumn> = (args) => (
	<RightColumn {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	type: 'default',
	children: (
		<>
			<Aside>
				<Button>Reset</Button>
			</Aside>
			<Options>
				<RadioButton>Option 1</RadioButton>
				<RadioButton>Option 2</RadioButton>
				<RadioButton>Option 3</RadioButton>
				<RadioButton>Option 4</RadioButton>
			</Options>
			<Navigation>
				<LinkComponent>Föregående fråga</LinkComponent>
				<LinkComponent icon='arrow'>Nästa fråga</LinkComponent>
			</Navigation>
		</>
	),
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
	type: 'resultGrid',
	children: (
		<>
			<Result result={4} numberOfQuestions={4} />
			<Aside>
				<Button>Reset</Button>
			</Aside>
		</>
	),
};
