import React, { ChangeEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PageGrid from '.';
import Input from '../input/Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/PageGrid',
	component: PageGrid,
	subcomponents: { Input },
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof PageGrid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const TemplateFull: ComponentStory<typeof PageGrid> = (args) => (
// 	<PageGrid {...args}>
// 		<Input
// 			onChange={function (event: ChangeEvent<HTMLInputElement>): void {
// 				throw new Error('Function not implemented.');
// 			}}
// 			state={false}
// 		/>
// 	</PageGrid>
// );

// const TemplateGrid: ComponentStory<typeof PageGrid> = (args) => (
// 	<PageGrid {...args} />
// );

const Template: ComponentStory<typeof PageGrid> = (args) => (
	<PageGrid {...args} />
);

export const FullPage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FullPage.args = {
	logo: '',
};

export const TwoColumn = Template.bind({});
TwoColumn.args = {
	logo: '',
};
