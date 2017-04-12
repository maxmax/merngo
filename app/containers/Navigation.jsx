import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { MenuItem, Navbar, Nav, NavDropdown, NavItem, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';

import classNames from 'classnames/bind';
import { logOut } from '../actions/users';
import styles from '../css/components/navigation';
const cx = classNames.bind(styles);

const Navigation = ({ user, logOut }) => {
    return (
      <Navbar inverse fluid fixedTop collapseOnSelect className={cx('navigation')}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link
              to="/"
              className={cx('item', 'logo')} >mernGo</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/about">
              <NavItem>
                About
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/ui-page">
              <NavItem eventKey={2}>
                Ui page
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/guide">
              <NavItem eventKey={3}>
                Guide
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/votelist">
              <NavItem eventKey={4}>
                Vote
              </NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer to="dashboard">
              <NavItem eventKey={5}>
                <Glyphicon glyph="th" /> Dashboard
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/settings">
              <NavItem eventKey={6}>
                <Glyphicon glyph="user" />
              </NavItem>
            </LinkContainer>
            { user.authenticated ? (
              <NavItem eventKey={7} onClick={logOut}>
                <Glyphicon glyph="log-out" /> Logout
              </NavItem>
            ) : (
              <LinkContainer to="/login">
                <NavItem eventKey={8}>
                  <Glyphicon glyph="log-in" /> Log in
                </NavItem>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
