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

  //componentDidMount() {
  //  axios.get(`https://ghibliapi.herokuapp.com/films`)
  //    .then(res => {
  //      const int = res.data.map(obj => obj);
  //      this.setState({ int });
  //    });
  //}

  render() {
    //console.log("1:", this.state);
    //console.log("2:", this.props);
    return (
      <Layout {...this.getMetaData()}>
        <DashboardContainer {...this.props} />
      </Layout>
    );
  }
}

export default Dashboard;
