import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Tag } from 'antd';
import { nanoid } from '@reduxjs/toolkit';

import { User } from '../User';

import './ArticleListItem.scss';

export const ArticleListItem = ({ data }) => {
  const { title, description, slug, tagList, author, createdAt } = data;

  const arrTag = tagList.map((item) => {
    const id = nanoid();
    return <Tag key={id}>{`${item}`}</Tag>;
  });

  return (
    <div className="article-list-item article">
      <div className="article__header">
        <div className="article__title title">
          <Link to={`${slug}`} style={{ color: 'black' }}>
            <div className="title__info">{title}</div>
          </Link>
          <div className="title__tags">{arrTag}</div>
        </div>
        <article className="article__body">{description}</article>
      </div>
      <div className="article__user">
        <User author={author} createdAt={createdAt} />
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
