import type { Meta, StoryObj } from '@storybook/react';
import { FsTree } from './tree';

const meta = {
  title: 'UI/Tree',
  component: FsTree,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customized tree component based on Ant Design Tree.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checkable: { control: 'boolean' },
    showLine: { control: 'boolean' },
    showIcon: { control: 'boolean' },
    blockNode: { control: 'boolean' },
    multiple: { control: 'boolean' },
    selectable: { control: 'boolean' },
  },
} satisfies Meta<typeof FsTree>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample tree data
const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [
          {
            title: 'leaf',
            key: '0-0-1-0',
          },
        ],
      },
    ],
  },
];

export const Basic: Story = {
  args: {
    treeData,
    defaultExpandedKeys: ['0-0', '0-0-0'],
    defaultSelectedKeys: ['0-0-0-0'],
  },
};

export const WithCheckbox: Story = {
  args: {
    treeData,
    checkable: true,
    defaultExpandedKeys: ['0-0', '0-0-0'],
    defaultSelectedKeys: ['0-0-0-0'],
    defaultCheckedKeys: ['0-0-0-0'],
  },
};

export const WithLine: Story = {
  args: {
    treeData,
    showLine: true,
    defaultExpandedKeys: ['0-0', '0-0-0'],
  },
};

export const WithIcon: Story = {
  args: {
    treeData,
    showIcon: true,
    defaultExpandedKeys: ['0-0', '0-0-0'],
  },
};
