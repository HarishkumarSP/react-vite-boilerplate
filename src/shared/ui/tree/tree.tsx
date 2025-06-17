import React from 'react';
import { Tree as AntTree } from 'antd';
import type { TreeProps as AntdTreeProps } from 'antd';

export interface TreeProps extends AntdTreeProps {
  /**
   * Additional className for the tree
   */
  className?: string;
  /**
   * Additional test ID for testing
   */
  testId?: string;
}

export const Tree: React.FC<TreeProps> = ({ className = '', testId, ...props }) => {
  return <AntTree className={`tree ${className}`} data-testid={testId} {...props} />;
};
