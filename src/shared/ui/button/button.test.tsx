import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('renders button with text', () => {
    render(<Button children="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button children="Click me" onClick={handleClick} />);

    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with custom className', () => {
    const { container } = render(<Button children="Styled" className="custom-class" />);
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });

  it('renders with custom style', () => {
    const { getByRole } = render(<Button children="Styled" style={{ backgroundColor: 'red' }} />);
    const buttonElement = getByRole('button');
    // When we set backgroundColor: 'red' in React, the browser converts this to the RGB value rgb(255, 0, 0)
    // when it's applied to the DOM.
    expect(buttonElement).toHaveStyle('background-color: rgb(255, 0, 0)');
  });

  it('renders as disabled', () => {
    const { getByRole } = render(<Button children="Disabled" disabled={true} />);
    const buttonElement = getByRole('button');
    expect(buttonElement).toBeDisabled();
  });

  it('renders with loading state', () => {
    const { container } = render(<Button children="Loading" loading={true} />);
    expect(container.querySelector('.ant-btn-loading')).toBeInTheDocument();
  });

  it('renders with different button types', () => {
    const { container } = render(<Button children="Primary" type="primary" />);
    expect(container.querySelector('.ant-btn-primary')).toBeInTheDocument();
  });
});
