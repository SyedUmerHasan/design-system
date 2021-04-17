import React from 'react';
import { Button } from '../../../Atoms/Button';
import { NumlProvider } from '../../../Elements/NumlProvider';
import { Tooltip } from '../index';

export default {
  title: 'Example/Molecules/Tooltip',
  component: Tooltip,
  argTypes: {
    username: {
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

    <Button>
      Hover me
      <Tooltip {...args} />
    </Button>
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  padding: '1x',
  size: 'md',
  place: 'outside-right',
  description: 'This order has shipping labels.',
};
