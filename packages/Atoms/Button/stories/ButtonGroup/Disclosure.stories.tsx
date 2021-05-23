import React from 'react';
import { ThemeProvider, NumlProvider } from '@numl-react/core';
import Button from '../../src/Button';

export default {
  title: 'Example/Atoms/ButtonGroup/Disclosure',
  component: Button.Group,
};

const Template = (args: any) => (
  <NumlProvider>
    <ThemeProvider hue="290" saturation="75" />
    <ThemeProvider name="secondary" hue="240" saturation="75" />
    <Button.Group {...args} />
  </NumlProvider>
);

export const Small: any = Template.bind({});
Small.args = {
  children: [
    <Button key="one" menu="hello" type="small">
      Left
    </Button>,
    <Button key="two" menu="hello" type="small">
      Center
    </Button>,
    <Button key="three" menu="hello" type="small">
      Right
    </Button>,
  ],
};

export const Medium: any = Template.bind({});
Medium.args = {
  children: [
    <Button key="one" menu="hello" type="medium">
      Left
    </Button>,
    <Button key="two" menu="hello" type="medium">
      Center
    </Button>,
    <Button key="three" menu="hello" type="medium">
      Right
    </Button>,
  ],
};

export const Large: any = Template.bind({});
Large.args = {
  children: [
    <Button key="one" menu="hello" type="large">
      Left
    </Button>,
    <Button key="two" menu="hello" type="large">
      Center
    </Button>,
    <Button key="three" menu="hello" type="large">
      Right
    </Button>,
  ],
};

export const ExtraLarge: any = Template.bind({});
ExtraLarge.args = {
  children: [
    <Button key="one" menu="hello" type="extralarge">
      Left
    </Button>,
    <Button key="two" menu="hello" type="extralarge">
      Center
    </Button>,
    <Button key="three" menu="hello" type="extralarge">
      Right
    </Button>,
  ],
};
