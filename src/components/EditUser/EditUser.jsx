import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Result, message } from 'antd';
import { UserOutlined, MailOutlined, FileImageOutlined } from '@ant-design/icons';

import { putUserUpdate } from '../../API';

import { userUpdate } from '../../store/slices/userSlice';

import './EditUser.scss';

const EditUser = () => {
  const [form] = Form.useForm();

  const { isLogin, data } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { username: name, email: mail } = data;

  const onSubmit = async (values) => {
    const { username, email, password, img } = values;
    const token = localStorage.getItem('User_Token');
    const { user } = await putUserUpdate(token, username, email, password, img);
    dispatch(userUpdate(user));
    message.success('Data has been update');
  };

  return isLogin ? (
    <div className="edit-user">
      <div className="edit-user__header">Edit Profile</div>
      <div className="edit-user__main">
        <Form
          form={form}
          name="normal_login"
          className="login-form"
          initialValues={{ username: `${name}`, email: `${mail}` }}
          onFinish={onSubmit}
        >
          <span className="edit-user__email">Username</span>
          <Form.Item name="username" rules={[{ required: true, message: 'Username must be 3-20 symbols' }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <span className="edit-user__email">Email address</span>
          <Form.Item name="email" rules={[{ type: 'email', required: true, message: 'Enter your email' }]}>
            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email address" />
          </Form.Item>
          <span className="edit-user__pwd">New password</span>
          <Form.Item
            name="password"
            rules={[
              {
                min: 6,
                max: 40,
                required: true,
                message: 'Minimal length 6 symbols',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <span className="edit-user__pwd">Repeat Password</span>
          <Form.Item
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              { required: true, message: 'Please confirm your password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
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
          <span className="edit-user__email">Avatar image (url)</span>
          <Form.Item name="img" rules={[{ type: 'url', required: true, message: 'Must be correct URL image' }]}>
            <Input prefix={<FileImageOutlined className="site-form-item-icon" />} placeholder="Avatar image" />
          </Form.Item>
          <Form.Item>
            <div className="edit-user__signIn">
              <Button type="primary" htmlType="submit" className="login-form-button">
                Save
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  ) : (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button type="primary">
          <Link to="/login">Sign In</Link>
        </Button>
      }
    />
  );
};

export default EditUser;
