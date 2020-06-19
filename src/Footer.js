import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Form } from 'react-bootstrap';



class Footer extends Component {



  render() {
    return (
      <div className="footer">

        <div className="footer-content">

          <div className="row md-2">
     
            <div className="col-md-6 text-md-left text-center">
            <br/>
            <img src="/images/covid19.png" alt=""/>
              <ul>
                <br />
                <li>Covid19.com is the website which shows the data<br/> of the affected 
                  coronavirus patient all around the <br/> Globe till the curret date.
                </li>
                <br/>
                <li>Contact Number:<b className="ab"> 9923381188 </b></li>
                <li>Email Id: <b className="ab">shubhamoza1995@gmail.com</b></li>
              </ul>
            </div>
            <div className="m-0 text-md-left text-center">
              <br/>
              <h3><b>Contact Us</b></h3>

              <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
   
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Suggestions</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  <button class="button">Submit</button>


</Form>
              <br/>
              <p class="mb-0">Designed &amp; Developed by <b className="ab"> Shubham oza</b></p>
            </div>

          </div>

<br/>
          <p class="m-0 text-md-left text-center"><strong>Note:</strong>Data Sources are based on Various Websites, data accuracy may be affected. We are continuously monitoring related Websites, for regular updates on cases counts.</p>

        </div>





      </div>
    );
  }


}

export default Footer;
