'use strict'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from './dafiti-logo.png'
import style from './header.scss'

const Header = () => (
  <header className={style.header}>
    <figure className={style.logo}>
      <Link to='/'>
        <img src={logo} />
      </Link>
    </figure>
  </header>
)
export default Header
