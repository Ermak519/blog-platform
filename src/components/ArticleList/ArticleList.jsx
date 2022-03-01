import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, Spin, List } from 'antd';

import { getDataArticles, getNewArticles } from '../../store/middlewares/articlesThunk';

import { ArticleListItem } from '../ArticleListItem';

import './ArticleList.scss';

const ArticleList = () => {
  const { articlesData, loading, pages, page } = useSelector((state) => state.articles);

  const { token } = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : '';

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataArticles(token));
  }, [dispatch, token]);

  return loading ? (
    <Spin />
  ) : (
    <div className="article-list">
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={articlesData}
        renderItem={(article) => (
          <List.Item>
            <ArticleListItem data={article} />
          </List.Item>
        )}
      />
      <div className="pagination">
        <Pagination
          current={page}
          onChange={(value) => {
            dispatch(getNewArticles(token, value));
          }}
          showSizeChanger={false}
          size="small"
          total={pages}
        />
      </div>
    </div>
  );
};

export default ArticleList;
