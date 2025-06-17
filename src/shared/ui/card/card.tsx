import React from 'react';
import { Card as AntCard } from 'antd';
import type { CardProps as AntdCardProps } from 'antd';

export interface CardProps extends AntdCardProps {
  /**
   * Additional className for the card
   */
  className?: string;
  /**
   * Additional test ID for testing
   */
  testId?: string;
}

export const Card: React.FC<CardProps> = ({ className = '', testId, children, ...props }) => {
  return (
    <AntCard className={`card ${className}`} data-testid={testId} {...props}>
      {children}
    </AntCard>
  );
};
