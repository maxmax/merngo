import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import Chart from '../components/Chart';

class ChartsContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      title: [],
      beers: []
    };
  }

  _getFilms(){
    return axios.get('https://ghibliapi.herokuapp.com/films/');
  }

  _getTitle(){
    return axios.get('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49');
  }

  _getBeers(){
    return axios.get('https://api.punkapi.com/v2/beers');
  }

  componentDidMount() {
    axios.all([this._getFilms(), this._getTitle(), this._getBeers()])
      .then(axios.spread((films, title, beers) => {
        this.setState({
          data: films.data,
          title: title.data,
          beers: beers.data
        });
      }));
  }

  render() {

    const beersidu = this.state.beers.map((el, index) => {
      const inty = (el.id * 20);
      const intidu = (el.ibu || 0);
      return <g  key={index}>
        <rect width={intidu + 2} height="5" y={inty}></rect>
        <text x={intidu + 20} y={inty} dy=".35em" height="20">({intidu}) { el.name }</text>
      </g>
    });

    const beersebc = this.state.beers.map((el, index) => {
      const inty = (el.id * 20);
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
