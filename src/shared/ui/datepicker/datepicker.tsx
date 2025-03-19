import { DatePicker as AntDatePicker } from 'antd';
import type {
  DatePickerProps,
  RangePickerProps,
  MonthPickerProps,
  WeekPickerProps,
} from 'antd/es/date-picker';

export interface FsDatePickerProps extends DatePickerProps {
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
export interface FsWeekPickerProps extends FsDatePickerProps, WeekPickerProps {}
export interface FsMonthPickerProps extends FsDatePickerProps, MonthPickerProps {}

export interface FsRangePickerProps extends RangePickerProps {
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

export const FsDatePicker: React.FC<FsDatePickerProps> & {
  WeekPicker: React.FC<FsWeekPickerProps>;
} & { MonthPicker: React.FC<FsMonthPickerProps> } & {
  QuarterPicker: React.FC<FsDatePickerProps>;
} & { YearPicker: React.FC<FsDatePickerProps> } = ({
  className = '',
  testId,
  label,
  helperText,
  ...props
}) => {
  return (
    <div className="fs-datepicker-wrapper">
      {label && <label className="fs-datepicker-label">{label}</label>}
      <AntDatePicker className={`fs-datepicker ${className}`} data-testid={testId} {...props} />
      {helperText && <div className="fs-datepicker-helper-text">{helperText}</div>}
    </div>
  );
};

export const FsRangePicker: React.FC<FsRangePickerProps> = ({
  className = '',
  testId,
  label,
  helperText,
  ...props
}) => {
  return (
    <div className="fs-rangepicker-wrapper">
      {label && <label className="fs-rangepicker-label">{label}</label>}
      <AntDatePicker.RangePicker
        className={`fs-rangepicker ${className}`}
        data-testid={testId}
        {...props}
      />
      {helperText && <div className="fs-rangepicker-helper-text">{helperText}</div>}
    </div>
  );
};

// Export other DatePicker variants
const FsWeekPicker = (props: FsDatePickerProps) => {
  const { label, helperText, className = '', testId, ...rest } = props;

  return (
    <div className="fs-weekpicker-wrapper">
      {label && <label className="fs-weekpicker-label">{label}</label>}
      <AntDatePicker.WeekPicker
        className={`fs-weekpicker ${className}`}
        data-testid={testId}
        {...rest}
      />
      {helperText && <div className="fs-weekpicker-helper-text">{helperText}</div>}
    </div>
  );
};

const FsMonthPicker = (props: FsDatePickerProps) => {
  const { label, helperText, className = '', testId, ...rest } = props;

  return (
    <div className="fs-monthpicker-wrapper">
      {label && <label className="fs-monthpicker-label">{label}</label>}
      <AntDatePicker.MonthPicker
        className={`fs-monthpicker ${className}`}
        data-testid={testId}
        {...rest}
      />
      {helperText && <div className="fs-monthpicker-helper-text">{helperText}</div>}
    </div>
  );
};

const FsQuarterPicker = (props: FsDatePickerProps) => {
  const { label, helperText, className = '', testId, ...rest } = props;

  return (
    <div className="fs-quarterpicker-wrapper">
      {label && <label className="fs-quarterpicker-label">{label}</label>}
      <AntDatePicker.QuarterPicker
        className={`fs-quarterpicker ${className}`}
        data-testid={testId}
        {...rest}
      />
      {helperText && <div className="fs-quarterpicker-helper-text">{helperText}</div>}
    </div>
  );
};

const FsYearPicker = (props: FsDatePickerProps) => {
  const { label, helperText, className = '', testId, ...rest } = props;

  return (
    <div className="fs-yearpicker-wrapper">
      {label && <label className="fs-yearpicker-label">{label}</label>}
      <AntDatePicker.YearPicker
        className={`fs-yearpicker ${className}`}
        data-testid={testId}
        {...rest}
      />
      {helperText && <div className="fs-yearpicker-helper-text">{helperText}</div>}
    </div>
  );
};

FsDatePicker.WeekPicker = FsWeekPicker;
FsDatePicker.MonthPicker = FsMonthPicker;
FsDatePicker.QuarterPicker = FsQuarterPicker;
FsDatePicker.YearPicker = FsYearPicker;
