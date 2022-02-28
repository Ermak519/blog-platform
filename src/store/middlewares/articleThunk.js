import { setArticleData } from '../slices/articleSlice';
import { getArticle } from '../../API';

export const getDataArticle = (id) => async (dispatch) => {
  const { article } = await getArticle(id);
  dispatch(setArticleData(article));
};
