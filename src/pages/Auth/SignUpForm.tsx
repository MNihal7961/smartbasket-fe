import React from 'react';
import { Form, Input, Button, Alert } from 'antd';

interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
}

const SignUpForm: React.FC<{ onSubmit: (data: SignUpFormValues) => void, loading?: boolean, error?: string }> = ({ onSubmit, loading, error }) => {
  const [form] = Form.useForm<SignUpFormValues>();

  const handleFinish = (values: SignUpFormValues) => {
    onSubmit(values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinish}
      style={{ maxWidth: 400, margin: '0 auto' }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Name is required' }]}
      >
        <Input placeholder="Enter your name" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Email is required' }, { type: 'email', message: 'Invalid email' }]}
      >
        <Input type="email" placeholder="Enter your email" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Password is required' }, { min: 6, message: 'Password must be at least 6 characters' }]}
      >
        <Input.Password placeholder="Enter your password" />
      </Form.Item>
      {error && <Alert type="error" message={error} showIcon style={{ marginBottom: 16 }} />}
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading} block>
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUpForm; 