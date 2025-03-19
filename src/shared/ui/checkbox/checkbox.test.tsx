import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { FsCheckbox } from './checkbox';

describe('FsCheckbox Component', () => {
  test('renders checkbox with label', () => {
    render(<FsCheckbox testId="checkbox">Checkbox Label</FsCheckbox>);

    expect(screen.getByTestId('checkbox')).toBeInTheDocument();
    expect(screen.getByText('Checkbox Label')).toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(
      <FsCheckbox className="custom-checkbox" testId="checkbox">
        Checkbox Label
      </FsCheckbox>
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
      <FsCheckbox onChange={handleChange} testId="checkbox">
        Checkbox Label
      </FsCheckbox>
    );

    fireEvent.click(screen.getByText('Checkbox Label'));
    expect(handleChange).toHaveBeenCalled();
  });

  test('renders checked state', () => {
    render(
      <FsCheckbox checked testId="checkbox">
        Checkbox Label
      </FsCheckbox>
    );

    // In Ant Design, the checkbox element has a class when checked
    const checkboxElement = screen.getByTestId('checkbox');
    const checkboxContainer = checkboxElement.closest('.ant-checkbox');

    expect(checkboxContainer).not.toBeNull();
    expect(checkboxContainer).toHaveClass('ant-checkbox-checked');
  });

  test('renders disabled state', () => {
    render(
      <FsCheckbox disabled testId="checkbox">
        Checkbox Label
      </FsCheckbox>
    );

    // In Ant Design, the checkbox element has a class when disabled
    const checkboxElement = screen.getByTestId('checkbox');
    const checkboxContainer = checkboxElement.closest('.ant-checkbox');

    expect(checkboxContainer).not.toBeNull();
    expect(checkboxContainer).toHaveClass('ant-checkbox-disabled');
  });

  test('renders indeterminate state', () => {
    render(
      <FsCheckbox indeterminate testId="checkbox">
        Checkbox Label
      </FsCheckbox>
    );

    // In Ant Design, the checkbox element has a class when indeterminate
    const checkboxElement = screen.getByTestId('checkbox');
    const checkboxContainer = checkboxElement.closest('.ant-checkbox');

    expect(checkboxContainer).not.toBeNull();
    expect(checkboxContainer).toHaveClass('ant-checkbox-indeterminate');
  });
});
