import React from 'react';
import Root from '../../../Elements/Root';
import { Icon } from '../../Icon';
import { MessageError } from '../index';

export default {
  title: 'Example/Atoms/MessageError',
  component: MessageError,
  argTypes: {
    size: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ children, ...args }) => (
  <Root fill="subtle">
    <nu-theme hue="290" saturation="75"></nu-theme>
    <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>
    <MessageError {...args}>{children}</MessageError>
  </Root>
);

export const Basic = Template.bind({});
Basic.args = {
  icon: 'information-circle-outline',
  children: 'This is not valid',
  theme: 'danger',
};

const Template2 = ({ children, ...args }) => (
  <Root fill="subtle">
    <nu-theme hue="290" saturation="75"></nu-theme>
    <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>
    <MessageError {...args}>{children}</MessageError>
  </Root>
);

export const WithIcon = Template2.bind({});
WithIcon.args = {
  icon: <Icon name="information-circle-outline"></Icon>,
  children: 'This is not valid',
  theme: 'danger',
};
