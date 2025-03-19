import React from 'react';
import { Tabs as AntTabs } from 'antd';
import type { TabsProps, TabPaneProps } from 'antd';

export interface FsTabsProps extends TabsProps {
  /**
   * Additional className for the tabs
   */
  className?: string;
  /**
   * Additional test ID for testing
   */
  testId?: string;
}

export const FsTabs: React.FC<FsTabsProps> & { TabPane: React.FC<TabPaneProps> } = ({
  className = '',
  testId,
  children,
  ...props
}) => {
  return (
    <AntTabs className={`fs-tabs ${className}`} data-testid={testId} {...props}>
      {children}
    </AntTabs>
  );
};

FsTabs.TabPane = AntTabs.TabPane;
