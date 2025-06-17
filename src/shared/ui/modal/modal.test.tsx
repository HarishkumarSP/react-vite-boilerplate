import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Modal } from './modal';

describe('Modal', () => {
  it('renders with default className', () => {
    render(<Modal open={true}>Test Content</Modal>);

    // Modal is rendered in a portal, so we need to query the document body
    const modal = document.querySelector('.ant-modal');
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveClass('fs-modal');
  });

  it('combines custom className with default className', () => {
    render(
      <Modal open={true} className="custom-class">
        Test Content
      </Modal>,
    );

    const modal = document.querySelector('.ant-modal');
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveClass('fs-modal');
    expect(modal).toHaveClass('custom-class');
  });

  it('renders with testId', () => {
    const testId = 'test-modal';
    render(
      <Modal open={true} testId={testId}>
        Test Content
      </Modal>,
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
      <Modal open={true} title={title} onOk={onOk} onCancel={onCancel}>
        Test Content
      </Modal>,
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
      <Modal open={true}>
        <div>{childContent}</div>
      </Modal>,
    );

    expect(screen.getByText(childContent)).toBeInTheDocument();
  });

  it('handles empty children', () => {
    render(<Modal open={true} />);

    const modal = document.querySelector('.ant-modal');
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveClass('fs-modal');
  });
});
