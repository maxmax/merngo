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
      title: [],
      beers: [],
      isToggleOn: false,
      info: []
    };
  }

  _getFilms(){
    return axios.get('https://ghibliapi.herokuapp.com/films/');
  }

  _getTitle(){
    return axios.get('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49');
  }

  _getBeers(){
    //return axios.get('https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6');
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

  handleShow(e) {
    this.setState(prevState => ({
      isToggleOn: true,
      info: e
    }));
  }

  handleClose() {
    this.setState(prevState => ({
      isToggleOn: false
    }));
  }

  render() {

    const beersidu = this.state.beers.map((el, index) => {
      const inty = (index * 20 + 10);
      const intidu = (el.ibu || 0);
      return <g  key={index}>
        <rect width={intidu + 2} height="5" y={inty}></rect>
        <text x={intidu + 20} y={inty} dy=".35em" height="20">({intidu}) { el.name }</text>
      </g>
    });

    const beersebc = this.state.beers.map((el, index) => {
      const inty = (index * 20 + 10);
      const intval = (el.ebc || 0);
      return <g  key={index} className="ebc">
        <rect width={intval + 2} height="5" y={inty}></rect>
        <text x={intval + 20} y={inty} dy=".35em" height="20">({intval}) { el.name }</text>
      </g>
    });

    const beer = this.state.beers.map((el) => {

      const intebc = (el.ebc || 0);
      const intidu = (el.ibu || 0);
      const name = (el.name || '');
      const img = (el.image_url || '');

      return <tr key={el.id} onClick={(e) => this.handleShow(el)}>
        <td>{ name }</td>
        <td>
          <img src={ img } alt={ name } width="18px" />
        </td>
        <td>{ intidu }</td>
        <td>
          { intebc }
        </td>
      </tr>
    });

    const info = (
      <Modal role="aside">
        <a onClick={(e) => this.handleClose(this)} className="close">x</a>
        <br />
        <h3>{this.state.info.name} <small>{this.state.info.first_brewed}</small></h3>
        <b className="small">{this.state.info.tagline}</b>
        <br />
        <p>{this.state.info.description}</p>
        <blockquote className="small">
          <p>{this.state.info.brewers_tips}</p>
        </blockquote>
      </Modal>
    );

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
            <Col xs={12} md={12} lg={12}>
            </Col>
          </Row>
          <table className="table table-striped" fill>
            <thead>
              <tr>
                <th>Name</th>
                <th>Icon</th>
                <th>ibu</th>
                <th>ebc</th>
              </tr>
            </thead>
            <tbody>
              {beer}
            </tbody>
          </table>
        </Panel>
        {this.state.isToggleOn ? info : null}
      </div>
    );
  }

}

export default ChartsContainer;
