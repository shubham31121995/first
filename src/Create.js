import React, { Component } from 'react';

import './App.css';
import { render } from '@testing-library/react';
import { Form } from 'react-bootstrap';





class Create extends Component {
  render(){
    return (
      <div className="App">
      
     <h2>Create</h2>
      <br/>
      <div className="container">
      <Form>
        <input placeholder="id" /><br/><br/>
        <input placeholder="Firstname" /><br/><br/>
        <input placeholder="Lastname" /><br/><br/>
        <input placeholder="Age" /><br/><br/>
       <button class="button">Submit</button>

 </Form>
 </div>
    
      </div>
    );
  }
 
  
}

export default Create;
