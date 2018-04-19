'use strict'
import React from 'react'
import Address from 'components/address'
import style from './address-list.scss'

const AddressList = ({ list }) => (
  <div className={style.addressList}>
    <h1>Meus Endereço</h1>
    <Address item={list} />
  </div>
)

export default AddressList
