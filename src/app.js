'use strict'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from 'views/header'
import Nav from 'views/nav'
import AccountInformation from 'views/account-information'
import AddressList from 'views/address-list'
import './sass/base.scss'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      statusNav: '',
      profile: {},
      address: []
    }
    this.handleClickHeader = () => {
      this.setState({
        statusNav: ''
      })
    }
    this.handleClickStatusNav = (e) => {
      var idNav = e.target.closest('li').getAttribute('data-id')
      if (idNav === '/informacoes-de-conta') {
        fetch('http://localhost:3004/profile')
          .then(response => response.json())
          .then((data) => {
            this.setState({
              profile: data[0]
            })
          })
      }
      if (idNav === '/meus-endereco') {
        fetch('http://localhost:3004/address')
          .then(response => response.json())
          .then((data) => {
            this.setState({
              address: data
            })
          })
      }

      if (this.state.statusNav !== 'hide') {
        this.setState({
          statusNav: 'hide'
        })
      }
    }
  }
  componentWillMount () {
    const url = window.location.pathname

    if (url === '/informacoes-de-conta') {
      fetch('http://localhost:3004/profile')
        .then(response => response.json())
        .then((data) => {
          this.setState({
            statusNav: 'hide',
            profile: data[0]
          })
        })
    }
  }
  render () {
    return (
      <Router>
        <div className='container'>
          <Header handleClick={this.handleClickHeader} />

          <Route exact path='/' render={(...props) => (<Nav handleClick={this.handleClickStatusNav} statusNav={this.state.statusNav} />)} />
          <Route exact path='/informacoes-de-conta' render={(props) => (<AccountInformation profile={this.state.profile} />)} />
          <Route exact path='/meus-endereco' render={(props) => (<AddressList list={this.state.address} />)} />
        </div>
      </Router>
    )
  }
}

export default App
