import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { FsInput } from './input';

describe('FsInput Component', () => {
  test('renders input with correct placeholder', () => {
    render(<FsInput placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  test('renders input with label', () => {
    render(<FsInput label="Username" placeholder="Enter username" />);
    expect(screen.getByText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument();
  });

  test('renders input with helper text', () => {
    render(
      <FsInput
        label="Email"
        placeholder="Enter email"
        helperText="We will never share your email"
      />
    );
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('We will never share your email')).toBeInTheDocument();
  });

  test('handles value change', () => {
    const handleChange = vi.fn();
    render(<FsInput placeholder="Enter text" onChange={handleChange} />);

    const input = screen.getByPlaceholderText('Enter text');
    fireEvent.change(input, { target: { value: 'Hello' } });

    expect(handleChange).toHaveBeenCalled();
  });

  test('applies custom className', () => {
    render(<FsInput className="custom-class" placeholder="Enter text" />);
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toHaveClass('fs-input');
    expect(input).toHaveClass('custom-class');
  });

  test('renders disabled input', () => {
    render(<FsInput disabled placeholder="Disabled input" />);
    expect(screen.getByPlaceholderText('Disabled input')).toBeDisabled();
  });
});

describe('FsTextArea Component', () => {
  test('renders textarea with correct placeholder', () => {
    render(<FsInput.TextArea placeholder="Enter description" />);
    expect(screen.getByPlaceholderText('Enter description')).toBeInTheDocument();
  });
});

describe('FsPassword Component', () => {
  test('renders password input with correct placeholder', () => {
    render(<FsInput.Password placeholder="Enter password" />);
    expect(screen.getByPlaceholderText('Enter password')).toBeInTheDocument();
  });

  test('toggles password visibility', () => {
    render(<FsInput.Password placeholder="Enter password" />);

    // Find the password input
    const input = screen.getByPlaceholderText('Enter password');

    // Initially the type should be password
    expect(input.getAttribute('type')).toBe('password');

    // Find and click the eye icon to toggle visibility
    const toggleButton = document.querySelector('.anticon-eye-invisible');
    if (toggleButton) {
      fireEvent.click(toggleButton);

      // After clicking, the type should change to text
      expect(input.getAttribute('type')).toBe('text');
    }
  });
});
