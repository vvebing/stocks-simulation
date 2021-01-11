import React, { PureComponent } from 'react';
import './App.css';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      uuid: localStorage.getItem('stocks-simulation::uuid'),
      groupID: localStorage.getItem('stocks-simulation::groupID'),
    };
  }

  render() {
    const { uuid, groupID } = this.state;

    return (
      <div id="app">
        
      </div>
    );
  }
}
