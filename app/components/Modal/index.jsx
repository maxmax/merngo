import React, { Component, PropTypes } from 'react';

import classNames from 'classnames/bind';
import styles from '../../css/components/modal';
const cx = classNames.bind(styles);

export default class Modal extends Component {

  static propTypes = {
    role: PropTypes.string
  }

  static defaultProps = {
    role: "auto",
    children: ""
  }

  render() {

    const { role, children } = this.props;

    return (
      <div className={cx('modal')} role={role}>
        <section>{children}</section>
      </div>
    );
  }
}
