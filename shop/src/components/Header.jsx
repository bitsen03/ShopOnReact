import React, { useState } from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import classNames from 'classnames';
import { selectAllbacketItems } from "../slices/backetSlice.js";
import { useSelector } from 'react-redux'; 

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false);
  const btnClass = classNames(`shop-cart-button`, {active: cartOpen});
  const itemsBacket = Object.values(useSelector(selectAllbacketItems))
  console.log(cartOpen)
  return (
    <header>
        <div>
            <span className='logo'>House staff</span>
            <ul className='nav'>
              <li>Про нас</li>
              <li>Контакты</li>
              <li>Кабинет</li>
            </ul>
            <FaShoppingBasket onClick={() => setCartOpen(cartOpen = !cartOpen)} className={btnClass}/>
            {cartOpen && (
              <div className='shop-cart'>
                {itemsBacket.map(({title, price}) => {
                  return (
                    <div className='item-oreder'>
                      <h3>{title}</h3>
                      <p>{price}</p>
                      <b className='delete-item'>-</b>
                    </div>
                  )
                })}
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
