import axios from 'axios';

const API_URL = 'https://kata.academy:8021/api/';

export const getArticles = async (token, offset = 0) => {
  const { data } = await axios.get(`${API_URL}articles?offset=${offset}&limit=10`, {
    headers: { Authorization: `Token ${token}` },
  });
  return data;
};

export const getArticle = async (token, id) => {
  const { data } = await axios.get(`${API_URL}articles/${id}`, { headers: { Authorization: `Token ${token}` } });
  return data;
};

export const postCreateArticle = async (token, values) => {
  const { body, description, title, tagList } = values;
  const { data } = await axios.post(
    `${API_URL}articles`,
    {
      article: {
        title,
        description,
        body,
        tagList: tagList || [],
      },
    },
    { headers: { Authorization: `Token ${token}` } }
  );
  return data;
};

export const putEditArticle = async (token, id, values) => {
  const { body, description, title, tagList } = values;
  const { data } = await axios.put(
    `${API_URL}articles/${id}`,
    {
      article: {
        title,
        description,
        body,
        tagList,
      },
    },
    { headers: { Authorization: `Token ${token}` } }
  );
  return data;
};

export const deleteArticle = async (token, id) => {
  await axios.delete(`${API_URL}articles/${id}`, { headers: { Authorization: `Token ${token}` } });
};

export const postRegisterUser = async (login, mail, pwd) => {
  const { data } = await axios.post(`${API_URL}users`, {
    user: {
      username: login,
      email: mail,
      password: pwd,
    },
  });
  return data;
};

export const postUserLogin = async (mail, pwd) => {
  const { data } = await axios.post(`${API_URL}users/login`, {
    user: {
      email: mail,
      password: pwd,
    },
  });
  return data;
};

export const getCurrentUser = async (token) => {
  const { data } = await axios.get(`${API_URL}user`, { headers: { Authorization: `Token ${token}` } });
  return data;
};

export const putUserUpdate = async (token, username, mail, pwd, img) => {
  const { data } = await axios.put(
    `${API_URL}user`,
    {
      user: {
        username,
        email: mail,
        password: pwd,
        image: img,
      },
    },
    {
      headers: { Authorization: `Token ${token}` },
    }
  );
  return data;
};

export const postFavorites = async (token, id) => {
  const { data } = await axios.post(
    `${API_URL}articles/${id}/favorite`,
    {},
    { headers: { Authorization: `Token ${token}` } }
  );
  return data;
};

export const deleteFavorites = async (token, id) => {
  const { data } = await axios.delete(`${API_URL}articles/${id}/favorite`, {
    headers: { Authorization: `Token ${token}` },
  });
  return data;
};
