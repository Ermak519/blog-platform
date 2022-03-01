import React from 'react';
import propTypes from 'prop-types';
import format from 'date-fns/format';

import './User.scss';
import defaultUser from '../../assets/img/anon.svg';

const User = ({ author, updatedAt }) => (
  <div className="user">
    <div className="user__info">
      <div className="user__name">{author.username}</div>

      <div className="user__date">{format(new Date(updatedAt), 'PPP')}</div>
    </div>
    <div className="user__img">
      <img
        src={author.image === 'https://static.productionready.io/images/smiley-cyrus.jpg' ? defaultUser : author.image}
        alt={author.username}
      />
    </div>
  </div>
);

User.defaultProps = {
  author: {},
  updatedAt: '',
};

User.propTypes = {
  author: propTypes.object,
  updatedAt: propTypes.string,
};

export default User;
