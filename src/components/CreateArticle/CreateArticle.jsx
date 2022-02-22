import React from 'react';
import { Form, Input, Button } from 'antd';

import './CreateArticle.scss';
import { useSelector } from 'react-redux';

const CreateArticle = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const { isLogin } = useSelector((state) => state.user);

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };

  return isLogin ? (
    <div className="create-article">
      <div className="create-article__header">Create new article</div>
      <div className="create-article__main">
        <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
          <span className="create-article__title">Title</span>
          <Form.Item name="title" rules={[{ required: true, message: 'Please input your Title!' }]}>
            <Input placeholder="Title" />
          </Form.Item>
          <span className="create-article__descr">Short description</span>
          <Form.Item name="description" rules={[{ required: true, message: 'Please input your Short description!' }]}>
            <Input placeholder="Short description" />
          </Form.Item>
          <span className="create-article__text">Text</span>
          <Form.Item name="body" rules={[{ required: true, message: 'Please input your Text!' }]}>
            <Input.TextArea placeholder="Text" rows={9} />
          </Form.Item>
          <span className="create-article__tags">Tags</span>
          <Form.List name="tagList">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, i) => (
                  <Form.Item {...formItemLayout} className="create-article__tag" required={false} key={field.key}>
                    <Form.Item {...field} rules={[{ whitespace: true }]} noStyle>
                      <Input placeholder="Tag" style={{ width: 300 }} />
                    </Form.Item>
                    <Button
                      type="primary"
                      ghost
                      danger
                      className="dynamic-delete-button"
                      onClick={() => remove(field.name)}
                      style={{ width: 120, marginLeft: 17 }}
                    >
                      Delete
                    </Button>
                    {i === fields.length - 1 ? (
                      <Button type="primary" ghost onClick={() => add()} style={{ width: 136, marginLeft: 17 }}>
                        Add tag
                      </Button>
                    ) : null}
                  </Form.Item>
                ))}
                {fields.length === 0 ? (
                  <Form.Item>
                    <Button type="primary" ghost onClick={() => add()} style={{ width: 120 }}>
                      Add tag
                    </Button>
                  </Form.Item>
                ) : null}
              </>
            )}
          </Form.List>
          <Form.Item>
            <div className="create-article__signIn">
              <Button type="primary" htmlType="submit" className="create-article-button">
                Send
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  ) : (
    <div>secret</div>
  );
};

export default CreateArticle;
