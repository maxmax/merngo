import React from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from 'css/components/about';

const cx = classNames.bind(styles);

import pageImg from '../images/page-ui.svg';

const About = () => {

  return (
    <div className={cx('about')}>
      <Grid fluid>
        <Jumbotron>
          <h1 className={cx('header')}>About mernGo</h1>
          <div className={cx('description')}>
            <p>This sample page</p>
          </div>
        </Jumbotron>
      </Grid>
    </div>
  );
};

export default About;
