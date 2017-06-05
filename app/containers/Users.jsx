import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UserList from '../components/UserList';
import load from '../utils/load';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import ActiveUser from '../components/ActiveUser';
import Searchbar from '../components/Searchbar';
import Toolbar from '../components/Toolbar';

class UsersContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      active: 0,
      term: ''
    };

    this.loadData();
  }

  loadData() {
    load(this.props.data).then(users => {
      this.initialData = JSON.parse(users);
      this.setState({
        data: this.initialData
      });
    });
  }

  updateData(config) {
    this.setState(config);
  }

  render() {

    console.log("state:", this.state);

    const header = (
      <div>
        <Row>
          <Col xs={12} md={2} lg={2}>
            <h3 className="panel-title">Users</h3>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <Searchbar
              term={this.state.term}
              data={this.initialData}
              update={this.updateData.bind(this)}
            />
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Toolbar
              initialData={this.initialData}
              data={this.state.data}
              update={this.updateData.bind(this)}
            />
          </Col>
        </Row>
      </div>
    );

    const listStyle = {
      height: '490px',
      overflow: 'auto'
    };

    return (
      <div>
        <Row>
          <Col xs={12} md={4} lg={4}>
            <ActiveUser data={this.state.data} active={this.state.active} />
          </Col>
          <Col xs={12} md={8} lg={8}>
            <Panel header={header}>
              <div style={listStyle} fill>
                <UserList data={this.state.data} update={this.updateData.bind(this)} />
              </div>
            </Panel>
          </Col>
        </Row>
      </div>
    );
  }

}

export default UsersContainer;
