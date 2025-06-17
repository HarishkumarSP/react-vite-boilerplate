import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Drawer } from './drawer';
import { Button } from '../button';
import { Space } from 'antd';

const meta = {
  title: 'UI/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customized drawer component based on Ant Design Drawer.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    placement: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
    },
    width: { control: 'number' },
    height: { control: 'number' },
    closable: { control: 'boolean' },
    maskClosable: { control: 'boolean' },
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Drawer example
export const Basic: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };

    return (
      <>
        <Button type="primary" onClick={showDrawer}>
          Open Drawer
        </Button>
        <Drawer {...args} open={open} onClose={onClose}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </>
    );
  },
  args: {
    title: 'Basic Drawer',
    placement: 'right',
    width: 320,
  },
};

// Different placements
export const Placements: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [openTop, setOpenTop] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [openRight, setOpenRight] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [openBottom, setOpenBottom] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [openLeft, setOpenLeft] = useState(false);

    return (
      <Space>
        <Button type="primary" onClick={() => setOpenTop(true)}>
          Top
        </Button>
        <Button type="primary" onClick={() => setOpenRight(true)}>
          Right
        </Button>
        <Button type="primary" onClick={() => setOpenBottom(true)}>
          Bottom
        </Button>
        <Button type="primary" onClick={() => setOpenLeft(true)}>
          Left
        </Button>

        <Drawer
          title="Top Drawer"
          placement="top"
          height={256}
          open={openTop}
          onClose={() => setOpenTop(false)}
        >
          <p>This drawer appears from the top</p>
        </Drawer>

        <Drawer
          title="Right Drawer"
          placement="right"
          width={320}
          open={openRight}
          onClose={() => setOpenRight(false)}
        >
          <p>This drawer appears from the right</p>
        </Drawer>

        <Drawer
          title="Bottom Drawer"
          placement="bottom"
          height={256}
          open={openBottom}
          onClose={() => setOpenBottom(false)}
        >
          <p>This drawer appears from the bottom</p>
        </Drawer>

        <Drawer
          title="Left Drawer"
          placement="left"
          width={320}
          open={openLeft}
          onClose={() => setOpenLeft(false)}
        >
          <p>This drawer appears from the left</p>
        </Drawer>
      </Space>
    );
  },
};

// Drawer with custom footer
export const WithFooter: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Drawer with Footer
        </Button>
        <Drawer
          title="Drawer with Footer"
          width={400}
          open={open}
          onClose={() => setOpen(false)}
          footer={
            <div style={{ textAlign: 'right' }}>
              <Space>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button type="primary" onClick={() => setOpen(false)}>
                  Submit
                </Button>
              </Space>
            </div>
          }
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </>
    );
  },
};
