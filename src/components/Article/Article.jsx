import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Tag, Button, Popconfirm, Spin, message } from 'antd';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { nanoid } from '@reduxjs/toolkit';
import ReactMarkdown from 'react-markdown';

import { deleteArticle, postFavorites, deleteFavorites } from '../../API';

import { getDataArticle } from '../../store/middlewares/articleThunk';

import { User } from '../User';

import './Article.scss';

const Article = () => {
  const { loading, articleData } = useSelector((state) => state.article);
  const { slug, favoritesCount, favorited } = articleData;

  const { isLogin } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const { username, token } = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : '';

  const navigate = useNavigate();

  const { id } = useParams();

  const [followCount, setFollowCount] = useState(favoritesCount);
  const [follow, setFollow] = useState(favorited);

  useEffect(() => {
    setFollowCount(favoritesCount);
    setFollow(favorited);
  }, [favoritesCount, favorited]);

  useEffect(() => {
    dispatch(getDataArticle(token, id));
  }, [dispatch, id, token]);

  const onEditArticle = () => {
    if (username === articleData.author.username) {
      navigate(`/articles/${id}/edit`);
    } else {
      message.error("This is not your article. You can't edit it");
    }
  };

  const onDeleteArticle = async () => {
    if (username === articleData.author.username) {
      await deleteArticle(token, id);
      message.success('Article has been deleted');
      navigate('/articles');
    } else {
      message.error("This is not your article. You can't delete it");
    }
  };

  const onFollow = async () => {
    const { article } = await postFavorites(token, slug);
    const { favoritesCount: count, favorited: like } = article;
    setFollowCount(count);
    setFollow(like);
  };

  const onUnFollow = async () => {
    const { article } = await deleteFavorites(token, slug);
    const { favoritesCount: count, favorited: like } = article;
    setFollowCount(count);
    setFollow(like);
  };

  return loading ? (
    <Spin />
  ) : (
    <div className="article-full">
      <header>
        <div className="article-full__header">
          <div className="article-full__title title">
            <div className="title__header">
              <div className="title__info">{articleData.title}</div>
              {isLogin ? (
                <div className="title__follow">
                  {follow ? (
                    <HeartFilled style={{ color: 'red' }} onClick={onUnFollow} />
                  ) : (
                    <HeartOutlined onClick={onFollow} />
                  )}
                  <span className="title__count">{followCount}</span>
                </div>
              ) : null}
            </div>
            <div className="title__tags">
              {articleData.tagList.map((elem) => (
                <Tag key={nanoid()}>{`${elem}`}</Tag>
              ))}
            </div>
          </div>
          <article className="article-full__descr">{articleData.description}</article>
        </div>
        <div className="article-full__user">
          <User author={articleData.author} updatedAt={articleData.updatedAt} />
          {isLogin ? (
            <div className="article-full__btns">
              <Popconfirm
                placement="rightTop"
                title="Are you sure to delete this article?"
                onConfirm={onDeleteArticle}
                okText="Yes"
                cancelText="No"
              >
                <Button type="primary" ghost danger style={{ borderRadius: '5px', width: 78, height: 30 }}>
                  Delete
                </Button>
              </Popconfirm>
              <Button
                onClick={onEditArticle}
                type="primary"
                ghost
                style={{
                  border: '1px solid #52C41A',
                  borderRadius: '5px',
                  color: '#52C41A',
                  width: 65,
                  height: 30,
                  marginLeft: 17,
                }}
              >
                Edit
              </Button>
            </div>
          ) : null}
        </div>
      </header>
      <main>
        <ReactMarkdown>{articleData.body}</ReactMarkdown>
      </main>
    </div>
  );
};

export default Article;
