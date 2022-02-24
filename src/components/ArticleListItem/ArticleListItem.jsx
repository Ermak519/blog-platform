import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Tag } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { nanoid } from '@reduxjs/toolkit';

import { User } from '../User';

import './ArticleListItem.scss';

export const ArticleListItem = ({ data }) => {
  const { title, description, slug, tagList, author, createdAt, updatedAt, favoritesCount } = data;

  const { isLogin } = useSelector((state) => state.user);

  const arrTag = tagList.map((item) => {
    const id = nanoid();
    return <Tag key={id}>{`${item}`}</Tag>;
  });

  return (
    <Link to={`/articles/${slug}`} style={{ color: 'black' }}>
      <div className="article-list-item article">
        <div className="article__header">
          <div className="article__title title">
            <div className="title__header">
              <div className="title__info">{title}</div>
              {isLogin ? (
                <div className="title__follow">
                  <HeartOutlined
                    onClick={() => {
                      console.log('like');
                    }}
                  />
                  <span className="title__count">{favoritesCount}</span>
                </div>
              ) : null}
            </div>
            <div className="title__tags">{arrTag}</div>
          </div>
          <article className="article__body">{description}</article>
        </div>
        <div className="article__user">
          <User author={author} createdAt={createdAt} updatedAt={updatedAt} />
        </div>
      </div>
    </Link>
  );
};

ArticleListItem.defaultProps = {
  data: {},
};

ArticleListItem.propTypes = {
  data: propTypes.object,
};
