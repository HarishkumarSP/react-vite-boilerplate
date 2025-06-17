import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './tooltip';
import { Space } from 'antd';
import { Button } from '../button';

const meta = {
  title: 'UI/Tooltip',
  component: Tooltip,
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
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'This is a tooltip',
    children: <Button>Hover me</Button>,
  },
};

export const Placements: Story = {
  render: () => (
    <Space>
      <Tooltip title="Top tooltip" placement="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip title="Right tooltip" placement="right">
        <Button>Right</Button>
      </Tooltip>
      <Tooltip title="Bottom tooltip" placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip title="Left tooltip" placement="left">
        <Button>Left</Button>
      </Tooltip>
    </Space>
  ),
};

export const ColoredTooltip: Story = {
  args: {
    title: 'Colored tooltip',
    color: '#2db7f5',
    children: <Button>Hover me</Button>,
  },
};

export const ArrowPointAtCenter: Story = {
  args: {
    title: 'Arrow points at center',
    placement: 'top',
    arrow: { pointAtCenter: true },
    children: <Button>Hover me</Button>,
  },
};

export const ClickTrigger: Story = {
  args: {
    title: 'Click to show tooltip',
    trigger: 'click',
    children: <Button>Click me</Button>,
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
    children: <Button>Hover for rich content</Button>,
  },
};
