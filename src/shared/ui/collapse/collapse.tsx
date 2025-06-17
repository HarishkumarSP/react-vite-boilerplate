import React from 'react';
import { Collapse as AntCollapse } from 'antd';
import type {
  CollapseProps as AntdCollapseProps,
  CollapsePanelProps as AntdCollapsePanelProps,
} from 'antd';

export interface CollapseProps extends AntdCollapseProps {
  /**
   * Additional test ID for testing
   */
  testId?: string;
}

export interface CollapsePanelProps extends AntdCollapsePanelProps {
  /**
   * Additional test ID for testing
   */
  testId?: string;
}

export const Collapse: React.FC<CollapseProps> & {
  Panel: React.FC<CollapsePanelProps>;
} = ({ className = '', testId, children, ...props }) => {
  return (
    <AntCollapse className={`fs-collapse ${className}`} data-testid={testId} {...props}>
      {children}
    </AntCollapse>
  );
};

const Panel: React.FC<CollapsePanelProps> = ({ className = '', testId, children, ...props }) => {
  return (
    <AntCollapse.Panel className={`fs-collapse-panel ${className}`} data-testid={testId} {...props}>
      {children}
    </AntCollapse.Panel>
  );
};

Collapse.Panel = Panel;
