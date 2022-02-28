import { addArticles, offsetArticles, setPage } from '../slices/articlesSlice';
import { getArticles } from '../../API';

export const getDataArticles = () => async (dispatch) => {
  const data = await getArticles();
  const { articles, articlesCount: pages } = data;
  dispatch(addArticles({ articles, pages }));
};

export const getNewArticles = (value) => async (dispatch) => {
  const offset = value * 10 - 10;
  dispatch(setPage(value));
  dispatch(offsetArticles(offset));
  const data = await getArticles(offset);
  const { articles, articlesCount: pages } = data;
  dispatch(addArticles({ articles, pages }));
  window.scrollTo(0, 0);
};
