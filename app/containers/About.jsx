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
      <Grid>
        <br />
        <strong>TODO:</strong>
        <br />
        <ol>
          <li>https://github.com/maxmax/merngo/blob/master/app/pages/About.jsx</li>
          <li>Create this container layot, use based bootstrap grid. (https://react-bootstrap.github.io/components.html#grid) Create two responsive col content and aside (col-8, col-4)</li>
          <li>Blocks must be of the same height, create flexbox style for this component (in css/components/about and understand how work "const cx, className"), add aside background - grey, for this component.</li>
          <li>Create a new component About Us (AboutUs title="About Us" text="Lorenium ipsum...")</li>
          <li>Create a new component Text Widget, with different values (TextWidget title="About this site" text="Lorenium ipsum...")</li>
          <li>Create a new component Contacts, with different values (Contacts title="Contacts" text="Address" map="googlemap")</li>
          <li>Use custom component styles (import styles, const cx, className) for component or base bootstrap components (Well, Panel etc.)</li>
          <li>Add your new components to /ui-page for tests</li>
          <li>Create pull request 😎</li>
        </ol>
        <h4>Ui</h4>
        <p><img src={pageImg} alt="pageImg" className="img-responsive" /></p>
        <br />
        <br />
        <p>You components...</p>
        <br />
        <br />
      </Grid>
    </div>
  );
};

export default About;
