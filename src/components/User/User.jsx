import React from 'react';
import propTypes from 'prop-types';
import format from 'date-fns/format';

import './User.scss';

export const User = ({ author, updatedAt }) => {
  const { username, image } = author;
  return (
    <div className="user">
      <div className="user__info">
        <div className="user__name">{username}</div>

        <div className="user__date">{format(new Date(updatedAt), 'PPP')}</div>
      </div>
      <div className="user__img">
        <img src={image} alt={username} />
      </div>
    </div>
  );
};

User.defaultProps = {
  author: {},
  updatedAt: '',
};

User.propTypes = {
  author: propTypes.object,
  updatedAt: propTypes.string,
};
