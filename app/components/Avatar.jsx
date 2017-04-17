import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';

const Avatar = ({avatar, name}) => {
  return (
    <div>
      <img alt={name} src={avatar} className="img-responsive" />
    </div>
  );
};

Avatar.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string
};

export default Avatar;
