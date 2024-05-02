import React, { useState } from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import classNames from 'classnames';
import Orders from './Orders.jsx';

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
              <Orders></Orders>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
