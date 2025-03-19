import type { Meta, StoryObj } from '@storybook/react';
import { FsBadge } from './badge';
import { FsAvatar } from '../avatar';
import { Space } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const meta = {
  title: 'UI/Badge',
  component: FsBadge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customized badge component based on Ant Design Badge.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    count: { control: 'number' },
    showZero: { control: 'boolean' },
    overflowCount: { control: 'number' },
    dot: { control: 'boolean' },
    status: {
      control: { type: 'select' },
      options: ['success', 'processing', 'default', 'error', 'warning'],
    },
    color: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['default', 'small'],
    },
  },
} satisfies Meta<typeof FsBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    count: 5,
    children: <FsAvatar shape="square" size="large" />,
  },
};

export const StandaloneBadge: Story = {
  args: {
    count: 25,
  },
};

export const WithDot: Story = {
  args: {
    dot: true,
    children: <FsAvatar shape="square" size="large" />,
  },
};

export const WithStatus: Story = {
  render: () => (
    <Space direction="vertical">
      <FsBadge status="success" text="Success" />
      <FsBadge status="error" text="Error" />
      <FsBadge status="default" text="Default" />
      <FsBadge status="processing" text="Processing" />
      <FsBadge status="warning" text="Warning" />
    </Space>
  ),
};

export const WithCustomColor: Story = {
  args: {
    count: 5,
    color: '#faad14',
    children: <FsAvatar shape="square" size="large" />,
  },
};

export const WithOverflowCount: Story = {
  args: {
    count: 99,
    overflowCount: 10,
    children: <FsAvatar shape="square" size="large" />,
  },
};

export const WithOffset: Story = {
  args: {
    count: 5,
    offset: [10, 10],
    children: <FsAvatar shape="square" size="large" />,
  },
};

export const WithIcon: Story = {
  args: {
    count: <ClockCircleOutlined style={{ color: '#f5222d' }} />,
    children: <FsAvatar shape="square" size="large" />,
  },
};
