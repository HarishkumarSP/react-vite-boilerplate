import type { Meta, StoryObj } from '@storybook/react';
import { FsForm, FsFormItem } from './form';
import { FsInput } from '../input';
import { FsSelect } from '../select';
import { FsButton } from '../button';
import { FsCheckbox } from '../checkbox';
import { Space } from 'antd';

const meta = {
  title: 'UI/Form',
  component: FsForm,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customized form component based on Ant Design Form.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical', 'inline'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'middle', 'large'],
    },
  },
} satisfies Meta<typeof FsForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Login Form
export const LoginForm: Story = {
  render: (args) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onFinish = (values: any) => {
      console.log('Success:', values);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };

    return (
      <FsForm
        {...args}
        name="login"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ width: 300 }}
      >
        <FsFormItem
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <FsInput placeholder="Username" />
        </FsFormItem>

        <FsFormItem
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <FsInput.Password placeholder="Password" />
        </FsFormItem>

        <FsFormItem name="remember" valuePropName="checked">
          <FsCheckbox>Remember me</FsCheckbox>
        </FsFormItem>

        <FsFormItem>
          <FsButton type="primary" htmlType="submit" style={{ width: '100%' }}>
            Log in
          </FsButton>
        </FsFormItem>
      </FsForm>
    );
  },
  args: {
    layout: 'vertical',
    size: 'middle',
  },
};

// Registration Form
export const RegistrationForm: Story = {
  render: (args) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onFinish = (values: any) => {
      console.log('Success:', values);
    };

    return (
      <FsForm {...args} name="register" onFinish={onFinish} style={{ width: 400 }}>
        <FsFormItem
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email!' },
          ]}
        >
          <FsInput placeholder="Email" />
        </FsFormItem>

        <FsFormItem
          label="Password"
          name="password"
          rules={[
            { required: true, message: 'Please input your password!' },
            { min: 6, message: 'Password must be at least 6 characters!' },
          ]}
        >
          <FsInput.Password placeholder="Password" />
        </FsFormItem>

        <FsFormItem
          label="Confirm Password"
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Passwords do not match!'));
              },
            }),
          ]}
        >
          <FsInput.Password placeholder="Confirm Password" />
        </FsFormItem>

        <FsFormItem
          label="Role"
          name="role"
          rules={[{ required: true, message: 'Please select a role!' }]}
        >
          <FsSelect
            placeholder="Select a role"
            options={[
              { value: 'admin', label: 'Admin' },
              { value: 'user', label: 'User' },
              { value: 'guest', label: 'Guest' },
              { value: 'guest', label: 'Guest' },
            ]}
          />
        </FsFormItem>

        <FsFormItem
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error('You must accept the agreement')),
            },
          ]}
        >
          <FsCheckbox>
            I have read the <a href="#">agreement</a>
          </FsCheckbox>
        </FsFormItem>

        <FsFormItem>
          <Space>
            <FsButton type="primary" htmlType="submit">
              Register
            </FsButton>
          </Space>
        </FsFormItem>
      </FsForm>
    );
  },
  args: {
    layout: 'vertical',
    size: 'middle',
  },
};

// Inline Form
export const InlineForm: Story = {
  render: (args) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onFinish = (values: any) => {
      console.log('Success:', values);
    };

    return (
      <FsForm {...args} name="inline" onFinish={onFinish}>
        <FsFormItem
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <FsInput placeholder="Username" />
        </FsFormItem>

        <FsFormItem
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <FsInput.Password placeholder="Password" />
        </FsFormItem>

        <FsFormItem>
          <FsButton type="primary" htmlType="submit">
            Log in
          </FsButton>
        </FsFormItem>
      </FsForm>
    );
  },
  args: {
    layout: 'inline',
    size: 'middle',
  },
};
