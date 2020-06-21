import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Card, CardDeck } from 'react-bootstrap'
import Second from './Second'

class API extends Component {

  constructor() {
    super();
    this.state = {
      list: {},

    }
  }

  componentDidMount() {
    const axios = require('axios');
    axios.get('https://corona.lmao.ninja/v2/all')
      .then(res => {

        this.setState({ list: res.data })
        console.warn(this.state.list);
      }).catch(error => {
        console.error('Error', error);
      })
  }


  render() {
    console.warn(this.state)
    return (
      <div className="App">
        <br />

        <CardDeck>

          <Card bg="secondary" text={"white"} style={{margin:"10px"}}>
            <Card.Body>
              <Card.Title>Cases</Card.Title>
              <Card.Text>
                {this.state.list.cases}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small>Last updated  mins ago</small>
            </Card.Footer>
          </Card>
          <Card bg="danger" text={"white"} style={{margin:"10px"}}>

            <Card.Body>
              <Card.Title>Death</Card.Title>
              <Card.Text>
                {this.state.list.deaths}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small >Last updated mins ago</small>
            </Card.Footer>
          </Card>
          <Card bg="success" text={"white"} style={{margin:"10px"}}>

            <Card.Body>
              <Card.Title>Recovered</Card.Title>
              <Card.Text>
                {this.state.list.recovered}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small>Last updated minsago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
        <br /><br />
        <div className="App">
          <img src="/images/covid19.png" alt="" />
        </div>
        <br /><br />

        <Second />
      </div>
    );
  }


}

export default API;
