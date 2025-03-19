import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FsBadge } from './badge';
import { FsAvatar } from '../avatar';
describe('FsBadge Component', () => {
  test('renders badge with count', () => {
    render(
      <FsBadge count={5} testId="badge">
        <FsAvatar />
      </FsBadge>
    );

    expect(screen.getByTestId('badge')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(
      <FsBadge count={5} className="custom-badge" testId="badge">
        <FsAvatar />
      </FsBadge>
    );

    const badge = screen.getByTestId('badge');
    expect(badge.classList.contains('fs-badge')).toBeTruthy();
    expect(badge.classList.contains('custom-badge')).toBeTruthy();
  });
  test('renders standalone badge without children', () => {
    render(<FsBadge count={5} testId="badge" />);

    expect(screen.getByTestId('badge')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('renders dot badge', () => {
    render(
      <FsBadge dot testId="badge">
        <FsAvatar />
      </FsBadge>
    );

    const badge = screen.getByTestId('badge');
    expect(badge).toBeInTheDocument();
    expect(badge.querySelector('.ant-badge-dot')).toBeInTheDocument();
  });

  test('renders status badge', () => {
    render(<FsBadge status="success" text="Success" testId="badge" />);

    const badge = screen.getByTestId('badge');
    expect(badge).toBeInTheDocument();
    expect(screen.getByText('Success')).toBeInTheDocument();
    expect(badge.querySelector('.ant-badge-status-success')).toBeInTheDocument();
  });

  test('renders badge with custom color', () => {
    render(
      <FsBadge count={5} color="#ff5500" testId="badge">
        <FsAvatar />
      </FsBadge>
    );

    const badge = screen.getByTestId('badge');
    expect(badge).toBeInTheDocument();

    const badgeSupElement = badge.querySelector('.ant-badge-count');
    expect(badgeSupElement).toHaveStyle('background: #ff5500');
  });
});
