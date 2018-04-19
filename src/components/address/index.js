'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import style from './address.scss'

const Address = ({ item }) => (
  <ul className={style.address}>
    {item.map((date, index) =>
      <li key={index} className={style.item}>
        <h2 className={style.title}>{date.title}</h2>
        <p className={style.text}>{date.name}</p>
        <p className={style.text}>{date.street}, {date.number}{date.complement !== '' ? ` - ${date.complement}` : ''}</p>
        <p className={style.text}>{date.neighborhood}</p>
        <p className={style.text}>{date.state} - {date.city}</p>
        <p className={style.text}>{date.zipeCode}</p>
      </li>
    )}
  </ul>
)
Address.propTyes = {
  item: PropTypes.array.isRequired
}

export default Address
