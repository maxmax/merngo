import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import Page from '../pages/Page';

class Home extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle() {
    return 'Guide | mernGo';
  }

  pageMeta() {
    return [
      { name: 'description', content: 'A mernGo - Guide' }
    ];
  }

  pageLink() {
    return [];
  }

  render() {
    console.log("Home:", this.props);

    const jumbotronInstance = (
     <Jumbotron>
       <h1>Hello, world!</h1>
       <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
     </Jumbotron>
    );

    return (
      <Page {...this.getMetaData()}>
        <Grid>
          {jumbotronInstance}
        </Grid>
      </Page>
    );
  }
}

export default Home;
