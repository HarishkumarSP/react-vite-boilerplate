import type { Meta, StoryObj } from '@storybook/react';
import { FsSelect } from './select';

const meta = {
  title: 'UI/Select',
  component: FsSelect,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customized select component based on Ant Design Select.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['large', 'middle', 'small'],
    },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    label: { control: 'text' },
    helperText: { control: 'text' },
    mode: {
      control: { type: 'select' },
      options: [undefined, 'multiple', 'tags'],
    },
  },
} satisfies Meta<typeof FsSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'watermelon', label: 'Watermelon' },
];

export const Default: Story = {
  args: {
    placeholder: 'Select a fruit',
    options: defaultOptions,
    style: { width: 200 },
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Favorite Fruit',
    placeholder: 'Select a fruit',
    options: defaultOptions,
    style: { width: 200 },
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Favorite Fruit',
    placeholder: 'Select a fruit',
    options: defaultOptions,
    helperText: 'Choose your favorite fruit from the list',
    style: { width: 200 },
  },
};

export const Multiple: Story = {
  args: {
    mode: 'multiple',
    placeholder: 'Select multiple fruits',
    options: defaultOptions,
    style: { width: 300 },
  },
};

export const Tags: Story = {
  args: {
    mode: 'tags',
    placeholder: 'Add custom tags',
    options: defaultOptions,
    style: { width: 300 },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled select',
    options: defaultOptions,
    style: { width: 200 },
  },
};
