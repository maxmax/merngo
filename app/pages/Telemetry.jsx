import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import Layout from '../pages/DashboardLayout';
import ChartsContainer from '../containers/Charts';

class Telemetry extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle() {
    return 'Telemetry';
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
        <ChartsContainer {...this.props} />
      </Layout>
    );
  }
}

export default Telemetry;
