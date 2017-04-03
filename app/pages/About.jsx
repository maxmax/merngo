import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import Page from '../pages/Page';
import AboutContainer from '../containers/About';

class About extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle() {
    return 'About | mernGo';
  }

  pageMeta() {
    return [
      { name: 'description', content: 'A mernGo example of life 11' }
    ];
  }

  pageLink() {
    return [];
  }

  render() {
    return (
      <Page {...this.getMetaData()}>
        <Grid fluid>
          <AboutContainer {...this.props} />
        </Grid>
      </Page>
    );
  }
}

export default About;
