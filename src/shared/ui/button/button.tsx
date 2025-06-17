import React from 'react';
import { Button as AntButton } from 'antd';
import type { ButtonProps as AntdButtonProps } from 'antd';

export interface ButtonProps extends AntdButtonProps {
  /**
   * Additional className for the button
   */
  className?: string;
  /**
   * Additional test ID for testing
   */
  testId?: string;
}

export const Button: React.FC<ButtonProps> = ({ className = '', testId, children, ...props }) => {
  return (
    <AntButton className={`button ${className}`} data-testid={testId} {...props}>
      {children}
    </AntButton>
  );
};
