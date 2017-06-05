import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import Thumb from '../components/Thumb';
import Circle from '../components/Circle';
import Modal from '../components/Modal';

import classNames from 'classnames/bind';
import styles from '../css/components/dashboard';
const cx = classNames.bind(styles);

class DashboardContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isToggleOn: false,
      info: []
    };
  }

  componentDidMount() {
    axios
      .get('https://ghibliapi.herokuapp.com/films/')
      .then(({ data })=> {
      	this.setState({
          data: data
        });
      })
      .catch((err)=> {})
  }

  handleClick(int) {
    this.setState(prevState => ({
      isToggleOn: true,
      info: int
    }));
  }

  handleClose() {
    this.setState(prevState => ({
      isToggleOn: false
    }));
  }

  render() {

    if (!this.state.data) { return (<p>Dashboard Loading...</p>); }

    const child = this.state.data.map((el, index) => {
      return <Col xs={12} md={4} lg={4}  key={index}>
        <Thumb className="films">
          <h4>{ el.title }</h4>
          <small>{ el.director }</small>
          <small> | { el.release_date}</small>
          <br />
          <br />
          <a onClick={(e) => this.handleClick(el.description)}>
            <Circle rate={el.rt_score} title="RT Score" />
          </a>
        </Thumb>
      </Col>
    });

    const info = (
      <Modal class="info">
        <a onClick={(e) => this.handleClose(this)} className="close">x</a>
        <br />
        <p>{this.state.info}</p>
      </Modal>
    );

    return (
      <div>
        <Panel header={'Dashboard'} footer="Panel footer" className={cx('panel-films')}>
          <Row className={cx('films-grid')} fill>
            {child}
          </Row>
        </Panel>
        {this.state.isToggleOn ? info : null}
      </div>
    );
  }

}

export default DashboardContainer;
