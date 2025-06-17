import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './table';
import { Tag, Space } from 'antd';
import { Button } from '../button';

const meta = {
  title: 'UI/Table',
  component: Table,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customized table component based on Ant Design Table.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    loading: { control: 'boolean' },
    title: { control: 'text' },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const dataSource = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['developer', 'frontend'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['designer'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['manager', 'backend'],
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: string[]) => (
      <>
        {tags.map((tag) => (
          <Tag color="blue" key={tag}>
            {tag}
          </Tag>
        ))}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <Button type="link" size="small">
          Edit
        </Button>
        <Button type="link" danger size="small">
          Delete
        </Button>
      </Space>
    ),
  },
];

export const Default: Story = {
  args: {
    dataSource,
    columns,
  },
};

export const WithTitle: Story = {
  args: {
    dataSource,
    columns,
    title: () => 'User List',
  },
};

export const Loading: Story = {
  args: {
    dataSource,
    columns,
    title: () => 'User List',
    loading: true,
  },
};

export const WithPagination: Story = {
  args: {
    dataSource: Array(50)
      .fill(null)
      .map((_, index) => ({
        key: String(index + 1),
        name: `User ${index + 1}`,
        age: 20 + Math.floor(Math.random() * 50),
        address: `Address ${index + 1}`,
        tags: ['tag' + ((index % 3) + 1)],
      })),
    columns,
    title: () => 'User List with Pagination',
    pagination: { pageSize: 10 },
  },
};
