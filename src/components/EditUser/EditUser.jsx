import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, MailOutlined, FileImageOutlined } from '@ant-design/icons';

import './EditUser.scss';

const EditUser = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="edit-user">
      <div className="edit-user__header">Edit Profile</div>
      <div className="edit-user__main">
        <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
          <span className="edit-user__email">Username</span>
          <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <span className="edit-user__email">Email address</span>
          <Form.Item name="email" rules={[{ required: true, message: 'Please input your Email!' }]}>
            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email address" />
          </Form.Item>
          <span className="edit-user__pwd">New password</span>
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
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <span className="edit-user__email">Avatar image (url)</span>
          <Form.Item name="url" rules={[{ required: true, message: 'Please input your url!' }]}>
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
  );
};

export default EditUser;
