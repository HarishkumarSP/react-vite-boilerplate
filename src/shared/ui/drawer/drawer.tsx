import React from 'react';
import { Drawer as AntDrawer } from 'antd';
import type { DrawerProps } from 'antd';

export interface FsDrawerProps extends DrawerProps {
  /**
   * Additional test ID for testing
   */
  testId?: string;
}

export const FsDrawer: React.FC<FsDrawerProps> = ({
  className = '',
  testId,
  children,
  ...props
}) => {
  return (
    <AntDrawer className={`fs-drawer ${className}`} data-testid={testId} {...props}>
      {children}
    </AntDrawer>
  );
};
