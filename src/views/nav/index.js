'use strict'
import React from 'react'
import NavAccount from 'components/nav-account'
import style from './nav.scss'

const Nav = ({ handleClick, statusNav }) => (
  <nav className={`${style.nav} ${statusNav === 'hide' ? style.hide : ''}`}>
    <ul>
      <NavAccount text='Informações de Conta' link='/informacoes-de-conta' image='user' handleClick={handleClick} />
      <NavAccount text='Meus Endereços' link='/meus-endereco' image='location' handleClick={handleClick} />
      <NavAccount text='Meus Pedidos' link='/meus-pedidos' image='truck' handleClick={handleClick} />
      <NavAccount text='Meus Favoritos' link='/meus-favoritos' image='heart' handleClick={handleClick} />
    </ul>
  </nav>
)

export default Nav
