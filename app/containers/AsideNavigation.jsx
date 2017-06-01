import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { logOut } from '../actions/users';
import { ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap';
import styles from '../css/components/asidenav';
const cx = classNames.bind(styles);

const listgroupInstance = (
  <ListGroup>
    <ListGroupItem>
      <Link to="/dashboard" activeClassName={cx('active')}>
        <span>Dashboard</span>
        <Glyphicon glyph="dashboard" className={cx('icon')} />
      </Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/telemetry" activeClassName={cx('active')}>
        <span>Telemetry</span>
        <Glyphicon glyph="tasks" className={cx('icon')} />
      </Link>
    </ListGroupItem>
    <ListGroupItem>
      <Link to="/settings" activeClassName={cx('active')}>
        <span>Settings</span>
        <Glyphicon glyph="cog" className={cx('icon')} />
      </Link>
    </ListGroupItem>
  </ListGroup>
);

const AsideNavigation = ({ user, logOut }) => {
    return (
      <aside className={cx('sidebar')}>
        {listgroupInstance}
      </aside>
    );
};

AsideNavigation.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { logOut })(AsideNavigation);
