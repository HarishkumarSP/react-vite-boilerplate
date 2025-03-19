import React from 'react';
import { Tree as AntTree } from 'antd';
import type { TreeProps } from 'antd';

export interface FsTreeProps extends TreeProps {
  /**
   * Additional className for the tree
   */
  className?: string;
  /**
   * Additional test ID for testing
   */
  testId?: string;
}

export const FsTree: React.FC<FsTreeProps> = ({ className = '', testId, ...props }) => {
  return <AntTree className={`fs-tree ${className}`} data-testid={testId} {...props} />;
};
