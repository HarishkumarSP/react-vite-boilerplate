import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Form, FormItem } from './form';

describe('Form Component', () => {
  test('renders form with custom className', () => {
    render(<Form className="custom-form" />);
    const form = document.querySelector('form');
    expect(form).toHaveClass('fs-form');
    expect(form).toHaveClass('custom-form');
  });

  test('renders form with testId', () => {
    render(<Form testId="test-form" />);
    expect(screen.getByTestId('test-form')).toBeInTheDocument();
  });

  test('renders children correctly', () => {
    render(
      <Form>
        <div>Form Content</div>
      </Form>,
    );
    expect(screen.getByText('Form Content')).toBeInTheDocument();
  });
});

describe('FormItem Component', () => {
  test('renders form item with custom className', () => {
    render(<FormItem className="custom-item" />);
    const formItem = document.querySelector('.ant-form-item');
    expect(formItem).toHaveClass('fs-form-item');
    expect(formItem).toHaveClass('custom-item');
  });

  test('renders form item with testId', () => {
    render(<FormItem testId="test-form-item" />);
    expect(screen.getByTestId('test-form-item')).toBeInTheDocument();
  });

  test('renders form item with label', () => {
    render(<FormItem label="Test Label" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  test('renders nested form items', () => {
    render(
      <Form>
        <FormItem label="Parent">
          <FormItem label="Child" />
        </FormItem>
      </Form>,
    );
    expect(screen.getByText('Parent')).toBeInTheDocument();
    expect(screen.getByText('Child')).toBeInTheDocument();
  });
});
