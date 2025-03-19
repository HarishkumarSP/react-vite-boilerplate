import React from 'react';
import { Button as AntButton } from 'antd';
import type { ButtonProps } from 'antd';

export interface FsButtonProps extends ButtonProps {
  /**
   * Additional className for the button
   */
  className?: string;
  /**
   * Additional test ID for testing
   */
  testId?: string;
}

export const FsButton: React.FC<FsButtonProps> = ({
  className = '',
  testId,
  children,
  ...props
}) => {
  return (
    <AntButton className={`fs-button ${className}`} data-testid={testId} {...props}>
      {children}
    </AntButton>
  );
};
