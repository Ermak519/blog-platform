import React from 'react';
import propTypes from 'prop-types';
import format from 'date-fns/format';

import './User.scss';

export const User = ({ author, createdAt }) => {
  const { username, image } = author;
  return (
    <div className="user">
      <div className="user__info">
        <div className="user__name">{username}</div>
        <div className="user__date">{format(new Date(createdAt), 'PPP')}</div>
      </div>
      <div className="user__img">
        <img src={image} alt={username} />
      </div>
    </div>
  );
};

User.defaultProps = {
  author: {},
  createdAt: '',
};

User.propTypes = {
  author: propTypes.object,
  createdAt: propTypes.string,
};
