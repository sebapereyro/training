import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var helloWorld = "Welcome to the Road to learn react";
    var user = {
      firstName: "Pablo",
      lastName: "Frias",
      age: 30
    }
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
        <p>Age: {user.age}</p>
      </div>
    );
  }
}

export default App;
