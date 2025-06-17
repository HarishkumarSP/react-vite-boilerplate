import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';
import { Avatar } from '../avatar';
import { Space } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const meta = {
  title: 'UI/Badge',
  component: Badge,
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
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    count: 5,
    children: <Avatar shape="square" size="large" />,
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
    children: <Avatar shape="square" size="large" />,
  },
};

export const WithStatus: Story = {
  render: () => (
    <Space direction="vertical">
      <Badge status="success" text="Success" />
      <Badge status="error" text="Error" />
      <Badge status="default" text="Default" />
      <Badge status="processing" text="Processing" />
      <Badge status="warning" text="Warning" />
    </Space>
  ),
};

export const WithCustomColor: Story = {
  args: {
    count: 5,
    color: '#faad14',
    children: <Avatar shape="square" size="large" />,
  },
};

export const WithOverflowCount: Story = {
  args: {
    count: 99,
    overflowCount: 10,
    children: <Avatar shape="square" size="large" />,
  },
};

export const WithOffset: Story = {
  args: {
    count: 5,
    offset: [10, 10],
    children: <Avatar shape="square" size="large" />,
  },
};

export const WithIcon: Story = {
  args: {
    count: <ClockCircleOutlined style={{ color: '#f5222d' }} />,
    children: <Avatar shape="square" size="large" />,
  },
};
