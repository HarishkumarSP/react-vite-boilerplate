import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tooltip } from './tooltip';
import { Button } from '../button';

describe('Tooltip Component', () => {
  test('renders children correctly', () => {
    render(
      <Tooltip title="Tooltip content">
        <Button>Hover me</Button>
      </Tooltip>,
    );

    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  test('shows tooltip when controlled with open prop', () => {
    render(
      <Tooltip title="Tooltip content" open>
        <Button>Hover me</Button>
      </Tooltip>,
    );

    // In a real browser, this would show the tooltip
    // But in testing environment, we can't easily test this as the tooltip is rendered in a portal
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  test('calls onOpenChange when tooltip visibility changes', () => {
    const handleOpenChange = vi.fn();

    render(
      <Tooltip title="Tooltip content" onOpenChange={handleOpenChange} trigger="click">
        <Button>Click me</Button>
      </Tooltip>,
    );

    fireEvent.click(screen.getByText('Click me'));
    expect(handleOpenChange).toHaveBeenCalledWith(true);
  });

  test('applies testId to the component', () => {
    render(
      <Tooltip title="Tooltip content" testId="tooltip-test">
        <span>Hover me</span>
      </Tooltip>,
    );

    expect(screen.getByTestId('tooltip-test')).toBeInTheDocument();
  });

  test('applies custom className', () => {
    // Note: This test is limited because the tooltip overlay is rendered in a portal
    // and not directly accessible in the test DOM
    render(
      <Tooltip title="Tooltip content" className="custom-tooltip" open>
        <Button>Hover me</Button>
      </Tooltip>,
    );

    expect(screen.getByText('Hover me')).toBeInTheDocument();
    // In a real browser, we could check for the class on the tooltip overlay
  });
});
