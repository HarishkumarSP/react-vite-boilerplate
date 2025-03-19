import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FsTabs } from './tabs';

describe('FsTabs Component', () => {
  test('renders with custom className', () => {
    render(<FsTabs className="custom-tabs" />);
    const tabs = document.querySelector('.fs-tabs');
    expect(tabs).toHaveClass('fs-tabs');
    expect(tabs).toHaveClass('custom-tabs');
  });

  test('renders with testId', () => {
    render(<FsTabs testId="test-tabs" />);
    expect(screen.getByTestId('test-tabs')).toBeInTheDocument();
  });

  test('renders children correctly', () => {
    render(
      <FsTabs>
        <FsTabs.TabPane tab="Tab 1" key="1">
          Content 1
        </FsTabs.TabPane>
      </FsTabs>
    );
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });

  test('renders multiple tabs', () => {
    render(
      <FsTabs>
        <FsTabs.TabPane tab="Tab 1" key="1">
          Content 1
        </FsTabs.TabPane>
        <FsTabs.TabPane tab="Tab 2" key="2">
          Content 2
        </FsTabs.TabPane>
      </FsTabs>
    );
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
  });

  test('renders with defaultActiveKey', () => {
    render(
      <FsTabs defaultActiveKey="2">
        <FsTabs.TabPane tab="Tab 1" key="1">
          Content 1
        </FsTabs.TabPane>
        <FsTabs.TabPane tab="Tab 2" key="2">
          Content 2
        </FsTabs.TabPane>
      </FsTabs>
    );
    expect(screen.getByText('Content 2')).toBeVisible();
  });

  test('renders with custom type', () => {
    render(<FsTabs type="card" />);
    const tabs = document.querySelector('.ant-tabs-card');
    expect(tabs).toBeInTheDocument();
  });

  test('renders with centered tabs', () => {
    render(<FsTabs centered />);
    const tabs = document.querySelector('.ant-tabs-centered');
    expect(tabs).toBeInTheDocument();
  });
});
