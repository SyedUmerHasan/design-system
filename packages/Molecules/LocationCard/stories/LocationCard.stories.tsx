import React from 'react';
import { NumlProvider } from '../../../Elements/NumlProvider';
import { LocationCard } from '../index';

export default {
  title: 'Example/Molecules/LocationCard',
  component: LocationCard,
  argTypes: {
    name: {
      control: {
        type: 'text',
      },
    },
    address: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => (
  <NumlProvider fill="black">
    <nu-theme hue="290" saturation="75"></nu-theme>
    <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>

    <LocationCard {...args} />
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  name: 'Hyderabad, Telangana',
  address: 'Gachibowli, Hyderabad, Telangana',
};
