'use strict'
import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Nav from 'views/nav'

class App extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <Router>
        <Nav />
      </Router>
    )
  }
}

export default App
