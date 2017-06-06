import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
//import Page from '../pages/Page';
import Layout from '../pages/DashboardLayout';
import UsersContainer from '../containers/Users';

class UserPage extends Component {

  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle() {
    return 'User Page | mernGo';
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
      <Layout {...this.getMetaData()}>
        <Grid fluid>
          <UsersContainer {...this.props} data="/api/data.json" />
        </Grid>
      </Layout>
    );
  }
}

export default UserPage;
