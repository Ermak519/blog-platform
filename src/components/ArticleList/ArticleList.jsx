import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, Spin, List } from 'antd';

import { getDataArticles } from '../../store/middlewares/articlesThunk';
import { setCurrentPage } from '../../store/slices/articlesSlice';

import { ArticleListItem } from '../ArticleListItem';

import './ArticleList.scss';

const ArticleList = () => {
  const { articlesData, articlesLoadingStatus, pages, currentPage } = useSelector((state) => state.articles);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataArticles());
  }, [dispatch]);

  return articlesLoadingStatus === 'loading' ? (
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
          current={currentPage}
          onChange={(value) => {
            dispatch(setCurrentPage(value));
            dispatch(getDataArticles(currentPage === 1 ? 0 : currentPage * 10));
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
