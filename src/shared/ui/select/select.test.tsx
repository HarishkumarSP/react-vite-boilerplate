import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FsSelect } from './select';

const defaultOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
];

describe('FsSelect Component', () => {
  test('renders select with correct placeholder', () => {
    render(<FsSelect placeholder="Select a fruit" options={defaultOptions} />);
    expect(screen.getByText('Select a fruit')).toBeInTheDocument();
  });

  test('renders select with label', () => {
    render(
      <FsSelect label="Favorite Fruit" placeholder="Select a fruit" options={defaultOptions} />
    );
    expect(screen.getByText('Favorite Fruit')).toBeInTheDocument();
    expect(screen.getByText('Select a fruit')).toBeInTheDocument();
  });

  test('renders select with helper text', () => {
    render(
      <FsSelect
        label="Favorite Fruit"
        placeholder="Select a fruit"
        options={defaultOptions}
        helperText="Choose your favorite fruit"
      />
    );
    expect(screen.getByText('Choose your favorite fruit')).toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(
      <FsSelect className="custom-class" placeholder="Select a fruit" options={defaultOptions} />
    );
    const selectWrapper = document.querySelector('.fs-select');
    expect(selectWrapper).toHaveClass('custom-class');
  });

  test('renders disabled select', () => {
    render(<FsSelect disabled placeholder="Disabled select" options={defaultOptions} />);
    const selectElement = document.querySelector('.ant-select-disabled');
    expect(selectElement).toBeInTheDocument();
  });
});
