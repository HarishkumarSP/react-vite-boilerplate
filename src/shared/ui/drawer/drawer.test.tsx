import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FsDrawer } from './drawer';

describe('FsDrawer Component', () => {
  test('renders with custom className', () => {
    render(
      <FsDrawer className="custom-class" open>
        Content
      </FsDrawer>
    );
    const drawer = document.querySelector('.fs-drawer.custom-class');
    expect(drawer).toBeInTheDocument();
  });

  test('renders with testId', () => {
    render(
      <FsDrawer testId="test-drawer" open>
        Content
      </FsDrawer>
    );
    expect(screen.getByTestId('test-drawer')).toBeInTheDocument();
  });

  test('renders children correctly', () => {
    render(
      <FsDrawer open>
        <div>Test Content</div>
      </FsDrawer>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('renders with title prop', () => {
    const title = 'Drawer Title';
    render(
      <FsDrawer title={title} open>
        Content
      </FsDrawer>
    );
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test('renders with placement prop', () => {
    render(
      <FsDrawer placement="right" open>
        Content
      </FsDrawer>
    );
    const drawer = document.querySelector('.ant-drawer-right');
    expect(drawer).toBeInTheDocument();
  });

  test('renders with custom width', () => {
    render(
      <FsDrawer width={500} open>
        Content
      </FsDrawer>
    );
    const drawer = document.querySelector('.ant-drawer-content-wrapper');
    expect(drawer).toHaveStyle({ width: '500px' });
  });

  test('renders with mask', () => {
    render(
      <FsDrawer mask open>
        Content
      </FsDrawer>
    );
    expect(document.querySelector('.ant-drawer-mask')).toBeInTheDocument();
  });

  test('renders without mask', () => {
    render(
      <FsDrawer mask={false} open>
        Content
      </FsDrawer>
    );
    expect(document.querySelector('.ant-drawer-mask')).not.toBeInTheDocument();
  });
});
