import React, { Component, PropTypes } from 'react';

export default class Thumb extends Component {

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
      <div className={"thumb " + className}>
        {children}
      </div>
    );
  }
}
