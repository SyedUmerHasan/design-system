import React from 'react';
import { NumlProvider } from '../../../Elements/NumlProvider';
import { Radio } from '../index';

export default {
  title: 'Example/Atoms/RadioGroup',
  component: Radio.Group,
  argTypes: {
    size: {
      control: {
        type: 'text',
      },
    },
    inline: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = (args) => (
  <NumlProvider fill="black">
    <nu-theme hue="290" saturation="75"></nu-theme>
    <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>

    <Radio.Group {...args} />
  </NumlProvider>
);

export const Basic: any = Template.bind({});
Basic.args = {
  children: [
    <Radio.Field key="one" value="one">
      One
    </Radio.Field>,
    <Radio.Field key="two" value="two">
      Two
    </Radio.Field>,
  ],
};

export const Inline = Template.bind({});
Inline.args = {
  inline: true,
  children: [
    <Radio.Field key="one" value="one">
      One
    </Radio.Field>,
    <Radio.Field key="two" value="two">
      Two
    </Radio.Field>,
  ],
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  value: 'two',
  children: [
    <Radio.Field key="one" value="one">
      One
    </Radio.Field>,
    <Radio.Field key="two" value="two">
      Two
    </Radio.Field>,
  ],
};
