import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'



class Car extends Component {


   
  render(){
    return (
      <div>
       
       <div class="row">
  <div className="column">
    <img className="a" src="/images/cou.jpg" alt="Snow" />
    <br/><br/>
    <b>Cough</b>
    <br/><br/>
  </div>
  <div className="column">
    <img className="a" src="/images/ht.jpg" alt="Forest" />
    <br/><br/>
    <b>Headache</b>  
    <br/><br/>
  
  </div>
  <div className="column">
    <img className="a" src="/images/tired.jpg" alt="Mountains"/>
    <br/><br/>
    <b>Tiredness</b> 
    <br/><br/>
  </div>
  <div className="column">
    <img className="a" src="/images/oo.jpg" alt="Mountains"/>
    <br/><br/>
    <b>Cold</b> 
    <br/><br/>
  </div>
  <div className="column">
    <img className="a" src="/images/fever.jpg" alt="Mountains"/>
    <br/><br/>
    <b>Fever</b> 
    <br/><br/>
  </div>
  <div className="column">
    <img className="a" src="/images/diff.jpg" alt="Mountains"/>
    <br/><br/>
    <b>Difficulty in breathing</b> 
    <br/><br/>
  </div>
</div>

      </div>
    );
  }
 
  
}

export default Car;
