import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { FsDrawer } from './drawer';
import { FsButton } from '../button';
import { Space } from 'antd';

const meta = {
  title: 'UI/Drawer',
  component: FsDrawer,
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
} satisfies Meta<typeof FsDrawer>;

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
        <FsButton type="primary" onClick={showDrawer}>
          Open Drawer
        </FsButton>
        <FsDrawer {...args} open={open} onClose={onClose}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </FsDrawer>
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
        <FsButton type="primary" onClick={() => setOpenTop(true)}>
          Top
        </FsButton>
        <FsButton type="primary" onClick={() => setOpenRight(true)}>
          Right
        </FsButton>
        <FsButton type="primary" onClick={() => setOpenBottom(true)}>
          Bottom
        </FsButton>
        <FsButton type="primary" onClick={() => setOpenLeft(true)}>
          Left
        </FsButton>

        <FsDrawer
          title="Top Drawer"
          placement="top"
          height={256}
          open={openTop}
          onClose={() => setOpenTop(false)}
        >
          <p>This drawer appears from the top</p>
        </FsDrawer>

        <FsDrawer
          title="Right Drawer"
          placement="right"
          width={320}
          open={openRight}
          onClose={() => setOpenRight(false)}
        >
          <p>This drawer appears from the right</p>
        </FsDrawer>

        <FsDrawer
          title="Bottom Drawer"
          placement="bottom"
          height={256}
          open={openBottom}
          onClose={() => setOpenBottom(false)}
        >
          <p>This drawer appears from the bottom</p>
        </FsDrawer>

        <FsDrawer
          title="Left Drawer"
          placement="left"
          width={320}
          open={openLeft}
          onClose={() => setOpenLeft(false)}
        >
          <p>This drawer appears from the left</p>
        </FsDrawer>
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
        <FsButton type="primary" onClick={() => setOpen(true)}>
          Open Drawer with Footer
        </FsButton>
        <FsDrawer
          title="Drawer with Footer"
          width={400}
          open={open}
          onClose={() => setOpen(false)}
          footer={
            <div style={{ textAlign: 'right' }}>
              <Space>
                <FsButton onClick={() => setOpen(false)}>Cancel</FsButton>
                <FsButton type="primary" onClick={() => setOpen(false)}>
                  Submit
                </FsButton>
              </Space>
            </div>
          }
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </FsDrawer>
      </>
    );
  },
};
