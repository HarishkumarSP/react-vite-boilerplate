import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { DatePicker, RangePicker } from './datepicker';

describe('DatePicker Components', () => {
  describe('DatePicker', () => {
    it('renders with label and helper text', () => {
      const { getByText, container } = render(
        <DatePicker label="Test Label" helperText="Help text" testId="date-picker" />,
      );

      expect(getByText('Test Label')).toBeInTheDocument();
      expect(getByText('Help text')).toBeInTheDocument();

      // Find the actual datepicker input element
      const datepickerInput = container.querySelector('.ant-picker');
      expect(datepickerInput).toHaveClass('fs-datepicker');
    });

    it('passes custom className correctly', () => {
      const { container } = render(<DatePicker className="custom-class" />);
      const datepickerInput = container.querySelector('.ant-picker');
      expect(datepickerInput).toHaveClass('fs-datepicker');
      expect(datepickerInput).toHaveClass('custom-class');
    });
  });

  describe('RangePicker', () => {
    it('renders range picker with all props', () => {
      const { getByText, container } = render(
        <RangePicker
          label="Date Range"
          helperText="Select range"
          testId="range-picker"
          className="custom-range"
        />,
      );

      expect(getByText('Date Range')).toBeInTheDocument();
      expect(getByText('Select range')).toBeInTheDocument();

      // Find the rangepicker element
      const rangepicker = container.querySelector('.ant-picker-range');
      expect(rangepicker).toHaveClass('fs-rangepicker');
      expect(rangepicker).toHaveClass('custom-range');
    });
  });

  describe('WeekPicker', () => {
    it('renders week picker component correctly', () => {
      const { container } = render(<DatePicker.WeekPicker testId="week-picker" />);

      // Find the weekpicker element
      const weekpicker = container.querySelector('.ant-picker-week');
      if (!weekpicker) {
        // If the specific class isn't found, look for the general picker class
        const picker = container.querySelector('.ant-picker');
        expect(picker).toHaveClass('fs-weekpicker');
      } else {
        expect(weekpicker).toHaveClass('fs-weekpicker');
      }
    });
  });

  describe('MonthPicker', () => {
    it('renders month picker with custom props', () => {
      const { getByText, container } = render(
        <DatePicker.MonthPicker
          label="Select Month"
          helperText="Choose a month"
          className="custom-month"
        />,
      );

      expect(getByText('Select Month')).toBeInTheDocument();
      expect(getByText('Choose a month')).toBeInTheDocument();

      // Find the monthpicker element
      const monthpicker = container.querySelector('.ant-picker');
      expect(monthpicker).toHaveClass('fs-monthpicker');
      expect(monthpicker).toHaveClass('custom-month');
    });
  });

  describe('QuarterPicker', () => {
    it('renders quarter picker with all features', () => {
      const { getByText, container } = render(
        <DatePicker.QuarterPicker
          testId="quarter-picker"
          label="Quarter Selection"
          helperText="Select business quarter"
        />,
      );

      expect(getByText('Quarter Selection')).toBeInTheDocument();
      expect(getByText('Select business quarter')).toBeInTheDocument();

      // Find the quarterpicker element
      const quarterpicker = container.querySelector('.ant-picker');
      expect(quarterpicker).toHaveClass('fs-quarterpicker');
    });
  });

  describe('YearPicker', () => {
    it('renders year picker and handles props correctly', () => {
      const { container, getByText } = render(
        <DatePicker.YearPicker label="Year" helperText="Select year" className="custom-year" />,
      );

      expect(container.querySelector('.fs-yearpicker-wrapper')).toBeInTheDocument();
      expect(getByText('Year')).toBeInTheDocument();

      // Find the yearpicker element
      const yearpicker = container.querySelector('.ant-picker');
      expect(yearpicker).toHaveClass('fs-yearpicker');
      expect(yearpicker).toHaveClass('custom-year');
    });
  });

  describe('Component Integration', () => {
    it('ensures all picker variants are properly exported', () => {
      expect(DatePicker.WeekPicker).toBeDefined();
      expect(DatePicker.MonthPicker).toBeDefined();
      expect(DatePicker.QuarterPicker).toBeDefined();
      expect(DatePicker.YearPicker).toBeDefined();
    });

    it('handles empty props gracefully', () => {
      const { container } = render(<DatePicker />);
      expect(container.querySelector('.fs-datepicker-label')).not.toBeInTheDocument();
      expect(container.querySelector('.fs-datepicker-helper-text')).not.toBeInTheDocument();
    });
  });
});
