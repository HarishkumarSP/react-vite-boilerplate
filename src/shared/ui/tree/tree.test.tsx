import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { FsTree } from './tree';

// Sample tree data for testing
const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'leaf 1',
        key: '0-0-0',
      },
      {
        title: 'leaf 2',
        key: '0-0-1',
      },
    ],
  },
];

describe('FsTree Component', () => {
  test('renders tree with data', () => {
    render(<FsTree treeData={treeData} testId="tree" />);

    expect(screen.getByTestId('tree')).toBeInTheDocument();
    expect(screen.getByText('parent 1')).toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(<FsTree treeData={treeData} className="custom-tree" testId="tree" />);

    const treeElement = screen.getByTestId('tree');
    const treeContainer = treeElement.closest('.ant-tree');

    expect(treeContainer).not.toBeNull();
    expect(treeContainer).toHaveClass('fs-tree');
    expect(treeContainer).toHaveClass('custom-tree');
  });

  test('expands node when clicked', () => {
    render(<FsTree treeData={treeData} testId="tree" />);

    // Initially, leaf nodes are not visible
    expect(screen.queryByText('leaf 1')).not.toBeInTheDocument();

    // Click on the expand icon
    const expandIcon = screen.getByTestId('tree').querySelector('.ant-tree-switcher');
    if (expandIcon) {
      fireEvent.click(expandIcon);

      // After expanding, leaf nodes should be visible
      expect(screen.getByText('leaf 1')).toBeInTheDocument();
      expect(screen.getByText('leaf 2')).toBeInTheDocument();
    }
  });

  test('calls onSelect when node is selected', () => {
    const handleSelect = vi.fn();

    render(<FsTree treeData={treeData} onSelect={handleSelect} defaultExpandAll />);

    // Click on a leaf node to select it
    fireEvent.click(screen.getByText('leaf 1'));

    expect(handleSelect).toHaveBeenCalled();
    expect(handleSelect.mock.calls[0][0]).toContain('0-0-0');
  });

  test('renders checkable tree', () => {
    render(<FsTree treeData={treeData} checkable defaultExpandAll />);

    // Check if checkboxes are rendered
    const checkboxes = document.querySelectorAll('.ant-tree-checkbox');
    expect(checkboxes.length).toBeGreaterThan(0);
  });

  test('calls onCheck when checkbox is clicked', () => {
    const handleCheck = vi.fn();

    render(<FsTree treeData={treeData} checkable onCheck={handleCheck} defaultExpandAll />);

    // Find the checkbox for a leaf node and click it
    const checkboxes = document.querySelectorAll('.ant-tree-checkbox');
    if (checkboxes.length > 0) {
      fireEvent.click(checkboxes[1]); // Click on the checkbox for the first leaf
      expect(handleCheck).toHaveBeenCalled();
    }
  });
});
