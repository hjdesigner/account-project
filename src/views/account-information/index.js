'use strict'
import React from 'react'
import Profile from 'components/profile'
import style from './account-information.scss'

const AccountInformation = ({ profile }) => (
  <div className={style.accountInformation}>
    <h1>Informações da conta</h1>
    <Profile item={profile} />
  </div>
)

export default AccountInformation
