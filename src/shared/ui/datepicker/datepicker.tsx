import { DatePicker as AntDatePicker } from 'antd';
import type {
  DatePickerProps as AntdDatePickerProps,
  RangePickerProps as AntdRangePickerProps,
  MonthPickerProps as AntdMonthPickerProps,
  WeekPickerProps as AntdWeekPickerProps,
} from 'antd/es/date-picker';

export interface DatePickerProps extends AntdDatePickerProps {
  /**
   * Additional test ID for testing
   */
  testId?: string;
  /**
   * Label for the date picker
   */
  label?: string;
  /**
   * Helper text to display below the date picker
   */
  helperText?: string;
}
export interface WeekPickerProps extends DatePickerProps, AntdWeekPickerProps {}
export interface MonthPickerProps extends DatePickerProps, AntdMonthPickerProps {}

export interface RangePickerProps extends AntdRangePickerProps {
  /**
   * Additional test ID for testing
   */
  testId?: string;
  /**
   * Label for the range picker
   */
  label?: string;
  /**
   * Helper text to display below the range picker
   */
  helperText?: string;
}

export const DatePicker: React.FC<DatePickerProps> & {
  WeekPicker: React.FC<WeekPickerProps>;
} & { MonthPicker: React.FC<MonthPickerProps> } & {
  QuarterPicker: React.FC<DatePickerProps>;
} & { YearPicker: React.FC<DatePickerProps> } = ({
  className = '',
  testId,
  label,
  helperText,
  ...props
}) => {
  return (
    <div className="datepicker-wrapper">
      {label && <label className="datepicker-label">{label}</label>}
      <AntDatePicker className={`datepicker ${className}`} data-testid={testId} {...props} />
      {helperText && <div className="datepicker-helper-text">{helperText}</div>}
    </div>
  );
};

export const RangePicker: React.FC<RangePickerProps> = ({
  className = '',
  testId,
  label,
  helperText,
  ...props
}) => {
  return (
    <div className="rangepicker-wrapper">
      {label && <label className="rangepicker-label">{label}</label>}
      <AntDatePicker.RangePicker
        className={`rangepicker ${className}`}
        data-testid={testId}
        {...props}
      />
      {helperText && <div className="rangepicker-helper-text">{helperText}</div>}
    </div>
  );
};

// Export other DatePicker variants
const WeekPicker = (props: DatePickerProps) => {
  const { label, helperText, className = '', testId, ...rest } = props;

  return (
    <div className="weekpicker-wrapper">
      {label && <label className="weekpicker-label">{label}</label>}
      <AntDatePicker.WeekPicker
        className={`weekpicker ${className}`}
        data-testid={testId}
        {...rest}
      />
      {helperText && <div className="weekpicker-helper-text">{helperText}</div>}
    </div>
  );
};

const MonthPicker = (props: DatePickerProps) => {
  const { label, helperText, className = '', testId, ...rest } = props;

  return (
    <div className="monthpicker-wrapper">
      {label && <label className="monthpicker-label">{label}</label>}
      <AntDatePicker.MonthPicker
        className={`monthpicker ${className}`}
        data-testid={testId}
        {...rest}
      />
      {helperText && <div className="monthpicker-helper-text">{helperText}</div>}
    </div>
  );
};

const QuarterPicker = (props: DatePickerProps) => {
  const { label, helperText, className = '', testId, ...rest } = props;

  return (
    <div className="quarterpicker-wrapper">
      {label && <label className="quarterpicker-label">{label}</label>}
      <AntDatePicker.QuarterPicker
        className={`quarterpicker ${className}`}
        data-testid={testId}
        {...rest}
      />
      {helperText && <div className="quarterpicker-helper-text">{helperText}</div>}
    </div>
  );
};

const YearPicker = (props: DatePickerProps) => {
  const { label, helperText, className = '', testId, ...rest } = props;

  return (
    <div className="yearpicker-wrapper">
      {label && <label className="yearpicker-label">{label}</label>}
      <AntDatePicker.YearPicker
        className={`yearpicker ${className}`}
        data-testid={testId}
        {...rest}
      />
      {helperText && <div className="yearpicker-helper-text">{helperText}</div>}
    </div>
  );
};

DatePicker.WeekPicker = WeekPicker;
DatePicker.MonthPicker = MonthPicker;
DatePicker.QuarterPicker = QuarterPicker;
DatePicker.YearPicker = YearPicker;
