import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from './modal';
import { Button } from '../button';

const meta = {
  title: 'UI/Modal',
  component: Modal,
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
} satisfies Meta<typeof Modal>;

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
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal {...args} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p>This is the content of the modal</p>
          <p>You can add any content here</p>
        </Modal>
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
        <Button danger onClick={showModal}>
          Delete Item
        </Button>
        <Modal
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
        </Modal>
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
        <Button type="primary" onClick={showModal}>
          Custom Footer Modal
        </Button>
        <Modal
          {...args}
          open={isModalOpen}
          onCancel={handleClose}
          footer={[
            <Button key="back" onClick={handleClose}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={handleClose}>
              Submit
            </Button>,
            <Button key="link" type="link" onClick={handleClose}>
              Close
            </Button>,
          ]}
        >
          <p>This modal has custom footer buttons</p>
        </Modal>
      </>
    );
  },
  args: {
    title: 'Modal with Custom Footer',
    width: 500,
    centered: true,
  },
};
