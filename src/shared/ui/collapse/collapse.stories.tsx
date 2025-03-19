import type { Meta, StoryObj } from '@storybook/react';
import { FsCollapse } from './collapse';
import { CaretRightOutlined } from '@ant-design/icons';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const meta = {
  title: 'UI/Collapse',
  component: FsCollapse,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customized collapse component based on Ant Design Collapse.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    accordion: { control: 'boolean' },
    bordered: { control: 'boolean' },
    ghost: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['large', 'middle', 'small'],
    },
  },
} satisfies Meta<typeof FsCollapse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <FsCollapse {...args}>
      <FsCollapse.Panel header="This is panel header 1" key="1">
        <p>{text}</p>
      </FsCollapse.Panel>
      <FsCollapse.Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </FsCollapse.Panel>
      <FsCollapse.Panel header="This is panel header 3" key="3">
        <p>{text}</p>
      </FsCollapse.Panel>
    </FsCollapse>
  ),
  args: {
    defaultActiveKey: ['1'],
  },
};

export const Accordion: Story = {
  render: (args) => (
    <FsCollapse {...args}>
      <FsCollapse.Panel header="This is panel header 1" key="1">
        <p>{text}</p>
      </FsCollapse.Panel>
      <FsCollapse.Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </FsCollapse.Panel>
      <FsCollapse.Panel header="This is panel header 3" key="3">
        <p>{text}</p>
      </FsCollapse.Panel>
    </FsCollapse>
  ),
  args: {
    accordion: true,
  },
};

export const Borderless: Story = {
  render: (args) => (
    <FsCollapse {...args}>
      <FsCollapse.Panel header="This is panel header 1" key="1">
        <p>{text}</p>
      </FsCollapse.Panel>
      <FsCollapse.Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </FsCollapse.Panel>
      <FsCollapse.Panel header="This is panel header 3" key="3">
        <p>{text}</p>
      </FsCollapse.Panel>
    </FsCollapse>
  ),
  args: {
    bordered: false,
  },
};

export const CustomExpandIcon: Story = {
  render: (args) => (
    <FsCollapse
      {...args}
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
    >
      <FsCollapse.Panel header="This is panel header 1" key="1">
        <p>{text}</p>
      </FsCollapse.Panel>
      <FsCollapse.Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </FsCollapse.Panel>
      <FsCollapse.Panel header="This is panel header 3" key="3">
        <p>{text}</p>
      </FsCollapse.Panel>
    </FsCollapse>
  ),
};

export const Ghost: Story = {
  render: (args) => (
    <FsCollapse {...args}>
      <FsCollapse.Panel header="This is panel header 1" key="1">
        <p>{text}</p>
      </FsCollapse.Panel>
      <FsCollapse.Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </FsCollapse.Panel>
      <FsCollapse.Panel header="This is panel header 3" key="3">
        <p>{text}</p>
      </FsCollapse.Panel>
    </FsCollapse>
  ),
  args: {
    ghost: true,
  },
};
