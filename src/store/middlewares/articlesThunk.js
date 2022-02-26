import { articlesLoading, addArticles, setNumbersOfPages } from '../slices/articlesSlice';
import { getAllArticles } from '../../API';

export const getDataArticles = (page) => async (dispatch) => {
  dispatch(articlesLoading());
  const data = await getAllArticles(page);
  const { articles, articlesCount } = data;
  dispatch(setNumbersOfPages(articlesCount));
  dispatch(addArticles(articles));
};
