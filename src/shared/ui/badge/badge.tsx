import React from 'react';
import { Badge as AntBadge } from 'antd';
import type { BadgeProps } from 'antd';

export interface FsBadgeProps extends BadgeProps {
  /**
   * Additional className for the badge
   */
  className?: string;
  /**
   * Additional test ID for testing
   */
  testId?: string;
}

export const FsBadge: React.FC<FsBadgeProps> = ({ className = '', testId, children, ...props }) => {
  return (
    <AntBadge className={`fs-badge ${className}`} data-testid={testId} {...props}>
      {children}
    </AntBadge>
  );
};
