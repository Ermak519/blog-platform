import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import { postUserLogin } from '../../API';
import { userLogin } from '../../store/slices/userSlice';

import './LogInForm.scss';

const LogInForm = () => {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    form.resetFields();
    try {
      const { email, password } = values;
      const { user } = await postUserLogin(email, password);
      localStorage.setItem('user', JSON.stringify(user));
      dispatch(userLogin(user));
      navigate('/articles');
      message.success(`Hello, ${user.username}. Welcome back.`, 5);
    } catch {
      message.error('Incorrect login or password. Try again.', 5);
    }
  };

  return (
    <div className="logInForm">
      <div className="logInForm__header">Sign In</div>
      <div className="logInForm__main">
        <Form form={form} name="normal_login" className="login-form" onFinish={onSubmit}>
          <span className="logInForm__email">Email address</span>
          <Form.Item name="email" rules={[{ required: true, message: 'Please input your Email!' }]}>
            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email address" />
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
