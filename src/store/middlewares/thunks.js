import { articlesLoading, addArticles, addArticleId, addArticleData } from '../slices/articlesSlice';
import { getAllArticles, getArticle } from '../../API';

export const getDataArticles = () => async (dispatch) => {
  dispatch(articlesLoading());
  const data = await getAllArticles();
  const { articles } = data;
  dispatch(addArticles(articles));
};

export const getDataArticle = (id) => async (dispatch) => {
  const article = await getArticle(id);
  dispatch(addArticleId(id));
  dispatch(addArticleData(article));
};
