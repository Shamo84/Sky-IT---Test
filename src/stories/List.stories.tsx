import React from 'react';
import { List } from './List';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'List - a list',
  component: List,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = args => <List {...args} />;

export const Default = Template.bind({});
