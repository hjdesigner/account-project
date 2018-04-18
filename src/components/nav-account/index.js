'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Icon from '../icon'
import style from './nav-account.scss'

const NavAccount = ({ text, link, image, handleClick }) => (
  <li className={style.item} data-id={link}>
    <Link to={link} onClick={handleClick}>
      <Icon name={image} />
      {text}
    </Link>
  </li>
)

NavAccount.defaultProps = {
  text: 'Item',
  link: '/',
  image: 'link'
}

NavAccount.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default NavAccount
