/* REACT-ROUTER
    Es una libreria de react, que nos permiter enrutar

*/

// instalacion
 	npm i react-router-dom

// inclusion
  import React, { Component } from 'react'
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  export default class App extends Component {
    render() {
      return (
        <div>
          <h1 className="text-5xl mt-20">Hello World</h1>
        </div>
      )
    }
  }