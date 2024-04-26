import React, { useContext} from 'react';
import { useSelector } from 'react-redux';
import { ItemsContext } from '../App.js'; 
import Item from './Item.jsx';
import { selectAllProducts } from '../slices/productsSlice.js';

export default function Items() {
  const items = useSelector(selectAllProducts);
  
  return (
    <main>
      {items.map(item => (
        <Item key={item.id}>{item}</Item>
      ))}
    </main>
  );
}
