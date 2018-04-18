'use strict'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from './dafiti-logo.png'
import style from './header.scss'

const Header = ({ handleClick }) => (
  <header className={style.header}>
    <figure className={style.logo}>
      <Link to='/' onClick={handleClick}>
        <img src={logo} />
      </Link>
    </figure>
  </header>
)
export default Header
