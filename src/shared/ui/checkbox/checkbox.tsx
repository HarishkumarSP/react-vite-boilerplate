import React from 'react';
import { Checkbox as AntCheckbox } from 'antd';
import type { CheckboxProps } from 'antd';

export interface FsCheckboxProps extends CheckboxProps {
  /**
   * Additional className for the checkbox
   */
  className?: string;
  /**
   * Additional test ID for testing
   */
  testId?: string;
}

export const FsCheckbox: React.FC<FsCheckboxProps> = ({
  className = '',
  testId,
  children,
  ...props
}) => {
  return (
    <AntCheckbox className={`fs-checkbox ${className}`} data-testid={testId} {...props}>
      {children}
    </AntCheckbox>
  );
};
