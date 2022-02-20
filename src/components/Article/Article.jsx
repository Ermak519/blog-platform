import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { getDataArticle } from '../../store/middlewares/thunks';

export const Article = () => {
  //   const dispatch = useDispatch();

  const { articlesData } = useSelector((state) => state.articles);

  const { id } = useParams();

  const item = articlesData.find((obj) => obj.slug === id);

  return <h1>{item.body}</h1>;
};
