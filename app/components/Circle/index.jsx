import React, { Component, PropTypes } from 'react';

import classNames from 'classnames/bind';
import styles from '../../css/components/circle';
const cx = classNames.bind(styles);

export default class Circle extends Component {

  static propTypes = {
    rate: PropTypes.string,
    title: PropTypes.string
  }

  static defaultProps = {
    rate: "60",
    title: "Info"
  }

  render() {

    const { rate, title } = this.props;

    const divStyle = {
      animationDelay: '-' + rate + 's',
    };

    return (
      <div className={cx('circle')} style={divStyle}>
        <div className={cx('rate')}>
          <span>{rate}</span>
          <small>{title}</small>
        </div>
      </div>
    );
  }
}
