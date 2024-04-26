import React, { useState } from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import classNames from 'classnames';

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false);
  const btnClass = classNames(`shop-cart-button`, {active: cartOpen});

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
              <div className='shop-cart'></div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
