import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import Chart from '../components/Chart';
import Modal from '../components/Modal';

class ChartsContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      page: '1',
      perPage: '10'
    };
  }

  _getData(){
    return axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=20');
  }

  //TODO: .catch error
  componentDidMount() {
    axios.all([this._getData()])
      .then(axios.spread((v, beers) => {
        this.setState({
          data: v.data,
        });
      }));
  }

  render() {

    const beersidu = this.state.data.map((el, index) => {
      const inty = (index * 20 + 10);
      const intidu = (el.ibu || 0);
      return <g  key={index}>
        <rect width={intidu + 2} height="5" y={inty}></rect>
        <text x={intidu + 20} y={inty} dy=".35em" height="20">({intidu}) { el.name }</text>
      </g>
    });

    const beersebc = this.state.data.map((el, index) => {
      const inty = (index * 20 + 10);
      const intval = (el.ebc || 0);
      return <g  key={index} className="ebc">
        <rect width={intval + 2} height="5" y={inty}></rect>
        <text x={intval + 20} y={inty} dy=".35em" height="20">({intval}) { el.name }</text>
      </g>
    });

    return (
      <div>
        <Panel header={'Foods'}>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <Chart title="A bar chart showing beers idu">
                {beersidu}
              </Chart>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Chart title="A bar chart showing beers ebc">
                {beersebc}
              </Chart>
            </Col>
          </Row>
        </Panel>
      </div>
    );
  }

}

export default ChartsContainer;
