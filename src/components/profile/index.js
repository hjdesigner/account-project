'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import style from './profile.scss'

const Profile = ({ item }) => (
  <ul className={style.profile}>
    <li className={style.item}>
      <p className={style.title}>Nome:</p>
      <p className={style.text}>{item.name}</p>
    </li>
    <li className={style.item}>
      <p className={style.title}>Sobrenome:</p>
      <p className={style.text}>{item.lastname}</p>
    </li>
    <li className={style.item}>
      <p className={style.title}>E-mail:</p>
      <p className={style.text}>{item.email}</p>
    </li>
    <li className={style.item}>
      <p className={style.title}>Sexo:</p>
      <p className={style.text}>{item.sex}</p>
    </li>
    <li className={style.item}>
      <p className={style.title}>CPF:</p>
      <p className={style.text}>{item.cpf}</p>
    </li>
    <li className={style.item}>
      <p className={style.title}>Data de Nascimento:</p>
      <p className={style.text}>{item.birthDate}</p>
    </li>
    <Link to='/edit-profile' className={style.edit}>
      Editar informações
    </Link>
  </ul>
)

Profile.propTypes = {
  item: PropTypes.object.isRequired
}

export default Profile
