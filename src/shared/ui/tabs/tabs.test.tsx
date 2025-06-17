import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Tabs } from './tabs';

describe('Tabs Component', () => {
  test('renders with custom className', () => {
    render(<Tabs className="custom-tabs" />);
    const tabs = document.querySelector('.fs-tabs');
    expect(tabs).toHaveClass('fs-tabs');
    expect(tabs).toHaveClass('custom-tabs');
  });

  test('renders with testId', () => {
    render(<Tabs testId="test-tabs" />);
    expect(screen.getByTestId('test-tabs')).toBeInTheDocument();
  });

  test('renders children correctly', () => {
    render(
      <Tabs>
        <Tabs.TabPane tab="Tab 1" key="1">
          Content 1
        </Tabs.TabPane>
      </Tabs>,
    );
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });

  test('renders multiple tabs', () => {
    render(
      <Tabs>
        <Tabs.TabPane tab="Tab 1" key="1">
          Content 1
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 2" key="2">
          Content 2
        </Tabs.TabPane>
      </Tabs>,
    );
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
  });

  test('renders with defaultActiveKey', () => {
    render(
      <Tabs defaultActiveKey="2">
        <Tabs.TabPane tab="Tab 1" key="1">
          Content 1
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 2" key="2">
          Content 2
        </Tabs.TabPane>
      </Tabs>,
    );
    expect(screen.getByText('Content 2')).toBeVisible();
  });

  test('renders with custom type', () => {
    render(<Tabs type="card" />);
    const tabs = document.querySelector('.ant-tabs-card');
    expect(tabs).toBeInTheDocument();
  });

  test('renders with centered tabs', () => {
    render(<Tabs centered />);
    const tabs = document.querySelector('.ant-tabs-centered');
    expect(tabs).toBeInTheDocument();
  });
});
