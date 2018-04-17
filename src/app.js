'use strict'
import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from 'views/header'
import Nav from 'views/nav'
import './sass/base.scss'

class App extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <Router>
        <div className='container'>
          <Header />
          <Nav />
        </div>
      </Router>
    )
  }
}

export default App
