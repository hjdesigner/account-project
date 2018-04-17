'use strict'
import React from 'react'
import NavAccount from 'components/nav-account'
import style from './nav.scss'

const Nav = () => (
  <nav className={style.nav}>
    <ul>
      <NavAccount text='Informações de Conta' link='/informacoes-de-conta' image='user' />
      <NavAccount text='Meus Endereços' link='/meus-endereço' image='location' />
      <NavAccount text='Meus Pedidos' link='/meus-pedidos' image='truck' />
      <NavAccount text='Meus Favoritos' link='/meus-favoritos' image='heart' />
    </ul>
  </nav>
)

export default Nav
