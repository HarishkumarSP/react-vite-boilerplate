import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { FsCollapse } from './collapse';

describe('FsCollapse.Panel', () => {
  it('renders with custom className', () => {
    const { container } = render(
      <FsCollapse.Panel key="panel-key" header="Panel Header" className="custom-class">
        <div>Content</div>
      </FsCollapse.Panel>
    );
    expect(container.querySelector('.fs-collapse-panel.custom-class')).toBeInTheDocument();
  });
  it('renders with testId', () => {
    const testId = 'test-panel';
    const { getByTestId } = render(
      <FsCollapse.Panel key="panel-key" header="Panel Header" testId={testId}>
        <div>Content</div>
      </FsCollapse.Panel>
    );
    expect(getByTestId(testId)).toBeInTheDocument();
  });

  it('passes through additional props to AntCollapse.Panel', () => {
    const header = 'Panel Header';
    const { container } = render(
      <FsCollapse.Panel key="panel-key" header={header}>
        <div>Content</div>
      </FsCollapse.Panel>
    );
    expect(container.querySelector('.ant-collapse-header')).toHaveTextContent(header);
  });

  it('renders nested children correctly', () => {
    const { container } = render(
      <FsCollapse>
        <FsCollapse.Panel key="panel-key" header="Panel Header">
          <div>
            <span>Child 1</span>
            <span>Child 2</span>
          </div>
        </FsCollapse.Panel>
      </FsCollapse>
    );
    const spans = container.querySelectorAll('span');
    expect(spans.length).toBe(2);
  });

  it('renders without any props', () => {
    const { container } = render(
      <FsCollapse.Panel key="panel-key" header="Panel Header">
        <div>Content</div>
      </FsCollapse.Panel>
    );
    expect(container.querySelector('.fs-collapse-panel')).toBeInTheDocument();
  });
});
