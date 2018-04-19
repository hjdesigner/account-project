'use strict'
import React from 'react'
import style from './order-product.scss'

const OrderProduct = ({item}) => (
  <ul className={style.orderProduct}>
    {item.map((data, index) =>
      <li key={index}>
        <figure className={style.image} >
          <img src={data.image} />
        </figure>
        <div className={style.info}>
          <p className={style.name}>{data.name}</p>
          <p className={style.description}>{data.description}</p>
          <p className={style.date}>{data.date}</p>
        </div>
      </li>
    )}
  </ul>
)

export default OrderProduct
