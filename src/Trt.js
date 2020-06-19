
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';



class Trt extends Component {


handleClick(event){

    const axios =require('axios');
    axios.get('http://localhost:8081/practiceproject/api/')
    .then(res=>{
      console.log(res.data);
    }).catch(error=>{
      console.error('Error',error);
    }) 
  }
  render(){
    return (
      <div className="App">
       <b>React is awesomeee!n!!!</b><br/>
       <button onClick={this.handleClick.bind(this)}>Get Countries</button>
     
      </div>
    );
  }
 
  
}
export default Trt;