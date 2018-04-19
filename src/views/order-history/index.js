'use strict'
import React from 'react'
import OrderProduct from 'components/order-product'
import style from './order-history.scss'

const OrderHistory = ({ historyOrder }) => (
  <div className={style.orderHistory}>
    <h1>Meus Pedidos</h1>
    <OrderProduct item={historyOrder} />
  </div>
)

export default OrderHistory
