import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Collapse } from './collapse';

describe('Collapse.Panel', () => {
  it('renders with custom className', () => {
    const { container } = render(
      <Collapse.Panel key="panel-key" header="Panel Header" className="custom-class">
        <div>Content</div>
      </Collapse.Panel>,
    );
    expect(container.querySelector('.fs-collapse-panel.custom-class')).toBeInTheDocument();
  });
  it('renders with testId', () => {
    const testId = 'test-panel';
    const { getByTestId } = render(
      <Collapse.Panel key="panel-key" header="Panel Header" testId={testId}>
        <div>Content</div>
      </Collapse.Panel>,
    );
    expect(getByTestId(testId)).toBeInTheDocument();
  });

  it('passes through additional props to AntCollapse.Panel', () => {
    const header = 'Panel Header';
    const { container } = render(
      <Collapse.Panel key="panel-key" header={header}>
        <div>Content</div>
      </Collapse.Panel>,
    );
    expect(container.querySelector('.ant-collapse-header')).toHaveTextContent(header);
  });

  it('renders nested children correctly', () => {
    const { container } = render(
      <Collapse>
        <Collapse.Panel key="panel-key" header="Panel Header">
          <div>
            <span>Child 1</span>
            <span>Child 2</span>
          </div>
        </Collapse.Panel>
      </Collapse>,
    );
    const spans = container.querySelectorAll('span');
    expect(spans.length).toBe(2);
  });

  it('renders without any props', () => {
    const { container } = render(
      <Collapse.Panel key="panel-key" header="Panel Header">
        <div>Content</div>
      </Collapse.Panel>,
    );
    expect(container.querySelector('.fs-collapse-panel')).toBeInTheDocument();
  });
});
