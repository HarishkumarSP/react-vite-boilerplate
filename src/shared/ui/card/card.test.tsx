import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FsCard } from './card';

describe('FsCard Component', () => {
  test('renders with custom className', () => {
    render(<FsCard className="custom-class">Content</FsCard>);
    const card = document.querySelector('.fs-card.custom-class');
    expect(card).toBeInTheDocument();
  });

  test('renders with testId', () => {
    const testId = 'test-card';
    render(<FsCard testId={testId}>Content</FsCard>);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  test('renders children correctly', () => {
    render(
      <FsCard>
        <div>Test Content</div>
      </FsCard>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('renders with title prop', () => {
    const title = 'Card Title';
    render(<FsCard title={title}>Content</FsCard>);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test('renders without any props', () => {
    render(<FsCard>Content</FsCard>);
    expect(document.querySelector('.fs-card')).toBeInTheDocument();
  });

  test('renders with multiple children', () => {
    render(
      <FsCard>
        <div>First Child</div>
        <div>Second Child</div>
      </FsCard>
    );
    expect(screen.getByText('First Child')).toBeInTheDocument();
    expect(screen.getByText('Second Child')).toBeInTheDocument();
  });
});
