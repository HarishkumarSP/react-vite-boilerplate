import type { Meta, StoryObj } from '@storybook/react';
import { FsDatePicker, FsRangePicker } from './datepicker';
import dayjs from 'dayjs';

const meta = {
  title: 'UI/DatePicker',
  component: FsDatePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customized date picker component based on Ant Design DatePicker.',
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
  },
} satisfies Meta<typeof FsDatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Select date',
    label: 'Date',
    helperText: 'Please select a date',
  },
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: dayjs(),
    label: 'Date',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled date picker',
    label: 'Date',
  },
};

export const RangePicker: Story = {
  render: (args) => (
    <FsRangePicker
      label={args.label}
      helperText={args.helperText}
      placeholder={args.placeholder ? [args.placeholder, args.placeholder] : undefined}
      disabled={args.disabled}
      size={args.size}
    />
  ),
  args: {
    label: 'Date Range',
    helperText: 'Please select a date range',
    placeholder: 'Select date',
  },
};

export const WeekPicker: Story = {
  render: (args) => (
    <FsDatePicker.WeekPicker
      label={args.label}
      helperText={args.helperText}
      placeholder={args.placeholder}
      disabled={args.disabled}
      size={args.size}
    />
  ),
  args: {
    label: 'Week',
    helperText: 'Please select a week',
    placeholder: 'Select week',
  },
};

export const MonthPicker: Story = {
  render: (args) => (
    <FsDatePicker.MonthPicker
      label={args.label}
      helperText={args.helperText}
      placeholder={args.placeholder}
      disabled={args.disabled}
      size={args.size}
    />
  ),
  args: {
    label: 'Month',
    helperText: 'Please select a month',
    placeholder: 'Select month',
  },
};

export const QuarterPicker: Story = {
  render: (args) => (
    <FsDatePicker.QuarterPicker
      label={args.label}
      helperText={args.helperText}
      placeholder={args.placeholder}
      disabled={args.disabled}
      size={args.size}
    />
  ),
  args: {
    label: 'Quarter',
    helperText: 'Please select a quarter',
    placeholder: 'Select quarter',
  },
};

export const YearPicker: Story = {
  render: (args) => (
    <FsDatePicker.YearPicker
      label={args.label}
      helperText={args.helperText}
      placeholder={args.placeholder}
      disabled={args.disabled}
      size={args.size}
    />
  ),
  args: {
    label: 'Year',
    helperText: 'Please select a year',
    placeholder: 'Select year',
  },
};
