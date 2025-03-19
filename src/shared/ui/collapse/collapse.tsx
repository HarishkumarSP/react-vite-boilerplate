import React from 'react';
import { Collapse as AntCollapse } from 'antd';
import type { CollapseProps, CollapsePanelProps } from 'antd';

export interface FsCollapseProps extends CollapseProps {
  /**
   * Additional test ID for testing
   */
  testId?: string;
}

export interface FsCollapsePanelProps extends CollapsePanelProps {
  /**
   * Additional test ID for testing
   */
  testId?: string;
}

export const FsCollapse: React.FC<FsCollapseProps> & {
  Panel: React.FC<FsCollapsePanelProps>;
} = ({ className = '', testId, children, ...props }) => {
  return (
    <AntCollapse className={`fs-collapse ${className}`} data-testid={testId} {...props}>
      {children}
    </AntCollapse>
  );
};

const Panel: React.FC<FsCollapsePanelProps> = ({ className = '', testId, children, ...props }) => {
  return (
    <AntCollapse.Panel className={`fs-collapse-panel ${className}`} data-testid={testId} {...props}>
      {children}
    </AntCollapse.Panel>
  );
};

FsCollapse.Panel = Panel;
