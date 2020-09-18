//import React from 'react';
 import React, {Component} from "react";
//import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js' ;

class App extends Component {
  state = {
    username:"type your name" 
  };
   changeNameHandler = (event) => {
    
    this.setState({username:event.target.value})
    }

  render() { 
  return (
    <div className = "App">
      <h1>Hello React</h1>
      <UserInput changed={this.changeNameHandler} currentName= {this.state.username}></UserInput>
      <UserOutput userName={this.state.username} />
      <UserOutput userName='adam' />
      
    </div>
  );
}
}
export default App;
