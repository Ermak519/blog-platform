import axios from "axios"

export const getAllArticles = async () => {
    const { data } = await axios.get('https://kata.academy:8021/api/articles');
    return data;
}

export const getArticle = async (id) => {
    const { data } = await axios.get(`https://kata.academy:8021/api/articles/${id}`);
    return data;
}