import { Modal as AntModal } from 'antd';
import type { ModalProps } from 'antd';

export interface FsModalProps extends ModalProps {
  /**
   * Additional test ID for testing
   */
  testId?: string;
}

export const FsModal: React.FC<FsModalProps> = ({ className = '', testId, children, ...props }) => {
  return (
    <AntModal className={`fs-modal ${className}`} data-testid={testId} {...props}>
      {children}
    </AntModal>
  );
};
