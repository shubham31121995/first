import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Card, CardDeck } from 'react-bootstrap'


class In extends Component {

  constructor() {
    super();
    this.state = {
    list:{},

    }
  }

    componentDidMount() {

      fetch('https://covid2019-api.herokuapp.com/country/India')
        .then((res) => {
  
          return res.json();
        }).then((myJson) => {
          this.setState({
list: myJson.India
          })
        })
    }
  


  render() {
    console.warn(this.state)
    return (
      <div className="App">
        <br />
        <div> <h2 className="ab"><b>|India covid 19 analysis</b></h2></div> 
        <br/>
      
        <CardDeck>

          <Card bg="secondary" text={"white"}>
            <Card.Body>
              <Card.Title>Cases</Card.Title>
              <Card.Text>
                {this.state.list.confirmed}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small>Last updated  mins ago</small>
            </Card.Footer>
          </Card>
          <Card bg="danger" text={"white"}>

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
          <Card bg="success" text={"white"}>

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
      
        <br /><br />
       

      </div>
    );
  }


}

export default In;
