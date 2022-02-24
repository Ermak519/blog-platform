import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { userLogout } from '../../store/slices/userSlice';

import './Navigation.scss';
import Logo from '../../assets/img/logo.svg';
import { logInBtn, logOutBtn, createArticleBtn } from './styles';

export const Navigation = () => {
  const { isLogin, data } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { username, image } = data;

  const logOut = () => {
    dispatch(userLogout());
    localStorage.setItem('User_Token', '');
  };

  return (
    <div className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link style={{ color: 'black' }} className="navigation__item logo" to="/articles">
            <div className="logo__img">
              <img src={Logo} alt="logo main" />
            </div>
            <div className="logo__title">Real World Blog</div>
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
                  <Button style={logInBtn} size="large">
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
                <Link to="/new-article">
                  <Button style={createArticleBtn} size="large">
                    Create article
                  </Button>
                </Link>
              </li>
              <li className="loginUser__usr">
                <Link className="loginUser__usr" to="/profile">
                  <div className="loginUser__name">{username}</div>
                  <div className="loginUser__img">
                    <img
                      src={
                        image ||
                        'https://flomaster.club/uploads/posts/2021-11/1637990338_4-flomaster-club-p-risunki-kotyat-legkie-i-milie-detskie-4.png'
                      }
                      alt="John Doe"
                    />
                  </div>
                </Link>
              </li>
              <li className="loginUser__btn">
                <Link to="/articles">
                  <Button style={logOutBtn} size="large" onClick={logOut}>
                    Log Out
                  </Button>
                </Link>
              </li>
            </ul>
          </li>
        )}
      </ul>
    </div>
  );
};
