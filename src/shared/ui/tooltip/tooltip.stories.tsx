import type { Meta, StoryObj } from '@storybook/react';
import { FsTooltip } from './tooltip';
import { Space } from 'antd';
import { FsButton } from '../button';

const meta = {
  title: 'UI/Tooltip',
  component: FsTooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A tooltip component that wraps Ant Design Tooltip.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    placement: {
      control: { type: 'select' },
      options: [
        'top',
        'left',
        'right',
        'bottom',
        'topLeft',
        'topRight',
        'bottomLeft',
        'bottomRight',
        'leftTop',
        'leftBottom',
        'rightTop',
        'rightBottom',
      ],
    },
    color: { control: 'color' },
    trigger: {
      control: { type: 'select' },
      options: ['hover', 'focus', 'click', 'contextMenu'],
    },
    open: { control: 'boolean' },
  },
} satisfies Meta<typeof FsTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'This is a tooltip',
    children: <FsButton>Hover me</FsButton>,
  },
};

export const Placements: Story = {
  render: () => (
    <Space>
      <FsTooltip title="Top tooltip" placement="top">
        <FsButton>Top</FsButton>
      </FsTooltip>
      <FsTooltip title="Right tooltip" placement="right">
        <FsButton>Right</FsButton>
      </FsTooltip>
      <FsTooltip title="Bottom tooltip" placement="bottom">
        <FsButton>Bottom</FsButton>
      </FsTooltip>
      <FsTooltip title="Left tooltip" placement="left">
        <FsButton>Left</FsButton>
      </FsTooltip>
    </Space>
  ),
};

export const ColoredTooltip: Story = {
  args: {
    title: 'Colored tooltip',
    color: '#2db7f5',
    children: <FsButton>Hover me</FsButton>,
  },
};

export const ArrowPointAtCenter: Story = {
  args: {
    title: 'Arrow points at center',
    placement: 'top',
    arrow: { pointAtCenter: true },
    children: <FsButton>Hover me</FsButton>,
  },
};

export const ClickTrigger: Story = {
  args: {
    title: 'Click to show tooltip',
    trigger: 'click',
    children: <FsButton>Click me</FsButton>,
  },
};

export const WithRichContent: Story = {
  args: {
    title: (
      <div>
        <p>Rich content in tooltip</p>
        <p>Multiple lines of text</p>
        <p>
          Can include <strong>formatted</strong> text
        </p>
      </div>
    ),
    children: <FsButton>Hover for rich content</FsButton>,
  },
};
