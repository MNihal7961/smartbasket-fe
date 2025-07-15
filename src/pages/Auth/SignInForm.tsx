import React from 'react';
import { Form, Input, Button, Alert } from 'antd';

interface SignInFormValues {
  email: string;
  password: string;
}

const SignInForm: React.FC<{ onSubmit: (data: SignInFormValues) => void, loading?: boolean, error?: string }> = ({ onSubmit, loading, error }) => {
  const [form] = Form.useForm<SignInFormValues>();

  const handleFinish = (values: SignInFormValues) => {
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
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Email is required' }, { type: 'email', message: 'Invalid email' }]}
      >
        <Input type="email" placeholder="Enter your email" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Password is required' }]}
      >
        <Input.Password placeholder="Enter your password" />
      </Form.Item>
      {error && <Alert type="error" message={error} showIcon style={{ marginBottom: 16 }} />}
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading} block>
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignInForm; 