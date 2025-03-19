import React from 'react';
import { Input as AntInput } from 'antd';
import type { InputProps } from 'antd';
import type { TextAreaProps, PasswordProps } from 'antd/es/input';

export interface FsInputProps extends InputProps {
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

export interface FsTextAreaProps extends TextAreaProps {
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
export interface FsPasswordProps extends FsInputProps, PasswordProps {}

export const FsInput: React.FC<FsInputProps> & {
  TextArea: React.FC<FsTextAreaProps>;
} & { Password: React.FC<FsPasswordProps> } = ({
  className = '',
  testId,
  label,
  helperText,
  ...props
}) => {
  return (
    <div className="fs-input-wrapper">
      {label && <label className="fs-input-label">{label}</label>}
      <AntInput className={`fs-input ${className}`} data-testid={testId} {...props} />
      {helperText && <div className="fs-input-helper-text">{helperText}</div>}
    </div>
  );
};

const FsTextArea: React.FC<FsTextAreaProps> = (props) => {
  const { label, helperText, className = '', testId, ...rest } = props;

  return (
    <div className="fs-input-wrapper">
      {label && <label className="fs-input-label">{label}</label>}
      <AntInput.TextArea className={`fs-textarea ${className}`} data-testid={testId} {...rest} />
      {helperText && <div className="fs-input-helper-text">{helperText}</div>}
    </div>
  );
};

const FsPassword: React.FC<FsInputProps> = (props) => {
  const { label, helperText, className = '', testId, ...rest } = props;

  return (
    <div className="fs-input-wrapper">
      {label && <label className="fs-input-label">{label}</label>}
      <AntInput.Password className={`fs-password ${className}`} data-testid={testId} {...rest} />
      {helperText && <div className="fs-input-helper-text">{helperText}</div>}
    </div>
  );
};

FsInput.TextArea = FsTextArea;
FsInput.Password = FsPassword;
