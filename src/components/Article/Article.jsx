import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Tag, Button, Popconfirm, Spin } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { nanoid } from '@reduxjs/toolkit';
import ReactMarkdown from 'react-markdown';

import { User } from '../User';

import './Article.scss';

export const Article = () => {
  const { status } = useSelector((state) => state.article);
  const { articlesData } = useSelector((state) => state.articles);
  const { isLogin } = useSelector((state) => state.user);

  const { id } = useParams();

  const item = articlesData.find((obj) => obj.slug === id);
  const { title, description, updatedAt, tagList, body, author, favoritesCount } = item;

  const arrTag = tagList.map((elem) => {
    const idx = nanoid();
    return <Tag key={idx}>{`${elem}`}</Tag>;
  });

  return status === 'loading' ? (
    <Spin />
  ) : (
    <div className="article-full">
      <header>
        <div className="article-full__header">
          <div className="article-full__title title">
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
          <article className="article-full__descr">{description}</article>
        </div>
        <div className="article-full__user">
          <User author={author} updatedAt={updatedAt} />
          {isLogin ? (
            <div className="article-full__btns">
              <Popconfirm
                placement="rightTop"
                title="Are you sure to delete this article?"
                onConfirm={(value) => {
                  console.log(value);
                }}
                okText="Yes"
                cancelText="No"
              >
                <Button type="primary" ghost danger style={{ borderRadius: '5px', width: 78, height: 30 }}>
                  Delete
                </Button>
              </Popconfirm>
              <Link to={`/articles/${id}/edit`}>
                <Button
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
              </Link>
            </div>
          ) : null}
        </div>
      </header>
      <main>
        <ReactMarkdown>{body}</ReactMarkdown>
      </main>
    </div>
  );
};
