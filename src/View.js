import React, { Component } from 'react';

import './App.css';
import { render } from '@testing-library/react';
import { Table } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserEdit, faUserDelete, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'




class View extends Component {

  constructor() {
    super();
    this.state = {
      list: null,
      
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

  render() {

    
    console.warn(this.state)
    return (
     
    <div>
        
        
         <div> <h2 className="ab">|Countries Affected</h2></div>
         
         <Form>
  <Form.Group controlId="formGroupEmail">
   
    <Form.Control type="Search" placeholder="Search Country" onChange={this.searchCountry.bind(this)}/>
  </Form.Group>
 
</Form>
        
        {
          this.state.list ?
         
            <div className="App">
           
              <Table striped bordered hover >
                <thead>
                  <tr>
                    <th>Country</th>
                    <th>Cases</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                    <th>No of critical people</th>
                   
                  </tr>
                </thead>
                <tbody>
                {
                  

                   this.state.list.map((item, i) =>
                 

                   <tr>
                      
                   <td><p><img className="Rt" src={item.countryInfo.flag}/></p> <p>{item.country} </p></td>
                   <td> {item.cases}</td>
                   <td> {item.recovered}</td>
                   <td>{item.deaths}</td>
                   <td>{item.critical}</td>
                  
                 </tr>

                   )
                }
                </tbody>
              </Table>
            </div>
            : <p>Please wait..</p>
        }
      </div>
    );
  }


}


export default View;