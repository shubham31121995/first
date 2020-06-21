import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'



class Sanitise extends Component {


   
  render(){
    return (
      <div className="App">
       
       <div className="row">
  <div className="column">
    <img className="a" src="/images/hand.png" alt="Snow" />
    <br/>
    <b><br/>wash your hands regularly with soap<br/> and water for atleast 20 seconds</b>
 
  </div>
  <div className="column">
    <img className="a" src="/images/mask.jpg" alt="Forest" />
    <b><br/>cover your nose and mouth</b><br/><b> with mask when out in public</b>
  
    
  
  </div>
  <div className="column">
    <img className="a" src="/images/avoid.jpg" alt="Mountains"/>
  <b>  <br/>Avoid close contact with <br/> perople who are sick</b>
  </div>
  <br/><br/>
  <div className="column">
    <img className="a" src="/images/doctor.jpg" alt="Mountains"/>
   <br/> <b>If you have fever,cold etc.<br/> seek medical help early</b> 
  </div>
  <br/><br/>
  <div className="column">
    <img className="a" src="/images/home.jpg" alt="Mountains"/>
    <b><br/>Stay home and self isolate yourself<br/>from others if you feel unwell</b>
  </div>
  <br/><br/>
  <div className="column">
    <img className="a" src="/images/tv.jpg" alt="Mountains"/>
    <b><br/>Stay informed by watching news<br/> and follow recommended practices</b>
  </div>
  <br/><br/>
</div>

      </div>
    );
  }
 
  
}

export default Sanitise;
