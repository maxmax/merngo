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
      name: '',
      avatar: loaderimg,
      created: '',
      location: '',
      link: '',
      updated: '',
      bio: ''
    };
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/` + `maxmax`)
      //.then(res => {
      //  const int = res.data.map(obj => obj);
      //  this.setState({ int });
      //});
      //.catch(err => console.log(err));
      //https://ghibliapi.herokuapp.com/films
      .then(response => {
        this.setState({
          name: response.data.name,
          avatar: response.data.avatar_url,
          created: response.data.created_at,
          updated: response.data.updated_at,
          bio: response.data.bio,
          location: response.data.location,
          link: response.data.html_url
        });
        //  console.log(response.data);
        //  console.log(response.status); // ex.: 200
      });
  }

  render() {

    return (
      <div>
        <Panel header={'Dashboard'}>
          <Row className="show-grid">
            <Col xs={12} md={4} lg={3}>
              <Avatar
                name={this.state.name}
                avatar={this.state.avatar} />
            </Col>
            <Col xs={12} md={8} lg={9}>
              <DataShow
                name={this.state.name}
                created={this.state.created}
                updated={this.state.updated}
                bio={this.state.bio}
                location={this.state.location}
                link={this.state.link} />
            </Col>
          </Row>
        </Panel>
      </div>
    );
  }

}

export default DashboardContainer;
