'use strict'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from 'views/header'
import Nav from 'views/nav'
import AccountInformation from 'views/account-information'
import AddressList from 'views/address-list'
import OrderHistory from 'views/order-history'
import Wishlist from 'views/wishlist'
import './sass/base.scss'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      statusNav: '',
      profile: {},
      address: [],
      historyOrder: [],
      wishlist: []
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
      if (idNav === '/meus-pedidos') {
        fetch('http://localhost:3004/OrderProduct')
          .then(response => response.json())
          .then((data) => {
            this.setState({
              historyOrder: data
            })
          })
      }
      if (idNav === '/meus-favoritos') {
        fetch('http://localhost:3004/wishlist')
          .then(response => response.json())
          .then((data) => {
            this.setState({
              wishlist: data
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
    if (url === '/meus-endereco') {
      fetch('http://localhost:3004/address')
        .then(response => response.json())
        .then((data) => {
          this.setState({
            statusNav: 'hide',
            address: data
          })
        })
    }
    if (url === '/meus-pedidos') {
      fetch('http://localhost:3004/OrderProduct')
        .then(response => response.json())
        .then((data) => {
          this.setState({
            statusNav: 'hide',
            historyOrder: data
          })
        })
    }
    if (url === '/meus-favoritos') {
      fetch('http://localhost:3004/wishlist')
        .then(response => response.json())
        .then((data) => {
          this.setState({
            statusNav: 'hide',
            wishlist: data
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
          <Route exact path='/meus-pedidos' render={(props) => (<OrderHistory historyOrder={this.state.historyOrder} />)} />
          <Route exact path='/meus-favoritos' render={(props) => (<Wishlist wishlist={this.state.wishlist} />)} />
        </div>
      </Router>
    )
  }
}

export default App
