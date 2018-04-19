'use strict'
import React from 'react'
import style from './showcase.scss'

const Showcase = ({ item }) => (
  <ul className={style.showcase}>
    {item.map(data =>
      <li key={data.id}>
        <a href={data.url}>
          <figure className={style.image}>
            <img src={data.image} />
          </figure>
          <div className='info'>
            <h2 className={style.title}>{data.name}</h2>
            <p className={style.de}>{data.valueDe !== '' ? `R$ ${data.valueDe}` : ''}</p>
            <p className={style.por}>R$ {data.valuePor}</p>
          </div>
        </a>
      </li>
    )}
  </ul>
)
export default Showcase
