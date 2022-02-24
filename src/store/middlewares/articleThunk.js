import { articleLoading, setArticleData } from '../slices/articleSlice';
import { getArticle } from '../../API';

export const getDataArticle = (id) => async (dispatch) => {
  const { article } = await getArticle(id);
  dispatch(articleLoading());
  dispatch(setArticleData(article));
};
