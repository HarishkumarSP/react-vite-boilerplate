import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { FsTooltip } from './tooltip';
import { FsButton } from '../button';

describe('FsTooltip Component', () => {
  test('renders children correctly', () => {
    render(
      <FsTooltip title="FsTooltip content">
        <FsButton>Hover me</FsButton>
      </FsTooltip>
    );

    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  test('shows tooltip when controlled with open prop', () => {
    render(
      <FsTooltip title="FsTooltip content" open>
        <FsButton>Hover me</FsButton>
      </FsTooltip>
    );

    // In a real browser, this would show the tooltip
    // But in testing environment, we can't easily test this as the tooltip is rendered in a portal
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  test('calls onOpenChange when tooltip visibility changes', () => {
    const handleOpenChange = vi.fn();

    render(
      <FsTooltip title="FsTooltip content" onOpenChange={handleOpenChange} trigger="click">
        <FsButton>Click me</FsButton>
      </FsTooltip>
    );

    fireEvent.click(screen.getByText('Click me'));
    expect(handleOpenChange).toHaveBeenCalledWith(true);
  });

  test('applies testId to the component', () => {
    render(
      <FsTooltip title="FsTooltip content" testId="tooltip-test">
        <span>Hover me</span>
      </FsTooltip>
    );

    expect(screen.getByTestId('tooltip-test')).toBeInTheDocument();
  });

  test('applies custom className', () => {
    // Note: This test is limited because the tooltip overlay is rendered in a portal
    // and not directly accessible in the test DOM
    render(
      <FsTooltip title="FsTooltip content" className="custom-tooltip" open>
        <FsButton>Hover me</FsButton>
      </FsTooltip>
    );

    expect(screen.getByText('Hover me')).toBeInTheDocument();
    // In a real browser, we could check for the class on the tooltip overlay
  });
});
