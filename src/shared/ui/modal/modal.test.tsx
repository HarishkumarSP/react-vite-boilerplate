import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { FsModal } from './modal';

describe('FsModal', () => {
  it('renders with default className', () => {
    render(<FsModal open={true}>Test Content</FsModal>);

    // Modal is rendered in a portal, so we need to query the document body
    const modal = document.querySelector('.ant-modal');
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveClass('fs-modal');
  });

  it('combines custom className with default className', () => {
    render(
      <FsModal open={true} className="custom-class">
        Test Content
      </FsModal>
    );

    const modal = document.querySelector('.ant-modal');
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveClass('fs-modal');
    expect(modal).toHaveClass('custom-class');
  });

  it('renders with testId', () => {
    const testId = 'test-modal';
    render(
      <FsModal open={true} testId={testId}>
        Test Content
      </FsModal>
    );

    // Use document.querySelector instead of getByTestId because the modal is in a portal
    const modal = document.querySelector(`[data-testid="${testId}"]`);
    expect(modal).toBeInTheDocument();
  });

  it('passes through AntModal props correctly', () => {
    const onOk = vi.fn();
    const onCancel = vi.fn();
    const title = 'Modal Title';

    render(
      <FsModal open={true} title={title} onOk={onOk} onCancel={onCancel}>
        Test Content
      </FsModal>
    );

    // Check title
    expect(screen.getByText(title)).toBeInTheDocument();

    // Click OK button
    fireEvent.click(screen.getByText('OK'));
    expect(onOk).toHaveBeenCalled();

    // Click Cancel button
    fireEvent.click(screen.getByText('Cancel'));
    expect(onCancel).toHaveBeenCalled();
  });

  it('renders children content correctly', () => {
    const childContent = 'Child Content Test';
    render(
      <FsModal open={true}>
        <div>{childContent}</div>
      </FsModal>
    );

    expect(screen.getByText(childContent)).toBeInTheDocument();
  });

  it('handles empty children', () => {
    render(<FsModal open={true} />);

    const modal = document.querySelector('.ant-modal');
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveClass('fs-modal');
  });
});
