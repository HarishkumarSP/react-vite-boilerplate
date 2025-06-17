import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Drawer } from './drawer';

describe('Drawer Component', () => {
  test('renders with custom className', () => {
    render(
      <Drawer className="custom-class" open>
        Content
      </Drawer>,
    );
    const drawer = document.querySelector('.fs-drawer.custom-class');
    expect(drawer).toBeInTheDocument();
  });

  test('renders with testId', () => {
    render(
      <Drawer testId="test-drawer" open>
        Content
      </Drawer>,
    );
    expect(screen.getByTestId('test-drawer')).toBeInTheDocument();
  });

  test('renders children correctly', () => {
    render(
      <Drawer open>
        <div>Test Content</div>
      </Drawer>,
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('renders with title prop', () => {
    const title = 'Drawer Title';
    render(
      <Drawer title={title} open>
        Content
      </Drawer>,
    );
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test('renders with placement prop', () => {
    render(
      <Drawer placement="right" open>
        Content
      </Drawer>,
    );
    const drawer = document.querySelector('.ant-drawer-right');
    expect(drawer).toBeInTheDocument();
  });

  test('renders with custom width', () => {
    render(
      <Drawer width={500} open>
        Content
      </Drawer>,
    );
    const drawer = document.querySelector('.ant-drawer-content-wrapper');
    expect(drawer).toHaveStyle({ width: '500px' });
  });

  test('renders with mask', () => {
    render(
      <Drawer mask open>
        Content
      </Drawer>,
    );
    expect(document.querySelector('.ant-drawer-mask')).toBeInTheDocument();
  });

  test('renders without mask', () => {
    render(
      <Drawer mask={false} open>
        Content
      </Drawer>,
    );
    expect(document.querySelector('.ant-drawer-mask')).not.toBeInTheDocument();
  });
});
