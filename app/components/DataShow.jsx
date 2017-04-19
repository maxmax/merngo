import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';

const DataShow = ({name, created, updated, location, link, bio}) => {

  return (
    <div>
      <div>{name}</div>
      <div>{location}</div>
      <div>
        <span className="label label-primary">{created}</span>
      </div>
      <div>
        <span className="label label-success">{updated}</span>
      </div>
      <div>{bio}</div>
      <div><a href={link} target="_blank">Show more</a></div>
    </div>
  );

};

DataShow.propTypes = {
  name: PropTypes.string,
  created: PropTypes.string,
  updated: PropTypes.string,
  bio: PropTypes.string,
  location: PropTypes.string,
  link: PropTypes.string
};

export default DataShow;
