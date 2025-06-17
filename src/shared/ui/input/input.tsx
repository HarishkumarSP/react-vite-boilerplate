import React from 'react';
import { Input as AntdInput } from 'antd';
import type { InputProps as AntdInputProps } from 'antd';
import type {
  TextAreaProps as AntdTextAreaProps,
  PasswordProps as AntdPasswordProps,
} from 'antd/es/input';

export interface InputProps extends AntdInputProps {
  /**
   * Additional test ID for testing
   */
  testId?: string;
  /**
   * Label for the input
   */
  label?: string;
  /**
   * Helper text to display below the input
   */
  helperText?: string;
}

export interface TextAreaProps extends AntdTextAreaProps {
  /**
   * Additional test ID for testing
   */
  testId?: string;
  /**
   * Label for the input
   */
  label?: string;
  /**
   * Helper text to display below the input
   */
  helperText?: string;
}
export interface PasswordProps extends InputProps, AntdPasswordProps {}

export const Input: React.FC<InputProps> & {
  TextArea: React.FC<TextAreaProps>;
} & { Password: React.FC<PasswordProps> } = ({
  className = '',
  testId,
  label,
  helperText,
  ...props
}) => {
  return (
    <div className="fs-input-wrapper">
      {label && <label className="fs-input-label">{label}</label>}
      <AntdInput className={`fs-input ${className}`} data-testid={testId} {...props} />
      {helperText && <div className="fs-input-helper-text">{helperText}</div>}
    </div>
  );
};

const TextArea: React.FC<TextAreaProps> = (props) => {
  const { label, helperText, className = '', testId, ...rest } = props;

  return (
    <div className="fs-input-wrapper">
      {label && <label className="fs-input-label">{label}</label>}
      <AntdInput.TextArea className={`fs-textarea ${className}`} data-testid={testId} {...rest} />
      {helperText && <div className="fs-input-helper-text">{helperText}</div>}
    </div>
  );
};

const Password: React.FC<InputProps> = (props) => {
  const { label, helperText, className = '', testId, ...rest } = props;

  return (
    <div className="fs-input-wrapper">
      {label && <label className="fs-input-label">{label}</label>}
      <AntdInput.Password className={`fs-password ${className}`} data-testid={testId} {...rest} />
      {helperText && <div className="fs-input-helper-text">{helperText}</div>}
    </div>
  );
};

Input.TextArea = TextArea;
Input.Password = Password;
