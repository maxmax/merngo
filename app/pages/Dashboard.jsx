import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Grid } from 'react-bootstrap';

import Layout from '../pages/DashboardLayout';
import DashboardContainer from '../containers/Dashboard';

class Dashboard extends Component {

  //constructor(props) {
  //  super(props);

  //  this.state = {
  //    int: []
  //  };
  //}

  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle() {
    return 'Dashboard';
  }

  pageMeta() {
    return [
      { name: 'description', content: 'example of a dashboard page' }
    ];
  }

  pageLink() {
    return [];
  }

  render() {
    return (
      <Layout {...this.getMetaData()}>
        <DashboardContainer {...this.props} />
      </Layout>
    );
  }
}

export default Dashboard;
