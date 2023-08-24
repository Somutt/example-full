import { Meta, StoryFn } from '@storybook/react';
import { Comp, CompProps } from '.';

export default {
  title: 'Comp',
  component: Comp,
  args: {
    title: 'Ola Mundo!',
  },
} as Meta;

export const Template: StoryFn<CompProps> = (args) => {
  return (
    <div>
      <Comp {...args} />
    </div>
  );
};
