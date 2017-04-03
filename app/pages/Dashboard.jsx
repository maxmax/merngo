import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import Page from '../pages/Page';
import DashboardContainer from '../containers/Dashboard';

class Dashboard extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle() {
    return 'Dashboard | reactGo';
  }

  pageMeta() {
    return [
      { name: 'description', content: 'A reactGo example of a dashboard page' }
    ];
  }

  pageLink() {
    return [];
  }

  render() {
    return (
      <Page {...this.getMetaData()}>
        <Grid>
          <DashboardContainer {...this.props} />
        </Grid>
      </Page>
    );
  }
}

export default Dashboard;
