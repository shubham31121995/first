import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import Card from 'react-bootstrap/Card'
import Sanitise from './Sanitise';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserEdit, faUserDelete, faTrashAlt,faArrowRight} from '@fortawesome/free-solid-svg-icons'

class Update extends Component {


 

  
  render(){
    return (
      <div >
       <br/>
      <h4> <b> Basic Guidelines for CoronaVirus</b></h4>
       <br/>
       <div className="container">
    <Card>
         <div className="Header">
  <Card.Header ><FontAwesomeIcon icon={faArrowRight} color="white" size="7px" /><b> Maintain social distancing</b></Card.Header>
  </div>
  <Card.Body>
  
    <Card.Text>
    You should maintain at least 1 metre distance from others. It os necessary because when someone coughs, sneezes, or speaks they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person has the disease.
    </Card.Text>
   
  </Card.Body>
</Card>
<br/><br/>
<Card>
  <div className="Header">
  <Card.Header><FontAwesomeIcon icon={faArrowRight} color="white" size="7px" /><b> Clean your hands frequently</b></Card.Header></div>
  <Card.Body>
    <Card.Text>
    You  should regularly clean your hands with dettol handwash etc. or wash our hands with soap and water. It is necessary because washing your hands with soap and water or with any other handwashes kills viruses that may be on your hands.
    </Card.Text>
   
  </Card.Body>
</Card>

<br/><br/>
<Card>
  <div className="Header">
  <Card.Header><FontAwesomeIcon icon={faArrowRight} color="white" size="7px" /><b> Avoid going to crowded places</b></Card.Header></div>
  <Card.Body>
    <Card.Text>
    You should avoid going to crowded places for now.It is necessary because people come together in crowds, you are more likely to come into close contact with someone that has COIVD-19 and it is more difficult to maintain physical distance of 1 metre (3 feet).
    </Card.Text>
   
  </Card.Body>
</Card>
<br/><br/>
<Card>
  <div className="Header">
  <Card.Header><FontAwesomeIcon icon={faArrowRight} color="white" size="7px" /><b> Wear a facemask if you are sick</b></Card.Header></div>
  <Card.Body>
    <Card.Text>
    You should wear a facemask when you are around other people (e.g., sharing a room or vehicle) and before you enter a healthcare provider’s office. If you are not able to wear a facemask (for example, because it causes trouble breathing), then you should do your best to cover your coughs and sneezes, and people who are caring for you should wear a facemask if they enter your room.
    </Card.Text>
   
  </Card.Body>
</Card>
<br/><br/>
<Card>
  <div className="Header">
  <Card.Header><FontAwesomeIcon icon={faArrowRight} color="white" size="7px" /><b> Avoid touching eyes, nose and mouth</b></Card.Header></div>
  <Card.Body>
    <Card.Text>
    Avoid touching eyes, nose and mouth. Why? Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and infect you.
    </Card.Text>
   
  </Card.Body>
</Card>
<br/><br/>
<Card>
  <div className="Header">
  <Card.Header><FontAwesomeIcon icon={faArrowRight} color="white" size="7px" /><b> If you have fever, cough and difficulty breathing, seek medical care early</b></Card.Header></div>
  <Card.Body>
    <Card.Text>
    If you have a fever, cough and difficulty breathing, seek medical attention, but call by telephone in advance if possible and follow the directions of your local health authority. Why? National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections.
    </Card.Text>
   
  </Card.Body>
</Card>

<br/><br/>
<Card>
  <div className="Header">
  <Card.Header><FontAwesomeIcon icon={faArrowRight} color="white" size="7px" /><b> Stay home and self-isolate</b></Card.Header></div>
  <Card.Body>
    <Card.Text>
    Stay home and self-isolate even with minor symptoms such as cough, headache, mild fever, until you recover. Have someone bring you supplies. If you need to leave your house, wear a mask to avoid infecting others. Why? Avoiding contact with others will protect them from possible COVID-19 and other viruses.
    </Card.Text>
   
  </Card.Body>
</Card>
</div>
      </div>
      
    );
  }
 
  
}

export default Update;
