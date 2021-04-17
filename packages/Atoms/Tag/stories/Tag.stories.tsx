import React from 'react';
import { NumlProvider } from '../../../Elements/NumlProvider';
import { Tag } from '../index';

export default {
  title: 'Example/Atoms/Tag',
  component: Tag,
  argTypes: {
    size: {
      control: {
        type: 'text',
      },
    },
    theme: {
      defaultValue: 'special',
      control: {
        type: 'select',
        options: ['special', 'success', 'warning', 'danger'],
      },
    },
    deletable: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = ({ ...args }) => (
  <NumlProvider fill="black">
    <nu-theme hue="290" saturation="75"></nu-theme>
    <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>
    {<Tag {...args} />}
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Neutral',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  deletable: true,
  label: 'Informational',
};
