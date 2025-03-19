import type { Meta, StoryObj } from '@storybook/react';
import { FsAvatar, FsAvatarProps } from './avatar';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import { Space, Tooltip } from 'antd';

const meta = {
  title: 'UI/Avatar',
  component: FsAvatar,
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
} satisfies Meta<typeof FsAvatar>;

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
  render: (args: FsAvatarProps) => <FsAvatar {...args} icon={<UserOutlined />} />,
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
      <FsAvatar size={64} icon={<UserOutlined />} />
      <FsAvatar size="large" icon={<UserOutlined />} />
      <FsAvatar icon={<UserOutlined />} />
      <FsAvatar size="small" icon={<UserOutlined />} />
    </Space>
  ),
};

export const Shapes: Story = {
  render: () => (
    <Space size={16} wrap>
      <FsAvatar shape="circle" icon={<UserOutlined />} />
      <FsAvatar shape="square" icon={<UserOutlined />} />
    </Space>
  ),
};

export const Colors: Story = {
  render: () => (
    <Space size={16} wrap>
      <FsAvatar style={{ backgroundColor: '#f56a00' }}>K</FsAvatar>
      <FsAvatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      <FsAvatar style={{ backgroundColor: '#1677ff' }}>U</FsAvatar>
      <FsAvatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>U</FsAvatar>
    </Space>
  ),
};

export const AvatarGroup: Story = {
  render: () => (
    <FsAvatar.Group
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
      <FsAvatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
      <FsAvatar style={{ backgroundColor: '#f56a00' }}>K</FsAvatar>
      <Tooltip title="User" placement="top">
        <FsAvatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </Tooltip>
      <FsAvatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
    </FsAvatar.Group>
  ),
};
