import React from 'react';
import { Card as AntCard } from 'antd';
import type { CardProps } from 'antd';

export interface FsCardProps extends CardProps {
  /**
   * Additional className for the card
   */
  className?: string;
  /**
   * Additional test ID for testing
   */
  testId?: string;
}

export const FsCard: React.FC<FsCardProps> = ({ className = '', testId, children, ...props }) => {
  return (
    <AntCard className={`fs-card ${className}`} data-testid={testId} {...props}>
      {children}
    </AntCard>
  );
};
