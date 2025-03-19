import type { Meta, StoryObj } from '@storybook/react';
import { FsCheckbox } from './checkbox';
import { Space } from 'antd';
import { useState } from 'react';

const meta = {
  title: 'UI/Checkbox',
  component: FsCheckbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customized checkbox component based on Ant Design Checkbox.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
  },
} satisfies Meta<typeof FsCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'Checkbox',
  },
};

export const Disabled: Story = {
  render: () => (
    <Space direction="vertical">
      <FsCheckbox disabled>Disabled</FsCheckbox>
      <FsCheckbox disabled checked>
        Disabled Checked
      </FsCheckbox>
    </Space>
  ),
};

export const Controlled: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState(true);

    const onChange = (e: { target: { checked: boolean } }) => {
      setChecked(e.target.checked);
    };

    return (
      <FsCheckbox checked={checked} onChange={onChange}>
        {checked ? 'Checked' : 'Unchecked'}
      </FsCheckbox>
    );
  },
};
