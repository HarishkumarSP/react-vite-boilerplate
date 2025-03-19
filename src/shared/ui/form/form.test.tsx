import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FsForm, FsFormItem } from './form';

describe('FsForm Component', () => {
  test('renders form with custom className', () => {
    render(<FsForm className="custom-form" />);
    const form = document.querySelector('form');
    expect(form).toHaveClass('fs-form');
    expect(form).toHaveClass('custom-form');
  });

  test('renders form with testId', () => {
    render(<FsForm testId="test-form" />);
    expect(screen.getByTestId('test-form')).toBeInTheDocument();
  });

  test('renders children correctly', () => {
    render(
      <FsForm>
        <div>Form Content</div>
      </FsForm>
    );
    expect(screen.getByText('Form Content')).toBeInTheDocument();
  });
});

describe('FsFormItem Component', () => {
  test('renders form item with custom className', () => {
    render(<FsFormItem className="custom-item" />);
    const formItem = document.querySelector('.ant-form-item');
    expect(formItem).toHaveClass('fs-form-item');
    expect(formItem).toHaveClass('custom-item');
  });

  test('renders form item with testId', () => {
    render(<FsFormItem testId="test-form-item" />);
    expect(screen.getByTestId('test-form-item')).toBeInTheDocument();
  });

  test('renders form item with label', () => {
    render(<FsFormItem label="Test Label" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  test('renders nested form items', () => {
    render(
      <FsForm>
        <FsFormItem label="Parent">
          <FsFormItem label="Child" />
        </FsFormItem>
      </FsForm>
    );
    expect(screen.getByText('Parent')).toBeInTheDocument();
    expect(screen.getByText('Child')).toBeInTheDocument();
  });
});
