import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';

import './RegisterForm.scss';

const RegisterForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="logInForm">
      <div className="logInForm__header">Create new account</div>
      <div className="logInForm__main">
        <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
          <span className="logInForm__email">Username</span>
          <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <span className="logInForm__email">Email address</span>
          <Form.Item name="email" rules={[{ required: true, message: 'Please input your Email!' }]}>
            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email address" />
          </Form.Item>
          <span className="logInForm__pwd">Password</span>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <span className="logInForm__pwd">Repeat Password</span>
          <Form.Item
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <div className="logInForm__signIn">
              <Button type="primary" htmlType="submit" className="login-form-button">
                Create
              </Button>
            </div>
          </Form.Item>
          <div className="logInForm__reg">
            Already have an account?
            <Link to="/login">
              <span className="logInForm__link">Sign In</span>.
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
