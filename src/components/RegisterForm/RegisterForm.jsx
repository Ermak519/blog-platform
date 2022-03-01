import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button, message, Checkbox } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';

import { postRegisterUser } from '../../API';

import './RegisterForm.scss';

const RegisterForm = () => {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, email, password, agreement } = values;
    try {
      if (agreement) {
        form.resetFields();
        await postRegisterUser(username, email, password);
        navigate('/articles');
        message.success('You have been registered');
      } else {
        message.error('You need to consent to the processing of personal data', 8);
      }
    } catch {
      message.error('Invalid username or email', 10);
    }
  };

  return (
    <div className="register-form">
      <div className="register-form__header">Create new account</div>
      <div className="register-form__main">
        <Form form={form} name="normal_login" className="login-form" onFinish={onSubmit}>
          <span className="register-form__email">Username</span>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Username must have 3-20 characters', min: 3, max: 20 }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <span className="register-form__email">Email address</span>
          <Form.Item name="email" rules={[{ required: true, message: 'Enter your email', type: 'email' }]}>
            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email address" />
          </Form.Item>
          <span className="register-form__pwd">Password</span>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Minimal length 6 characters', min: 6, max: 40 }]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <span className="register-form__pwd">Repeat Password</span>
          <Form.Item
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Confirm your password',
              },
              ({ getFieldValue }) => ({
                validator(__, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Passwords must match'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="agreement" valuePropName="checked">
            <Checkbox>
              By clicking the &quot;Create&quot; button, you consent to the{' '}
              <a href="https://art-lunch.ru/recipe/kurinyj-sup-s-vermishelyu_foto/">processing of personal data</a>.
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <div className="register-form__signIn">
              <Button type="primary" htmlType="submit" className="login-form-button">
                Create
              </Button>
            </div>
          </Form.Item>
          <div className="register-form__reg">
            Already have an account?
            <Link to="/login">
              <span className="register-form__link">Sign In</span>.
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
