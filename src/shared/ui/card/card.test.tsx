import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './card';

describe('Card Component', () => {
  test('renders with custom className', () => {
    render(<Card className="custom-class">Content</Card>);
    const card = document.querySelector('.fs-card.custom-class');
    expect(card).toBeInTheDocument();
  });

  test('renders with testId', () => {
    const testId = 'test-card';
    render(<Card testId={testId}>Content</Card>);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  test('renders children correctly', () => {
    render(
      <Card>
        <div>Test Content</div>
      </Card>,
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('renders with title prop', () => {
    const title = 'Card Title';
    render(<Card title={title}>Content</Card>);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test('renders without any props', () => {
    render(<Card>Content</Card>);
    expect(document.querySelector('.fs-card')).toBeInTheDocument();
  });

  test('renders with multiple children', () => {
    render(
      <Card>
        <div>First Child</div>
        <div>Second Child</div>
      </Card>,
    );
    expect(screen.getByText('First Child')).toBeInTheDocument();
    expect(screen.getByText('Second Child')).toBeInTheDocument();
  });
});
