import React, { useContext } from 'react';
import { ItemsContext } from '../App.js'; 
import Item from './Item.jsx';

export default function Items() {
  const {items} = useContext(ItemsContext)

  return (
    <main>
      {items.map(item => (
        <Item key={item.id}>{item}</Item>
      ))}
    </main>
  )
}
