import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd';

import { userLogout } from '../../store/slices/userSlice';
import { clearArticleData } from '../../store/slices/articleSlice';
import { getNewArticles } from '../../store/middlewares/articlesThunk';

import './Navigation.scss';
import Logo from '../../assets/img/logo.svg';
import defaultUser from '../../assets/img/anon.svg';

const Navigation = () => {
  const { isLogin, data } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { username, image } = data;

  const { token } = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : '';

  const navigate = useNavigate();

  const logOut = () => {
    dispatch(userLogout());
    navigate('/articles');
    localStorage.setItem('user', '');
  };

  const mainPage = () => {
    dispatch(getNewArticles(token, 1));
    dispatch(clearArticleData());
  };

  return (
    <div className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item ">
          <Link style={{ color: 'black' }} className="navigation__item logo" to="/articles" onClick={mainPage}>
            <div className="logo__img">
              <img src={Logo} alt="logo main" />
            </div>
            <div className="logo__title">Fake World Blog</div>
          </Link>
        </li>
        {!isLogin ? (
          <li className="navigation__item registry">
            <ul className="registry__btns">
              <li className="registry__btn">
                <Link to="/login">
                  <Button style={{ color: 'black', borderRadius: 5 }} size="large" type="text">
                    Sign In
                  </Button>
                </Link>
              </li>
              <li className="registry__btn">
                <Link to="/register">
                  <Button className="log-in-btn" size="large">
                    Sign Up
                  </Button>
                </Link>
              </li>
            </ul>
          </li>
        ) : (
          <li className="navigation__item loginUser">
            <ul className="loginUser__btns">
              <li className="loginUser__btn">
                <Link
                  to="/new-article"
                  onClick={() => {
                    dispatch(clearArticleData());
                  }}
                >
                  <Button className="create-article-btn" size="large">
                    Create article
                  </Button>
                </Link>
              </li>
              <li className="loginUser__usr">
                <Link className="loginUser__usr" to="/profile">
                  <div className="loginUser__name">{username}</div>
                  <div className="loginUser__img">
                    <img src={image || defaultUser} alt="TrollFace" />
                  </div>
                </Link>
              </li>
              <li className="loginUser__btn">
                <Button className="log-out-btn" size="large" onClick={logOut}>
                  Log Out
                </Button>
              </li>
            </ul>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
