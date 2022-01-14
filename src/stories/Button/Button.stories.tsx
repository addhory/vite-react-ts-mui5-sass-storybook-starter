import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import MuIButton from './Button';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */

  title: 'MuIButton',
  component: MuIButton,
  argTypes: {
    variant: {
      options: ['contained', 'outlined', 'text', 'dashed'],
      control: { type: 'select' },
    },

    children: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof MuIButton>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof MuIButton> = (args) => (
  <MuIButton {...args} />
);

export const Default = Template.bind({});
Default.args = { variant: undefined, children: 'MyButton' };
