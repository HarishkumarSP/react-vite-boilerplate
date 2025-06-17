import React from 'react';
import { Checkbox as AntCheckbox } from 'antd';
import type { CheckboxProps as AntdCheckboxProps } from 'antd';

export interface CheckboxProps extends AntdCheckboxProps {
  /**
   * Additional className for the checkbox
   */
  className?: string;
  /**
   * Additional test ID for testing
   */
  testId?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  className = '',
  testId,
  children,
  ...props
}) => {
  return (
    <AntCheckbox className={`checkbox ${className}`} data-testid={testId} {...props}>
      {children}
    </AntCheckbox>
  );
};
