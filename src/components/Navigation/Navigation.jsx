import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import './Navigation.scss';
import Logo from '../../assets/img/logo.svg';
import { logInBtn, logOutBtn, createArticleBtn } from './styles';

export const Navigation = () => {
  const { isLogin } = useSelector((state) => state.user);

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
                <Link to="/create-article">
                  <Button style={createArticleBtn} size="large">
                    Create article
                  </Button>
                </Link>
              </li>
              <li className="loginUser__usr">
                <div className="loginUser__name">John Doe</div>
                <div className="loginUser__img">
                  <img
                    src="https://cdn11.bigcommerce.com/s-7va6f0fjxr/images/stencil/1280x1280/products/20457/79861/Converge-Jane-Doe-Vinyl-Decal-Sticker-1__04484__81432.1498057176__73213.1546614093.jpg?c=2"
                    alt="John Doe"
                  />
                </div>
              </li>
              <li className="loginUser__btn">
                <Link to="/articles">
                  <Button style={logOutBtn} size="large">
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
