import React from 'react';
import { Drawer as AntDrawer } from 'antd';
import type { DrawerProps as AntdDrawerProps } from 'antd';

export interface DrawerProps extends AntdDrawerProps {
  /**
   * Additional test ID for testing
   */
  testId?: string;
}

export const Drawer: React.FC<DrawerProps> = ({ className = '', testId, children, ...props }) => {
  return (
    <AntDrawer className={`drawer ${className}`} data-testid={testId} {...props}>
      {children}
    </AntDrawer>
  );
};
