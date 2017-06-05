import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import Chart from '../components/Chart';
import Modal from '../components/Modal';

class TablesContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      page: '1',
      perPage: '10',
      isToggleOn: false,
      info: []
    };
  }

  _getData(){
    //return axios.get('https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6');
    return axios.get('https://api.punkapi.com/v2/beers' + '?page=' + this.state.page + '&per_page=' + this.state.perPage);
  }

  //TODO: .catch error
  componentDidMount() {
    axios.all([this._getData()])
      .then(axios.spread((data) => {
        this.setState({
          data: data.data,
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

    if (!this.state.data) { return (<p>Loading Beers list...</p>); }

    const beer = this.state.data.map((el) => {

      //if (!el) { return (<p>Loading...</p>); }

      const intebc = (el.ebc || 0);
      const intidu = (el.ibu || 0);
      const name = (el.name || '');
      const img = (el.image_url || '');

      return <tr key={el.id} >
        <td>
          <button
            type="button"
            className="btn btn-link"
            onClick={(e) => this.handleShow(el)}
          >
            <span className="glyphicon glyphicon-chevron-right pointer"></span>
          </button>
        </td>
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
        <Panel header={'Beers list'}>
          <table className="table table-striped" fill>
            <thead>
              <tr>
                <th width="20px"></th>
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

export default TablesContainer;
