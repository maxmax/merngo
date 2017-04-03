import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import Page from '../pages/Page';
import TasksContainer from '../containers/Tasks';

class Tasks extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle() {
    return 'Tasks | mernGo';
  }

  pageMeta() {
    return [
      { name: 'description', content: 'A mernGo - Tasks' }
    ];
  }

  pageLink() {
    return [];
  }

  render() {
    console.log("Tasks:", this.props);
    return (
      <Page {...this.getMetaData()}>
        <Grid>
          <TasksContainer {...this.props} />
        </Grid>
      </Page>
    );
  }
}

export default Tasks;
