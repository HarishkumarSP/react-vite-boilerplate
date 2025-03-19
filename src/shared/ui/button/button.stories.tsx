import type { Meta, StoryObj } from '@storybook/react';
import { FsButton } from './button';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';

const meta = {
  title: 'UI/Button',
  component: FsButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customized button component based on Ant Design Button.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'default', 'dashed', 'text', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'middle', 'small'],
    },
    shape: {
      control: { type: 'select' },
      options: ['default', 'circle', 'round'],
    },
    danger: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
} satisfies Meta<typeof FsButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
  },
};

export const Dashed: Story = {
  args: {
    type: 'dashed',
    children: 'Dashed Button',
  },
};

export const WithIcon: Story = {
  args: {
    type: 'primary',
    icon: <SearchOutlined />,
    children: 'Search',
  },
};

export const IconOnly: Story = {
  args: {
    type: 'primary',
    icon: <DownloadOutlined />,
    shape: 'circle',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading Button',
  },
};

export const Danger: Story = {
  args: {
    danger: true,
    children: 'Danger Button',
  },
};

export const Link: Story = {
  args: {
    type: 'link',
    children: 'Link Button',
  },
};
