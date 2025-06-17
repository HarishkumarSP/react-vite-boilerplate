import React from 'react';
import { Tabs as AntTabs } from 'antd';
import type { TabsProps as AntdTabsProps, TabPaneProps as AntdTabPaneProps } from 'antd';

export interface TabsProps extends AntdTabsProps {
  /**
   * Additional className for the tabs
   */
  className?: string;
  /**
   * Additional test ID for testing
   */
  testId?: string;
}

export const Tabs: React.FC<TabsProps> & {
  TabPane: React.FC<AntdTabPaneProps>;
} = ({ className = '', testId, children, ...props }) => {
  return (
    <AntTabs className={`tabs ${className}`} data-testid={testId} {...props}>
      {children}
    </AntTabs>
  );
};

Tabs.TabPane = AntTabs.TabPane;
