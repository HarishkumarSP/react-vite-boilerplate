import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from './checkbox';

describe('Checkbox Component', () => {
  test('renders checkbox with label', () => {
    render(<Checkbox testId="checkbox">Checkbox Label</Checkbox>);

    expect(screen.getByTestId('checkbox')).toBeInTheDocument();
    expect(screen.getByText('Checkbox Label')).toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(
      <Checkbox className="custom-checkbox" testId="checkbox">
        Checkbox Label
      </Checkbox>,
    );

    // Let's check the parent element of the testId element
    const checkboxElement = screen.getByTestId('checkbox');
    const parentElement = checkboxElement.closest('.ant-checkbox-wrapper');

    expect(parentElement).toHaveClass('fs-checkbox');
    expect(parentElement).toHaveClass('custom-checkbox');
  });

  test('handles onChange event', () => {
    const handleChange = vi.fn();

    render(
      <Checkbox onChange={handleChange} testId="checkbox">
        Checkbox Label
      </Checkbox>,
    );

    fireEvent.click(screen.getByText('Checkbox Label'));
    expect(handleChange).toHaveBeenCalled();
  });

  test('renders checked state', () => {
    render(
      <Checkbox checked testId="checkbox">
        Checkbox Label
      </Checkbox>,
    );

    // In Ant Design, the checkbox element has a class when checked
    const checkboxElement = screen.getByTestId('checkbox');
    const checkboxContainer = checkboxElement.closest('.ant-checkbox');

    expect(checkboxContainer).not.toBeNull();
    expect(checkboxContainer).toHaveClass('ant-checkbox-checked');
  });

  test('renders disabled state', () => {
    render(
      <Checkbox disabled testId="checkbox">
        Checkbox Label
      </Checkbox>,
    );

    // In Ant Design, the checkbox element has a class when disabled
    const checkboxElement = screen.getByTestId('checkbox');
    const checkboxContainer = checkboxElement.closest('.ant-checkbox');

    expect(checkboxContainer).not.toBeNull();
    expect(checkboxContainer).toHaveClass('ant-checkbox-disabled');
  });

  test('renders indeterminate state', () => {
    render(
      <Checkbox indeterminate testId="checkbox">
        Checkbox Label
      </Checkbox>,
    );

    // In Ant Design, the checkbox element has a class when indeterminate
    const checkboxElement = screen.getByTestId('checkbox');
    const checkboxContainer = checkboxElement.closest('.ant-checkbox');

    expect(checkboxContainer).not.toBeNull();
    expect(checkboxContainer).toHaveClass('ant-checkbox-indeterminate');
  });
});
