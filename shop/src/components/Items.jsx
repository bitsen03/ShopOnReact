import React, { useContext} from 'react';
import { useSelector } from 'react-redux';
import Item from './Item.jsx';
import { selectAllProducts } from '../slices/productsSlice.js';
import CategoriesContext from './CategoriesContext.jsx';

export default function Items() {
  const items = useSelector(selectAllProducts);
  const {category} = useContext(CategoriesContext);
  const filteredItems = items.filter(item => item.category === category || category === 'all');

  return (
    <main>
      {filteredItems.map(item => (
        <Item key={item.id}>{item}</Item>
      ))}
    </main>
  );
}
