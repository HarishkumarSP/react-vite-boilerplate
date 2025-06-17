import { Form as AntForm } from 'antd';
import type { FormProps as AntdFormProps, FormItemProps as AntdFormItemProps } from 'antd';

export interface FormProps extends AntdFormProps {
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

export interface FormItemProps extends AntdFormItemProps {
  /**
   * Additional className for the form item
   */
  className?: string;
  /**
   * Additional test ID for testing
   */
  testId?: string;
}

export const Form: React.FC<FormProps> = ({ className = '', testId, children, ...props }) => {
  return (
    <AntForm className={`form ${className}`} data-testid={testId} {...props}>
      {children}
    </AntForm>
  );
};

export const FormItem: React.FC<FormItemProps> = ({
  className = '',
  testId,
  children,
  ...props
}) => {
  return (
    <AntForm.Item className={`form-item ${className}`} data-testid={testId} {...props}>
      {children}
    </AntForm.Item>
  );
};
