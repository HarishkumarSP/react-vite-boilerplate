import type { Meta, StoryObj } from '@storybook/react';
import { FsTabs } from './tabs';
import { Space } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';

const meta = {
  title: 'UI/Tabs',
  component: FsTabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customized tabs component based on Ant Design Tabs.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultActiveKey: { control: 'text' },
    activeKey: { control: 'text' },
    tabPosition: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'middle', 'large'],
    },
    type: {
      control: { type: 'select' },
      options: ['line', 'card', 'editable-card'],
    },
    centered: { control: 'boolean' },
    tabBarGutter: { control: 'number' },
  },
} satisfies Meta<typeof FsTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// Define some sample tab items for our stories
const items = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab 3',
  },
];
const disabledItems = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab 3',
    disabled: true,
  },
];

export const Basic: Story = {
  args: {
    items,
    defaultActiveKey: '1',
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      {
        key: '1',
        label: (
          <span>
            <AppleOutlined />
            Apple
          </span>
        ),
        children: 'Apple Tab Content',
      },
      {
        key: '2',
        label: (
          <span>
            <AndroidOutlined />
            Android
          </span>
        ),
        children: 'Android Tab Content',
      },
    ],
  },
};

export const withDisabled: Story = {
  args: {
    items: disabledItems,
  },
};
export const CardType: Story = {
  args: {
    items,
    type: 'card',
  },
};

export const EditableCardType: Story = {
  args: {
    type: 'editable-card',
    items: items.map((item) => ({ ...item, closable: item.key !== '1' })),
  },
};

export const TabPositions: Story = {
  render: () => (
    <Space direction="vertical" style={{ width: '100%' }}>
      <FsTabs tabPosition="top" items={items} style={{ marginBottom: 16 }} />
      <FsTabs tabPosition="left" items={items} style={{ marginBottom: 16 }} />
      <FsTabs tabPosition="right" items={items} style={{ marginBottom: 16 }} />
      <FsTabs tabPosition="bottom" items={items} />
    </Space>
  ),
};

export const Centered: Story = {
  args: {
    items,
    centered: true,
  },
};

export const SizeVariants: Story = {
  render: () => (
    <Space direction="vertical" style={{ width: '100%' }}>
      <FsTabs size="small" items={items} style={{ marginBottom: 16 }} />
      <FsTabs size="middle" items={items} style={{ marginBottom: 16 }} />
      <FsTabs size="large" items={items} />
    </Space>
  ),
};

export const WithCustomTabBar: Story = {
  args: {
    items,
    tabBarStyle: {
      color: '#1890ff',
      fontWeight: 'bold',
    },
    tabBarGutter: 30,
  },
};

export const Animated: Story = {
  args: {
    items,
    animated: { inkBar: true, tabPane: true },
  },
};

export const WithCallback: Story = {
  render: () => (
    <FsTabs
      items={items}
      defaultActiveKey="1"
      onChange={(key) => {
        console.log('Tab changed to:', key);
      }}
    />
  ),
};
