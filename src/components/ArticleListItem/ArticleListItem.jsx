import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Tag } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { nanoid } from '@reduxjs/toolkit';

import { postFavorites, deleteFavorites } from '../../API';

import { User } from '../User';

import './ArticleListItem.scss';

const ArticleListItem = ({ data }) => {
  const { title, description, slug, tagList, author, createdAt, updatedAt, favoritesCount, favorited } = data;

  const { isLogin } = useSelector((state) => state.user);

  const { token } = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : '';

  const [followCount, setFollowCount] = useState(favoritesCount);
  const [follow, setFollow] = useState(favorited);

  useEffect(() => {
    setFollowCount(favoritesCount);
    setFollow(favorited);
  }, [favoritesCount, favorited]);

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

  return (
    <div className="article-list-item article">
      <div className="article__header">
        <div className="article__title title">
          <div className="title__header">
            <div className="title__info">
              <Link to={`/articles/${slug}`}>{title}</Link>
            </div>
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
            {tagList.map((item) => (
              <Tag key={nanoid()}>{`${item}`}</Tag>
            ))}
          </div>
        </div>
        <article className="article__body">{description}</article>
      </div>
      <div className="article__user">
        <User author={author} createdAt={createdAt} updatedAt={updatedAt} />
      </div>
    </div>
  );
};

ArticleListItem.defaultProps = {
  data: {},
};

ArticleListItem.propTypes = {
  data: propTypes.object,
};

export default ArticleListItem;
