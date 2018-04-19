'use strict'
import React from 'react'
import Showcase from 'components/showcase'
import style from './wishlist.scss'

const Wishlist = ({wishlist}) => (
  <div className={style.wishlist}>
    <h1>Meus Favoritos</h1>
    <Showcase item={wishlist} />
  </div>
)

export default Wishlist
