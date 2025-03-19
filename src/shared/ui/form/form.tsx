import { Form as AntForm } from 'antd';
import type { FormProps, FormItemProps } from 'antd';

export interface FsFormProps extends FormProps {
  /**
   * Additional className for the form
   */
  className?: string;
  /**
   * Additional test ID for testing
   */
  testId?: string;

  children?: React.ReactNode;
}

export interface FsFormItemProps extends FormItemProps {
  /**
   * Additional className for the form item
   */
  className?: string;
  /**
   * Additional test ID for testing
   */
  testId?: string;
}

export const FsForm: React.FC<FsFormProps> = ({ className = '', testId, children, ...props }) => {
  return (
    <AntForm className={`fs-form ${className}`} data-testid={testId} {...props}>
      {children}
    </AntForm>
  );
};

export const FsFormItem: React.FC<FsFormItemProps> = ({
  className = '',
  testId,
  children,
  ...props
}) => {
  return (
    <AntForm.Item className={`fs-form-item ${className}`} data-testid={testId} {...props}>
      {children}
    </AntForm.Item>
  );
};
