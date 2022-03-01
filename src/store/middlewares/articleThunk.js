import { setArticleData } from '../slices/articleSlice';
import { getArticle } from '../../API';

export const getDataArticle = (token, id) => async (dispatch) => {
  const { article } = await getArticle(token, id);
  dispatch(setArticleData(article));
};
