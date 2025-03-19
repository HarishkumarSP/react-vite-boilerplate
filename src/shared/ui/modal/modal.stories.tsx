import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { FsModal } from './modal';
import { FsButton } from '../button';

const meta = {
  title: 'UI/Modal',
  component: FsModal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customized modal component based on Ant Design Modal.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    width: { control: 'number' },
    centered: { control: 'boolean' },
    closable: { control: 'boolean' },
    maskClosable: { control: 'boolean' },
  },
} satisfies Meta<typeof FsModal>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Modal example
export const Basic: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };

    const handleOk = () => {
      setIsModalOpen(false);
    };

    const handleCancel = () => {
      setIsModalOpen(false);
    };

    return (
      <>
        <FsButton type="primary" onClick={showModal}>
          Open Modal
        </FsButton>
        <FsModal {...args} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p>This is the content of the modal</p>
          <p>You can add any content here</p>
        </FsModal>
      </>
    );
  },
  args: {
    title: 'Basic Modal',
    width: 500,
    centered: true,
  },
};

// Confirmation Modal
export const Confirmation: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };

    const handleOk = () => {
      setIsModalOpen(false);
    };

    const handleCancel = () => {
      setIsModalOpen(false);
    };

    return (
      <>
        <FsButton danger onClick={showModal}>
          Delete Item
        </FsButton>
        <FsModal
          {...args}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Delete"
          okButtonProps={{ danger: true }}
          cancelText="Cancel"
        >
          <p>Are you sure you want to delete this item?</p>
          <p>This action cannot be undone.</p>
        </FsModal>
      </>
    );
  },
  args: {
    title: 'Confirm Deletion',
    width: 400,
    centered: true,
  },
};

// Custom Footer Modal
export const CustomFooter: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };

    const handleClose = () => {
      setIsModalOpen(false);
    };

    return (
      <>
        <FsButton type="primary" onClick={showModal}>
          Custom Footer Modal
        </FsButton>
        <FsModal
          {...args}
          open={isModalOpen}
          onCancel={handleClose}
          footer={[
            <FsButton key="back" onClick={handleClose}>
              Cancel
            </FsButton>,
            <FsButton key="submit" type="primary" onClick={handleClose}>
              Submit
            </FsButton>,
            <FsButton key="link" type="link" onClick={handleClose}>
              Close
            </FsButton>,
          ]}
        >
          <p>This modal has custom footer buttons</p>
        </FsModal>
      </>
    );
  },
  args: {
    title: 'Modal with Custom Footer',
    width: 500,
    centered: true,
  },
};
