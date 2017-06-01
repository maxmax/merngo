import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import Avatar from '../components/Avatar';
import DataShow from '../components/DataShow';

import loaderimg from '../images/loader.gif';

class DashboardContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      kind: '',
      data: []
    };
  }

  componentDidMount() {
    axios
      .get('https://www.reddit.com/r/reactjs.json')
      .then(({ data })=> {
      	this.setState({
          kind: data.kind,
          data: data.data.children
        });
      })
      .catch((err)=> {})
  }

  render() {

    const child = this.state.data.map((el, index) => {
      return <div key={index}>
        <p>Title - { el.data.title }</p>
        <p>Author - { el.data.author }</p>
        <p>Score - { el.data.score }</p>
        <hr />
      </div>
    });

    return (
      <div>
        <Panel header={'Dashboard'}>
          <Row className="show-grid">
            <Col xs={12} md={12} lg={12}>
              <p>{ this.state.kind }</p>
              <div>{ child }</div>
            </Col>
          </Row>
        </Panel>
      </div>
    );
  }

}

export default DashboardContainer;
