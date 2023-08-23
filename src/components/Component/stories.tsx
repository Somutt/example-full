import { Meta, StoryFn } from '@storybook/react';
import { Component, CompProps } from '.';

export default {
  title: 'Component',
  component: Component,
  args: {
    title: 'Ola Mundo!',
  },
} as Meta;

export const Template: StoryFn<CompProps> = (args) => {
  return (
    <div>
      <Component {...args} />
    </div>
  );
};
