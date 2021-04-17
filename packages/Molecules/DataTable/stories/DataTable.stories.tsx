import React from 'react';
import { Link } from '../../../Atoms/Link';
import { NumlProvider } from '../../../Elements/NumlProvider';
import DataTable from '../src/DataTable';

export default {
  title: 'Example/Molecules/DataTable',
  component: DataTable,
};

const Template = ({ ...args }) => (
  <NumlProvider>
    <nu-theme hue="290" saturation="75"></nu-theme>
    <nu-theme name="secondary" hue="240" saturation="75"></nu-theme>

    <DataTable {...args} />
  </NumlProvider>
);

export const Default = Template.bind({});
Default.args = {
  fill: 'bg',
  border: '1bw',
  radius: '1x',
  size: 'sm',
  headings: ['Totals', 'Label 1', 'Label 2', 'Label 3', 'Label 4'],
  rows: [
    ['Label', '$875.00', 124689, 140, '$122,500.00'],
    ['Label', '$230.00', 124533, 83, '$19,090.00'],
    ['Label', '$445.00', 124518, 32, '$14,240.00'],
  ],
  totals: ['Totals', '', '', 255, '$155,830.00'],
  footerContent: `Showing 3 of 3 results`,
};

export const WithLinks = Template.bind({});
WithLinks.args = {
  fill: 'bg',
  border: '1bw',
  radius: '1x',
  size: 'sm',
  headings: ['Totals', 'Label 1', 'Label 2', 'Label 3', 'Label 4'],
  rows: [
    [<Link to="https://numl.design" label="Label" />, '$875.00', 124689, 140, '$122,500.00'],
    [<Link to="https://numl.design" label="Label" />, '$230.00', 124533, 83, '$19,090.00'],
    [<Link to="https://numl.design" label="Label" />, '$445.00', 124518, 32, '$14,240.00'],
  ],
  totals: ['Totals', '', '', 255, '$155,830.00'],
  footerContent: `Showing 3 of 3 results`,
};
