import React, { useContext} from 'react';
import { useSelector } from 'react-redux';
import Item from './Item.jsx';
import { selectAllProducts } from '../slices/productsSlice.js';

export default function Items() {
  const items = useSelector(selectAllProducts);
  // const chouseCategory = items.filter(item => item.category === category)
  return (
    <main>
      {items.map(item => (
        <Item key={item.id}>{item}</Item>
      ))}
    </main>
  );
}
