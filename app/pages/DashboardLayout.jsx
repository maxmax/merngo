import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames/bind';
import styles from '../css/components/dashboard';
import { Grid } from 'react-bootstrap';
import AsideNavigation from '../containers/AsideNavigation';

const cx = classNames.bind(styles);

const DashboardLayout = ({ title, link, meta, children }) => {
  return (
    <Grid className={cx('dashboard-layout')} fluid>
      <Helmet title={title} link={link} meta={meta} />
      <AsideNavigation />
      { children }
    </Grid>
  );
};

DashboardLayout.propTypes = {
  title: PropTypes.string,
  link: PropTypes.array,
  meta: PropTypes.array
};

export default DashboardLayout;
