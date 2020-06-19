import React, { Component } from 'react';

import './App.css';
import { render } from '@testing-library/react';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';


import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
  import App from './App';
  import Create from './Create';
  import Update from './Update';
  import Delete from './Delete';
  import View from './View';
  import API from './API';
import India from './India';
class Na extends Component {


 

  
  render(){
    return (
        <div>
            <Router>
      
            <Navbar bg="light" variant="light">
    <Navbar.Brand href="/"><img src="/images/covid19.png" alt=""/></Navbar.Brand>
    <Nav className="mr-auto">
    <Nav.Link href="/api"><img src="/images/ear.gif" alt=""/></Nav.Link>
      <Nav.Link href="/in"><img src="/images/india.gif" alt=""/></Nav.Link>
      <Nav.Link href="/tips"><b>Prevention Tips</b></Nav.Link>
      <Nav.Link href="/about"><b>About</b></Nav.Link>
     
    
    </Nav>
    
  </Navbar>
      <Route exact path="/">
          <App />
          </Route>
      <Route path="/create">
          <Create />
          </Route>
      <Route path="/tips">
          <Update />
          </Route>
          <Route path="/about">
          <Delete />
          </Route>
          <Route path="/list">
          <View />
          </Route>
          <Route exact path="/api">
          <API />
          </Route>
          <Route path="/in">
          <India />
          </Route>
        
  </Router>
    </div>
);
  }
 
  
}

export default Na;
