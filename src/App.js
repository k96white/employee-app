import React, { Component } from 'react'
import Navbar from './components/Navbar';

import './App.css';
import GetEmployee from './components/GetEmployee';
import CreateEmployee from './components/CreateEmployee';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      
    }
  }
  
  
  render() {
    return (
      <div className="App">
          <Navbar /> <br/>
          <GetEmployee /> 
          <CreateEmployee />
      </div>
    )
  }
}



