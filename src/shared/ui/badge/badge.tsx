import React from 'react';
import { Badge as AntBadge } from 'antd';
import type { BadgeProps as AntdBadgeProps } from 'antd';

export interface BadgeProps extends AntdBadgeProps {
  /**
   * Additional className for the badge
   */
  className?: string;
  /**
   * Additional test ID for testing
   */
  testId?: string;
}

export const Badge: React.FC<BadgeProps> = ({ className = '', testId, children, ...props }) => {
  return (
    <AntBadge className={`badge ${className}`} data-testid={testId} {...props}>
      {children}
    </AntBadge>
  );
};
