import { Table as AntTable } from 'antd';
import type { TableProps } from 'antd';

export interface FsTableProps extends TableProps {
  /**
   * Additional test ID for testing
   */
  testId?: string;
}

export function FsTable({ className = '', testId, ...props }: FsTableProps) {
  return <AntTable className={`fs-table ${className}`} data-testId={testId} {...props} />;
}
