import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import Layout from '../pages/DashboardLayout';


class Settings extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle() {
    return 'Settings';
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
        <section>Render Settings container...</section>
      </Layout>
    );
  }
}

export default Settings;
