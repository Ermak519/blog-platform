import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './LogInForm.scss';

const LogInForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="logInForm">
      <div className="logInForm__header">Sign In</div>
      <div className="logInForm__main">
        <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
          <span className="logInForm__email">Email address</span>
          <Form.Item name="email" rules={[{ required: true, message: 'Please input your Email!' }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email address" />
          </Form.Item>
          <span className="logInForm__pwd">Password</span>
          <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <div className="logInForm__signIn">
              <Button type="primary" htmlType="submit" className="login-form-button">
                Sign In
              </Button>
            </div>
          </Form.Item>
          <div className="logInForm__reg">
            Don’t have an account?
            <Link to="/register">
              <span className="logInForm__link">Sign Up</span>.
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LogInForm;
