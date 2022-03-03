import { addArticles, offsetArticles, setPage, setArticleData } from '../slices/articlesSlice';
import { getArticles, getArticle } from '../../API';

export const getDataArticles = (token, value) => async (dispatch) => {
  const offset = value * 10 - 10;
  dispatch(setPage(value));
  dispatch(offsetArticles(offset));
  const { articles, articlesCount: pages } = await getArticles(token, offset);
  dispatch(addArticles({ articles, pages }));
  window.scrollTo(0, 0);
};

export const returnToArticles = (token, value) => async (dispatch) => {
  const offset = value * 10 - 10;
  dispatch(offsetArticles(offset));
  const { articles, articlesCount: pages } = await getArticles(token, offset);
  dispatch(addArticles({ articles, pages }));
  window.scrollTo(0, 0);
};

export const getDataArticle = (token, id) => async (dispatch) => {
  const { article } = await getArticle(token, id);
  dispatch(setArticleData(article));
};
