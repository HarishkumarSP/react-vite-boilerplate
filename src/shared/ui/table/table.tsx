import { Table as AntTable } from 'antd';
import type { TableProps as AntdTableProps } from 'antd';

export interface TableProps extends AntdTableProps {
  /**
   * Additional test ID for testing
   */
  testId?: string;
}

export function Table({ className = '', testId, ...props }: TableProps) {
  return <AntTable className={`table ${className}`} data-testId={testId} {...props} />;
}
