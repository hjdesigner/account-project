'use strict'
import React, { Component } from 'react'
import style from './test.scss'

class App extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <h1 className={style.title}>teste</h1>
    )
  }
}

export default App
