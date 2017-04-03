import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import Page from '../pages/Page';
import TasksContainer from '../containers/Tasks';
import HelloWorld from '../containers/HelloWorld';
import BootstrapContainer from '../containers/BootstrapContainer';

class UiPage extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle() {
    return 'UiPage | reactGo';
  }

  pageMeta() {
    return [
      { name: 'description', content: 'A mernGo example of life' }
    ];
  }

  pageLink() {
    return [];
  }

  render() {
    console.log("pages/UiPage");
    return (
      <Page {...this.getMetaData()}>
        <Grid fluid>
          <HelloWorld />
          <p>Add New Custom container or component...</p>
        </Grid>
        <hr />
        <BootstrapContainer />
        <hr />
        <Grid fluid>
          <p>Add New Bootstrap container or component...</p>
        </Grid>
      </Page>
    );
  }
}

export default UiPage;
