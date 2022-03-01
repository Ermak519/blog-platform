import { addArticles, offsetArticles, setPage } from '../slices/articlesSlice';
import { getArticles } from '../../API';

export const getDataArticles = (token) => async (dispatch) => {
  const data = await getArticles(token);
  const { articles, articlesCount: pages } = data;
  dispatch(addArticles({ articles, pages }));
};

export const getNewArticles = (token, value) => async (dispatch) => {
  const offset = value * 10 - 10;
  dispatch(setPage(value));
  dispatch(offsetArticles(offset));
  const data = await getArticles(token, offset);
  const { articles, articlesCount: pages } = data;
  dispatch(addArticles({ articles, pages }));
  window.scrollTo(0, 0);
};
