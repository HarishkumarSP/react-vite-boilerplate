import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FsTable } from './table';

// Sample data for testing
const dataSource = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
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
];

describe('FsTable Component', () => {
  test('renders table with data', () => {
    render(<FsTable dataSource={dataSource} columns={columns} />);

    // Check column headers
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
    expect(screen.getByText('Address')).toBeInTheDocument();

    // Check data rows
    expect(screen.getByText('John Brown')).toBeInTheDocument();
    expect(screen.getByText('42')).toBeInTheDocument();
    expect(screen.getByText('London')).toBeInTheDocument();
  });

  test('renders table with title', () => {
    render(<FsTable dataSource={dataSource} columns={columns} title={() => 'User List'} />);

    expect(screen.getByText('User List')).toBeInTheDocument();
  });

  test('displays loading state', () => {
    render(<FsTable dataSource={dataSource} columns={columns} loading={true} />);

    const loadingIndicator = document.querySelector('.ant-spin');
    expect(loadingIndicator).toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(<FsTable dataSource={dataSource} columns={columns} className="custom-table" />);

    const table = document.querySelector('.fs-table');
    expect(table).toHaveClass('custom-table');
  });
});
describe('FsTable Component Edge Cases', () => {
  test('renders empty table when dataSource is empty array', () => {
    render(<FsTable dataSource={[]} columns={columns} />);

    const emptyText = document.querySelector('.ant-empty-description');
    expect(emptyText).toBeInTheDocument();
  });

  test('renders table with null values in data', () => {
    const nullDataSource = [
      {
        key: '1',
        name: null,
        age: null,
        address: null,
      },
    ];
    render(<FsTable dataSource={nullDataSource} columns={columns} />);

    const cells = document.querySelectorAll('.ant-table-cell');
    expect(cells.length).toBeGreaterThan(0);
  });

  test('handles column with custom render function', () => {
    const customColumns = [
      ...columns,
      {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        render: (_: any, record: any) => `${record.name} is ${record.age}`,
      },
    ];

    render(<FsTable dataSource={dataSource} columns={customColumns} />);
    expect(screen.getByText('John Brown is 32')).toBeInTheDocument();
  });
  test('renders with pagination disabled', () => {
    render(<FsTable dataSource={dataSource} columns={columns} pagination={false} />);

    const pagination = document.querySelector('.ant-pagination');
    expect(pagination).not.toBeInTheDocument();
  });
});
