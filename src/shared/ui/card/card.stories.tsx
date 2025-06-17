import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './card';
import { Button } from '../button';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customized card component based on Ant Design Card.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    bordered: { control: 'boolean' },
    hoverable: { control: 'boolean' },
    loading: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['default', 'small'],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'Card Title',
    bordered: true,
    style: { width: 300 },
    children: <p>Card content</p>,
  },
};

export const WithActions: Story = {
  args: {
    title: 'Card with Actions',
    style: { width: 300 },
    actions: [
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ],
    children: <p>Card content with action buttons at the bottom</p>,
  },
};

export const Loading: Story = {
  args: {
    title: 'Loading Card',
    loading: true,
    style: { width: 300 },
    children: <p>This content is not visible while loading</p>,
  },
};

export const WithExtra: Story = {
  args: {
    title: 'Card with Extra',
    extra: <Button type="link">More</Button>,
    style: { width: 300 },
    children: <p>Card content with an extra button in the header</p>,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    title: 'Small Size Card',
    style: { width: 300 },
    children: <p>A card with small size</p>,
  },
};
