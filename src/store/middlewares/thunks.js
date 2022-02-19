import { articlesLoading, addArticles } from "../slices/articlesSlice";
import { getAllArticles } from "../../API/kataBlogPlatform";

export const getDataArticles = () => async (dispatch) => {
    dispatch(articlesLoading());
    const data = await getAllArticles();
    const { articles } = data;
    dispatch(addArticles(articles));
}