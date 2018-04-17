'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import imageDefault from '../../images/icon-default.png'

const NavAccount = ({ text, link, image }) => (
  <li>
    <img src={image} />
    <Link to={link}>{text}</Link>
  </li>
)

NavAccount.defaultProps = {
  text: 'Item',
  link: '/',
  image: imageDefault
}

NavAccount.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default NavAccount
