import axios from 'axios';

const API_URL = 'https://kata.academy:8021/api/';

export const getAllArticles = async () => {
  const { data } = await axios.get(`${API_URL}articles`);
  return data;
};

export const getArticle = async (id) => {
  const { data } = await axios.get(`${API_URL}articles/${id}`);
  return data;
};

export const postRegisterUser = async (login, mail, pwd) => {
  const { data } = await axios.post(`${API_URL}users`, {
    user: {
      username: login,
      email: mail,
      password: pwd,
      image:
        'https://flomaster.club/uploads/posts/2021-11/1637990338_4-flomaster-club-p-risunki-kotyat-legkie-i-milie-detskie-4.png',
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
