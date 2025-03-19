import React from 'react';
import { Tooltip as AntTooltip } from 'antd';
import type { TooltipProps as AntTooltipProps } from 'antd';

// Define our custom props
type CustomProps = {
  /**
   * Additional test ID for testing
   */
  testId?: string;
};

// Combine the Ant Design props with our custom props
export type FsTooltipProps = AntTooltipProps & CustomProps;

/**
 * Tooltip component that wraps Ant Design's Tooltip
 */
export const FsTooltip: React.FC<FsTooltipProps> = ({
  className = '',
  testId,
  children,
  ...props
}) => {
  return (
    <AntTooltip className={`fs-tooltip-overlay ${className}`} {...props}>
      <span data-testid={testId}>{children}</span>
    </AntTooltip>
  );
};
