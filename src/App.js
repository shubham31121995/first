import React, { Component } from 'react';

import './App.css';
import { render } from '@testing-library/react';


import {Carousel} from 'react-bootstrap'
import Car from './Car';
import Footer from './Footer'
import Sanitise from './Sanitise';

import API from './API';



import View from './View';



class App extends Component {
  render(){
    return (
        
      <div className="App">
      
     
      
      <Carousel>
 <Carousel.Item>
   <img className="App1" src="/images/85.jpg"
     alt="First slide"
   />
   
 
 </Carousel.Item>
 <Carousel.Item>
   <img className="App1" src="/images/8.jpg"
     alt="First slide"
   />
   
 
 </Carousel.Item>
   <Carousel.Item>
   <img className="App1" src="/images/10.png"
     alt="First slide"
   />
  
 </Carousel.Item>
 
 <Carousel.Item>
   <img className="App1" src="/images/11.jpg"
     alt="First slide"
   />
   
 
 </Carousel.Item>
 
 
 <Carousel.Item>
   <img className="App1"
   
    
     src="/images/6.png"
     alt="First slide"
   />
 </Carousel.Item>
 
</Carousel>
<br/>
<h2><b>Corona Virus symptoms</b></h2>
  <Car/>

  <br/>
  <br/>
  <br/>
<h2><b>World Health Organization Guidelines for Coronavirus</b></h2>
<br/>
 <Sanitise/>
 <Footer/>
  
     </div>
);
  }
 
  
}

export default App;