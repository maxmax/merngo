import React, { Component, PropTypes } from 'react';

import classNames from 'classnames/bind';
import styles from '../../css/components/modal';
const cx = classNames.bind(styles);

export default class Modal extends Component {

  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className: "auto",
    children: ""
  }

  render() {

    const { className, children } = this.props;

    return (
      <div className={cx('modal')}>
        <section>{children}</section>
      </div>
    );
  }
}
