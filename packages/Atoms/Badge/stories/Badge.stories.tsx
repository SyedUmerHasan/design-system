import React from 'react';
import Root from '../../../Components/Root';
import Badge from '../src/Badge';

export default {
  title: 'Example/Atoms/Badge',
  component: Badge,
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
        options: ['bg', 'special', 'success', 'warning', 'danger'],
      },
    },
  },
};

const DefaultTemplate = function (props) {
  const { ...otherProps } = props;
  return (
    <Root>
      <Badge {...otherProps}></Badge>
    </Root>
  );
};

export const Default = DefaultTemplate.bind({});
Default.args = {
  label: 'Neutral',
};

const WithIconTemplate = function (props) {
  const { label, ...otherProps } = props;
  return (
    <Root>
      <Badge {...otherProps} icon={props.icon}>
        <Badge.Label>{props.label}</Badge.Label>
      </Badge>
    </Root>
  );
};

export const WithIcon = WithIconTemplate.bind({});

WithIcon.args = {
  label: 'Informational',
  icon: <Badge.Icon name="alert-circle-outline"></Badge.Icon>,
};
