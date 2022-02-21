import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import './Navigation.scss';
import Logo from '../../assets/img/logo.svg';

export const Navigation = () => {
  const logInBtn = {
    border: '1px solid #52C41A',
    boxSizing: 'border-box',
    borderRadius: '5px',
    color: '#52C41A',
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
      </ul>
    </div>
  );
};
