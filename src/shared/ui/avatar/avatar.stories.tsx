import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarProps } from './avatar';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import { Space, Tooltip } from 'antd';

const meta = {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customized avatar component based on Ant Design Avatar.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['large', 'default', 'small'],
    },
    shape: {
      control: { type: 'select' },
      options: ['circle', 'square'],
    },
    icon: {
      control: { type: 'boolean' },
      description: 'Toggle to show icon',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    size: 'default',
    shape: 'circle',
    children: 'U',
  },
};

export const WithIcon: Story = {
  render: (args: AvatarProps) => <Avatar {...args} icon={<UserOutlined />} />,
  args: {
    size: 'default',
    shape: 'circle',
  },
};

export const WithImage: Story = {
  args: {
    size: 'default',
    shape: 'circle',
    src: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
  },
};

export const Sizes: Story = {
  render: () => (
    <Space size={16} wrap>
      <Avatar size={64} icon={<UserOutlined />} />
      <Avatar size="large" icon={<UserOutlined />} />
      <Avatar icon={<UserOutlined />} />
      <Avatar size="small" icon={<UserOutlined />} />
    </Space>
  ),
};

export const Shapes: Story = {
  render: () => (
    <Space size={16} wrap>
      <Avatar shape="circle" icon={<UserOutlined />} />
      <Avatar shape="square" icon={<UserOutlined />} />
    </Space>
  ),
};

export const Colors: Story = {
  render: () => (
    <Space size={16} wrap>
      <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      <Avatar style={{ backgroundColor: '#1677ff' }}>U</Avatar>
      <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>U</Avatar>
    </Space>
  ),
};

export const AvatarGroup: Story = {
  render: () => (
    <Avatar.Group
      max={{
        count: 2,
        popover: {
          trigger: 'click',
          style: {
            color: '#f56a00',
            backgroundColor: '#fde3cf',
            cursor: 'pointer',
          },
        },
      }}
    >
      <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
      <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
      <Tooltip title="User" placement="top">
        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Tooltip>
      <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
    </Avatar.Group>
  ),
};
