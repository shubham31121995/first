import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Table} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import {Card,CardDeck} from 'react-bootstrap'
import CardColumns from 'react-bootstrap/CardColumns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserEdit, faUserDelete, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import View from './View';



class Second extends Component {

    constructor() {
        super();
        this.state = {
        list:null,
        searchcountry:null
        }
      }
    
      componentDidMount() {
        const axios = require('axios');
        axios.get('https://corona.lmao.ninja/v2/countries')
          .then(res => {
    
            this.setState({ list: res.data })
            console.warn(this.state.list);
          }).catch(error => {
            console.error('Error', error);
          })
      }
      searchCountry = (e) => {

        const searchValue = e.target.value;
        const filteredList = this.state.list.filter((item) => {
          return searchValue !=="" ? item.country.includes(searchValue) :item;
        });
        this.setState({ list: filteredList });
    
    
      };
    
 render(){
 
    return (

      <div >
        
          
     
        <Form>
  <Form.Group controlId="formGroupEmail">
   
    <Form.Control type="Search" placeholder="Search Country" onChange={this.searchCountry.bind(this)}/>
  </Form.Group>
 
</Form>

<Link to="/list"><b>Click here to view stat in table format</b></Link>
            {
          this.state.list ?
          <div>
              <CardColumns>

            {
                    this.state.list.map((item, i) =>
<div>
<Card
       bg="light"
       text="dark"
       style={{margin:"10px"}}
       >
<Card.Img className="a" variant="top" src={item.countryInfo.flag}/>
        <Card.Body>
            <Card.Title>Country:{item.country}</Card.Title>
            <Card.Text>No of cases:{item.cases}</Card.Text>
          
            <Card.Text>No of deaths:{item.deaths}</Card.Text>
            <Card.Text>Today Deaths:{item.todayDeaths}</Card.Text>
            <Card.Text>Recovered:{item.recovered}</Card.Text>
           
            <Card.Text>Critical no of people:{item.critical}</Card.Text>
    </Card.Body> 
    </Card> 
    </div>
     )
    }
      
       </CardColumns>
       </div>

: <p>Please wait..</p>
}
      </div>
    );
  }
 
  
}

export default Second;
