import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from './badge';
import { Avatar } from '../avatar';
describe('Badge Component', () => {
  test('renders badge with count', () => {
    render(
      <Badge count={5} testId="badge">
        <Avatar />
      </Badge>,
    );

    expect(screen.getByTestId('badge')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(
      <Badge count={5} className="custom-badge" testId="badge">
        <Avatar />
      </Badge>,
    );

    const badge = screen.getByTestId('badge');
    expect(badge.classList.contains('fs-badge')).toBeTruthy();
    expect(badge.classList.contains('custom-badge')).toBeTruthy();
  });
  test('renders standalone badge without children', () => {
    render(<Badge count={5} testId="badge" />);

    expect(screen.getByTestId('badge')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('renders dot badge', () => {
    render(
      <Badge dot testId="badge">
        <Avatar />
      </Badge>,
    );

    const badge = screen.getByTestId('badge');
    expect(badge).toBeInTheDocument();
    expect(badge.querySelector('.ant-badge-dot')).toBeInTheDocument();
  });

  test('renders status badge', () => {
    render(<Badge status="success" text="Success" testId="badge" />);

    const badge = screen.getByTestId('badge');
    expect(badge).toBeInTheDocument();
    expect(screen.getByText('Success')).toBeInTheDocument();
    expect(badge.querySelector('.ant-badge-status-success')).toBeInTheDocument();
  });

  test('renders badge with custom color', () => {
    render(
      <Badge count={5} color="#ff5500" testId="badge">
        <Avatar />
      </Badge>,
    );

    const badge = screen.getByTestId('badge');
    expect(badge).toBeInTheDocument();

    const badgeSupElement = badge.querySelector('.ant-badge-count');
    expect(badgeSupElement).toHaveStyle('background: #ff5500');
  });
});
