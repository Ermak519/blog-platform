import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Tag } from 'antd';
import { nanoid } from '@reduxjs/toolkit';
import ReactMarkdown from 'react-markdown';

import { User } from '../User';

import './Article.scss';

export const Article = () => {
  const { articlesData } = useSelector((state) => state.articles);

  const { id } = useParams();

  const item = articlesData.find((obj) => obj.slug === id);
  const { title, description, createdAt, tagList, body, author } = item;

  const arrTag = tagList.map((elem) => {
    const idx = nanoid();
    return <Tag key={idx}>{`${elem}`}</Tag>;
  });

  return (
    <div className="article-full">
      <header>
        <div className="article-full__header">
          <div className="article-full__title title">
            <div className="title__info">{title}</div>
            <div className="title__tags">{arrTag}</div>
          </div>
          <article className="article-full__descr">{description}</article>
        </div>
        <div className="article-full__user">
          <User author={author} createdAt={createdAt} />
        </div>
      </header>
      <main>
        <ReactMarkdown>{body}</ReactMarkdown>
      </main>
    </div>
  );
};
