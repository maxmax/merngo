import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { logOut } from '../actions/users';
import styles from '../css/components/navigation';

const cx = classNames.bind(styles);

const Navigation = ({ user, logOut }) => {
    return (
      <nav className={cx('navigation')} role="navigation">
        <Link
          to="/"
          className={cx('item', 'logo')}
          activeClassName={cx('active')}>mernGo</Link>
        <Link className={cx('item')} to="/dashboard">Dashboard</Link>
        <Link to="/about" className={cx('item')}>About</Link>
        <Link to="/ui-page" className={cx('item')}>Ui components</Link>
        <Link to="/guide" className={cx('item')}>Guide</Link>

        { user.authenticated ? (
          <Link to="/tasks" className={cx('item')}>Tasks</Link>
        ) : (<span>...</span>)}

        <Link to="/votelist" className={cx('item')}>Vote</Link>

        { user.authenticated ? (
          <Link
            onClick={logOut}
            className={cx('item')} to="/">Logout</Link>
        ) : (
          <Link className={cx('item')} to="/login">Log in</Link>
        )}
        
      </nav>
    );
};

Navigation.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { logOut })(Navigation);