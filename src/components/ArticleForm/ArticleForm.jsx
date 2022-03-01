import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Form, Input, Button, Result, message } from 'antd';

import { setArticleData } from '../../store/slices/articleSlice';

import { putEditArticle, postCreateArticle } from '../../API';

import './ArticleForm.scss';

const ArticleForm = () => {
  const { id } = useParams();

  const { isLogin } = useSelector((state) => state.user);
  const { articleData } = useSelector((state) => state.article);

  const { token } = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : '';

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onEditArticle = async (values) => {
    const { article } = await putEditArticle(token, id, values);
    message.success('Article has been edited');
    dispatch(setArticleData(article));
    navigate(`/articles/${id}`);
  };

  const onCreateArticle = async (values) => {
    const { article } = await postCreateArticle(token, values);
    message.success('Article has been created');
    navigate(`/articles/${article.slug}`);
  };

  const [form] = Form.useForm();

  useEffect(() => {
    if (!id) form.resetFields();
  }, [id, form]);

  return isLogin ? (
    <div className="edit-article">
      <div className="edit-article__header">{id ? 'Edit article' : 'Create new article'}</div>
      <div className="edit-article__main">
        <Form
          form={form}
          name="normal_login"
          className="login-form"
          initialValues={{ ...articleData }}
          onFinish={id ? onEditArticle : onCreateArticle}
        >
          <span className="edit-article__title">Title</span>
          <Form.Item name="title" rules={[{ required: true, message: 'Please input your Title!' }]}>
            <Input placeholder="Title" />
          </Form.Item>
          <span className="edit-article__descr">Short description</span>
          <Form.Item name="description" rules={[{ required: true, message: 'Please input your Short description!' }]}>
            <Input placeholder="Short description" />
          </Form.Item>
          <span className="edit-article__text">Text</span>
          <Form.Item name="body" rules={[{ required: true, message: 'Please input your Text!' }]}>
            <Input.TextArea placeholder="Text" rows={9} />
          </Form.Item>
          <span className="edit-article__tags">Tags</span>
          <Form.List name="tagList">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, i) => (
                  <Form.Item
                    labelCol={{ xs: { span: 24 }, sm: { span: 4 } }}
                    wrapperCol={{ xs: { span: 24 }, sm: { span: 20 } }}
                    className="edit-article__tag"
                    required={false}
                    key={field.key}
                  >
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
            <div className="edit-article__signIn">
              <Button type="primary" htmlType="submit" className="edit-article-button">
                Send
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

export default ArticleForm;
