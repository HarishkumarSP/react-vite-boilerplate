import type { Meta, StoryObj } from '@storybook/react';
import { Form, FormItem } from './form';
import { Input } from '../input';
import { Select } from '../select';
import { Button } from '../button';
import { Checkbox } from '../checkbox';
import { Space } from 'antd';

const meta = {
  title: 'UI/Form',
  component: Form,
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
} satisfies Meta<typeof Form>;

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
      <Form
        {...args}
        name="login"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ width: 300 }}
      >
        <FormItem
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Username" />
        </FormItem>

        <FormItem
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </FormItem>

        <FormItem name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </FormItem>

        <FormItem>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Log in
          </Button>
        </FormItem>
      </Form>
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
      <Form {...args} name="register" onFinish={onFinish} style={{ width: 400 }}>
        <FormItem
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email!' },
          ]}
        >
          <Input placeholder="Email" />
        </FormItem>

        <FormItem
          label="Password"
          name="password"
          rules={[
            { required: true, message: 'Please input your password!' },
            { min: 6, message: 'Password must be at least 6 characters!' },
          ]}
        >
          <Input.Password placeholder="Password" />
        </FormItem>

        <FormItem
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
          <Input.Password placeholder="Confirm Password" />
        </FormItem>

        <FormItem
          label="Role"
          name="role"
          rules={[{ required: true, message: 'Please select a role!' }]}
        >
          <Select
            placeholder="Select a role"
            options={[
              { value: 'admin', label: 'Admin' },
              { value: 'user', label: 'User' },
              { value: 'guest', label: 'Guest' },
              { value: 'guest', label: 'Guest' },
            ]}
          />
        </FormItem>

        <FormItem
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
          <Checkbox>
            I have read the <a href="#">agreement</a>
          </Checkbox>
        </FormItem>

        <FormItem>
          <Space>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Space>
        </FormItem>
      </Form>
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
      <Form {...args} name="inline" onFinish={onFinish}>
        <FormItem
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Username" />
        </FormItem>

        <FormItem
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </FormItem>

        <FormItem>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  },
  args: {
    layout: 'inline',
    size: 'middle',
  },
};
