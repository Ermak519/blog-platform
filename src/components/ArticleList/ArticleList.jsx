import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, Spin, List } from 'antd';

import { getDataArticles, getNewArticles } from '../../store/middlewares/articlesThunk';
import { offsetArticles } from '../../store/slices/articlesSlice';

import { ArticleListItem } from '../ArticleListItem';

import './ArticleList.scss';

const ArticleList = () => {
  const { articlesData, loading, pages, page } = useSelector((state) => state.articles);

  const dispatch = useDispatch();

  // const query = new URLSearchParams(useLocation().search);
  // const urlPage = query.get('page');

  useEffect(() => {
    dispatch(getDataArticles());
  }, []);

  // useEffect(() => {
  //   dispatch(getNewArticles(urlPage));
  // }, [urlPage]);

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
            dispatch(getNewArticles(value));
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
