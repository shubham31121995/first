import React, { Component } from 'react';

import './App.css';
import { render } from '@testing-library/react';

import Form from 'react-bootstrap/Form'
import { Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserEdit, faUserDelete, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import In from './In'
import {Card,Button} from 'react-bootstrap'
import Footer from './Footer';



class India extends Component {

  constructor() {
    super();
    this.state = {
      list: [],

    }
  }

  componentDidMount() {

    fetch('http://covid19-india-adhikansh.herokuapp.com/states')
      .then((res) => {

        return res.json();
      }).then((myJson) => {
        this.setState({
          list: myJson.state
        })
      })
  }

  
  render() {


    console.warn(this.state)
    return (

      <div className="App">
       
        <In/>
      
       <h2 className="ab">|Indian state Affected data</h2>
      <br/><br/>
 

<div className="tab">
     {
       this.state.list ?
         <div >
           <table className="table" cellspacing="1" cellpadding="1">
             <thead>
             <tr className="td">
                
               <th className="td">State name</th>
               <th className="td">Active</th>
               <th className="td">Cured</th>
               <th className="td">Death</th>
               <th className="td">Total</th>
              
               </tr>
             </thead>
             <tbody>
               <br/>
               <br/>
               <br/>  
               <div className="App" > <b>Please wait we are fetching data...</b>
               <img className="tig" src="/images/loa.gif" alt="First slide"/>
            </div>
             </tbody>
             {/* <tbody>
               Please
             {
                this.state.list.map((item, i) =>
                 

                <tr className="tr">
              
                <td className="td"> {item.name}</td>
                <td className="td"> {item.active}</td>
                <td className="td">{item.cured}</td>
                <td className="td">{item.death}</td>
                <td className="td">{item.total}</td>
               
              </tr>

                )
             }
             
             </tbody> */}
           </table>
          
         </div>
         : <p>Please wait..</p>
     }
      
     </div>
     <div className="right">
       <br/>
       <Card>
         <div className="Header">
  <Card.Header >
    <h4><b>
      RedDot represent the states/cities of India which is currently affected the most by covid-19</b></h4></Card.Header>
  </div>
  </Card>
       <b><br/><h2></h2></b>
       
     
       <br/><img className="rig" src="/images/IMG_20200616_165304.jpg" alt="First slide"/>
      
       
       </div>
     
     
   </div>
 

 );
}


}


export default India;