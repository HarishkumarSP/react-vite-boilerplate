import { Modal as AntModal } from 'antd';
import type { ModalProps as AntdModalProps } from 'antd';

export interface ModalProps extends AntdModalProps {
  /**
   * Additional test ID for testing
   */
  testId?: string;
}

export const Modal: React.FC<ModalProps> = ({ className = '', testId, children, ...props }) => {
  return (
    <AntModal className={`modal ${className}`} data-testid={testId} {...props}>
      {children}
    </AntModal>
  );
};
