import React from 'react';
import { NumlProvider } from '../../../Elements/NumlProvider';
import RangeSlider from '../src/RangeSlider';

export default {
  title: 'Example/Atoms/RangeSlider',
  component: RangeSlider,
  argTypes: {
    size: {
      control: {
        type: 'text',
      },
    },
    min: {
      control: {
        type: 'text',
      },
    },
    max: {
      control: {
        type: 'text',
      },
    },
    value: {
      control: {
        type: 'text',
      },
    },
    step: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => (
  <NumlProvider padding="6x 2x">
    <nu-theme hue="290" saturation="75"></nu-theme>
    <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>

    <RangeSlider {...args} />
  </NumlProvider>
);

export const Default = Template.bind({});
