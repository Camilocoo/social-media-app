import React, { Component } from 'react';
import EventDashbord from '../../features/event/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import {Container} from 'semantic-ui-react';






class App extends Component {
  render() {
    return (
      <div >
        <NavBar/> 
        <Container>
          <h1>Re-vents</h1>
          <EventDashbord/>
          </Container>
      </div>
    );
  }
}

export default App;

