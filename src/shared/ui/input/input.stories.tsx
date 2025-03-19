import type { Meta, StoryObj } from '@storybook/react';
import { FsInput, FsTextAreaProps } from './input';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const meta = {
  title: 'UI/Input',
  component: FsInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customized input component based on Ant Design Input.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['large', 'middle', 'small'],
    },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    label: { control: 'text' },
    helperText: { control: 'text' },
  },
} satisfies Meta<typeof FsInput>;

export default meta;
type Story = StoryObj<typeof meta>;

type TextAreaStory = StoryObj<FsTextAreaProps>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter email',
    helperText: 'We will never share your email with anyone else.',
  },
};

export const WithIcon: Story = {
  args: {
    prefix: <UserOutlined />,
    placeholder: 'Enter username',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
    value: 'Cannot edit this',
  },
};

export const TextArea: TextAreaStory = {
  render: (args) => <FsInput.TextArea {...args} />,
  args: {
    label: 'Description',
    placeholder: 'Enter description',
  },
};

export const Password: Story = {
  render: (args) => <FsInput.Password {...args} />,
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    prefix: <LockOutlined />,
  },
};
