import React, { Component, PropTypes } from 'react';

import classNames from 'classnames/bind';
import styles from '../../css/components/chart';
const cx = classNames.bind(styles);

export default class Chart extends Component {

  static propTypes = {
    title: PropTypes.string
  }

  static defaultProps = {
    title: "A bar chart showing information",
    children: ""
  }

  render() {

    const { title, children } = this.props;

    return (
      <figure className={cx('chart')}>
        <figcaption>{title}</figcaption>
        <svg width="520" height="520" role="img">
          {children}
        </svg>
      </figure>
    );
  }
}
