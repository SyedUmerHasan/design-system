import React from 'react';
import Root from '../../../Components/Root';
import { Icon } from '../../Icon/';
import { ExceptionList } from '../index';

export default {
  title: 'Example/Atoms/ExceptionList',
  component: ExceptionList,
  argTypes: {
    size: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ title, label, icon, ...args }) => {
  let items = [{ title, label, icon }];
  return (
    <Root>
      <ExceptionList items={items} {...args} />
    </Root>
  );
};

export const Default = Template.bind({});

Default.args = {
  theme: 'special',
  title: 'Title',
  label: 'Label',
  icon: 'alert-circle-outline',
};

const Template2 = ({ title, label, icon, ...args }) => {
  let items = [{ title, label, icon }];
  return (
    <Root>
      <ExceptionList items={items} {...args} />
    </Root>
  );
};
export const LabelWithIcon = Template2.bind({});

LabelWithIcon.args = {
  theme: 'special',
  title: 'Title',
  label: 'Label',
  icon: <Icon name="reader-outline"></Icon>,
};

const Template3 = ({ title, label, icon, ...args }) => {
  let items = [{ title, label, icon }];
  return (
    <Root>
      <ExceptionList items={items} {...args} />
    </Root>
  );
};
export const LabelWithIconTitle = Template3.bind({});

LabelWithIconTitle.args = {
  theme: 'special',
  label: 'Label',
  title: 'Title',
  icon: 'reader-outline',
};
