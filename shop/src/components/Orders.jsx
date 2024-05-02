import Order from "./Order"
import { selectAllbacketItems } from "../slices/backetSlice.js";
import { useSelector } from 'react-redux';
export default function Orders () {
    let resultPrice = 0;
    const itemsBacket = Object.values(useSelector(selectAllbacketItems));
    itemsBacket.forEach(el => resultPrice += Number(el.price))
    return (
        <div className='shop-cart'>
        {itemsBacket.length > 0 ? itemsBacket.map((item) => {
          return (
            <Order key={item.id}>{item}</Order>
          )
        }) : <h3>Товаров нет</h3>}
        <button className="buy-btn">Оформить заказ за {resultPrice}$</button>
      </div>
    )
}