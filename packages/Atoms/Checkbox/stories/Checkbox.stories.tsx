import React from 'react';
import * as El from '@numl-react/elements';
import Checkbox from '../src/Checkbox';

export default {
  title: 'Example/Atoms/Checkbox/Themes',
  component: Checkbox,
};

const Template = ({ children, ...args }) => (
  <El.NumlProvider>
    <El.ThemeProvider hue="290" saturation="75" />
    <El.ThemeProvider name="secondary" hue="240" saturation="75" />
    <Checkbox {...args} />
    <Checkbox checked {...args} />
    <Checkbox disabled {...args} />
    <Checkbox checked disabled {...args} />
  </El.NumlProvider>
);

export const Default: any = Template.bind({});
Default.args = {
  label: 'Hello World!',
  theme: 'default',
};

export const Danger: any = Template.bind({});
Danger.args = {
  label: 'Hello World!',
  theme: 'danger',
};
